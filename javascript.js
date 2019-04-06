$('#submitButton').on('click', function(){
    var employeeName = $('#employeeName').val();
    var employeeRole = $('#employeeRole').val();
    var employeeSalary = $('#employeeSalary').val()
    var employeeDate = $('#employeeDate').val();
   
    var newRow = $('<tr>');
    var nameCell = $('<td>');
    var roleCell = $('<td>');
    var salary = $('<td>');
    var startDate = $('<td>');

    nameCell.text(employeeName);
    roleCell.text(employeeRole);
    salary.text(employeeSalary);
    startDate.text(employeeDate)

    newRow.append(nameCell);
    newRow.append(roleCell);
    newRow.append(startDate);
    newRow.append(salary);

    database.ref().push({
        Name: employeeName,
        Role: employeeRole,
        Salary: employeeSalary,
        Date: employeeDate
    });

    $('#table').append(newRow);
    $('#employeeName').val('');
    $('employeeRole').val('');
    $('#employeeSalary').val('');
    $('#employeeDate').val('');
})

// Adding the firebase config
var config = {
    apiKey: "AIzaSyBbV6J7yzzpFINlBlmMvMZBFJo7YwqDxEg",
    authDomain: "timesheetproject-c7cf3.firebaseapp.com",
    databaseURL: "https://timesheetproject-c7cf3.firebaseio.com",
    projectId: "timesheetproject-c7cf3",
    storageBucket: "timesheetproject-c7cf3.appspot.com",
    messagingSenderId: "552631608999"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

 

  database.ref().on('child_added', function(snapshot) {
      nameCell = database.Name;
      roleCell = database.Role;
      salary = database.Salary;
      startDate = database.Date;
  });