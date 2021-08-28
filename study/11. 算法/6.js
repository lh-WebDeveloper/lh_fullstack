// 小美在数轴上放置了若干个机器人，这些机器人每到整数时刻，就会检查是否和其他机器人重合。如果重合，它就会原地爆炸。

// 这些机器人的移动速度均为 1 。举例来说，如果一个机器人初始位于点3，然后它的方向是向右的，则时刻1会位于点4，时刻2会位于点5。

// 小美现在给小团这样一个任务：小美将给出所有机器人的初始位置和初始朝向。小团的任务是判断每个机器人的爆炸时刻。
// 当然，如果有一些机器人永远不会爆炸，则输出-1。

// 小团向你求助。你能帮帮小团吗？

// 注意事项1：一个机器人爆炸了之后，就不会再继续存在在这个数轴上。

// 举例来说，如果有三个机器人，一个位于位置0，向右，一个位于位置2，向右，一个位于位置4，向左。
// 则时刻1的时候，后两个机器人会在位置3相遇并发生爆炸，此后第一个机器人和第三个机器人不会在时刻2继续爆炸（因为此时已经不存在第三个机器人了）

// 注意事项2：请注意，只有整数时刻机器人才会检查重合。

// 举例来说，如果有两个机器人，一个位于位置1，向右，一个位于位置2，向左，则它们并不会在整数时刻重合。
// 因此它们两个不存在相遇爆炸。

// 注意事项3：保证机器人初始时刻不会重叠。换句话说，不存在在时刻0就立刻爆炸的机器人。
function timeB(n, arr) {
    arr.sort((a, b) => a[0]-b[0]);
    let left = [];
    let right = [];
    let obj = {};
    for(let i = 0; i < n; i++) {
        if(arr[i][1] == 'L') {
            left.push(arr[i][0])
        } else {
            right.push(arr[i][0])
        }
    }
    for(let i = 0; i < left.length; i++) {
        console.log(i, right);
        let j = reI(left[i], right);
        console.log(j);
        if(j == -1) {
            obj[left[i]] = -1;
        } else {
            if((left[i] - right)%2 ==0 ) {
                let num = (left[i] - right)/2
                obj[left[i]] = num;
                obj[right[j]] = num;
            } else {
                obj[left[i]] = -1;
                obj[right[j]] = -1;
            }
            right.splice(j, 1);
        }
    }
    if(right.length > 0) {
        for(let i = 0; i < right.length; i++) {
            obj[right[i]] = -1;
        }
    }
    function reI(num, right) {
        if(right[0] > num) return -1;
        let len = right.length;
        let min = num - right[0];
        let res = 0
        for(let j = 0; j < len; j++) {
            if(num - right[j] < min && right[j] < num) {
                res = j
            }
        }
        let arr = right.splice(0, res+1);
        for(let i = arr.length; i >=0; i--) {
            if(arr[i] % 2 == 0) {
                res = i;
            }
        }
        return res;
    }
    console.log(obj)
}

timeB(10, [[94, 'R'], [74, 'L'], [90, 'L'], [75, 'R'], [37, 'R'], [99, 'R'], [62, 'R'], [4, 'L'], [92, 'L'], [44, 'R']])
