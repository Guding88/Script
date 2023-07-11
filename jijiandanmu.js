/*

极简弹幕：https://apps.apple.com/app/id1572801421

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$)  url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/jijiandanmu.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "pro": {
    "expires_date": "6666-06-06T06:06:06Z"，
    "product_identifier": "com.abouttime.flash.year"，
  }
};
guding.subscriber.subscriptions = {
  "com.abouttime.flash.year":{
    "expires_date":"6666-06-06T06:06:06Z"，
  }
};
$done({ body: JSON.stringify(guding) });
