const express = require('express');
let app = express();

app.get("/hello", function(request, response){
    response.send("hello from the REST API");
});

app.get("/hello/:name", function(request, response){
    let name = request.params.name;
    response.send("hello " + name);
});

let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
});
  