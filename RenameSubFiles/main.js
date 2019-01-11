const fs = require('fs');
var Folder = '.';

fs.readdir(Folder, (err, files) => {
  files.forEach(file => {
    console.log(file);
    if (DirectoryCheck(file)){
      var Subfolder = Folder + '/' + file.toString();
      readSubdirectory(Subfolder); 
    }
  });
});

function DirectoryCheck(file){
  fs.stat(file, function(err, stats) {
      if (stats.isDirectory()) {
        // console.log(file, ' -> folder');
        return true;
        
    } else {
        console.log(file, ' --> file');
        return false;
    }
  });
}

function readSubDirectory(Subfolder){
  fs.readdir(Subfolder, (suberr, subfiles) => {
      subfiles.forEach(subfile => {
      if (DirectoryCheck(subfile))
      })
  })
}

function renameSubfile(){
  fs.stat(subfile, function(err, stats){
              log stats;
              if (stats.isFile()){
                var subPath =Subfolder + '/' + subfile;
                var subName = Subfolder + '/'+ file.toString();
                fs.rename(subPath, subName);
              }
            })
}
