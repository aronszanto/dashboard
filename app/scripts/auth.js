var ref = new Firebase("https://bdci.firebaseio.com/");

function Login(email, password) {
  ref.authWithPassword({
    email    : email,
    password : password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
      //localStorage.setItem("bdci-auth-token", authData);
    }
  });
}

$('#login').submit(function(e) {
  e.preventDefault();
  // console.log(e);
  Login($('#InputEmail').val(), $('#InputPassword').val());
  // console.log(localStorage.getItem('bdci-auth-token'));
});
