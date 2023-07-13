/*

CountThings from Photos：https://apps.apple.com/app/id1196810823

[rewrite_local]
^https?:\/\/my\.countingthings\.com\/api\/v2.0\/users\/GetUserAndSubscription url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/CountThings.js

[MITM]
hostname = my.countingthings.com

*/
var guding = {
  "IsAnonymous": false,
  "NumberOfOnDemandLicensesInAccount": 0,
  "Email": "https://t.me/Guding88",
  "ResponseRegistrationToken": null,
  "UserName": "https://t.me/Guding88",
  "Phone": "",
  "FirstName": "骨钉",
  "CustomPermissions": null,
  "CompanyName": "骨钉",
  "PasswordSetDate": "2023-02-20T15:13:08.725361",
  "Address": "https://t.me/Guding88",
  "SecurityType": null,
  "Subscription": {
    "IsFreeTrial": false,
    "EndDateUTC": "6666-06-06T06:06:06",
    "PlanType": null,
    "SubscriptionType": "Year",
    "StartDateUTC": "2023-02-20T15:13:08"
  },
  "LastName": "https://t.me/Guding88",
  "DeviceFriendlyName": "666"
};
$done({ body: JSON.stringify(guding) });
