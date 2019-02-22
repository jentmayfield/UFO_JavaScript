// from data.js
var tableData = data;
var filteredData = tableData

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// BONUS: Refactor to use Arrow Functions!
function createTable(){
  tbody.html('');
  filteredData.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value); 
    });
  });
};

 



// Select the submit button
  var submit = d3.select("#filter-btn");
  submit.on("click", function() {

      // Prevent the page from refreshing
      d3.event.preventDefault();
    
      // Select the input element and get the raw HTML node
      var inputElement = d3.select("#datetime");
        // Get the value property of the input element
      var inputValue = inputElement.property("value");
  
      console.log(inputValue);

      
      filteredData = tableData.filter(date => date.datetime === inputValue);
  
      console.log(filteredData); 
      ;
      createTable()
    
          });       
      createTable()



  

     

   

  
