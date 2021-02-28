function onSignIn(googleUser) {
  // After a user successfully signs in, get the user's ID token
  var id_token = googleUser.getAuthResponse().id_token;
  // Then, send the ID token to your server with an HTTPS POST request
  var profile = googleUser.getBasicProfile();
  var name = profile.getName();
  var id = profile.getEmail();
  var img = profile.getId();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // document.querySelector(.first - name).setAttribute("value",name);
  document.querySelector(".first-name").setAttribute("value", name);
  document.querySelector(".second-name").setAttribute("value", img);
  document.querySelector(".email-id").setAttribute("value", id);
  //autoclick form button to send the data to server
  var button = document.getElementById('clickButton');
  button.form.submit();

  signOut();
  //sign out function
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  }
}
