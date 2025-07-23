const {
  primeiroNome,
  verificarDisponibilidadeEstoque,
  calcularPrecoTotal,
} = require('../utils/validacoes');

describe('Funções de Validação', () => {
  describe('primeiroNome', () => {
    it('deve retornar o primeiro nome de uma string completa', () => {
      expect(primeiroNome('João da Silva')).toBe('João');
    });
    
    it('deve retornar o nome se não houver espaços', () => {
      expect(primeiroNome('João')).toBe('João');
    });

    it('deve retornar uma string vazia se o input for vazio', () => {
      expect(primeiroNome('')).toBe('');
    });
  });

  describe('verificarDisponibilidadeEstoque', () => {
    it('deve retornar true se a quantidade desejada estiver disponível', () => {
      expect(verificarDisponibilidadeEstoque('laptop', 1)).toBe(true);
    });

    it('deve retornar false se o produto não estiver disponível', () => {
      expect(verificarDisponibilidadeEstoque('livro', 1)).toBe(false);
    });

    it('deve retornar false se a quantidade desejada for maior que o estoque', () => {
      expect(verificarDisponibilidadeEstoque('headphone', 6)).toBe(false);
    });

    it('deve retornar true se a quantidade desejada for igual ao estoque', () => {
      expect(verificarDisponibilidadeEstoque('tablet', 15)).toBe(true);
    });
  });

  describe('calcularPrecoTotal', () => {
    it('deve calcular o preço total de produtos corretamente', () => {
      const produtos = [
        { nome: 'Produto 1', preco: 10, quantidade: 2 },
        { nome: 'Produto 2', preco: 15, quantidade: 2 },
        { nome: 'Produto 3', preco: 20, quantidade: 1 }
      ];
      expect(calcularPrecoTotal(produtos)).toBe(70);
    });

    it('deve retornar 0 se o array de produtos estiver vazio', () => {
      expect(calcularPrecoTotal([])).toBe(0);
    });

    it('deve retornar 0 se todos os produtos tiverem preço 0', () => {
      const produtos = [
        { nome: 'Produto 1', preco: 0, quantidade: 2 }
      ];
      expect(calcularPrecoTotal(produtos)).toBe(0);
    });
  });
});