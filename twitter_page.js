var firebaseConfig = {
      apiKey: "AIzaSyCCyCYnNKwOYgh0JcfAvD6q4xRAo8pOOK4",
      authDomain: "twitter-e4f3b.firebaseapp.com",
      projectId: "twitter-e4f3b",
      storageBucket: "twitter-e4f3b.appspot.com",
      messagingSenderId: "113584888955",
      databaseURL:"https://twitter-e4f3b-default-rtdb.firebaseio.com/",
      appId: "1:113584888955:web:2bdb0d5e48a6c9cbb7d6de",
      measurementId: "G-YM11VTHRFV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
  name_with_tag="<h4 class='message_h4'>"+name+"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
  like_button="<button class='btn btn-warning' id="+firebase_message_id + " value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag="<span classs='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
  row=name_with_tag+message_with_tag+like_button+span_with_tag;
  document.getElementById("output").innerHTML+=row;
  //End code
        } });  }); }
        user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  getData();
  
  function updateLike(message_id)
  {
        console.log("clicked on like button-"+message_id);
        button_id=message_id;
        likes=document.getElementById(button_id).value;
        updated_likes=Number(likes)+1;
        console.log(updated_likes);
        firebase.database().ref(room_name).child(message_id).update({
              like:updated_likes
        });
  }
  function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
  }