import { gql } from 'graphql-request';

export const createPoi = gql`
  mutation createPoiMutation(
    $name: String!
    $email: String!
    $lat: Float!
    $lng: Float!
    $website: String
    $description: String
    $address: String!
    $category: String!
    $image: Upload!
    $tagIds: [ID]
  ) {
    createPoi(
      poi: {
        name: $name
        email: $email
        lat: $lat
        lng: $lng
        website: $website
        description: $description
        address: $address
        category: $category
        image: $image
        tagIds: $tagIds
      }
    )
  }
`;

export const createTags = gql`
  mutation createTagsMutation($tags: [TagInput!]!) {
    createTags(tags: $tags) {
      id
    }
  }
`;
