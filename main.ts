controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(4, 500)
})
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
let codey = sprites.create(assets.image`codey`, SpriteKind.Player)
