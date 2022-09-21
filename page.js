function logout()
{
  window.location = "index.html";
}
function back()
{
  window.location = "kacebook_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDXLm0ZT8iu4bVTD_WEqItuUwoAE1DSS50",
    authDomain: "chattapp-e36d1.firebaseapp.com",
    databaseURL: "https://chattapp-e36d1-default-rtdb.firebaseio.com",
    projectId: "chattapp-e36d1",
    storageBucket: "chattapp-e36d1.appspot.com",
    messagingSenderId: "432816247845",
    appId: "1:432816247845:web:74fef295817c187b02dbcc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}

