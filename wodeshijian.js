/*

我的时间：https://apps.apple.com/app/id1481796842

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/wdsj.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber。entitlements = {
  "Pro": {
    "product_identifier": "ninja.fxc.mytime.pro.lifetime"，
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber。original_purchase_date = "2023-02-23T03:33:33Z";
guding.subscriber。subscriptions = {
  "ninja.fxc.mytime.pro.lifetime": {
    "original_purchase_date": "2023-02-23T02:33:33Z"，
    "purchase_date": "2023-02-23T02:33:33Z"，
    "ownership_type" : "PURCHASED"，
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
