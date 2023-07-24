/*

亲爱的冰箱：https://apps.apple.com/app/id1555630532

[rewrite_local]
^https:\/\/bingxiang\.51wnl-cq\.com\/api\/(v2\/GetUserMember|v2\/users\/checktoken) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/qinaidebingxiang.js
^https:\/\/bingxiang\.51wnl-cq\.com\/api\/Unlocking url script-request-body https://raw.githubusercontent.com/Guding88/Script/main/qinaidebingxiang.js

[MITM]
hostname = bingxiang.51wnl-cq.com

*/
if ($request.url.includes("/v2/GetUserMember")) {
  var guding = JSON.parse($response.body);
  guding.data.memberEndDate = "6666-06-06";
  guding.data.memberType = 1;
  guding.data.coin = 666666;
  $done({ body: JSON.stringify(guding) });
} else if ($request.url.includes("/v2/users/checktoken")) {
  var guding = JSON.parse($response.body);
  guding.data.userInfo.memberEndDate = "6666-06-06T06:06:06Z";
  guding.data.userInfo.coin = 666666;
  $done({ body: JSON.stringify(guding) });
} else if ($request.url.includes("/Unlocking")) {
  var guding = JSON.parse($request.body);
  guding.coin = 0;
  $done({ body: JSON.stringify(guding) });
}
