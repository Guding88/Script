/*

佐糖：https://apps.apple.com/app/id1609584814

[rewrite_local]
^https?:\/\/gw\.aoscdn\.com\/base\/vip\/v2\/vips url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/zuotang.js

[MITM]
hostname = gw.aoscdn.com

*/
var guding = JSON.parse($response.body);
guding.data = {
    "group_expired_at": 148204937166,
    "is_tried": 1,
    "max_devices": 1,
    "period_type": "daily",
    "candy_expired_at": 0,
    "pending": 0,
    "remained_seconds": 66666666666,
    "limit": 0,
    "expired_at": 148204937166,
    "candy": 0,
    "license_type": "personal",
    "quota": 0,
    "status": 1,
    "coin": 0
  };
$done({ body: JSON.stringify(guding) });
