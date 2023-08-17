/*

每记：https://apps.apple.com/app/id1572586388

[rewrite_local]
^https?:\/\/api\.wemore\.com\/mylogs\/users url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/meiji.js

[MITM]
hostname = api.wemore.com

*/
var guding = JSON.parse($response.body);
guding.data.subscription = {
      "isRenewable": true,
      "subscriptionStatus": 1,
      "membershipLevel": "PREMIUM",
      "standardRemainDays": 666666,
      "premiumExpireTime": 148204937166,
      "expireAt": 148204937166,
      "isInRedeem": true,
      "isExistPaid": true,
      "standardExpireTime": 6666666,
      "nextTradeTime": 148204937166
}
$done({ body: JSON.stringify(guding) });
