/*

极简汇率

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/[^\/]+$ url script-response-body https://raw.githubusercontent.com/Guding88/Scritp/main/jjhl.js

[MITM]
hostname = api.revenuecat.com

*/

var guding = JSON.parse($response.body);
guding.data = [{
        "vipStatus": "paid",
        "vipLevel": "senior",
        "expire": "2333-02-23 17:11:06",
        "vipPayType": "auto_sub",
        "vipPayUnit": "month",
        "vipPayNum": 1,
}]
$done({ body: JSON.stringify(guding) });
