/*

挖财记账：https://apps.apple.com/app/id1544045905

[rewrite_local]
^https?:\/\/jz\.wacai\.com\/api\/vipmember\/v3\/index url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/wacaijizhang.js

[MITM]
hostname = jz.wacai.com

*/
var guding = JSON.parse($response.body);
guding = {
  "code": 0,
  "data": {
    "userInfo": {
      "avatarUrl": "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png",
      "nickName": "骨钉 https://t.me/Guding88"
    },
    "vipInfo": {
      "adFreeVipEnable": 0,
      "matchVipTrial": true,
      "adFreePermanentVip": true,
      "vipMemberEnable": 6,
      "continuousEnable": 0,
      "continuousType": 0,
      "expirationDate": "6666-06-06 06:06:06",
      "superExpireDate": "6666-06-06 06:06:06",
      "adFreeExpireDate": "6666-06-06 06:06:06",
      "normalExpireDate": "6666-06-06 06:06:06",
      "isPermanentVip": true,
      "freeSendAdFreeVipEnable": 0,
      "vipType": 2,
      "expireDaysDays": null,
      "freeSendVipEnable": 0
    }
  },
  "error": null,
  "needRetry": null
}
$done({ body: JSON.stringify(guding) });
