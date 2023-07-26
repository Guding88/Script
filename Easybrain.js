/*

Drum Pad Machine - 节拍制作神器：https://apps.apple.com/app/id1057968965
Pixel Art - 数字填色&数字绘画游戏：https://apps.apple.com/app/id1274972321
Groovepad - 用于创建电子音乐的移动应用：https://apps.apple.com/app/id1454398991

[rewrite_local]
^https?:\/\/storevalidator\.easybrain\.com\/api\/v1\/receipt_verify url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/Easybrain.js

[MITM]
hostname = storevalidator.easybrain.com
*/
var guding = JSON.parse($response.body);
guding.subscription = {
    "trial_available": true,
    "is_active": true
  }
$done({ body: JSON.stringify(guding) });
