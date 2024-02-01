/*

飞鱼计划：https://apps.apple.com/app/id1571229028

[rewrite_local]
^https?:\/\/getway-plan\.bjsybw\.cn\/api\/sync\/putNeedUpdateData url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/feiyujihua.js

[MITM]
hostname = getway-plan.bjsybw.cn

*/
var guding = JSON.parse($response.body);
guding.data.expireAnchor = 148204937166000;
$done({ body: JSON.stringify(guding) });
