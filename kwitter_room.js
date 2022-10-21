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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
