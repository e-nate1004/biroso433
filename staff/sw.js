// 비로소 레터: 안드로이드 공유(연락처·vcf)를 받아 페이지로 넘기는 서비스 워커. /staff/ 범위에서만 동작.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'POST' || !/\/staff\/share\/?$/.test(u.pathname)) return;
  e.respondWith((async function () {
    var parts = [];
    try {
      var f = await e.request.formData();
      ['title', 'text', 'url'].forEach(function (k) { var v = f.get(k); if (v) parts.push(String(v)); });
      var files = f.getAll('files');
      for (var i = 0; i < files.length; i++) { if (files[i] && files[i].text) parts.push(await files[i].text()); }
    } catch (err) {}
    var c = await caches.open('staff-share');
    await c.put('/staff/__shared', new Response(JSON.stringify({ t: Date.now(), text: parts.join('\n') }), { headers: { 'Content-Type': 'application/json' } }));
    return Response.redirect('/staff/#shared', 303);
  })());
});
