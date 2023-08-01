/*

奇妙P图：https://apps.apple.com/app/id1509179692

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/qimiaoPtu.js

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
          "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
          "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
          "purchase_date_ms": "666666666666666", 
          "transaction_id": "666666666666666", 
          "original_transaction_id": "666666666666666", 
          "product_id": "pocketpics_monthly_withtrial_0901", 
          "in_app_ownership_type": "PURCHASED", 
          "original_purchase_date_ms": "666666666666666" 
        } 
      ], 
      "request_date": "2022-02-02 06:06:06 Etc\/GMT",
      "application_version": "6", 
      "original_purchase_date_ms": "666666666666666", 
      "original_application_version": "6" 
    }, 
    "environment": "Production", 
    "pending_renewal_info": [ 
      { 
        "product_id": "pocketpics_monthly_withtrial_0901", 
        "auto_renew_status": "1" 
      } 
    ], 
    "status": 0, 
    "latest_receipt_info": [ 
      { 
        "quantity": "1", 
        "purchase_date_ms": "666666666666666", 
        "expires_date": "6666-06-06 06:06:06 Etc\/GMT", 
        "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles", 
        "is_in_intro_offer_period": "false", 
        "transaction_id": "666666666666666", 
        "is_trial_period": "false", 
        "original_transaction_id": "666666666666666", 
        "product_id": "pocketpics_monthly_withtrial_0901", 
        "original_purchase_date_ms": "666666666666666", 
        "expires_date_ms": "148204937166000" 
      } 
    ] 
};
$done({ body: JSON.stringify(guding) });
