# 数据库索引
普通索引 `create index idx_name on tablename(column);`
联合索引 `create index idx_name2 on tablename(coll,col2);`
唯一索引 `create unique index uniq_name on xxx;`
创建主键 `alter table tablename add primary key(col)`
删除索引 `drop idnex idx_name on tablename;`

常见的索引结构:
1. 二叉搜索树：要求是每个节点的左子节点小于父节点,右子节点大于父节点,查询效率较高,时间复杂度o(logN)
2. 有序序列：可以区间查询,但增加删除记录性能低,需要每次都挪动数据,一般用于静态数据存储,对静态数据做索引
3. 哈希表：键值对的方式存储,只适应于等值查询,无法区间查询,比如redis(key-value数据库)


mysql索引类型:
    innodb(b+树)
    myisam(b树)
区别:
    B+树内节点不存储数据，所有数据存储在叶节点导致查询时间复杂度固定为 log n
    B树查询时间复杂度不固定，与 key 在树中的位置有关，最好为O(1)
    B+树叶节点两两相连可大大增加区间访问性，可使用在范围查询等
    B+树更适合外部存储(存储磁盘数据)。由于内节点无 data 域，每个节点能索引的范围更大更精确。


    B+树只有叶子节点会存放数据,B树的每个节点都会存放数据
    B+树的叶子节点都会通过链表有序连接,能够很快地实现区间查询
    B树可以在非叶子节点结束查找,最好的情况是o(1),但B+树的时间复杂度是o(logN)
    B树的插入性能比B+树要高


三大范式:
    第一范式: 原子性,列不可再分
    第二范式: 唯一性,每一列都与主键相关
    第三范式: 独立性,避免字段冗余,不能存在能被其他字段被推导出来
