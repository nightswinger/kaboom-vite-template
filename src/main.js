import k from './kaboom'
import HelloWorld from './scenes/HelloWorld'

const { go, scene } = k

scene('game', HelloWorld)
go('game')
