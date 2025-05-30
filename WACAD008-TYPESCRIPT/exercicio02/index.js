var Aluno = /** @class */ (function () {
    function Aluno(id, nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
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
    Turma.prototype.editarAluno = function (id, dados) {
        var aluno = this.alunos.find(function (a) { return a.id === id; });
        if (aluno) {
            Object.assign(aluno, dados);
            this.atualizarEstatisticas();
        }
    };
    Turma.prototype.removerAluno = function (id) {
        this.alunos = this.alunos.filter(function (aluno) { return aluno.id !== id; });
        this.atualizarEstatisticas();
    };
    Turma.prototype.getNumAlunos = function () {
        return this.alunos.length;
    };
    Turma.prototype.getMediaIdades = function () {
        return this.alunos.length > 0 ?
            this.alunos.reduce(function (total, aluno) { return total + aluno.idade; }, 0) / this.alunos.length : 0;
    };
    Turma.prototype.getMediaAlturas = function () {
        return this.alunos.length > 0 ?
            this.alunos.reduce(function (total, aluno) { return total + aluno.altura; }, 0) / this.alunos.length : 0;
    };
    Turma.prototype.getMediaPesos = function () {
        return this.alunos.length > 0 ?
            this.alunos.reduce(function (total, aluno) { return total + aluno.peso; }, 0) / this.alunos.length : 0;
    };
    Turma.prototype.atualizarEstatisticas = function () {
        var numAlunos = this.getNumAlunos();
        var mediaIdades = this.getMediaIdades();
        var mediaAlturas = this.getMediaAlturas();
        var mediaPesos = this.getMediaPesos();
        document.getElementById("numStudents").innerText = numAlunos.toString();
        document.getElementById("avgAge").innerText = mediaIdades.toFixed(2);
        document.getElementById("avgHeight").innerText = mediaAlturas.toFixed(2);
        document.getElementById("avgWeight").innerText = mediaPesos.toFixed(2);
    };
    Turma.prototype.getAlunoById = function (id) {
        return this.alunos.find(function (aluno) { return aluno.id === id; });
    };
    return Turma;
}());
// Inicialização da turma
var turma = new Turma(1, "Turma de Educação Física");
var idAtual = null; // ID do aluno que está sendo editado
// Manipulação do formulário
var form = document.getElementById("studentForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var id = idAtual !== null ? idAtual : Number(document.getElementById("studentId").value);
    var nome = document.getElementById("studentName").value;
    var idade = Number(document.getElementById("studentAge").value);
    var altura = Number(document.getElementById("studentHeight").value);
    var peso = Number(document.getElementById("studentWeight").value);
    if (idAtual === null) {
        // Adicionar novo aluno
        var aluno = new Aluno(id, nome, idade, altura, peso);
        turma.adicionarAluno(aluno);
    }
    else {
        // Editar aluno existente
        turma.editarAluno(id, { nome: nome, idade: idade, altura: altura, peso: peso });
        idAtual = null; // Resetar ID de edição
    }
    // Limpar o formulário
    form.reset();
    atualizarListaAlunos();
});
// Função para atualizar a lista de alunos exibida
function atualizarListaAlunos() {
    var container = document.getElementById("studentsContainer");
    container.innerHTML = ""; // Limpar o conteúdo anterior
    turma.alunos.forEach(function (aluno) {
        //const div = document.createElement("div");
        //div.className = "student";
        container.innerHTML = "\n            <div>".concat(aluno.id, "</div>\n            <div>").concat(aluno.nome, "</div>\n            <div>").concat(aluno.idade, "</div>\n            <div>").concat(aluno.altura, "</div>\n            <div>").concat(aluno.peso, "</div>\n            <div>\n                <button onclick=\"preencherFormulario(").concat(aluno.id, ")\">Editar</button>\n                <button onclick=\"removerAluno(").concat(aluno.id, ")\">Remover</button>\n            </div>\n        ");
        //container.appendChild(div); 
    });
}
// Função para preencher o formulário com os dados do aluno para edição
function preencherFormulario(id) {
    var aluno = turma.getAlunoById(id);
    if (aluno) {
        document.getElementById("studentId").value = aluno.id.toString();
        document.getElementById("studentName").value = aluno.nome;
        document.getElementById("studentAge").value = aluno.idade.toString();
        document.getElementById("studentHeight").value = aluno.altura.toString();
        document.getElementById("studentWeight").value = aluno.peso.toString();
        idAtual = aluno.id; // Armazenar ID do aluno que está sendo editado
    }
}
// Função para remover aluno
function removerAluno(id) {
    turma.removerAluno(id);
    atualizarListaAlunos();
}
