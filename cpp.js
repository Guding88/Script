/*

车票票：https://apps.apple.com/app/id6446212291

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
