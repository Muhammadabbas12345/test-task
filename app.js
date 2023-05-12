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

  // Create table cells
  const nameCell = document.createElement("td");
  nameCell.textContent = studentname;
  const fatherCell = document.createElement("td");
  fatherCell.textContent = fathername;
  const emailCell = document.createElement("td");
  emailCell.textContent = email;
  const idCell = document.createElement("td");
  idCell.textContent = studentID;
  const totalMarksCell = document.createElement("td");
  totalMarksCell.textContent = totalmarks;
  const obtainedMarksCell = document.createElement("td");
  obtainedMarksCell.textContent = obtainemarks;

  row.appendChild(nameCell);
  row.appendChild(fatherCell);
  row.appendChild(emailCell);
  row.appendChild(idCell);
  row.appendChild(totalMarksCell);
  row.appendChild(obtainedMarksCell);
  table.appendChild(row);

  // Sort the table rows
  sortTable();
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
const table = document.querySelector("table"); // Caching the table element

searchBtn.addEventListener("click", function () {
  let searchTerm = searchInput.value.toLowerCase();
  let rows = table.querySelectorAll("tbody tr");

  for (let i = 0; i < rows.length; i++) {
    let row = rows[i];
    let studentname = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
    let fathername = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
    let studentID = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
    let searchRowBy = studentname.includes(searchTerm) || fathername.includes(searchTerm) || studentID.includes(searchTerm);
    row.style.display = searchRowBy ? "" : "none";
  }
});

function sortTable() {
  const tbody = document.querySelector("table tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    const nameA = a.querySelector("td:nth-child(1)").textContent.toLowerCase();
    const nameB = b.querySelector("td:nth-child(1)").textContent.toLowerCase();
    const fatherA = a.querySelector("td:nth-child(2)").textContent.toLowerCase();
    const fatherB = b.querySelector("td:nth-child(2)").textContent.toLowerCase();
    const idA = a.querySelector("td:nth-child(4)").textContent.toLowerCase();
    const idB = b.querySelector("td:nth-child(4)").textContent.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    if (fatherA < fatherB) return -1;
    if (fatherA > fatherB) return 1;
    if (idA < idB) return -1;
    if (idA > idB) return 1;
    return 0;
});

rows.forEach(row => tbody.appendChild(row));
}