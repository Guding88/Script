/*

始末：https://apps.apple.com/app/id1670906512

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/shimo.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Pro": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "com.abouttime.todo.year",
    "purchase_date": "2023-02-23T03:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-03-13T03:33:33Z";
guding.subscriber.subscriptions = {
  "com.abouttime.todo.year": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-03-13T03:33:33Z",
    "purchase_date": "2023-02-23T03:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
