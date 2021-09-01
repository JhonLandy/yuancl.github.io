/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6a44571928f9895ec36e38a94edb4a84"
  },
  {
    "url": "assets/css/1.styles.e942180a.css",
    "revision": "fcd86f2596f48161a614c20b15486204"
  },
  {
    "url": "assets/css/10.styles.580e20d4.css",
    "revision": "bd36b1dd758cce4882177d7d307318cc"
  },
  {
    "url": "assets/css/11.styles.3c21455d.css",
    "revision": "8560b7952c93c4d634d9cd5ec02a4c92"
  },
  {
    "url": "assets/css/2.styles.b933ff67.css",
    "revision": "be4249466728e0e5acbe6cabe5c399a5"
  },
  {
    "url": "assets/css/4.styles.3bf4261c.css",
    "revision": "db3af59f4aeeab6f8a8acc3e4f38c1cf"
  },
  {
    "url": "assets/css/5.styles.23e8bea7.css",
    "revision": "4799e47e4e7567ebf68cf29932c3b9af"
  },
  {
    "url": "assets/css/6.styles.1ff145bc.css",
    "revision": "7587703bbad599f0db7eb1133b00a2d7"
  },
  {
    "url": "assets/css/7.styles.7c9d3919.css",
    "revision": "a5df797c49867746c6df31eb7ef9ede9"
  },
  {
    "url": "assets/css/8.styles.7b2f7b62.css",
    "revision": "41856c4745dee9bec4a5fdedff62c832"
  },
  {
    "url": "assets/css/9.styles.7d28aa2e.css",
    "revision": "70586d9ff10af0c43cc17cf648d93698"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/16pic_9349989_s.e3e09d23.png",
    "revision": "e3e09d2326b904e177fffe31cc5f5ca9"
  },
  {
    "url": "assets/img/adjacency-lists.35fd593a.png",
    "revision": "35fd593acbd708487097e24c5b38fc43"
  },
  {
    "url": "assets/img/bars.7034b50f.png",
    "revision": "7034b50f73d054836b400fbec48315ad"
  },
  {
    "url": "assets/img/eventloop.91bb5a6d.gif",
    "revision": "91bb5a6db47fde9ac4f1634c772d9fac"
  },
  {
    "url": "assets/img/graph-input.5aee2e11.png",
    "revision": "5aee2e11ec34431a495f820193beb070"
  },
  {
    "url": "assets/img/html5.a2eaf051.jpeg",
    "revision": "a2eaf0519e990cc35d2748661c38edc4"
  },
  {
    "url": "assets/img/insertion.237bcb0e.png",
    "revision": "237bcb0ec06dbc8b1fdcd844699a4033"
  },
  {
    "url": "assets/img/lifecycle.ca6594f5.png",
    "revision": "ca6594f5afd63257f86ddffde635e7a4"
  },
  {
    "url": "assets/img/merge.2eb6042d.png",
    "revision": "2eb6042d11119b1de7bb39a3613cdd4f"
  },
  {
    "url": "assets/img/mergesortBU.a978b9bd.png",
    "revision": "a978b9bd80dc03f9494e6a1a9f2ffe1d"
  },
  {
    "url": "assets/img/mergesortTD.2df0cda5.png",
    "revision": "2df0cda543c78cabffae95aa945d1e28"
  },
  {
    "url": "assets/img/niuniu.a01b0649.jpg",
    "revision": "a01b0649a71fcefcf095cce6d2b0e4a0"
  },
  {
    "url": "assets/img/origin-upstream.55d70183.png",
    "revision": "55d70183d4d17fc61cf7fc8dc9f42cf9"
  },
  {
    "url": "assets/img/quicksort.ceae7063.png",
    "revision": "ceae706337d16f795fda3666e0abbcf5"
  },
  {
    "url": "assets/img/reactprocess.043150d7.png",
    "revision": "043150d776364d6ab4303ff7caa0c4f4"
  },
  {
    "url": "assets/img/render.ee2c6c44.jpg",
    "revision": "ee2c6c442a5c9be33a205c7c8a490f2c"
  },
  {
    "url": "assets/img/scorder.6332a379.png",
    "revision": "6332a379e5acaa5ee95685944e0ddb55"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selection.e8f57bf1.png",
    "revision": "e8f57bf154b86227d605451d0ad63fd4"
  },
  {
    "url": "assets/img/shell.66e23e7a.png",
    "revision": "66e23e7a536bc512b8ca5bee376f0495"
  },
  {
    "url": "assets/img/test2.89ec9eaa.jpg",
    "revision": "89ec9eaae873b085cef4cec061825ccb"
  },
  {
    "url": "assets/img/testresult.8843a16c.jpg",
    "revision": "8843a16c63d0f673422df61f0f234904"
  },
  {
    "url": "assets/js/10.580e20d4.js",
    "revision": "cdae5629d3252c22d08811217daa8e90"
  },
  {
    "url": "assets/js/11.3c21455d.js",
    "revision": "c9c4eb2f46fe7954c72446955f071e4c"
  },
  {
    "url": "assets/js/12.a4e2a964.js",
    "revision": "90d7c3bb168eef70673134c5ea1d0452"
  },
  {
    "url": "assets/js/13.13ddd399.js",
    "revision": "13065e7c90beae3cb8b38472e828dee0"
  },
  {
    "url": "assets/js/14.99fe8af8.js",
    "revision": "7066afb2a39b8e22c9c6e0eb748102c0"
  },
  {
    "url": "assets/js/15.d9f1ad32.js",
    "revision": "2672f6de022d5c7e1379960882795757"
  },
  {
    "url": "assets/js/16.03549e00.js",
    "revision": "c0aa3c38fa6874c4ba0e1ad15b8452a8"
  },
  {
    "url": "assets/js/17.b1f8d56a.js",
    "revision": "b5f00467c729354782de1a5e48a975bc"
  },
  {
    "url": "assets/js/18.7b378074.js",
    "revision": "d197988eb29770a750c673279e4e8921"
  },
  {
    "url": "assets/js/19.ff288bec.js",
    "revision": "30aca4e59e1fe30057a8478f9ead583c"
  },
  {
    "url": "assets/js/20.54aa7dbe.js",
    "revision": "41eddbbe240da50b1f8a6d1d79f7e719"
  },
  {
    "url": "assets/js/21.97ee73e9.js",
    "revision": "bf729dc9545131bc8f698895ad736a29"
  },
  {
    "url": "assets/js/22.d6d2cd1f.js",
    "revision": "a697b864acc8396a4f560825ccfa62ae"
  },
  {
    "url": "assets/js/23.e21397da.js",
    "revision": "80f7c84b4701a40e2b1996790ca606bc"
  },
  {
    "url": "assets/js/24.f01f5d9a.js",
    "revision": "b536fcd1627b94527ced468516d2f36a"
  },
  {
    "url": "assets/js/25.4548ac89.js",
    "revision": "1c7d19d48952f40f9d5752aec715954e"
  },
  {
    "url": "assets/js/26.7cae0b01.js",
    "revision": "b30805ba9ab49a51f9fa3ecd068cd858"
  },
  {
    "url": "assets/js/27.9ceb6089.js",
    "revision": "be9523a9f16e067e058e96ff5ecf6906"
  },
  {
    "url": "assets/js/28.bc56a1f7.js",
    "revision": "d653996048bfb4b8ebddcfad4512ba10"
  },
  {
    "url": "assets/js/29.e4b24851.js",
    "revision": "44ffe6223643168e02c703e5f1562004"
  },
  {
    "url": "assets/js/30.2470bad2.js",
    "revision": "3523f5cfac9e67509add254fb07508d7"
  },
  {
    "url": "assets/js/31.f368adf0.js",
    "revision": "7c14dcab80913462d46285367e23ec88"
  },
  {
    "url": "assets/js/32.23d23070.js",
    "revision": "7eed875441554843412a8f8d242a7814"
  },
  {
    "url": "assets/js/33.89589b7c.js",
    "revision": "f8d05f74f1bbaf07268f97dad407d3be"
  },
  {
    "url": "assets/js/34.68e10052.js",
    "revision": "62985c3c79914f592c372cad9a81cf72"
  },
  {
    "url": "assets/js/35.fb2f21ab.js",
    "revision": "fa097ac039bed9d34e0e7fd6291fb7b0"
  },
  {
    "url": "assets/js/36.28584171.js",
    "revision": "1eb0376d5b4066eda820acf879372480"
  },
  {
    "url": "assets/js/37.4ca1f214.js",
    "revision": "0007f587fe0e02b408359ac69eb5fe06"
  },
  {
    "url": "assets/js/38.57639507.js",
    "revision": "4cb50acde8879196ea4a949605df912a"
  },
  {
    "url": "assets/js/39.c2e5a701.js",
    "revision": "def7b2ec6c1c2565c1d0d0e8aee75428"
  },
  {
    "url": "assets/js/40.d1707db7.js",
    "revision": "435ed30871c6c7638f757a74bc4dbd4b"
  },
  {
    "url": "assets/js/41.3877d148.js",
    "revision": "8561e45e96c52ed868865979afce3ff1"
  },
  {
    "url": "assets/js/42.e86a3856.js",
    "revision": "2ec1a9413df2b4bae2970d69663220ee"
  },
  {
    "url": "assets/js/43.850595b0.js",
    "revision": "e763901ad5c11f717c1c03c571d21b30"
  },
  {
    "url": "assets/js/44.f1bfac5a.js",
    "revision": "1feb710862f72dec60be801d66fe2296"
  },
  {
    "url": "assets/js/45.4bead14c.js",
    "revision": "cb9c3c1fd72f466ff111b1744affbee3"
  },
  {
    "url": "assets/js/46.7d0570b1.js",
    "revision": "06e8de247336b13e4bd1eed186e22da2"
  },
  {
    "url": "assets/js/47.33456936.js",
    "revision": "434eaa6216c7bc531dbebab429e5750d"
  },
  {
    "url": "assets/js/48.e1cce0c3.js",
    "revision": "7ed71af0564e65a0fbe3957d6b8a1157"
  },
  {
    "url": "assets/js/49.dbec85f4.js",
    "revision": "3a1bbedfd633d2555c50f419ce0e7b1b"
  },
  {
    "url": "assets/js/5.23e8bea7.js",
    "revision": "c4dc42bbc09ed5cb55b41bb11765a83e"
  },
  {
    "url": "assets/js/50.db053b0a.js",
    "revision": "8282df13b2ecbdeba4bc20f4cc332beb"
  },
  {
    "url": "assets/js/51.cae4a9e1.js",
    "revision": "a242f1943a055818f996e9450add93ea"
  },
  {
    "url": "assets/js/52.f175e9ae.js",
    "revision": "a06c92bdb91490400cf2fe738ee6aa26"
  },
  {
    "url": "assets/js/53.ab0f7780.js",
    "revision": "1c0b61091a3aefd22de9575716469495"
  },
  {
    "url": "assets/js/54.748d885e.js",
    "revision": "67352db3f94db83aa289fd3de558f66c"
  },
  {
    "url": "assets/js/55.d5a1477f.js",
    "revision": "ca56f4def48d47f63ad882cbd36a3126"
  },
  {
    "url": "assets/js/56.a6e05733.js",
    "revision": "6ca55c931ab5e2cacfcf78417a4cade6"
  },
  {
    "url": "assets/js/57.9e489729.js",
    "revision": "23dad4dc779eadbd1ccb72d8662badaf"
  },
  {
    "url": "assets/js/58.9b693504.js",
    "revision": "66388ed790fbbef31a1aca36b7a07659"
  },
  {
    "url": "assets/js/59.ae06119c.js",
    "revision": "a6d273458acd2bcfed0a22c2c45544fc"
  },
  {
    "url": "assets/js/6.1ff145bc.js",
    "revision": "114b945ed8654139e0d84e1b35604bec"
  },
  {
    "url": "assets/js/7.7c9d3919.js",
    "revision": "022892a4dcea094b6385c7f394beb617"
  },
  {
    "url": "assets/js/8.7b2f7b62.js",
    "revision": "e0dd39bcec94503eac26b55ea4cc4656"
  },
  {
    "url": "assets/js/9.7d28aa2e.js",
    "revision": "55ae648cf981bc74bcf650e3d6e00ec5"
  },
  {
    "url": "assets/js/app.d85d545c.js",
    "revision": "5e184c11b6a274cd73a06015ff887247"
  },
  {
    "url": "assets/js/chunk-elementUI.e942180a.js",
    "revision": "a675353294a28e74c171aefa1647ed56"
  },
  {
    "url": "assets/js/chunk-libs.b933ff67.js",
    "revision": "9be09b550318e6ae2c0933d861af78c4"
  },
  {
    "url": "assets/js/runtime.8628256b.js",
    "revision": "97fd4cc243b5f7fdaac1e5b22d7e5a42"
  },
  {
    "url": "images/code/1604035974.jpg",
    "revision": "bcb32c7c89c628c72d42109ee104a421"
  },
  {
    "url": "images/code/23tree-anatomy.png",
    "revision": "3641a3ae76e6edcd6040610ae4875dc4"
  },
  {
    "url": "images/code/adjacency-lists.png",
    "revision": "8df51a00dce29bbf354e778889fe9ca4"
  },
  {
    "url": "images/code/bars.png",
    "revision": "e18f7b1c1fbbf9370a5d21039810cad4"
  },
  {
    "url": "images/code/graph-input.png",
    "revision": "30cdfe2477deb76b6e54bf4de7560e83"
  },
  {
    "url": "images/code/h-sorted.png",
    "revision": "58f37bb61fd93c9d4ddd19e91ab35d70"
  },
  {
    "url": "images/code/insertion.png",
    "revision": "0dc151e6e98011b3387c908817d4b9ac"
  },
  {
    "url": "images/code/merge.png",
    "revision": "cc2191ea1e9e9ba9c403e1a342f0b7ee"
  },
  {
    "url": "images/code/mergesortBU.png",
    "revision": "7b75626747ab5855d31e6eda8634bfe4"
  },
  {
    "url": "images/code/mergesortTD.png",
    "revision": "62b68c89c600f2bbf41ce454e8e35a05"
  },
  {
    "url": "images/code/partitioning-overview.png",
    "revision": "9bad24d23d5b92e4a4e9790eb260f7a5"
  },
  {
    "url": "images/code/partitioning3-overview.png",
    "revision": "03ac1071a6cae190ba8c7187fa7c8ffe"
  },
  {
    "url": "images/code/quicksort.png",
    "revision": "e58479677bc8b2ddce2e4ba91a2523c9"
  },
  {
    "url": "images/code/selection.png",
    "revision": "388ad62ff8636e15db86ef4e54f6ddc4"
  },
  {
    "url": "images/code/shell.png",
    "revision": "0e110674a2beb3041925d71acdefdca6"
  },
  {
    "url": "images/head/mine.png",
    "revision": "89730830371ee74e63acd6826bf16c8b"
  },
  {
    "url": "images/home/16pic_9349989_s.png",
    "revision": "d040010eed68257e2c0ffd9672b810c6"
  },
  {
    "url": "images/home/computer.jpg",
    "revision": "97ae1c5927263d0105cf36e7da744750"
  },
  {
    "url": "images/home/html5.jpeg",
    "revision": "c1cc4e65f0b6a3602b29303fc54c97fa"
  },
  {
    "url": "images/home/html5.jpg",
    "revision": "7e44b57641afaf7aa8fd87604a94f39e"
  },
  {
    "url": "images/home/mockup.jpg",
    "revision": "8f0ebcb1b2685810cb910ed0a2980f16"
  },
  {
    "url": "images/home/niu.png",
    "revision": "b55eab3c8cf7ddfd80cd7162ffae8c5e"
  },
  {
    "url": "images/home/niuniu.jpg",
    "revision": "1792a09e876a5d3c045542b59aef149c"
  },
  {
    "url": "images/home/shibuyasky.jpg",
    "revision": "77d3e465755dd1e46e93c7a145e26c43"
  },
  {
    "url": "images/home/vue.png",
    "revision": "1edf13fafa9bab2e621bb1733501a314"
  },
  {
    "url": "images/home/webworker.jpg",
    "revision": "7f6acf3d207c6ebca3593fb7ac38a920"
  },
  {
    "url": "images/react/reactprocess.png",
    "revision": "80251dc0c1285c4ed15cff62e0ea05ef"
  },
  {
    "url": "images/sidebar/browers/render.jpg",
    "revision": "fc676777d5463f6f7f640f5674d8644d"
  },
  {
    "url": "images/sidebar/css/sc.png",
    "revision": "9366a7616e8400768f454bc0b1019de2"
  },
  {
    "url": "images/sidebar/css/scorder.png",
    "revision": "adc4481dfa173ce1500017f64e992e98"
  },
  {
    "url": "images/sidebar/git/origin-upstream.png",
    "revision": "c0285318a1a42508336e27cfb70f390f"
  },
  {
    "url": "images/sidebar/javascript/eventloop.gif",
    "revision": "778d214a75a2a7a0abd63b891d357b4f"
  },
  {
    "url": "images/sidebar/jest/test2.jpg",
    "revision": "6c436acf42ebfbbfe6653c2c47320f42"
  },
  {
    "url": "images/sidebar/jest/testresult.jpg",
    "revision": "a5937ea69f5b0f1c3fe1f909dfa6af69"
  },
  {
    "url": "images/web/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "index.html",
    "revision": "f370a9bc0209a113adb351043e403dc0"
  },
  {
    "url": "nav/code/index.html",
    "revision": "87901d922e6cc24a70e96e5b213159fa"
  },
  {
    "url": "nav/code/picture/index.html",
    "revision": "98173ed80910455207e6ee874d562c3c"
  },
  {
    "url": "nav/code/search/index.html",
    "revision": "b70b5727c92db1d5fb1d8c25ff76b6fa"
  },
  {
    "url": "nav/code/sort/希尔排序.html",
    "revision": "046f81f449c48ff03586cf648a0eb565"
  },
  {
    "url": "nav/code/sort/归并排序.html",
    "revision": "c512956b78a1c203a8273774584b62cb"
  },
  {
    "url": "nav/code/sort/快速排序.html",
    "revision": "7ad1f71189d5d69fbefa159095a30ae1"
  },
  {
    "url": "nav/code/sort/插入排序.html",
    "revision": "dc1dbbb9c9af6facca8b5821b0e9e844"
  },
  {
    "url": "nav/code/sort/选择排序.html",
    "revision": "4682c9e6b6619441340766ffaa759f35"
  },
  {
    "url": "nav/code/string/index.html",
    "revision": "9e46f621f5667695ab2473cbeb290071"
  },
  {
    "url": "nav/deployment/docker/base/index.html",
    "revision": "4d1e4dacf4f23268f0f5537411819b6c"
  },
  {
    "url": "nav/deployment/git/command/index.html",
    "revision": "95f5abfbbcbec6edf86769641aca69d0"
  },
  {
    "url": "nav/deployment/git/ssh/index.html",
    "revision": "283b649befd3993691b70c0b5bd3a75f"
  },
  {
    "url": "nav/deployment/git/standard/index.html",
    "revision": "56ee54f2b211670b52c145ced022108b"
  },
  {
    "url": "nav/fronttalk/fourteen/index.html",
    "revision": "aa905b151a38d91ea927de70db451bee"
  },
  {
    "url": "nav/web/css/animation/index.html",
    "revision": "afa217c9b0ebb1a3d0da486739ca641b"
  },
  {
    "url": "nav/web/css/layout/index.html",
    "revision": "e479bac3015666806e375c9969ce90bb"
  },
  {
    "url": "nav/web/javascript/canvas/index.html",
    "revision": "3deebda7bb4b4ef4a19177443a34e0bc"
  },
  {
    "url": "nav/web/javascript/ES6/index.html",
    "revision": "28f9c67c7481576b559342c62633a682"
  },
  {
    "url": "nav/web/javascript/form/index.html",
    "revision": "6c4a882ef12b92cacda1fe2c3aa1cef3"
  },
  {
    "url": "nav/web/javascript/object/index.html",
    "revision": "a9eaa069cbdd7fab6e1dcebe8f758ef4"
  },
  {
    "url": "nav/web/javascript/promise/index.html",
    "revision": "84a48cd45ebec066b815f87af5592603"
  },
  {
    "url": "nav/web/javascript/工作者线程.html",
    "revision": "8a82acd58af33141850a43c9edd603aa"
  },
  {
    "url": "nav/web/javascript/网络请求与远程资源.html",
    "revision": "10bc19c57af1aaae2b9d9ec78578d47a"
  },
  {
    "url": "nav/web/typescript/index.html",
    "revision": "ae194b201dc738c58d74d9881a268c10"
  },
  {
    "url": "nav/web/vue/api/index.html",
    "revision": "16a05623995c7637b29412407b131a8b"
  },
  {
    "url": "sidebar/browers/index.html",
    "revision": "2c20dec30b566b57bf26d828905168bc"
  },
  {
    "url": "sidebar/browers/性能指标.html",
    "revision": "e25398411438080ab2647e2a60c53bd7"
  },
  {
    "url": "sidebar/css/每日一学/每日一学.html",
    "revision": "b3f5121751ad776f7f4ba7ec2491d8eb"
  },
  {
    "url": "sidebar/git/OriginAndUpstream.html",
    "revision": "138739feef0597444745d48c2571fd20"
  },
  {
    "url": "sidebar/javascript/async-await.html",
    "revision": "7befe4b2f044c4fcf684ef8b83503e6b"
  },
  {
    "url": "sidebar/javascript/eventLoop.html",
    "revision": "0ac02fd300acbcb33f1fedc07260ca9d"
  },
  {
    "url": "sidebar/javascript/index.html",
    "revision": "75b12b7aab4a961c3f53cb5607fa1829"
  },
  {
    "url": "sidebar/jest/测试用例.html",
    "revision": "b12485bae3aae851c6c0bc1599fc9cb9"
  },
  {
    "url": "sidebar/manager/前端管理.html",
    "revision": "4b22084e96d54238c44a3531ddad78ea"
  },
  {
    "url": "sidebar/manager/消极心态治疗.html",
    "revision": "d386d25e6c5fcb3384a65129dc85f1c3"
  },
  {
    "url": "sidebar/react/process.html",
    "revision": "6d486772d4a5ad70c538a71fa1361c0b"
  },
  {
    "url": "sidebar/review/index.html",
    "revision": "986ae41b12c9ef2421acdccf951b5c94"
  },
  {
    "url": "sidebar/study/code.html",
    "revision": "637085b2b0128fff8aea9a6a658dc274"
  },
  {
    "url": "sidebar/study/学习总结.html",
    "revision": "66477e913fc585607db78b295a483f44"
  },
  {
    "url": "sidebar/vue/vue2/基础知识.html",
    "revision": "b4fb3c7a71409dc51c318fe68c70c95e"
  },
  {
    "url": "sidebar/vue/vue3.0/CompositionAPI小试牛刀.html",
    "revision": "2c8679828c66ce9bac2e2337edeb048e"
  },
  {
    "url": "sidebar/vue/vue3.0/Vue3采坑笔记.html",
    "revision": "4b42c8b54a59b200b3ec328e7984ab78"
  },
  {
    "url": "sidebar/vue/vue3/CompositionAPI小试牛刀.html",
    "revision": "5d85fbdefb2084f51f58341b83d941f2"
  },
  {
    "url": "sidebar/vue/vue3/Vue3采坑笔记.html",
    "revision": "135162307828fff9a5eaae434ba19116"
  },
  {
    "url": "sidebar/webpack/performence.html",
    "revision": "89d03cf12bac3bd93c0decab9a1e4118"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
