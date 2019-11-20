import gql from 'graphql-tag';

const BOOKS_QUERY = gql`
  query Books {
    books {
        title
        author {
          name
          id
        }
    }
  }
`;

export default BOOKS_QUERY;