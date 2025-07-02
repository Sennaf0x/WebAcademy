let productArray = [
    { "id":1, "name": "Notebook Acer", "price": 1234 },
    { "id":2, "name": "Monitor Dell", "price": 2000 },
    { "id":3, "name": "PC Gamer Dell", "price": 4000 }
];
let currentId = 4;

const index = async (req, res) => {
  await Promise.resolve();
  res.json(productArray);
};

const create = async (req, res) => {
  await Promise.resolve(); 
  const { id, name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'Name and price are required' });
  }
  let newProduct;
  if (id) {
    newProduct = { id, name, price };
  } else {
    newProduct = { id: currentId++, name, price };
  }
  productArray.push(newProduct);
  res.status(201).json(newProduct);
};

const read = async (req, res) => {
  await Promise.resolve(); 
  const id = Number(req.params.id);
  const product = productArray.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

const update = async (req, res) => {
  await Promise.resolve();
  const id = Number(req.params.id);
  const productIdx = productArray.findIndex(p => p.id === id);
  if (productIdx === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const { name, price } = req.body;
  if (!name && price === undefined) {
    return res.status(400).json({ message: 'At least one of name or price required' });
  }
  if (name) productArray[productIdx].name = name;
  if (price !== undefined) productArray[productIdx].price = price;
  res.json(productArray[productIdx]);
};

const remove = async (req, res) => {
  await Promise.resolve();
  const id = Number(req.params.id);
  const productIdx = productArray.findIndex(p => p.id === id);
  if (productIdx === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  productArray.splice(productIdx, 1);
  res.status(204).send();
};

export default { index, create, read, update, remove };