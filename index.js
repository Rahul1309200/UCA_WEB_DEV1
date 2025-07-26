var express= require('express');
var app=express();
var port=8080;
// default port for http is 80, for https is 443
// if you want to run on port 80, you need to run the server with sudo
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.sendFile('index.html');
});