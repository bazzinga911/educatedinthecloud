const auth = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    document.getElementById("user-div").style.display = "block";

    var user = firebase.auth().currentUser;

    // if(user != null){
    //   document.getElementById("user_para").innerHTML = "Welcome!";
    // }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    document.getElementById("user-div").style.display = "none";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(user => {
    window.history. back();
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });

}

function logout(){
  firebase.auth().signOut();
  alert("Signed Out");
}
