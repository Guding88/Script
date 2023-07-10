/*

Pillow：https://apps.apple.com/app/id878691772

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$)  url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Pillow.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber。entitlements = {
  "premium": {
    "expires_date": "6666-06-06T06:06:06Z"，
    "product_identifier": "com.neybox.pillow.premium.year.specialoffer"，
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber。original_purchase_date = "2023-02-23T03:33:33Z";

guding.subscriber。subscriptions = {
  "com.neybox.pillow.premium.year.specialoffer": {
    "expires_date": "6666-06-06T06:06:06Z"，
    "original_purchase_date": "2023-02-23T02:33:33Z"，
    "purchase_date": "2023-02-23T02:33:33Z"，
    "ownership_type" : "PURCHASED"，
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
