/*

DreamFace：https://apps.apple.com/app/id1624172324

[rewrite_local]
^https?:\/\/dreamfaceapp\.com\/df-server\/user\/save_user_login url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/DreamFace.js

[MITM]
hostname = dreamfaceapp.com

*/
var guding = JSON.parse($response.body);
guding.data.rights= {
      "renewal": true,
      "vip_label": true,
      "expires_date": 148204937166000,
      "expires_date_format": "6666-06-06 06:06:06.666",
      "vip_product_id": "96"
    };
$done({ body: JSON.stringify(guding) });
