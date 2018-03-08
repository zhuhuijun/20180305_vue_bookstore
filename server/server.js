let http = require('http');
let url = require('url');
let fs = require('fs');
/**
 * 创建服务
 */
http.createServer(function(req,res){
    let {pathname,query} = url.parse(req.url,true);
    if (pathname === '/book'){
            let id = query.id;
            switch(req.method){
                case 'GET':
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