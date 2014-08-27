var http = require('http');
// var fs = require('fs');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'video/mp4', 'Accept-Ranges': 'bytes'});
	fs.readFile('/Users/forted03/Workspaces/VMWare/tal_workspace/catal/catalclient/assets/audio/srg00lgbif4c6.mp4', function (err, data) {
  		if (err) throw err;
  		res.end(data);
	});
	 serve the file here
}).listen(1337, '10.10.2.231');

console.log('Server running at http://10.10.2.231:1337/');

/*
Got
Connection	keep-alive
Content-Type	video/mp4
Date	Thu, 17 Apr 2014 13:28:28 GMT
Transfer-Encoding	chunked

Want
Accept-Ranges	bytes
Connection	Keep-Alive
Content-Length	15694730
Content-Type	video/mp4
Date	Thu, 17 Apr 2014 13:39:03 GMT
Etag	"a012e4-ef7b8a-4f726f095a700"
Keep-Alive	timeout=5, max=98
Last-Modified	Wed, 16 Apr 2014 11:08:44 GMT
Server	Apache
*/