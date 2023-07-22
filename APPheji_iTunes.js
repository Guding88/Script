/*

iTunes解锁合集，已解锁APP及下载地址请见说明：https://github.com/Guding88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/APPheji_iTunes.js

[MITM]
hostname = buy.itunes.apple.com

*/
var headers = {};
for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
  }
}
var UA = $request.headers['user-agent'];
var guding = JSON.parse($response.body);
var guding6 = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "com.sugarmo.ScrollClip",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1669275526000",
        "transaction_id": "300001282466542",
        "original_transaction_id": "300001282466542",
        "product_id": "com.sugarmo.ScrollClip.pro",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1669275526000"
      }
    ],
    "application_version": "3206",
    "original_purchase_date_ms": "1669275302000",
    "original_application_version": "3206"
  },
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
};
var guding8 = false;

if (UA && UA.includes('bazaart')) {
  guding6.latest_receipt_info[0].product_id = "Bazaart_Premium_Monthly_v9";
  guding6.pending_renewal_info[0].product_id = "Bazaart_Premium_Monthly_v9";
  guding8 = true;
} else if (UA && UA.includes('%E6%8B%8D%E7%89%B9%E5%86%85%E5%A4%B4')) {
  guding6.latest_receipt_info[0].product_id = "Patternator_Lock_Screen_Monthly";
  guding6.pending_renewal_info[0].product_id = "Patternator_Lock_Screen_Monthly";
  guding8 = true;
} else if (UA && UA.includes('Revive')) {
  guding6.latest_receipt_info[0].product_id = "revive.inapp.pro.lt_wotrial_42.99";
  guding6.pending_renewal_info[0].product_id = "revive.inapp.pro.lt_wotrial_42.99";
  guding8 = true;
} else if (UA && UA.includes('Air')) {
  guding6.latest_receipt_info[0].product_id = "co.airapps.calculator.yearly";
  guding6.pending_renewal_info[0].product_id = "co.airapps.calculator.yearly";
  guding8 = true;
} else if (UA && UA.includes('HashPhotos')) {
  guding6.latest_receipt_info[0].product_id = "com.kobaltlab.HashPhotos.iap.allinone.free";
  guding6.pending_renewal_info[0].product_id = "com.kobaltlab.HashPhotos.iap.allinone.free";
  guding8 = true;
} else if (UA && UA.includes('ProxyFi')) {
  guding6.latest_receipt_info[0].product_id = "week.proxyfi.sub";
  guding6.pending_renewal_info[0].product_id = "week.proxyfi.sub";
  guding8 = true;
} else if (UA && UA.includes('Side')) {
  guding6.latest_receipt_info[0].product_id = "com.johnil.side.year";
  guding6.pending_renewal_info[0].product_id = "com.johnil.side.year";
  guding8 = true;
} else if (UA && UA.includes('MyMemoryDebris')) {
  guding6.latest_receipt_info[0].product_id = "com.chenxi.shannian.superNian";
  guding6.pending_renewal_info[0].product_id = "com.chenxi.shannian.superNian";
  guding8 = true;
} else if (UA && UA.includes('FileArtifact')) {
  guding6.latest_receipt_info[0].product_id = "com.shengzhou.fileartifact.year";
  guding6.pending_renewal_info[0].product_id = "com.shengzhou.fileartifact.year";
  guding8 = true;
} else if (UA && UA.includes('ChickAlarmClock')) {
  guding6.latest_receipt_info[0].product_id = "Pro_M01";
  guding6.pending_renewal_info[0].product_id = "Pro_M01";
  guding8 = true;
} else if (UA && UA.includes('Picsew')) {
  guding6.latest_receipt_info[0].product_id = "com.sugarmo.ScrollClip.pro";
  guding6.pending_renewal_info[0].product_id = "com.sugarmo.ScrollClip.pro";
  guding8 = true;
} else if (UA && UA.includes('TWWeatherMajor')) {
  guding6.latest_receipt_info[0].product_id = "com.highonemob.weather.base.w";
  guding6.pending_renewal_info[0].product_id = "com.highonemob.weather.base.w";
  guding8 = true;
} else if (UA && UA.includes('ProKnockOut')) {
  guding6.latest_receipt_info[0].product_id = "com.knockout.1monthplus.2weektrail";
  guding6.pending_renewal_info[0].product_id = "com.knockout.1monthplus.2weektrail";
  guding8 = true;
} else if (UA && UA.includes('PutApp')) {
  guding6.latest_receipt_info[0].product_id = "https://t.me/Guding88";
  guding6.pending_renewal_info[0].product_id = "https://t.me/Guding88";
  guding8 = true;
}else if (UA && UA.includes('VideoDay')) {
  guding6.latest_receipt_info[0].product_id = "me.imgbase.videoday.profeaturesYearly";
  guding6.pending_renewal_info[0].product_id = "me.imgbase.videoday.profeaturesYearly";
  guding8 = true;
}else if (UA && UA.includes('CHAT%20AI')) {
  guding6.latest_receipt_info[0].product_id = "https://t.me/Guding88";
  guding6.pending_renewal_info[0].product_id = "https://t.me/Guding88";
  guding8 = true;
}else if (UA && UA.includes('CCD_Camera')) {
  guding6.latest_receipt_info[0].product_id = "https://t.me/Guding88";
  guding6.pending_renewal_info[0].product_id = "https://t.me/Guding88";
  guding8 = true;
}else if (UA && UA.includes('ScreenRecord')) {
  guding6.latest_receipt_info[0].product_id = "https://t.me/Guding88";
  guding6.pending_renewal_info[0].product_id = "https://t.me/Guding88";
  guding8 = true;
}else if (UA && UA.includes('Koloro')) {
  guding6.latest_receipt_info[0].product_id = "https://t.me/Guding88";
  guding6.pending_renewal_info[0].product_id = "https://t.me/Guding88";
  guding8 = true;
}else if (UA && UA.includes('AllMyBatteries')) {
  guding6.latest_receipt_info[0].product_id = "https://t.me/Guding88";
  guding6.pending_renewal_info[0].product_id = "https://t.me/Guding88";
  guding8 = true;
}

//if (guding8) {
  guding = guding6;
//}
$done({ body: JSON.stringify(guding) });
