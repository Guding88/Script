/*

开发者Reflectly ApS成长包解锁，共8款APP
Reflectly：https://apps.apple.com/app/id1241229134
HealthView：https://apps.apple.com/app/id1020452064
TimeBloc：https://apps.apple.com/app/id1476033780
SleepTimer：https://apps.apple.com/app/id1057027109
Tally：https://apps.apple.com/app/id1090990601
Grateful：https://apps.apple.com/app/id1197512462
Last：https://apps.apple.com/app/id1092307625
Done：https://apps.apple.com/app/id1103961876

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/ReflectlyGrowthBundle.js

[MITM]
hostname = api.revenuecat.com

*/
var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Growth_Bundle_Subscription": {
    "expires_date": "6666-06-06T06:06:06Z",
    "product_identifier": "com.tbd.Done.growth.bundle.yearly.v6",
    "purchase_date": "2023-02-23T02:33:33Z"
  }
};
guding.subscriber.original_purchase_date = "2023-02-23T03:33:33Z";
guding.subscriber.subscriptions = {
  "com.tbd.Done.growth.bundle.yearly.v6": {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type" : "PURCHASED",
    "store" : "app_store"
  }
};
$done({ body: JSON.stringify(guding) });
