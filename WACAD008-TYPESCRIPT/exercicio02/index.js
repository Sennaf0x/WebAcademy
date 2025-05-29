var Aluno = /** @class */ (function () {
    function Aluno(id, nomeCompleto, idade, altura, peso) {
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura; // em centímetros
        this.peso = peso; // em kg
    }
    return Aluno;
}());
var Turma = /** @class */ (function () {
    function Turma(id, nome) {
        this.id = id;
        this.nome = nome;
        this.alunos = [];
    }
    Turma.prototype.adicionarAluno = function (aluno) {
        this.alunos.push(aluno);
        this.atualizarEstatisticas();
    };
    Turma.prototype.editarAluno = function (id, alunoEdicao) {
        var index = this.alunos.findIndex(function (a) { return a.id === id; });
        if (index !== -1) {
            this.alunos[index] = alunoEdicao;
            this.atualizarEstatisticas();
        }
        else {
            console.log("Aluno não encontrado.");
        }
    };
    Turma.prototype.removerAluno = function (id) {
        this.alunos = this.alunos.filter(function (a) { return a.id !== id; });
        this.atualizarEstatisticas();
    };
    Turma.prototype.getNumAlunos = function () {
        return this.alunos.length;
    };
    Turma.prototype.atualizarEstatisticas = function () {
        document.getElementById('numStudents').innerText = this.getNumAlunos();
        document.getElementById('avgAge').innerText = this.getMediaIdades().toFixed(2);
        document.getElementById('avgHeight').innerText = this.getMediaAlturas().toFixed(2);
        document.getElementById('avgWeight').innerText = this.getMediaPesos().toFixed(2);
        this.listarAlunos();
    };
    Turma.prototype.getMediaIdades = function () {
        return this.calcularMedia('idade');
    };
    Turma.prototype.getMediaAlturas = function () {
        return this.calcularMedia('altura');
    };
    Turma.prototype.getMediaPesos = function () {
        return this.calcularMedia('peso');
    };
    Turma.prototype.calcularMedia = function (atributo) {
        var total = this.alunos.reduce(function (acc, aluno) { return acc + aluno[atributo]; }, 0);
        return total / this.getNumAlunos() || 0; // Previne divisão por zero
    };
    Turma.prototype.listarAlunos = function () {
        var container = document.getElementById('studentsContainer');
        container.innerHTML = '';
        this.alunos.forEach(function (aluno) {
            var div = document.createElement('div');
            div.className = 'student';
            div.innerText = "".concat(aluno.nomeCompleto, ", Idade: ").concat(aluno.idade, ", Altura: ").concat(aluno.altura, ", Peso: ").concat(aluno.peso);
            container.appendChild(div);
        });
    };
    return Turma;
}());
var GerenciadorTurma = /** @class */ (function () {
    function GerenciadorTurma() {
        this.turma = new Turma(1, 'Educação Física');
        this.init();
    }
    GerenciadorTurma.prototype.init = function () {
        var _this = this;
        document.getElementById('studentForm').addEventListener('submit', function (event) {
            event.preventDefault();
            var aluno = _this.criarAlunoDoFormulario();
            _this.turma.adicionarAluno(aluno);
            document.getElementById('studentForm').reset();
        });
    };
    GerenciadorTurma.prototype.criarAlunoDoFormulario = function () {
        var id = parseInt(document.getElementById('studentId').value);
        var nomeCompleto = document.getElementById('studentName').value;
        var idade = parseInt(document.getElementById('studentAge').value);
        var altura = parseInt(document.getElementById('studentHeight').value);
        var peso = parseInt(document.getElementById('studentWeight').value);
        return new Aluno(id, nomeCompleto, idade, altura, peso);
    };
    return GerenciadorTurma;
}());
// Inicializando o gerenciador de turma
new GerenciadorTurma();
