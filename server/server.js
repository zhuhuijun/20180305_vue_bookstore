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
http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1');
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") return res.end();
  let { pathname, query } = url.parse(req.url, true);
  if (pathname === '/book') {
    let id = query.id;
    switch (req.method) {
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
        let str = '';
        req.on('data', chunk => {
          str += chunk;
        });
        req.on('end', () => {
          let booknew1 = JSON.parse(str);
          read(function (books) {
            booknew1.bookId = books.length ? books[books.length - 1].bookId + 1 : 1;
            books.push(booknew1);
            //重新写回数据
            write(books, function () {
              return res.end(JSON.stringify(booknew1));
            });
          });
        });
        break;
      case 'PUT':
        if (id) {
          let str = '';
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', () => {
            let booknew = JSON.parse(str);
            read(function (books) {
              //读取替换
              books = books.map(item => {
                if (item.bookId === id) {
                  return booknew;
                }
                return item;
              });
              //重新写回数据
              write(books, function () {
                return res.end(JSON.stringify(booknew));
              })
            });
          });

        }

        break;
      case "DELETE":
        read(function (books) {
          books = books.filter(item => item.bookId != id);
          //console.info(books);
          write(books, function () {
            return res.end(JSON.stringify({}));//删除返回空对象
          });
        });
        break;
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
}).listen(4000);