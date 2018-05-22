var fs = require('fs');

const PATH = require('path');
const dirTree = require('directory-tree');

const PATH_TO_DIR = '../../../view';
 
const arrExclude = [];
arrExclude.push(/\.git/);
arrExclude.push(/gulpfile.js/);
arrExclude.push(/\.gitignore/);
arrExclude.push(/statics\/amp/);
arrExclude.push(/statics\/lite/);
arrExclude.push(/statics\/smart/);
arrExclude.push(/xslt\/amp/);
arrExclude.push(/xslt\/lite/);
arrExclude.push(/xslt\/smart/);
const tree = dirTree(PATH_TO_DIR, {exclude: arrExclude, extensions:/\.js/}, (item, PATH) => {
    console.log(item); 
    //console.log(PATH);
});

let text = JSON.stringify(tree, null, ' ');
text = text.replace(/\.\.\/\.\.\/\.\.\/view/g, '');

fs.writeFile("structureFiles.json", text, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 

