/*

iTunes解锁合集，已包含APP如下：
 1、百色特：https://apps.apple.com/app/id515094775
 2、拍特内头：https://apps.apple.com/app/id992421775
 3、Revive：https://apps.apple.com/app/id1616862692
 4、Air系列（计算器Air：https://apps.apple.com/app/id1173365557 水Air：https://apps.apple.com/app/id1498029069 习惯Air：https://apps.apple.com/app/id1608575722 等同系列应用）
 5、HashPhotos：https://apps.apple.com/app/id685784609
 6、ProxyFi：https://apps.apple.com/app/id1671185533
 7、Side：https://apps.apple.com/app/id1532395263
 8、闪念：https://apps.apple.com/app/id1397149726
 9、文晓生 - 小说阅读器：https://apps.apple.com/app/id1595241052
10、小鸡专注：https://apps.apple.com/app/id1627691759

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/iTunes.js

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
}else if (UA && UA.includes('Revive')) {
  guding6.latest_receipt_info[0].product_id = "revive.inapp.pro.lt_wotrial_42.99";
  guding6.pending_renewal_info[0].product_id = "revive.inapp.pro.lt_wotrial_42.99";
  guding8 = true;
}else if (UA && UA.includes('Air')) {
  guding6.latest_receipt_info[0].product_id = "co.airapps.calculator.yearly";
  guding6.pending_renewal_info[0].product_id = "co.airapps.calculator.yearly";
  guding8 = true;
}else if (UA && UA.includes('HashPhotos')) {
  guding6.latest_receipt_info[0].product_id = "com.kobaltlab.HashPhotos.iap.allinone.free";
  guding6.pending_renewal_info[0].product_id = "com.kobaltlab.HashPhotos.iap.allinone.free";
  guding8 = true;
}else if (UA && UA.includes('ProxyFi')) {
  guding6.latest_receipt_info[0].product_id = "week.proxyfi.sub";
  guding6.pending_renewal_info[0].product_id = "week.proxyfi.sub";
  guding8 = true;
}else if (UA && UA.includes('Side')) {
  guding6.latest_receipt_info[0].product_id = "com.johnil.side.year";
  guding6.pending_renewal_info[0].product_id = "com.johnil.side.year";
  guding8 = true;
}else if (UA && UA.includes('MyMemoryDebris')) {
  guding6.latest_receipt_info[0].product_id = "com.chenxi.shannian.superNian";
  guding6.pending_renewal_info[0].product_id = "com.chenxi.shannian.superNian";
  guding8 = true;
}else if (UA && UA.includes('FileArtifact')) {
  guding6.latest_receipt_info[0].product_id = "com.shengzhou.fileartifact.year";
  guding6.pending_renewal_info[0].product_id = "com.shengzhou.fileartifact.year";
  guding8 = true;
}else if (UA && UA.includes('ChickAlarmClock')) {
  guding6.latest_receipt_info[0].product_id = "Pro_M01";
  guding6.pending_renewal_info[0].product_id = "Pro_M01";
  guding8 = true;
}


if(guding8){
  guding = guding6;
}
$done({ body: JSON.stringify(guding) });
