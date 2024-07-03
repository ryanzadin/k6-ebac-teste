import http from 'k6/http';
import { group, sleep } from 'k6';
import login from '../request/login.request';
import data from '../data/usuarios.json'

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
 let login = new login()

   group('Login and get token', () => {
      login.access('data.usuarios0k.user', 'data.usrios0k.pass')
   })

   group('List users', () => {

   })
   
}