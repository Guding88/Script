/*

懒饭：https://apps.apple.com/app/id1377082167

[rewrite_local]
^https?:\/\/lanfanapp\.com\/api\/v1 url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/lanfan.js

[MITM]
hostname = lanfanapp.com

*/
var guding = $response.body;
guding = guding.replace(/"is_purchased":\w+/g, '"is_purchased":true');
guding = guding.replace(/"is_prime":\w+/g, '"is_prime":true');
guding = guding.replace(/"unlocked":\w+/g, '"unlocked":true');
$done({ body:guding});
