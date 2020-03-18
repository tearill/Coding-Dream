const _products = [
  {
    id: 1,
    title: 'iPad4 mini',
    price: 500.01,
    inventory: 2
  }
]

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 1000)
  }
}