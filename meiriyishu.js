/*

每日艺术：https://apps.apple.com/app/id547982045

[rewrite_local]
^https?:\/\/api\.getdailyart\.com\/api\/check-logged url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/meiriyishu.js

[MITM]
hostname = api.getdailyart.com

*/
var guding = {
  "errors": [
  ],
  "ads_free": true,
  "subscription": {
    "auto_resume_date": null,
    "status": "active",
    "account_type": "patron-annual",
    "cancel_date": null,
    "start_date": "2020-07-10T12:34:00.000000Z",
    "expire_date": "6666-06-06T06:06:06.000000Z"
  },
  "username": "骨钉",
  "email": "https://t.me/Guding88",
  "privacy_accepted": true,
  "ignore_mailing": true,
  "privacy_accepted_date": "2023-07-10T13:02:23.000000Z",
  "account_type": "patron-annual"
};
$done({ body: JSON.stringify(guding) });
