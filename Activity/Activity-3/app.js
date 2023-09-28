// add data to the table

const table = document.getElementById("myTable");
const formFile = document.getElementById("formFile");
const addRowButton = document.getElementById("addRowButton");
const searchInput = document.getElementById("searchInput");



const clearInputs = () => {
  nameInput.value = "";
  inputDescription.value = "";
  inputPrice.value = "";
  formFile.value = "";
};

// Function to add a new row to the table
function addRow() {


  // Get the input values
  const name = nameInput.value;
  const Description = inputDescription.value;
  const Price = inputPrice.value;
  const img = formFile.value;

  const product = {
      name,
      Description,
      Price
    };
    const productId = generateID();
localStorage.setItem(productId, JSON.stringify(product));

// Retrieve data from local storage using a specific key
const key = 'productId'; 
const storedData = localStorage.getItem(productId);

// Check if the data exists in local storage
if (storedData !== null) {
  // Parse the stored data (assuming it's JSON) into an object
  const parsedData = JSON.parse(storedData);

  // Now you can use the `parsedData` object as needed
  console.log(parsedData);

  // For example, if `parsedData` contains a 'name' property:
  const name = parsedData.name;
  console.log(`Name: ${name}`);
} else {
  // The data doesn't exist in local storage
  console.log('Data not found in local storage.');
}

}

  // Create a new row element
  const newRow = table.insertRow();
  // Create cells for the row
  const idCell = newRow.insertCell(0);
  const nameCell = newRow.insertCell(1);
  const dCell = newRow.insertCell(2);
  const pCell = newRow.insertCell(3);
  const imgCell = newRow.insertCell(4);
  const actionsCell = newRow.insertCell(5); 

  // Set the content for the cells
  idCell.textContent = ""
  nameCell.textContent = name;
  dCell.textContent = Description;
  pCell.textContent = Price;
  imgCell.textContent = img;


document.getElementById("addproduct").addEventListener("submit ", addRow)  
// }

// Add a click event listener to the button
addRowButton.addEventListener("click", addRow);


// delete All btn
function confirmDelete() {
  // Display a confirmation dialog
  const result = confirm("Are you sure you want to delete all items?");
  
  // Check the result of the confirmation dialog
  if (result) {
      // If the user clicked "OK," proceed with deletion
      clearList();
  } else {
      // If the user clicked "Cancel" or closed the dialog, do nothing
      return;
  }
}


function clearList() {
  // Get a reference to the table body
  var tableBody = document.getElementById("myTable");

  // Remove all rows from the table
  while (tableBody.rows.length > 1) {
    tableBody.deleteRow(1);
  }
}

// search 

function searchTable() {
  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Get all rows in the table (excluding the header row)
  const rows = table.querySelectorAll("tr:not(:first-child)");

  // Loop through the rows and hide those that don't match the search query
  rows.forEach((row) => {
    const id = row.cells[0].textContent.toLowerCase();
    const name = row.cells[1].textContent.toLowerCase();
    const Description = row.cells[2].textContent.toLowerCase();
    const Price = row.cells[3].textContent.toLowerCase();

    if (id.includes(query) || name.includes(query) || Description.includes(query) || Price.includes(query)) {
      row.style.display = ""; // Show the row
    } else {
      row.style.display = "none"; // Hide the row
    }
  });
}

// Add an input event listener to the search input for live search
searchInput.addEventListener("input", searchTable);


const sortButton = document.getElementById("sortButton");
const dataList = document.getElementById("productData");
const items = Array.from(productData.children);
// search --


let ascendingOrder = true; // Initial sorting order

sortButton.addEventListener("click", () => {
    // Toggle sorting order
    ascendingOrder = !ascendingOrder;

    items.sort((a, b) => {
        const itemA = a.textContent;
        const itemB = b.textContent;

        if (!isNaN(itemA) && !isNaN(itemB)) {
            // Both items are numbers, so compare as numbers
            return ascendingOrder
                ? parseFloat(itemA) - parseFloat(itemB)
                : parseFloat(itemB) - parseFloat(itemA);
        } else {
            // At least one item is a string, so compare as strings
            return ascendingOrder
                ? itemA.localeCompare(itemB)
                : itemB.localeCompare(itemA);
        }
    });

    // Clear the current list
    dataList.innerHTML = "";

    // Append sorted items
    for (const sortedItem of items) {
        dataList.appendChild(sortedItem);
    }

  
});

// id counter 
let idCounter = 1; 

        const generateButton = document.getElementById("addRowButton");
        const idList = document.getElementById("productData");

        generateButton.addEventListener("click", () => {
            const newID = generateID();
            const listItem = document.createElement("");
            listItem.textContent = newID;
            idList.appendChild(listItem);
        });

        

        function generateID() {
            return `${idCounter++}`;
        }

        
    // Function to add a new row to the table
    function addRow() {
    
      const name = nameInput.value;
      const Description = inputDescription.value;
      const Price = inputPrice.value;
      const imgFileInput = document.getElementById("formFile");

      
      // Create a new row element
      const newRow = table.insertRow();

      // Create cells for the row
      const idCell = newRow.insertCell(0);
      const nameCell = newRow.insertCell(1);
      const dCell = newRow.insertCell(2);
      const pCell = newRow.insertCell(3);
      const imgCell = newRow.insertCell(4);
      const actionsCell = newRow.insertCell(5); 

      

      // Set the content for the cells (you can replace these with your own data)
      idCell.textContent = generateID();
      nameCell.textContent = name;
      dCell.textContent = Description;
      pCell.textContent = Price;
      imgCell.textContent = img;

       // Check if an image file is selected
       if (imgFileInput.files.length > 0) {
        // Create an <img> element to display the image
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(imgFileInput.files[0]);
        imgElement.alt = "Product Image";
        imgElement.classList.add("img-thumbnail");
        imgCell.appendChild(imgElement);
    } else {
        // No image selected, display a message or placeholder
        imgCell.textContent = "No Image";
    }

      // Create edit and delete buttons
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.classList.add("btn", "btn-primary", "btn-sm", "me-1");
      editButton.addEventListener("click", () => editRow(newRow));

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("btn", "btn-danger", "btn-sm");
      deleteButton.addEventListener("click", () => deleteRow(newRow));

      // Append edit and delete buttons to the actions cell
      actionsCell.appendChild(editButton);
      actionsCell.appendChild(deleteButton);

      // Clear the input fields
      nameInput.value = "";
      inputDescription.value = "";
      inputPrice.value = "";
      imgFileInput.value = ""; // Clear the file input
  }


  // Function to delete a row
  function deleteRow(row) {
      if (confirm("Are you sure you want to delete this item?")) {
          // Remove the row from the table
          table.deleteRow(row.rowIndex);
      }
  }

        