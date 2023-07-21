/*

作者：Baby

有谱么：https://apps.apple.com/app/id973743727

[rewrite_local]
^https:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/youpume.js

[MITM]
hostname = yopu.co

*/
var Baby = {
  "adsDisabledTill": 101966821994000,
  "displayName": "Baby添加tg频道\https://t.me/Guding88",
  "loginId": "cell:18888888888",
  "email": "8888***@qq.com",
  "gender": "1",
  "level": 1,
  "avatar": "https://raw.githubusercontent.com/Yu9191/-/main/nv4.png",
  "isMember": true,
  "ladder": "member",
  "dailyPlayAwardCoupon": null,
  "score": 66666666,
  "hasWX": true,
  "hasOnlyWeibo": false,
  "creationTime": 5
};
$done({ body: JSON.stringify(Baby) });
