/*

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/[^\/]+$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Widgetsmith.js

[MITM]
hostname = api.revenuecat.com

*/

var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Premium": {
    "expires_date": "2333-02-23T00:02:33Z",
    "product_identifier": "PremiumAnnualWidget",
  }
};
guding.subscriber.subscriptions = {
  "PremiumAnnualWidget":{
    "expires_date":"2333-02-23T00:02:33Z",
  }
};
$done({ body: JSON.stringify(guding) });
