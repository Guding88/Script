/*

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/[^\/]+$ url script-response-body https://raw.githubusercontent.com/Guding88/Scritp/main/Done.js

[MITM]
hostname = api.revenuecat.com

*/

var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Premium": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "com.tbd.Done.growth.bundle.yearly.v6",
  }
};
guding.subscriber.subscriptions = {
  "com.tbd.Done.growth.bundle.yearly.v6":{
    "expires_date":"6666-06-06T06:06:06Z",
  }
};

$done({ body: JSON.stringify(guding) });
