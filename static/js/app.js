// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

function buildTable(data) {
    tbody.html("");
    data.forEach((entry) => {
        var row = tbody.append('tr');
        Object.values(entry).forEach((value) => {
            var dataCell = row.append('td');
            dataCell.text(value);
        });
    });
};

buildTable(tableData);

var input = d3.select('input');
var button = d3.select('#filter-btn');

button.on('click', function() {
    d3.event.preventDefault();
    var newInput = input.property('value');
    var filterData = tableData.filter(row => row.datetime === newInput);
    buildTable(filterData);
})