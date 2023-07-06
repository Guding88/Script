/*

易截图2：https://apps.apple.com/app/id1633186528

*/

var guding = JSON.parse($response.body);
guding.info.group_id = "3";
guding.info.vip = "1";
guding.info.group = "无耻的破解会员";
guding.info.nickname = "骨钉";
$done({ body: JSON.stringify(guding) });
