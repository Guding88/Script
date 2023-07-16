/*

GEIST：https://apps.apple.com/app/id897062509

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/GEIST.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "memorado_premium": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-07-12T15:55:48Z",
        "product_identifier": "com.memorado.subscription.yearly.v2",
        "expires_date": "6666-06-06T06:06:06Z"
      }
};
guding.subscriber.original_purchase_date = "2023-07-12T15:55:48Z";
guding.subscriber.subscriptions = {
  "com.memorado.subscription.yearly.v2": {
        "original_purchase_date": "2023-07-12T15:55:48Z",
        "expires_date": "2023-07-15T15:55:48Z",
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
