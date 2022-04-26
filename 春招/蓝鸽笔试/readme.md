# 1
 a 标签的四种伪类 (:link , :visited, :hover, :active) 的顺序如下
    (1)  :link        选择所有未访问的链接   
    (2)  :visited     选择所有访问过的链接
    (3)  :hover       选择鼠标在链接上面的链接  ( :hover 选择器器可用于所有元素，不仅是链接。)
    (4)  :active      选择活动链接 (鼠标点击与释放之间)

# 有哪些数组操作？哪些操作会改变原数组？ 哪些操作不会改变原数组？ 
   # 会改变原数组
        1、shift   
            删除数组中第一个元素，返回被删除的元素，改变了原数组
            array.shift()
        2、pop
            删除数组中最后一个元素，返回被删除的元素，改变了原数组
            array.pop()
        3、unshift
            向数组开头追加元素，可追加一个或多个元素，返回新数组长度，改变了原数组
            array.unshift(item1,item2,...)
        4、push
            向数组末尾追加元素，可追加一个或多个元素，返回新数组长度，改变了原数组
            array.push(item1,item2,...)
        5、reverse
            颠倒数组中元素的顺序，返回改变后的新数组
            array.reverse()
        6、splice
            向数组中添加或删除项目，返回被删除的项目，改变了原数组
            array.splice(index,deleteCount,item1,item2,...)
        7、copyWithin
            在数组内部，将指定位置的成员复制到数组中的其他位置，返回复制后的新数组
            array.copyWithin(targetIndex, startIndex, endIndex)
        8、fill
            将给定的值填充到数组的指定位置，返回填充后的新数组，若给定的值是引用类型，则填充的所有项指向同一个地址。
            array.fill(value, startIndex, endIndex)
        9、sort
            按规则排序，返回排序后的新数组
            array.sort()

   #  不会改变原数组
        1、concat
            连接两个或多个数组，返回新数组，不改变原数组
            array.concat(array1,array2)
        2、join
            将数组元素通过指定分隔符拼接成字符串，返回字符串，不改变原数组
            array.join('')
        3、slice
            截取数组中的一部分，返回截取的部分数组，不改变原数组
           array.slice(startIndex,endIndex)
        4、flat
            将二维或多维数组按指定层数拉平，返回拉平后的新数组，不改变原数组
            array.flat(Infinity)
        5、map
            遍历数组进行操作，返回新数组，不改变原数组
            array.map((item,index) => {
            // 数组操作
                 return item
            })
        6、flatMap
            先执行map操作再执行flat操作，只能展开一层数组，返回新数组，不改变原数组
            array.flapMap((item,index) => {
            // 数组操作
                return item
            })

# 强制类型转换(Number)
    转换方式一：使用 Number()函数
        1、字符串----->数字
            如果是纯数字的字符串，则直接将其转换为数字
            如果字符串中有非数字的内容，则转换为 NaN
            如果字符串是一个空串或者是一个全是空格的字符串，则转换为 0
        2、布尔值----->数字
            true 转换成 1，false 转换成 0
        3、Null----->数字
            Null 转换成 0
        4、Undefined----->数字

    转换方式二：这种方式专门用来对付字符串
        ParseInt()把一个字符串转换为一个整数
        ParseFloat()把一个字符串转换为一个浮点数
    
    转换方式三：任何值做 + - * / 运算时，都会自动转换为 Number
        可以对一个其他的数据类型使用 +，来将其转换为 number，它的原理和 Number()函数一样

# 声明变量方法
        声明变量或常量：var 、let（ES6新增） 、const （ES6新增）

        声明函数变量：function 

        声明类：class（ES6新增）

        声明 ‘ 静态加载 ’ 输入变量：import (ES6新增)

# css中颜色的表示方法
    1.  英语单词表示法
    
    2.  十六进制表示法
        以 #开头的六位或者三位组成。六位就是#红红绿绿蓝蓝，
        三位就是红绿蓝。组成的部分必须是，0~9的数字或者字母A~F（a~f），不区分大小写。

        红色（#ff0000）;  绿色 （#00ff00）；蓝色 （#0000ff）；黑色 （#000000）；白色 （#ffffff）
        f 是最高的，封顶 的思意。比如红色 （红红绿绿蓝蓝），红红是占满了，绿绿蓝蓝都是0，就代表没有，所以最终颜色是红色。

    3.  REB 表示法
        Rgb(红，绿，蓝)，每个逗号取值范围为0~255之间的整数，或者一个从0%~100%之间的整数百分比值。数值越大，
        表示该颜色的占比越多，比如红色（255，0，0）。

    4.  REBA 表示法
        REBA（红，绿，蓝，透明度），透明度取值范围：0~1 直接的一位小数，0 是完全透明，1是不完全透明。
        数值表示透明的程度，越接近1，就越接近原本的颜色。当为1的时候就是不完全透明了，显示原本的颜色。

# 清除浮动的方法
    1. 额外标签法(在最后一个浮动标签后,新加一个标签,给其设置clear:both)
    2. 父级添加overflow属性(父元素添加overflow:hidden)
    3. 使用after伪元素清除浮动

# css中隐藏dom元素的方法
    1.设置display:none;
        特点: 真正的隐藏元素。
            (1) 将元素的display属性设置为none能够确保元素不可见;
            (2) 使用这个属性,被隐藏元素不占用任何空间;
            (3) 使用display:none隐藏元素,不能直接跟用户进行交互操作(另外,使用读屏软件也不能读取到元素的内容，
                这种隐藏方式就像元素完全不存在一样);
            (4) 任何这个隐藏元素的后代元素也会被隐藏;
            (5) 但是，可以通过JS中的DOM操作访问到这个被隐藏的元素，也可以通过DOM对它进行操作。

    2.设置overflow: hidden;
        原理: 将元素位置设置到父元素的外面。
    
    3.设置元素的宽高等盒子模型的属性值为0。
        特点: 将元素的宽高设置为0，使用读屏软件仍可以读取到该元素。

    4.利用定位隐藏元素。
        优点：只要通过将元素的left和top设置足够大的数;
        缺点：仍然可以使用读屏软件读取元素的内容。
    
    5.opacity:设置元素透明度为0。
        特点: 将元素的透明度设置为0，只是单纯的在页面上看不见元素，但是从控制台可以看到该隐藏元素本身的位置仍然存在。

    6.visibility: 设置元素是否可见。
        默认为：visible(可见);
        隐藏(不可见)：hidden。
        特点: 隐藏元素，但是会保留被隐藏元素的位置。

    
# 防抖
    ```
        function debounce(fn,delay=200){
            let timer=null;
            return function(){
                if(timer) clearTimeout(timer);
                timer=setTimeout(()=>{
                    //透传this ,参数
                    fn.apply(this,arguments);
                    timer=null;
                },delay)
            }
        }
    ```

# 节流
    ```
        function throttle(fn,delay=200){
            let timer=null;
            return function(){
                if(timer) return
                timer=setTimeout(()=>{
                    //透传this, 参数
                    fn.apply(this,arguments);
                    tiemr=null;
                },delay)
            }
        }
    ```
    
# 红绿灯
    ```
        function loopPromise(){
            new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    red()
                    resolve()
                },3000)
            }).then(()=>{
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        green()
                        resolve()
                    },2000)
                })
            }).then((resolve)=>{
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        yellow()
                        resolve()
                    },1000)
                })
            }).then(()=>{
                return loop()
            })
        }
    ```


    ```
        function print(f,wait){
            return new
            Promise((resolve,reject)=>{
                setTimeout(()=>{
                    fn()
                    resolve()
                },awit)
            })
        }
    ```

    ```
        async function loopAsync(){
            await print(red,3000)
            await print(green,2000)
            await print(yellow,1000)
            return loopAsync()
        }
    ```
