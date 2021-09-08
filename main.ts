controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curBlock.y -= 16;
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical == true) {
        curBlock.setImage(assets.image`4BlockH`)
        vertical = false
    } else {
        curBlock.setImage(assets.image`4BlockV`)
        vertical = true
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vertical) {
        testBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
    } else {
        testBlock = sprites.create(assets.image`4BlockH`, SpriteKind.Player)
    }
    testBlock.x = curBlock.x
    testBlock.y = curBlock.y
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curBlock.x -= 16;
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    curBlock.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    curBlock.y += 16
})
let testBlock: Sprite = null
let vertical = false
let curBlock: Sprite = null
vertical = true
curBlock = sprites.create(assets.image`4BlockV`, SpriteKind.Player)
curBlock.x = 8
curBlock.y = 28
scene.setBackgroundImage(assets.image`bg`)
