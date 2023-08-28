/*

Ease助眠：https://apps.apple.com/app/id1549614554

[rewrite_local]
^https?:\/\/api0\.easeprime\.com\/api\/(login\/loginByWeChatCode|memberInfo\/myInfo) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Ease.js

[MITM]
hostname = api0.easeprime.com

*/
var guding = JSON.parse($response.body);
if ($request.url.includes("/login/loginByWeChatCode")) {
 guding.body.connectedPhone = true;
} else if ($request.url.includes("/memberInfo/myInfo")) {
guding.body = {
    "avatar": "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png",
    "registrationDays": 0,
    "vipEndTime": 148204937166000,
    "vipType": "FREE",
    "familyType": "NONE",
    "memberId": 666,
    "sex": "SECRET",
    "nickName": "骨钉 https://t.me/Guding88",
    "vip": true
  }
};
$done({ body: JSON.stringify(guding) });
