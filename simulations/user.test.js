
import { group } from 'k6';
import Login from '../request/login.request';
import data from '../data/usuarios.json'
import User from '../request/user.request';

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
  group('Login and get token', () => {
    login.access(data.usuarios0k.user, data.usrios0k.pass)
  })

  group('List users', () => {
    user.list(login.getToken())
  })

}
