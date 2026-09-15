 class Pessoa {
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
}

class Aluno extends Pessoa {
    constructor(nome, cpf, dataNascimento, matricula) {
        super(nome, cpf, dataNascimento);
        this.matricula = matricula;
    }
}

class Professor extends Pessoa {
    constructor(nome, cpf, dataNascimento, matriculaFuncional) {
        super(nome, cpf, dataNascimento);
        this.matriculaFuncional = matriculaFuncional;
    }
}

class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
        this.nome = nome;
        this.codigo = codigo;
        this.cargaHoraria = cargaHoraria;
    }
}

class Turma {

    constructor(codigo, sala, horario, disciplina, professor, aluno1, aluno2) { 
        this.codigo = codigo;
        this.sala = sala;
        this.horario = horario;
        this.disciplina = disciplina;
        this.professor = professor; 
        this.aluno1 = aluno1;
        this.aluno2 = aluno2;
    }
}

const aluno1 = new Aluno("Daniel Silva", "123.456.789-00", "15/03/2005", "ALU-2026-01");
const aluno2 = new Aluno("Beatriz Souza", "987.654.321-11", "22/07/2004", "ALU-2026-02");

const professor1 = new Professor("Dr. Roberto", "444.555.666-77", "10/01/1980", "PROF-2026-99");
const disciplinaPOO = new Disciplina("Programação Orientada a Objetos", "POO-101", 80);

const professor2 = new Professor("Dra. Katielle", "954.554.415-25", "15/11/1986", "PROF-2026-98");
const disciplinaHTML = new Disciplina("Linguagem de Marcação de Hipertexto", "HTML-112", 24);

const turma1 = new Turma("TURMA-A", "Sala 204", "Segunda/Quarta 08:00", disciplinaPOO, professor1, aluno1, aluno2);
console.log(turma1);

const turma2 = new Turma("TURMA-F", "Sala 100", "Quarta/Sexta 08:00", disciplinaHTML, professor2, aluno1, aluno2);console.log(turma2);