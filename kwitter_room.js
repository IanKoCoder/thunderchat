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
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}