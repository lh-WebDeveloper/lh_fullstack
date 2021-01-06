// es6提供的新的数据结构
// 1. 为了数组的优化而来
// Set Map 两种数据结构 存放特定的数据集合的
const people = new Set();//[]
people.add('明平贵');
people.add('廖辉');
people.add('何江涛');
people.add('何江涛');
people.add('明平贵');
for(const person of people){
    console.log(person);
}

const student  =new Set(['明平贵','何江涛','黄志乾'])
student.add('郑孝龙')
// console.log(people);