/**
 * @author: lencx
 * @create_at: Jun 24, 2020
 */

import { gql } from './deps.ts';

export const gqlTypes = (gql as any)`
type Product {
  id: ID!
  name: String!
  price: Float!
  description: String
}

type ResolveType {
  success: Boolean
}

type Query {
  getProducts: [Product!]!
  searchProducts(search: String): [Product!]!
}

type Mutation {
  addProducts(name: String!, description: String!, price: Float!): ResolveType!
}
`;
