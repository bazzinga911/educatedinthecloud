const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const name = document.getElementById('name');
const nidbc = document.getElementById('nidbc');
const phone_number = document.getElementById('phone_number');
const email = document.getElementById('email_field');
const userId = document.getElementById('userId');


//ADD BUTTON IMPLEMENTATION
addBtn.addEventListener("click", e => {
	e.preventDefault();
                            
	//WILL HAVE TO IMPLEMENT USERID ALREADY TAKEN IN TEXT FIELD
db.collection("users").doc(userId.value).set({
    name: name.value,
    nidbc:nidbc.value,
    phone_number:phone_number.value,
    email: email.value
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
    name: name.value,
    nidbc:nidbc.value,
    phone_number:phone_number.value,
    email: email.value
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
});
