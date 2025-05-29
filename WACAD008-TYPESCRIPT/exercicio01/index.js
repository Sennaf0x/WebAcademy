import { ReminderList } from './reminder.js';
const myReminders = new ReminderList();
let editIndex = null; // Variável para armazenar o índice do lembrete a ser editado
const form = document.getElementById('reminderForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const title = document.getElementById('title').value;
    const insertionDate = new Date(document.getElementById('insertionDate').value);
    const dueDateValue = document.getElementById('dueDate').value;
    const dueDate = dueDateValue ? new Date(dueDateValue) : undefined;
    const description = document.getElementById('description').value;
    if (editIndex !== null) {
        // Edita o lembrete existente
        myReminders.editReminder(editIndex, [title, insertionDate, dueDate, description]);
        editIndex = null; // Reseta o índice após edição
    }
    else {
        // Adiciona um novo lembrete
        myReminders.addReminder(title, insertionDate, dueDate, description);
    }
    renderReminders(); // Renderiza os lembretes
    this.reset(); // Limpa o formulário
});
function renderReminders() {
    const reminderList = document.getElementById('reminderList');
    reminderList.innerHTML = ''; // Limpa a lista existente para evitar duplicações
    myReminders.getReminders().forEach((reminder, index) => {
        var _a;
        const listItem = document.createElement('li');
        listItem.classList.add('card');
        // Criando div do titulo do card
        const divTitulo = document.createElement('div');
        const pTitulo = document.createElement('p');
        pTitulo.textContent = `${reminder[0]}`;
        divTitulo.classList.add('titulo');
        divTitulo.appendChild(pTitulo);
        listItem.appendChild(divTitulo);
        // Criando div de data do card
        const divData = document.createElement('div');
        const pData1 = document.createElement('p');
        const pData2 = document.createElement('p');
        pData1.textContent = `Início: ${reminder[1].toLocaleString()}`;
        pData2.textContent = `Fim: ${(_a = reminder[2]) === null || _a === void 0 ? void 0 : _a.toLocaleString()}`;
        divData.appendChild(pData1);
        divData.appendChild(pData2);
        listItem.appendChild(divData);
        divData.classList.add('data');
        // Criando div de descrição do card
        const divDescricao = document.createElement('div');
        const pDescricaoTitulo = document.createElement('p');
        const pDescricaoTexto = document.createElement('p');
        pDescricaoTitulo.textContent = 'Descrição';
        pDescricaoTexto.textContent = `${reminder[3]}`;
        divDescricao.appendChild(pDescricaoTitulo);
        divDescricao.appendChild(pDescricaoTexto);
        listItem.appendChild(divDescricao);
        pDescricaoTitulo.classList.add('titulo');
        pDescricaoTexto.classList.add('area-texto');
        divDescricao.classList.add('descricao');
        // Criando div de botoes
        const divBotoes = document.createElement('div');
        divBotoes.classList.add('botoes');
        // Botão para editar lembrete
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('editar');
        editButton.onclick = () => {
            // Carrega os dados do lembrete nos campos do formulário
            document.getElementById('title').value = reminder[0];
            document.getElementById('insertionDate').value = reminder[1].toISOString().slice(0, 16);
            document.getElementById('dueDate').value = reminder[2] ? reminder[2].toISOString().slice(0, 16) : '';
            document.getElementById('description').value = reminder[3] || '';
            editIndex = index; // Armazena o índice do lembrete a ser editado
        };
        // Botão para deletar lembrete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.classList.add('deletar');
        deleteButton.onclick = () => {
            myReminders.deleteReminder(index);
            renderReminders(); // Atualiza a lista após a exclusão
        };
        divBotoes.appendChild(editButton);
        divBotoes.appendChild(deleteButton);
        listItem.appendChild(divBotoes);
        reminderList.appendChild(listItem);
    });
}
// Inicializa com alguns lembretes (opcional)
myReminders.addReminder("Exemplo de lembrete", new Date(), new Date('2023-10-15'), "Exemplo de descrição");
renderReminders(); // Renderiza lembretes iniciais
