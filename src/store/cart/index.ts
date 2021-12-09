import create from 'zustand'
import produce from 'immer'

const initialState = {
  products: [],
}

export type Product = {
  id: string
  title: string
  price: number
  image: string
  quantity?: number
}

export const useCartStore = create((set: any) => {
  const setState = fn => set(produce(fn))

  return {
    state: {
      ...initialState,
    },
    actions: {
      add(product: Product) {
        setState(({ state }) => {
          const doesntExist = !state.products.find(({ id }) => id === product.id)

          if (doesntExist) {
            if (!product.quantity) {
              product.quantity = 1
            }

            state.products.push(product)
            state.open = true
          }
        })
      },
      increase(product) {
        setState(({ state }) => {
          const localProduct = state.products.find(({ id }) => id === product.id)
          if (localProduct) {
            localProduct.quantity++
          }
        })
      },
      decrease(product) {
        setState(({ state }) => {
          const localProduct = state.products.find(({ id }) => id === product.id)
          if (localProduct && localProduct.quantity > 0) {
            localProduct.quantity--
          }
        })
      },
      remove(product: Product) {
        setState(({ state }) => {
          const exists = !!state.products.find(({ id }) => id === product.id)

          if (exists) {
            state.products = state.products.filter(({ id }) => {
              return id !== product.id
            })
          }
        })
      },
      removeAll() {
        setState(({ state }) => {
          state.products = []
        })
      },
    },
  }
})
