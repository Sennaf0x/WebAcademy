class Aluno {
    constructor(
        public id: number,
        public nome: string,
        public idade: number,
        public altura: number,
        public peso: number
    ) {}
}

class Turma {
    public alunos: Aluno[] = [];

    constructor(public id: number, public nome: string) {}

    adicionarAluno(aluno: Aluno) {
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
    }

    editarAluno(id: number, dados: Partial<Aluno>) {
        const aluno = this.alunos.find(a => a.id === id);
        if (aluno) {
            Object.assign(aluno, dados);
            this.atualizarEstatisticas();
        }
    }

    removerAluno(id: number) {
        this.alunos = this.alunos.filter(aluno => aluno.id !== id);
        this.atualizarEstatisticas();
    }

    getNumAlunos(): number {
        return this.alunos.length;
    }

    getMediaIdades(): number {
        return this.alunos.length > 0 ?
            this.alunos.reduce((total, aluno) => total + aluno.idade, 0) / this.alunos.length : 0;
    }

    getMediaAlturas(): number {
        return this.alunos.length > 0 ?
            this.alunos.reduce((total, aluno) => total + aluno.altura, 0) / this.alunos.length : 0;
    }

    getMediaPesos(): number {
        return this.alunos.length > 0 ?
            this.alunos.reduce((total, aluno) => total + aluno.peso, 0) / this.alunos.length : 0;
    }

    private atualizarEstatisticas() {
        const numAlunos = this.getNumAlunos();
        const mediaIdades = this.getMediaIdades();
        const mediaAlturas = this.getMediaAlturas();
        const mediaPesos = this.getMediaPesos();

        document.getElementById("numStudents")!.innerText = numAlunos.toString();
        document.getElementById("avgAge")!.innerText = mediaIdades.toFixed(2);
        document.getElementById("avgHeight")!.innerText = mediaAlturas.toFixed(2);
        document.getElementById("avgWeight")!.innerText = mediaPesos.toFixed(2);
    }

    getAlunoById(id: number): Aluno | undefined {
        return this.alunos.find(aluno => aluno.id === id);
    }
}

// Inicialização da turma
const turma = new Turma(1, "Turma de Educação Física");

let idAtual: number | null = null; // ID do aluno que está sendo editado

// Manipulação do formulário
const form = document.getElementById("studentForm") as HTMLFormElement;
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const id = idAtual !== null ? idAtual : Number((document.getElementById("studentId") as HTMLInputElement).value);
    const nome = (document.getElementById("studentName") as HTMLInputElement).value;
    const idade = Number((document.getElementById("studentAge") as HTMLInputElement).value);
    const altura = Number((document.getElementById("studentHeight") as HTMLInputElement).value);
    const peso = Number((document.getElementById("studentWeight") as HTMLInputElement).value);

    if (idAtual === null) {
        // Adicionar novo aluno
        const aluno = new Aluno(id, nome, idade, altura, peso);
        turma.adicionarAluno(aluno);
    } else {
        // Editar aluno existente
        turma.editarAluno(id, { nome, idade, altura, peso });
        idAtual = null; // Resetar ID de edição
    }

    // Limpar o formulário
    form.reset();
    atualizarListaAlunos();
});

// Função para atualizar a lista de alunos exibida
function atualizarListaAlunos() {
    const container = document.getElementById("studentsContainer")!; 
    container.innerHTML = ""; // Limpar o conteúdo anterior

    turma.alunos.forEach(aluno => {
        //const div = document.createElement("div");
        //div.className = "student";
        container.innerHTML = `
            <div>${aluno.id}</div>
            <div>${aluno.nome}</div>
            <div>${aluno.idade}</div>
            <div>${aluno.altura}</div>
            <div>${aluno.peso}</div>
            <div>
                <button onclick="preencherFormulario(${aluno.id})">Editar</button>
                <button onclick="removerAluno(${aluno.id})">Remover</button>
            </div>
        `;
        //container.appendChild(div); 
    });
}

// Função para preencher o formulário com os dados do aluno para edição
function preencherFormulario(id: number) {
    const aluno = turma.getAlunoById(id);
    if (aluno) {
        (document.getElementById("studentId") as HTMLInputElement).value = aluno.id.toString();
        (document.getElementById("studentName") as HTMLInputElement).value = aluno.nome;
        (document.getElementById("studentAge") as HTMLInputElement).value = aluno.idade.toString();
        (document.getElementById("studentHeight") as HTMLInputElement).value = aluno.altura.toString();
        (document.getElementById("studentWeight") as HTMLInputElement).value = aluno.peso.toString();

        idAtual = aluno.id; // Armazenar ID do aluno que está sendo editado
    }
}

// Função para remover aluno
function removerAluno(id: number) {
    turma.removerAluno(id);
    atualizarListaAlunos();
}