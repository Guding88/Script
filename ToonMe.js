/*

ToonMe：https://apps.apple.com/app/id1508120751

[rewrite_local]
^https?:\/\/purchases\.ws\.pho\.to\/api\/v2\/apple\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/ToonMe.js

[MITM]
hostname = purchases.ws.pho.to

*/
var guding = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "app_item_id": 1508120751,
    "receipt_creation_date": "2023-07-10 13:43:37 Etc\/GMT",
    "bundle_id": "com.informelab.toonme",
    "original_purchase_date": "2023-07-10 13:11:19 Etc\/GMT",
    "adam_id": 1508120751,
    "receipt_creation_date_pst": "2023-07-10 06:43:37 America\/Los_Angeles",
    "request_date": "2023-07-10 13:43:40 Etc\/GMT",
    "request_date_pst": "2023-07-10 06:43:40 America\/Los_Angeles",
    "version_external_identifier": 858037300,
    "request_date_ms": "1688996620991",
    "original_purchase_date_pst": "2023-07-10 06:11:19 America\/Los_Angeles",
    "application_version": "1892",
    "original_purchase_date_ms": "1688994679000",
    "receipt_creation_date_ms": "1688996617000",
    "original_application_version": "1892",
    "download_id": 502594302492761518
  },
  "pending_renewal_info": [
    {
      "product_id": "pro_features_tnmweek_4",
      "original_transaction_id": "730001188515156",
      "auto_renew_product_id": "pro_features_tnmweek_4",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688996616000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "730001188515156",
      "is_trial_period": "false",
      "original_transaction_id": "730001188515156",
      "purchase_date": "2023-07-10 13:43:36 Etc\/GMT",
      "product_id": "pro_features_tnmweek_4",
      "original_purchase_date_pst": "2023-07-10 06:43:37 America\/Los_Angeles",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "21022245",
      "original_purchase_date_ms": "1688996617000",
      "web_order_line_item_id": "730000549129674",
      "expires_date_ms": "148204937166000",
      "purchase_date_pst": "2023-07-10 06:43:36 America\/Los_Angeles",
      "original_purchase_date": "2023-07-10 13:43:37 Etc\/GMT"
    }
  ]
};
$done({ body: JSON.stringify(guding) });
