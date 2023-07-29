/*

‎格志日记：https://apps.apple.com/app/id1392523148

[rewrite_local]
^https?:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/gezhiriji.js

[MITM]
hostname = diary-id.sumi.io

*/
var guding = JSON.parse($response.body);
guding.data = {
    "avatar": "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png",
    "inserted_at": "2023-07-21T16:10:42.933157",
    "email_is_valid": true,
    "id": "6",
    "expires_at": "6666-06-06T06:06:06.000000",
    "has_stripe_account": true,
    "name": "骨钉",
    "email": "https://t.me/Guding88",
    "membership_status": "premium",
    "db_version": 1,
    "active_device_ids": [
    ]
  };
$done({ body: JSON.stringify(guding) });