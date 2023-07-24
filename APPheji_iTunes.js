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
var uaProductMapping = {
  'ScreenRecord': {product_id: 'https://t.me/Guding88',bundle_id: 'https://t.me/Guding88'},
  'bazaart': {product_id: 'Bazaart_Premium_Monthly_v9',},
  '%E6%8B%8D%E7%89%B9%E5%86%85%E5%A4%B4': {product_id: 'Patternator_Lock_Screen_Monthly',},
  'Revive': {product_id: 'revive.inapp.pro.lt_wotrial_42.99',},
  'Picsew': {product_id: 'com.sugarmo.ScrollClip.pro',bundle_id: 'com.sugarmo.ScrollClip'},
  'Air': {product_id: 'co.airapps.calculator.yearly',},
  'HashPhotos': {product_id: 'com.kobaltlab.HashPhotos.iap.allinone.free',},
  'ProxyFi': {product_id: 'week.proxyfi.sub',},
  'Side': {product_id: 'com.johnil.side.year',},
  'MyMemoryDebris': {product_id: 'com.chenxi.shannian.superNian',},
  'FileArtifact': {product_id: 'com.shengzhou.fileartifact.year',},
  'ChickAlarmClock': {product_id: 'Pro_M01',},
  'TWWeatherMajor': {product_id: 'com.highonemob.weather.base.w',},
  'ProKnockOut': {product_id: 'com.knockout.1monthplus.2weektrail',},
  'PutApp': {product_id: 'https://t.me/Guding88',},
  'VideoDay': {product_id: 'https://t.me/Guding88',},
  'CCD_Camera': {product_id: 'https://t.me/Guding88',},
  'CHAT%20AI': {product_id: 'https://t.me/Guding88',},
  'Koloro': {product_id: 'https://t.me/Guding88',},
  'AllMyBatteries': {product_id: 'https://t.me/Guding88',},
  'ReLens': {product_id: 'com.risingcabbage.pro.camera.yearlysubscription',},
  'Fashion%20Design%20Sketches': {product_id: 'com.pocketartstudio.fashiondesign.twomonths',},



};
var guding6 = { 
    "receipt": { 
      "receipt_type": "Production", 
      "bundle_id": "https://t.me/Guding88", 
      "in_app": [ 
        { 
          "quantity": "1", 
          "purchase_date_ms": "666666666666666", 
          "transaction_id": "666666666666666", 
          "original_transaction_id": "666666666666666", 
          "product_id": "https://t.me/Guding88", 
          "in_app_ownership_type": "PURCHASED", 
          "original_purchase_date_ms": "666666666666666" 
        } 
      ], 
      "application_version": "3206", 
      "original_purchase_date_ms": "666666666666666", 
      "original_application_version": "3206" 
    }, 
    "environment": "Production", 
    "pending_renewal_info": [ 
      { 
        "product_id": "https://t.me/Guding88", 
        "auto_renew_status": "1" 
      } 
    ], 
    "status": 0, 
    "latest_receipt_info": [ 
      { 
        "quantity": "1", 
        "purchase_date_ms": "666666666666666", 
        "expires_date": "6666-06-06 06:06:06 Etc\/GMT", 
        "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles", 
        "is_in_intro_offer_period": "false", 
        "transaction_id": "666666666666666", 
        "is_trial_period": "false", 
        "original_transaction_id": "666666666666666", 
        "product_id": "https://t.me/Guding88", 
        "original_purchase_date_ms": "666666666666666", 
        "expires_date_ms": "148204937166000" 
      } 
    ] 
};
var guding8 = false;
for (var uaKey in uaProductMapping) {
  if (UA && UA.includes(uaKey)) {
    var productInfo = uaProductMapping[uaKey];
    var product_id = productInfo.product_id;
    var bundle_id = productInfo.bundle_id;
    for (var i = 0; i < guding6.latest_receipt_info.length; i++) {
      guding6.latest_receipt_info[i].product_id = product_id;
    }
    for (var i = 0; i < guding6.pending_renewal_info.length; i++) {
      guding6.pending_renewal_info[i].product_id = product_id;
    }
    for (var i = 0; i < guding6.receipt.in_app.length; i++) {
      guding6.receipt.in_app[i].product_id = product_id;
    }
    guding6.receipt.bundle_id = bundle_id;
    guding8 = true;
    break;
  }
}
//if (guding8) {
guding = guding6;
//}
$done({ body: JSON.stringify(guding) });
