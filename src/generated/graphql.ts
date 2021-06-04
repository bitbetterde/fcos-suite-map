import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};



export type Mutation = {
  __typename?: 'Mutation';
  createPoi?: Maybe<Scalars['Boolean']>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
};


export type MutationCreatePoiArgs = {
  poi: PoiInput;
};


export type MutationCreateTagsArgs = {
  tags: Array<TagInput>;
};

export type Poi = {
  __typename?: 'POI';
  id: Scalars['ID'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  name: Scalars['String'];
  published: Scalars['Boolean'];
  website?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  image: Scalars['String'];
  category: Scalars['String'];
  relationStatus: Scalars['String'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PoiInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  website?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  category: Scalars['String'];
  relationStatus: Scalars['String'];
  image: Scalars['Upload'];
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  pois?: Maybe<Array<Maybe<Poi>>>;
  poi?: Maybe<Poi>;
};


export type QueryPoiArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  displayName: Scalars['String'];
  color: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type TagInput = {
  displayName: Scalars['String'];
  color: Scalars['String'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type CreatePoiMutationMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  website?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  address: Scalars['String'];
  category: Scalars['String'];
  relationStatus: Scalars['String'];
  image: Scalars['Upload'];
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>> | Maybe<Scalars['ID']>>;
}>;


export type CreatePoiMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createPoi'>
);

export type CreateTagsMutationMutationVariables = Exact<{
  tags: Array<TagInput> | TagInput;
}>;


export type CreateTagsMutationMutation = (
  { __typename?: 'Mutation' }
  & { createTags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id'>
  )>>> }
);


export const CreatePoiMutationDocument = gql`
    mutation createPoiMutation($name: String!, $email: String!, $lat: Float!, $lng: Float!, $website: String, $description: String, $address: String!, $category: String!, $relationStatus: String!, $image: Upload!, $tagIds: [ID]) {
  createPoi(
    poi: {name: $name, email: $email, lat: $lat, lng: $lng, website: $website, description: $description, address: $address, category: $category, relationStatus: $relationStatus, image: $image, tagIds: $tagIds}
  )
}
    `;
export const CreateTagsMutationDocument = gql`
    mutation createTagsMutation($tags: [TagInput!]!) {
  createTags(tags: $tags) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createPoiMutation(variables: CreatePoiMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePoiMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePoiMutationMutation>(CreatePoiMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPoiMutation');
    },
    createTagsMutation(variables: CreateTagsMutationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTagsMutationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTagsMutationMutation>(CreateTagsMutationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTagsMutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;