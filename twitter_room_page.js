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
function AddRoom()
{
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
     });
localStorage.setItem("room_name",room_name);
window.location="twitter_page.html";
}
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room_Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="twitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}