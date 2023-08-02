/*

星光手帐：https://apps.apple.com/app/id1579846386

[rewrite_local]
^https?:\/\/sz\.szsszykj\.com\/api\/(user\/info|sign\/index|energy\/index|version\/popup) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/xingguangshouzhang.js

[MITM]
hostname = sz.szsszykj.com

*/
var guding = JSON.parse($response.body);
if ($request.url.includes("/user/info")) {
guding.Content.user_info.nickname = "骨钉";
guding.Content.user_info.signature = "TG频道：https://t.me/Guding88";
guding.Content.user_info.avatar = "https:\/\/raw\.githubusercontent\.com\/Guding88\/iCon\/main\/png\/Guding\.png";
guding.Content.user_info.avatar_frame = "https:\/\/vs-m.szsszykj.com\/handbook\/187d8202207061108556501.png";
guding.Content.user_info.medal = "棣棣@6";
guding.Content.user_info.mobile ="6";
guding.Content.vip_info = {
      "type": 6,
      "big_vip": 6,
      "expire_time": "6666-06-06 06:06:06"
}
} else if ($request.url.includes("/sign/index")) {
guding.Content.vip_info = {
      "type": 6,
      "big_vip": 6,
      "expire_time": "6666-06-06 06:06:06"
}
} else if ($request.url.includes("/energy/index")) {
guding.Content.vip_info = {
      "type": 6,
      "big_vip": 6,
      "expire_time": "6666-06-06 06:06:06"
} 
}else if ($request.url.includes("/version/popup")) {
guding = {

}
}
guding = JSON.stringify(guding);
$done({ body:guding});
