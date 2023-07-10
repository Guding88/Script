/*

PhotoRoom：https://apps.apple.com/app/id1455009060

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$)  url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/PhotoRoom.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber。entitlements = {
  "business": {
    "expires_date": "2333-02-23T02:33:33Z"，
    "product_identifier": "com.background.business.yearly"，
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber。original_purchase_date = "2023-02-23T03:33:33Z";
guding.subscriber。subscriptions = {
  "com.background.business.yearly": {
    "expires_date": "6666-06-06T06:06:06Z"，
    "original_purchase_date": "2023-02-23T02:33:33Z"，
    "purchase_date": "6666-06-06T06:06:06Z"，
    "ownership_type" : "PURCHASED"，
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
