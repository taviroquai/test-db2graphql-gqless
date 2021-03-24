/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { ScalarsEnumsHash } from "gqless";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
}

export enum CacheControlScope {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
}

export interface Condition {
  sql: Scalars["String"];
  val: Array<Scalars["String"]>;
}

export interface InputCategories {
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
}

export interface InputPosts {
  id?: Maybe<Scalars["Int"]>;
  users_id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  categories_id?: Maybe<Scalars["Int"]>;
  publish?: Maybe<Scalars["Boolean"]>;
}

export interface InputUsers {
  id?: Maybe<Scalars["Int"]>;
  username?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
}

export const scalarsEnumsHash: ScalarsEnumsHash = {
  CacheControlScope: true,
  Int: true,
  String: true,
  Boolean: true,
  Upload: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    getAPIName: { __type: "String" },
    getPageCategories: {
      __type: "PageCategories",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
    getFirstCategories: {
      __type: "Categories",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
    getPagePosts: {
      __type: "PagePosts",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
    getFirstPosts: {
      __type: "Posts",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
    getPageUsers: {
      __type: "PageUsers",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
    getFirstUsers: {
      __type: "Users",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
  },
  mutation: {
    __typename: { __type: "String!" },
    putItemCategories: {
      __type: "Categories",
      __args: { _debug: "Boolean", input: "InputCategories!" },
    },
    putItemPosts: {
      __type: "Posts",
      __args: { _debug: "Boolean", input: "InputPosts!" },
    },
    putItemUsers: {
      __type: "Users",
      __args: { _debug: "Boolean", input: "InputUsers!" },
    },
  },
  subscription: {},
  Categories: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    title: { __type: "String" },
    posts: {
      __type: "PagePosts",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
  },
  Condition: { sql: { __type: "String!" }, val: { __type: "[String!]!" } },
  InputCategories: { id: { __type: "Int" }, title: { __type: "String" } },
  InputPosts: {
    id: { __type: "Int" },
    users_id: { __type: "Int" },
    title: { __type: "String" },
    categories_id: { __type: "Int" },
    publish: { __type: "Boolean" },
  },
  InputUsers: {
    id: { __type: "Int" },
    username: { __type: "String" },
    password: { __type: "String" },
    firstname: { __type: "String" },
    lastname: { __type: "String" },
  },
  PageCategories: {
    __typename: { __type: "String!" },
    total: { __type: "Int" },
    items: { __type: "[Categories]" },
  },
  PagePosts: {
    __typename: { __type: "String!" },
    total: { __type: "Int" },
    items: { __type: "[Posts]" },
  },
  PageUsers: {
    __typename: { __type: "String!" },
    total: { __type: "Int" },
    items: { __type: "[Users]" },
  },
  Posts: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    users_id: { __type: "Int" },
    title: { __type: "String" },
    categories_id: { __type: "Int" },
    publish: { __type: "Boolean" },
    users_id_users: { __type: "Users" },
    categories_id_categories: { __type: "Categories" },
  },
  Users: {
    __typename: { __type: "String!" },
    id: { __type: "Int" },
    username: { __type: "String" },
    password: { __type: "String" },
    firstname: { __type: "String" },
    lastname: { __type: "String" },
    posts: {
      __type: "PagePosts",
      __args: {
        filter: "String",
        pagination: "String",
        where: "Condition",
        _debug: "Boolean",
        _cache: "Boolean",
      },
    },
    fullname: { __type: "String", __args: { foo: "String" } },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  getAPIName?: ScalarsEnums["String"];
  getPageCategories: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<PageCategories>;
  getFirstCategories: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<Categories>;
  getPagePosts: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<PagePosts>;
  getFirstPosts: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<Posts>;
  getPageUsers: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<PageUsers>;
  getFirstUsers: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<Users>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  putItemCategories: (args: {
    _debug?: ScalarsEnums["Boolean"];
    input: InputCategories;
  }) => Maybe<Categories>;
  putItemPosts: (args: {
    _debug?: ScalarsEnums["Boolean"];
    input: InputPosts;
  }) => Maybe<Posts>;
  putItemUsers: (args: {
    _debug?: ScalarsEnums["Boolean"];
    input: InputUsers;
  }) => Maybe<Users>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface Categories {
  __typename: "Categories" | undefined;
  id?: ScalarsEnums["Int"];
  title?: ScalarsEnums["String"];
  posts: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<PagePosts>;
}

export interface PageCategories {
  __typename: "PageCategories" | undefined;
  total?: ScalarsEnums["Int"];
  items?: Maybe<Array<Maybe<Categories>>>;
}

export interface PagePosts {
  __typename: "PagePosts" | undefined;
  total?: ScalarsEnums["Int"];
  items?: Maybe<Array<Maybe<Posts>>>;
}

export interface PageUsers {
  __typename: "PageUsers" | undefined;
  total?: ScalarsEnums["Int"];
  items?: Maybe<Array<Maybe<Users>>>;
}

export interface Posts {
  __typename: "Posts" | undefined;
  id?: ScalarsEnums["Int"];
  users_id?: ScalarsEnums["Int"];
  title?: ScalarsEnums["String"];
  categories_id?: ScalarsEnums["Int"];
  publish?: ScalarsEnums["Boolean"];
  users_id_users?: Maybe<Users>;
  categories_id_categories?: Maybe<Categories>;
}

export interface Users {
  __typename: "Users" | undefined;
  id?: ScalarsEnums["Int"];
  username?: ScalarsEnums["String"];
  password?: ScalarsEnums["String"];
  firstname?: ScalarsEnums["String"];
  lastname?: ScalarsEnums["String"];
  posts: (args?: {
    filter?: ScalarsEnums["String"];
    pagination?: ScalarsEnums["String"];
    where?: Maybe<Condition>;
    _debug?: ScalarsEnums["Boolean"];
    _cache?: ScalarsEnums["Boolean"];
  }) => Maybe<PagePosts>;
  fullname: (args?: { foo?: ScalarsEnums["String"] }) => ScalarsEnums["String"];
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  Categories: Categories;
  PageCategories: PageCategories;
  PagePosts: PagePosts;
  PageUsers: PageUsers;
  Posts: Posts;
  Users: Users;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "Categories"
  | "PageCategories"
  | "PagePosts"
  | "PageUsers"
  | "Posts"
  | "Users";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  CacheControlScope: CacheControlScope | undefined;
}
