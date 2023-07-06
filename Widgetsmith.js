var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Premium": {//修改
    "expires_date": "2333-02-23T00:02:33Z",
    "product_identifier": "PremiumAnnualWidget",//修改，取platform_product_identifier
  }
};
guding.subscriber.subscriptions = {
  "PremiumAnnualWidget":{//修改，取platform_product_identifier
    "expires_date":"2333-02-23T00:02:33Z",
  }
};
$done({ body: JSON.stringify(guding) });
