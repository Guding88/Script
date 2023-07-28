/*

Revenuecat解锁合集，已解锁APP及下载地址请见说明：https://github.com/Guding88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/APPheji_Revenuecat.js
//^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Guding88/Script/main/APPheji_Revenuecat.js

[MITM]
hostname = api.revenuecat.com

*/
const guding = {};
const guding6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} else if (guding6 && guding6.subscriber) {
  guding6.subscriber.subscriptions = guding6.subscriber.subscriptions || {};
  guding6.subscriber.entitlements = guding6.subscriber.entitlements || {};
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
  const app = 'gd';
  const UAMappings = {
    'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime' },
    'Photo%20Vault': { name: 'PRO', id: '2fa_0499_1y' },
    'Authenticator': { name: 'PRO', id: '2fa_0499_1y' },
    'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
    'Structured':{ name: 'pro', id: 'today.structured.pro'},
    'LUTCamera':{ name: 'ProVersionLifeTime', id: 'com.uzero.funforcam.lifetimepurchase'},
    'Clockology':{ name: 'Clockology+', id: 'com.mikehill.clockologyios.yearly'},
    'Falendar':{ name: 'Falendar+', id: 'falendar_68_life'},
    'G%20E%20I%20S%20T':{ name: 'memorado_premium', id: 'com.memorado.subscription.yearly.v2'},
    'PinPaper':{ name: 'allaccess', id: 'Paper_Lifetime'},
    'Lungy':{ name: 'Deluxe', id: 'lungy_1999_lifetime'},
    'MOZE':{ name: 'Premium', id: 'https://t.me/Guding88'},
    'Monefy':{ name: 'monefy_premium', id: 'monefy.yearlysubscription'},
    'OffScreen':{ name: 'Entitlement.Pro', id: 'tech.miidii.offscreen.subscription.year.intro.first_year_discount'},
    'Paper':{ name: 'pro', id: 'com.fiftythree.paper.pro_12'},
    'Photo%20Cleaner':{ name: 'premium', id: 'com.monocraft.photocleaner.lifetime.3'},
    'Pillow':{ name: 'premium', id: 'com.neybox.pillow.premium.year.specialoffer'},
    'pixel_me_tokyo':{ name: 'pro', id: 'pm_jpy2000_7d0'},
    'Purr':{ name: 'Pro', id: 'com.purr.annual.trial'},
    'Reflectly':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'HealthView':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'TimeBloc':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'SleepTimer':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'Tally':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'Grateful':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'Last':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'Done':{ name: 'Growth_Bundle_Subscription', id: 'com.tbd.Done.growth.bundle.yearly.v6'},
    'Ape':{ name: 'pro', id: 'ape.weekly.discount'},
    'Waterlytics':{ name: 'Pro', id: 'app.waterlytics.pro.yearly.v2'},
    'WidgetSmith':{ name: 'Premium', id: 'PremiumAnnualWidget'},
    'Browser':{ name: 'pro', id: 'pro_zoomable'},
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8':{ name: 'vip', id: 'eticket_6_life'},
    'app':{ name: 'Pro', id: 'com.wengqianshan.diet.pro'},
    '%E6%9E%81%E7%AE%80%E5%BC%B9%E5%B9%95':{ name: 'pro', id: 'com.abouttime.flash.year'},
    'MinimalDiary':{ name: 'pro', id: 'com.mad.MinimalDiary.lifetime'},
    'Zen%20Flip%20Clock':{ name: 'pro', id: 'com.mad.zenflipclock.iap.buymeacoffee'},
    '%E6%98%9F%E5%BA%A7':{ name: 'Premium', id: 'com.rk.horoscope.month12'},
    'Time%20Machine':{ name: 'timemachine_pro', id: 'com.abouttime.timemachine.year'},
    'todo':{ name: 'Pro', id: 'com.abouttime.todo.year'},
    '%E6%B0%B4%E5%BF%83%E8%AE%B0':{ name: 'pro', id: 'com.abouttime.heart.year'},
    'Pomodoro':{ name: 'Plus', id: 'com.MINE.PomodoroTimer.plus.lifetime'},
    'My%20Time':{ name: 'Pro', id: 'ninja.fxc.mytime.pro.lifetime'},
    'StarDiary':{ name: 'pro', id: 'com.gsdyx.StarFocus.nonConsumable.forever'},
    'StarFocus':{ name: 'pro', id: 'com.gsdyx.StarFocus.nonConsumable.forever'},
    'iRead':{ name: 'vip', id: 'com.vip.forever_1'},
    'shipian-ios':{ name: 'vipOffering', id: 'shipian_25_forever'},
    'HabitMinder':{ name: 'habitminder_premium', id: 'habitminder.yearlysubscription'},
    'Echo':{ name: 'PLUS', id: 'com.LEMO.LemoFm.plus.lifetime.l3'},
    'Dark%20Noise':{ name: 'pro', id: 'dn_4999_lifetime'},
    'VideoToPhoto':{ name: 'Premium', id: 'VideoToPhoto_premium'},
    'ChatGPTApp':{ name: 'Basic', id: 'com.palligroup.gpt3.yearly'},
    'PDF%20Viewer':{ name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},
    'PhotoSync':{ name: 'premium', id: 'com.touchbyte.PhotoSync.ProLifetime'},
    'Worrydolls':{ name: 'magicmode', id: 'magicmode'},
    'OneWidget':{ name: 'allaccess', id: 'com.onewidget.vip'},
    'CardPhoto':{ name: 'allaccess', id: 'CardPhoto_Pro'},
    'WhiteCloud':{ name: 'allaccess', id: 'wc_pro_1y'},
    'MoneyThings':{ name: 'Premium', id: 'com.lishaohui.cashflow.lifetime'},
    'VSCO':{ name: 'pro', id: 'vscopro_global_5999_annual_AutoFreeTrial'},
    'Tagmiibo':{ name: 'pro', id: 'nfc_pro_lifetime'},
    'AmiiBoss':{ name: 'pro', id: 'amiiboss_pro'},
    'Miiloot':{ name: 'pro', id: 'miiloot_pro'},
    'Stress':{ name: 'StressWatch Pro', id: 'stress_membership_yearly'},
    'Anybox':{ name: 'pro', id: 'cc.anybox.Anybox.annual'},
    'Seamless':{ name: 'Seamless.Pro', id: 'net.shinystone.Seamless.Pro'},
    'DayPoem':{ name: 'Pro Access', id: 'com.uzero.poem.month1'},


    
    
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-02-23T02:33:33Z",
    "purchase_date": "2023-02-23T02:33:33Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      guding6.subscriber.subscriptions[id] = data;
      guding6.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      guding6.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  guding.body = JSON.stringify(guding6);
}
$done(guding);
