/*

小戈输入法：https://apps.apple.com/app/id1643095681

[rewrite_local]
^https?:\/\/api\.boyasec\.com\/ime url script-response-body https://raw.githubusercontent.com/Guding88/Script/main/xiaogeshurufa.js

[MITM]
hostname = api.boyasec.com

*/
var guding = JSON.parse($response.body);
if ($request.method === 'GET' && $request.url.indexOf('/ime/rights/list') !== -1) {
guding.data = [
    {
      "name" : "应用安全锁"，
      "expiration" : 148204937166000，
      "code" : "SecurityLock"
    }，
    {
      "name" : "隐文风格"，
      "expiration" : 148204937166000，
      "code" : "Cryptic"
    }，
    {
      "name" : "更换图标"，
      "expiration" : 148204937166000，
      "code" : "ChangeIcon"
    }，
    {
      "name" : "文件加密"，
      "expiration" : 148204937166000，
      "code" : "FileEncrypt"
    }，
    {
      "name" : "加密通话"，
      "expiration" : 148204937166000，
      "code" : "CallEncrypt"
    }，
    {
      "name" : "私密发送"，
      "expiration" : 148204937166000，
      "code" : "Private"
    }，
    {
      "name" : "全能慧聊"，
      "expiration" : 148204937166000，
      "code" : "ChatGPT"
    }，
    {
      "name" : "全时撤回"，
      "expiration" : 148204937166000，
      "code" : "Retract"
    }，
    {
      "name" : "阅后即焚"，
      "expiration" : 148204937166000，
      "code" : "Snapchat"
    }，
    {
      "name" : "语音加密"，
      "expiration" : 148204937166000，
      "code" : "VoiceEncrypt"
    },
    {
      "name" : "通话设置",
      "expiration" : 148204937166000,
      "code" : "CallConfig"
    },
    {
      "name" : "文件密库",
      "expiration" : 148204937166000,
      "code" : "FileVault"
    }
  ]
} else if ($request.method === 'GET' && $request.url.indexOf('/ime/user/rights-plan/list') !== -1) {
  guding.data = [{
      "name" : "个人版",
      "endTime" : 148204937166000
    }
  ]
} else {};

$done({ body: JSON.stringify(guding) });
