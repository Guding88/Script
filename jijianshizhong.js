/*

极简时钟：https://apps.apple.com/app/id1265404088

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$)  url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/jijianshizhong.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "pro": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "com.mad.zenflipclock.iap.buymeacoffee",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";

guding.subscriber.subscriptions = {
  "com.mad.zenflipclock.iap.buymeacoffee": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
