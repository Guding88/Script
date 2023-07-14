/*

Monefy：https://apps.apple.com/app/id1212024409

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Monefy.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "monefy_premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-07-12T15:55:48Z",
        "product_identifier": "monefy.yearlysubscription",
        "expires_date": "6666-06-06T06:06:06Z"
      }
};
guding.subscriber.original_purchase_date = "2023-07-12T15:55:48Z";
guding.subscriber.subscriptions = {
  "monefy.yearlysubscription": {
        "original_purchase_date": "2023-07-12T15:55:48Z",
        "expires_date": "6666-06-06T06:06:06Z",
        "is_sandbox": false,
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2023-07-12T15:55:48Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
};
$done({ body: JSON.stringify(guding) });
