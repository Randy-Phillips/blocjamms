// use a loop to create an array of objects
// for every item in the array, iterate over its properties and write the key/value pairs
/*
  [{
    username: "rickyplum",
    firstname: "Ricky",
    lastname: "Plum"
  }]

  // "username = rickyplum"
  // "firstname = Ricky"
  // "lastname = Plum" 



*/

window.exercise = function () {
  console.log("For loop exercise");

  // create an array of users
  var users = [];

  for (var i = 0; i < 50; i++) {
    console.log("Creating user #" + i);
    //debugger;

    users.push({
      username: "user" + i,
      firstname: "first name" + i,
      lastname: "last name" + i
    });
  }

  // for every user, write out all user properties and values.
  // create a function for writing out all user properties and call it in your for loop
  for (var i = 0; i < users.length; i++) {
    showUser(users[i]);
  }
};

var showUser = function(user) {
  console.log('username: ' + user.username);
  console.log('first name: ' + user.firstname);
  console.log('last name: ' + user.lastname);
}


 var updateCollectionView = function() {
   var $collection = $(".collection-container .row");
   $collection.empty();
 
   for (var i = 0; i < 33; i++) {
     var $newThumbnail = buildAlbumThumbnail();
     $collection.append($newThumbnail);
   }

   var onHover = function(event) {
     $(this).append(buildAlbumOverlay("/album.html"));
   };

   var offHover = function(event) {
    $(this).find('.collection-album-image-overlay').remove();
  };

   $collection.find('.collection-album-image-container').hover(onHover, offHover);
 };
 

 var buildAlbumThumbnail = function() {
    var template =
        '<div class="collection-album-container col-md-2">'
      + '    <div class="collection-album-image-container">'
      + '    <img src="/images/album-placeholder.png"/>'
      + '  </div>'
      + '  <div class="caption album-collection-info">'
      + '    <p>'
      + '      <a class="album-name" href="/album.html"> Album Name </a>'
      + '      <br/>'
      + '      <a href="/album.html"> Artist name </a>'
      + '      <br/>'
      + '      X songs'
      + '      <br/>'
      + '    </p>'
      + '  </div>'
      + '</div>';
 
   return $(template);
 };

 if (document.URL.match(/\/collection.html/)) {
   // Wait until the HTML is fully processed.
   $(document).ready(function() {
    
     updateCollectionView();
   });
 }

 var buildAlbumOverlay = function(albumURL) {
    var template =
        '<div class="collection-album-image-overlay">'
      + '  <div class="collection-overlay-content">'
      + '    <a class="collection-overlay-button" href="' + albumURL + '">'
      + '      <i class="fa fa-play"></i>'
      + '    </a>'
      + '    &nbsp;'
      + '    <a class="collection-overlay-button">'
      + '      <i class="fa fa-plus"></i>'
      + '    </a>'
      + '  </div>'
      + '</div>'
      ;
    return $(template);
  };