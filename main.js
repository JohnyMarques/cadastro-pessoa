// Função para adicionar um novo contato à tabela
function addContact() {
    // Obtendo valores dos campos de entrada
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    // Verificação se os campos estão preenchidos
    if (name && phone) {
      // Verificando se o número de telefone já foi cadastrado
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
        alert("Erro: Este número de telefone já foi cadastrado.");
      } else {
        // Criando uma nova linha na tabela
        const newRow = table.insertRow();
  
        // Adicionando células de nome e telefone
        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);
  
        nameCell.textContent = name;
        phoneCell.textContent = phone;
  
        // Limpando os campos do formulário
        document.getElementById('contactForm').reset();
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  }