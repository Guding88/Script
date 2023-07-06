/*

[rewrite_local]
^https?:\/\/cubox\.(cc|pro)\/c\/api\/userInfo url script-response-body ttps://raw.githubusercontent.com/Guding88/Screit/Cubox.js

[MITM]
hostname = cubox.cc, cubox.pro

*/

var guding = JSON.parse($response.body);
guding.data.isExpire = false;
guding.data.expireTime ="6666-06-06T06:06:06Z";
guding.data.nickName ="🥳";
$done({ body: JSON.stringify(guding) });
