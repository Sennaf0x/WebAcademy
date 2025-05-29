class Aluno {
    constructor(
        public id: number,
        public nomeCompleto: String,
        public idade: number,
        public altura: number,
        public peso: number
        ) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura; // em centímetros
        this.peso = peso; // em kg
    }
}


class Turma {


    constructor(
        public id: number,
        public nome: String,
        public alunos: Aluno[]
    ) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
    }

    editarAluno(id: number, alunoEdicao) {
        const index = this.alunos.findIndex(a => a.id === id);
        if (index !== -1) {
            this.alunos[index] = alunoEdicao;
            this.atualizarEstatisticas();
        } else {
            console.log("Aluno não encontrado.");
        }
    }

    removerAluno(id: number) {
        this.alunos = this.alunos.filter(a => a.id !== id);
        this.atualizarEstatisticas();
    }

    getNumAlunos() {
        return this.alunos.length;
    }

    atualizarEstatisticas() {
        
        const totalEstudantes = document.getElementById('numStudents') as HTMLElement;
        totalEstudantes.innerText = this.getNumAlunos();
        const mediaIdade = document.getElementById('avgAge') as HTMLElement;
        mediaIdade.innerText = this.getMediaIdades().toFixed(2);
        const mediaAltura = document.getElementById('avgHeight') as HTMLElement;
        mediaAltura.innerText = this.getMediaAlturas().toFixed(2);
        const mediaPesos = document.getElementById('avgWeight') as HTMLElement;
        mediaPesos.innerText = this.getMediaPesos().toFixed(2);

        this.listarAlunos();
    }

    getMediaIdades() {
        return this.calcularMedia('idade');
    }

    getMediaAlturas() {
        return this.calcularMedia('altura');
    }

    getMediaPesos() {
        return this.calcularMedia('peso');
    }

    calcularMedia(atributo) {
        const total = this.alunos.reduce((acc, aluno) => acc + aluno[atributo], 0);
        return total / this.getNumAlunos() || 0; // Previne divisão por zero
    }

    listarAlunos() {
        const container = document.getElementById('studentsContainer') as HTMLElement;
        container.innerHTML = '';
        this.alunos.forEach(aluno => {
            const div = document.createElement('div');
            div.className = 'student';
            div.innerText = `${aluno.nomeCompleto}, Idade: ${aluno.idade}, Altura: ${aluno.altura}, Peso: ${aluno.peso}`;
            container.appendChild(div);
        });
    }
}

class GerenciadorTurma {
    constructor() {
        this.turma = new Turma(1, 'Educação Física');
        this.init();
    }

    init() {
        const form = document.getElementById('studentForm') as HTMLFormElement; 
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const aluno = this.criarAlunoDoFormulario();
            this.turma.adicionarAluno(aluno);
            form.reset();
        });
    }

    criarAlunoDoFormulario() {
        const id = (document.getElementById('studentId') as HTMLInputElement).value;
        const nomeCompleto = (document.getElementById('studentName') as HTMLInputElement).value;
        const idade = (document.getElementById('studentAge') as HTMLInputElement).value;
        const altura = (document.getElementById('studentHeight') as HTMLInputElement).value;
        const peso = (document.getElementById('studentWeight') as HTMLInputElement).value;
        return new Aluno(id, nomeCompleto, idade, altura, peso);
    }
}

// Inicializando o gerenciador de turma
new GerenciadorTurma();