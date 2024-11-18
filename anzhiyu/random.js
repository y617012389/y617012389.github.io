var posts=["2024/11/18/openwrt2/","2024/11/14/Tampermonkey/","2024/11/12/02/","2024/11/08/openwrt1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };