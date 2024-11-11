// Função para formatar o número de telefone com (DDD) NNNNNNNNN
function formatPhone(input) {
    // Remove todos os caracteres que não sejam números
    let phone = input.value.replace(/\D/g, '');
  
    // Limita o número a 11 dígitos
    if (phone.length > 11) phone = phone.slice(0, 11);
  
    // Aplica o formato (DDD) NNNNNNNNN
    if (phone.length > 6) {
      input.value = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
    } else if (phone.length > 2) {
      input.value = `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    } else {
      input.value = phone;
    }
  }
  
  // Função para adicionar um novo contato à tabela
  function addContact() {
    // Obtendo valores dos campos de entrada
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    // Verificação se os campos estão preenchidos
    if (name && phone) {
      // Verificação do formato completo do telefone
      const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
      if (!phonePattern.test(phone)) {
        alert("Erro: O número de telefone deve estar no formato (DDD) NNNNN-NNNN.");
        return;
      }
  
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
        alert("Este número de telefone já foi cadastrado.");
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