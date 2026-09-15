class Funcionario{
    constructor(nome,cpf,matricula,salario){
        this.nome=nome;
        this.cpf=cpf;
        this.matricula=matricula;
        this.salario=salario;
    }
}
class Vendedores extends Funcionario{
    constructor(nome,cpf,matricula,salario,metaVenda){
        super(nome,cpf,matricula,salario);
        this.metaVenda=metaVenda;
    }
}
class Gerentes extends Funcionario{
    constructor(nome,cpf,matricula,salario,setor){
        super(nome,cpf,matricula,salario);
        this.setor=setor;
    }
}
class Cliente {
    constructor(nome,cpf,telefone,endereco){
        this.nome=nome;
        this.cpf=cpf;
        this.telefone=telefone;
        this.endereco=endereco;
    }
}

class Pagamento{
    constructor(valor, data, formaPagamento){
        this.valor=valor;
        this.data=data;
        this.formaPagamento=formaPagamento;
    }
}
class Item{
    constructor(quantidade, produto){
        this.quantidade=quantidade;
        this.produto=produto;

    }
}
class Produto {
    constructor(codigo, nome, descricao, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}
class Pedido{
    constructor(numero,data,status, cliente, vendedor, item, pagamento){
        this.numero=numero;
        this.data=data;
        this.status=status;
        this.cliente = cliente;
        this.vendedor = vendedor;
        this.item = item;
        this.pagamento = pagamento;
    }
}

const produto1 = new Produto(101, "Notebook", "Intel i5 16GB RAM", 3500.00);
const vendedor1 = new Vendedores("Ricardo Santos", "123.456.789-00", "VEN-2026-01", 2500.00, 15000.00);
const gerente1 = new Gerentes("Fernanda Lima", "321.654.987-11", "GER-2026-01", 6000.00, "Vendas");
const cliente1 = new Cliente("Ana Maria", "987.654.321-22", "(19) 98888-7777", "Rua das Flores, 123");
const item1 = new Item(1, produto1);
const pagamento1 = new Pagamento(3500.00, "15/09/2026", "Cartão de Crédito");
const pedido1 = new Pedido(1001, "15/09/2026", "Aprovado", cliente1, vendedor1, item1, pagamento1);


const produto2 = new Produto(102, "Smartphone", "128GB Tela 6.1", 2200.00);
const vendedor2 = new Vendedores("Lucas Mendes", "222.333.444-55", "VEN-2026-02", 2500.00, 15000.00);
const gerente2 = new Gerentes("Roberto Alves", "555.444.333-22", "GER-2026-02", 6500.00, "Estoque");
const cliente2 = new Cliente("João Pedro", "111.222.333-44", "(19) 97777-6666", "Av. Brasil, 456");
const item2 = new Item(2, produto2);
const pagamento2 = new Pagamento(4400.00, "15/09/2026", "PIX");
const pedido2 = new Pedido(1002, "15/09/2026", "Em Processamento", cliente2, vendedor2, item2, pagamento2);


console.log(pedido1);
console.log(pedido2);