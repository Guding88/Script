/*

TG频道：https://t.me/Guding88
TG群组：https://t.me/GudingChat

Revenuecat解锁合集，已解锁APP及下载地址请见说明：https://github.com/Guding88/Script/blob/main/Readme.md

[rewrite_local]
^https?:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/APPheji_Revenuecat.js
//^https?:\/\/api\.(revenuecat|rc-backup)\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Guding88/Script/main/APPheji_Revenuecat.js

[MITM]
hostname = api.revenuecat.com, api.rc-backup.com

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
    '%E8%BD%A6%E7%A5%A8%E7%A5%A8':{ name: 'vip+watch_vip', id: 'eticket_with_watch_1y_7d0'},
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
    'DayPoem':{ name: 'Pro Lifetime', id: 'com.uzero.poem.life1'},
    'ImageX':{ name: 'imagex.pro.ios', id: 'imagex.pro.ios.lifetime'},
    'Percento':{ name: 'premium', id: 'app.percento.premium.9.monthly'},
    'GoodThing':{ name: 'pro', id: 'goodhappens_basic_forever'},
    'MallocVPN':{ name: 'IOS_PRO', id: 'ios_vpn_monthly'},
    'Usage':{ name: 'pro', id: 'com.olegst.usage.pro'},
    'inaugurate':{ name: 'pro', id: 'iagr_pro_1m'},
    'Decision':{ name: 'com.nixwang.decision.entitlements.pro', id: 'com.nixwang.decision.pro'},
    '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6':{ name: 'plus', id: 'powertimer.plus'},
    'Plant%20Journal':{ name: 'pro', id: 'pro_3999_lifetime'},
    'HRZN':{ name: 'plus', id: 'plus_999_lifetime'},
    '%E5%96%B5%E7%BB%84%E4%BB%B6':{ name: 'MiaoWidgetPro', id: 'MiaoWidgetProYear'},
    'MyPianist':{ name: 'pro', id: 'com.collaparte.mypianist.pro.yearly'},
    'Thenics':{ name: 'pro', id: 'pro_yearly_subscription_ios'},
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus'},
    'Math%20Makers':{ name: 'Subscriber', id: 'com.ululab.numbers.subscription_one_year_03'},
    'Happy%3ADays':{ name: 'pro', id: 'happy_999_lifetime'},
    'Thiro':{ name: 'pro', id: 'atelerix_pro_lifetime'},
    'FTChatAI':{ name: 'pro', id: 'ft_ai_1799_1y'},
    '%E7%A7%A9%E5%BA%8F%E7%9B%AE%E6%A0%87':{ name: 'pro', id: 'com.metaorder.OKRTomato.vip.supremacy'},
    'Zoomerang':{ name: 'pro', id: 'zoomerang.yearly'},
    'FastingForWoman':{ name: 'wefast_premium', id: 'wefast.yearlysubscription'},
    'Cookie':{ name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime'},
    '%E5%9B%BE%E7%89%87%E6%B6%88%E9%99%A4':{ name: 'premium membership', id: 'com.skysoft.removalfree.introduction.yearly'},
    '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE':{ name: 'pro', id: 'com.happydogteam.relax.lifetimePro'},
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_20dlrs_1'},
    'Emphasis': { name: 'premium', id: 'app.emphasis.subscription.yearly' },
    'Numpkin':{ name: 'pro', id: 'numpkin.pro.yearly.regular'},
    'Emoji%E4%B8%96%E7%95%8C':{ name: 'Premium', id: 'com.lishaohui.emojiworld.lifetime'},
    'Finale%20To%20Do':{ name: 'FinalePro', id: 'FinaleProLifetime'},
    'WeatherFit':{ name: 'Pro', id: 'com.antonchuiko.wthrd.premium_onetime'},
    'Photomator':{ name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_yearly_v1'},
    'lilbucket':{ name: 'pro', id: 'bucket_lifetime'},
    'Mojo':{ name: 'pro', id: 'video.mojo.pro.yearly'},
    'cdiary':{ name: 'Premium', id: 'pub.kiya.daymoment.lifetime'},
    'EZPZ':{ name: 'premium', id: 'com.chroma.sounddoodles.annual.trial'},//EZPZ
    'jizhi':{ name: 'jizhi_vip', id: 'jizhi_vip'},
    'card':{ name: 'vip', id: 'card_vip'},
    'Drops':{ name: 'premium', id: 'premium_yearly_full_price_tier_c_free_trial_7_int'},
    'Noverdue':{ name: 'pro', id: 'noverdue.yearly.plan0'},
    'ImAFish':{ name: 'Pro', id: 'ProOver'},
    'GradientMusic':{ name: 'Pro', id: 'com.gradient.vision.new.music.one.time.79'},
    'streaks':{ name: 'patron', id: 'com.andyworks.streaks.yearlyPatron'},
    'Grow':{ name: 'grow_pro', id: 'grow_lifetime'},//版本号：857848362
    'Strides':{ name: 'plus', id: 'Annual'},
    'Summit_iOS':{ name: 'pro', id: 'Summit_Monthly1'},
    'PomoStiker':{ name: 'lifetimeForever', id: 'com.daya.lifetimeforever'},
    'Uio':{ name: 'PRO', id: 'com.daya.Uio.quarterly'},
    'Snipd':{ name: 'premium', id: 'snipd_premium_1y_7199_trial_2w_v2'},
    //'Cuto':{ name: 'cutopro', id: 'com.potatsolab.cuto.pro'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'tiimo':{ name: 'full_access', id: 'lifetime.iap'},
    'Subtrack':{ name: 'pro', id: 'com.mohitnandwani.subtrack.subtrackpro.family'},
    'Aphrodite':{ name: 'all', id: 'com.ziheng.aphrodite.lifetime'},
    '%E7%94%BB%E5%8E%86':{ name: 'pro', id: 'com.bapaws.calendar.lifetime'},
    'NotSmoke':{ name: 'not_smoke_vip_01', id: 'not_smoke_01_12_month'},
    'Record2Text':{ name: 'afi.recnote.pro', id: 'afi.recnote.pro'},
    'MusicMate':{ name: 'premium', id: 'mm_lifetime_198_premium'},
    'Blurer':{ name: 'paid_access', id: 'pro_free'},
    'apollo':{ name: 'all', id: 'com.ziheng.apollo.onetime'},
    'OneBox':{ name: 'all', id: 'com.ziheng.pandora.lifetime'},
    'totowallet':{ name: 'all', id: 'com.ziheng.totowallet.onetimepurchase'},
    'AIWeatherBot':{ name: 'Premium', id: 'com.lionsapp.AIWeatherBot.Premium.Annual'},
    'Rond':{ name: 'pro', id: 'lifetime_108'},
    'SwitchGallery':{ name: 'switchbuddy+', id: 'sb_lifetime_purchase'},
    'ShellBean':{ name: 'pro', id: 'com.ningle.shellbean.subscription.year'},
    'Langster':{ name: 'Premium', id: 'com.langster.universal.lifetime'},
    'AudioPlayer':{ name: 'Pro', id: 'xyz.lijun.www.AudioPlayer.premium.newuser'},
    'FoJiCam':{ name: 'ProVersionLifeTime', id: 'com.uzero.cn.fojicam.life1'},
    //'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},
    'Ask':{ name: 'Perplexity Pro', id: 'pro_200_yr_1w_new'},
    'PipDoc':{ name: 'pro', id: 'pipdoc_pro_lifetime'},
    'Tyson':{ name: 'pro', id: 'lux_7999_1y_2w0'},//来自大圣的徕卡
    'Yosum':{ name: 'Premium', id: 'terrykuo.co.yosum.premiummembership'},
    'iplayTV':{ name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12'},
    'TQBrowser':{ name: 'pro', id: 'com.tk.client.lifetime'},
    'nasctl':{ name: 'pro', id: 'nasctl_pro'},
    'Sleepo':{ name: 'pro', id: 'sleepo_premium_lifetime_free'},
    'Super%20AI%20Chat':{ name: 'premium', id: 'chatbot_v4_1999_1y'},
    //'PicSeedClient':{ name: 'Pro', id: 'com.picseed.sub.pro.event.annual'},//PicSeed
    'Free':{ name: 'pro', id: 'appspree_pro_lifetime'},//Appspree
    'PastePal':{ name: 'pro', id: 'com.onmyway133.PastePal.pro'},//PastePal
    'XGBA':{ name: 'xGBA.pro', id: 'xGBA.lifetime.20240502'},
    'memesoundboard':{ name: 'pro', id: 'lifetime_3499'},//Meme Soundboard, Effects: Deez
    'gloriousYouth':{ name: 'gloriousYouth', id: 'gloriousYouth'},
    '%E8%B0%9C%E5%BA%95%E6%97%B6%E9%92%9F':{ name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro'},
    'AdGuard%20Home%20Remote':{ name: 'aghrpro', id: 'adguard.home.remote.pro'},


    //以下内容来自卑鄙的Baby（@Yu9191）
    'Spark':{ name: 'premium', id: 'spark_5999_1y_1w0'},
    'WeeklyNote':{ name: 'org.zrey.weeklynote', id: 'org.zrey.weeklynote.flash_lifetime'},//周周记
    'Text%20Workflow':{ name: 'pro', id: 'tw_99_1m'},
    
    //群友发的，不知道从谁那摘出来的
    'ScreenRecordCase':{ name: 'Premium', id: 'me.fandong.ScreenRecordCase.Ultra'},


    
    
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-06-06T06:06:06Z",
    "purchase_date": "2023-06-06T06:06:06Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      guding6.subscriber.subscriptions = {};
      guding6.subscriber.subscriptions[id] = data;
      guding6.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      guding6.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  guding.body = JSON.stringify(guding6);
}
$done(guding);
