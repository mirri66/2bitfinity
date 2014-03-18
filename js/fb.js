
  // Additional JS functions here
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '217751578420551', // App ID
      //channelUrl : '//www.stanford.edu/~gstang/nalini/channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });
}

 // Load the SDK Asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//function postToFeed(score) {
function postToFeed() {
        //var score = Math.pow(2,grid.maxValue());
        // calling the API ...
        var obj = {
          method: 'feed',
          redirect_uri: 'http://mirri66.github.io/2bitfinity/',
          link: 'http://mirri66.github.io/2bitfinity/',
          picture: 'http://mirri66.github.io/2bitfinity/logo.png',
          name: '2bitfinity',
          caption: 'Life after 2048',
          description: '2bitfinity is 2048 with no limit to how high you can go!'
        };
/*
        function callback(response) {
          document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
        }
*/
        function callback(response) {
          if (response && response.post_id) {
            alert('Post was published.');
          } else {
            alert('Post was not published.');
          }
        }
        FB.ui(obj, callback);
}


 