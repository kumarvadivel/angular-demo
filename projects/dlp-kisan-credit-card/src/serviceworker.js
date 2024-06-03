function hashString() {
  let d = new Date().getTime();
  return "xxxxxxxx-xxxx-7xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (d + crypto.getRandomValues(new Uint32Array(1))[0] * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}

let date = new Date();
let timezone = -date.getTimezoneOffset() * 60;
self.addEventListener('push', function (event) {
  let _data = event.data ? JSON.parse(event.data.text()) : {};
  if (_data.sp && _data.sp == 'true') {
      event.waitUntil(new Promise(function () {
          if (_data?.activeCampaigns.length > 0) {
              let data = _data.activeCampaigns[0].data
              let appId = _data.activeCampaigns[0].data.app_id
              transmitEvent('Campaign_Received', data)
              storeCampaignInDB(appId, _data)
          }
      }))
  } else if(event.target.registration.scope === self.registration.scope) {
          transmitEvent('Campaign_Received', _data)
          event.waitUntil(
              self.registration.showNotification(_data.title, {
                  body: _data.message,
                  icon: _data.icon,
                  image: _data.eni,
                  data: event.data ? JSON.parse(event.data.text()) : {},
                  actions: (_data.action) ?
                      [{action: _data.action[0].actionType, title: _data.action[0].actionName}]
                      : []
              })
          );
  }
});
self.addEventListener('notificationclick', function (event) {
  if (event.notification.data) {
      let _data = event.notification.data;
      let notificationUrl = _data.eurl || (_data.action) ? _data.action[0].actionExternalUrl : '';
      event.notification.close();
      transmitEvent('Campaign_Clicked', _data)
      if (!notificationUrl == '' || !notificationUrl == undefined) {
          event.waitUntil(
              clients.matchAll({
                  type: "window"
              })
                  .then(function (_clientList) {
                      if (clients.openWindow) {
                          return clients.openWindow(notificationUrl);
                      }
                  })
          );
      }
  }
});

function recordEvent(event, appId) {
  let openRequest = indexedDB.open("store", 1);
  openRequest.onsuccess = function () {
      let db = openRequest.result;
      let transaction = db.transaction("users", "readwrite");
      let users = transaction.objectStore("users");
      let user = users.get(appId);
      user.onsuccess = function () {
          let obj = {
              "device_id": this.result[`${appId}_did`],
              "order_id": 1,
              "message_id": hashString(),
              "uptimestamp": Math.floor(new Date().getTime() / 1000),
              "events": [...user.result.events],
              "app_key": this.result[`${appId}_appkey`],
              "app_id": this.result[`${appId}_appId`],
              "api_key": this.result[`${appId}_apiKey`],
              "appuserid": "", "childAppId": "",
              "sdk_version": this.result[`${appId}_sdkIVersion`],
              "sdk_i_version": this.result[`${appId}_sdkVersion`],
              "app_version": this.result[`${appId}_appVersion`],
              "app_package": this.result[`${appId}_appPackage`],
              "timestamp": Math.floor(new Date().getTime() / 1000),
              "app_code": this.result[`${appId}_appCode`]
          }
          user.result.events[0].key = event.key;
          user.result.events[0].sid = hashString();
          user.result.events[0].segmentation = event.segment;
          user.result.events[0].context.when.timestamp = Math.floor(new Date().getTime() / 1000);
          user.result.events[0].timestamp = Math.floor(new Date().getTime() / 1000);
          user.result.events[0].uptimestamp = Math.floor(new Date().getTime() / 1000);
          user.result.events[0].mtimestamp = Math.floor(new Date().getTime());
          const url = user.result[`${appId}_baseUrl`] + user.result[`${appId}_eventUrl`];
          fetch(`${url}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
          })
      };
  }
}

let storeCampaignInDB = (_appId, _data) => {
  return new Promise(function (resolve, _reject) {
      let openRequest = indexedDB.open("store", 1);
      openRequest.onsuccess = function () {
          let db = openRequest.result;
          let transaction = db.transaction("users", "readwrite");
          transaction.objectStore("users");
      }
      resolve(openRequest.onsuccess)
  })
}

function transmitEvent(key, _data) {
  let campid = _data.camp_id;
  let vid = (_data.vid) ? _data.vid : undefined
  let mid = (_data.mid) ? _data.mid : undefined
  let appId = _data.app_id;
  recordEvent({
      key: key,
      segment: {campid, vid, mid},
  }, appId);
}