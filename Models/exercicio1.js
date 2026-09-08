class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Usuario extends Pessoa {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
          console.log('Usuário:',nome, 'CPF:', cpf, 'Matricula:',matricula);
    }
}


class Funcionario extends Pessoa {
    constructor(nome, cpf, matriculaFuncional, cargo) {
        super(nome, cpf);
        this.matriculaFuncional = matriculaFuncional;
        this.cargo = cargo;
     console.log('Funcionario:',nome, 'CPF:', cpf, 'Matricula Funcional:',matriculaFuncional, 'ocupa o cargo de:', cargo);
    }
}

class Livro {
    constructor(titulo, isbn, anoPublicacao) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.anoPublicacao = anoPublicacao;
     console.log('Título:',titulo, 'ISBN:', isbn, 'Ano de Públicação:',anoPublicacao);
    }
}

class Emprestimo {
    constructor(dataEmprestimo, dataDevolucao, usuario, livro) {
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.usuario = usuario; 
        this.livro = livro;    
     console.log('Data de empréstimo:',dataEmprestimo, 'Data de devolução:', dataDevolucao);
    }

}
const usuario1 = new Usuario('Ana Silva', '111.222.333-44', 'U202601');
const funcionario1 = new Funcionario('Carlos Souza', '555.666.777-88', 'F901', 'Bibliotecário');
const livro1 = new Livro('Engenharia de Software', '978-8575227242', 2020);
const emprestimo1 = new Emprestimo('01/06/2026', '15/06/2026', usuario1, livro1)