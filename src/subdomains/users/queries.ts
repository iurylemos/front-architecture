import { gql } from "@apollo/client";

export const FETCH_USERS = gql`
  query getUsers {
    users {
      id
      age
      email
      firstName
      lastName
      active
    }
  }
`;

// Create User
export const CREATE_USER = gql`
  mutation createUser($input: NewUserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      age
      active
    }
  }
`;

// Update User
export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      firstName
      lastName
      email
      age
      active
    }
  }
`;

// Delete User
export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
