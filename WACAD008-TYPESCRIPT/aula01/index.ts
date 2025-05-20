interface Lembrete {
    id: number;
    title: string;
    createdAt: Date;
    dueDate?: Date; 
    limitDate?: Date; 
    description?: string;
}

let lembretes: Lembrete[] = [];

const titleInput = document.getElementById('title') as HTMLInputElement;
const h1 = document.getElementById('topo') as HTMLInputElement;
const dueDateInput = document.getElementById('dueDate') as HTMLInputElement;
const dueLimitInput = document.getElementById('limitDate') as HTMLInputElement;
const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
const ListaLembretes = document.getElementById('listaLembretes') as HTMLUListElement;
const addButton = document.querySelector('.add-button') as HTMLButtonElement; 

let currentEditId: number | null = null; // Variável para controlar o lembrete em edição

const AdicionarLembretes = () => {
    const novoLembrete: Lembrete = {
        id: currentEditId ? currentEditId : Date.now(),
        title: titleInput.value,
        createdAt: new Date(),
        dueDate: dueDateInput.value ? new Date(dueDateInput.value) : undefined,
        limitDate: dueLimitInput.value ? new Date(dueLimitInput.value) : undefined,
        description: descriptionInput.value,
    };

    if (currentEditId) {
        lembretes = lembretes.map(lembrete => lembrete.id === currentEditId ? novoLembrete : lembrete);
    } else {
        lembretes.push(novoLembrete);
    }

    carregarLembretes();
    clearInputs();
    currentEditId = null; // Reseta a variável após adicionar ou atualizar
    addButton.textContent = 'Adicionar Lembrete'; // Restaura o texto do botão
};

const clearInputs = () => {
    titleInput.value = '';
    dueDateInput.value = '';
    dueLimitInput.value = '';
    descriptionInput.value = '';
};

const carregarLembretes = () => {
    ListaLembretes.innerHTML = '';
    lembretes.forEach(reminder => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${reminder.title}</strong>
            <p>Data de Criação: ${reminder.createdAt.toLocaleString()}</p>
            ${reminder.limitDate ? `<p>Data Limite: ${reminder.limitDate.toLocaleString()}</p>` : ''}
            ${reminder.description ? `<p>Descrição: ${reminder.description}</p>` : ''}
            <div class="flex">
                <button class="update-button" onclick="atualizarLembrete(${reminder.id})">Atualizar</button>
                <button class="delete-button" onclick="deletarLembrete(${reminder.id})">Excluir</button>
            </div>
            `;
        ListaLembretes.appendChild(listItem);
    });
};

const atualizarLembrete = (id: number) => {
    const lembreteParaAtualizar = lembretes.find(reminder => reminder.id === id);
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

const deletarLembrete = (id: number) => {
    lembretes = lembretes.filter(reminder => reminder.id !== id);
    carregarLembretes();
};

addButton.addEventListener('click', AdicionarLembretes);