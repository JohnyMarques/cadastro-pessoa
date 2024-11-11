
function formatPhone(input) {
 
    let phone = input.value.replace(/\D/g, '');
  
 
    if (phone.length > 11) phone = phone.slice(0, 11);
  
  
    if (phone.length > 6) {
      input.value = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
    } else if (phone.length > 2) {
      input.value = `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    } else {
      input.value = phone;
    }
  }
  
 
  function addContact() {
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
  
    if (name && phone) {
     
      const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!phonePattern.test(phone)) {
        alert("Erro: O número de telefone deve estar no formato (DDD) NNNNN-NNNN.");
        return;
      }
  
    
      const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
      const rows = table.getElementsByTagName('tr');
      let duplicate = false;
  
      for (let i = 0; i < rows.length; i++) {
        const cellPhone = rows[i].getElementsByTagName('td')[1].textContent;
        if (cellPhone === phone) {
          duplicate = true;
          break;
        }
      }
  
      if (duplicate) {
        alert("Este número de telefone já foi cadastrado.");
      } else {
       
        const newRow = table.insertRow();
  
       
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);
  
        nameCell.textContent = name;
        phoneCell.textContent = phone;
  
       
        document.getElementById('contactForm').reset();
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  }