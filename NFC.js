/*

NFC Scanner Tool for iPhone：https://apps.apple.com/app/id1249686798

[rewrite_local]
^https?:\/\/api\.qonversion\.io\/v1\/user\/init url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/NFC.js

[MITM]
hostname = api.qonversion.io

*/
var guding = JSON.parse($response.body);
guding.data["permissions"] = [{
    "id": "permission_webhook",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_unlimited_pdf_pages",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_unlimited_qr_code_widgets",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_ad_free",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_dark_rainbow",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_gold",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_hackergreen",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_rainbow",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_appicon_rastafari",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly", 
}, {
    "id": "permission_appicon_ruby",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly", 
}, {
    "id": "permission_speech_synthesizer",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_englishgreen",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_gold",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_hackergreen",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_horsered",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_theme_purplehaze",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}, {
    "id": "permission_unlimited",
    "active": 1,
    "renew_state": 1,
    "associated_product": "unlimited_yearly",
}]
$done({body: JSON.stringify(guding)});
