let http = require('http');
let url = require('url');
let fs = require('fs');

//读文件
function read(callback) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      callback([]);
  } else {
      callback(JSON.parse(data));
  }
})
}

function write(books, callback) {
  fs.writeFile('./book.json', JSON.stringify(books), callback);
}
/**
 * 创建服务
 */
 http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") return res.end();
  let {pathname,query} = url.parse(req.url,true);
  if (pathname === '/book'){
    let id = query.id;
    switch(req.method){
        case 'GET':
        if (!isNaN(id)) {
          read(function (books) {
            var one = books.find(item => item.bookId == id);
            if (!one) one = {};
            res.setHeader('Content-Type', "application/json;charset=utf8");
            return res.end(JSON.stringify(one));
        })
      } else {
          read(function (books) {
            let hot = books.reverse();
            res.setHeader('Content-Type', "application/json;charset=utf8");
            return res.end(JSON.stringify(hot));
        });
      }
      break;
      case "POST":
      break;
      case 'PUT':
      break;
      case "DELETE":
      break;
  }
}else{
    res.statusCode = 404;
    res.end();
}
}).listen(4000);