/*

如期：https://apps.apple.com/app/id1579532060

[rewrite_local]
^https?:\/\/www\.freshhome\.top\/mngruqi\/api\/reg\/push url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/ruqi.js

[MITM]
hostname = www.freshhome.top

*/
var guding = $response.body;
guding = guding.replace(/"isVip":"\d+"/g, '"isVip":"1"');
$done({ body:guding});
