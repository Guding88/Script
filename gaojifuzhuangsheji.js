/*

高级服装设计：https://apps.apple.com/app/id1413710253

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/gaojifuzhuangsheji.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "https://t.me/Guding88",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1688386973000",
        "transaction_id": "300006666666666",
        "original_transaction_id": "300006666666666",
        "product_id": "com.pocketartstudio.fashiondesign.twomonths",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1688386973000"
      }
    ],
    "application_version": "3206",
    "original_purchase_date_ms": "1688386973000",
    "original_application_version": "3206",
  },
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "com.pocketartstudio.fashiondesign.twomonths",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "com.pocketartstudio.fashiondesign.twomonths",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
};
$done({ body: JSON.stringify(guding) });
