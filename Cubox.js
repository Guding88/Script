/*

[rewrite_local]
^https:\/\/kc\.xinli001\.com\/lingxikc\/meditating\/api\/(?!.*plan).* url script-response-body ttps://raw.githubusercontent.com/Guding88/Screit/Cubox.js

[MITM]
hostname = kc.xinli001.com

*/

var guding = JSON.parse($response.body);
guding.data.isExpire = false;
guding.data.expireTime ="6666-06-06T06:06:06Z";
guding.data.nickName ="🥳";
$done({ body: JSON.stringify(guding) });
