/*

时间印迹：https://apps.apple.com/app/id6450100115

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/shijianyinji.js

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "receipt_creation_date": "2022-02-02 06:06:06 Etc\/GMT",
    "bundle_id": "https://t.me/Guding88",
    "original_purchase_date": "2022-02-02 06:06:06 Etc\/GMT",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1643753166000",
        "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
        "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
        "is_in_intro_offer_period": "false",
        "transaction_id": "666666666666666",
        "is_trial_period": "false",
        "original_transaction_id": "666666666666666",
        "purchase_date": "2022-02-02 06:06:06 Etc\/GMT",
        "product_id": "com.marklabs.lovetime.year",
        "original_purchase_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1643753166000",
        "web_order_line_item_id": "666666666666666",
        "expires_date_ms": "148204937166000",
        "purchase_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
        "original_purchase_date": "2022-02-02 06:06:06 Etc\/GMT"
      }
    ],
    "receipt_creation_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
    "request_date": "2022-02-02 06:06:06 Etc\/GMT",
    "request_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
    "request_date_ms": "1643753166000",
    "original_purchase_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
    "application_version": "123",
    "original_purchase_date_ms": "1643753166000",
    "receipt_creation_date_ms": "1643753166000",
    "original_application_version": "123",
  },
  "pending_renewal_info": [
    {
      "product_id": "com.marklabs.lovetime.year",
      "original_transaction_id": "666666666666666",
      "auto_renew_product_id": "https://t.me/Guding88",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1643753166000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "666666666666666",
      "is_trial_period": "false",
      "original_transaction_id": "666666666666666",
      "purchase_date": "2022-02-02 06:06:06 Etc\/GMT",
      "product_id": "com.marklabs.lovetime.year",
      "original_purchase_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "66666666",
      "original_purchase_date_ms": "1643753166000",
      "web_order_line_item_id": "666666666666666",
      "expires_date_ms": "148204937166000",
      "purchase_date_pst": "2022-02-02 06:06:06 America\/Los_Angeles",
      "original_purchase_date": "2022-02-02 06:06:06 Etc\/GMT"
    }
  ]
};
$done({ body: JSON.stringify(guding) });
