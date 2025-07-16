import express from 'express';
import * as userController from '../resources/userType/user/user.controller';

const app = express();
app.use(express.json());

app.get('/', userController.index);
app.post('/', userController.create);
app.get('/:id', userController.read);
app.put('/:id', userController.update);
app.delete('/:id', userController.remove);

export default app;