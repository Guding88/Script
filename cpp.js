/*

车票票：https://apps.apple.com/app/id6446212291

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/[^\/]+$|^https:\/\/api\.revenuecat\.com\/v1\/receipts$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/cpp.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "vip": {
    "expires_date": null,
    "product_identifier": "eticket_6_life",
    "purchase_date": "2023-03-13T03:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-03-13T03:33:33Z";
guding.subscriber.subscriptions = {
  "eticket_6_life": {
    "expires_date": null,
    "original_purchase_date": "2023-03-13T03:33:33Z",
    "purchase_date": "2023-03-13T03:33:33Z"
  }
};
$done({ body: JSON.stringify(guding) });
