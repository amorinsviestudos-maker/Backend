class Funcionario {
    constructor(idFuncionario, nome, cpf) {
        this.idFuncionario = idFuncionario;
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Instrutor extends Funcionario {
    constructor(idFuncionario, idInstrutor, nome, cpf, especialidade) {
        super(idFuncionario, nome, cpf);
        this.idInstrutor = idInstrutor;
        this.especialidade = especialidade;
    }

    criarCurso(curso) {
        console.log('O instrutor', this.nome, 'criou o curso:', curso.nome);
    }

    ministrarAula(aula) {
        console.log('O instrutor', this.nome, 'está a ministrar a aula:', aula.titulo);
    }
}

class Administrador extends Funcionario {
    constructor(idFuncionario, idAdministrador, nome, cpf, setor) {
        super(idFuncionario, nome, cpf);
        this.idAdministrador = idAdministrador;
        this.setor = setor;
    }

    gerirPlataforma() {
        console.log('O administrador', this.nome, 'do setor', this.setor, 'está a gerir a plataforma.');
    }
}

class Aluno {
    constructor(idAluno, nome, cpf, email, dataCadastro) {
        this.idAluno = idAluno;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataCadastro = dataCadastro;
    }

    matricular(curso) {
        console.log('O aluno', this.nome, 'matriculou-se no curso:', curso.nome);
    }

    assistirAula(aula) {
        console.log('O aluno', this.nome, 'está a assistir à aula:', aula.titulo);
    }
}

class Aula {
    constructor(idAula, titulo, duracao, conteudo) {
        this.idAula = idAula;
        this.titulo = titulo;
        this.duracao = duracao;
        this.conteudo = conteudo;
    }
}

class Modulo {
    constructor(idModulo, titulo, descricao, ordem, aula) {
        this.idModulo = idModulo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordem = ordem;
        this.aula = aula;
    }
}

class Curso {
    constructor(idCurso, nome, descricao, duracao, preco, instrutor, modulo, aluno) {
        this.idCurso = idCurso;
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.preco = preco;
        this.instrutor = instrutor;
        this.modulo = modulo;
        this.aluno = aluno;
    }
}


const aula1 = new Aula(1, "Variáveis e Operadores", "15min", "https://video.com/1");
const aula2 = new Aula(2, "Classes e Objetos", "25min", "https://video.com/2");

const modulo1 = new Modulo(101, "Lógica Fundamental", "Conceitos básicos de programação", 1, aula1);
const modulo2 = new Modulo(102, "Orientação a Objetos", "Conceitos de POO em JS", 2, aula2);

const aluno1 = new Aluno(1, "João Pereira", "111.222.333-44", "joao@email.com", "21/09/2026");
const aluno2 = new Aluno(2, "Mariana Costa", "222.333.444-55", "mariana@email.com", "21/09/2026");


const instrutor1 = new Instrutor(1, 501, "Rafael Silva", "123.456.789-00", "INS-2026-001", "JavaScript & Web");
const instrutor2 = new Instrutor(2, 502, "Aline Santos", "987.654.321-00", "INS-2026-002", "Backend & Node.js");

const admin1 = new Administrador(3, 901, "Roberto Lima", "555.444.333-22", "ADM-2026-010", "Tecnologia da Informação");

admin1.gerirPlataforma();

const curso1 = new Curso(1001, "JavaScript do Zero ao Avançado", "Curso completo", "40h", 299.90, instrutor1, modulo1, aluno1);
const curso2 = new Curso(1002, "Node.js Profissional", "Desenvolvimento backend", "30h", 199.90, instrutor2, modulo2, aluno2);

instrutor1.criarCurso(curso1);
instrutor1.ministrarAula(aula1);

aluno1.matricular(curso1);
aluno1.assistirAula(aula1);

console.log(curso1);
console.log(curso2);