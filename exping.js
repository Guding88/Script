/*

exping：https://apps.apple.com/app/id1581529305

[rewrite_local]
^https?://api.expingworld.com/users url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/exping.js

[MITM]
hostname = api.expingworld.com

*/
var guding = JSON.parse($response.body);
if ($request.url.indexOf('/0') !== -1){
guding.data.nickname = "骨钉";
guding.data.expingId = "https://t.me/Guding88";
guding.data.email = "https://t.me/Guding88";
guding.data.vipInfo = {
      "channel": "ios",
      "vipType": "year",
      "expiredTimestamp": 148204937166,
      "isExpired": false,
      "autoRenewStatus": 1,
     }
  } else if ($request.url.indexOf('/vip-info') !== -1){
  guding.data = {
      "channel": "ios",
      "vipType": "year",
      "expiredTimestamp": 148204937166,
      "isExpired": false,
      "autoRenewStatus": 1,
     }}else {};
$done({ body: JSON.stringify(guding) });
