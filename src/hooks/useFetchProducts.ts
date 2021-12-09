import * as React from 'react'

export const useFetchProducts = () => {
  const [products, setProducts] = React.useState([])
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(response => setProducts(response.products))
      .catch(error => setError(error))
  }, [])

  return { products, error }
}
