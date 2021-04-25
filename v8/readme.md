# 内存机制
- 在使用之前就要确认其变量数据类型的为静态语言
- 在运行过程中需要检查数据类型的语言称为动态语言
- 支持隐式类型转换的语言称为弱类型语言
- 不支持隐式类型转换的语言称为强类型语言

js的内存空间----代码空间、栈空间、堆空间


# 垃圾回收
- 手动回收
- 自动回收
- 栈中的数据类型是如何回收的
ESP 向下移动会销毁上一个在函数调用栈中的执行上下文

- 堆当中数据是如何回收的
js的垃圾回收器

    - 代际假说
        1. 大部分对象在内存中存在的时间很短,简单来说,很多对象一经分配,很快就变得不可访问
        2. 不死的对象,会活得更久
        V8会把堆分为 新生代(1-8M) 和 老生代两个区域,新生代中存放生存时间短的对象,老生代中存放生存时间长的对象
        - 副垃圾回收器,负责新生代的垃圾回收
        - 主垃圾回收器,负责老生代的垃圾回收
        回收器的工作流程
        1. 标记空间活动对象和非活动对象
        2. 回收非活动对象所占据的内存
        3. 整理内存
        副垃圾回收器:
            对象区域和空闲区域无限循环替换
            (对象晋升区域)当执行完两次垃圾回收之和还活着的对象,把它移到老生区
        主垃圾回收器:
            标记-清除(mark-Sweep)
            遍历老生代区的对象,找到垃圾数据,清除垃圾数据。

    - 分代收集