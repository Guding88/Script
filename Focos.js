/*

Focos：https://apps.apple.com/app/id1274938524

[rewrite_local]
^https?:\/\/focos\.oracle\.bendingspoonsapps\.com\/v2\/users\/setup url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Bazaart.js

[MITM]
hostname = focos.oracle.bendingspoonsapps.com

*/
var guding = JSON.parse($response.body);
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
    "active_bundle_subscriptions": [
      {
        "expiry": "6666-06-06T06:06:06+00:00",
        "product_id": "com.focos.1y_t130_1w_bundle_creator",
        "features": [
        ]
      }
    ],
	};
$done({ body: JSON.stringify(guding) });

