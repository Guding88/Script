/*

‎Focos：https://apps.apple.com/app/id1274938524

[rewrite_local]
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v2\/users\/setup url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Focos.js

[MITM]
hostname = focos.oracle.bendingspoonsapps.com

*/
var guding = JSON.parse($response.body);
//guding.me.active_subscriptions_ids = ["com.focos.1y_t130_1w_bundle_creator"];
guding.me = {
    "non_consumables_ids": [
    ],
    "active_subscriptions_ids": [
      "com.focos.1y_t130_1w_bundle_creator"
    ],
    "privacy_notice": {
      "required_consents": [
      ],
      "is_at_least_16": "unknown",
      "last_acknowledged_version": "1.1.0"
    },
    "unique_id": "88888888-8888-8888-8888-888888888888",
    "active_bundle_subscriptions": [
    ],
    "is_spooner": false,
    "terms_of_service": {
      "last_accepted_version": "1.8.0"
    },
    "available_consumable_credits": {
    }
  };
$done({ body: JSON.stringify(guding) });
