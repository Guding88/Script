/*

FoodCa：https://apps.apple.com/app/id6451112435

[rewrite_local]
^https?:\/\/service-ei2k47mp-1251731618\.bj\.apigw\.tencentcs\.com/release\/aifood_order url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/FoodCa.js

[MITM]
hostname = service-ei2k47mp-1251731618.bj.apigw.tencentcs.com

*/
var guding = JSON.parse($response.body);
guding = {"exp_time": "6666-06-05 22:06:06"};
$done({ body: JSON.stringify(guding) });
