/*

stats.fm：https://apps.apple.com/app/id1526912392

[rewrite_local]
^https?:\/\/api\.stats\.fm\/api\/v1\/me$ url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/statsfm.js

[MITM]
hostname = api.stats.fm

*/
var guding = JSON.parse($response.body);
guding.item.isPro = true;
guding.item.isPlus = true;
guding.item.hasSwipefy = true;
guding.item.displayName = "骨钉";
guding.item.customId = "https:\/\/t\.me\/Guding88";
guding.item.profile.bio = "🎉白嫖军团万岁!";
guding.item.profile.theme = "pink";
guding.item.image = "https:\/\/cdn.stats.fm\/file\/statsfm\/images\/users\/31tkfv4thwwc5czcbq24uyyjbtzq\/83be2cc47a458ffb84f0ad8a1ba3bba4.webp";
$done({ body: JSON.stringify(guding) });
