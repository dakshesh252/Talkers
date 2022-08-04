var firebaseConfig = {
      apiKey: "AIzaSyDEIwGXAr4LgsD-nLjqtNwS_sOjjExJ-yI",
      authDomain: "talkers-3930e.firebaseapp.com",
      databaseURL: "https://talkers-3930e-default-rtdb.firebaseio.com",
      projectId: "talkers-3930e",
      storageBucket: "talkers-3930e.appspot.com",
      messagingSenderId: "133600199263",
      appId: "1:133600199263:web:e8f798127abf2b8b4551ea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
  user= localStorage.getItem("User-name");
  avatar = localStorage.getItem("User-avatar");

function get_info() {
    user= localStorage.getItem("User-name");
    avatar = localStorage.getItem("User-avatar");
    document.getElementById("user-name1").innerHTML = "<b>"+user+"</b>" ;
    document.getElementById("user-avatar").innerHTML = avatar ;
}


    console.log("user avatar"+avatar);
    console.log("user name "+user);

    function logout() {
          localStorage.removeItem("User-avatar");
          localStorage.removeItem("User-name");
          window.location.replace("talker1.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(user).push({
                name:user,
                message:msg,
                like:0,
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+user).on('value', function(snapshot) { document.getElementById("uploaded_media").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         //start code 
         console.log(message_data);
         console.log(firebase_message_id);
         name1 = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag= "<h4>" + name1 + avatar+"</h4>"  ;
         message_with_tag= "<h4 class='message_h4' >" + message + "</h4>";
         like_button= "<button  class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
          span_with_tag = " <span class='glyphicon glyphicon-thunbs-up'>Like: " + like +"</span></button><hr><br><br>";
    
         row = name_with_tag + message_with_tag + like_button + span_with_tag ;
         document.getElementById("uploaded_media").innerHTML += row ;
       //End code 
      } }); }); } 
       getData();
    
       function updateLike(message_id) {
        console.log("Clicked on like button " + message_id);
        button_id = message_id ; 
        likes = document.getElementById(button_id).value ;
        updated_likes = Number(likes)+ 1 ;
        console.log(updated_likes);
    
        firebase.database().ref(user).child(message_id).update({
          like : updated_likes 
        });
    
    
       }