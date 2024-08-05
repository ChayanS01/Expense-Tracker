
const expenseForm = document.getElementById("expenseform");
const expenseList = document.getElementById("tableBody");
const totalAmount = document.getElementById("totalAmount");
const expenseTable = document.getElementById("expenseTable");
let totalamount = 0;


expenseForm.addEventListener('submit', function(event){
    event.preventDefault();
    


    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    totalamount+= amount;
    totalAmount.textContent = `Total amount $${totalAmount}`;

    if(description && category && !isNaN(amount)){
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td> 
        <td>${category}</td>
        <td>${amount}<span id="rupee-sign">&#8377;</span></td>`;
        expenseList.appendChild(newRow);
        
        expenseForm.reset();
    }else{
        alert("Please fill a valid input!");
    }
})


totalAmount.addEventListener('click',function(){
        
    const Newrow = document.createElement('p');
    Newrow.innerHTML = `<span class="output-style">Total of your trip will cost = <span class="totalamount-color">${totalamount}
    <span id="rupee-sign">&#8377;</span></span></span>`;
    Newrow.innerText.style
    expenseList.appendChild(Newrow);
    })


    function addDeleteButtonToRow(row) {
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Unicode for multiplication sign (×)
        span.classList.add("span-cross"); // Use classList.add for adding a class
        row.appendChild(span); // Append to the row (or wherever appropriate)
    }
    const rows = document.querySelectorAll('#expenseTable tr');
    rows.forEach(row => addDeleteButtonToRow(row));
    
    document.getElementById("expenseTable").addEventListener("click", function(e) {
        e.target.parentElement.remove();
})

