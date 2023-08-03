/*

Agenda：https://apps.apple.com/app/id1370289240

[rewrite_local]
^https?:\/\/accounts\.agenda\.com\/users url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Agenda.js

[MITM]
hostname = accounts.agenda.com

*/
var guding = {
 "unlockExpiryMobile": 148204937166000,
  "licenseStatusMobile": 0,
  "licenseStatus": 2,
  "informUserOfPendingBonus": false,
  "hasLifetimeUnlock": true,
  "freeTrialStatus": 1,
  "isSubscribed": true,
  "unlockExpiry": 148204937166000,
  "isSubscribedMobile": true,
  "error": 0,
  "universalPurchaseAvailable": false
}
$done({ body: JSON.stringify(guding) });
