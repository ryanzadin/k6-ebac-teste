
import { group } from 'k6';
import Login from '../request/login.request';
import data from '../data/usuarios.json'
import User from '../request/user.request';
import Produto from '../request/product.request';
import Customer from '../request/customer.request';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 20 },
    { duration: '30s', target: 30 },
    { duration: '0s', target: 0 }
  ]
};

export default function () {

  let login = new Login()
  let user = new User()
  let product = new Produto()
  let customer = new Customer()

  group('Login and get token', () => {
    login.access(data.usuario0k.user, data.usuario0k.pass)
  })

  group('List user', () => {
    user.list(login.getToken())
  })

  group('Lista de produtos', () => {
    product.list(login.getToken())
  })

  group('Lista de clientes', () => {
    customer.list(login.getToken())
  })

}
