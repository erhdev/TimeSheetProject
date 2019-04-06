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

    $('#table').append(newRow);
    $('#employeeName').val('');
    $('#employeeRole').val('');
    $('#employeeSalary').val('');
    $('#employeeDate').val('');
})