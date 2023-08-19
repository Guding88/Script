## 发布频道
Telegram：https://t.me/Guding88

## 脚本功能
霸王茶姬小程序自动签到

## Surge 模块（Shadowrocket）

```properties
https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj.sgmodule
```
## Loon 插件

```properties
https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj.plugin
```
## Stash 覆写

```properties
https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj.stoverride
```

## Quantumult X 配置

```properties

[rewrite local]
^https?:\/\/webapi\.qmai\.cn\/web\/catering\/integral\/sign\/signIn url script-request-body https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj_token.js

[MITM]
hostname = webapi.qmai.cn

[task_local]
00 10 * * * https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj.js, tag=霸王茶姬小程序签到, img-url=https://raw.githubusercontent.com/Guding88/Script/main/bawangchaji/bwcj.png, enabled=true

```


## 食用方法
  * 添加 bwcj_token.js 以获取用户信息
  * 进入微信霸王茶姬小程序 --> 积分商城 --> 积分签到 --> 签到
  * 配置Task脚本 bwcj.js
  * 每天10:00自动签到
