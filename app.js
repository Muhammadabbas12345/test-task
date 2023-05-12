function addfun() {
  const studentname = document.getElementById("studentName").value;
  const fathername = document.getElementById("fatherName").value;
  const email = document.getElementById("email").value;
  const studentID = document.getElementById("studentID").value;
  const totalmarks = document.getElementById("totalMarks").value;
  const obtainemarks = document.getElementById("obtainedMarks").value;
  const student = { studentname, fathername, email, studentID, totalmarks, obtainemarks };
  console.log(student);
  // Create a new row
  const table = document.querySelector("table tbody");
  const row = document.createElement("tr");
  // Create table cells using map function
  const cellValues = [studentname, fathername, email, studentID, totalmarks, obtainemarks];
  const cells = cellValues.map(value => {
    const cell = document.createElement("td");
    cell.textContent = value;
    return cell;
  });
  // Append cells to the row
  cells.map(cell => row.appendChild(cell));
  table.appendChild(row);
}
const add = document.querySelector("form");
add.addEventListener("submit", function (event) {
  event.preventDefault();
  addfun();
  this.reset();
});

// Search function
const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search");
    const table = document.querySelector("table");
    // function to show table when search input is empty
    function showTable() {
      let rows = table.querySelectorAll("tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        row.style.display = "";
      }
    }
    searchBtn.addEventListener("click", function () {
      let searchTerm = searchInput.value.toLowerCase();
      let rows = table.querySelectorAll("tbody tr");
      for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let studentName = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
        let fatherName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
        let searchRowBy = studentName.includes(searchTerm) || fatherName.includes(searchTerm) || studentID.includes(searchTerm)
        row.style.display = searchRowBy ? "" : "none";
      }
    });
    // add event listener to search input to show table when empty
    searchInput.addEventListener("input", function () {
      if (searchInput.value === "") {
        showTable();
      }
    });
// sort
const sortSelect = document.getElementById("sort-select")
sortSelect.addEventListener('change', () => {
  let sortType = sortSelect.value;
  let rows = Array.from(table.querySelectorAll('tbody tr'));
  rows.sort((rowA, rowB) => {
    let valueA = rowA.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    let valueB = rowB.querySelector(`td:nth-child(${sortType === 'name' ? 1 : sortType === 'father-name' ? 2 : 4})`).textContent.toLowerCase();
    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });
  rows.map((row) => {
    table.querySelector('tbody').appendChild(row);
  });
});

