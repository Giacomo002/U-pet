self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll([
        "./",
          "manifest.json",
          "https://kit.fontawesome.com/a81368914c.js",
          "https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
          "css/base-style.css",
          "css/components-style.css",
          "css/account-layout.css",
          "css/chat-layout.css",
          "css/home-layout.css",
          "css/settings-layout.css",
          "css/sitter-layout.css",
          "index.html",
          "pages/account-page.html",
          "pages/chat-page.html",
          "pages/settings-page.html",
          "pages/sitter-page.html",
          "js/account.js",
          "js/animation.js",
          "js/filter-home.js",
          "js/home-btns.js",
          "js/index.js",
          "js/keyboard-fix.js",
          "js/main-page.js",
          "js/message.js",
          "js/settings-user-account.js",
          "img/logoUpet.png",
          "img/chat-img.webp"
         ]);
    });
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
