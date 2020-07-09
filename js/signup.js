const auth = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    // if(user != null){
    //   document.getElementById("user_para").innerHTML = "Welcome!";
    // }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function signUp(){
    
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    const promise = auth.createUserWithEmailAndPassword(userEmail,userPass).then(user => window.location = "index.html");
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
  }


function logout(){
  firebase.auth().signOut();
  alert("Signed Out");
}
