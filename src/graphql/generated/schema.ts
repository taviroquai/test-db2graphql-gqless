// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  ScalarNode,
  InputNode,
  InputNodeField,
  EnumNode
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get getAPIName() {
          return new FieldNode(schema.String, undefined, true);
        },
        get getPageCategories() {
          return new FieldNode(
            schema.PageCategories,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get getFirstCategories() {
          return new FieldNode(
            schema.Categories,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get getPageUsers() {
          return new FieldNode(
            schema.PageUsers,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get getFirstUsers() {
          return new FieldNode(
            schema.Users,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get getPagePosts() {
          return new FieldNode(
            schema.PagePosts,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get getFirstPosts() {
          return new FieldNode(
            schema.Posts,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get Condition() {
    return new InputNode(
      {
        get sql() {
          return new InputNodeField(schema.String, false);
        },
        get val() {
          return new InputNodeField(new ArrayNode(schema.String, false), false);
        }
      },
      { name: "Condition" }
    );
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get PageCategories() {
    return new ObjectNode(
      {
        get total() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get items() {
          return new FieldNode(
            new ArrayNode(schema.Categories, true),
            undefined,
            true
          );
        }
      },
      {
        name: "PageCategories",
        extension: ((extensions as any) || {}).PageCategories
      }
    );
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get Categories() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get title() {
          return new FieldNode(schema.String, undefined, true);
        },
        get posts() {
          return new FieldNode(
            schema.PagePosts,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        }
      },
      { name: "Categories", extension: ((extensions as any) || {}).Categories }
    );
  },
  get PagePosts() {
    return new ObjectNode(
      {
        get total() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get items() {
          return new FieldNode(
            new ArrayNode(schema.Posts, true),
            undefined,
            true
          );
        }
      },
      { name: "PagePosts", extension: ((extensions as any) || {}).PagePosts }
    );
  },
  get Posts() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get users_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get title() {
          return new FieldNode(schema.String, undefined, true);
        },
        get categories_id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get publish() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get users_id_users() {
          return new FieldNode(schema.Users, undefined, true);
        },
        get categories_id_categories() {
          return new FieldNode(schema.Categories, undefined, true);
        }
      },
      { name: "Posts", extension: ((extensions as any) || {}).Posts }
    );
  },
  get Users() {
    return new ObjectNode(
      {
        get id() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get username() {
          return new FieldNode(schema.String, undefined, true);
        },
        get password() {
          return new FieldNode(schema.String, undefined, true);
        },
        get firstname() {
          return new FieldNode(schema.String, undefined, true);
        },
        get lastname() {
          return new FieldNode(schema.String, undefined, true);
        },
        get posts() {
          return new FieldNode(
            schema.PagePosts,
            new Arguments({
              get filter() {
                return new ArgumentsField(schema.String, true);
              },
              get pagination() {
                return new ArgumentsField(schema.String, true);
              },
              get where() {
                return new ArgumentsField(schema.Condition, true);
              },
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get _cache() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get fullname() {
          return new FieldNode(
            schema.String,
            new Arguments({
              get foo() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        }
      },
      { name: "Users", extension: ((extensions as any) || {}).Users }
    );
  },
  get PageUsers() {
    return new ObjectNode(
      {
        get total() {
          return new FieldNode(schema.Int, undefined, true);
        },
        get items() {
          return new FieldNode(
            new ArrayNode(schema.Users, true),
            undefined,
            true
          );
        }
      },
      { name: "PageUsers", extension: ((extensions as any) || {}).PageUsers }
    );
  },
  get Mutation() {
    return new ObjectNode(
      {
        get putItemCategories() {
          return new FieldNode(
            schema.Categories,
            new Arguments({
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get input() {
                return new ArgumentsField(schema.InputCategories, false);
              }
            }),
            true
          );
        },
        get putItemUsers() {
          return new FieldNode(
            schema.Users,
            new Arguments({
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get input() {
                return new ArgumentsField(schema.InputUsers, false);
              }
            }),
            true
          );
        },
        get putItemPosts() {
          return new FieldNode(
            schema.Posts,
            new Arguments({
              get _debug() {
                return new ArgumentsField(schema.Boolean, true);
              },
              get input() {
                return new ArgumentsField(schema.InputPosts, false);
              }
            }),
            true
          );
        }
      },
      { name: "Mutation", extension: ((extensions as any) || {}).Mutation }
    );
  },
  get InputCategories() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get title() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "InputCategories" }
    );
  },
  get InputUsers() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get username() {
          return new InputNodeField(schema.String, true);
        },
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get firstname() {
          return new InputNodeField(schema.String, true);
        },
        get lastname() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "InputUsers" }
    );
  },
  get InputPosts() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.Int, true);
        },
        get users_id() {
          return new InputNodeField(schema.Int, true);
        },
        get title() {
          return new InputNodeField(schema.String, true);
        },
        get categories_id() {
          return new InputNodeField(schema.Int, true);
        },
        get publish() {
          return new InputNodeField(schema.Boolean, true);
        }
      },
      { name: "InputPosts" }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get CacheControlScope() {
    return new EnumNode({ name: "CacheControlScope" });
  },
  get Upload() {
    return new ScalarNode({
      name: "Upload",
      extension: ((extensions as any) || {}).Upload
    });
  }
};

lazyGetters(schema);
