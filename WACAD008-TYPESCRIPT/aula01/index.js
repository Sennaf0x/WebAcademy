var lembretes = [];
var titleInput = document.getElementById('title');
var h1 = document.getElementById('topo');
var dueDateInput = document.getElementById('dueDate');
var dueLimitInput = document.getElementById('limitDate');
var descriptionInput = document.getElementById('description');
var ListaLembretes = document.getElementById('listaLembretes');
var addButton = document.querySelector('.add-button');
var currentEditId = null; // Variável para controlar o lembrete em edição
var AdicionarLembretes = function () {
    var novoLembrete = {
        id: currentEditId ? currentEditId : Date.now(),
        title: titleInput.value,
        createdAt: new Date(),
        dueDate: dueDateInput.value ? new Date(dueDateInput.value) : undefined,
        limitDate: dueLimitInput.value ? new Date(dueLimitInput.value) : undefined,
        description: descriptionInput.value,
    };
    if (currentEditId) {
        lembretes = lembretes.map(function (lembrete) { return lembrete.id === currentEditId ? novoLembrete : lembrete; });
    }
    else {
        lembretes.push(novoLembrete);
    }
    carregarLembretes();
    clearInputs();
    currentEditId = null; // Reseta a variável após adicionar ou atualizar
    addButton.textContent = 'Adicionar Lembrete'; // Restaura o texto do botão
};
var clearInputs = function () {
    titleInput.value = '';
    dueDateInput.value = '';
    dueLimitInput.value = '';
    descriptionInput.value = '';
};
var carregarLembretes = function () {
    ListaLembretes.innerHTML = '';
    lembretes.forEach(function (reminder) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "\n            <strong>".concat(reminder.title, "</strong>\n            <p>Data de Cria\u00E7\u00E3o: ").concat(reminder.createdAt.toLocaleString(), "</p>\n            ").concat(reminder.limitDate ? "<p>Data Limite: ".concat(reminder.limitDate.toLocaleString(), "</p>") : '', "\n            ").concat(reminder.description ? "<p>Descri\u00E7\u00E3o: ".concat(reminder.description, "</p>") : '', "\n            <div class=\"flex\">\n                <button class=\"update-button\" onclick=\"atualizarLembrete(").concat(reminder.id, ")\">Atualizar</button>\n                <button class=\"delete-button\" onclick=\"deletarLembrete(").concat(reminder.id, ")\">Excluir</button>\n            </div>\n            ");
        ListaLembretes.appendChild(listItem);
    });
};
var atualizarLembrete = function (id) {
    var lembreteParaAtualizar = lembretes.find(function (reminder) { return reminder.id === id; });
    if (lembreteParaAtualizar) {
        titleInput.value = lembreteParaAtualizar.title;
        dueDateInput.value = lembreteParaAtualizar.dueDate ? lembreteParaAtualizar.dueDate.toISOString().split('T')[0] : '';
        dueLimitInput.value = lembreteParaAtualizar.limitDate ? lembreteParaAtualizar.limitDate.toISOString().split('T')[0] : '';
        descriptionInput.value = lembreteParaAtualizar.description || '';
        currentEditId = id; // Define o lembrete atual para edição
        addButton.textContent = 'Salvar'; // Muda o texto do botão
        h1.textContent = 'Atualizar Lembrete'; // Muda o texto do botão
        addButton.classList.add('salvar');
        addButton.classList.remove('add-button');
    }
};
var deletarLembrete = function (id) {
    lembretes = lembretes.filter(function (reminder) { return reminder.id !== id; });
    carregarLembretes();
};
addButton.addEventListener('click', AdicionarLembretes);
