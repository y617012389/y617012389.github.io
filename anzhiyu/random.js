var posts=["2024/11/08/Openwrt防检测—PC/","2024/11/14/学习通刷课/","2024/11/12/ios17.0+侧载方案—NB全能助手/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };