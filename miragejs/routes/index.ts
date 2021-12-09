// import { Response } from 'miragejs';

export default function routes() {
  this.namespace = 'api'
  // this.timing = 5000

  this.resource('products')
  // this.get('products', () => {
  //   return new Response(500, {}, 'Server is down');
  // });
}
