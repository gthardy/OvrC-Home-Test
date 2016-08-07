var http = require('http');

exports.restartAPI = function(req, res){

  console.log("Starting OvrC Home Apple TV reboot!");

  var options = {
    host: 'api.ovrc.com',
    //port: 443,
    path: '/api/v1/runmacro/579dda910dba83862f7f4365',
    method: 'POST',
    headers: {
      "X-Session-Id": "3a49a42f-b315-4059-954e-1d9544f9adc8",
      "Content-Type": "application/json",
      "X-App-Version": "1.0.5",
      "X-Dev-Mode": "prod",
      "X-Origin-Domain": "ovrchome",
      "X-Target-Client": "mobile"
    }
  };

  var post_req = http.request(options, function(res) {
      //res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
      res.on('error', function(e){
        console.log('Error: ' + e.message);
      });
  });

  post_req.end();
};
