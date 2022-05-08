// 使用 requestAnimationFrame 实现 setTimeout 和 setInterval 的API

var rid = requestAnimationFrame(fn); // 相当于 var tid = setTimeout(fn, 1000/60)
cancelAnimationFrame(rid); // 相当于 clearTimeout(tid)

参考格式
// export const setTimeout = (fn: Function, timeout?: number):number => {}
// export const setInterval = (fn: Function, timeout?: number):number => {}
// export const clearTimeout = (timeout?: number):void => {}
// export const clearInterval = (timeout?: number):void => {}