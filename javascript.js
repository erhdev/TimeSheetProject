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

    newRow.appendChild(nameCell);
    newRow.appendChild(roleCell);
    newRow.appendChild(startDate);
    newRow.appendChild(salary);

    $('').appendChild(newRow);
    $('#employeeName').text('');
    $('employeeRole').text('');
    $('#employeeSalary').text('');
    $('#employeeDate').text('');
})
setInterval();