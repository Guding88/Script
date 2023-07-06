/*

极简弹幕：https://apps.apple.com/app/id1572801421

*/

var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "pro": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "com.abouttime.flash.year",
  }
};
guding.subscriber.subscriptions = {
  "com.abouttime.flash.year":{
    "expires_date":"6666-06-06T06:06:06Z",
  }
};
$done({ body: JSON.stringify(guding) });
