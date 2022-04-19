// 你和你朋友面前有一堆糖果，轮流进行自己的回合

// 每一回合轮到的人可以拿掉 1 - 3 颗糖果，拿掉最后一颗糖果的人获胜

// 你作为先手，假设糖果数量为 n，请编写一个函数来判断你是否可以赢得游戏

// 可以赢，返回 true，否则返回 false

function canWin(n) {
    // write code here
    // 以4的倍数进行判断
    if(n%4 == 0){
        return false
    }else{
        return true
    }
}
console.log(canWin(10))