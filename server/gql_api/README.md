# GraphQL API

```graphql
# api: http://localhost:8080/gql

# get products
query {
  getProducts{
    id
    name
    description
    price
  }
}

# add a new product
mutation {
  addProducts(name: "test1", description: "test desc", price: 13.5) {
    success
  }
}

# fuzzy matching product name
query {
  searchProducts(search: "te") {
    name
    description
  }
}
```
