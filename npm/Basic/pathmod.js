const path=require("path");
console.log(path.dirname('E:/nodejs/pathmod.js'));
console.log(path.extname('E:/nodejs/pathmod.js'));
console.log(path.basename('E:/nodejs/pathmod.js'));

//Wrong//console.log(path.name('E:/nodejs/pathmod.js'));

const p=path.parse('E:/nodejs/pathmod.js');
console.log(p.name);
console.log(p.root);