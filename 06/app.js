const fs = require('fs');
const path = require('path');

// 生成文件树
function generateTree(dirPath) {
  // TODO：待补充代码
}


// 根据数据生成 tree 命令
function generateDirectoryStructure(data, indent = "") {
  let result = "";
  if(!Array.isArray(data)) throw Error('返回的数据不是数组');
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const name = item.name;
    const isLast = i === data.length - 1;

    result += `${indent}${isLast ? "└──" : "├──"} ${name}\n`;

    if (item.children) {
      const childIndent = indent + (isLast ? "    " : "│   ");
      result += generateDirectoryStructure(item.children, childIndent);
    }
  }

  return result;
}

// 读取指定文件夹，传递本题目文件夹
const directoryPath = __dirname;
const tree = generateTree(directoryPath);
const treem= generateDirectoryStructure(tree);
console.log(treem)

// 以下代码检测需要，请勿删除
module.exports = generateTree;