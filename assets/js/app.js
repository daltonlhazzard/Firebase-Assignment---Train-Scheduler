var config = {
    apiKey: "AIzaSyBL7tH9MENGB_GKh_6QFi_B0ruCR1LDRzs",
    authDomain: "train-scheduler-fe624.firebaseapp.com",
    databaseURL: "https://train-scheduler-fe624.firebaseio.com",
    projectId: "train-scheduler-fe624",
    storageBucket: "train-scheduler-fe624.appspot.com",
    messagingSenderId: "992511287472"
  };

  firebase.initializeApp(config);

  var database= firebase.database();

  var trainName = "";
  var trainRole = "";
  var trainStart = "";
  var trainRate = 0;

  $( "#employeeData" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();

    tainName = $("#inputEmployee").val().trim();
    tainRole = $("#inputRole").val().trim();
    trainStart = $("#inputStartDate").val().trim();
    tainRate = parseInt($("#inputMonthlyRate").val().trim());

    database.ref().push({
        tainName : tainName,
        tainRole : tainRole,
        tainStart :  tainStart,
        tainRate : tainRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    
  });

database.ref().on("child_added", function(childSnapshot) {

    console.log(childSnapshot.val());
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().trainRole);
    console.log(childSnapshot.val().trainStart);
    console.log(childSnapshot.val().trainRate);

    $("#name").append(" <div class='well'><span class='employee-name'> " + childSnapshot.val().trainName + " </span>
    $("#<span class='employee-role'> " + childSnapshot.val().trainRole + "</span><span class='employee-start'>" + childSnapshot.val().trainStart + "</span><span class='employee-rate'>" + childSnapshot.val().trainRate + "(</span></div>");

 }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
}); 

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

    $("#name").text(snapshot.val().employeeName);
    $("#role").text(snapshot.val().employeeRole);
    $("#date").text(snapshot.val().employeeStart);
    $("#rate").text(snapshot.val().employeeRate);

});