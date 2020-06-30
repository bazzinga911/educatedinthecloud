const userId = document.getElementById('userId');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');


//ADD BUTTON IMPLEMENTATION
addBtn.addEventListener("click", e => {
	e.preventDefault();
	//WILL HAVE TO IMPLEMENT USERID ALREADY TAKEN IN TEXT FIELD
db.collection("users").doc(userId.value).set({
    firstname: firstname.value,
    lastname: lastname.value,
    age: Number(age.value)
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
});

//UPDATE BUTTON IMPLEMENTATION
updateBtn.addEventListener("click", e => {
	e.preventDefault();
	db.collection("users").doc(userId.value).update({
    firstname: firstname.value,
    lastname: lastname.value,
    age: Number(age.value)
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
});
