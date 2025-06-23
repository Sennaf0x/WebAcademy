
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Endereco
 * 
 */
export type Endereco = $Result.DefaultSelection<Prisma.$EnderecoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model SubCategoria
 * 
 */
export type SubCategoria = $Result.DefaultSelection<Prisma.$SubCategoriaPayload>
/**
 * Model Produto
 * 
 */
export type Produto = $Result.DefaultSelection<Prisma.$ProdutoPayload>
/**
 * Model NumeroSerie
 * 
 */
export type NumeroSerie = $Result.DefaultSelection<Prisma.$NumeroSeriePayload>
/**
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>
/**
 * Model CompraProduto
 * 
 */
export type CompraProduto = $Result.DefaultSelection<Prisma.$CompraProdutoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **Endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.EnderecoDelegate<ExtArgs>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs>;

  /**
   * `prisma.subCategoria`: Exposes CRUD operations for the **SubCategoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategorias
    * const subCategorias = await prisma.subCategoria.findMany()
    * ```
    */
  get subCategoria(): Prisma.SubCategoriaDelegate<ExtArgs>;

  /**
   * `prisma.produto`: Exposes CRUD operations for the **Produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produtos
    * const produtos = await prisma.produto.findMany()
    * ```
    */
  get produto(): Prisma.ProdutoDelegate<ExtArgs>;

  /**
   * `prisma.numeroSerie`: Exposes CRUD operations for the **NumeroSerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NumeroSeries
    * const numeroSeries = await prisma.numeroSerie.findMany()
    * ```
    */
  get numeroSerie(): Prisma.NumeroSerieDelegate<ExtArgs>;

  /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs>;

  /**
   * `prisma.compraProduto`: Exposes CRUD operations for the **CompraProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompraProdutos
    * const compraProdutos = await prisma.compraProduto.findMany()
    * ```
    */
  get compraProduto(): Prisma.CompraProdutoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cliente: 'Cliente',
    Endereco: 'Endereco',
    Categoria: 'Categoria',
    SubCategoria: 'SubCategoria',
    Produto: 'Produto',
    NumeroSerie: 'NumeroSerie',
    Compra: 'Compra',
    CompraProduto: 'CompraProduto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cliente" | "endereco" | "categoria" | "subCategoria" | "produto" | "numeroSerie" | "compra" | "compraProduto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Endereco: {
        payload: Prisma.$EnderecoPayload<ExtArgs>
        fields: Prisma.EnderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findFirst: {
            args: Prisma.EnderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          findMany: {
            args: Prisma.EnderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>[]
          }
          create: {
            args: Prisma.EnderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          createMany: {
            args: Prisma.EnderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          update: {
            args: Prisma.EnderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          deleteMany: {
            args: Prisma.EnderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.EnderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      SubCategoria: {
        payload: Prisma.$SubCategoriaPayload<ExtArgs>
        fields: Prisma.SubCategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          findFirst: {
            args: Prisma.SubCategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          findMany: {
            args: Prisma.SubCategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>[]
          }
          create: {
            args: Prisma.SubCategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          createMany: {
            args: Prisma.SubCategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubCategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          update: {
            args: Prisma.SubCategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubCategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoriaPayload>
          }
          aggregate: {
            args: Prisma.SubCategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategoria>
          }
          groupBy: {
            args: Prisma.SubCategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoriaCountAggregateOutputType> | number
          }
        }
      }
      Produto: {
        payload: Prisma.$ProdutoPayload<ExtArgs>
        fields: Prisma.ProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findFirst: {
            args: Prisma.ProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          findMany: {
            args: Prisma.ProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>[]
          }
          create: {
            args: Prisma.ProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          createMany: {
            args: Prisma.ProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          update: {
            args: Prisma.ProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoPayload>
          }
          aggregate: {
            args: Prisma.ProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduto>
          }
          groupBy: {
            args: Prisma.ProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoCountAggregateOutputType> | number
          }
        }
      }
      NumeroSerie: {
        payload: Prisma.$NumeroSeriePayload<ExtArgs>
        fields: Prisma.NumeroSerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumeroSerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumeroSerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>
          }
          findFirst: {
            args: Prisma.NumeroSerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumeroSerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>
          }
          findMany: {
            args: Prisma.NumeroSerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>[]
          }
          create: {
            args: Prisma.NumeroSerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>
          }
          createMany: {
            args: Prisma.NumeroSerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NumeroSerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>
          }
          update: {
            args: Prisma.NumeroSerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>
          }
          deleteMany: {
            args: Prisma.NumeroSerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumeroSerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NumeroSerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumeroSeriePayload>
          }
          aggregate: {
            args: Prisma.NumeroSerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumeroSerie>
          }
          groupBy: {
            args: Prisma.NumeroSerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumeroSerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumeroSerieCountArgs<ExtArgs>
            result: $Utils.Optional<NumeroSerieCountAggregateOutputType> | number
          }
        }
      }
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
          }
        }
      }
      CompraProduto: {
        payload: Prisma.$CompraProdutoPayload<ExtArgs>
        fields: Prisma.CompraProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>
          }
          findFirst: {
            args: Prisma.CompraProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>
          }
          findMany: {
            args: Prisma.CompraProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>[]
          }
          create: {
            args: Prisma.CompraProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>
          }
          createMany: {
            args: Prisma.CompraProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompraProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>
          }
          update: {
            args: Prisma.CompraProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>
          }
          deleteMany: {
            args: Prisma.CompraProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompraProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraProdutoPayload>
          }
          aggregate: {
            args: Prisma.CompraProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompraProduto>
          }
          groupBy: {
            args: Prisma.CompraProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<CompraProdutoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    enderecos: number
    compras: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | ClienteCountOutputTypeCountEnderecosArgs
    compras?: boolean | ClienteCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    comprasEnvio: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comprasEnvio?: boolean | EnderecoCountOutputTypeCountComprasEnvioArgs
  }

  // Custom InputTypes
  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountComprasEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    subcategorias: number
    produtos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategorias?: boolean | CategoriaCountOutputTypeCountSubcategoriasArgs
    produtos?: boolean | CategoriaCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountSubcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriaWhereInput
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type SubCategoriaCountOutputType
   */

  export type SubCategoriaCountOutputType = {
    produtos: number
  }

  export type SubCategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | SubCategoriaCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * SubCategoriaCountOutputType without action
   */
  export type SubCategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoriaCountOutputType
     */
    select?: SubCategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoriaCountOutputType without action
   */
  export type SubCategoriaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
  }


  /**
   * Count Type ProdutoCountOutputType
   */

  export type ProdutoCountOutputType = {
    numerosSerie: number
    compraProdutos: number
  }

  export type ProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    numerosSerie?: boolean | ProdutoCountOutputTypeCountNumerosSerieArgs
    compraProdutos?: boolean | ProdutoCountOutputTypeCountCompraProdutosArgs
  }

  // Custom InputTypes
  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoCountOutputType
     */
    select?: ProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountNumerosSerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumeroSerieWhereInput
  }

  /**
   * ProdutoCountOutputType without action
   */
  export type ProdutoCountOutputTypeCountCompraProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProdutoWhereInput
  }


  /**
   * Count Type CompraCountOutputType
   */

  export type CompraCountOutputType = {
    itens: number
  }

  export type CompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | CompraCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraCountOutputType
     */
    select?: CompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompraCountOutputType without action
   */
  export type CompraCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProdutoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    cpf: string | null
    nome: string | null
    celular: string | null
    email: string | null
    data_nascimento: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    cpf: string | null
    nome: string | null
    celular: string | null
    email: string | null
    data_nascimento: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    cpf: number
    nome: number
    celular: number
    email: number
    data_nascimento: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    cpf?: true
    nome?: true
    celular?: true
    email?: true
    data_nascimento?: true
  }

  export type ClienteMaxAggregateInputType = {
    cpf?: true
    nome?: true
    celular?: true
    email?: true
    data_nascimento?: true
  }

  export type ClienteCountAggregateInputType = {
    cpf?: true
    nome?: true
    celular?: true
    email?: true
    data_nascimento?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cpf: string
    nome: string
    celular: string | null
    email: string | null
    data_nascimento: Date | null
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    celular?: boolean
    email?: boolean
    data_nascimento?: boolean
    enderecos?: boolean | Cliente$enderecosArgs<ExtArgs>
    compras?: boolean | Cliente$comprasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>


  export type ClienteSelectScalar = {
    cpf?: boolean
    nome?: boolean
    celular?: boolean
    email?: boolean
    data_nascimento?: boolean
  }

  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | Cliente$enderecosArgs<ExtArgs>
    compras?: boolean | Cliente$comprasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      enderecos: Prisma.$EnderecoPayload<ExtArgs>[]
      compras: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      nome: string
      celular: string | null
      email: string | null
      data_nascimento: Date | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends Cliente$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany"> | Null>
    compras<T extends Cliente$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */ 
  interface ClienteFieldRefs {
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly celular: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly data_nascimento: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
  }

  /**
   * Cliente.enderecos
   */
  export type Cliente$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    cursor?: EnderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Cliente.compras
   */
  export type Cliente$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    cpf_cliente: string | null
    logradouro: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    cep: string | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    cpf_cliente: string | null
    logradouro: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    cep: string | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    cpf_cliente: number
    logradouro: number
    numero: number
    bairro: number
    cidade: number
    uf: number
    cep: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    cpf_cliente?: true
    logradouro?: true
    numero?: true
    bairro?: true
    cidade?: true
    uf?: true
    cep?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    cpf_cliente?: true
    logradouro?: true
    numero?: true
    bairro?: true
    cidade?: true
    uf?: true
    cep?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    cpf_cliente?: true
    logradouro?: true
    numero?: true
    bairro?: true
    cidade?: true
    uf?: true
    cep?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endereco to aggregate.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type EnderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnderecoWhereInput
    orderBy?: EnderecoOrderByWithAggregationInput | EnderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: EnderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    cpf_cliente: string
    logradouro: string | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    uf: string | null
    cep: string | null
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends EnderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type EnderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf_cliente?: boolean
    logradouro?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    cep?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comprasEnvio?: boolean | Endereco$comprasEnvioArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>


  export type EnderecoSelectScalar = {
    id?: boolean
    cpf_cliente?: boolean
    logradouro?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    uf?: boolean
    cep?: boolean
  }

  export type EnderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    comprasEnvio?: boolean | Endereco$comprasEnvioArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EnderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endereco"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      comprasEnvio: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf_cliente: string
      logradouro: string | null
      numero: string | null
      bairro: string | null
      cidade: string | null
      uf: string | null
      cep: string | null
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type EnderecoGetPayload<S extends boolean | null | undefined | EnderecoDefaultArgs> = $Result.GetResult<Prisma.$EnderecoPayload, S>

  type EnderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnderecoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface EnderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endereco'], meta: { name: 'Endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {EnderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnderecoFindUniqueArgs>(args: SelectSubset<T, EnderecoFindUniqueArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, EnderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnderecoFindFirstArgs>(args?: SelectSubset<T, EnderecoFindFirstArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, EnderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnderecoFindManyArgs>(args?: SelectSubset<T, EnderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Endereco.
     * @param {EnderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends EnderecoCreateArgs>(args: SelectSubset<T, EnderecoCreateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Enderecos.
     * @param {EnderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnderecoCreateManyArgs>(args?: SelectSubset<T, EnderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Endereco.
     * @param {EnderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends EnderecoDeleteArgs>(args: SelectSubset<T, EnderecoDeleteArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Endereco.
     * @param {EnderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnderecoUpdateArgs>(args: SelectSubset<T, EnderecoUpdateArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Enderecos.
     * @param {EnderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnderecoDeleteManyArgs>(args?: SelectSubset<T, EnderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnderecoUpdateManyArgs>(args: SelectSubset<T, EnderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Endereco.
     * @param {EnderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends EnderecoUpsertArgs>(args: SelectSubset<T, EnderecoUpsertArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends EnderecoCountArgs>(
      args?: Subset<T, EnderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnderecoGroupByArgs['orderBy'] }
        : { orderBy?: EnderecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endereco model
   */
  readonly fields: EnderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    comprasEnvio<T extends Endereco$comprasEnvioArgs<ExtArgs> = {}>(args?: Subset<T, Endereco$comprasEnvioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Endereco model
   */ 
  interface EnderecoFieldRefs {
    readonly id: FieldRef<"Endereco", 'Int'>
    readonly cpf_cliente: FieldRef<"Endereco", 'String'>
    readonly logradouro: FieldRef<"Endereco", 'String'>
    readonly numero: FieldRef<"Endereco", 'String'>
    readonly bairro: FieldRef<"Endereco", 'String'>
    readonly cidade: FieldRef<"Endereco", 'String'>
    readonly uf: FieldRef<"Endereco", 'String'>
    readonly cep: FieldRef<"Endereco", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endereco findUnique
   */
  export type EnderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findUniqueOrThrow
   */
  export type EnderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco findFirst
   */
  export type EnderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findFirstOrThrow
   */
  export type EnderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Endereco to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco findMany
   */
  export type EnderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter, which Enderecos to fetch.
     */
    where?: EnderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enderecos to fetch.
     */
    orderBy?: EnderecoOrderByWithRelationInput | EnderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enderecos.
     */
    cursor?: EnderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * Endereco create
   */
  export type EnderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Endereco.
     */
    data: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
  }

  /**
   * Endereco createMany
   */
  export type EnderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enderecos.
     */
    data: EnderecoCreateManyInput | EnderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endereco update
   */
  export type EnderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Endereco.
     */
    data: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
    /**
     * Choose, which Endereco to update.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco updateMany
   */
  export type EnderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enderecos.
     */
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyInput>
    /**
     * Filter which Enderecos to update
     */
    where?: EnderecoWhereInput
  }

  /**
   * Endereco upsert
   */
  export type EnderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Endereco to update in case it exists.
     */
    where: EnderecoWhereUniqueInput
    /**
     * In case the Endereco found by the `where` argument doesn't exist, create a new Endereco with this data.
     */
    create: XOR<EnderecoCreateInput, EnderecoUncheckedCreateInput>
    /**
     * In case the Endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnderecoUpdateInput, EnderecoUncheckedUpdateInput>
  }

  /**
   * Endereco delete
   */
  export type EnderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
    /**
     * Filter which Endereco to delete.
     */
    where: EnderecoWhereUniqueInput
  }

  /**
   * Endereco deleteMany
   */
  export type EnderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enderecos to delete
     */
    where?: EnderecoWhereInput
  }

  /**
   * Endereco.comprasEnvio
   */
  export type Endereco$comprasEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Endereco without action
   */
  export type EnderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endereco
     */
    select?: EnderecoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnderecoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nome: string | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    subcategorias?: boolean | Categoria$subcategoriasArgs<ExtArgs>
    produtos?: boolean | Categoria$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>


  export type CategoriaSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategorias?: boolean | Categoria$subcategoriasArgs<ExtArgs>
    produtos?: boolean | Categoria$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      subcategorias: Prisma.$SubCategoriaPayload<ExtArgs>[]
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subcategorias<T extends Categoria$subcategoriasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$subcategoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findMany"> | Null>
    produtos<T extends Categoria$produtosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */ 
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nome: FieldRef<"Categoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data?: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
  }

  /**
   * Categoria.subcategorias
   */
  export type Categoria$subcategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    where?: SubCategoriaWhereInput
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    cursor?: SubCategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * Categoria.produtos
   */
  export type Categoria$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model SubCategoria
   */

  export type AggregateSubCategoria = {
    _count: SubCategoriaCountAggregateOutputType | null
    _avg: SubCategoriaAvgAggregateOutputType | null
    _sum: SubCategoriaSumAggregateOutputType | null
    _min: SubCategoriaMinAggregateOutputType | null
    _max: SubCategoriaMaxAggregateOutputType | null
  }

  export type SubCategoriaAvgAggregateOutputType = {
    id: number | null
    id_categoria: number | null
  }

  export type SubCategoriaSumAggregateOutputType = {
    id: number | null
    id_categoria: number | null
  }

  export type SubCategoriaMinAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    nome: string | null
  }

  export type SubCategoriaMaxAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    nome: string | null
  }

  export type SubCategoriaCountAggregateOutputType = {
    id: number
    id_categoria: number
    nome: number
    _all: number
  }


  export type SubCategoriaAvgAggregateInputType = {
    id?: true
    id_categoria?: true
  }

  export type SubCategoriaSumAggregateInputType = {
    id?: true
    id_categoria?: true
  }

  export type SubCategoriaMinAggregateInputType = {
    id?: true
    id_categoria?: true
    nome?: true
  }

  export type SubCategoriaMaxAggregateInputType = {
    id?: true
    id_categoria?: true
    nome?: true
  }

  export type SubCategoriaCountAggregateInputType = {
    id?: true
    id_categoria?: true
    nome?: true
    _all?: true
  }

  export type SubCategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategoria to aggregate.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategorias
    **/
    _count?: true | SubCategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoriaMaxAggregateInputType
  }

  export type GetSubCategoriaAggregateType<T extends SubCategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategoria[P]>
      : GetScalarType<T[P], AggregateSubCategoria[P]>
  }




  export type SubCategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoriaWhereInput
    orderBy?: SubCategoriaOrderByWithAggregationInput | SubCategoriaOrderByWithAggregationInput[]
    by: SubCategoriaScalarFieldEnum[] | SubCategoriaScalarFieldEnum
    having?: SubCategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoriaCountAggregateInputType | true
    _avg?: SubCategoriaAvgAggregateInputType
    _sum?: SubCategoriaSumAggregateInputType
    _min?: SubCategoriaMinAggregateInputType
    _max?: SubCategoriaMaxAggregateInputType
  }

  export type SubCategoriaGroupByOutputType = {
    id: number
    id_categoria: number
    nome: string | null
    _count: SubCategoriaCountAggregateOutputType | null
    _avg: SubCategoriaAvgAggregateOutputType | null
    _sum: SubCategoriaSumAggregateOutputType | null
    _min: SubCategoriaMinAggregateOutputType | null
    _max: SubCategoriaMaxAggregateOutputType | null
  }

  type GetSubCategoriaGroupByPayload<T extends SubCategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoriaGroupByOutputType[P]>
        }
      >
    >


  export type SubCategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_categoria?: boolean
    nome?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    produtos?: boolean | SubCategoria$produtosArgs<ExtArgs>
    _count?: boolean | SubCategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategoria"]>


  export type SubCategoriaSelectScalar = {
    id?: boolean
    id_categoria?: boolean
    nome?: boolean
  }

  export type SubCategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    produtos?: boolean | SubCategoria$produtosArgs<ExtArgs>
    _count?: boolean | SubCategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubCategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategoria"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      produtos: Prisma.$ProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_categoria: number
      nome: string | null
    }, ExtArgs["result"]["subCategoria"]>
    composites: {}
  }

  type SubCategoriaGetPayload<S extends boolean | null | undefined | SubCategoriaDefaultArgs> = $Result.GetResult<Prisma.$SubCategoriaPayload, S>

  type SubCategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubCategoriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubCategoriaCountAggregateInputType | true
    }

  export interface SubCategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategoria'], meta: { name: 'SubCategoria' } }
    /**
     * Find zero or one SubCategoria that matches the filter.
     * @param {SubCategoriaFindUniqueArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoriaFindUniqueArgs>(args: SelectSubset<T, SubCategoriaFindUniqueArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubCategoria that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubCategoriaFindUniqueOrThrowArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubCategoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaFindFirstArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoriaFindFirstArgs>(args?: SelectSubset<T, SubCategoriaFindFirstArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubCategoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaFindFirstOrThrowArgs} args - Arguments to find a SubCategoria
     * @example
     * // Get one SubCategoria
     * const subCategoria = await prisma.subCategoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubCategorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategorias
     * const subCategorias = await prisma.subCategoria.findMany()
     * 
     * // Get first 10 SubCategorias
     * const subCategorias = await prisma.subCategoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoriaWithIdOnly = await prisma.subCategoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoriaFindManyArgs>(args?: SelectSubset<T, SubCategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubCategoria.
     * @param {SubCategoriaCreateArgs} args - Arguments to create a SubCategoria.
     * @example
     * // Create one SubCategoria
     * const SubCategoria = await prisma.subCategoria.create({
     *   data: {
     *     // ... data to create a SubCategoria
     *   }
     * })
     * 
     */
    create<T extends SubCategoriaCreateArgs>(args: SelectSubset<T, SubCategoriaCreateArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubCategorias.
     * @param {SubCategoriaCreateManyArgs} args - Arguments to create many SubCategorias.
     * @example
     * // Create many SubCategorias
     * const subCategoria = await prisma.subCategoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoriaCreateManyArgs>(args?: SelectSubset<T, SubCategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubCategoria.
     * @param {SubCategoriaDeleteArgs} args - Arguments to delete one SubCategoria.
     * @example
     * // Delete one SubCategoria
     * const SubCategoria = await prisma.subCategoria.delete({
     *   where: {
     *     // ... filter to delete one SubCategoria
     *   }
     * })
     * 
     */
    delete<T extends SubCategoriaDeleteArgs>(args: SelectSubset<T, SubCategoriaDeleteArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubCategoria.
     * @param {SubCategoriaUpdateArgs} args - Arguments to update one SubCategoria.
     * @example
     * // Update one SubCategoria
     * const subCategoria = await prisma.subCategoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoriaUpdateArgs>(args: SelectSubset<T, SubCategoriaUpdateArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubCategorias.
     * @param {SubCategoriaDeleteManyArgs} args - Arguments to filter SubCategorias to delete.
     * @example
     * // Delete a few SubCategorias
     * const { count } = await prisma.subCategoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoriaDeleteManyArgs>(args?: SelectSubset<T, SubCategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategorias
     * const subCategoria = await prisma.subCategoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoriaUpdateManyArgs>(args: SelectSubset<T, SubCategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubCategoria.
     * @param {SubCategoriaUpsertArgs} args - Arguments to update or create a SubCategoria.
     * @example
     * // Update or create a SubCategoria
     * const subCategoria = await prisma.subCategoria.upsert({
     *   create: {
     *     // ... data to create a SubCategoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategoria we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoriaUpsertArgs>(args: SelectSubset<T, SubCategoriaUpsertArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubCategorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaCountArgs} args - Arguments to filter SubCategorias to count.
     * @example
     * // Count the number of SubCategorias
     * const count = await prisma.subCategoria.count({
     *   where: {
     *     // ... the filter for the SubCategorias we want to count
     *   }
     * })
    **/
    count<T extends SubCategoriaCountArgs>(
      args?: Subset<T, SubCategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoriaAggregateArgs>(args: Subset<T, SubCategoriaAggregateArgs>): Prisma.PrismaPromise<GetSubCategoriaAggregateType<T>>

    /**
     * Group by SubCategoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoriaGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategoria model
   */
  readonly fields: SubCategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    produtos<T extends SubCategoria$produtosArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoria$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategoria model
   */ 
  interface SubCategoriaFieldRefs {
    readonly id: FieldRef<"SubCategoria", 'Int'>
    readonly id_categoria: FieldRef<"SubCategoria", 'Int'>
    readonly nome: FieldRef<"SubCategoria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubCategoria findUnique
   */
  export type SubCategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria findUniqueOrThrow
   */
  export type SubCategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria findFirst
   */
  export type SubCategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategorias.
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategorias.
     */
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * SubCategoria findFirstOrThrow
   */
  export type SubCategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategoria to fetch.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategorias.
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategorias.
     */
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * SubCategoria findMany
   */
  export type SubCategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter, which SubCategorias to fetch.
     */
    where?: SubCategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategorias to fetch.
     */
    orderBy?: SubCategoriaOrderByWithRelationInput | SubCategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategorias.
     */
    cursor?: SubCategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategorias.
     */
    skip?: number
    distinct?: SubCategoriaScalarFieldEnum | SubCategoriaScalarFieldEnum[]
  }

  /**
   * SubCategoria create
   */
  export type SubCategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategoria.
     */
    data: XOR<SubCategoriaCreateInput, SubCategoriaUncheckedCreateInput>
  }

  /**
   * SubCategoria createMany
   */
  export type SubCategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategorias.
     */
    data: SubCategoriaCreateManyInput | SubCategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategoria update
   */
  export type SubCategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategoria.
     */
    data: XOR<SubCategoriaUpdateInput, SubCategoriaUncheckedUpdateInput>
    /**
     * Choose, which SubCategoria to update.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria updateMany
   */
  export type SubCategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategorias.
     */
    data: XOR<SubCategoriaUpdateManyMutationInput, SubCategoriaUncheckedUpdateManyInput>
    /**
     * Filter which SubCategorias to update
     */
    where?: SubCategoriaWhereInput
  }

  /**
   * SubCategoria upsert
   */
  export type SubCategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategoria to update in case it exists.
     */
    where: SubCategoriaWhereUniqueInput
    /**
     * In case the SubCategoria found by the `where` argument doesn't exist, create a new SubCategoria with this data.
     */
    create: XOR<SubCategoriaCreateInput, SubCategoriaUncheckedCreateInput>
    /**
     * In case the SubCategoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoriaUpdateInput, SubCategoriaUncheckedUpdateInput>
  }

  /**
   * SubCategoria delete
   */
  export type SubCategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    /**
     * Filter which SubCategoria to delete.
     */
    where: SubCategoriaWhereUniqueInput
  }

  /**
   * SubCategoria deleteMany
   */
  export type SubCategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategorias to delete
     */
    where?: SubCategoriaWhereInput
  }

  /**
   * SubCategoria.produtos
   */
  export type SubCategoria$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    cursor?: ProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * SubCategoria without action
   */
  export type SubCategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Produto
   */

  export type AggregateProduto = {
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  export type ProdutoAvgAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_subcategoria: number | null
    preco_base: Decimal | null
    quantidade: number | null
  }

  export type ProdutoSumAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_subcategoria: number | null
    preco_base: Decimal | null
    quantidade: number | null
  }

  export type ProdutoMinAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_subcategoria: number | null
    modelo: string | null
    fabricante: string | null
    preco_base: Decimal | null
    quantidade: number | null
  }

  export type ProdutoMaxAggregateOutputType = {
    id: number | null
    id_categoria: number | null
    id_subcategoria: number | null
    modelo: string | null
    fabricante: string | null
    preco_base: Decimal | null
    quantidade: number | null
  }

  export type ProdutoCountAggregateOutputType = {
    id: number
    id_categoria: number
    id_subcategoria: number
    modelo: number
    fabricante: number
    preco_base: number
    quantidade: number
    _all: number
  }


  export type ProdutoAvgAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    preco_base?: true
    quantidade?: true
  }

  export type ProdutoSumAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    preco_base?: true
    quantidade?: true
  }

  export type ProdutoMinAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    modelo?: true
    fabricante?: true
    preco_base?: true
    quantidade?: true
  }

  export type ProdutoMaxAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    modelo?: true
    fabricante?: true
    preco_base?: true
    quantidade?: true
  }

  export type ProdutoCountAggregateInputType = {
    id?: true
    id_categoria?: true
    id_subcategoria?: true
    modelo?: true
    fabricante?: true
    preco_base?: true
    quantidade?: true
    _all?: true
  }

  export type ProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produto to aggregate.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produtos
    **/
    _count?: true | ProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoMaxAggregateInputType
  }

  export type GetProdutoAggregateType<T extends ProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduto[P]>
      : GetScalarType<T[P], AggregateProduto[P]>
  }




  export type ProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoWhereInput
    orderBy?: ProdutoOrderByWithAggregationInput | ProdutoOrderByWithAggregationInput[]
    by: ProdutoScalarFieldEnum[] | ProdutoScalarFieldEnum
    having?: ProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoCountAggregateInputType | true
    _avg?: ProdutoAvgAggregateInputType
    _sum?: ProdutoSumAggregateInputType
    _min?: ProdutoMinAggregateInputType
    _max?: ProdutoMaxAggregateInputType
  }

  export type ProdutoGroupByOutputType = {
    id: number
    id_categoria: number | null
    id_subcategoria: number | null
    modelo: string | null
    fabricante: string | null
    preco_base: Decimal | null
    quantidade: number | null
    _count: ProdutoCountAggregateOutputType | null
    _avg: ProdutoAvgAggregateOutputType | null
    _sum: ProdutoSumAggregateOutputType | null
    _min: ProdutoMinAggregateOutputType | null
    _max: ProdutoMaxAggregateOutputType | null
  }

  type GetProdutoGroupByPayload<T extends ProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_categoria?: boolean
    id_subcategoria?: boolean
    modelo?: boolean
    fabricante?: boolean
    preco_base?: boolean
    quantidade?: boolean
    categoria?: boolean | Produto$categoriaArgs<ExtArgs>
    subcategoria?: boolean | Produto$subcategoriaArgs<ExtArgs>
    numerosSerie?: boolean | Produto$numerosSerieArgs<ExtArgs>
    compraProdutos?: boolean | Produto$compraProdutosArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produto"]>


  export type ProdutoSelectScalar = {
    id?: boolean
    id_categoria?: boolean
    id_subcategoria?: boolean
    modelo?: boolean
    fabricante?: boolean
    preco_base?: boolean
    quantidade?: boolean
  }

  export type ProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Produto$categoriaArgs<ExtArgs>
    subcategoria?: boolean | Produto$subcategoriaArgs<ExtArgs>
    numerosSerie?: boolean | Produto$numerosSerieArgs<ExtArgs>
    compraProdutos?: boolean | Produto$compraProdutosArgs<ExtArgs>
    _count?: boolean | ProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produto"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      subcategoria: Prisma.$SubCategoriaPayload<ExtArgs> | null
      numerosSerie: Prisma.$NumeroSeriePayload<ExtArgs>[]
      compraProdutos: Prisma.$CompraProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_categoria: number | null
      id_subcategoria: number | null
      modelo: string | null
      fabricante: string | null
      preco_base: Prisma.Decimal | null
      quantidade: number | null
    }, ExtArgs["result"]["produto"]>
    composites: {}
  }

  type ProdutoGetPayload<S extends boolean | null | undefined | ProdutoDefaultArgs> = $Result.GetResult<Prisma.$ProdutoPayload, S>

  type ProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProdutoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProdutoCountAggregateInputType | true
    }

  export interface ProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produto'], meta: { name: 'Produto' } }
    /**
     * Find zero or one Produto that matches the filter.
     * @param {ProdutoFindUniqueArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoFindUniqueArgs>(args: SelectSubset<T, ProdutoFindUniqueArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Produto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProdutoFindUniqueOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoFindFirstArgs>(args?: SelectSubset<T, ProdutoFindFirstArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindFirstOrThrowArgs} args - Arguments to find a Produto
     * @example
     * // Get one Produto
     * const produto = await prisma.produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produtos
     * const produtos = await prisma.produto.findMany()
     * 
     * // Get first 10 Produtos
     * const produtos = await prisma.produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoWithIdOnly = await prisma.produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoFindManyArgs>(args?: SelectSubset<T, ProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Produto.
     * @param {ProdutoCreateArgs} args - Arguments to create a Produto.
     * @example
     * // Create one Produto
     * const Produto = await prisma.produto.create({
     *   data: {
     *     // ... data to create a Produto
     *   }
     * })
     * 
     */
    create<T extends ProdutoCreateArgs>(args: SelectSubset<T, ProdutoCreateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Produtos.
     * @param {ProdutoCreateManyArgs} args - Arguments to create many Produtos.
     * @example
     * // Create many Produtos
     * const produto = await prisma.produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoCreateManyArgs>(args?: SelectSubset<T, ProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produto.
     * @param {ProdutoDeleteArgs} args - Arguments to delete one Produto.
     * @example
     * // Delete one Produto
     * const Produto = await prisma.produto.delete({
     *   where: {
     *     // ... filter to delete one Produto
     *   }
     * })
     * 
     */
    delete<T extends ProdutoDeleteArgs>(args: SelectSubset<T, ProdutoDeleteArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Produto.
     * @param {ProdutoUpdateArgs} args - Arguments to update one Produto.
     * @example
     * // Update one Produto
     * const produto = await prisma.produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoUpdateArgs>(args: SelectSubset<T, ProdutoUpdateArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Produtos.
     * @param {ProdutoDeleteManyArgs} args - Arguments to filter Produtos to delete.
     * @example
     * // Delete a few Produtos
     * const { count } = await prisma.produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoDeleteManyArgs>(args?: SelectSubset<T, ProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produtos
     * const produto = await prisma.produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoUpdateManyArgs>(args: SelectSubset<T, ProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produto.
     * @param {ProdutoUpsertArgs} args - Arguments to update or create a Produto.
     * @example
     * // Update or create a Produto
     * const produto = await prisma.produto.upsert({
     *   create: {
     *     // ... data to create a Produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produto we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoUpsertArgs>(args: SelectSubset<T, ProdutoUpsertArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoCountArgs} args - Arguments to filter Produtos to count.
     * @example
     * // Count the number of Produtos
     * const count = await prisma.produto.count({
     *   where: {
     *     // ... the filter for the Produtos we want to count
     *   }
     * })
    **/
    count<T extends ProdutoCountArgs>(
      args?: Subset<T, ProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdutoAggregateArgs>(args: Subset<T, ProdutoAggregateArgs>): Prisma.PrismaPromise<GetProdutoAggregateType<T>>

    /**
     * Group by Produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produto model
   */
  readonly fields: ProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends Produto$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Produto$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subcategoria<T extends Produto$subcategoriaArgs<ExtArgs> = {}>(args?: Subset<T, Produto$subcategoriaArgs<ExtArgs>>): Prisma__SubCategoriaClient<$Result.GetResult<Prisma.$SubCategoriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    numerosSerie<T extends Produto$numerosSerieArgs<ExtArgs> = {}>(args?: Subset<T, Produto$numerosSerieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "findMany"> | Null>
    compraProdutos<T extends Produto$compraProdutosArgs<ExtArgs> = {}>(args?: Subset<T, Produto$compraProdutosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produto model
   */ 
  interface ProdutoFieldRefs {
    readonly id: FieldRef<"Produto", 'Int'>
    readonly id_categoria: FieldRef<"Produto", 'Int'>
    readonly id_subcategoria: FieldRef<"Produto", 'Int'>
    readonly modelo: FieldRef<"Produto", 'String'>
    readonly fabricante: FieldRef<"Produto", 'String'>
    readonly preco_base: FieldRef<"Produto", 'Decimal'>
    readonly quantidade: FieldRef<"Produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Produto findUnique
   */
  export type ProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findUniqueOrThrow
   */
  export type ProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto findFirst
   */
  export type ProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findFirstOrThrow
   */
  export type ProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produto to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produtos.
     */
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto findMany
   */
  export type ProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter, which Produtos to fetch.
     */
    where?: ProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produtos to fetch.
     */
    orderBy?: ProdutoOrderByWithRelationInput | ProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produtos.
     */
    cursor?: ProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produtos.
     */
    skip?: number
    distinct?: ProdutoScalarFieldEnum | ProdutoScalarFieldEnum[]
  }

  /**
   * Produto create
   */
  export type ProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a Produto.
     */
    data?: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
  }

  /**
   * Produto createMany
   */
  export type ProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produtos.
     */
    data: ProdutoCreateManyInput | ProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produto update
   */
  export type ProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a Produto.
     */
    data: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
    /**
     * Choose, which Produto to update.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto updateMany
   */
  export type ProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produtos.
     */
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyInput>
    /**
     * Filter which Produtos to update
     */
    where?: ProdutoWhereInput
  }

  /**
   * Produto upsert
   */
  export type ProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the Produto to update in case it exists.
     */
    where: ProdutoWhereUniqueInput
    /**
     * In case the Produto found by the `where` argument doesn't exist, create a new Produto with this data.
     */
    create: XOR<ProdutoCreateInput, ProdutoUncheckedCreateInput>
    /**
     * In case the Produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoUpdateInput, ProdutoUncheckedUpdateInput>
  }

  /**
   * Produto delete
   */
  export type ProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
    /**
     * Filter which Produto to delete.
     */
    where: ProdutoWhereUniqueInput
  }

  /**
   * Produto deleteMany
   */
  export type ProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produtos to delete
     */
    where?: ProdutoWhereInput
  }

  /**
   * Produto.categoria
   */
  export type Produto$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Produto.subcategoria
   */
  export type Produto$subcategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoria
     */
    select?: SubCategoriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoriaInclude<ExtArgs> | null
    where?: SubCategoriaWhereInput
  }

  /**
   * Produto.numerosSerie
   */
  export type Produto$numerosSerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    where?: NumeroSerieWhereInput
    orderBy?: NumeroSerieOrderByWithRelationInput | NumeroSerieOrderByWithRelationInput[]
    cursor?: NumeroSerieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NumeroSerieScalarFieldEnum | NumeroSerieScalarFieldEnum[]
  }

  /**
   * Produto.compraProdutos
   */
  export type Produto$compraProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    where?: CompraProdutoWhereInput
    orderBy?: CompraProdutoOrderByWithRelationInput | CompraProdutoOrderByWithRelationInput[]
    cursor?: CompraProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraProdutoScalarFieldEnum | CompraProdutoScalarFieldEnum[]
  }

  /**
   * Produto without action
   */
  export type ProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produto
     */
    select?: ProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoInclude<ExtArgs> | null
  }


  /**
   * Model NumeroSerie
   */

  export type AggregateNumeroSerie = {
    _count: NumeroSerieCountAggregateOutputType | null
    _avg: NumeroSerieAvgAggregateOutputType | null
    _sum: NumeroSerieSumAggregateOutputType | null
    _min: NumeroSerieMinAggregateOutputType | null
    _max: NumeroSerieMaxAggregateOutputType | null
  }

  export type NumeroSerieAvgAggregateOutputType = {
    id_produto: number | null
  }

  export type NumeroSerieSumAggregateOutputType = {
    id_produto: number | null
  }

  export type NumeroSerieMinAggregateOutputType = {
    num_serie: string | null
    id_produto: number | null
  }

  export type NumeroSerieMaxAggregateOutputType = {
    num_serie: string | null
    id_produto: number | null
  }

  export type NumeroSerieCountAggregateOutputType = {
    num_serie: number
    id_produto: number
    _all: number
  }


  export type NumeroSerieAvgAggregateInputType = {
    id_produto?: true
  }

  export type NumeroSerieSumAggregateInputType = {
    id_produto?: true
  }

  export type NumeroSerieMinAggregateInputType = {
    num_serie?: true
    id_produto?: true
  }

  export type NumeroSerieMaxAggregateInputType = {
    num_serie?: true
    id_produto?: true
  }

  export type NumeroSerieCountAggregateInputType = {
    num_serie?: true
    id_produto?: true
    _all?: true
  }

  export type NumeroSerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumeroSerie to aggregate.
     */
    where?: NumeroSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumeroSeries to fetch.
     */
    orderBy?: NumeroSerieOrderByWithRelationInput | NumeroSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumeroSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumeroSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumeroSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NumeroSeries
    **/
    _count?: true | NumeroSerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumeroSerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumeroSerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumeroSerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumeroSerieMaxAggregateInputType
  }

  export type GetNumeroSerieAggregateType<T extends NumeroSerieAggregateArgs> = {
        [P in keyof T & keyof AggregateNumeroSerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumeroSerie[P]>
      : GetScalarType<T[P], AggregateNumeroSerie[P]>
  }




  export type NumeroSerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumeroSerieWhereInput
    orderBy?: NumeroSerieOrderByWithAggregationInput | NumeroSerieOrderByWithAggregationInput[]
    by: NumeroSerieScalarFieldEnum[] | NumeroSerieScalarFieldEnum
    having?: NumeroSerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumeroSerieCountAggregateInputType | true
    _avg?: NumeroSerieAvgAggregateInputType
    _sum?: NumeroSerieSumAggregateInputType
    _min?: NumeroSerieMinAggregateInputType
    _max?: NumeroSerieMaxAggregateInputType
  }

  export type NumeroSerieGroupByOutputType = {
    num_serie: string
    id_produto: number
    _count: NumeroSerieCountAggregateOutputType | null
    _avg: NumeroSerieAvgAggregateOutputType | null
    _sum: NumeroSerieSumAggregateOutputType | null
    _min: NumeroSerieMinAggregateOutputType | null
    _max: NumeroSerieMaxAggregateOutputType | null
  }

  type GetNumeroSerieGroupByPayload<T extends NumeroSerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumeroSerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumeroSerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumeroSerieGroupByOutputType[P]>
            : GetScalarType<T[P], NumeroSerieGroupByOutputType[P]>
        }
      >
    >


  export type NumeroSerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    num_serie?: boolean
    id_produto?: boolean
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numeroSerie"]>


  export type NumeroSerieSelectScalar = {
    num_serie?: boolean
    id_produto?: boolean
  }

  export type NumeroSerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $NumeroSeriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NumeroSerie"
    objects: {
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      num_serie: string
      id_produto: number
    }, ExtArgs["result"]["numeroSerie"]>
    composites: {}
  }

  type NumeroSerieGetPayload<S extends boolean | null | undefined | NumeroSerieDefaultArgs> = $Result.GetResult<Prisma.$NumeroSeriePayload, S>

  type NumeroSerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NumeroSerieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NumeroSerieCountAggregateInputType | true
    }

  export interface NumeroSerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NumeroSerie'], meta: { name: 'NumeroSerie' } }
    /**
     * Find zero or one NumeroSerie that matches the filter.
     * @param {NumeroSerieFindUniqueArgs} args - Arguments to find a NumeroSerie
     * @example
     * // Get one NumeroSerie
     * const numeroSerie = await prisma.numeroSerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumeroSerieFindUniqueArgs>(args: SelectSubset<T, NumeroSerieFindUniqueArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one NumeroSerie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NumeroSerieFindUniqueOrThrowArgs} args - Arguments to find a NumeroSerie
     * @example
     * // Get one NumeroSerie
     * const numeroSerie = await prisma.numeroSerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumeroSerieFindUniqueOrThrowArgs>(args: SelectSubset<T, NumeroSerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first NumeroSerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieFindFirstArgs} args - Arguments to find a NumeroSerie
     * @example
     * // Get one NumeroSerie
     * const numeroSerie = await prisma.numeroSerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumeroSerieFindFirstArgs>(args?: SelectSubset<T, NumeroSerieFindFirstArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first NumeroSerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieFindFirstOrThrowArgs} args - Arguments to find a NumeroSerie
     * @example
     * // Get one NumeroSerie
     * const numeroSerie = await prisma.numeroSerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumeroSerieFindFirstOrThrowArgs>(args?: SelectSubset<T, NumeroSerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more NumeroSeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NumeroSeries
     * const numeroSeries = await prisma.numeroSerie.findMany()
     * 
     * // Get first 10 NumeroSeries
     * const numeroSeries = await prisma.numeroSerie.findMany({ take: 10 })
     * 
     * // Only select the `num_serie`
     * const numeroSerieWithNum_serieOnly = await prisma.numeroSerie.findMany({ select: { num_serie: true } })
     * 
     */
    findMany<T extends NumeroSerieFindManyArgs>(args?: SelectSubset<T, NumeroSerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a NumeroSerie.
     * @param {NumeroSerieCreateArgs} args - Arguments to create a NumeroSerie.
     * @example
     * // Create one NumeroSerie
     * const NumeroSerie = await prisma.numeroSerie.create({
     *   data: {
     *     // ... data to create a NumeroSerie
     *   }
     * })
     * 
     */
    create<T extends NumeroSerieCreateArgs>(args: SelectSubset<T, NumeroSerieCreateArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many NumeroSeries.
     * @param {NumeroSerieCreateManyArgs} args - Arguments to create many NumeroSeries.
     * @example
     * // Create many NumeroSeries
     * const numeroSerie = await prisma.numeroSerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumeroSerieCreateManyArgs>(args?: SelectSubset<T, NumeroSerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NumeroSerie.
     * @param {NumeroSerieDeleteArgs} args - Arguments to delete one NumeroSerie.
     * @example
     * // Delete one NumeroSerie
     * const NumeroSerie = await prisma.numeroSerie.delete({
     *   where: {
     *     // ... filter to delete one NumeroSerie
     *   }
     * })
     * 
     */
    delete<T extends NumeroSerieDeleteArgs>(args: SelectSubset<T, NumeroSerieDeleteArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one NumeroSerie.
     * @param {NumeroSerieUpdateArgs} args - Arguments to update one NumeroSerie.
     * @example
     * // Update one NumeroSerie
     * const numeroSerie = await prisma.numeroSerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumeroSerieUpdateArgs>(args: SelectSubset<T, NumeroSerieUpdateArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more NumeroSeries.
     * @param {NumeroSerieDeleteManyArgs} args - Arguments to filter NumeroSeries to delete.
     * @example
     * // Delete a few NumeroSeries
     * const { count } = await prisma.numeroSerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumeroSerieDeleteManyArgs>(args?: SelectSubset<T, NumeroSerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumeroSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NumeroSeries
     * const numeroSerie = await prisma.numeroSerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumeroSerieUpdateManyArgs>(args: SelectSubset<T, NumeroSerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NumeroSerie.
     * @param {NumeroSerieUpsertArgs} args - Arguments to update or create a NumeroSerie.
     * @example
     * // Update or create a NumeroSerie
     * const numeroSerie = await prisma.numeroSerie.upsert({
     *   create: {
     *     // ... data to create a NumeroSerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NumeroSerie we want to update
     *   }
     * })
     */
    upsert<T extends NumeroSerieUpsertArgs>(args: SelectSubset<T, NumeroSerieUpsertArgs<ExtArgs>>): Prisma__NumeroSerieClient<$Result.GetResult<Prisma.$NumeroSeriePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of NumeroSeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieCountArgs} args - Arguments to filter NumeroSeries to count.
     * @example
     * // Count the number of NumeroSeries
     * const count = await prisma.numeroSerie.count({
     *   where: {
     *     // ... the filter for the NumeroSeries we want to count
     *   }
     * })
    **/
    count<T extends NumeroSerieCountArgs>(
      args?: Subset<T, NumeroSerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumeroSerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NumeroSerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NumeroSerieAggregateArgs>(args: Subset<T, NumeroSerieAggregateArgs>): Prisma.PrismaPromise<GetNumeroSerieAggregateType<T>>

    /**
     * Group by NumeroSerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumeroSerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NumeroSerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumeroSerieGroupByArgs['orderBy'] }
        : { orderBy?: NumeroSerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NumeroSerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumeroSerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NumeroSerie model
   */
  readonly fields: NumeroSerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NumeroSerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumeroSerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NumeroSerie model
   */ 
  interface NumeroSerieFieldRefs {
    readonly num_serie: FieldRef<"NumeroSerie", 'String'>
    readonly id_produto: FieldRef<"NumeroSerie", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NumeroSerie findUnique
   */
  export type NumeroSerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * Filter, which NumeroSerie to fetch.
     */
    where: NumeroSerieWhereUniqueInput
  }

  /**
   * NumeroSerie findUniqueOrThrow
   */
  export type NumeroSerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * Filter, which NumeroSerie to fetch.
     */
    where: NumeroSerieWhereUniqueInput
  }

  /**
   * NumeroSerie findFirst
   */
  export type NumeroSerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * Filter, which NumeroSerie to fetch.
     */
    where?: NumeroSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumeroSeries to fetch.
     */
    orderBy?: NumeroSerieOrderByWithRelationInput | NumeroSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumeroSeries.
     */
    cursor?: NumeroSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumeroSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumeroSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumeroSeries.
     */
    distinct?: NumeroSerieScalarFieldEnum | NumeroSerieScalarFieldEnum[]
  }

  /**
   * NumeroSerie findFirstOrThrow
   */
  export type NumeroSerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * Filter, which NumeroSerie to fetch.
     */
    where?: NumeroSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumeroSeries to fetch.
     */
    orderBy?: NumeroSerieOrderByWithRelationInput | NumeroSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumeroSeries.
     */
    cursor?: NumeroSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumeroSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumeroSeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumeroSeries.
     */
    distinct?: NumeroSerieScalarFieldEnum | NumeroSerieScalarFieldEnum[]
  }

  /**
   * NumeroSerie findMany
   */
  export type NumeroSerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * Filter, which NumeroSeries to fetch.
     */
    where?: NumeroSerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumeroSeries to fetch.
     */
    orderBy?: NumeroSerieOrderByWithRelationInput | NumeroSerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NumeroSeries.
     */
    cursor?: NumeroSerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumeroSeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumeroSeries.
     */
    skip?: number
    distinct?: NumeroSerieScalarFieldEnum | NumeroSerieScalarFieldEnum[]
  }

  /**
   * NumeroSerie create
   */
  export type NumeroSerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * The data needed to create a NumeroSerie.
     */
    data: XOR<NumeroSerieCreateInput, NumeroSerieUncheckedCreateInput>
  }

  /**
   * NumeroSerie createMany
   */
  export type NumeroSerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NumeroSeries.
     */
    data: NumeroSerieCreateManyInput | NumeroSerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NumeroSerie update
   */
  export type NumeroSerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * The data needed to update a NumeroSerie.
     */
    data: XOR<NumeroSerieUpdateInput, NumeroSerieUncheckedUpdateInput>
    /**
     * Choose, which NumeroSerie to update.
     */
    where: NumeroSerieWhereUniqueInput
  }

  /**
   * NumeroSerie updateMany
   */
  export type NumeroSerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NumeroSeries.
     */
    data: XOR<NumeroSerieUpdateManyMutationInput, NumeroSerieUncheckedUpdateManyInput>
    /**
     * Filter which NumeroSeries to update
     */
    where?: NumeroSerieWhereInput
  }

  /**
   * NumeroSerie upsert
   */
  export type NumeroSerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * The filter to search for the NumeroSerie to update in case it exists.
     */
    where: NumeroSerieWhereUniqueInput
    /**
     * In case the NumeroSerie found by the `where` argument doesn't exist, create a new NumeroSerie with this data.
     */
    create: XOR<NumeroSerieCreateInput, NumeroSerieUncheckedCreateInput>
    /**
     * In case the NumeroSerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumeroSerieUpdateInput, NumeroSerieUncheckedUpdateInput>
  }

  /**
   * NumeroSerie delete
   */
  export type NumeroSerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
    /**
     * Filter which NumeroSerie to delete.
     */
    where: NumeroSerieWhereUniqueInput
  }

  /**
   * NumeroSerie deleteMany
   */
  export type NumeroSerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumeroSeries to delete
     */
    where?: NumeroSerieWhereInput
  }

  /**
   * NumeroSerie without action
   */
  export type NumeroSerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumeroSerie
     */
    select?: NumeroSerieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumeroSerieInclude<ExtArgs> | null
  }


  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    id: number | null
    endereco_envio: number | null
    desconto: Decimal | null
    total: Decimal | null
  }

  export type CompraSumAggregateOutputType = {
    id: number | null
    endereco_envio: number | null
    desconto: Decimal | null
    total: Decimal | null
  }

  export type CompraMinAggregateOutputType = {
    id: number | null
    cpf_cliente: string | null
    endereco_envio: number | null
    data_hora: Date | null
    desconto: Decimal | null
    forma_pagamento: string | null
    total: Decimal | null
  }

  export type CompraMaxAggregateOutputType = {
    id: number | null
    cpf_cliente: string | null
    endereco_envio: number | null
    data_hora: Date | null
    desconto: Decimal | null
    forma_pagamento: string | null
    total: Decimal | null
  }

  export type CompraCountAggregateOutputType = {
    id: number
    cpf_cliente: number
    endereco_envio: number
    data_hora: number
    desconto: number
    forma_pagamento: number
    total: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    id?: true
    endereco_envio?: true
    desconto?: true
    total?: true
  }

  export type CompraSumAggregateInputType = {
    id?: true
    endereco_envio?: true
    desconto?: true
    total?: true
  }

  export type CompraMinAggregateInputType = {
    id?: true
    cpf_cliente?: true
    endereco_envio?: true
    data_hora?: true
    desconto?: true
    forma_pagamento?: true
    total?: true
  }

  export type CompraMaxAggregateInputType = {
    id?: true
    cpf_cliente?: true
    endereco_envio?: true
    data_hora?: true
    desconto?: true
    forma_pagamento?: true
    total?: true
  }

  export type CompraCountAggregateInputType = {
    id?: true
    cpf_cliente?: true
    endereco_envio?: true
    data_hora?: true
    desconto?: true
    forma_pagamento?: true
    total?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    id: number
    cpf_cliente: string
    endereco_envio: number
    data_hora: Date
    desconto: Decimal | null
    forma_pagamento: string | null
    total: Decimal | null
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cpf_cliente?: boolean
    endereco_envio?: boolean
    data_hora?: boolean
    desconto?: boolean
    forma_pagamento?: boolean
    total?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    itens?: boolean | Compra$itensArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>


  export type CompraSelectScalar = {
    id?: boolean
    cpf_cliente?: boolean
    endereco_envio?: boolean
    data_hora?: boolean
    desconto?: boolean
    forma_pagamento?: boolean
    total?: boolean
  }

  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    endereco?: boolean | EnderecoDefaultArgs<ExtArgs>
    itens?: boolean | Compra$itensArgs<ExtArgs>
    _count?: boolean | CompraCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      endereco: Prisma.$EnderecoPayload<ExtArgs>
      itens: Prisma.$CompraProdutoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cpf_cliente: string
      endereco_envio: number
      data_hora: Date
      desconto: Prisma.Decimal | null
      forma_pagamento: string | null
      total: Prisma.Decimal | null
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compraWithIdOnly = await prisma.compra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    endereco<T extends EnderecoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnderecoDefaultArgs<ExtArgs>>): Prisma__EnderecoClient<$Result.GetResult<Prisma.$EnderecoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    itens<T extends Compra$itensArgs<ExtArgs> = {}>(args?: Subset<T, Compra$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Compra model
   */ 
  interface CompraFieldRefs {
    readonly id: FieldRef<"Compra", 'Int'>
    readonly cpf_cliente: FieldRef<"Compra", 'String'>
    readonly endereco_envio: FieldRef<"Compra", 'Int'>
    readonly data_hora: FieldRef<"Compra", 'DateTime'>
    readonly desconto: FieldRef<"Compra", 'Decimal'>
    readonly forma_pagamento: FieldRef<"Compra", 'String'>
    readonly total: FieldRef<"Compra", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
  }

  /**
   * Compra.itens
   */
  export type Compra$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    where?: CompraProdutoWhereInput
    orderBy?: CompraProdutoOrderByWithRelationInput | CompraProdutoOrderByWithRelationInput[]
    cursor?: CompraProdutoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraProdutoScalarFieldEnum | CompraProdutoScalarFieldEnum[]
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
  }


  /**
   * Model CompraProduto
   */

  export type AggregateCompraProduto = {
    _count: CompraProdutoCountAggregateOutputType | null
    _avg: CompraProdutoAvgAggregateOutputType | null
    _sum: CompraProdutoSumAggregateOutputType | null
    _min: CompraProdutoMinAggregateOutputType | null
    _max: CompraProdutoMaxAggregateOutputType | null
  }

  export type CompraProdutoAvgAggregateOutputType = {
    id_compra: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type CompraProdutoSumAggregateOutputType = {
    id_compra: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type CompraProdutoMinAggregateOutputType = {
    id_compra: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type CompraProdutoMaxAggregateOutputType = {
    id_compra: number | null
    id_produto: number | null
    quantidade: number | null
    preco_unitario: Decimal | null
  }

  export type CompraProdutoCountAggregateOutputType = {
    id_compra: number
    id_produto: number
    quantidade: number
    preco_unitario: number
    _all: number
  }


  export type CompraProdutoAvgAggregateInputType = {
    id_compra?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type CompraProdutoSumAggregateInputType = {
    id_compra?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type CompraProdutoMinAggregateInputType = {
    id_compra?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type CompraProdutoMaxAggregateInputType = {
    id_compra?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
  }

  export type CompraProdutoCountAggregateInputType = {
    id_compra?: true
    id_produto?: true
    quantidade?: true
    preco_unitario?: true
    _all?: true
  }

  export type CompraProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraProduto to aggregate.
     */
    where?: CompraProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProdutos to fetch.
     */
    orderBy?: CompraProdutoOrderByWithRelationInput | CompraProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompraProdutos
    **/
    _count?: true | CompraProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraProdutoMaxAggregateInputType
  }

  export type GetCompraProdutoAggregateType<T extends CompraProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompraProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompraProduto[P]>
      : GetScalarType<T[P], AggregateCompraProduto[P]>
  }




  export type CompraProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraProdutoWhereInput
    orderBy?: CompraProdutoOrderByWithAggregationInput | CompraProdutoOrderByWithAggregationInput[]
    by: CompraProdutoScalarFieldEnum[] | CompraProdutoScalarFieldEnum
    having?: CompraProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraProdutoCountAggregateInputType | true
    _avg?: CompraProdutoAvgAggregateInputType
    _sum?: CompraProdutoSumAggregateInputType
    _min?: CompraProdutoMinAggregateInputType
    _max?: CompraProdutoMaxAggregateInputType
  }

  export type CompraProdutoGroupByOutputType = {
    id_compra: number
    id_produto: number
    quantidade: number | null
    preco_unitario: Decimal | null
    _count: CompraProdutoCountAggregateOutputType | null
    _avg: CompraProdutoAvgAggregateOutputType | null
    _sum: CompraProdutoSumAggregateOutputType | null
    _min: CompraProdutoMinAggregateOutputType | null
    _max: CompraProdutoMaxAggregateOutputType | null
  }

  type GetCompraProdutoGroupByPayload<T extends CompraProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], CompraProdutoGroupByOutputType[P]>
        }
      >
    >


  export type CompraProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_compra?: boolean
    id_produto?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compraProduto"]>


  export type CompraProdutoSelectScalar = {
    id_compra?: boolean
    id_produto?: boolean
    quantidade?: boolean
    preco_unitario?: boolean
  }

  export type CompraProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compra?: boolean | CompraDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoDefaultArgs<ExtArgs>
  }

  export type $CompraProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompraProduto"
    objects: {
      compra: Prisma.$CompraPayload<ExtArgs>
      produto: Prisma.$ProdutoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_compra: number
      id_produto: number
      quantidade: number | null
      preco_unitario: Prisma.Decimal | null
    }, ExtArgs["result"]["compraProduto"]>
    composites: {}
  }

  type CompraProdutoGetPayload<S extends boolean | null | undefined | CompraProdutoDefaultArgs> = $Result.GetResult<Prisma.$CompraProdutoPayload, S>

  type CompraProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompraProdutoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompraProdutoCountAggregateInputType | true
    }

  export interface CompraProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompraProduto'], meta: { name: 'CompraProduto' } }
    /**
     * Find zero or one CompraProduto that matches the filter.
     * @param {CompraProdutoFindUniqueArgs} args - Arguments to find a CompraProduto
     * @example
     * // Get one CompraProduto
     * const compraProduto = await prisma.compraProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraProdutoFindUniqueArgs>(args: SelectSubset<T, CompraProdutoFindUniqueArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompraProduto that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompraProdutoFindUniqueOrThrowArgs} args - Arguments to find a CompraProduto
     * @example
     * // Get one CompraProduto
     * const compraProduto = await prisma.compraProduto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompraProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoFindFirstArgs} args - Arguments to find a CompraProduto
     * @example
     * // Get one CompraProduto
     * const compraProduto = await prisma.compraProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraProdutoFindFirstArgs>(args?: SelectSubset<T, CompraProdutoFindFirstArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompraProduto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoFindFirstOrThrowArgs} args - Arguments to find a CompraProduto
     * @example
     * // Get one CompraProduto
     * const compraProduto = await prisma.compraProduto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompraProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompraProdutos
     * const compraProdutos = await prisma.compraProduto.findMany()
     * 
     * // Get first 10 CompraProdutos
     * const compraProdutos = await prisma.compraProduto.findMany({ take: 10 })
     * 
     * // Only select the `id_compra`
     * const compraProdutoWithId_compraOnly = await prisma.compraProduto.findMany({ select: { id_compra: true } })
     * 
     */
    findMany<T extends CompraProdutoFindManyArgs>(args?: SelectSubset<T, CompraProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompraProduto.
     * @param {CompraProdutoCreateArgs} args - Arguments to create a CompraProduto.
     * @example
     * // Create one CompraProduto
     * const CompraProduto = await prisma.compraProduto.create({
     *   data: {
     *     // ... data to create a CompraProduto
     *   }
     * })
     * 
     */
    create<T extends CompraProdutoCreateArgs>(args: SelectSubset<T, CompraProdutoCreateArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompraProdutos.
     * @param {CompraProdutoCreateManyArgs} args - Arguments to create many CompraProdutos.
     * @example
     * // Create many CompraProdutos
     * const compraProduto = await prisma.compraProduto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraProdutoCreateManyArgs>(args?: SelectSubset<T, CompraProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompraProduto.
     * @param {CompraProdutoDeleteArgs} args - Arguments to delete one CompraProduto.
     * @example
     * // Delete one CompraProduto
     * const CompraProduto = await prisma.compraProduto.delete({
     *   where: {
     *     // ... filter to delete one CompraProduto
     *   }
     * })
     * 
     */
    delete<T extends CompraProdutoDeleteArgs>(args: SelectSubset<T, CompraProdutoDeleteArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompraProduto.
     * @param {CompraProdutoUpdateArgs} args - Arguments to update one CompraProduto.
     * @example
     * // Update one CompraProduto
     * const compraProduto = await prisma.compraProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraProdutoUpdateArgs>(args: SelectSubset<T, CompraProdutoUpdateArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompraProdutos.
     * @param {CompraProdutoDeleteManyArgs} args - Arguments to filter CompraProdutos to delete.
     * @example
     * // Delete a few CompraProdutos
     * const { count } = await prisma.compraProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraProdutoDeleteManyArgs>(args?: SelectSubset<T, CompraProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompraProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompraProdutos
     * const compraProduto = await prisma.compraProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraProdutoUpdateManyArgs>(args: SelectSubset<T, CompraProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompraProduto.
     * @param {CompraProdutoUpsertArgs} args - Arguments to update or create a CompraProduto.
     * @example
     * // Update or create a CompraProduto
     * const compraProduto = await prisma.compraProduto.upsert({
     *   create: {
     *     // ... data to create a CompraProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompraProduto we want to update
     *   }
     * })
     */
    upsert<T extends CompraProdutoUpsertArgs>(args: SelectSubset<T, CompraProdutoUpsertArgs<ExtArgs>>): Prisma__CompraProdutoClient<$Result.GetResult<Prisma.$CompraProdutoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompraProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoCountArgs} args - Arguments to filter CompraProdutos to count.
     * @example
     * // Count the number of CompraProdutos
     * const count = await prisma.compraProduto.count({
     *   where: {
     *     // ... the filter for the CompraProdutos we want to count
     *   }
     * })
    **/
    count<T extends CompraProdutoCountArgs>(
      args?: Subset<T, CompraProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompraProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompraProdutoAggregateArgs>(args: Subset<T, CompraProdutoAggregateArgs>): Prisma.PrismaPromise<GetCompraProdutoAggregateType<T>>

    /**
     * Group by CompraProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraProdutoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompraProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraProdutoGroupByArgs['orderBy'] }
        : { orderBy?: CompraProdutoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompraProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompraProduto model
   */
  readonly fields: CompraProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompraProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compra<T extends CompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompraDefaultArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    produto<T extends ProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoDefaultArgs<ExtArgs>>): Prisma__ProdutoClient<$Result.GetResult<Prisma.$ProdutoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompraProduto model
   */ 
  interface CompraProdutoFieldRefs {
    readonly id_compra: FieldRef<"CompraProduto", 'Int'>
    readonly id_produto: FieldRef<"CompraProduto", 'Int'>
    readonly quantidade: FieldRef<"CompraProduto", 'Int'>
    readonly preco_unitario: FieldRef<"CompraProduto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CompraProduto findUnique
   */
  export type CompraProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProduto to fetch.
     */
    where: CompraProdutoWhereUniqueInput
  }

  /**
   * CompraProduto findUniqueOrThrow
   */
  export type CompraProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProduto to fetch.
     */
    where: CompraProdutoWhereUniqueInput
  }

  /**
   * CompraProduto findFirst
   */
  export type CompraProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProduto to fetch.
     */
    where?: CompraProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProdutos to fetch.
     */
    orderBy?: CompraProdutoOrderByWithRelationInput | CompraProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraProdutos.
     */
    cursor?: CompraProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraProdutos.
     */
    distinct?: CompraProdutoScalarFieldEnum | CompraProdutoScalarFieldEnum[]
  }

  /**
   * CompraProduto findFirstOrThrow
   */
  export type CompraProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProduto to fetch.
     */
    where?: CompraProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProdutos to fetch.
     */
    orderBy?: CompraProdutoOrderByWithRelationInput | CompraProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompraProdutos.
     */
    cursor?: CompraProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompraProdutos.
     */
    distinct?: CompraProdutoScalarFieldEnum | CompraProdutoScalarFieldEnum[]
  }

  /**
   * CompraProduto findMany
   */
  export type CompraProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CompraProdutos to fetch.
     */
    where?: CompraProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompraProdutos to fetch.
     */
    orderBy?: CompraProdutoOrderByWithRelationInput | CompraProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompraProdutos.
     */
    cursor?: CompraProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompraProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompraProdutos.
     */
    skip?: number
    distinct?: CompraProdutoScalarFieldEnum | CompraProdutoScalarFieldEnum[]
  }

  /**
   * CompraProduto create
   */
  export type CompraProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a CompraProduto.
     */
    data: XOR<CompraProdutoCreateInput, CompraProdutoUncheckedCreateInput>
  }

  /**
   * CompraProduto createMany
   */
  export type CompraProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompraProdutos.
     */
    data: CompraProdutoCreateManyInput | CompraProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompraProduto update
   */
  export type CompraProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a CompraProduto.
     */
    data: XOR<CompraProdutoUpdateInput, CompraProdutoUncheckedUpdateInput>
    /**
     * Choose, which CompraProduto to update.
     */
    where: CompraProdutoWhereUniqueInput
  }

  /**
   * CompraProduto updateMany
   */
  export type CompraProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompraProdutos.
     */
    data: XOR<CompraProdutoUpdateManyMutationInput, CompraProdutoUncheckedUpdateManyInput>
    /**
     * Filter which CompraProdutos to update
     */
    where?: CompraProdutoWhereInput
  }

  /**
   * CompraProduto upsert
   */
  export type CompraProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the CompraProduto to update in case it exists.
     */
    where: CompraProdutoWhereUniqueInput
    /**
     * In case the CompraProduto found by the `where` argument doesn't exist, create a new CompraProduto with this data.
     */
    create: XOR<CompraProdutoCreateInput, CompraProdutoUncheckedCreateInput>
    /**
     * In case the CompraProduto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraProdutoUpdateInput, CompraProdutoUncheckedUpdateInput>
  }

  /**
   * CompraProduto delete
   */
  export type CompraProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
    /**
     * Filter which CompraProduto to delete.
     */
    where: CompraProdutoWhereUniqueInput
  }

  /**
   * CompraProduto deleteMany
   */
  export type CompraProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompraProdutos to delete
     */
    where?: CompraProdutoWhereInput
  }

  /**
   * CompraProduto without action
   */
  export type CompraProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompraProduto
     */
    select?: CompraProdutoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraProdutoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    celular: 'celular',
    email: 'email',
    data_nascimento: 'data_nascimento'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    cpf_cliente: 'cpf_cliente',
    logradouro: 'logradouro',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    uf: 'uf',
    cep: 'cep'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const SubCategoriaScalarFieldEnum: {
    id: 'id',
    id_categoria: 'id_categoria',
    nome: 'nome'
  };

  export type SubCategoriaScalarFieldEnum = (typeof SubCategoriaScalarFieldEnum)[keyof typeof SubCategoriaScalarFieldEnum]


  export const ProdutoScalarFieldEnum: {
    id: 'id',
    id_categoria: 'id_categoria',
    id_subcategoria: 'id_subcategoria',
    modelo: 'modelo',
    fabricante: 'fabricante',
    preco_base: 'preco_base',
    quantidade: 'quantidade'
  };

  export type ProdutoScalarFieldEnum = (typeof ProdutoScalarFieldEnum)[keyof typeof ProdutoScalarFieldEnum]


  export const NumeroSerieScalarFieldEnum: {
    num_serie: 'num_serie',
    id_produto: 'id_produto'
  };

  export type NumeroSerieScalarFieldEnum = (typeof NumeroSerieScalarFieldEnum)[keyof typeof NumeroSerieScalarFieldEnum]


  export const CompraScalarFieldEnum: {
    id: 'id',
    cpf_cliente: 'cpf_cliente',
    endereco_envio: 'endereco_envio',
    data_hora: 'data_hora',
    desconto: 'desconto',
    forma_pagamento: 'forma_pagamento',
    total: 'total'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


  export const CompraProdutoScalarFieldEnum: {
    id_compra: 'id_compra',
    id_produto: 'id_produto',
    quantidade: 'quantidade',
    preco_unitario: 'preco_unitario'
  };

  export type CompraProdutoScalarFieldEnum = (typeof CompraProdutoScalarFieldEnum)[keyof typeof CompraProdutoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cpf?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    celular?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    data_nascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    enderecos?: EnderecoListRelationFilter
    compras?: CompraListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    celular?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    enderecos?: EnderecoOrderByRelationAggregateInput
    compras?: CompraOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    celular?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    data_nascimento?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    enderecos?: EnderecoListRelationFilter
    compras?: CompraListRelationFilter
  }, "cpf">

  export type ClienteOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    celular?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    data_nascimento?: SortOrderInput | SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    celular?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    data_nascimento?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
  }

  export type EnderecoWhereInput = {
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    id?: IntFilter<"Endereco"> | number
    cpf_cliente?: StringFilter<"Endereco"> | string
    logradouro?: StringNullableFilter<"Endereco"> | string | null
    numero?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringNullableFilter<"Endereco"> | string | null
    cidade?: StringNullableFilter<"Endereco"> | string | null
    uf?: StringNullableFilter<"Endereco"> | string | null
    cep?: StringNullableFilter<"Endereco"> | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    comprasEnvio?: CompraListRelationFilter
  }

  export type EnderecoOrderByWithRelationInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    logradouro?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    comprasEnvio?: CompraOrderByRelationAggregateInput
  }

  export type EnderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnderecoWhereInput | EnderecoWhereInput[]
    OR?: EnderecoWhereInput[]
    NOT?: EnderecoWhereInput | EnderecoWhereInput[]
    cpf_cliente?: StringFilter<"Endereco"> | string
    logradouro?: StringNullableFilter<"Endereco"> | string | null
    numero?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringNullableFilter<"Endereco"> | string | null
    cidade?: StringNullableFilter<"Endereco"> | string | null
    uf?: StringNullableFilter<"Endereco"> | string | null
    cep?: StringNullableFilter<"Endereco"> | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    comprasEnvio?: CompraListRelationFilter
  }, "id">

  export type EnderecoOrderByWithAggregationInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    logradouro?: SortOrderInput | SortOrder
    numero?: SortOrderInput | SortOrder
    bairro?: SortOrderInput | SortOrder
    cidade?: SortOrderInput | SortOrder
    uf?: SortOrderInput | SortOrder
    cep?: SortOrderInput | SortOrder
    _count?: EnderecoCountOrderByAggregateInput
    _avg?: EnderecoAvgOrderByAggregateInput
    _max?: EnderecoMaxOrderByAggregateInput
    _min?: EnderecoMinOrderByAggregateInput
    _sum?: EnderecoSumOrderByAggregateInput
  }

  export type EnderecoScalarWhereWithAggregatesInput = {
    AND?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    OR?: EnderecoScalarWhereWithAggregatesInput[]
    NOT?: EnderecoScalarWhereWithAggregatesInput | EnderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Endereco"> | number
    cpf_cliente?: StringWithAggregatesFilter<"Endereco"> | string
    logradouro?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    numero?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    bairro?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    cidade?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    uf?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
    cep?: StringNullableWithAggregatesFilter<"Endereco"> | string | null
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nome?: StringNullableFilter<"Categoria"> | string | null
    subcategorias?: SubCategoriaListRelationFilter
    produtos?: ProdutoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    subcategorias?: SubCategoriaOrderByRelationAggregateInput
    produtos?: ProdutoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nome?: StringNullableFilter<"Categoria"> | string | null
    subcategorias?: SubCategoriaListRelationFilter
    produtos?: ProdutoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nome?: StringNullableWithAggregatesFilter<"Categoria"> | string | null
  }

  export type SubCategoriaWhereInput = {
    AND?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    OR?: SubCategoriaWhereInput[]
    NOT?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    id?: IntFilter<"SubCategoria"> | number
    id_categoria?: IntFilter<"SubCategoria"> | number
    nome?: StringNullableFilter<"SubCategoria"> | string | null
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    produtos?: ProdutoListRelationFilter
  }

  export type SubCategoriaOrderByWithRelationInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    produtos?: ProdutoOrderByRelationAggregateInput
  }

  export type SubCategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    OR?: SubCategoriaWhereInput[]
    NOT?: SubCategoriaWhereInput | SubCategoriaWhereInput[]
    id_categoria?: IntFilter<"SubCategoria"> | number
    nome?: StringNullableFilter<"SubCategoria"> | string | null
    categoria?: XOR<CategoriaRelationFilter, CategoriaWhereInput>
    produtos?: ProdutoListRelationFilter
  }, "id">

  export type SubCategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: SubCategoriaCountOrderByAggregateInput
    _avg?: SubCategoriaAvgOrderByAggregateInput
    _max?: SubCategoriaMaxOrderByAggregateInput
    _min?: SubCategoriaMinOrderByAggregateInput
    _sum?: SubCategoriaSumOrderByAggregateInput
  }

  export type SubCategoriaScalarWhereWithAggregatesInput = {
    AND?: SubCategoriaScalarWhereWithAggregatesInput | SubCategoriaScalarWhereWithAggregatesInput[]
    OR?: SubCategoriaScalarWhereWithAggregatesInput[]
    NOT?: SubCategoriaScalarWhereWithAggregatesInput | SubCategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategoria"> | number
    id_categoria?: IntWithAggregatesFilter<"SubCategoria"> | number
    nome?: StringNullableWithAggregatesFilter<"SubCategoria"> | string | null
  }

  export type ProdutoWhereInput = {
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id?: IntFilter<"Produto"> | number
    id_categoria?: IntNullableFilter<"Produto"> | number | null
    id_subcategoria?: IntNullableFilter<"Produto"> | number | null
    modelo?: StringNullableFilter<"Produto"> | string | null
    fabricante?: StringNullableFilter<"Produto"> | string | null
    preco_base?: DecimalNullableFilter<"Produto"> | Decimal | DecimalJsLike | number | string | null
    quantidade?: IntNullableFilter<"Produto"> | number | null
    categoria?: XOR<CategoriaNullableRelationFilter, CategoriaWhereInput> | null
    subcategoria?: XOR<SubCategoriaNullableRelationFilter, SubCategoriaWhereInput> | null
    numerosSerie?: NumeroSerieListRelationFilter
    compraProdutos?: CompraProdutoListRelationFilter
  }

  export type ProdutoOrderByWithRelationInput = {
    id?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_subcategoria?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    fabricante?: SortOrderInput | SortOrder
    preco_base?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    subcategoria?: SubCategoriaOrderByWithRelationInput
    numerosSerie?: NumeroSerieOrderByRelationAggregateInput
    compraProdutos?: CompraProdutoOrderByRelationAggregateInput
  }

  export type ProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoWhereInput | ProdutoWhereInput[]
    OR?: ProdutoWhereInput[]
    NOT?: ProdutoWhereInput | ProdutoWhereInput[]
    id_categoria?: IntNullableFilter<"Produto"> | number | null
    id_subcategoria?: IntNullableFilter<"Produto"> | number | null
    modelo?: StringNullableFilter<"Produto"> | string | null
    fabricante?: StringNullableFilter<"Produto"> | string | null
    preco_base?: DecimalNullableFilter<"Produto"> | Decimal | DecimalJsLike | number | string | null
    quantidade?: IntNullableFilter<"Produto"> | number | null
    categoria?: XOR<CategoriaNullableRelationFilter, CategoriaWhereInput> | null
    subcategoria?: XOR<SubCategoriaNullableRelationFilter, SubCategoriaWhereInput> | null
    numerosSerie?: NumeroSerieListRelationFilter
    compraProdutos?: CompraProdutoListRelationFilter
  }, "id">

  export type ProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    id_categoria?: SortOrderInput | SortOrder
    id_subcategoria?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    fabricante?: SortOrderInput | SortOrder
    preco_base?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    _count?: ProdutoCountOrderByAggregateInput
    _avg?: ProdutoAvgOrderByAggregateInput
    _max?: ProdutoMaxOrderByAggregateInput
    _min?: ProdutoMinOrderByAggregateInput
    _sum?: ProdutoSumOrderByAggregateInput
  }

  export type ProdutoScalarWhereWithAggregatesInput = {
    AND?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    OR?: ProdutoScalarWhereWithAggregatesInput[]
    NOT?: ProdutoScalarWhereWithAggregatesInput | ProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produto"> | number
    id_categoria?: IntNullableWithAggregatesFilter<"Produto"> | number | null
    id_subcategoria?: IntNullableWithAggregatesFilter<"Produto"> | number | null
    modelo?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    fabricante?: StringNullableWithAggregatesFilter<"Produto"> | string | null
    preco_base?: DecimalNullableWithAggregatesFilter<"Produto"> | Decimal | DecimalJsLike | number | string | null
    quantidade?: IntNullableWithAggregatesFilter<"Produto"> | number | null
  }

  export type NumeroSerieWhereInput = {
    AND?: NumeroSerieWhereInput | NumeroSerieWhereInput[]
    OR?: NumeroSerieWhereInput[]
    NOT?: NumeroSerieWhereInput | NumeroSerieWhereInput[]
    num_serie?: StringFilter<"NumeroSerie"> | string
    id_produto?: IntFilter<"NumeroSerie"> | number
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
  }

  export type NumeroSerieOrderByWithRelationInput = {
    num_serie?: SortOrder
    id_produto?: SortOrder
    produto?: ProdutoOrderByWithRelationInput
  }

  export type NumeroSerieWhereUniqueInput = Prisma.AtLeast<{
    num_serie?: string
    AND?: NumeroSerieWhereInput | NumeroSerieWhereInput[]
    OR?: NumeroSerieWhereInput[]
    NOT?: NumeroSerieWhereInput | NumeroSerieWhereInput[]
    id_produto?: IntFilter<"NumeroSerie"> | number
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
  }, "num_serie">

  export type NumeroSerieOrderByWithAggregationInput = {
    num_serie?: SortOrder
    id_produto?: SortOrder
    _count?: NumeroSerieCountOrderByAggregateInput
    _avg?: NumeroSerieAvgOrderByAggregateInput
    _max?: NumeroSerieMaxOrderByAggregateInput
    _min?: NumeroSerieMinOrderByAggregateInput
    _sum?: NumeroSerieSumOrderByAggregateInput
  }

  export type NumeroSerieScalarWhereWithAggregatesInput = {
    AND?: NumeroSerieScalarWhereWithAggregatesInput | NumeroSerieScalarWhereWithAggregatesInput[]
    OR?: NumeroSerieScalarWhereWithAggregatesInput[]
    NOT?: NumeroSerieScalarWhereWithAggregatesInput | NumeroSerieScalarWhereWithAggregatesInput[]
    num_serie?: StringWithAggregatesFilter<"NumeroSerie"> | string
    id_produto?: IntWithAggregatesFilter<"NumeroSerie"> | number
  }

  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    id?: IntFilter<"Compra"> | number
    cpf_cliente?: StringFilter<"Compra"> | string
    endereco_envio?: IntFilter<"Compra"> | number
    data_hora?: DateTimeFilter<"Compra"> | Date | string
    desconto?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: StringNullableFilter<"Compra"> | string | null
    total?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    endereco?: XOR<EnderecoRelationFilter, EnderecoWhereInput>
    itens?: CompraProdutoListRelationFilter
  }

  export type CompraOrderByWithRelationInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    endereco_envio?: SortOrder
    data_hora?: SortOrder
    desconto?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    cliente?: ClienteOrderByWithRelationInput
    endereco?: EnderecoOrderByWithRelationInput
    itens?: CompraProdutoOrderByRelationAggregateInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    cpf_cliente?: StringFilter<"Compra"> | string
    endereco_envio?: IntFilter<"Compra"> | number
    data_hora?: DateTimeFilter<"Compra"> | Date | string
    desconto?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: StringNullableFilter<"Compra"> | string | null
    total?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<ClienteRelationFilter, ClienteWhereInput>
    endereco?: XOR<EnderecoRelationFilter, EnderecoWhereInput>
    itens?: CompraProdutoListRelationFilter
  }, "id">

  export type CompraOrderByWithAggregationInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    endereco_envio?: SortOrder
    data_hora?: SortOrder
    desconto?: SortOrderInput | SortOrder
    forma_pagamento?: SortOrderInput | SortOrder
    total?: SortOrderInput | SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Compra"> | number
    cpf_cliente?: StringWithAggregatesFilter<"Compra"> | string
    endereco_envio?: IntWithAggregatesFilter<"Compra"> | number
    data_hora?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
    desconto?: DecimalNullableWithAggregatesFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: StringNullableWithAggregatesFilter<"Compra"> | string | null
    total?: DecimalNullableWithAggregatesFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoWhereInput = {
    AND?: CompraProdutoWhereInput | CompraProdutoWhereInput[]
    OR?: CompraProdutoWhereInput[]
    NOT?: CompraProdutoWhereInput | CompraProdutoWhereInput[]
    id_compra?: IntFilter<"CompraProduto"> | number
    id_produto?: IntFilter<"CompraProduto"> | number
    quantidade?: IntNullableFilter<"CompraProduto"> | number | null
    preco_unitario?: DecimalNullableFilter<"CompraProduto"> | Decimal | DecimalJsLike | number | string | null
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
  }

  export type CompraProdutoOrderByWithRelationInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    compra?: CompraOrderByWithRelationInput
    produto?: ProdutoOrderByWithRelationInput
  }

  export type CompraProdutoWhereUniqueInput = Prisma.AtLeast<{
    id_compra_id_produto?: CompraProdutoId_compraId_produtoCompoundUniqueInput
    AND?: CompraProdutoWhereInput | CompraProdutoWhereInput[]
    OR?: CompraProdutoWhereInput[]
    NOT?: CompraProdutoWhereInput | CompraProdutoWhereInput[]
    id_compra?: IntFilter<"CompraProduto"> | number
    id_produto?: IntFilter<"CompraProduto"> | number
    quantidade?: IntNullableFilter<"CompraProduto"> | number | null
    preco_unitario?: DecimalNullableFilter<"CompraProduto"> | Decimal | DecimalJsLike | number | string | null
    compra?: XOR<CompraRelationFilter, CompraWhereInput>
    produto?: XOR<ProdutoRelationFilter, ProdutoWhereInput>
  }, "id_compra_id_produto">

  export type CompraProdutoOrderByWithAggregationInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrderInput | SortOrder
    preco_unitario?: SortOrderInput | SortOrder
    _count?: CompraProdutoCountOrderByAggregateInput
    _avg?: CompraProdutoAvgOrderByAggregateInput
    _max?: CompraProdutoMaxOrderByAggregateInput
    _min?: CompraProdutoMinOrderByAggregateInput
    _sum?: CompraProdutoSumOrderByAggregateInput
  }

  export type CompraProdutoScalarWhereWithAggregatesInput = {
    AND?: CompraProdutoScalarWhereWithAggregatesInput | CompraProdutoScalarWhereWithAggregatesInput[]
    OR?: CompraProdutoScalarWhereWithAggregatesInput[]
    NOT?: CompraProdutoScalarWhereWithAggregatesInput | CompraProdutoScalarWhereWithAggregatesInput[]
    id_compra?: IntWithAggregatesFilter<"CompraProduto"> | number
    id_produto?: IntWithAggregatesFilter<"CompraProduto"> | number
    quantidade?: IntNullableWithAggregatesFilter<"CompraProduto"> | number | null
    preco_unitario?: DecimalNullableWithAggregatesFilter<"CompraProduto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteCreateInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
    enderecos?: EnderecoCreateNestedManyWithoutClienteInput
    compras?: CompraCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutClienteInput
    compras?: CompraUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enderecos?: EnderecoUpdateManyWithoutClienteNestedInput
    compras?: CompraUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enderecos?: EnderecoUncheckedUpdateManyWithoutClienteNestedInput
    compras?: CompraUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
  }

  export type ClienteUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClienteUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EnderecoCreateInput = {
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    cliente: ClienteCreateNestedOneWithoutEnderecosInput
    comprasEnvio?: CompraCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateInput = {
    id?: number
    cpf_cliente: string
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    comprasEnvio?: CompraUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUpdateInput = {
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutEnderecosNestedInput
    comprasEnvio?: CompraUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    comprasEnvio?: CompraUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoCreateManyInput = {
    id?: number
    cpf_cliente: string
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
  }

  export type EnderecoUpdateManyMutationInput = {
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaCreateInput = {
    nome?: string | null
    subcategorias?: SubCategoriaCreateNestedManyWithoutCategoriaInput
    produtos?: ProdutoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nome?: string | null
    subcategorias?: SubCategoriaUncheckedCreateNestedManyWithoutCategoriaInput
    produtos?: ProdutoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    subcategorias?: SubCategoriaUpdateManyWithoutCategoriaNestedInput
    produtos?: ProdutoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    subcategorias?: SubCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
    produtos?: ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nome?: string | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubCategoriaCreateInput = {
    nome?: string | null
    categoria: CategoriaCreateNestedOneWithoutSubcategoriasInput
    produtos?: ProdutoCreateNestedManyWithoutSubcategoriaInput
  }

  export type SubCategoriaUncheckedCreateInput = {
    id?: number
    id_categoria: number
    nome?: string | null
    produtos?: ProdutoUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type SubCategoriaUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutSubcategoriasNestedInput
    produtos?: ProdutoUpdateManyWithoutSubcategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type SubCategoriaCreateManyInput = {
    id?: number
    id_categoria: number
    nome?: string | null
  }

  export type SubCategoriaUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubCategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoCreateInput = {
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    categoria?: CategoriaCreateNestedOneWithoutProdutosInput
    subcategoria?: SubCategoriaCreateNestedOneWithoutProdutosInput
    numerosSerie?: NumeroSerieCreateNestedManyWithoutProdutoInput
    compraProdutos?: CompraProdutoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateInput = {
    id?: number
    id_categoria?: number | null
    id_subcategoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    numerosSerie?: NumeroSerieUncheckedCreateNestedManyWithoutProdutoInput
    compraProdutos?: CompraProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUpdateInput = {
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: CategoriaUpdateOneWithoutProdutosNestedInput
    subcategoria?: SubCategoriaUpdateOneWithoutProdutosNestedInput
    numerosSerie?: NumeroSerieUpdateManyWithoutProdutoNestedInput
    compraProdutos?: CompraProdutoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    numerosSerie?: NumeroSerieUncheckedUpdateManyWithoutProdutoNestedInput
    compraProdutos?: CompraProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoCreateManyInput = {
    id?: number
    id_categoria?: number | null
    id_subcategoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
  }

  export type ProdutoUpdateManyMutationInput = {
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NumeroSerieCreateInput = {
    num_serie: string
    produto: ProdutoCreateNestedOneWithoutNumerosSerieInput
  }

  export type NumeroSerieUncheckedCreateInput = {
    num_serie: string
    id_produto: number
  }

  export type NumeroSerieUpdateInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
    produto?: ProdutoUpdateOneRequiredWithoutNumerosSerieNestedInput
  }

  export type NumeroSerieUncheckedUpdateInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type NumeroSerieCreateManyInput = {
    num_serie: string
    id_produto: number
  }

  export type NumeroSerieUpdateManyMutationInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
  }

  export type NumeroSerieUncheckedUpdateManyInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
    id_produto?: IntFieldUpdateOperationsInput | number
  }

  export type CompraCreateInput = {
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    cliente: ClienteCreateNestedOneWithoutComprasInput
    endereco: EnderecoCreateNestedOneWithoutComprasEnvioInput
    itens?: CompraProdutoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateInput = {
    id?: number
    cpf_cliente: string
    endereco_envio: number
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    itens?: CompraProdutoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraUpdateInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComprasNestedInput
    endereco?: EnderecoUpdateOneRequiredWithoutComprasEnvioNestedInput
    itens?: CompraProdutoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    endereco_envio?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itens?: CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraCreateManyInput = {
    id?: number
    cpf_cliente: string
    endereco_envio: number
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraUpdateManyMutationInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    endereco_envio?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoCreateInput = {
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    compra: CompraCreateNestedOneWithoutItensInput
    produto: ProdutoCreateNestedOneWithoutCompraProdutosInput
  }

  export type CompraProdutoUncheckedCreateInput = {
    id_compra: number
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoUpdateInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: CompraUpdateOneRequiredWithoutItensNestedInput
    produto?: ProdutoUpdateOneRequiredWithoutCompraProdutosNestedInput
  }

  export type CompraProdutoUncheckedUpdateInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoCreateManyInput = {
    id_compra: number
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoUpdateManyMutationInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoUncheckedUpdateManyInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnderecoListRelationFilter = {
    every?: EnderecoWhereInput
    some?: EnderecoWhereInput
    none?: EnderecoWhereInput
  }

  export type CompraListRelationFilter = {
    every?: CompraWhereInput
    some?: CompraWhereInput
    none?: CompraWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    celular?: SortOrder
    email?: SortOrder
    data_nascimento?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClienteRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type EnderecoCountOrderByAggregateInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
  }

  export type EnderecoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
  }

  export type EnderecoMinOrderByAggregateInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    uf?: SortOrder
    cep?: SortOrder
  }

  export type EnderecoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SubCategoriaListRelationFilter = {
    every?: SubCategoriaWhereInput
    some?: SubCategoriaWhereInput
    none?: SubCategoriaWhereInput
  }

  export type ProdutoListRelationFilter = {
    every?: ProdutoWhereInput
    some?: ProdutoWhereInput
    none?: ProdutoWhereInput
  }

  export type SubCategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type SubCategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
  }

  export type SubCategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
  }

  export type SubCategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
  }

  export type SubCategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    nome?: SortOrder
  }

  export type SubCategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriaNullableRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type SubCategoriaNullableRelationFilter = {
    is?: SubCategoriaWhereInput | null
    isNot?: SubCategoriaWhereInput | null
  }

  export type NumeroSerieListRelationFilter = {
    every?: NumeroSerieWhereInput
    some?: NumeroSerieWhereInput
    none?: NumeroSerieWhereInput
  }

  export type CompraProdutoListRelationFilter = {
    every?: CompraProdutoWhereInput
    some?: CompraProdutoWhereInput
    none?: CompraProdutoWhereInput
  }

  export type NumeroSerieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompraProdutoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    modelo?: SortOrder
    fabricante?: SortOrder
    preco_base?: SortOrder
    quantidade?: SortOrder
  }

  export type ProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    preco_base?: SortOrder
    quantidade?: SortOrder
  }

  export type ProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    modelo?: SortOrder
    fabricante?: SortOrder
    preco_base?: SortOrder
    quantidade?: SortOrder
  }

  export type ProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    modelo?: SortOrder
    fabricante?: SortOrder
    preco_base?: SortOrder
    quantidade?: SortOrder
  }

  export type ProdutoSumOrderByAggregateInput = {
    id?: SortOrder
    id_categoria?: SortOrder
    id_subcategoria?: SortOrder
    preco_base?: SortOrder
    quantidade?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProdutoRelationFilter = {
    is?: ProdutoWhereInput
    isNot?: ProdutoWhereInput
  }

  export type NumeroSerieCountOrderByAggregateInput = {
    num_serie?: SortOrder
    id_produto?: SortOrder
  }

  export type NumeroSerieAvgOrderByAggregateInput = {
    id_produto?: SortOrder
  }

  export type NumeroSerieMaxOrderByAggregateInput = {
    num_serie?: SortOrder
    id_produto?: SortOrder
  }

  export type NumeroSerieMinOrderByAggregateInput = {
    num_serie?: SortOrder
    id_produto?: SortOrder
  }

  export type NumeroSerieSumOrderByAggregateInput = {
    id_produto?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnderecoRelationFilter = {
    is?: EnderecoWhereInput
    isNot?: EnderecoWhereInput
  }

  export type CompraCountOrderByAggregateInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    endereco_envio?: SortOrder
    data_hora?: SortOrder
    desconto?: SortOrder
    forma_pagamento?: SortOrder
    total?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    id?: SortOrder
    endereco_envio?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    endereco_envio?: SortOrder
    data_hora?: SortOrder
    desconto?: SortOrder
    forma_pagamento?: SortOrder
    total?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    id?: SortOrder
    cpf_cliente?: SortOrder
    endereco_envio?: SortOrder
    data_hora?: SortOrder
    desconto?: SortOrder
    forma_pagamento?: SortOrder
    total?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    id?: SortOrder
    endereco_envio?: SortOrder
    desconto?: SortOrder
    total?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompraRelationFilter = {
    is?: CompraWhereInput
    isNot?: CompraWhereInput
  }

  export type CompraProdutoId_compraId_produtoCompoundUniqueInput = {
    id_compra: number
    id_produto: number
  }

  export type CompraProdutoCountOrderByAggregateInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type CompraProdutoAvgOrderByAggregateInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type CompraProdutoMaxOrderByAggregateInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type CompraProdutoMinOrderByAggregateInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type CompraProdutoSumOrderByAggregateInput = {
    id_compra?: SortOrder
    id_produto?: SortOrder
    quantidade?: SortOrder
    preco_unitario?: SortOrder
  }

  export type EnderecoCreateNestedManyWithoutClienteInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type CompraCreateNestedManyWithoutClienteInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type EnderecoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnderecoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutClienteInput | EnderecoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutClienteInput | EnderecoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutClienteInput | EnderecoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type CompraUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutClienteInput | CompraUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutClienteInput | CompraUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutClienteInput | CompraUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type EnderecoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput> | EnderecoCreateWithoutClienteInput[] | EnderecoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EnderecoCreateOrConnectWithoutClienteInput | EnderecoCreateOrConnectWithoutClienteInput[]
    upsert?: EnderecoUpsertWithWhereUniqueWithoutClienteInput | EnderecoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EnderecoCreateManyClienteInputEnvelope
    set?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    disconnect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    delete?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    connect?: EnderecoWhereUniqueInput | EnderecoWhereUniqueInput[]
    update?: EnderecoUpdateWithWhereUniqueWithoutClienteInput | EnderecoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EnderecoUpdateManyWithWhereWithoutClienteInput | EnderecoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutClienteInput | CompraUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutClienteInput | CompraUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutClienteInput | CompraUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEnderecosInput
    connect?: ClienteWhereUniqueInput
  }

  export type CompraCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<CompraCreateWithoutEnderecoInput, CompraUncheckedCreateWithoutEnderecoInput> | CompraCreateWithoutEnderecoInput[] | CompraUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEnderecoInput | CompraCreateOrConnectWithoutEnderecoInput[]
    createMany?: CompraCreateManyEnderecoInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<CompraCreateWithoutEnderecoInput, CompraUncheckedCreateWithoutEnderecoInput> | CompraCreateWithoutEnderecoInput[] | CompraUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEnderecoInput | CompraCreateOrConnectWithoutEnderecoInput[]
    createMany?: CompraCreateManyEnderecoInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type ClienteUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEnderecosInput
    upsert?: ClienteUpsertWithoutEnderecosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEnderecosInput, ClienteUpdateWithoutEnderecosInput>, ClienteUncheckedUpdateWithoutEnderecosInput>
  }

  export type CompraUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<CompraCreateWithoutEnderecoInput, CompraUncheckedCreateWithoutEnderecoInput> | CompraCreateWithoutEnderecoInput[] | CompraUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEnderecoInput | CompraCreateOrConnectWithoutEnderecoInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutEnderecoInput | CompraUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: CompraCreateManyEnderecoInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutEnderecoInput | CompraUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutEnderecoInput | CompraUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompraUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<CompraCreateWithoutEnderecoInput, CompraUncheckedCreateWithoutEnderecoInput> | CompraCreateWithoutEnderecoInput[] | CompraUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutEnderecoInput | CompraCreateOrConnectWithoutEnderecoInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutEnderecoInput | CompraUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: CompraCreateManyEnderecoInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutEnderecoInput | CompraUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutEnderecoInput | CompraUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type SubCategoriaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
  }

  export type ProdutoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type SubCategoriaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type SubCategoriaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    set?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    disconnect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    delete?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    update?: SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: SubCategoriaUpdateManyWithWhereWithoutCategoriaInput | SubCategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
  }

  export type ProdutoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput | ProdutoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type SubCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput> | SubCategoriaCreateWithoutCategoriaInput[] | SubCategoriaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutCategoriaInput | SubCategoriaCreateOrConnectWithoutCategoriaInput[]
    upsert?: SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: SubCategoriaCreateManyCategoriaInputEnvelope
    set?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    disconnect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    delete?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    connect?: SubCategoriaWhereUniqueInput | SubCategoriaWhereUniqueInput[]
    update?: SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: SubCategoriaUpdateManyWithWhereWithoutCategoriaInput | SubCategoriaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput> | ProdutoCreateWithoutCategoriaInput[] | ProdutoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutCategoriaInput | ProdutoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoCreateManyCategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutCategoriaInput | ProdutoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutSubcategoriasInput = {
    create?: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type ProdutoCreateNestedManyWithoutSubcategoriaInput = {
    create?: XOR<ProdutoCreateWithoutSubcategoriaInput, ProdutoUncheckedCreateWithoutSubcategoriaInput> | ProdutoCreateWithoutSubcategoriaInput[] | ProdutoUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutSubcategoriaInput | ProdutoCreateOrConnectWithoutSubcategoriaInput[]
    createMany?: ProdutoCreateManySubcategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type ProdutoUncheckedCreateNestedManyWithoutSubcategoriaInput = {
    create?: XOR<ProdutoCreateWithoutSubcategoriaInput, ProdutoUncheckedCreateWithoutSubcategoriaInput> | ProdutoCreateWithoutSubcategoriaInput[] | ProdutoUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutSubcategoriaInput | ProdutoCreateOrConnectWithoutSubcategoriaInput[]
    createMany?: ProdutoCreateManySubcategoriaInputEnvelope
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
  }

  export type CategoriaUpdateOneRequiredWithoutSubcategoriasNestedInput = {
    create?: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutSubcategoriasInput
    upsert?: CategoriaUpsertWithoutSubcategoriasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutSubcategoriasInput, CategoriaUpdateWithoutSubcategoriasInput>, CategoriaUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type ProdutoUpdateManyWithoutSubcategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutSubcategoriaInput, ProdutoUncheckedCreateWithoutSubcategoriaInput> | ProdutoCreateWithoutSubcategoriaInput[] | ProdutoUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutSubcategoriaInput | ProdutoCreateOrConnectWithoutSubcategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutSubcategoriaInput | ProdutoUpsertWithWhereUniqueWithoutSubcategoriaInput[]
    createMany?: ProdutoCreateManySubcategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutSubcategoriaInput | ProdutoUpdateWithWhereUniqueWithoutSubcategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutSubcategoriaInput | ProdutoUpdateManyWithWhereWithoutSubcategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type ProdutoUncheckedUpdateManyWithoutSubcategoriaNestedInput = {
    create?: XOR<ProdutoCreateWithoutSubcategoriaInput, ProdutoUncheckedCreateWithoutSubcategoriaInput> | ProdutoCreateWithoutSubcategoriaInput[] | ProdutoUncheckedCreateWithoutSubcategoriaInput[]
    connectOrCreate?: ProdutoCreateOrConnectWithoutSubcategoriaInput | ProdutoCreateOrConnectWithoutSubcategoriaInput[]
    upsert?: ProdutoUpsertWithWhereUniqueWithoutSubcategoriaInput | ProdutoUpsertWithWhereUniqueWithoutSubcategoriaInput[]
    createMany?: ProdutoCreateManySubcategoriaInputEnvelope
    set?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    disconnect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    delete?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    connect?: ProdutoWhereUniqueInput | ProdutoWhereUniqueInput[]
    update?: ProdutoUpdateWithWhereUniqueWithoutSubcategoriaInput | ProdutoUpdateWithWhereUniqueWithoutSubcategoriaInput[]
    updateMany?: ProdutoUpdateManyWithWhereWithoutSubcategoriaInput | ProdutoUpdateManyWithWhereWithoutSubcategoriaInput[]
    deleteMany?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProdutosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type SubCategoriaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<SubCategoriaCreateWithoutProdutosInput, SubCategoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutProdutosInput
    connect?: SubCategoriaWhereUniqueInput
  }

  export type NumeroSerieCreateNestedManyWithoutProdutoInput = {
    create?: XOR<NumeroSerieCreateWithoutProdutoInput, NumeroSerieUncheckedCreateWithoutProdutoInput> | NumeroSerieCreateWithoutProdutoInput[] | NumeroSerieUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: NumeroSerieCreateOrConnectWithoutProdutoInput | NumeroSerieCreateOrConnectWithoutProdutoInput[]
    createMany?: NumeroSerieCreateManyProdutoInputEnvelope
    connect?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
  }

  export type CompraProdutoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<CompraProdutoCreateWithoutProdutoInput, CompraProdutoUncheckedCreateWithoutProdutoInput> | CompraProdutoCreateWithoutProdutoInput[] | CompraProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutProdutoInput | CompraProdutoCreateOrConnectWithoutProdutoInput[]
    createMany?: CompraProdutoCreateManyProdutoInputEnvelope
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
  }

  export type NumeroSerieUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<NumeroSerieCreateWithoutProdutoInput, NumeroSerieUncheckedCreateWithoutProdutoInput> | NumeroSerieCreateWithoutProdutoInput[] | NumeroSerieUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: NumeroSerieCreateOrConnectWithoutProdutoInput | NumeroSerieCreateOrConnectWithoutProdutoInput[]
    createMany?: NumeroSerieCreateManyProdutoInputEnvelope
    connect?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
  }

  export type CompraProdutoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<CompraProdutoCreateWithoutProdutoInput, CompraProdutoUncheckedCreateWithoutProdutoInput> | CompraProdutoCreateWithoutProdutoInput[] | CompraProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutProdutoInput | CompraProdutoCreateOrConnectWithoutProdutoInput[]
    createMany?: CompraProdutoCreateManyProdutoInputEnvelope
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutProdutosInput
    upsert?: CategoriaUpsertWithoutProdutosInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutProdutosInput, CategoriaUpdateWithoutProdutosInput>, CategoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type SubCategoriaUpdateOneWithoutProdutosNestedInput = {
    create?: XOR<SubCategoriaCreateWithoutProdutosInput, SubCategoriaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: SubCategoriaCreateOrConnectWithoutProdutosInput
    upsert?: SubCategoriaUpsertWithoutProdutosInput
    disconnect?: SubCategoriaWhereInput | boolean
    delete?: SubCategoriaWhereInput | boolean
    connect?: SubCategoriaWhereUniqueInput
    update?: XOR<XOR<SubCategoriaUpdateToOneWithWhereWithoutProdutosInput, SubCategoriaUpdateWithoutProdutosInput>, SubCategoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type NumeroSerieUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<NumeroSerieCreateWithoutProdutoInput, NumeroSerieUncheckedCreateWithoutProdutoInput> | NumeroSerieCreateWithoutProdutoInput[] | NumeroSerieUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: NumeroSerieCreateOrConnectWithoutProdutoInput | NumeroSerieCreateOrConnectWithoutProdutoInput[]
    upsert?: NumeroSerieUpsertWithWhereUniqueWithoutProdutoInput | NumeroSerieUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: NumeroSerieCreateManyProdutoInputEnvelope
    set?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    disconnect?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    delete?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    connect?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    update?: NumeroSerieUpdateWithWhereUniqueWithoutProdutoInput | NumeroSerieUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: NumeroSerieUpdateManyWithWhereWithoutProdutoInput | NumeroSerieUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: NumeroSerieScalarWhereInput | NumeroSerieScalarWhereInput[]
  }

  export type CompraProdutoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<CompraProdutoCreateWithoutProdutoInput, CompraProdutoUncheckedCreateWithoutProdutoInput> | CompraProdutoCreateWithoutProdutoInput[] | CompraProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutProdutoInput | CompraProdutoCreateOrConnectWithoutProdutoInput[]
    upsert?: CompraProdutoUpsertWithWhereUniqueWithoutProdutoInput | CompraProdutoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: CompraProdutoCreateManyProdutoInputEnvelope
    set?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    disconnect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    delete?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    update?: CompraProdutoUpdateWithWhereUniqueWithoutProdutoInput | CompraProdutoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: CompraProdutoUpdateManyWithWhereWithoutProdutoInput | CompraProdutoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: CompraProdutoScalarWhereInput | CompraProdutoScalarWhereInput[]
  }

  export type NumeroSerieUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<NumeroSerieCreateWithoutProdutoInput, NumeroSerieUncheckedCreateWithoutProdutoInput> | NumeroSerieCreateWithoutProdutoInput[] | NumeroSerieUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: NumeroSerieCreateOrConnectWithoutProdutoInput | NumeroSerieCreateOrConnectWithoutProdutoInput[]
    upsert?: NumeroSerieUpsertWithWhereUniqueWithoutProdutoInput | NumeroSerieUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: NumeroSerieCreateManyProdutoInputEnvelope
    set?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    disconnect?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    delete?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    connect?: NumeroSerieWhereUniqueInput | NumeroSerieWhereUniqueInput[]
    update?: NumeroSerieUpdateWithWhereUniqueWithoutProdutoInput | NumeroSerieUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: NumeroSerieUpdateManyWithWhereWithoutProdutoInput | NumeroSerieUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: NumeroSerieScalarWhereInput | NumeroSerieScalarWhereInput[]
  }

  export type CompraProdutoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<CompraProdutoCreateWithoutProdutoInput, CompraProdutoUncheckedCreateWithoutProdutoInput> | CompraProdutoCreateWithoutProdutoInput[] | CompraProdutoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutProdutoInput | CompraProdutoCreateOrConnectWithoutProdutoInput[]
    upsert?: CompraProdutoUpsertWithWhereUniqueWithoutProdutoInput | CompraProdutoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: CompraProdutoCreateManyProdutoInputEnvelope
    set?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    disconnect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    delete?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    update?: CompraProdutoUpdateWithWhereUniqueWithoutProdutoInput | CompraProdutoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: CompraProdutoUpdateManyWithWhereWithoutProdutoInput | CompraProdutoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: CompraProdutoScalarWhereInput | CompraProdutoScalarWhereInput[]
  }

  export type ProdutoCreateNestedOneWithoutNumerosSerieInput = {
    create?: XOR<ProdutoCreateWithoutNumerosSerieInput, ProdutoUncheckedCreateWithoutNumerosSerieInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutNumerosSerieInput
    connect?: ProdutoWhereUniqueInput
  }

  export type ProdutoUpdateOneRequiredWithoutNumerosSerieNestedInput = {
    create?: XOR<ProdutoCreateWithoutNumerosSerieInput, ProdutoUncheckedCreateWithoutNumerosSerieInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutNumerosSerieInput
    upsert?: ProdutoUpsertWithoutNumerosSerieInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutNumerosSerieInput, ProdutoUpdateWithoutNumerosSerieInput>, ProdutoUncheckedUpdateWithoutNumerosSerieInput>
  }

  export type ClienteCreateNestedOneWithoutComprasInput = {
    create?: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutComprasInput
    connect?: ClienteWhereUniqueInput
  }

  export type EnderecoCreateNestedOneWithoutComprasEnvioInput = {
    create?: XOR<EnderecoCreateWithoutComprasEnvioInput, EnderecoUncheckedCreateWithoutComprasEnvioInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutComprasEnvioInput
    connect?: EnderecoWhereUniqueInput
  }

  export type CompraProdutoCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraProdutoCreateWithoutCompraInput, CompraProdutoUncheckedCreateWithoutCompraInput> | CompraProdutoCreateWithoutCompraInput[] | CompraProdutoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutCompraInput | CompraProdutoCreateOrConnectWithoutCompraInput[]
    createMany?: CompraProdutoCreateManyCompraInputEnvelope
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
  }

  export type CompraProdutoUncheckedCreateNestedManyWithoutCompraInput = {
    create?: XOR<CompraProdutoCreateWithoutCompraInput, CompraProdutoUncheckedCreateWithoutCompraInput> | CompraProdutoCreateWithoutCompraInput[] | CompraProdutoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutCompraInput | CompraProdutoCreateOrConnectWithoutCompraInput[]
    createMany?: CompraProdutoCreateManyCompraInputEnvelope
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutComprasInput
    upsert?: ClienteUpsertWithoutComprasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutComprasInput, ClienteUpdateWithoutComprasInput>, ClienteUncheckedUpdateWithoutComprasInput>
  }

  export type EnderecoUpdateOneRequiredWithoutComprasEnvioNestedInput = {
    create?: XOR<EnderecoCreateWithoutComprasEnvioInput, EnderecoUncheckedCreateWithoutComprasEnvioInput>
    connectOrCreate?: EnderecoCreateOrConnectWithoutComprasEnvioInput
    upsert?: EnderecoUpsertWithoutComprasEnvioInput
    connect?: EnderecoWhereUniqueInput
    update?: XOR<XOR<EnderecoUpdateToOneWithWhereWithoutComprasEnvioInput, EnderecoUpdateWithoutComprasEnvioInput>, EnderecoUncheckedUpdateWithoutComprasEnvioInput>
  }

  export type CompraProdutoUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraProdutoCreateWithoutCompraInput, CompraProdutoUncheckedCreateWithoutCompraInput> | CompraProdutoCreateWithoutCompraInput[] | CompraProdutoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutCompraInput | CompraProdutoCreateOrConnectWithoutCompraInput[]
    upsert?: CompraProdutoUpsertWithWhereUniqueWithoutCompraInput | CompraProdutoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraProdutoCreateManyCompraInputEnvelope
    set?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    disconnect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    delete?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    update?: CompraProdutoUpdateWithWhereUniqueWithoutCompraInput | CompraProdutoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraProdutoUpdateManyWithWhereWithoutCompraInput | CompraProdutoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraProdutoScalarWhereInput | CompraProdutoScalarWhereInput[]
  }

  export type CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput = {
    create?: XOR<CompraProdutoCreateWithoutCompraInput, CompraProdutoUncheckedCreateWithoutCompraInput> | CompraProdutoCreateWithoutCompraInput[] | CompraProdutoUncheckedCreateWithoutCompraInput[]
    connectOrCreate?: CompraProdutoCreateOrConnectWithoutCompraInput | CompraProdutoCreateOrConnectWithoutCompraInput[]
    upsert?: CompraProdutoUpsertWithWhereUniqueWithoutCompraInput | CompraProdutoUpsertWithWhereUniqueWithoutCompraInput[]
    createMany?: CompraProdutoCreateManyCompraInputEnvelope
    set?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    disconnect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    delete?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    connect?: CompraProdutoWhereUniqueInput | CompraProdutoWhereUniqueInput[]
    update?: CompraProdutoUpdateWithWhereUniqueWithoutCompraInput | CompraProdutoUpdateWithWhereUniqueWithoutCompraInput[]
    updateMany?: CompraProdutoUpdateManyWithWhereWithoutCompraInput | CompraProdutoUpdateManyWithWhereWithoutCompraInput[]
    deleteMany?: CompraProdutoScalarWhereInput | CompraProdutoScalarWhereInput[]
  }

  export type CompraCreateNestedOneWithoutItensInput = {
    create?: XOR<CompraCreateWithoutItensInput, CompraUncheckedCreateWithoutItensInput>
    connectOrCreate?: CompraCreateOrConnectWithoutItensInput
    connect?: CompraWhereUniqueInput
  }

  export type ProdutoCreateNestedOneWithoutCompraProdutosInput = {
    create?: XOR<ProdutoCreateWithoutCompraProdutosInput, ProdutoUncheckedCreateWithoutCompraProdutosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutCompraProdutosInput
    connect?: ProdutoWhereUniqueInput
  }

  export type CompraUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<CompraCreateWithoutItensInput, CompraUncheckedCreateWithoutItensInput>
    connectOrCreate?: CompraCreateOrConnectWithoutItensInput
    upsert?: CompraUpsertWithoutItensInput
    connect?: CompraWhereUniqueInput
    update?: XOR<XOR<CompraUpdateToOneWithWhereWithoutItensInput, CompraUpdateWithoutItensInput>, CompraUncheckedUpdateWithoutItensInput>
  }

  export type ProdutoUpdateOneRequiredWithoutCompraProdutosNestedInput = {
    create?: XOR<ProdutoCreateWithoutCompraProdutosInput, ProdutoUncheckedCreateWithoutCompraProdutosInput>
    connectOrCreate?: ProdutoCreateOrConnectWithoutCompraProdutosInput
    upsert?: ProdutoUpsertWithoutCompraProdutosInput
    connect?: ProdutoWhereUniqueInput
    update?: XOR<XOR<ProdutoUpdateToOneWithWhereWithoutCompraProdutosInput, ProdutoUpdateWithoutCompraProdutosInput>, ProdutoUncheckedUpdateWithoutCompraProdutosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnderecoCreateWithoutClienteInput = {
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    comprasEnvio?: CompraCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoUncheckedCreateWithoutClienteInput = {
    id?: number
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    comprasEnvio?: CompraUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type EnderecoCreateOrConnectWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
  }

  export type EnderecoCreateManyClienteInputEnvelope = {
    data: EnderecoCreateManyClienteInput | EnderecoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type CompraCreateWithoutClienteInput = {
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    endereco: EnderecoCreateNestedOneWithoutComprasEnvioInput
    itens?: CompraProdutoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutClienteInput = {
    id?: number
    endereco_envio: number
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    itens?: CompraProdutoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutClienteInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput>
  }

  export type CompraCreateManyClienteInputEnvelope = {
    data: CompraCreateManyClienteInput | CompraCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EnderecoUpsertWithWhereUniqueWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    update: XOR<EnderecoUpdateWithoutClienteInput, EnderecoUncheckedUpdateWithoutClienteInput>
    create: XOR<EnderecoCreateWithoutClienteInput, EnderecoUncheckedCreateWithoutClienteInput>
  }

  export type EnderecoUpdateWithWhereUniqueWithoutClienteInput = {
    where: EnderecoWhereUniqueInput
    data: XOR<EnderecoUpdateWithoutClienteInput, EnderecoUncheckedUpdateWithoutClienteInput>
  }

  export type EnderecoUpdateManyWithWhereWithoutClienteInput = {
    where: EnderecoScalarWhereInput
    data: XOR<EnderecoUpdateManyMutationInput, EnderecoUncheckedUpdateManyWithoutClienteInput>
  }

  export type EnderecoScalarWhereInput = {
    AND?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    OR?: EnderecoScalarWhereInput[]
    NOT?: EnderecoScalarWhereInput | EnderecoScalarWhereInput[]
    id?: IntFilter<"Endereco"> | number
    cpf_cliente?: StringFilter<"Endereco"> | string
    logradouro?: StringNullableFilter<"Endereco"> | string | null
    numero?: StringNullableFilter<"Endereco"> | string | null
    bairro?: StringNullableFilter<"Endereco"> | string | null
    cidade?: StringNullableFilter<"Endereco"> | string | null
    uf?: StringNullableFilter<"Endereco"> | string | null
    cep?: StringNullableFilter<"Endereco"> | string | null
  }

  export type CompraUpsertWithWhereUniqueWithoutClienteInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutClienteInput, CompraUncheckedUpdateWithoutClienteInput>
    create: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutClienteInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutClienteInput, CompraUncheckedUpdateWithoutClienteInput>
  }

  export type CompraUpdateManyWithWhereWithoutClienteInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutClienteInput>
  }

  export type CompraScalarWhereInput = {
    AND?: CompraScalarWhereInput | CompraScalarWhereInput[]
    OR?: CompraScalarWhereInput[]
    NOT?: CompraScalarWhereInput | CompraScalarWhereInput[]
    id?: IntFilter<"Compra"> | number
    cpf_cliente?: StringFilter<"Compra"> | string
    endereco_envio?: IntFilter<"Compra"> | number
    data_hora?: DateTimeFilter<"Compra"> | Date | string
    desconto?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: StringNullableFilter<"Compra"> | string | null
    total?: DecimalNullableFilter<"Compra"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClienteCreateWithoutEnderecosInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
    compras?: CompraCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutEnderecosInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
    compras?: CompraUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutEnderecosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
  }

  export type CompraCreateWithoutEnderecoInput = {
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    cliente: ClienteCreateNestedOneWithoutComprasInput
    itens?: CompraProdutoCreateNestedManyWithoutCompraInput
  }

  export type CompraUncheckedCreateWithoutEnderecoInput = {
    id?: number
    cpf_cliente: string
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    itens?: CompraProdutoUncheckedCreateNestedManyWithoutCompraInput
  }

  export type CompraCreateOrConnectWithoutEnderecoInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutEnderecoInput, CompraUncheckedCreateWithoutEnderecoInput>
  }

  export type CompraCreateManyEnderecoInputEnvelope = {
    data: CompraCreateManyEnderecoInput | CompraCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutEnderecosInput = {
    update: XOR<ClienteUpdateWithoutEnderecosInput, ClienteUncheckedUpdateWithoutEnderecosInput>
    create: XOR<ClienteCreateWithoutEnderecosInput, ClienteUncheckedCreateWithoutEnderecosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEnderecosInput, ClienteUncheckedUpdateWithoutEnderecosInput>
  }

  export type ClienteUpdateWithoutEnderecosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compras?: CompraUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutEnderecosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    compras?: CompraUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type CompraUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutEnderecoInput, CompraUncheckedUpdateWithoutEnderecoInput>
    create: XOR<CompraCreateWithoutEnderecoInput, CompraUncheckedCreateWithoutEnderecoInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutEnderecoInput, CompraUncheckedUpdateWithoutEnderecoInput>
  }

  export type CompraUpdateManyWithWhereWithoutEnderecoInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type SubCategoriaCreateWithoutCategoriaInput = {
    nome?: string | null
    produtos?: ProdutoCreateNestedManyWithoutSubcategoriaInput
  }

  export type SubCategoriaUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nome?: string | null
    produtos?: ProdutoUncheckedCreateNestedManyWithoutSubcategoriaInput
  }

  export type SubCategoriaCreateOrConnectWithoutCategoriaInput = {
    where: SubCategoriaWhereUniqueInput
    create: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type SubCategoriaCreateManyCategoriaInputEnvelope = {
    data: SubCategoriaCreateManyCategoriaInput | SubCategoriaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoCreateWithoutCategoriaInput = {
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    subcategoria?: SubCategoriaCreateNestedOneWithoutProdutosInput
    numerosSerie?: NumeroSerieCreateNestedManyWithoutProdutoInput
    compraProdutos?: CompraProdutoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    id_subcategoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    numerosSerie?: NumeroSerieUncheckedCreateNestedManyWithoutProdutoInput
    compraProdutos?: CompraProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoCreateManyCategoriaInputEnvelope = {
    data: ProdutoCreateManyCategoriaInput | ProdutoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoriaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: SubCategoriaWhereUniqueInput
    update: XOR<SubCategoriaUpdateWithoutCategoriaInput, SubCategoriaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<SubCategoriaCreateWithoutCategoriaInput, SubCategoriaUncheckedCreateWithoutCategoriaInput>
  }

  export type SubCategoriaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: SubCategoriaWhereUniqueInput
    data: XOR<SubCategoriaUpdateWithoutCategoriaInput, SubCategoriaUncheckedUpdateWithoutCategoriaInput>
  }

  export type SubCategoriaUpdateManyWithWhereWithoutCategoriaInput = {
    where: SubCategoriaScalarWhereInput
    data: XOR<SubCategoriaUpdateManyMutationInput, SubCategoriaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type SubCategoriaScalarWhereInput = {
    AND?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
    OR?: SubCategoriaScalarWhereInput[]
    NOT?: SubCategoriaScalarWhereInput | SubCategoriaScalarWhereInput[]
    id?: IntFilter<"SubCategoria"> | number
    id_categoria?: IntFilter<"SubCategoria"> | number
    nome?: StringNullableFilter<"SubCategoria"> | string | null
  }

  export type ProdutoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutCategoriaInput, ProdutoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProdutoCreateWithoutCategoriaInput, ProdutoUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutCategoriaInput, ProdutoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProdutoScalarWhereInput = {
    AND?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    OR?: ProdutoScalarWhereInput[]
    NOT?: ProdutoScalarWhereInput | ProdutoScalarWhereInput[]
    id?: IntFilter<"Produto"> | number
    id_categoria?: IntNullableFilter<"Produto"> | number | null
    id_subcategoria?: IntNullableFilter<"Produto"> | number | null
    modelo?: StringNullableFilter<"Produto"> | string | null
    fabricante?: StringNullableFilter<"Produto"> | string | null
    preco_base?: DecimalNullableFilter<"Produto"> | Decimal | DecimalJsLike | number | string | null
    quantidade?: IntNullableFilter<"Produto"> | number | null
  }

  export type CategoriaCreateWithoutSubcategoriasInput = {
    nome?: string | null
    produtos?: ProdutoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutSubcategoriasInput = {
    id?: number
    nome?: string | null
    produtos?: ProdutoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutSubcategoriasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
  }

  export type ProdutoCreateWithoutSubcategoriaInput = {
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    categoria?: CategoriaCreateNestedOneWithoutProdutosInput
    numerosSerie?: NumeroSerieCreateNestedManyWithoutProdutoInput
    compraProdutos?: CompraProdutoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutSubcategoriaInput = {
    id?: number
    id_categoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    numerosSerie?: NumeroSerieUncheckedCreateNestedManyWithoutProdutoInput
    compraProdutos?: CompraProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutSubcategoriaInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutSubcategoriaInput, ProdutoUncheckedCreateWithoutSubcategoriaInput>
  }

  export type ProdutoCreateManySubcategoriaInputEnvelope = {
    data: ProdutoCreateManySubcategoriaInput | ProdutoCreateManySubcategoriaInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutSubcategoriasInput = {
    update: XOR<CategoriaUpdateWithoutSubcategoriasInput, CategoriaUncheckedUpdateWithoutSubcategoriasInput>
    create: XOR<CategoriaCreateWithoutSubcategoriasInput, CategoriaUncheckedCreateWithoutSubcategoriasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutSubcategoriasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutSubcategoriasInput, CategoriaUncheckedUpdateWithoutSubcategoriasInput>
  }

  export type CategoriaUpdateWithoutSubcategoriasInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutSubcategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type ProdutoUpsertWithWhereUniqueWithoutSubcategoriaInput = {
    where: ProdutoWhereUniqueInput
    update: XOR<ProdutoUpdateWithoutSubcategoriaInput, ProdutoUncheckedUpdateWithoutSubcategoriaInput>
    create: XOR<ProdutoCreateWithoutSubcategoriaInput, ProdutoUncheckedCreateWithoutSubcategoriaInput>
  }

  export type ProdutoUpdateWithWhereUniqueWithoutSubcategoriaInput = {
    where: ProdutoWhereUniqueInput
    data: XOR<ProdutoUpdateWithoutSubcategoriaInput, ProdutoUncheckedUpdateWithoutSubcategoriaInput>
  }

  export type ProdutoUpdateManyWithWhereWithoutSubcategoriaInput = {
    where: ProdutoScalarWhereInput
    data: XOR<ProdutoUpdateManyMutationInput, ProdutoUncheckedUpdateManyWithoutSubcategoriaInput>
  }

  export type CategoriaCreateWithoutProdutosInput = {
    nome?: string | null
    subcategorias?: SubCategoriaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome?: string | null
    subcategorias?: SubCategoriaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutProdutosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
  }

  export type SubCategoriaCreateWithoutProdutosInput = {
    nome?: string | null
    categoria: CategoriaCreateNestedOneWithoutSubcategoriasInput
  }

  export type SubCategoriaUncheckedCreateWithoutProdutosInput = {
    id?: number
    id_categoria: number
    nome?: string | null
  }

  export type SubCategoriaCreateOrConnectWithoutProdutosInput = {
    where: SubCategoriaWhereUniqueInput
    create: XOR<SubCategoriaCreateWithoutProdutosInput, SubCategoriaUncheckedCreateWithoutProdutosInput>
  }

  export type NumeroSerieCreateWithoutProdutoInput = {
    num_serie: string
  }

  export type NumeroSerieUncheckedCreateWithoutProdutoInput = {
    num_serie: string
  }

  export type NumeroSerieCreateOrConnectWithoutProdutoInput = {
    where: NumeroSerieWhereUniqueInput
    create: XOR<NumeroSerieCreateWithoutProdutoInput, NumeroSerieUncheckedCreateWithoutProdutoInput>
  }

  export type NumeroSerieCreateManyProdutoInputEnvelope = {
    data: NumeroSerieCreateManyProdutoInput | NumeroSerieCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type CompraProdutoCreateWithoutProdutoInput = {
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    compra: CompraCreateNestedOneWithoutItensInput
  }

  export type CompraProdutoUncheckedCreateWithoutProdutoInput = {
    id_compra: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoCreateOrConnectWithoutProdutoInput = {
    where: CompraProdutoWhereUniqueInput
    create: XOR<CompraProdutoCreateWithoutProdutoInput, CompraProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type CompraProdutoCreateManyProdutoInputEnvelope = {
    data: CompraProdutoCreateManyProdutoInput | CompraProdutoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutProdutosInput = {
    update: XOR<CategoriaUpdateWithoutProdutosInput, CategoriaUncheckedUpdateWithoutProdutosInput>
    create: XOR<CategoriaCreateWithoutProdutosInput, CategoriaUncheckedCreateWithoutProdutosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutProdutosInput, CategoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type CategoriaUpdateWithoutProdutosInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    subcategorias?: SubCategoriaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    subcategorias?: SubCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type SubCategoriaUpsertWithoutProdutosInput = {
    update: XOR<SubCategoriaUpdateWithoutProdutosInput, SubCategoriaUncheckedUpdateWithoutProdutosInput>
    create: XOR<SubCategoriaCreateWithoutProdutosInput, SubCategoriaUncheckedCreateWithoutProdutosInput>
    where?: SubCategoriaWhereInput
  }

  export type SubCategoriaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: SubCategoriaWhereInput
    data: XOR<SubCategoriaUpdateWithoutProdutosInput, SubCategoriaUncheckedUpdateWithoutProdutosInput>
  }

  export type SubCategoriaUpdateWithoutProdutosInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutSubcategoriasNestedInput
  }

  export type SubCategoriaUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NumeroSerieUpsertWithWhereUniqueWithoutProdutoInput = {
    where: NumeroSerieWhereUniqueInput
    update: XOR<NumeroSerieUpdateWithoutProdutoInput, NumeroSerieUncheckedUpdateWithoutProdutoInput>
    create: XOR<NumeroSerieCreateWithoutProdutoInput, NumeroSerieUncheckedCreateWithoutProdutoInput>
  }

  export type NumeroSerieUpdateWithWhereUniqueWithoutProdutoInput = {
    where: NumeroSerieWhereUniqueInput
    data: XOR<NumeroSerieUpdateWithoutProdutoInput, NumeroSerieUncheckedUpdateWithoutProdutoInput>
  }

  export type NumeroSerieUpdateManyWithWhereWithoutProdutoInput = {
    where: NumeroSerieScalarWhereInput
    data: XOR<NumeroSerieUpdateManyMutationInput, NumeroSerieUncheckedUpdateManyWithoutProdutoInput>
  }

  export type NumeroSerieScalarWhereInput = {
    AND?: NumeroSerieScalarWhereInput | NumeroSerieScalarWhereInput[]
    OR?: NumeroSerieScalarWhereInput[]
    NOT?: NumeroSerieScalarWhereInput | NumeroSerieScalarWhereInput[]
    num_serie?: StringFilter<"NumeroSerie"> | string
    id_produto?: IntFilter<"NumeroSerie"> | number
  }

  export type CompraProdutoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: CompraProdutoWhereUniqueInput
    update: XOR<CompraProdutoUpdateWithoutProdutoInput, CompraProdutoUncheckedUpdateWithoutProdutoInput>
    create: XOR<CompraProdutoCreateWithoutProdutoInput, CompraProdutoUncheckedCreateWithoutProdutoInput>
  }

  export type CompraProdutoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: CompraProdutoWhereUniqueInput
    data: XOR<CompraProdutoUpdateWithoutProdutoInput, CompraProdutoUncheckedUpdateWithoutProdutoInput>
  }

  export type CompraProdutoUpdateManyWithWhereWithoutProdutoInput = {
    where: CompraProdutoScalarWhereInput
    data: XOR<CompraProdutoUpdateManyMutationInput, CompraProdutoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type CompraProdutoScalarWhereInput = {
    AND?: CompraProdutoScalarWhereInput | CompraProdutoScalarWhereInput[]
    OR?: CompraProdutoScalarWhereInput[]
    NOT?: CompraProdutoScalarWhereInput | CompraProdutoScalarWhereInput[]
    id_compra?: IntFilter<"CompraProduto"> | number
    id_produto?: IntFilter<"CompraProduto"> | number
    quantidade?: IntNullableFilter<"CompraProduto"> | number | null
    preco_unitario?: DecimalNullableFilter<"CompraProduto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ProdutoCreateWithoutNumerosSerieInput = {
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    categoria?: CategoriaCreateNestedOneWithoutProdutosInput
    subcategoria?: SubCategoriaCreateNestedOneWithoutProdutosInput
    compraProdutos?: CompraProdutoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutNumerosSerieInput = {
    id?: number
    id_categoria?: number | null
    id_subcategoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    compraProdutos?: CompraProdutoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutNumerosSerieInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutNumerosSerieInput, ProdutoUncheckedCreateWithoutNumerosSerieInput>
  }

  export type ProdutoUpsertWithoutNumerosSerieInput = {
    update: XOR<ProdutoUpdateWithoutNumerosSerieInput, ProdutoUncheckedUpdateWithoutNumerosSerieInput>
    create: XOR<ProdutoCreateWithoutNumerosSerieInput, ProdutoUncheckedCreateWithoutNumerosSerieInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutNumerosSerieInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutNumerosSerieInput, ProdutoUncheckedUpdateWithoutNumerosSerieInput>
  }

  export type ProdutoUpdateWithoutNumerosSerieInput = {
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: CategoriaUpdateOneWithoutProdutosNestedInput
    subcategoria?: SubCategoriaUpdateOneWithoutProdutosNestedInput
    compraProdutos?: CompraProdutoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutNumerosSerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    compraProdutos?: CompraProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ClienteCreateWithoutComprasInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
    enderecos?: EnderecoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutComprasInput = {
    cpf: string
    nome: string
    celular?: string | null
    email?: string | null
    data_nascimento?: Date | string | null
    enderecos?: EnderecoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutComprasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
  }

  export type EnderecoCreateWithoutComprasEnvioInput = {
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
    cliente: ClienteCreateNestedOneWithoutEnderecosInput
  }

  export type EnderecoUncheckedCreateWithoutComprasEnvioInput = {
    id?: number
    cpf_cliente: string
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
  }

  export type EnderecoCreateOrConnectWithoutComprasEnvioInput = {
    where: EnderecoWhereUniqueInput
    create: XOR<EnderecoCreateWithoutComprasEnvioInput, EnderecoUncheckedCreateWithoutComprasEnvioInput>
  }

  export type CompraProdutoCreateWithoutCompraInput = {
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
    produto: ProdutoCreateNestedOneWithoutCompraProdutosInput
  }

  export type CompraProdutoUncheckedCreateWithoutCompraInput = {
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoCreateOrConnectWithoutCompraInput = {
    where: CompraProdutoWhereUniqueInput
    create: XOR<CompraProdutoCreateWithoutCompraInput, CompraProdutoUncheckedCreateWithoutCompraInput>
  }

  export type CompraProdutoCreateManyCompraInputEnvelope = {
    data: CompraProdutoCreateManyCompraInput | CompraProdutoCreateManyCompraInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutComprasInput = {
    update: XOR<ClienteUpdateWithoutComprasInput, ClienteUncheckedUpdateWithoutComprasInput>
    create: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutComprasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutComprasInput, ClienteUncheckedUpdateWithoutComprasInput>
  }

  export type ClienteUpdateWithoutComprasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enderecos?: EnderecoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutComprasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    data_nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    enderecos?: EnderecoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type EnderecoUpsertWithoutComprasEnvioInput = {
    update: XOR<EnderecoUpdateWithoutComprasEnvioInput, EnderecoUncheckedUpdateWithoutComprasEnvioInput>
    create: XOR<EnderecoCreateWithoutComprasEnvioInput, EnderecoUncheckedCreateWithoutComprasEnvioInput>
    where?: EnderecoWhereInput
  }

  export type EnderecoUpdateToOneWithWhereWithoutComprasEnvioInput = {
    where?: EnderecoWhereInput
    data: XOR<EnderecoUpdateWithoutComprasEnvioInput, EnderecoUncheckedUpdateWithoutComprasEnvioInput>
  }

  export type EnderecoUpdateWithoutComprasEnvioInput = {
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: ClienteUpdateOneRequiredWithoutEnderecosNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutComprasEnvioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompraProdutoUpsertWithWhereUniqueWithoutCompraInput = {
    where: CompraProdutoWhereUniqueInput
    update: XOR<CompraProdutoUpdateWithoutCompraInput, CompraProdutoUncheckedUpdateWithoutCompraInput>
    create: XOR<CompraProdutoCreateWithoutCompraInput, CompraProdutoUncheckedCreateWithoutCompraInput>
  }

  export type CompraProdutoUpdateWithWhereUniqueWithoutCompraInput = {
    where: CompraProdutoWhereUniqueInput
    data: XOR<CompraProdutoUpdateWithoutCompraInput, CompraProdutoUncheckedUpdateWithoutCompraInput>
  }

  export type CompraProdutoUpdateManyWithWhereWithoutCompraInput = {
    where: CompraProdutoScalarWhereInput
    data: XOR<CompraProdutoUpdateManyMutationInput, CompraProdutoUncheckedUpdateManyWithoutCompraInput>
  }

  export type CompraCreateWithoutItensInput = {
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
    cliente: ClienteCreateNestedOneWithoutComprasInput
    endereco: EnderecoCreateNestedOneWithoutComprasEnvioInput
  }

  export type CompraUncheckedCreateWithoutItensInput = {
    id?: number
    cpf_cliente: string
    endereco_envio: number
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraCreateOrConnectWithoutItensInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutItensInput, CompraUncheckedCreateWithoutItensInput>
  }

  export type ProdutoCreateWithoutCompraProdutosInput = {
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    categoria?: CategoriaCreateNestedOneWithoutProdutosInput
    subcategoria?: SubCategoriaCreateNestedOneWithoutProdutosInput
    numerosSerie?: NumeroSerieCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoUncheckedCreateWithoutCompraProdutosInput = {
    id?: number
    id_categoria?: number | null
    id_subcategoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
    numerosSerie?: NumeroSerieUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoCreateOrConnectWithoutCompraProdutosInput = {
    where: ProdutoWhereUniqueInput
    create: XOR<ProdutoCreateWithoutCompraProdutosInput, ProdutoUncheckedCreateWithoutCompraProdutosInput>
  }

  export type CompraUpsertWithoutItensInput = {
    update: XOR<CompraUpdateWithoutItensInput, CompraUncheckedUpdateWithoutItensInput>
    create: XOR<CompraCreateWithoutItensInput, CompraUncheckedCreateWithoutItensInput>
    where?: CompraWhereInput
  }

  export type CompraUpdateToOneWithWhereWithoutItensInput = {
    where?: CompraWhereInput
    data: XOR<CompraUpdateWithoutItensInput, CompraUncheckedUpdateWithoutItensInput>
  }

  export type CompraUpdateWithoutItensInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComprasNestedInput
    endereco?: EnderecoUpdateOneRequiredWithoutComprasEnvioNestedInput
  }

  export type CompraUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    endereco_envio?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ProdutoUpsertWithoutCompraProdutosInput = {
    update: XOR<ProdutoUpdateWithoutCompraProdutosInput, ProdutoUncheckedUpdateWithoutCompraProdutosInput>
    create: XOR<ProdutoCreateWithoutCompraProdutosInput, ProdutoUncheckedCreateWithoutCompraProdutosInput>
    where?: ProdutoWhereInput
  }

  export type ProdutoUpdateToOneWithWhereWithoutCompraProdutosInput = {
    where?: ProdutoWhereInput
    data: XOR<ProdutoUpdateWithoutCompraProdutosInput, ProdutoUncheckedUpdateWithoutCompraProdutosInput>
  }

  export type ProdutoUpdateWithoutCompraProdutosInput = {
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: CategoriaUpdateOneWithoutProdutosNestedInput
    subcategoria?: SubCategoriaUpdateOneWithoutProdutosNestedInput
    numerosSerie?: NumeroSerieUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutCompraProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    numerosSerie?: NumeroSerieUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type EnderecoCreateManyClienteInput = {
    id?: number
    logradouro?: string | null
    numero?: string | null
    bairro?: string | null
    cidade?: string | null
    uf?: string | null
    cep?: string | null
  }

  export type CompraCreateManyClienteInput = {
    id?: number
    endereco_envio: number
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type EnderecoUpdateWithoutClienteInput = {
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    comprasEnvio?: CompraUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    comprasEnvio?: CompraUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type EnderecoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    logradouro?: NullableStringFieldUpdateOperationsInput | string | null
    numero?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    cidade?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: NullableStringFieldUpdateOperationsInput | string | null
    cep?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompraUpdateWithoutClienteInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    endereco?: EnderecoUpdateOneRequiredWithoutComprasEnvioNestedInput
    itens?: CompraProdutoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco_envio?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itens?: CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    endereco_envio?: IntFieldUpdateOperationsInput | number
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraCreateManyEnderecoInput = {
    id?: number
    cpf_cliente: string
    data_hora: Date | string
    desconto?: Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: string | null
    total?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraUpdateWithoutEnderecoInput = {
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: ClienteUpdateOneRequiredWithoutComprasNestedInput
    itens?: CompraProdutoUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    itens?: CompraProdutoUncheckedUpdateManyWithoutCompraNestedInput
  }

  export type CompraUncheckedUpdateManyWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cpf_cliente?: StringFieldUpdateOperationsInput | string
    data_hora?: DateTimeFieldUpdateOperationsInput | Date | string
    desconto?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    forma_pagamento?: NullableStringFieldUpdateOperationsInput | string | null
    total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type SubCategoriaCreateManyCategoriaInput = {
    id?: number
    nome?: string | null
  }

  export type ProdutoCreateManyCategoriaInput = {
    id?: number
    id_subcategoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
  }

  export type SubCategoriaUpdateWithoutCategoriaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUpdateManyWithoutSubcategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    produtos?: ProdutoUncheckedUpdateManyWithoutSubcategoriaNestedInput
  }

  export type SubCategoriaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoUpdateWithoutCategoriaInput = {
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    subcategoria?: SubCategoriaUpdateOneWithoutProdutosNestedInput
    numerosSerie?: NumeroSerieUpdateManyWithoutProdutoNestedInput
    compraProdutos?: CompraProdutoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    numerosSerie?: NumeroSerieUncheckedUpdateManyWithoutProdutoNestedInput
    compraProdutos?: CompraProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_subcategoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProdutoCreateManySubcategoriaInput = {
    id?: number
    id_categoria?: number | null
    modelo?: string | null
    fabricante?: string | null
    preco_base?: Decimal | DecimalJsLike | number | string | null
    quantidade?: number | null
  }

  export type ProdutoUpdateWithoutSubcategoriaInput = {
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    categoria?: CategoriaUpdateOneWithoutProdutosNestedInput
    numerosSerie?: NumeroSerieUpdateManyWithoutProdutoNestedInput
    compraProdutos?: CompraProdutoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateWithoutSubcategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    numerosSerie?: NumeroSerieUncheckedUpdateManyWithoutProdutoNestedInput
    compraProdutos?: CompraProdutoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoUncheckedUpdateManyWithoutSubcategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_categoria?: NullableIntFieldUpdateOperationsInput | number | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    fabricante?: NullableStringFieldUpdateOperationsInput | string | null
    preco_base?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NumeroSerieCreateManyProdutoInput = {
    num_serie: string
  }

  export type CompraProdutoCreateManyProdutoInput = {
    id_compra: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type NumeroSerieUpdateWithoutProdutoInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
  }

  export type NumeroSerieUncheckedUpdateWithoutProdutoInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
  }

  export type NumeroSerieUncheckedUpdateManyWithoutProdutoInput = {
    num_serie?: StringFieldUpdateOperationsInput | string
  }

  export type CompraProdutoUpdateWithoutProdutoInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: CompraUpdateOneRequiredWithoutItensNestedInput
  }

  export type CompraProdutoUncheckedUpdateWithoutProdutoInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoUncheckedUpdateManyWithoutProdutoInput = {
    id_compra?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoCreateManyCompraInput = {
    id_produto: number
    quantidade?: number | null
    preco_unitario?: Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoUpdateWithoutCompraInput = {
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    produto?: ProdutoUpdateOneRequiredWithoutCompraProdutosNestedInput
  }

  export type CompraProdutoUncheckedUpdateWithoutCompraInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CompraProdutoUncheckedUpdateManyWithoutCompraInput = {
    id_produto?: IntFieldUpdateOperationsInput | number
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    preco_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClienteCountOutputTypeDefaultArgs instead
     */
    export type ClienteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnderecoCountOutputTypeDefaultArgs instead
     */
    export type EnderecoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnderecoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaCountOutputTypeDefaultArgs instead
     */
    export type CategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoriaCountOutputTypeDefaultArgs instead
     */
    export type SubCategoriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubCategoriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdutoCountOutputTypeDefaultArgs instead
     */
    export type ProdutoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdutoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraCountOutputTypeDefaultArgs instead
     */
    export type CompraCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClienteDefaultArgs instead
     */
    export type ClienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnderecoDefaultArgs instead
     */
    export type EnderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnderecoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriaDefaultArgs instead
     */
    export type CategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubCategoriaDefaultArgs instead
     */
    export type SubCategoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubCategoriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProdutoDefaultArgs instead
     */
    export type ProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProdutoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NumeroSerieDefaultArgs instead
     */
    export type NumeroSerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NumeroSerieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraDefaultArgs instead
     */
    export type CompraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompraProdutoDefaultArgs instead
     */
    export type CompraProdutoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompraProdutoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}