import k from '../kaboom'

const {
  add,
  area,
  cursor,
  height,
  loadSprite,
  origin,
  pos,
  rgb,
  scale,
  sprite,
  text,
  time,
  vec2,
  wave,
  width
} = k

loadSprite('kaboom', 'kaboom.png')

export default function () {
  add([
    sprite('kaboom'),
    pos(width() / 2, height() / 2 - 120),
    scale(2),
    origin('center')
  ])

  const btn = add([
    text('View Documentation', { size: 32 }),
    pos(width() / 2, height() / 2 + 50),
    area(),
    scale(1),
    origin('center')
  ])

  btn.onClick(() => window.open('https://kaboomjs.com/', '_blank'))

  btn.onUpdate(() => {
    if (btn.isHovering()) {
      const t = time() * 6
      btn.color = rgb(
        wave(0, 255, t),
        wave(0, 255, t + 2),
        wave(0, 255, t + 4)
      )
      btn.scale = vec2(1.2)
      cursor('pointer')
    } else {
      btn.scale = vec2(1)
      btn.color = rgb()
      cursor('default')
    }
  })
}
