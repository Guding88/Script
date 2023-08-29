/*

CARROT Weather：https://apps.apple.com/app/id961390574

[rewrite_local]
^https?:\/\/carrotweather\.herokuapp\.com\/parse\/functions\/findSubscriptionsForUserId url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/CARROTWeather.js

[MITM]
hostname = carrotweather.herokuapp.com

*/
var guding = JSON.parse($response.body);
guding = {
  "result": {
    "serverDate": {
      "__type": "Date",
      "iso": "2023-08-26T06:06:06.552Z"
    },
    "subscriptions": [
      {
        "__type": "Object",
        "appStartingVersion": "5.11.2.2",
        "className": "Subscription",
        "status": 0,
        "gracePeriodExpiresTime": null,
        "packageName": "com.grailr.CARROTweather",
        "purchaseTime": 1663290666000,
        "expirationReason": null,
        "createdAt": "2023-08-26T06:06:06.552Z",
        "lastNotificationDate": {
          "__type": "Date",
          "iso": "2023-08-26T06:06:06.552Z"
        },
        "productId": "com.grailr.carrotWeather.newPremiumGold1year",
        "appPurchaseTime": "1663290666000",
        "updatedAt": "2023-08-26T06:06:06.552Z",
        "isInBillingRetryPeriod": null,
        "lastNotification": "INITIAL_BUY",
        "service": "apple",
        "originalPurchaseTime": 1663290666000,
        "cancellationDate": null,
        "environment": "PROD",
        "objectId": "P16nu6a666",
        "in_app_ownership_type": "PURCHASED",
        "cancellationReason": null,
        "autoRenewStatus": 1,
        "priceConsentStatus": null,
        "isTrialPeriod": null,
        "expirationTime": "148204937166000",
        "orderId": "560001309466666",
        "userId": "A141A63D-6666-6166-8DA1-6BF66D221666"
      }
    ]
  }
};
$done({ body: JSON.stringify(guding) });
