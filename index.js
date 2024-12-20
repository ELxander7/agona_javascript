document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("data-form");
    const nameInput = document.getElementById("name-input");
    const groupInput = document.getElementById("group-input");
    const addButton = document.getElementById("add-button");
    const clearButton = document.getElementById("clear-button");
    const tableBody = document.getElementById("data-table").querySelector("tbody");
    const errorDiv = document.getElementById("errorDiv");
    errorDiv.className = 'error';
    form.appendChild(errorDiv)

    function addRow(){

        errorDiv.textContent = '';

        if(nameInput.value.trim() === '' || groupInput.value.trim() === ''){
            errorDiv.textContent = "Все поля обязательны к заполнению";
            return;
        }

        const namePattern = /^[а-яА-ЯёЁa-zA-Z\s\-]+$/;
        const groupPattern = /^[0-9\-]+$/;

        if(!namePattern.test(nameInput.value)){
            errorDiv.textContent = 'Имя должно содержать только буквы';
            return;
        }

        if(!groupPattern.test(groupInput.value)){
            errorDiv.textContent = 'Группа должна содержать только цифры';
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nameInput.value}</td>
            <td>${groupInput.value}</td>
            <td><button class = "delete-button">X</button></td>
        `;

        tableBody.appendChild(newRow);

        nameInput.value = '';
        groupInput.value = '';
    }

    function clearTable(){
        tableBody.innerHTML = '';
    }

    function deleteRow(event){
        if(event.target.classList.contains('delete-button')){
            const row = event.target.closest("tr");
            tableBody.removeChild(row);
        }
    }

    addButton.addEventListener('click', addRow);
    clearButton.addEventListener('click', clearTable);
    tableBody.addEventListener('click', deleteRow);
});