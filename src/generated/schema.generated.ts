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
  /** The `Upload` scalar type represents a file upload. */
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

export const scalarsEnumsHash: ScalarsEnumsHash = {};
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
} as const;

export interface Query {
  __typename: "Query" | undefined;
  getAPIName?: Maybe<String>;
  getPageCategories: (args?: {
    filter?: Maybe<String>;
    pagination?: Maybe<String>;
    where?: Maybe<Condition>;
    _debug?: Maybe<Boolean>;
    _cache?: Maybe<Boolean>;
  }) => Maybe<PageCategories>;
  getFirstCategories: (args?: {
    filter?: Maybe<String>;
    pagination?: Maybe<String>;
    where?: Maybe<Condition>;
    _debug?: Maybe<Boolean>;
    _cache?: Maybe<Boolean>;
  }) => Maybe<Categories>;
  getPagePosts: (args?: {
    filter?: Maybe<String>;
    pagination?: Maybe<String>;
    where?: Maybe<Condition>;
    _debug?: Maybe<Boolean>;
    _cache?: Maybe<Boolean>;
  }) => Maybe<PagePosts>;
  getFirstPosts: (args?: {
    filter?: Maybe<String>;
    pagination?: Maybe<String>;
    where?: Maybe<Condition>;
    _debug?: Maybe<Boolean>;
    _cache?: Maybe<Boolean>;
  }) => Maybe<Posts>;
  getPageUsers: (args?: {
    filter?: Maybe<String>;
    pagination?: Maybe<String>;
    where?: Maybe<Condition>;
    _debug?: Maybe<Boolean>;
    _cache?: Maybe<Boolean>;
  }) => Maybe<PageUsers>;
  getFirstUsers: (args?: {
    filter?: Maybe<String>;
    pagination?: Maybe<String>;
    where?: Maybe<Condition>;
    _debug?: Maybe<Boolean>;
    _cache?: Maybe<Boolean>;
  }) => Maybe<Users>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  putItemCategories: (args: {
    _debug?: Maybe<Boolean>;
    input: InputCategories;
  }) => Maybe<Categories>;
  putItemPosts: (args: {
    _debug?: Maybe<Boolean>;
    input: InputPosts;
  }) => Maybe<Posts>;
  putItemUsers: (args: {
    _debug?: Maybe<Boolean>;
    input: InputUsers;
  }) => Maybe<Users>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
}
export type SchemaObjectTypesNames = "Query" | "Mutation" | "Subscription";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
