/*

极简汇率

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
