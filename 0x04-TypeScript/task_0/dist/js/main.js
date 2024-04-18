var student1 = {
    firstName: "Manar",
    lastName: "Khalil",
    age: 34,
    location: "Alexandria"
};
var student2 = {
    firstName: "Amna",
    lastName: "Aref",
    age: 3,
    location: "Alexandria"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid green";
    locationCell.style.border = "1px solid green";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map