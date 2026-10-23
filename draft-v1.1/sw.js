// 비로소4'33'' 이용안내 웹북 서비스 워커 (v1.1)
// - 항상 최신 내용을 먼저 받아 오고(네트워크 우선), 인터넷이 끊기면 마지막으로 본 내용을 보여 줌
// - 안드로이드(Chrome·삼성 인터넷)에서 "앱 설치" 창이 뜨는 조건을 충족
var CACHE = 'biroso433-v1.1';
var CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return; // 지도·글꼴 등 외부 요청은 그대로 통과
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) { return hit || caches.match('index.html'); });
    })
  );
});
