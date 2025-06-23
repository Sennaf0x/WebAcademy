-- O código deve ser utilizado dentro de uma QUERY dentro da coluna do banco de dados

USE lojadb;

DELIMITER $$

-- Trigger para INSERT
CREATE TRIGGER trg_produto_insert
AFTER INSERT ON Produto
FOR EACH ROW
BEGIN
  INSERT INTO LogProduto (produto_id, acao, data_evento, usuario_bd, dados_antes, dados_depois)
  VALUES (
    NEW.id, 
    'INSERT', 
    NOW(), 
    USER(), 
    NULL, 
    JSON_OBJECT(
      'id_categoria', NEW.id_categoria,
      'id_subcategoria', NEW.id_subcategoria,
      'modelo', NEW.modelo,
      'fabricante', NEW.fabricante,
      'preco_base', NEW.preco_base,
      'quantidade', NEW.quantidade
    )
  );
END$$

-- Trigger para UPDATE
CREATE TRIGGER trg_produto_update
AFTER UPDATE ON Produto
FOR EACH ROW
BEGIN
  INSERT INTO LogProduto (produto_id, acao, data_evento, usuario_bd, dados_antes, dados_depois)
  VALUES (
    NEW.id, 
    'UPDATE', 
    NOW(), 
    USER(), 
    JSON_OBJECT(
      'id_categoria', OLD.id_categoria,
      'id_subcategoria', OLD.id_subcategoria,
      'modelo', OLD.modelo,
      'fabricante', OLD.fabricante,
      'preco_base', OLD.preco_base,
      'quantidade', OLD.quantidade
    ),
    JSON_OBJECT(
      'id_categoria', NEW.id_categoria,
      'id_subcategoria', NEW.id_subcategoria,
      'modelo', NEW.modelo,
      'fabricante', NEW.fabricante,
      'preco_base', NEW.preco_base,
      'quantidade', NEW.quantidade
    )
  );
END$$

-- Trigger para DELETE
CREATE TRIGGER trg_produto_delete
AFTER DELETE ON Produto
FOR EACH ROW
BEGIN
  INSERT INTO LogProduto (produto_id, acao, data_evento, usuario_bd, dados_antes, dados_depois)
  VALUES (
    OLD.id, 
    'DELETE', 
    NOW(), 
    USER(), 
    JSON_OBJECT(
      'id_categoria', OLD.id_categoria,
      'id_subcategoria', OLD.id_subcategoria,
      'modelo', OLD.modelo,
      'fabricante', OLD.fabricante,
      'preco_base', OLD.preco_base,
      'quantidade', OLD.quantidade
    ),
    NULL
  );
END$$

DELIMITER ;