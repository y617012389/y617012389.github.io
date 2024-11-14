var posts=["2024/11/08/01/","2024/11/14/03/","2024/11/12/02/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };