/*

朝暮计划：https://apps.apple.com/app/id1535727202

[rewrite_local]
^https?:\/\/www\.zomoplan\.com\/zhaoMuPlan_user\/info url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/zhaomujihua.js

[MITM]
hostname = www.zomoplan.com

*/
var guding = JSON.parse($response.body);
guding.data.vipInfo = {
    "vipStatus": 1,
    "vipType": 1,
    "vipInfoDesc": "加频道https:\/\/t\.me\/Guding88，享受更多破解特权"
};
guding.data.basicInfo.userNickName = "骨钉";
guding.data.basicInfo.userInviteCode = "Guding";
guding.data.basicInfo.userPhoto = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
$done({ body: JSON.stringify(guding) });
