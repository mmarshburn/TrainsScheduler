// $(document).ready(function(){
//   // Initialize Firebase
  
  var config = {
    apiKey: "AIzaSyDS3jLVCSQHAYgbNUH2l0tHr71RrAtPJ0s",
    authDomain: "trainscheduler-mmm.firebaseapp.com",
    databaseURL: "https://trainscheduler-mmm.firebaseio.com",
    projectId: "trainscheduler-mmm",
    storageBucket: "trainscheduler-mmm.appspot.com",
    messagingSenderId: "853555693047"
  };

  firebase.initializeApp(config);

  var database = firebase.database();
 console.log(database);

// Button Click
$("#submit").on("click", function() {
    event.preventDefault();

 var  trainName = $("#trainName").val().trim();
 var  destination = $("#destination").val().trim();
 var  firstTrain = $("#firstTrain").val().trim();
 var  frequency = $("#frequency").val().trim();
  console.log(trainName);

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency,
    // minutesAway: minutesAway,
    // nextArrival: nextArrival,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
 


  database.ref().on("child_added", function(childsnapshot) {
    trainName = childsnapshot.val().trainName;
    destination = childsnapshot.val().destination;
    firstTrain = childsnapshot.val().firstTrain;
    frequency = childsnapshot.val().frequency;
  })

    $("#append-here").append( 
      "<tr><td>" + childSnapshot.val().trainName + "</td>" +
      "<tr><td>" + childSnapshot.val().trainName + "</td>" +
      "<tr><td>" + childSnapshot.val().firstTrain + "</td>" +
      "<tr><td>" + childSnapshot.val().frequency + "</td></tr>" +
      // "<tr><td>" + childSnapshot.val().minutesAway + "</td>" +
      // "<tr><td>" + childSnpashot.val().nextArrival + "</td></tr>"
    )
          
    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrain").val("");
    $("#frequency").val("");
  });
    
 
  
     











