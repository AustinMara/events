
# EVENTS! 
### @explicitHints true @showdialog 
In this lesson we are learning about **events**!

Codey what are events?

🤖: Events are what you use to make things happen.

```template
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
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
```

---

## Button Events

If you look to the right you'll see Codey floating peacefully in space. Let's ruin his moment!

We can see an empty ``||variables(controller):on [A] button [pressed] ||`` container in the workspace. <br>

Let's see what happens when we add a ``||variables(scene): camera shake by [4] pixels for [500] ms ||`` to the container. 

~hint What is a container?

---

🤖: A container is something you put stuff in! <br> 
For example: last night I put my leftover Codey's Classic Oil and Metal Shaving Tacos&copy; in a container so I could have leftovers today! <br>
A code container is the same thing but less delicious!
hint~

---