$('').on('click', function(){
    var employeeName = $('').val();
    var employeeRole = $('').val();
    var employeeSalary = $('').val()
    var employeeDate = $('').val();
   
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
    $('').text('');
    $('').text('');
    $('').text('');
    $('').text('');
})
setInterval()