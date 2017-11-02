var http=require ("http");
var server=http.createServer(function(req,res){
    res.writeHead(200,"Content-type","text/html;charset=UTF-8");
    res.end("学东西要从helloworld学起的");
});
server.listen(3000,"127.0.0.1");