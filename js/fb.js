
  // Additional JS functions here
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '217751578420551', // App ID
      //channelUrl : '//www.stanford.edu/~gstang/nalini/channel.html', // Channel File
      //status     : true, // check login status
      status     : false, // check login status
      //cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });
}

 // Load the SDK Asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=217751578420551";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function postToFeed(score) {
//function postToFeed() {
        //var score = Math.pow(2,grid.maxValue());
        // calling the API ...
        var obj = {
          method: 'feed',
          redirect_uri: 'mirri66.github.io/2bitfinity',
          link: 'http://mirri66.github.io/2bitfinity/',
          //picture: 'http://mirri66.github.io/2bitfinity/logo.png',
          picture: screenshot(),
          name: '2bitfinity',
          caption: 'Life after 2048',
          description: 'My highest tile was ' + score + ' on 2bitfinity!'
        };
/*
        function callback(response) {
          document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }
*/
        function callback(response) {
          if (response && response.post_id) {
            //alert('Post was published.');
          } else {
            //alert('Post was not published.');
          }
        }
        FB.ui(obj, callback);
}


function screenshot(){

  var grid = document.getElementById('thegrid') 
  html2canvas(grid, {
    onrendered: function(canvas) {
      // canvas is the final rendered <canvas> element
      var data = canvas.toDataURL("image/png");
      var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
      var decodedPng = Base64Binary.decode(encodedPng);
      return decodedPng;
    }
});

}


 