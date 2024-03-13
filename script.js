// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyru5gABWrIWWQ3jNBf6dCVbbamYLDs0s",
    authDomain: "fir-crud-2-ce6e8.firebaseapp.com",
    projectId: "fir-crud-2-ce6e8",
    storageBucket: "fir-crud-2-ce6e8.appspot.com",
    messagingSenderId: "337370882494",
    appId: "1:337370882494:web:aaa4e562f8682a23f6d9ef"
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);

    import {getDatabase, ref, get, set, child, update, remove}
    from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js'
       

var db = getDatabase();

var enterID = document.querySelector("#enterID");
var enterName = document.querySelector("#enterName");
var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findName = document.querySelector("#findName");
var findAge = document.querySelector("#findAge");
     

var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
    set(ref(db, "People/"+ enterID.value),{
        Name: enterName.value,
        ID: enterID.value,
        Age: enterAge.value
    })
    .then(()=>{
        alert("Data added successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

function FindData() {
    var dbref = ref(db);

    get(child(dbref, "People/" + findID.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            findName.innerHTML = "Name: " + snapshot.val().Name;
            findAge.innerHTML = "Age: " + snapshot.val().Age;
        } else {
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert(error)
    })
}

function UpdateData(){
    update(ref(db, "People/"+ enterID.value),{
        Name: enterName.value,
        Age: enterAge.value
    })
    .then(()=>{
        alert("Data updated successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

function RemoveData(){
    remove(ref(db, "People/"+ enterID.value))
    .then(()=>{
        alert("Data deleted successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);