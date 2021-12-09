import { Factory } from 'miragejs'

import faker from 'faker'

import { randomNumber } from './utils'

const images = [
  'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
  'https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200',
]

export default {
  product: Factory.extend({
    title() {
      return faker.fake('{{lorem.words}}')
    },
    price() {
      return faker.fake('{{commerce.price}}')
    },
    image() {
      return images[randomNumber(10)]
    },
  }),
}
