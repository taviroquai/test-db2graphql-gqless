import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  ScalarType,
  EnumType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;
    getAPIName: t_String | null;
    getPageCategories: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_PageCategories | null
    >;
    getFirstCategories: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_Categories | null
    >;
    getPageUsers: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_PageUsers | null
    >;
    getFirstUsers: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_Users | null
    >;
    getPagePosts: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_PagePosts | null
    >;
    getFirstPosts: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_Posts | null
    >;
  },
  Extension<"Query">
>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name Condition
 * @type INPUT_OBJECT
 */
export type Condition = { sql: string; val: string[] };

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name PageCategories
 * @type OBJECT
 */
type t_PageCategories = FieldsType<
  {
    __typename: t_String<"PageCategories">;
    total: t_Int | null;
    items: (t_Categories | null)[] | null;
  },
  Extension<"PageCategories">
>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name Categories
 * @type OBJECT
 */
type t_Categories = FieldsType<
  {
    __typename: t_String<"Categories">;
    id: t_Int | null;
    title: t_String | null;
    posts: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_PagePosts | null
    >;
  },
  Extension<"Categories">
>;

/**
 * @name PagePosts
 * @type OBJECT
 */
type t_PagePosts = FieldsType<
  {
    __typename: t_String<"PagePosts">;
    total: t_Int | null;
    items: (t_Posts | null)[] | null;
  },
  Extension<"PagePosts">
>;

/**
 * @name Posts
 * @type OBJECT
 */
type t_Posts = FieldsType<
  {
    __typename: t_String<"Posts">;
    id: t_Int | null;
    users_id: t_Int | null;
    title: t_String | null;
    categories_id: t_Int | null;
    publish: t_Boolean | null;
    users_id_users: t_Users | null;
    categories_id_categories: t_Categories | null;
  },
  Extension<"Posts">
>;

/**
 * @name Users
 * @type OBJECT
 */
type t_Users = FieldsType<
  {
    __typename: t_String<"Users">;
    id: t_Int | null;
    username: t_String | null;
    password: t_String | null;
    firstname: t_String | null;
    lastname: t_String | null;
    posts: FieldsTypeArg<
      {
        filter?: string | null;
        pagination?: string | null;
        where?: Condition | null;
        _debug?: boolean | null;
        _cache?: boolean | null;
      },
      t_PagePosts | null
    >;
    fullname: FieldsTypeArg<{ foo?: string | null }, t_String | null>;
  },
  Extension<"Users">
>;

/**
 * @name PageUsers
 * @type OBJECT
 */
type t_PageUsers = FieldsType<
  {
    __typename: t_String<"PageUsers">;
    total: t_Int | null;
    items: (t_Users | null)[] | null;
  },
  Extension<"PageUsers">
>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<"Mutation">;
    putItemCategories: FieldsTypeArg<
      { _debug?: boolean | null; input: InputCategories },
      t_Categories | null
    >;
    putItemUsers: FieldsTypeArg<
      { _debug?: boolean | null; input: InputUsers },
      t_Users | null
    >;
    putItemPosts: FieldsTypeArg<
      { _debug?: boolean | null; input: InputPosts },
      t_Posts | null
    >;
  },
  Extension<"Mutation">
>;

/**
 * @name InputCategories
 * @type INPUT_OBJECT
 */
export type InputCategories = { id: number | null; title: string | null };

/**
 * @name InputUsers
 * @type INPUT_OBJECT
 */
export type InputUsers = {
  id: number | null;
  username: string | null;
  password: string | null;
  firstname: string | null;
  lastname: string | null;
};

/**
 * @name InputPosts
 * @type INPUT_OBJECT
 */
export type InputPosts = {
  id: number | null;
  users_id: number | null;
  title: string | null;
  categories_id: number | null;
  publish: boolean | null;
};

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name: t_String | null;
    description: t_String | null;
    fields: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces: t___Type[] | null;
    possibleTypes: t___Type[] | null;
    enumValues: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields: t___InputValue[] | null;
    ofType: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason: t_String | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name CacheControlScope
 * @type ENUM
 */
type t_CacheControlScope = EnumType<"PUBLIC" | "PRIVATE">;

/**
 * @name Upload
 * @type SCALAR
 */
type t_Upload<T extends any = any> = ScalarType<T, Extension<"Upload">>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name PageCategories
 * @type OBJECT
 */
export type PageCategories = TypeData<t_PageCategories>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name Categories
 * @type OBJECT
 */
export type Categories = TypeData<t_Categories>;

/**
 * @name PagePosts
 * @type OBJECT
 */
export type PagePosts = TypeData<t_PagePosts>;

/**
 * @name Posts
 * @type OBJECT
 */
export type Posts = TypeData<t_Posts>;

/**
 * @name Users
 * @type OBJECT
 */
export type Users = TypeData<t_Users>;

/**
 * @name PageUsers
 * @type OBJECT
 */
export type PageUsers = TypeData<t_PageUsers>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export type __TypeKind = TypeData<t___TypeKind>;

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export type __DirectiveLocation = TypeData<t___DirectiveLocation>;

/**
 * @name CacheControlScope
 * @type ENUM
 */
export type CacheControlScope = TypeData<t_CacheControlScope>;

/**
 * @name Upload
 * @type SCALAR
 */
export type Upload = TypeData<t_Upload>;
