/*

PhotoRoom：https://apps.apple.com/app/id1455009060

*/

var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "business": {
    "expires_date": "2333-02-23T02:33:33Z",
    "product_identifier": "com.background.business.yearly",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";

guding.subscriber.subscriptions = {
  "com.background.business.yearly": {
    "expires_date": "2333-02-23T02:33:33Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
