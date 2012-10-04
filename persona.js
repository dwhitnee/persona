// Not sure what this does...

(function() {
   var signinLink = document.getElementById('signin');
   if (signinLink) {
     signinLink.onclick = function() { navigator.id.request(); };
   };
   
   var signoutLink = document.getElementById('signout');
   if (signoutLink) {
     signoutLink.onclick = function() { navigator.id.logout(); };
   };

   var location = "";
   navigator.geolocation.getCurrentPosition(
     function( position ) {   
       $("#location").text( position.coords.latitude + " x " + 
                            position.coords.longitude );
       Map.map.setCenter( position.coords.latitude, position.coords.longitude );
     },
     function() {
       $("#location").text("lost");
     },
     { 
       timeout: 5000,
       enableHighAccuracy:true 
     }
   );

   var currentUser = "dwhitnee@yahoo.com"; // navigator.id.get();
   
   if (currentUser) {
     $("#user").text("Hello, " + currentUser );
   }

   // theses are Persona vars
   navigator.id.watch(
     {
       loggedInUser: currentUser,
       onlogin: function(assertion, x, y) {
         // A user has logged in! Here you need to:
         // 1. Send the assertion to your backend for verification and to create a session.
         // 2. Update your UI.
         
         $("#status").text("checking your real identity with the server, really...");
         $("#assertion").text( assertion );
         
         // $.ajax({
         //   type: 'POST',
         //   url: '/auth/login', // This is a URL on your website.
         //   data: { assertion: assertion },
         //   success: function(res, status, xhr) { window.location.reload(); },
         // });
         // window.location.reload();
       },
       onlogout: function() {
         $("#status").text("Calling the server to logout, really...");
         $("#assertion").text("");
         
         // $.ajax({
         //   type: 'POST',
         //   url: '/auth/logout', // This is a URL on your website.
         //   success: function(res, status, xhr) { window.location.reload(); },
         //   error: function(res, status, xhr) {alert("logout failure" + res);}
         // });
         this.loggedInUser = null;
       }
     });
     
})();
