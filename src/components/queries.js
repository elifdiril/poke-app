import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
  query {
    pokemons(first: 24) {
      id
      name
      image
      maxHP
    }
  }
`;

export const POKEMON_DETAIL_QUERY = gql`
query pokemon($id: String){
  pokemon(id: $id){
   name
  evolutions{
    name
    image
    maxHP
  }
  }
}
`;
