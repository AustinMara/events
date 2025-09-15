controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(4, 500)
})
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
let codey = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f f f f f f . . f f f f f f . 
    . f 6 6 6 6 6 f f 6 6 6 6 6 f . 
    . f 6 f 1 6 6 6 6 6 6 f 1 6 f . 
    . f 6 f f 6 f 6 6 f 6 f f 6 f . 
    . f 6 6 6 6 6 f f 6 6 6 6 6 f . 
    . f f f f f f f f f f f f f f . 
    . . . . . . f 4 4 f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . f f f 6 4 6 4 6 4 f f f . . 
    . f . . f 4 6 4 6 4 6 f . . f . 
    6 6 6 . f f f f f f f f . 6 6 6 
    6 . 6 . f 6 6 6 6 f . . . 6 . 6 
    . . . . f 4 4 4 4 4 f . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . 2 4 . . 4 2 . . . . . 
    `, SpriteKind.Player)
