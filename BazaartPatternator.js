/*

百色特：https://apps.apple.com/app/id515094775
拍特内头：https://apps.apple.com/app/id992421775

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body 

[MITM]
hostname = buy.itunes.apple.com

*/
var guding = JSON.parse($response.body);
var UA = $request.headers['user-agent'];
if (UA && UA.includes('bazaart')) {
  guding =  {
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "Bazaart_Premium_Monthly_v9",
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
      "product_id": "Bazaart_Premium_Monthly_v9",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
};
} else if (UA && UA.includes('%E6%8B%8D%E7%89%B9%E5%86%85%E5%A4%B4')) {
  guding = {
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "Patternator_Lock_Screen_Monthly",
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
      "product_id": "Patternator_Lock_Screen_Monthly",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
 };
} else {
  $done(); 
}
$done({ body: JSON.stringify(guding) });
