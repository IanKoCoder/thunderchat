//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAmKIXyNyttZp3l4L-NuW_JUClnhZnF2cc",
      authDomain: "thunderchat-3fed2.firebaseapp.com",
      databaseURL: "https://thunderchat-3fed2-default-rtdb.firebaseio.com",
      projectId: "thunderchat-3fed2",
      storageBucket: "thunderchat-3fed2.appspot.com",
      messagingSenderId: "871172417343",
      appId: "1:871172417343:web:5fdaef8cc3ae45f349958a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }