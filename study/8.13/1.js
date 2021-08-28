/**
 * 将id、parentId这种JSON数组的数据格式转换为树节点格式
 * @param {Array} arr
 * @param {String} id
 * @param {String} pid
 * @return {Array}
 */
 function arrayToTree(arr, id, pid) {
    let data = JSON.parse(JSON.stringify(arr));
    if (!data || !data.length) return [];
    let targetData = [];                    //存储数据的容器(返回)
    let records = {};
    let itemLength = data.length;           //数据集合的个数
    for (let i = 0; i < itemLength; i++){
      let o = data[i];
      records[o[id]] = o;
    }
    for (let i = 0; i < itemLength; i++) {
      let currentData = data[i];
      let parentData = records[currentData[pid]];
      if (!parentData) {
        targetData.push(currentData);
        continue;
      }
      parentData.children = parentData.children || [];
      parentData.children.push(currentData);
    }
    return targetData;
  }