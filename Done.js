var guding = JSON.parse($response.body);
guding.subscriber.entitlements = {
  "Premium": {
    "expires_date": "2333-02-23T00:02:33Z",
    "product_identifier": "com.tbd.Done.growth.bundle.yearly.v6",
  }
};
guding.subscriber.subscriptions = {
  "com.tbd.Done.growth.bundle.yearly.v6":{
    "expires_date":"2333-02-23T00:02:33Z",
  }
};

$done({ body: JSON.stringify(guding) });
