/*

堆糖：https://apps.apple.com/app/id533415763

[rewrite_local]
^https?:\/\/.*\.duitang\.com\/napi url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/duitang.js

[MITM]
hostname = *.duitang.com

*/
var guding = JSON.parse($response.body);
guding.data.is_life_artist = true;
guding.data.latest_vip_level = 11;
guding.data.vip_end_at_mills = 148204937166000;
guding.data.vip_end_at = 148204937166;
guding.data.svip_mechanism = 1;
guding.data.vip_level = 11;
guding.data.vip = true;
guding.data.can_edit_nickname = true;
$done({body : JSON.stringify(guding)});
