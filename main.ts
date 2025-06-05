player.onChat("Shell", function () {
    DownLv = -1
    blocks.fill(
    MyCube,
    positions.add(
    Central,
    pos(Xm / 2, DownLv, Zm / 2)
    ),
    positions.add(
    Central,
    pos(Xm / -2, DownLv, Zm / -2)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.add(
    Central,
    pos(Xm / 2, DownLv - 1, Zm / 2)
    ),
    positions.add(
    Central,
    pos(Xm / -2, MaxLevel * -1, Zm / -2)
    ),
    FillOperation.Replace
    )
    blocks.fill(
    MyCube,
    positions.add(
    Central,
    pos(Xm / 2, MaxLevel * -1 - 1, Zm / 2)
    ),
    positions.add(
    Central,
    pos(Xm / -2, MaxLevel * -1 - 1, Zm / -2)
    ),
    FillOperation.Replace
    )
})
player.onChat("Solid ", function () {
    DownLv = -1
    for (let index = 0; index < MaxLevel; index++) {
        blocks.fill(
        MyCube,
        positions.add(
        Central,
        pos(Xm / 2, DownLv, Zm / 2)
        ),
        positions.add(
        Central,
        pos(Xm / -2, DownLv, Zm / -2)
        ),
        FillOperation.Replace
        )
        DownLv += -1
    }
})
let DownLv = 0
let MyCube = 0
let Central: Position = null
let Zm = 0
let Xm = 0
let MaxLevel = 0
MaxLevel = 4
Xm = 11
Zm = 11
player.say("歡迎使用殼/實體建造器")
player.say("X 方向寬" + Xm)
player.say("Z 方向寬" + Zm)
player.say("結構高度" + MaxLevel)
player.say("石頭是 #" + CHISELED_SANDSTONE + "  @  " + blocks.nameOfBlock(CHISELED_SANDSTONE))
Central = player.position()
player.say(Central)
MyCube = CHISELED_SANDSTONE
