/*

Picsew：https://apps.apple.com/app/id1208145167

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Picsew.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "com.sugarmo.ScrollClip",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1669275526000",
        "transaction_id": "300001282466542",
        "original_transaction_id": "300001282466542",
        "product_id": "com.sugarmo.ScrollClip.pro",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1669275526000"
      }
    ],
    "application_version": "3206",
    "original_purchase_date_ms": "1669275302000",
    "original_application_version": "3206",
  },
  "environment": "Production",
  "status": 0,
}
$done({ body: JSON.stringify(guding) });
