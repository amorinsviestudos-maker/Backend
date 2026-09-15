class Funcionario {
    constructor(idFuncionario, nome, cpf, matricula) {
        this.idFuncionario = idFuncionario;
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
    }
}

class Garcom extends Funcionario {
    constructor(idFuncionario, idGarcom, nome, cpf, matricula) {
        super(idFuncionario, nome, cpf, matricula);
        this.idGarcom = idGarcom;
    }

    servirMesa(mesa) {
        console.log('O garçom', this.nome, 'está servindo a mesa', mesa.numeroMesa, `(${mesa.localizacao})`);
    }

    retirarPedido() {
        console.log('O garçom', this.nome, 'está retirando pedidos.');
    }
}

class Cozinheiro extends Funcionario {
    constructor(idFuncionario, idCozinheiro, nome, cpf, matricula) {
        super(idFuncionario, nome, cpf, matricula);
        this.idCozinheiro = idCozinheiro;
    }

    cozinhar() {
        console.log('A cozinheira', this.nome, 'está preparando os pedidos.');
    }
}

class Cliente {
    constructor(idClienre,nome) {
        this.idClienre=idClienre;
        this.nome = nome;
    }

    pedido(mesa) {
        console.log('O cliente', this.nome, 'na mesa', mesa.numeroMesa, `(${mesa.localizacao})`, 'deseja realizar um pedido.');
    }
}

class Mesa {
    constructor(numeroMesa, capacidade, localizacao) {
        this.numeroMesa = numeroMesa;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
    }
}

class Item {
    constructor(quantidade, preco) {
        this.quantidade = quantidade;
        this.preco = preco;
    }
}

class Pedido {
    constructor(numero, data, valorTotal, cliente, garcom, mesa, item) {
        this.numero = numero;
        this.data = data;
        this.valorTotal = valorTotal;
        this.cliente = cliente;
        this.garcom = garcom;
        this.mesa = mesa;
        this.item = item;
    }
}


const mesa5 = new Mesa(5, 8, "Varanda");
const mesa4 = new Mesa(4, 6, "Salão");


const cliente1 = new Cliente("Maria");
cliente1.pedido(mesa5);

const cliente2 = new Cliente("Simone");
cliente2.pedido(mesa4);


const garcom1 = new Garcom(1, 101, "Tiago", "123.456.789-00", 'GAR-2026-014');
const garcom2 = new Garcom(2, 102, "Mateus", "860.861.310-74", 'GARC-2026-088');

garcom1.retirarPedido();
garcom1.servirMesa(mesa5);
garcom2.retirarPedido();
garcom2.servirMesa(mesa4);


const cozinheira1 = new Cozinheiro(3, 201, "Maria", "111.222.333-44", "COZ-2026-001");
const cozinheira2 = new Cozinheiro(4, 202, "Sofia", "555.666.777-88", "COZ-2026-002");

cozinheira1.cozinhar();
cozinheira2.cozinhar();
const item1 = new Item(2, 75.25);
const item2 = new Item(1, 170.90);


const novoPedido = new Pedido(1001, "15/09/2026", 150.50, cliente1, garcom1, mesa5, item1);
const novoPedido1 = new Pedido(1002, "15/09/2026", 170.90, cliente2, garcom2, mesa4, item2);

console.log(novoPedido);
console.log(novoPedido1);