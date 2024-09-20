function insertRow() {
  // Get the table element
  const table = document.getElementById("myTable");

  // Create a new row
  const newRow = table.insertRow(0);

  // Create cells for the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Set the cell values
  cell1.innerHTML = "New Cell";
  cell2.innerHTML = "New Cell";
}