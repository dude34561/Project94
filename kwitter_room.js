
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCNtQxQknmpu1EYRTfWLXOjm7f6cx07U5Q",
      authDomain: "kwitter-e3b85.firebaseapp.com",
      databaseURL: "https://kwitter-e3b85-default-rtdb.firebaseio.com",
      projectId: "kwitter-e3b85",
      storageBucket: "kwitter-e3b85.appspot.com",
      messagingSenderId: "536542637178",
      appId: "1:536542637178:web:b246b8dbc32811bc71dfc3"
    }; 
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
