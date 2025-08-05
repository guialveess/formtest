
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
 * Model Formulario
 * 
 */
export type Formulario = $Result.DefaultSelection<Prisma.$FormularioPayload>
/**
 * Model Pergunta
 * 
 */
export type Pergunta = $Result.DefaultSelection<Prisma.$PerguntaPayload>
/**
 * Model OpcaoResposta
 * 
 */
export type OpcaoResposta = $Result.DefaultSelection<Prisma.$OpcaoRespostaPayload>
/**
 * Model FormularioResposta
 * 
 */
export type FormularioResposta = $Result.DefaultSelection<Prisma.$FormularioRespostaPayload>
/**
 * Model OpcaoRespostaPergunta
 * 
 */
export type OpcaoRespostaPergunta = $Result.DefaultSelection<Prisma.$OpcaoRespostaPerguntaPayload>
/**
 * Model PerguntaCondicao
 * 
 */
export type PerguntaCondicao = $Result.DefaultSelection<Prisma.$PerguntaCondicaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoPergunta: {
  SIM_NAO: 'SIM_NAO',
  MULTIPLA_ESCOLHA: 'MULTIPLA_ESCOLHA',
  UNICA_ESCOLHA: 'UNICA_ESCOLHA',
  TEXTO_LIVRE: 'TEXTO_LIVRE',
  INTEIRO: 'INTEIRO',
  NUMERO_COM_DUAS_CASA_DECIMAIS: 'NUMERO_COM_DUAS_CASA_DECIMAIS'
};

export type TipoPergunta = (typeof TipoPergunta)[keyof typeof TipoPergunta]


export const OperadorCondicao: {
  EQUALS: 'EQUALS',
  NOT_EQUALS: 'NOT_EQUALS',
  CONTAINS: 'CONTAINS'
};

export type OperadorCondicao = (typeof OperadorCondicao)[keyof typeof OperadorCondicao]

}

export type TipoPergunta = $Enums.TipoPergunta

export const TipoPergunta: typeof $Enums.TipoPergunta

export type OperadorCondicao = $Enums.OperadorCondicao

export const OperadorCondicao: typeof $Enums.OperadorCondicao

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Formularios
 * const formularios = await prisma.formulario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Formularios
   * const formularios = await prisma.formulario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.formulario`: Exposes CRUD operations for the **Formulario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formularios
    * const formularios = await prisma.formulario.findMany()
    * ```
    */
  get formulario(): Prisma.FormularioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pergunta`: Exposes CRUD operations for the **Pergunta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perguntas
    * const perguntas = await prisma.pergunta.findMany()
    * ```
    */
  get pergunta(): Prisma.PerguntaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opcaoResposta`: Exposes CRUD operations for the **OpcaoResposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpcaoRespostas
    * const opcaoRespostas = await prisma.opcaoResposta.findMany()
    * ```
    */
  get opcaoResposta(): Prisma.OpcaoRespostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formularioResposta`: Exposes CRUD operations for the **FormularioResposta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormularioRespostas
    * const formularioRespostas = await prisma.formularioResposta.findMany()
    * ```
    */
  get formularioResposta(): Prisma.FormularioRespostaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opcaoRespostaPergunta`: Exposes CRUD operations for the **OpcaoRespostaPergunta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpcaoRespostaPerguntas
    * const opcaoRespostaPerguntas = await prisma.opcaoRespostaPergunta.findMany()
    * ```
    */
  get opcaoRespostaPergunta(): Prisma.OpcaoRespostaPerguntaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perguntaCondicao`: Exposes CRUD operations for the **PerguntaCondicao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerguntaCondicaos
    * const perguntaCondicaos = await prisma.perguntaCondicao.findMany()
    * ```
    */
  get perguntaCondicao(): Prisma.PerguntaCondicaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Formulario: 'Formulario',
    Pergunta: 'Pergunta',
    OpcaoResposta: 'OpcaoResposta',
    FormularioResposta: 'FormularioResposta',
    OpcaoRespostaPergunta: 'OpcaoRespostaPergunta',
    PerguntaCondicao: 'PerguntaCondicao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "formulario" | "pergunta" | "opcaoResposta" | "formularioResposta" | "opcaoRespostaPergunta" | "perguntaCondicao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Formulario: {
        payload: Prisma.$FormularioPayload<ExtArgs>
        fields: Prisma.FormularioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormularioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormularioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>
          }
          findFirst: {
            args: Prisma.FormularioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormularioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>
          }
          findMany: {
            args: Prisma.FormularioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>[]
          }
          create: {
            args: Prisma.FormularioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>
          }
          createMany: {
            args: Prisma.FormularioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormularioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>[]
          }
          delete: {
            args: Prisma.FormularioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>
          }
          update: {
            args: Prisma.FormularioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>
          }
          deleteMany: {
            args: Prisma.FormularioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormularioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormularioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>[]
          }
          upsert: {
            args: Prisma.FormularioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioPayload>
          }
          aggregate: {
            args: Prisma.FormularioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormulario>
          }
          groupBy: {
            args: Prisma.FormularioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormularioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormularioCountArgs<ExtArgs>
            result: $Utils.Optional<FormularioCountAggregateOutputType> | number
          }
        }
      }
      Pergunta: {
        payload: Prisma.$PerguntaPayload<ExtArgs>
        fields: Prisma.PerguntaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerguntaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerguntaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          findFirst: {
            args: Prisma.PerguntaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerguntaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          findMany: {
            args: Prisma.PerguntaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          create: {
            args: Prisma.PerguntaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          createMany: {
            args: Prisma.PerguntaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerguntaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          delete: {
            args: Prisma.PerguntaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          update: {
            args: Prisma.PerguntaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          deleteMany: {
            args: Prisma.PerguntaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerguntaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerguntaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>[]
          }
          upsert: {
            args: Prisma.PerguntaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaPayload>
          }
          aggregate: {
            args: Prisma.PerguntaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePergunta>
          }
          groupBy: {
            args: Prisma.PerguntaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerguntaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerguntaCountArgs<ExtArgs>
            result: $Utils.Optional<PerguntaCountAggregateOutputType> | number
          }
        }
      }
      OpcaoResposta: {
        payload: Prisma.$OpcaoRespostaPayload<ExtArgs>
        fields: Prisma.OpcaoRespostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpcaoRespostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpcaoRespostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          findFirst: {
            args: Prisma.OpcaoRespostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpcaoRespostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          findMany: {
            args: Prisma.OpcaoRespostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>[]
          }
          create: {
            args: Prisma.OpcaoRespostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          createMany: {
            args: Prisma.OpcaoRespostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpcaoRespostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>[]
          }
          delete: {
            args: Prisma.OpcaoRespostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          update: {
            args: Prisma.OpcaoRespostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          deleteMany: {
            args: Prisma.OpcaoRespostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpcaoRespostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpcaoRespostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>[]
          }
          upsert: {
            args: Prisma.OpcaoRespostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPayload>
          }
          aggregate: {
            args: Prisma.OpcaoRespostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpcaoResposta>
          }
          groupBy: {
            args: Prisma.OpcaoRespostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpcaoRespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpcaoRespostaCountArgs<ExtArgs>
            result: $Utils.Optional<OpcaoRespostaCountAggregateOutputType> | number
          }
        }
      }
      FormularioResposta: {
        payload: Prisma.$FormularioRespostaPayload<ExtArgs>
        fields: Prisma.FormularioRespostaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormularioRespostaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormularioRespostaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>
          }
          findFirst: {
            args: Prisma.FormularioRespostaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormularioRespostaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>
          }
          findMany: {
            args: Prisma.FormularioRespostaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>[]
          }
          create: {
            args: Prisma.FormularioRespostaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>
          }
          createMany: {
            args: Prisma.FormularioRespostaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormularioRespostaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>[]
          }
          delete: {
            args: Prisma.FormularioRespostaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>
          }
          update: {
            args: Prisma.FormularioRespostaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>
          }
          deleteMany: {
            args: Prisma.FormularioRespostaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormularioRespostaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormularioRespostaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>[]
          }
          upsert: {
            args: Prisma.FormularioRespostaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormularioRespostaPayload>
          }
          aggregate: {
            args: Prisma.FormularioRespostaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormularioResposta>
          }
          groupBy: {
            args: Prisma.FormularioRespostaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormularioRespostaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormularioRespostaCountArgs<ExtArgs>
            result: $Utils.Optional<FormularioRespostaCountAggregateOutputType> | number
          }
        }
      }
      OpcaoRespostaPergunta: {
        payload: Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>
        fields: Prisma.OpcaoRespostaPerguntaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpcaoRespostaPerguntaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpcaoRespostaPerguntaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>
          }
          findFirst: {
            args: Prisma.OpcaoRespostaPerguntaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpcaoRespostaPerguntaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>
          }
          findMany: {
            args: Prisma.OpcaoRespostaPerguntaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>[]
          }
          create: {
            args: Prisma.OpcaoRespostaPerguntaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>
          }
          createMany: {
            args: Prisma.OpcaoRespostaPerguntaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpcaoRespostaPerguntaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>[]
          }
          delete: {
            args: Prisma.OpcaoRespostaPerguntaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>
          }
          update: {
            args: Prisma.OpcaoRespostaPerguntaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>
          }
          deleteMany: {
            args: Prisma.OpcaoRespostaPerguntaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpcaoRespostaPerguntaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpcaoRespostaPerguntaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>[]
          }
          upsert: {
            args: Prisma.OpcaoRespostaPerguntaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpcaoRespostaPerguntaPayload>
          }
          aggregate: {
            args: Prisma.OpcaoRespostaPerguntaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpcaoRespostaPergunta>
          }
          groupBy: {
            args: Prisma.OpcaoRespostaPerguntaGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpcaoRespostaPerguntaGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpcaoRespostaPerguntaCountArgs<ExtArgs>
            result: $Utils.Optional<OpcaoRespostaPerguntaCountAggregateOutputType> | number
          }
        }
      }
      PerguntaCondicao: {
        payload: Prisma.$PerguntaCondicaoPayload<ExtArgs>
        fields: Prisma.PerguntaCondicaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerguntaCondicaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerguntaCondicaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>
          }
          findFirst: {
            args: Prisma.PerguntaCondicaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerguntaCondicaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>
          }
          findMany: {
            args: Prisma.PerguntaCondicaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>[]
          }
          create: {
            args: Prisma.PerguntaCondicaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>
          }
          createMany: {
            args: Prisma.PerguntaCondicaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerguntaCondicaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>[]
          }
          delete: {
            args: Prisma.PerguntaCondicaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>
          }
          update: {
            args: Prisma.PerguntaCondicaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>
          }
          deleteMany: {
            args: Prisma.PerguntaCondicaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerguntaCondicaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerguntaCondicaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>[]
          }
          upsert: {
            args: Prisma.PerguntaCondicaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerguntaCondicaoPayload>
          }
          aggregate: {
            args: Prisma.PerguntaCondicaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerguntaCondicao>
          }
          groupBy: {
            args: Prisma.PerguntaCondicaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerguntaCondicaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerguntaCondicaoCountArgs<ExtArgs>
            result: $Utils.Optional<PerguntaCondicaoCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    formulario?: FormularioOmit
    pergunta?: PerguntaOmit
    opcaoResposta?: OpcaoRespostaOmit
    formularioResposta?: FormularioRespostaOmit
    opcaoRespostaPergunta?: OpcaoRespostaPerguntaOmit
    perguntaCondicao?: PerguntaCondicaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type FormularioCountOutputType
   */

  export type FormularioCountOutputType = {
    respostas: number
    perguntas: number
  }

  export type FormularioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | FormularioCountOutputTypeCountRespostasArgs
    perguntas?: boolean | FormularioCountOutputTypeCountPerguntasArgs
  }

  // Custom InputTypes
  /**
   * FormularioCountOutputType without action
   */
  export type FormularioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioCountOutputType
     */
    select?: FormularioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormularioCountOutputType without action
   */
  export type FormularioCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormularioRespostaWhereInput
  }

  /**
   * FormularioCountOutputType without action
   */
  export type FormularioCountOutputTypeCountPerguntasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaWhereInput
  }


  /**
   * Count Type PerguntaCountOutputType
   */

  export type PerguntaCountOutputType = {
    respostas: number
    opcoesRespostas: number
    condicoesDestino: number
    condicoesOrigem: number
  }

  export type PerguntaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | PerguntaCountOutputTypeCountRespostasArgs
    opcoesRespostas?: boolean | PerguntaCountOutputTypeCountOpcoesRespostasArgs
    condicoesDestino?: boolean | PerguntaCountOutputTypeCountCondicoesDestinoArgs
    condicoesOrigem?: boolean | PerguntaCountOutputTypeCountCondicoesOrigemArgs
  }

  // Custom InputTypes
  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCountOutputType
     */
    select?: PerguntaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaPerguntaWhereInput
  }

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountOpcoesRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaWhereInput
  }

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountCondicoesDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaCondicaoWhereInput
  }

  /**
   * PerguntaCountOutputType without action
   */
  export type PerguntaCountOutputTypeCountCondicoesOrigemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaCondicaoWhereInput
  }


  /**
   * Count Type OpcaoRespostaCountOutputType
   */

  export type OpcaoRespostaCountOutputType = {
    respostas: number
    condicoes: number
  }

  export type OpcaoRespostaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | OpcaoRespostaCountOutputTypeCountRespostasArgs
    condicoes?: boolean | OpcaoRespostaCountOutputTypeCountCondicoesArgs
  }

  // Custom InputTypes
  /**
   * OpcaoRespostaCountOutputType without action
   */
  export type OpcaoRespostaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaCountOutputType
     */
    select?: OpcaoRespostaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpcaoRespostaCountOutputType without action
   */
  export type OpcaoRespostaCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaPerguntaWhereInput
  }

  /**
   * OpcaoRespostaCountOutputType without action
   */
  export type OpcaoRespostaCountOutputTypeCountCondicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaCondicaoWhereInput
  }


  /**
   * Count Type FormularioRespostaCountOutputType
   */

  export type FormularioRespostaCountOutputType = {
    respostas: number
  }

  export type FormularioRespostaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | FormularioRespostaCountOutputTypeCountRespostasArgs
  }

  // Custom InputTypes
  /**
   * FormularioRespostaCountOutputType without action
   */
  export type FormularioRespostaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioRespostaCountOutputType
     */
    select?: FormularioRespostaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormularioRespostaCountOutputType without action
   */
  export type FormularioRespostaCountOutputTypeCountRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaPerguntaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Formulario
   */

  export type AggregateFormulario = {
    _count: FormularioCountAggregateOutputType | null
    _avg: FormularioAvgAggregateOutputType | null
    _sum: FormularioSumAggregateOutputType | null
    _min: FormularioMinAggregateOutputType | null
    _max: FormularioMaxAggregateOutputType | null
  }

  export type FormularioAvgAggregateOutputType = {
    ordem: number | null
  }

  export type FormularioSumAggregateOutputType = {
    ordem: number | null
  }

  export type FormularioMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    ordem: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormularioMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descricao: string | null
    ordem: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormularioCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    ordem: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormularioAvgAggregateInputType = {
    ordem?: true
  }

  export type FormularioSumAggregateInputType = {
    ordem?: true
  }

  export type FormularioMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ordem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormularioMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ordem?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormularioCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    ordem?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormularioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formulario to aggregate.
     */
    where?: FormularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formularios to fetch.
     */
    orderBy?: FormularioOrderByWithRelationInput | FormularioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formularios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formularios
    **/
    _count?: true | FormularioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormularioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormularioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormularioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormularioMaxAggregateInputType
  }

  export type GetFormularioAggregateType<T extends FormularioAggregateArgs> = {
        [P in keyof T & keyof AggregateFormulario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormulario[P]>
      : GetScalarType<T[P], AggregateFormulario[P]>
  }




  export type FormularioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormularioWhereInput
    orderBy?: FormularioOrderByWithAggregationInput | FormularioOrderByWithAggregationInput[]
    by: FormularioScalarFieldEnum[] | FormularioScalarFieldEnum
    having?: FormularioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormularioCountAggregateInputType | true
    _avg?: FormularioAvgAggregateInputType
    _sum?: FormularioSumAggregateInputType
    _min?: FormularioMinAggregateInputType
    _max?: FormularioMaxAggregateInputType
  }

  export type FormularioGroupByOutputType = {
    id: string
    titulo: string
    descricao: string | null
    ordem: number
    createdAt: Date
    updatedAt: Date
    _count: FormularioCountAggregateOutputType | null
    _avg: FormularioAvgAggregateOutputType | null
    _sum: FormularioSumAggregateOutputType | null
    _min: FormularioMinAggregateOutputType | null
    _max: FormularioMaxAggregateOutputType | null
  }

  type GetFormularioGroupByPayload<T extends FormularioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormularioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormularioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormularioGroupByOutputType[P]>
            : GetScalarType<T[P], FormularioGroupByOutputType[P]>
        }
      >
    >


  export type FormularioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respostas?: boolean | Formulario$respostasArgs<ExtArgs>
    perguntas?: boolean | Formulario$perguntasArgs<ExtArgs>
    _count?: boolean | FormularioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formulario"]>

  export type FormularioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formulario"]>

  export type FormularioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formulario"]>

  export type FormularioSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    ordem?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormularioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "ordem" | "createdAt" | "updatedAt", ExtArgs["result"]["formulario"]>
  export type FormularioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | Formulario$respostasArgs<ExtArgs>
    perguntas?: boolean | Formulario$perguntasArgs<ExtArgs>
    _count?: boolean | FormularioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormularioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormularioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormularioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Formulario"
    objects: {
      respostas: Prisma.$FormularioRespostaPayload<ExtArgs>[]
      perguntas: Prisma.$PerguntaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descricao: string | null
      ordem: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formulario"]>
    composites: {}
  }

  type FormularioGetPayload<S extends boolean | null | undefined | FormularioDefaultArgs> = $Result.GetResult<Prisma.$FormularioPayload, S>

  type FormularioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormularioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormularioCountAggregateInputType | true
    }

  export interface FormularioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Formulario'], meta: { name: 'Formulario' } }
    /**
     * Find zero or one Formulario that matches the filter.
     * @param {FormularioFindUniqueArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormularioFindUniqueArgs>(args: SelectSubset<T, FormularioFindUniqueArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formulario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormularioFindUniqueOrThrowArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormularioFindUniqueOrThrowArgs>(args: SelectSubset<T, FormularioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formulario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioFindFirstArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormularioFindFirstArgs>(args?: SelectSubset<T, FormularioFindFirstArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formulario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioFindFirstOrThrowArgs} args - Arguments to find a Formulario
     * @example
     * // Get one Formulario
     * const formulario = await prisma.formulario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormularioFindFirstOrThrowArgs>(args?: SelectSubset<T, FormularioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formularios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formularios
     * const formularios = await prisma.formulario.findMany()
     * 
     * // Get first 10 Formularios
     * const formularios = await prisma.formulario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formularioWithIdOnly = await prisma.formulario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormularioFindManyArgs>(args?: SelectSubset<T, FormularioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formulario.
     * @param {FormularioCreateArgs} args - Arguments to create a Formulario.
     * @example
     * // Create one Formulario
     * const Formulario = await prisma.formulario.create({
     *   data: {
     *     // ... data to create a Formulario
     *   }
     * })
     * 
     */
    create<T extends FormularioCreateArgs>(args: SelectSubset<T, FormularioCreateArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formularios.
     * @param {FormularioCreateManyArgs} args - Arguments to create many Formularios.
     * @example
     * // Create many Formularios
     * const formulario = await prisma.formulario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormularioCreateManyArgs>(args?: SelectSubset<T, FormularioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formularios and returns the data saved in the database.
     * @param {FormularioCreateManyAndReturnArgs} args - Arguments to create many Formularios.
     * @example
     * // Create many Formularios
     * const formulario = await prisma.formulario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formularios and only return the `id`
     * const formularioWithIdOnly = await prisma.formulario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormularioCreateManyAndReturnArgs>(args?: SelectSubset<T, FormularioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formulario.
     * @param {FormularioDeleteArgs} args - Arguments to delete one Formulario.
     * @example
     * // Delete one Formulario
     * const Formulario = await prisma.formulario.delete({
     *   where: {
     *     // ... filter to delete one Formulario
     *   }
     * })
     * 
     */
    delete<T extends FormularioDeleteArgs>(args: SelectSubset<T, FormularioDeleteArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formulario.
     * @param {FormularioUpdateArgs} args - Arguments to update one Formulario.
     * @example
     * // Update one Formulario
     * const formulario = await prisma.formulario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormularioUpdateArgs>(args: SelectSubset<T, FormularioUpdateArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formularios.
     * @param {FormularioDeleteManyArgs} args - Arguments to filter Formularios to delete.
     * @example
     * // Delete a few Formularios
     * const { count } = await prisma.formulario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormularioDeleteManyArgs>(args?: SelectSubset<T, FormularioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formularios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formularios
     * const formulario = await prisma.formulario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormularioUpdateManyArgs>(args: SelectSubset<T, FormularioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formularios and returns the data updated in the database.
     * @param {FormularioUpdateManyAndReturnArgs} args - Arguments to update many Formularios.
     * @example
     * // Update many Formularios
     * const formulario = await prisma.formulario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formularios and only return the `id`
     * const formularioWithIdOnly = await prisma.formulario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormularioUpdateManyAndReturnArgs>(args: SelectSubset<T, FormularioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formulario.
     * @param {FormularioUpsertArgs} args - Arguments to update or create a Formulario.
     * @example
     * // Update or create a Formulario
     * const formulario = await prisma.formulario.upsert({
     *   create: {
     *     // ... data to create a Formulario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formulario we want to update
     *   }
     * })
     */
    upsert<T extends FormularioUpsertArgs>(args: SelectSubset<T, FormularioUpsertArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formularios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioCountArgs} args - Arguments to filter Formularios to count.
     * @example
     * // Count the number of Formularios
     * const count = await prisma.formulario.count({
     *   where: {
     *     // ... the filter for the Formularios we want to count
     *   }
     * })
    **/
    count<T extends FormularioCountArgs>(
      args?: Subset<T, FormularioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormularioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formulario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormularioAggregateArgs>(args: Subset<T, FormularioAggregateArgs>): Prisma.PrismaPromise<GetFormularioAggregateType<T>>

    /**
     * Group by Formulario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioGroupByArgs} args - Group by arguments.
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
      T extends FormularioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormularioGroupByArgs['orderBy'] }
        : { orderBy?: FormularioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormularioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormularioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Formulario model
   */
  readonly fields: FormularioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Formulario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormularioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respostas<T extends Formulario$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Formulario$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perguntas<T extends Formulario$perguntasArgs<ExtArgs> = {}>(args?: Subset<T, Formulario$perguntasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Formulario model
   */
  interface FormularioFieldRefs {
    readonly id: FieldRef<"Formulario", 'String'>
    readonly titulo: FieldRef<"Formulario", 'String'>
    readonly descricao: FieldRef<"Formulario", 'String'>
    readonly ordem: FieldRef<"Formulario", 'Int'>
    readonly createdAt: FieldRef<"Formulario", 'DateTime'>
    readonly updatedAt: FieldRef<"Formulario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Formulario findUnique
   */
  export type FormularioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * Filter, which Formulario to fetch.
     */
    where: FormularioWhereUniqueInput
  }

  /**
   * Formulario findUniqueOrThrow
   */
  export type FormularioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * Filter, which Formulario to fetch.
     */
    where: FormularioWhereUniqueInput
  }

  /**
   * Formulario findFirst
   */
  export type FormularioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * Filter, which Formulario to fetch.
     */
    where?: FormularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formularios to fetch.
     */
    orderBy?: FormularioOrderByWithRelationInput | FormularioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formularios.
     */
    cursor?: FormularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formularios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formularios.
     */
    distinct?: FormularioScalarFieldEnum | FormularioScalarFieldEnum[]
  }

  /**
   * Formulario findFirstOrThrow
   */
  export type FormularioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * Filter, which Formulario to fetch.
     */
    where?: FormularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formularios to fetch.
     */
    orderBy?: FormularioOrderByWithRelationInput | FormularioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formularios.
     */
    cursor?: FormularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formularios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formularios.
     */
    distinct?: FormularioScalarFieldEnum | FormularioScalarFieldEnum[]
  }

  /**
   * Formulario findMany
   */
  export type FormularioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * Filter, which Formularios to fetch.
     */
    where?: FormularioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formularios to fetch.
     */
    orderBy?: FormularioOrderByWithRelationInput | FormularioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formularios.
     */
    cursor?: FormularioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formularios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formularios.
     */
    skip?: number
    distinct?: FormularioScalarFieldEnum | FormularioScalarFieldEnum[]
  }

  /**
   * Formulario create
   */
  export type FormularioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * The data needed to create a Formulario.
     */
    data: XOR<FormularioCreateInput, FormularioUncheckedCreateInput>
  }

  /**
   * Formulario createMany
   */
  export type FormularioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formularios.
     */
    data: FormularioCreateManyInput | FormularioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formulario createManyAndReturn
   */
  export type FormularioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * The data used to create many Formularios.
     */
    data: FormularioCreateManyInput | FormularioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formulario update
   */
  export type FormularioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * The data needed to update a Formulario.
     */
    data: XOR<FormularioUpdateInput, FormularioUncheckedUpdateInput>
    /**
     * Choose, which Formulario to update.
     */
    where: FormularioWhereUniqueInput
  }

  /**
   * Formulario updateMany
   */
  export type FormularioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formularios.
     */
    data: XOR<FormularioUpdateManyMutationInput, FormularioUncheckedUpdateManyInput>
    /**
     * Filter which Formularios to update
     */
    where?: FormularioWhereInput
    /**
     * Limit how many Formularios to update.
     */
    limit?: number
  }

  /**
   * Formulario updateManyAndReturn
   */
  export type FormularioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * The data used to update Formularios.
     */
    data: XOR<FormularioUpdateManyMutationInput, FormularioUncheckedUpdateManyInput>
    /**
     * Filter which Formularios to update
     */
    where?: FormularioWhereInput
    /**
     * Limit how many Formularios to update.
     */
    limit?: number
  }

  /**
   * Formulario upsert
   */
  export type FormularioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * The filter to search for the Formulario to update in case it exists.
     */
    where: FormularioWhereUniqueInput
    /**
     * In case the Formulario found by the `where` argument doesn't exist, create a new Formulario with this data.
     */
    create: XOR<FormularioCreateInput, FormularioUncheckedCreateInput>
    /**
     * In case the Formulario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormularioUpdateInput, FormularioUncheckedUpdateInput>
  }

  /**
   * Formulario delete
   */
  export type FormularioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
    /**
     * Filter which Formulario to delete.
     */
    where: FormularioWhereUniqueInput
  }

  /**
   * Formulario deleteMany
   */
  export type FormularioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formularios to delete
     */
    where?: FormularioWhereInput
    /**
     * Limit how many Formularios to delete.
     */
    limit?: number
  }

  /**
   * Formulario.respostas
   */
  export type Formulario$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    where?: FormularioRespostaWhereInput
    orderBy?: FormularioRespostaOrderByWithRelationInput | FormularioRespostaOrderByWithRelationInput[]
    cursor?: FormularioRespostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormularioRespostaScalarFieldEnum | FormularioRespostaScalarFieldEnum[]
  }

  /**
   * Formulario.perguntas
   */
  export type Formulario$perguntasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    where?: PerguntaWhereInput
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    cursor?: PerguntaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Formulario without action
   */
  export type FormularioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formulario
     */
    select?: FormularioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formulario
     */
    omit?: FormularioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioInclude<ExtArgs> | null
  }


  /**
   * Model Pergunta
   */

  export type AggregatePergunta = {
    _count: PerguntaCountAggregateOutputType | null
    _avg: PerguntaAvgAggregateOutputType | null
    _sum: PerguntaSumAggregateOutputType | null
    _min: PerguntaMinAggregateOutputType | null
    _max: PerguntaMaxAggregateOutputType | null
  }

  export type PerguntaAvgAggregateOutputType = {
    ordem: number | null
  }

  export type PerguntaSumAggregateOutputType = {
    ordem: number | null
  }

  export type PerguntaMinAggregateOutputType = {
    id: string | null
    idFormulario: string | null
    titulo: string | null
    codigo: string | null
    orientacaoResposta: string | null
    ordem: number | null
    obrigatoria: boolean | null
    subPergunta: boolean | null
    tipoPergunta: $Enums.TipoPergunta | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerguntaMaxAggregateOutputType = {
    id: string | null
    idFormulario: string | null
    titulo: string | null
    codigo: string | null
    orientacaoResposta: string | null
    ordem: number | null
    obrigatoria: boolean | null
    subPergunta: boolean | null
    tipoPergunta: $Enums.TipoPergunta | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerguntaCountAggregateOutputType = {
    id: number
    idFormulario: number
    titulo: number
    codigo: number
    orientacaoResposta: number
    ordem: number
    obrigatoria: number
    subPergunta: number
    tipoPergunta: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PerguntaAvgAggregateInputType = {
    ordem?: true
  }

  export type PerguntaSumAggregateInputType = {
    ordem?: true
  }

  export type PerguntaMinAggregateInputType = {
    id?: true
    idFormulario?: true
    titulo?: true
    codigo?: true
    orientacaoResposta?: true
    ordem?: true
    obrigatoria?: true
    subPergunta?: true
    tipoPergunta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerguntaMaxAggregateInputType = {
    id?: true
    idFormulario?: true
    titulo?: true
    codigo?: true
    orientacaoResposta?: true
    ordem?: true
    obrigatoria?: true
    subPergunta?: true
    tipoPergunta?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerguntaCountAggregateInputType = {
    id?: true
    idFormulario?: true
    titulo?: true
    codigo?: true
    orientacaoResposta?: true
    ordem?: true
    obrigatoria?: true
    subPergunta?: true
    tipoPergunta?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PerguntaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pergunta to aggregate.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perguntas
    **/
    _count?: true | PerguntaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerguntaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerguntaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerguntaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerguntaMaxAggregateInputType
  }

  export type GetPerguntaAggregateType<T extends PerguntaAggregateArgs> = {
        [P in keyof T & keyof AggregatePergunta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePergunta[P]>
      : GetScalarType<T[P], AggregatePergunta[P]>
  }




  export type PerguntaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaWhereInput
    orderBy?: PerguntaOrderByWithAggregationInput | PerguntaOrderByWithAggregationInput[]
    by: PerguntaScalarFieldEnum[] | PerguntaScalarFieldEnum
    having?: PerguntaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerguntaCountAggregateInputType | true
    _avg?: PerguntaAvgAggregateInputType
    _sum?: PerguntaSumAggregateInputType
    _min?: PerguntaMinAggregateInputType
    _max?: PerguntaMaxAggregateInputType
  }

  export type PerguntaGroupByOutputType = {
    id: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta: string | null
    ordem: number
    obrigatoria: boolean
    subPergunta: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt: Date
    updatedAt: Date
    _count: PerguntaCountAggregateOutputType | null
    _avg: PerguntaAvgAggregateOutputType | null
    _sum: PerguntaSumAggregateOutputType | null
    _min: PerguntaMinAggregateOutputType | null
    _max: PerguntaMaxAggregateOutputType | null
  }

  type GetPerguntaGroupByPayload<T extends PerguntaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerguntaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerguntaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerguntaGroupByOutputType[P]>
            : GetScalarType<T[P], PerguntaGroupByOutputType[P]>
        }
      >
    >


  export type PerguntaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idFormulario?: boolean
    titulo?: boolean
    codigo?: boolean
    orientacaoResposta?: boolean
    ordem?: boolean
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respostas?: boolean | Pergunta$respostasArgs<ExtArgs>
    opcoesRespostas?: boolean | Pergunta$opcoesRespostasArgs<ExtArgs>
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
    condicoesDestino?: boolean | Pergunta$condicoesDestinoArgs<ExtArgs>
    condicoesOrigem?: boolean | Pergunta$condicoesOrigemArgs<ExtArgs>
    _count?: boolean | PerguntaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idFormulario?: boolean
    titulo?: boolean
    codigo?: boolean
    orientacaoResposta?: boolean
    ordem?: boolean
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idFormulario?: boolean
    titulo?: boolean
    codigo?: boolean
    orientacaoResposta?: boolean
    ordem?: boolean
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pergunta"]>

  export type PerguntaSelectScalar = {
    id?: boolean
    idFormulario?: boolean
    titulo?: boolean
    codigo?: boolean
    orientacaoResposta?: boolean
    ordem?: boolean
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PerguntaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idFormulario" | "titulo" | "codigo" | "orientacaoResposta" | "ordem" | "obrigatoria" | "subPergunta" | "tipoPergunta" | "createdAt" | "updatedAt", ExtArgs["result"]["pergunta"]>
  export type PerguntaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | Pergunta$respostasArgs<ExtArgs>
    opcoesRespostas?: boolean | Pergunta$opcoesRespostasArgs<ExtArgs>
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
    condicoesDestino?: boolean | Pergunta$condicoesDestinoArgs<ExtArgs>
    condicoesOrigem?: boolean | Pergunta$condicoesOrigemArgs<ExtArgs>
    _count?: boolean | PerguntaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PerguntaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }
  export type PerguntaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }

  export type $PerguntaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pergunta"
    objects: {
      respostas: Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>[]
      opcoesRespostas: Prisma.$OpcaoRespostaPayload<ExtArgs>[]
      formulario: Prisma.$FormularioPayload<ExtArgs>
      condicoesDestino: Prisma.$PerguntaCondicaoPayload<ExtArgs>[]
      condicoesOrigem: Prisma.$PerguntaCondicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idFormulario: string
      titulo: string
      codigo: string
      orientacaoResposta: string | null
      ordem: number
      obrigatoria: boolean
      subPergunta: boolean
      tipoPergunta: $Enums.TipoPergunta
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pergunta"]>
    composites: {}
  }

  type PerguntaGetPayload<S extends boolean | null | undefined | PerguntaDefaultArgs> = $Result.GetResult<Prisma.$PerguntaPayload, S>

  type PerguntaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerguntaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerguntaCountAggregateInputType | true
    }

  export interface PerguntaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pergunta'], meta: { name: 'Pergunta' } }
    /**
     * Find zero or one Pergunta that matches the filter.
     * @param {PerguntaFindUniqueArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerguntaFindUniqueArgs>(args: SelectSubset<T, PerguntaFindUniqueArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pergunta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerguntaFindUniqueOrThrowArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerguntaFindUniqueOrThrowArgs>(args: SelectSubset<T, PerguntaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pergunta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindFirstArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerguntaFindFirstArgs>(args?: SelectSubset<T, PerguntaFindFirstArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pergunta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindFirstOrThrowArgs} args - Arguments to find a Pergunta
     * @example
     * // Get one Pergunta
     * const pergunta = await prisma.pergunta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerguntaFindFirstOrThrowArgs>(args?: SelectSubset<T, PerguntaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perguntas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perguntas
     * const perguntas = await prisma.pergunta.findMany()
     * 
     * // Get first 10 Perguntas
     * const perguntas = await prisma.pergunta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perguntaWithIdOnly = await prisma.pergunta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerguntaFindManyArgs>(args?: SelectSubset<T, PerguntaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pergunta.
     * @param {PerguntaCreateArgs} args - Arguments to create a Pergunta.
     * @example
     * // Create one Pergunta
     * const Pergunta = await prisma.pergunta.create({
     *   data: {
     *     // ... data to create a Pergunta
     *   }
     * })
     * 
     */
    create<T extends PerguntaCreateArgs>(args: SelectSubset<T, PerguntaCreateArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perguntas.
     * @param {PerguntaCreateManyArgs} args - Arguments to create many Perguntas.
     * @example
     * // Create many Perguntas
     * const pergunta = await prisma.pergunta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerguntaCreateManyArgs>(args?: SelectSubset<T, PerguntaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perguntas and returns the data saved in the database.
     * @param {PerguntaCreateManyAndReturnArgs} args - Arguments to create many Perguntas.
     * @example
     * // Create many Perguntas
     * const pergunta = await prisma.pergunta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perguntas and only return the `id`
     * const perguntaWithIdOnly = await prisma.pergunta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerguntaCreateManyAndReturnArgs>(args?: SelectSubset<T, PerguntaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pergunta.
     * @param {PerguntaDeleteArgs} args - Arguments to delete one Pergunta.
     * @example
     * // Delete one Pergunta
     * const Pergunta = await prisma.pergunta.delete({
     *   where: {
     *     // ... filter to delete one Pergunta
     *   }
     * })
     * 
     */
    delete<T extends PerguntaDeleteArgs>(args: SelectSubset<T, PerguntaDeleteArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pergunta.
     * @param {PerguntaUpdateArgs} args - Arguments to update one Pergunta.
     * @example
     * // Update one Pergunta
     * const pergunta = await prisma.pergunta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerguntaUpdateArgs>(args: SelectSubset<T, PerguntaUpdateArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perguntas.
     * @param {PerguntaDeleteManyArgs} args - Arguments to filter Perguntas to delete.
     * @example
     * // Delete a few Perguntas
     * const { count } = await prisma.pergunta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerguntaDeleteManyArgs>(args?: SelectSubset<T, PerguntaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perguntas
     * const pergunta = await prisma.pergunta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerguntaUpdateManyArgs>(args: SelectSubset<T, PerguntaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perguntas and returns the data updated in the database.
     * @param {PerguntaUpdateManyAndReturnArgs} args - Arguments to update many Perguntas.
     * @example
     * // Update many Perguntas
     * const pergunta = await prisma.pergunta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perguntas and only return the `id`
     * const perguntaWithIdOnly = await prisma.pergunta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerguntaUpdateManyAndReturnArgs>(args: SelectSubset<T, PerguntaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pergunta.
     * @param {PerguntaUpsertArgs} args - Arguments to update or create a Pergunta.
     * @example
     * // Update or create a Pergunta
     * const pergunta = await prisma.pergunta.upsert({
     *   create: {
     *     // ... data to create a Pergunta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pergunta we want to update
     *   }
     * })
     */
    upsert<T extends PerguntaUpsertArgs>(args: SelectSubset<T, PerguntaUpsertArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCountArgs} args - Arguments to filter Perguntas to count.
     * @example
     * // Count the number of Perguntas
     * const count = await prisma.pergunta.count({
     *   where: {
     *     // ... the filter for the Perguntas we want to count
     *   }
     * })
    **/
    count<T extends PerguntaCountArgs>(
      args?: Subset<T, PerguntaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerguntaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerguntaAggregateArgs>(args: Subset<T, PerguntaAggregateArgs>): Prisma.PrismaPromise<GetPerguntaAggregateType<T>>

    /**
     * Group by Pergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaGroupByArgs} args - Group by arguments.
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
      T extends PerguntaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerguntaGroupByArgs['orderBy'] }
        : { orderBy?: PerguntaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerguntaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerguntaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pergunta model
   */
  readonly fields: PerguntaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pergunta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerguntaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respostas<T extends Pergunta$respostasArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    opcoesRespostas<T extends Pergunta$opcoesRespostasArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$opcoesRespostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formulario<T extends FormularioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormularioDefaultArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    condicoesDestino<T extends Pergunta$condicoesDestinoArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$condicoesDestinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    condicoesOrigem<T extends Pergunta$condicoesOrigemArgs<ExtArgs> = {}>(args?: Subset<T, Pergunta$condicoesOrigemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pergunta model
   */
  interface PerguntaFieldRefs {
    readonly id: FieldRef<"Pergunta", 'String'>
    readonly idFormulario: FieldRef<"Pergunta", 'String'>
    readonly titulo: FieldRef<"Pergunta", 'String'>
    readonly codigo: FieldRef<"Pergunta", 'String'>
    readonly orientacaoResposta: FieldRef<"Pergunta", 'String'>
    readonly ordem: FieldRef<"Pergunta", 'Int'>
    readonly obrigatoria: FieldRef<"Pergunta", 'Boolean'>
    readonly subPergunta: FieldRef<"Pergunta", 'Boolean'>
    readonly tipoPergunta: FieldRef<"Pergunta", 'TipoPergunta'>
    readonly createdAt: FieldRef<"Pergunta", 'DateTime'>
    readonly updatedAt: FieldRef<"Pergunta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pergunta findUnique
   */
  export type PerguntaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta findUniqueOrThrow
   */
  export type PerguntaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta findFirst
   */
  export type PerguntaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perguntas.
     */
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta findFirstOrThrow
   */
  export type PerguntaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Pergunta to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perguntas.
     */
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta findMany
   */
  export type PerguntaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter, which Perguntas to fetch.
     */
    where?: PerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perguntas to fetch.
     */
    orderBy?: PerguntaOrderByWithRelationInput | PerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perguntas.
     */
    cursor?: PerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perguntas.
     */
    skip?: number
    distinct?: PerguntaScalarFieldEnum | PerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta create
   */
  export type PerguntaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pergunta.
     */
    data: XOR<PerguntaCreateInput, PerguntaUncheckedCreateInput>
  }

  /**
   * Pergunta createMany
   */
  export type PerguntaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perguntas.
     */
    data: PerguntaCreateManyInput | PerguntaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pergunta createManyAndReturn
   */
  export type PerguntaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * The data used to create many Perguntas.
     */
    data: PerguntaCreateManyInput | PerguntaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pergunta update
   */
  export type PerguntaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pergunta.
     */
    data: XOR<PerguntaUpdateInput, PerguntaUncheckedUpdateInput>
    /**
     * Choose, which Pergunta to update.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta updateMany
   */
  export type PerguntaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perguntas.
     */
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyInput>
    /**
     * Filter which Perguntas to update
     */
    where?: PerguntaWhereInput
    /**
     * Limit how many Perguntas to update.
     */
    limit?: number
  }

  /**
   * Pergunta updateManyAndReturn
   */
  export type PerguntaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * The data used to update Perguntas.
     */
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyInput>
    /**
     * Filter which Perguntas to update
     */
    where?: PerguntaWhereInput
    /**
     * Limit how many Perguntas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pergunta upsert
   */
  export type PerguntaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pergunta to update in case it exists.
     */
    where: PerguntaWhereUniqueInput
    /**
     * In case the Pergunta found by the `where` argument doesn't exist, create a new Pergunta with this data.
     */
    create: XOR<PerguntaCreateInput, PerguntaUncheckedCreateInput>
    /**
     * In case the Pergunta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerguntaUpdateInput, PerguntaUncheckedUpdateInput>
  }

  /**
   * Pergunta delete
   */
  export type PerguntaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
    /**
     * Filter which Pergunta to delete.
     */
    where: PerguntaWhereUniqueInput
  }

  /**
   * Pergunta deleteMany
   */
  export type PerguntaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perguntas to delete
     */
    where?: PerguntaWhereInput
    /**
     * Limit how many Perguntas to delete.
     */
    limit?: number
  }

  /**
   * Pergunta.respostas
   */
  export type Pergunta$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    where?: OpcaoRespostaPerguntaWhereInput
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpcaoRespostaPerguntaScalarFieldEnum | OpcaoRespostaPerguntaScalarFieldEnum[]
  }

  /**
   * Pergunta.opcoesRespostas
   */
  export type Pergunta$opcoesRespostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    where?: OpcaoRespostaWhereInput
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    cursor?: OpcaoRespostaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * Pergunta.condicoesDestino
   */
  export type Pergunta$condicoesDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    where?: PerguntaCondicaoWhereInput
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    cursor?: PerguntaCondicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerguntaCondicaoScalarFieldEnum | PerguntaCondicaoScalarFieldEnum[]
  }

  /**
   * Pergunta.condicoesOrigem
   */
  export type Pergunta$condicoesOrigemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    where?: PerguntaCondicaoWhereInput
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    cursor?: PerguntaCondicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerguntaCondicaoScalarFieldEnum | PerguntaCondicaoScalarFieldEnum[]
  }

  /**
   * Pergunta without action
   */
  export type PerguntaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pergunta
     */
    select?: PerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pergunta
     */
    omit?: PerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaInclude<ExtArgs> | null
  }


  /**
   * Model OpcaoResposta
   */

  export type AggregateOpcaoResposta = {
    _count: OpcaoRespostaCountAggregateOutputType | null
    _avg: OpcaoRespostaAvgAggregateOutputType | null
    _sum: OpcaoRespostaSumAggregateOutputType | null
    _min: OpcaoRespostaMinAggregateOutputType | null
    _max: OpcaoRespostaMaxAggregateOutputType | null
  }

  export type OpcaoRespostaAvgAggregateOutputType = {
    ordem: number | null
  }

  export type OpcaoRespostaSumAggregateOutputType = {
    ordem: number | null
  }

  export type OpcaoRespostaMinAggregateOutputType = {
    id: string | null
    idPergunta: string | null
    resposta: string | null
    ordem: number | null
    respostaAberta: boolean | null
    createdAt: Date | null
  }

  export type OpcaoRespostaMaxAggregateOutputType = {
    id: string | null
    idPergunta: string | null
    resposta: string | null
    ordem: number | null
    respostaAberta: boolean | null
    createdAt: Date | null
  }

  export type OpcaoRespostaCountAggregateOutputType = {
    id: number
    idPergunta: number
    resposta: number
    ordem: number
    respostaAberta: number
    createdAt: number
    _all: number
  }


  export type OpcaoRespostaAvgAggregateInputType = {
    ordem?: true
  }

  export type OpcaoRespostaSumAggregateInputType = {
    ordem?: true
  }

  export type OpcaoRespostaMinAggregateInputType = {
    id?: true
    idPergunta?: true
    resposta?: true
    ordem?: true
    respostaAberta?: true
    createdAt?: true
  }

  export type OpcaoRespostaMaxAggregateInputType = {
    id?: true
    idPergunta?: true
    resposta?: true
    ordem?: true
    respostaAberta?: true
    createdAt?: true
  }

  export type OpcaoRespostaCountAggregateInputType = {
    id?: true
    idPergunta?: true
    resposta?: true
    ordem?: true
    respostaAberta?: true
    createdAt?: true
    _all?: true
  }

  export type OpcaoRespostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpcaoResposta to aggregate.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpcaoRespostas
    **/
    _count?: true | OpcaoRespostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpcaoRespostaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpcaoRespostaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpcaoRespostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpcaoRespostaMaxAggregateInputType
  }

  export type GetOpcaoRespostaAggregateType<T extends OpcaoRespostaAggregateArgs> = {
        [P in keyof T & keyof AggregateOpcaoResposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpcaoResposta[P]>
      : GetScalarType<T[P], AggregateOpcaoResposta[P]>
  }




  export type OpcaoRespostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaWhereInput
    orderBy?: OpcaoRespostaOrderByWithAggregationInput | OpcaoRespostaOrderByWithAggregationInput[]
    by: OpcaoRespostaScalarFieldEnum[] | OpcaoRespostaScalarFieldEnum
    having?: OpcaoRespostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpcaoRespostaCountAggregateInputType | true
    _avg?: OpcaoRespostaAvgAggregateInputType
    _sum?: OpcaoRespostaSumAggregateInputType
    _min?: OpcaoRespostaMinAggregateInputType
    _max?: OpcaoRespostaMaxAggregateInputType
  }

  export type OpcaoRespostaGroupByOutputType = {
    id: string
    idPergunta: string
    resposta: string
    ordem: number
    respostaAberta: boolean
    createdAt: Date
    _count: OpcaoRespostaCountAggregateOutputType | null
    _avg: OpcaoRespostaAvgAggregateOutputType | null
    _sum: OpcaoRespostaSumAggregateOutputType | null
    _min: OpcaoRespostaMinAggregateOutputType | null
    _max: OpcaoRespostaMaxAggregateOutputType | null
  }

  type GetOpcaoRespostaGroupByPayload<T extends OpcaoRespostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpcaoRespostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpcaoRespostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpcaoRespostaGroupByOutputType[P]>
            : GetScalarType<T[P], OpcaoRespostaGroupByOutputType[P]>
        }
      >
    >


  export type OpcaoRespostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPergunta?: boolean
    resposta?: boolean
    ordem?: boolean
    respostaAberta?: boolean
    createdAt?: boolean
    respostas?: boolean | OpcaoResposta$respostasArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
    condicoes?: boolean | OpcaoResposta$condicoesArgs<ExtArgs>
    _count?: boolean | OpcaoRespostaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoResposta"]>

  export type OpcaoRespostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPergunta?: boolean
    resposta?: boolean
    ordem?: boolean
    respostaAberta?: boolean
    createdAt?: boolean
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoResposta"]>

  export type OpcaoRespostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPergunta?: boolean
    resposta?: boolean
    ordem?: boolean
    respostaAberta?: boolean
    createdAt?: boolean
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoResposta"]>

  export type OpcaoRespostaSelectScalar = {
    id?: boolean
    idPergunta?: boolean
    resposta?: boolean
    ordem?: boolean
    respostaAberta?: boolean
    createdAt?: boolean
  }

  export type OpcaoRespostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPergunta" | "resposta" | "ordem" | "respostaAberta" | "createdAt", ExtArgs["result"]["opcaoResposta"]>
  export type OpcaoRespostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas?: boolean | OpcaoResposta$respostasArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
    condicoes?: boolean | OpcaoResposta$condicoesArgs<ExtArgs>
    _count?: boolean | OpcaoRespostaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpcaoRespostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type OpcaoRespostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }

  export type $OpcaoRespostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpcaoResposta"
    objects: {
      respostas: Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>[]
      pergunta: Prisma.$PerguntaPayload<ExtArgs>
      condicoes: Prisma.$PerguntaCondicaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idPergunta: string
      resposta: string
      ordem: number
      respostaAberta: boolean
      createdAt: Date
    }, ExtArgs["result"]["opcaoResposta"]>
    composites: {}
  }

  type OpcaoRespostaGetPayload<S extends boolean | null | undefined | OpcaoRespostaDefaultArgs> = $Result.GetResult<Prisma.$OpcaoRespostaPayload, S>

  type OpcaoRespostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpcaoRespostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpcaoRespostaCountAggregateInputType | true
    }

  export interface OpcaoRespostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpcaoResposta'], meta: { name: 'OpcaoResposta' } }
    /**
     * Find zero or one OpcaoResposta that matches the filter.
     * @param {OpcaoRespostaFindUniqueArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpcaoRespostaFindUniqueArgs>(args: SelectSubset<T, OpcaoRespostaFindUniqueArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpcaoResposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpcaoRespostaFindUniqueOrThrowArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpcaoRespostaFindUniqueOrThrowArgs>(args: SelectSubset<T, OpcaoRespostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpcaoResposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaFindFirstArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpcaoRespostaFindFirstArgs>(args?: SelectSubset<T, OpcaoRespostaFindFirstArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpcaoResposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaFindFirstOrThrowArgs} args - Arguments to find a OpcaoResposta
     * @example
     * // Get one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpcaoRespostaFindFirstOrThrowArgs>(args?: SelectSubset<T, OpcaoRespostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpcaoRespostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpcaoRespostas
     * const opcaoRespostas = await prisma.opcaoResposta.findMany()
     * 
     * // Get first 10 OpcaoRespostas
     * const opcaoRespostas = await prisma.opcaoResposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opcaoRespostaWithIdOnly = await prisma.opcaoResposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpcaoRespostaFindManyArgs>(args?: SelectSubset<T, OpcaoRespostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpcaoResposta.
     * @param {OpcaoRespostaCreateArgs} args - Arguments to create a OpcaoResposta.
     * @example
     * // Create one OpcaoResposta
     * const OpcaoResposta = await prisma.opcaoResposta.create({
     *   data: {
     *     // ... data to create a OpcaoResposta
     *   }
     * })
     * 
     */
    create<T extends OpcaoRespostaCreateArgs>(args: SelectSubset<T, OpcaoRespostaCreateArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpcaoRespostas.
     * @param {OpcaoRespostaCreateManyArgs} args - Arguments to create many OpcaoRespostas.
     * @example
     * // Create many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpcaoRespostaCreateManyArgs>(args?: SelectSubset<T, OpcaoRespostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpcaoRespostas and returns the data saved in the database.
     * @param {OpcaoRespostaCreateManyAndReturnArgs} args - Arguments to create many OpcaoRespostas.
     * @example
     * // Create many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpcaoRespostas and only return the `id`
     * const opcaoRespostaWithIdOnly = await prisma.opcaoResposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpcaoRespostaCreateManyAndReturnArgs>(args?: SelectSubset<T, OpcaoRespostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpcaoResposta.
     * @param {OpcaoRespostaDeleteArgs} args - Arguments to delete one OpcaoResposta.
     * @example
     * // Delete one OpcaoResposta
     * const OpcaoResposta = await prisma.opcaoResposta.delete({
     *   where: {
     *     // ... filter to delete one OpcaoResposta
     *   }
     * })
     * 
     */
    delete<T extends OpcaoRespostaDeleteArgs>(args: SelectSubset<T, OpcaoRespostaDeleteArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpcaoResposta.
     * @param {OpcaoRespostaUpdateArgs} args - Arguments to update one OpcaoResposta.
     * @example
     * // Update one OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpcaoRespostaUpdateArgs>(args: SelectSubset<T, OpcaoRespostaUpdateArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpcaoRespostas.
     * @param {OpcaoRespostaDeleteManyArgs} args - Arguments to filter OpcaoRespostas to delete.
     * @example
     * // Delete a few OpcaoRespostas
     * const { count } = await prisma.opcaoResposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpcaoRespostaDeleteManyArgs>(args?: SelectSubset<T, OpcaoRespostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpcaoRespostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpcaoRespostaUpdateManyArgs>(args: SelectSubset<T, OpcaoRespostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpcaoRespostas and returns the data updated in the database.
     * @param {OpcaoRespostaUpdateManyAndReturnArgs} args - Arguments to update many OpcaoRespostas.
     * @example
     * // Update many OpcaoRespostas
     * const opcaoResposta = await prisma.opcaoResposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpcaoRespostas and only return the `id`
     * const opcaoRespostaWithIdOnly = await prisma.opcaoResposta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpcaoRespostaUpdateManyAndReturnArgs>(args: SelectSubset<T, OpcaoRespostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpcaoResposta.
     * @param {OpcaoRespostaUpsertArgs} args - Arguments to update or create a OpcaoResposta.
     * @example
     * // Update or create a OpcaoResposta
     * const opcaoResposta = await prisma.opcaoResposta.upsert({
     *   create: {
     *     // ... data to create a OpcaoResposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpcaoResposta we want to update
     *   }
     * })
     */
    upsert<T extends OpcaoRespostaUpsertArgs>(args: SelectSubset<T, OpcaoRespostaUpsertArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpcaoRespostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaCountArgs} args - Arguments to filter OpcaoRespostas to count.
     * @example
     * // Count the number of OpcaoRespostas
     * const count = await prisma.opcaoResposta.count({
     *   where: {
     *     // ... the filter for the OpcaoRespostas we want to count
     *   }
     * })
    **/
    count<T extends OpcaoRespostaCountArgs>(
      args?: Subset<T, OpcaoRespostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpcaoRespostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpcaoResposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpcaoRespostaAggregateArgs>(args: Subset<T, OpcaoRespostaAggregateArgs>): Prisma.PrismaPromise<GetOpcaoRespostaAggregateType<T>>

    /**
     * Group by OpcaoResposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaGroupByArgs} args - Group by arguments.
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
      T extends OpcaoRespostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpcaoRespostaGroupByArgs['orderBy'] }
        : { orderBy?: OpcaoRespostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpcaoRespostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpcaoRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpcaoResposta model
   */
  readonly fields: OpcaoRespostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpcaoResposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpcaoRespostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respostas<T extends OpcaoResposta$respostasArgs<ExtArgs> = {}>(args?: Subset<T, OpcaoResposta$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pergunta<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    condicoes<T extends OpcaoResposta$condicoesArgs<ExtArgs> = {}>(args?: Subset<T, OpcaoResposta$condicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OpcaoResposta model
   */
  interface OpcaoRespostaFieldRefs {
    readonly id: FieldRef<"OpcaoResposta", 'String'>
    readonly idPergunta: FieldRef<"OpcaoResposta", 'String'>
    readonly resposta: FieldRef<"OpcaoResposta", 'String'>
    readonly ordem: FieldRef<"OpcaoResposta", 'Int'>
    readonly respostaAberta: FieldRef<"OpcaoResposta", 'Boolean'>
    readonly createdAt: FieldRef<"OpcaoResposta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OpcaoResposta findUnique
   */
  export type OpcaoRespostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta findUniqueOrThrow
   */
  export type OpcaoRespostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta findFirst
   */
  export type OpcaoRespostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpcaoRespostas.
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpcaoRespostas.
     */
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta findFirstOrThrow
   */
  export type OpcaoRespostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoResposta to fetch.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpcaoRespostas.
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpcaoRespostas.
     */
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta findMany
   */
  export type OpcaoRespostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostas to fetch.
     */
    where?: OpcaoRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostas to fetch.
     */
    orderBy?: OpcaoRespostaOrderByWithRelationInput | OpcaoRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpcaoRespostas.
     */
    cursor?: OpcaoRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostas.
     */
    skip?: number
    distinct?: OpcaoRespostaScalarFieldEnum | OpcaoRespostaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta create
   */
  export type OpcaoRespostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * The data needed to create a OpcaoResposta.
     */
    data: XOR<OpcaoRespostaCreateInput, OpcaoRespostaUncheckedCreateInput>
  }

  /**
   * OpcaoResposta createMany
   */
  export type OpcaoRespostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpcaoRespostas.
     */
    data: OpcaoRespostaCreateManyInput | OpcaoRespostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpcaoResposta createManyAndReturn
   */
  export type OpcaoRespostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * The data used to create many OpcaoRespostas.
     */
    data: OpcaoRespostaCreateManyInput | OpcaoRespostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpcaoResposta update
   */
  export type OpcaoRespostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * The data needed to update a OpcaoResposta.
     */
    data: XOR<OpcaoRespostaUpdateInput, OpcaoRespostaUncheckedUpdateInput>
    /**
     * Choose, which OpcaoResposta to update.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta updateMany
   */
  export type OpcaoRespostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpcaoRespostas.
     */
    data: XOR<OpcaoRespostaUpdateManyMutationInput, OpcaoRespostaUncheckedUpdateManyInput>
    /**
     * Filter which OpcaoRespostas to update
     */
    where?: OpcaoRespostaWhereInput
    /**
     * Limit how many OpcaoRespostas to update.
     */
    limit?: number
  }

  /**
   * OpcaoResposta updateManyAndReturn
   */
  export type OpcaoRespostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * The data used to update OpcaoRespostas.
     */
    data: XOR<OpcaoRespostaUpdateManyMutationInput, OpcaoRespostaUncheckedUpdateManyInput>
    /**
     * Filter which OpcaoRespostas to update
     */
    where?: OpcaoRespostaWhereInput
    /**
     * Limit how many OpcaoRespostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpcaoResposta upsert
   */
  export type OpcaoRespostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * The filter to search for the OpcaoResposta to update in case it exists.
     */
    where: OpcaoRespostaWhereUniqueInput
    /**
     * In case the OpcaoResposta found by the `where` argument doesn't exist, create a new OpcaoResposta with this data.
     */
    create: XOR<OpcaoRespostaCreateInput, OpcaoRespostaUncheckedCreateInput>
    /**
     * In case the OpcaoResposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpcaoRespostaUpdateInput, OpcaoRespostaUncheckedUpdateInput>
  }

  /**
   * OpcaoResposta delete
   */
  export type OpcaoRespostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    /**
     * Filter which OpcaoResposta to delete.
     */
    where: OpcaoRespostaWhereUniqueInput
  }

  /**
   * OpcaoResposta deleteMany
   */
  export type OpcaoRespostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpcaoRespostas to delete
     */
    where?: OpcaoRespostaWhereInput
    /**
     * Limit how many OpcaoRespostas to delete.
     */
    limit?: number
  }

  /**
   * OpcaoResposta.respostas
   */
  export type OpcaoResposta$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    where?: OpcaoRespostaPerguntaWhereInput
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpcaoRespostaPerguntaScalarFieldEnum | OpcaoRespostaPerguntaScalarFieldEnum[]
  }

  /**
   * OpcaoResposta.condicoes
   */
  export type OpcaoResposta$condicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    where?: PerguntaCondicaoWhereInput
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    cursor?: PerguntaCondicaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerguntaCondicaoScalarFieldEnum | PerguntaCondicaoScalarFieldEnum[]
  }

  /**
   * OpcaoResposta without action
   */
  export type OpcaoRespostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
  }


  /**
   * Model FormularioResposta
   */

  export type AggregateFormularioResposta = {
    _count: FormularioRespostaCountAggregateOutputType | null
    _min: FormularioRespostaMinAggregateOutputType | null
    _max: FormularioRespostaMaxAggregateOutputType | null
  }

  export type FormularioRespostaMinAggregateOutputType = {
    id: string | null
    formularioId: string | null
    createdAt: Date | null
  }

  export type FormularioRespostaMaxAggregateOutputType = {
    id: string | null
    formularioId: string | null
    createdAt: Date | null
  }

  export type FormularioRespostaCountAggregateOutputType = {
    id: number
    formularioId: number
    createdAt: number
    _all: number
  }


  export type FormularioRespostaMinAggregateInputType = {
    id?: true
    formularioId?: true
    createdAt?: true
  }

  export type FormularioRespostaMaxAggregateInputType = {
    id?: true
    formularioId?: true
    createdAt?: true
  }

  export type FormularioRespostaCountAggregateInputType = {
    id?: true
    formularioId?: true
    createdAt?: true
    _all?: true
  }

  export type FormularioRespostaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormularioResposta to aggregate.
     */
    where?: FormularioRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioRespostas to fetch.
     */
    orderBy?: FormularioRespostaOrderByWithRelationInput | FormularioRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormularioRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormularioRespostas
    **/
    _count?: true | FormularioRespostaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormularioRespostaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormularioRespostaMaxAggregateInputType
  }

  export type GetFormularioRespostaAggregateType<T extends FormularioRespostaAggregateArgs> = {
        [P in keyof T & keyof AggregateFormularioResposta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormularioResposta[P]>
      : GetScalarType<T[P], AggregateFormularioResposta[P]>
  }




  export type FormularioRespostaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormularioRespostaWhereInput
    orderBy?: FormularioRespostaOrderByWithAggregationInput | FormularioRespostaOrderByWithAggregationInput[]
    by: FormularioRespostaScalarFieldEnum[] | FormularioRespostaScalarFieldEnum
    having?: FormularioRespostaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormularioRespostaCountAggregateInputType | true
    _min?: FormularioRespostaMinAggregateInputType
    _max?: FormularioRespostaMaxAggregateInputType
  }

  export type FormularioRespostaGroupByOutputType = {
    id: string
    formularioId: string
    createdAt: Date
    _count: FormularioRespostaCountAggregateOutputType | null
    _min: FormularioRespostaMinAggregateOutputType | null
    _max: FormularioRespostaMaxAggregateOutputType | null
  }

  type GetFormularioRespostaGroupByPayload<T extends FormularioRespostaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormularioRespostaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormularioRespostaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormularioRespostaGroupByOutputType[P]>
            : GetScalarType<T[P], FormularioRespostaGroupByOutputType[P]>
        }
      >
    >


  export type FormularioRespostaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formularioId?: boolean
    createdAt?: boolean
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
    respostas?: boolean | FormularioResposta$respostasArgs<ExtArgs>
    _count?: boolean | FormularioRespostaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formularioResposta"]>

  export type FormularioRespostaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formularioId?: boolean
    createdAt?: boolean
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formularioResposta"]>

  export type FormularioRespostaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formularioId?: boolean
    createdAt?: boolean
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formularioResposta"]>

  export type FormularioRespostaSelectScalar = {
    id?: boolean
    formularioId?: boolean
    createdAt?: boolean
  }

  export type FormularioRespostaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formularioId" | "createdAt", ExtArgs["result"]["formularioResposta"]>
  export type FormularioRespostaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
    respostas?: boolean | FormularioResposta$respostasArgs<ExtArgs>
    _count?: boolean | FormularioRespostaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormularioRespostaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }
  export type FormularioRespostaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formulario?: boolean | FormularioDefaultArgs<ExtArgs>
  }

  export type $FormularioRespostaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormularioResposta"
    objects: {
      formulario: Prisma.$FormularioPayload<ExtArgs>
      respostas: Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formularioId: string
      createdAt: Date
    }, ExtArgs["result"]["formularioResposta"]>
    composites: {}
  }

  type FormularioRespostaGetPayload<S extends boolean | null | undefined | FormularioRespostaDefaultArgs> = $Result.GetResult<Prisma.$FormularioRespostaPayload, S>

  type FormularioRespostaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormularioRespostaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormularioRespostaCountAggregateInputType | true
    }

  export interface FormularioRespostaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormularioResposta'], meta: { name: 'FormularioResposta' } }
    /**
     * Find zero or one FormularioResposta that matches the filter.
     * @param {FormularioRespostaFindUniqueArgs} args - Arguments to find a FormularioResposta
     * @example
     * // Get one FormularioResposta
     * const formularioResposta = await prisma.formularioResposta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormularioRespostaFindUniqueArgs>(args: SelectSubset<T, FormularioRespostaFindUniqueArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormularioResposta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormularioRespostaFindUniqueOrThrowArgs} args - Arguments to find a FormularioResposta
     * @example
     * // Get one FormularioResposta
     * const formularioResposta = await prisma.formularioResposta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormularioRespostaFindUniqueOrThrowArgs>(args: SelectSubset<T, FormularioRespostaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormularioResposta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaFindFirstArgs} args - Arguments to find a FormularioResposta
     * @example
     * // Get one FormularioResposta
     * const formularioResposta = await prisma.formularioResposta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormularioRespostaFindFirstArgs>(args?: SelectSubset<T, FormularioRespostaFindFirstArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormularioResposta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaFindFirstOrThrowArgs} args - Arguments to find a FormularioResposta
     * @example
     * // Get one FormularioResposta
     * const formularioResposta = await prisma.formularioResposta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormularioRespostaFindFirstOrThrowArgs>(args?: SelectSubset<T, FormularioRespostaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormularioRespostas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormularioRespostas
     * const formularioRespostas = await prisma.formularioResposta.findMany()
     * 
     * // Get first 10 FormularioRespostas
     * const formularioRespostas = await prisma.formularioResposta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formularioRespostaWithIdOnly = await prisma.formularioResposta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormularioRespostaFindManyArgs>(args?: SelectSubset<T, FormularioRespostaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormularioResposta.
     * @param {FormularioRespostaCreateArgs} args - Arguments to create a FormularioResposta.
     * @example
     * // Create one FormularioResposta
     * const FormularioResposta = await prisma.formularioResposta.create({
     *   data: {
     *     // ... data to create a FormularioResposta
     *   }
     * })
     * 
     */
    create<T extends FormularioRespostaCreateArgs>(args: SelectSubset<T, FormularioRespostaCreateArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormularioRespostas.
     * @param {FormularioRespostaCreateManyArgs} args - Arguments to create many FormularioRespostas.
     * @example
     * // Create many FormularioRespostas
     * const formularioResposta = await prisma.formularioResposta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormularioRespostaCreateManyArgs>(args?: SelectSubset<T, FormularioRespostaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormularioRespostas and returns the data saved in the database.
     * @param {FormularioRespostaCreateManyAndReturnArgs} args - Arguments to create many FormularioRespostas.
     * @example
     * // Create many FormularioRespostas
     * const formularioResposta = await prisma.formularioResposta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormularioRespostas and only return the `id`
     * const formularioRespostaWithIdOnly = await prisma.formularioResposta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormularioRespostaCreateManyAndReturnArgs>(args?: SelectSubset<T, FormularioRespostaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormularioResposta.
     * @param {FormularioRespostaDeleteArgs} args - Arguments to delete one FormularioResposta.
     * @example
     * // Delete one FormularioResposta
     * const FormularioResposta = await prisma.formularioResposta.delete({
     *   where: {
     *     // ... filter to delete one FormularioResposta
     *   }
     * })
     * 
     */
    delete<T extends FormularioRespostaDeleteArgs>(args: SelectSubset<T, FormularioRespostaDeleteArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormularioResposta.
     * @param {FormularioRespostaUpdateArgs} args - Arguments to update one FormularioResposta.
     * @example
     * // Update one FormularioResposta
     * const formularioResposta = await prisma.formularioResposta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormularioRespostaUpdateArgs>(args: SelectSubset<T, FormularioRespostaUpdateArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormularioRespostas.
     * @param {FormularioRespostaDeleteManyArgs} args - Arguments to filter FormularioRespostas to delete.
     * @example
     * // Delete a few FormularioRespostas
     * const { count } = await prisma.formularioResposta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormularioRespostaDeleteManyArgs>(args?: SelectSubset<T, FormularioRespostaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormularioRespostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormularioRespostas
     * const formularioResposta = await prisma.formularioResposta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormularioRespostaUpdateManyArgs>(args: SelectSubset<T, FormularioRespostaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormularioRespostas and returns the data updated in the database.
     * @param {FormularioRespostaUpdateManyAndReturnArgs} args - Arguments to update many FormularioRespostas.
     * @example
     * // Update many FormularioRespostas
     * const formularioResposta = await prisma.formularioResposta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormularioRespostas and only return the `id`
     * const formularioRespostaWithIdOnly = await prisma.formularioResposta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormularioRespostaUpdateManyAndReturnArgs>(args: SelectSubset<T, FormularioRespostaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormularioResposta.
     * @param {FormularioRespostaUpsertArgs} args - Arguments to update or create a FormularioResposta.
     * @example
     * // Update or create a FormularioResposta
     * const formularioResposta = await prisma.formularioResposta.upsert({
     *   create: {
     *     // ... data to create a FormularioResposta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormularioResposta we want to update
     *   }
     * })
     */
    upsert<T extends FormularioRespostaUpsertArgs>(args: SelectSubset<T, FormularioRespostaUpsertArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormularioRespostas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaCountArgs} args - Arguments to filter FormularioRespostas to count.
     * @example
     * // Count the number of FormularioRespostas
     * const count = await prisma.formularioResposta.count({
     *   where: {
     *     // ... the filter for the FormularioRespostas we want to count
     *   }
     * })
    **/
    count<T extends FormularioRespostaCountArgs>(
      args?: Subset<T, FormularioRespostaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormularioRespostaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormularioResposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormularioRespostaAggregateArgs>(args: Subset<T, FormularioRespostaAggregateArgs>): Prisma.PrismaPromise<GetFormularioRespostaAggregateType<T>>

    /**
     * Group by FormularioResposta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormularioRespostaGroupByArgs} args - Group by arguments.
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
      T extends FormularioRespostaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormularioRespostaGroupByArgs['orderBy'] }
        : { orderBy?: FormularioRespostaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormularioRespostaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormularioRespostaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormularioResposta model
   */
  readonly fields: FormularioRespostaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormularioResposta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormularioRespostaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formulario<T extends FormularioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormularioDefaultArgs<ExtArgs>>): Prisma__FormularioClient<$Result.GetResult<Prisma.$FormularioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    respostas<T extends FormularioResposta$respostasArgs<ExtArgs> = {}>(args?: Subset<T, FormularioResposta$respostasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FormularioResposta model
   */
  interface FormularioRespostaFieldRefs {
    readonly id: FieldRef<"FormularioResposta", 'String'>
    readonly formularioId: FieldRef<"FormularioResposta", 'String'>
    readonly createdAt: FieldRef<"FormularioResposta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormularioResposta findUnique
   */
  export type FormularioRespostaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * Filter, which FormularioResposta to fetch.
     */
    where: FormularioRespostaWhereUniqueInput
  }

  /**
   * FormularioResposta findUniqueOrThrow
   */
  export type FormularioRespostaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * Filter, which FormularioResposta to fetch.
     */
    where: FormularioRespostaWhereUniqueInput
  }

  /**
   * FormularioResposta findFirst
   */
  export type FormularioRespostaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * Filter, which FormularioResposta to fetch.
     */
    where?: FormularioRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioRespostas to fetch.
     */
    orderBy?: FormularioRespostaOrderByWithRelationInput | FormularioRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormularioRespostas.
     */
    cursor?: FormularioRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormularioRespostas.
     */
    distinct?: FormularioRespostaScalarFieldEnum | FormularioRespostaScalarFieldEnum[]
  }

  /**
   * FormularioResposta findFirstOrThrow
   */
  export type FormularioRespostaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * Filter, which FormularioResposta to fetch.
     */
    where?: FormularioRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioRespostas to fetch.
     */
    orderBy?: FormularioRespostaOrderByWithRelationInput | FormularioRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormularioRespostas.
     */
    cursor?: FormularioRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioRespostas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormularioRespostas.
     */
    distinct?: FormularioRespostaScalarFieldEnum | FormularioRespostaScalarFieldEnum[]
  }

  /**
   * FormularioResposta findMany
   */
  export type FormularioRespostaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * Filter, which FormularioRespostas to fetch.
     */
    where?: FormularioRespostaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormularioRespostas to fetch.
     */
    orderBy?: FormularioRespostaOrderByWithRelationInput | FormularioRespostaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormularioRespostas.
     */
    cursor?: FormularioRespostaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormularioRespostas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormularioRespostas.
     */
    skip?: number
    distinct?: FormularioRespostaScalarFieldEnum | FormularioRespostaScalarFieldEnum[]
  }

  /**
   * FormularioResposta create
   */
  export type FormularioRespostaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * The data needed to create a FormularioResposta.
     */
    data: XOR<FormularioRespostaCreateInput, FormularioRespostaUncheckedCreateInput>
  }

  /**
   * FormularioResposta createMany
   */
  export type FormularioRespostaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormularioRespostas.
     */
    data: FormularioRespostaCreateManyInput | FormularioRespostaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormularioResposta createManyAndReturn
   */
  export type FormularioRespostaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * The data used to create many FormularioRespostas.
     */
    data: FormularioRespostaCreateManyInput | FormularioRespostaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormularioResposta update
   */
  export type FormularioRespostaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * The data needed to update a FormularioResposta.
     */
    data: XOR<FormularioRespostaUpdateInput, FormularioRespostaUncheckedUpdateInput>
    /**
     * Choose, which FormularioResposta to update.
     */
    where: FormularioRespostaWhereUniqueInput
  }

  /**
   * FormularioResposta updateMany
   */
  export type FormularioRespostaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormularioRespostas.
     */
    data: XOR<FormularioRespostaUpdateManyMutationInput, FormularioRespostaUncheckedUpdateManyInput>
    /**
     * Filter which FormularioRespostas to update
     */
    where?: FormularioRespostaWhereInput
    /**
     * Limit how many FormularioRespostas to update.
     */
    limit?: number
  }

  /**
   * FormularioResposta updateManyAndReturn
   */
  export type FormularioRespostaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * The data used to update FormularioRespostas.
     */
    data: XOR<FormularioRespostaUpdateManyMutationInput, FormularioRespostaUncheckedUpdateManyInput>
    /**
     * Filter which FormularioRespostas to update
     */
    where?: FormularioRespostaWhereInput
    /**
     * Limit how many FormularioRespostas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormularioResposta upsert
   */
  export type FormularioRespostaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * The filter to search for the FormularioResposta to update in case it exists.
     */
    where: FormularioRespostaWhereUniqueInput
    /**
     * In case the FormularioResposta found by the `where` argument doesn't exist, create a new FormularioResposta with this data.
     */
    create: XOR<FormularioRespostaCreateInput, FormularioRespostaUncheckedCreateInput>
    /**
     * In case the FormularioResposta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormularioRespostaUpdateInput, FormularioRespostaUncheckedUpdateInput>
  }

  /**
   * FormularioResposta delete
   */
  export type FormularioRespostaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
    /**
     * Filter which FormularioResposta to delete.
     */
    where: FormularioRespostaWhereUniqueInput
  }

  /**
   * FormularioResposta deleteMany
   */
  export type FormularioRespostaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormularioRespostas to delete
     */
    where?: FormularioRespostaWhereInput
    /**
     * Limit how many FormularioRespostas to delete.
     */
    limit?: number
  }

  /**
   * FormularioResposta.respostas
   */
  export type FormularioResposta$respostasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    where?: OpcaoRespostaPerguntaWhereInput
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpcaoRespostaPerguntaScalarFieldEnum | OpcaoRespostaPerguntaScalarFieldEnum[]
  }

  /**
   * FormularioResposta without action
   */
  export type FormularioRespostaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormularioResposta
     */
    select?: FormularioRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormularioResposta
     */
    omit?: FormularioRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormularioRespostaInclude<ExtArgs> | null
  }


  /**
   * Model OpcaoRespostaPergunta
   */

  export type AggregateOpcaoRespostaPergunta = {
    _count: OpcaoRespostaPerguntaCountAggregateOutputType | null
    _avg: OpcaoRespostaPerguntaAvgAggregateOutputType | null
    _sum: OpcaoRespostaPerguntaSumAggregateOutputType | null
    _min: OpcaoRespostaPerguntaMinAggregateOutputType | null
    _max: OpcaoRespostaPerguntaMaxAggregateOutputType | null
  }

  export type OpcaoRespostaPerguntaAvgAggregateOutputType = {
    respostaNumerica: Decimal | null
  }

  export type OpcaoRespostaPerguntaSumAggregateOutputType = {
    respostaNumerica: Decimal | null
  }

  export type OpcaoRespostaPerguntaMinAggregateOutputType = {
    id: string | null
    idOpcaoResposta: string | null
    idPergunta: string | null
    respostaTexto: string | null
    respostaNumerica: Decimal | null
    respostaBooleana: boolean | null
    createdAt: Date | null
    idFormularioResposta: string | null
  }

  export type OpcaoRespostaPerguntaMaxAggregateOutputType = {
    id: string | null
    idOpcaoResposta: string | null
    idPergunta: string | null
    respostaTexto: string | null
    respostaNumerica: Decimal | null
    respostaBooleana: boolean | null
    createdAt: Date | null
    idFormularioResposta: string | null
  }

  export type OpcaoRespostaPerguntaCountAggregateOutputType = {
    id: number
    idOpcaoResposta: number
    idPergunta: number
    respostaTexto: number
    respostaNumerica: number
    respostaBooleana: number
    createdAt: number
    idFormularioResposta: number
    _all: number
  }


  export type OpcaoRespostaPerguntaAvgAggregateInputType = {
    respostaNumerica?: true
  }

  export type OpcaoRespostaPerguntaSumAggregateInputType = {
    respostaNumerica?: true
  }

  export type OpcaoRespostaPerguntaMinAggregateInputType = {
    id?: true
    idOpcaoResposta?: true
    idPergunta?: true
    respostaTexto?: true
    respostaNumerica?: true
    respostaBooleana?: true
    createdAt?: true
    idFormularioResposta?: true
  }

  export type OpcaoRespostaPerguntaMaxAggregateInputType = {
    id?: true
    idOpcaoResposta?: true
    idPergunta?: true
    respostaTexto?: true
    respostaNumerica?: true
    respostaBooleana?: true
    createdAt?: true
    idFormularioResposta?: true
  }

  export type OpcaoRespostaPerguntaCountAggregateInputType = {
    id?: true
    idOpcaoResposta?: true
    idPergunta?: true
    respostaTexto?: true
    respostaNumerica?: true
    respostaBooleana?: true
    createdAt?: true
    idFormularioResposta?: true
    _all?: true
  }

  export type OpcaoRespostaPerguntaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpcaoRespostaPergunta to aggregate.
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostaPerguntas to fetch.
     */
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostaPerguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostaPerguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpcaoRespostaPerguntas
    **/
    _count?: true | OpcaoRespostaPerguntaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpcaoRespostaPerguntaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpcaoRespostaPerguntaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpcaoRespostaPerguntaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpcaoRespostaPerguntaMaxAggregateInputType
  }

  export type GetOpcaoRespostaPerguntaAggregateType<T extends OpcaoRespostaPerguntaAggregateArgs> = {
        [P in keyof T & keyof AggregateOpcaoRespostaPergunta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpcaoRespostaPergunta[P]>
      : GetScalarType<T[P], AggregateOpcaoRespostaPergunta[P]>
  }




  export type OpcaoRespostaPerguntaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpcaoRespostaPerguntaWhereInput
    orderBy?: OpcaoRespostaPerguntaOrderByWithAggregationInput | OpcaoRespostaPerguntaOrderByWithAggregationInput[]
    by: OpcaoRespostaPerguntaScalarFieldEnum[] | OpcaoRespostaPerguntaScalarFieldEnum
    having?: OpcaoRespostaPerguntaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpcaoRespostaPerguntaCountAggregateInputType | true
    _avg?: OpcaoRespostaPerguntaAvgAggregateInputType
    _sum?: OpcaoRespostaPerguntaSumAggregateInputType
    _min?: OpcaoRespostaPerguntaMinAggregateInputType
    _max?: OpcaoRespostaPerguntaMaxAggregateInputType
  }

  export type OpcaoRespostaPerguntaGroupByOutputType = {
    id: string
    idOpcaoResposta: string | null
    idPergunta: string
    respostaTexto: string | null
    respostaNumerica: Decimal | null
    respostaBooleana: boolean | null
    createdAt: Date
    idFormularioResposta: string
    _count: OpcaoRespostaPerguntaCountAggregateOutputType | null
    _avg: OpcaoRespostaPerguntaAvgAggregateOutputType | null
    _sum: OpcaoRespostaPerguntaSumAggregateOutputType | null
    _min: OpcaoRespostaPerguntaMinAggregateOutputType | null
    _max: OpcaoRespostaPerguntaMaxAggregateOutputType | null
  }

  type GetOpcaoRespostaPerguntaGroupByPayload<T extends OpcaoRespostaPerguntaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpcaoRespostaPerguntaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpcaoRespostaPerguntaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpcaoRespostaPerguntaGroupByOutputType[P]>
            : GetScalarType<T[P], OpcaoRespostaPerguntaGroupByOutputType[P]>
        }
      >
    >


  export type OpcaoRespostaPerguntaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idOpcaoResposta?: boolean
    idPergunta?: boolean
    respostaTexto?: boolean
    respostaNumerica?: boolean
    respostaBooleana?: boolean
    createdAt?: boolean
    idFormularioResposta?: boolean
    formularioResposta?: boolean | FormularioRespostaDefaultArgs<ExtArgs>
    opcaoResposta?: boolean | OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoRespostaPergunta"]>

  export type OpcaoRespostaPerguntaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idOpcaoResposta?: boolean
    idPergunta?: boolean
    respostaTexto?: boolean
    respostaNumerica?: boolean
    respostaBooleana?: boolean
    createdAt?: boolean
    idFormularioResposta?: boolean
    formularioResposta?: boolean | FormularioRespostaDefaultArgs<ExtArgs>
    opcaoResposta?: boolean | OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoRespostaPergunta"]>

  export type OpcaoRespostaPerguntaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idOpcaoResposta?: boolean
    idPergunta?: boolean
    respostaTexto?: boolean
    respostaNumerica?: boolean
    respostaBooleana?: boolean
    createdAt?: boolean
    idFormularioResposta?: boolean
    formularioResposta?: boolean | FormularioRespostaDefaultArgs<ExtArgs>
    opcaoResposta?: boolean | OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opcaoRespostaPergunta"]>

  export type OpcaoRespostaPerguntaSelectScalar = {
    id?: boolean
    idOpcaoResposta?: boolean
    idPergunta?: boolean
    respostaTexto?: boolean
    respostaNumerica?: boolean
    respostaBooleana?: boolean
    createdAt?: boolean
    idFormularioResposta?: boolean
  }

  export type OpcaoRespostaPerguntaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idOpcaoResposta" | "idPergunta" | "respostaTexto" | "respostaNumerica" | "respostaBooleana" | "createdAt" | "idFormularioResposta", ExtArgs["result"]["opcaoRespostaPergunta"]>
  export type OpcaoRespostaPerguntaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formularioResposta?: boolean | FormularioRespostaDefaultArgs<ExtArgs>
    opcaoResposta?: boolean | OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type OpcaoRespostaPerguntaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formularioResposta?: boolean | FormularioRespostaDefaultArgs<ExtArgs>
    opcaoResposta?: boolean | OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type OpcaoRespostaPerguntaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formularioResposta?: boolean | FormularioRespostaDefaultArgs<ExtArgs>
    opcaoResposta?: boolean | OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>
    pergunta?: boolean | PerguntaDefaultArgs<ExtArgs>
  }

  export type $OpcaoRespostaPerguntaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpcaoRespostaPergunta"
    objects: {
      formularioResposta: Prisma.$FormularioRespostaPayload<ExtArgs>
      opcaoResposta: Prisma.$OpcaoRespostaPayload<ExtArgs> | null
      pergunta: Prisma.$PerguntaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idOpcaoResposta: string | null
      idPergunta: string
      respostaTexto: string | null
      respostaNumerica: Prisma.Decimal | null
      respostaBooleana: boolean | null
      createdAt: Date
      idFormularioResposta: string
    }, ExtArgs["result"]["opcaoRespostaPergunta"]>
    composites: {}
  }

  type OpcaoRespostaPerguntaGetPayload<S extends boolean | null | undefined | OpcaoRespostaPerguntaDefaultArgs> = $Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload, S>

  type OpcaoRespostaPerguntaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpcaoRespostaPerguntaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpcaoRespostaPerguntaCountAggregateInputType | true
    }

  export interface OpcaoRespostaPerguntaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpcaoRespostaPergunta'], meta: { name: 'OpcaoRespostaPergunta' } }
    /**
     * Find zero or one OpcaoRespostaPergunta that matches the filter.
     * @param {OpcaoRespostaPerguntaFindUniqueArgs} args - Arguments to find a OpcaoRespostaPergunta
     * @example
     * // Get one OpcaoRespostaPergunta
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpcaoRespostaPerguntaFindUniqueArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaFindUniqueArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OpcaoRespostaPergunta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpcaoRespostaPerguntaFindUniqueOrThrowArgs} args - Arguments to find a OpcaoRespostaPergunta
     * @example
     * // Get one OpcaoRespostaPergunta
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpcaoRespostaPerguntaFindUniqueOrThrowArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpcaoRespostaPergunta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaFindFirstArgs} args - Arguments to find a OpcaoRespostaPergunta
     * @example
     * // Get one OpcaoRespostaPergunta
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpcaoRespostaPerguntaFindFirstArgs>(args?: SelectSubset<T, OpcaoRespostaPerguntaFindFirstArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OpcaoRespostaPergunta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaFindFirstOrThrowArgs} args - Arguments to find a OpcaoRespostaPergunta
     * @example
     * // Get one OpcaoRespostaPergunta
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpcaoRespostaPerguntaFindFirstOrThrowArgs>(args?: SelectSubset<T, OpcaoRespostaPerguntaFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OpcaoRespostaPerguntas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpcaoRespostaPerguntas
     * const opcaoRespostaPerguntas = await prisma.opcaoRespostaPergunta.findMany()
     * 
     * // Get first 10 OpcaoRespostaPerguntas
     * const opcaoRespostaPerguntas = await prisma.opcaoRespostaPergunta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opcaoRespostaPerguntaWithIdOnly = await prisma.opcaoRespostaPergunta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpcaoRespostaPerguntaFindManyArgs>(args?: SelectSubset<T, OpcaoRespostaPerguntaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OpcaoRespostaPergunta.
     * @param {OpcaoRespostaPerguntaCreateArgs} args - Arguments to create a OpcaoRespostaPergunta.
     * @example
     * // Create one OpcaoRespostaPergunta
     * const OpcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.create({
     *   data: {
     *     // ... data to create a OpcaoRespostaPergunta
     *   }
     * })
     * 
     */
    create<T extends OpcaoRespostaPerguntaCreateArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaCreateArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OpcaoRespostaPerguntas.
     * @param {OpcaoRespostaPerguntaCreateManyArgs} args - Arguments to create many OpcaoRespostaPerguntas.
     * @example
     * // Create many OpcaoRespostaPerguntas
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpcaoRespostaPerguntaCreateManyArgs>(args?: SelectSubset<T, OpcaoRespostaPerguntaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OpcaoRespostaPerguntas and returns the data saved in the database.
     * @param {OpcaoRespostaPerguntaCreateManyAndReturnArgs} args - Arguments to create many OpcaoRespostaPerguntas.
     * @example
     * // Create many OpcaoRespostaPerguntas
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OpcaoRespostaPerguntas and only return the `id`
     * const opcaoRespostaPerguntaWithIdOnly = await prisma.opcaoRespostaPergunta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpcaoRespostaPerguntaCreateManyAndReturnArgs>(args?: SelectSubset<T, OpcaoRespostaPerguntaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OpcaoRespostaPergunta.
     * @param {OpcaoRespostaPerguntaDeleteArgs} args - Arguments to delete one OpcaoRespostaPergunta.
     * @example
     * // Delete one OpcaoRespostaPergunta
     * const OpcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.delete({
     *   where: {
     *     // ... filter to delete one OpcaoRespostaPergunta
     *   }
     * })
     * 
     */
    delete<T extends OpcaoRespostaPerguntaDeleteArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaDeleteArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OpcaoRespostaPergunta.
     * @param {OpcaoRespostaPerguntaUpdateArgs} args - Arguments to update one OpcaoRespostaPergunta.
     * @example
     * // Update one OpcaoRespostaPergunta
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpcaoRespostaPerguntaUpdateArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaUpdateArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OpcaoRespostaPerguntas.
     * @param {OpcaoRespostaPerguntaDeleteManyArgs} args - Arguments to filter OpcaoRespostaPerguntas to delete.
     * @example
     * // Delete a few OpcaoRespostaPerguntas
     * const { count } = await prisma.opcaoRespostaPergunta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpcaoRespostaPerguntaDeleteManyArgs>(args?: SelectSubset<T, OpcaoRespostaPerguntaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpcaoRespostaPerguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpcaoRespostaPerguntas
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpcaoRespostaPerguntaUpdateManyArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpcaoRespostaPerguntas and returns the data updated in the database.
     * @param {OpcaoRespostaPerguntaUpdateManyAndReturnArgs} args - Arguments to update many OpcaoRespostaPerguntas.
     * @example
     * // Update many OpcaoRespostaPerguntas
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OpcaoRespostaPerguntas and only return the `id`
     * const opcaoRespostaPerguntaWithIdOnly = await prisma.opcaoRespostaPergunta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpcaoRespostaPerguntaUpdateManyAndReturnArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OpcaoRespostaPergunta.
     * @param {OpcaoRespostaPerguntaUpsertArgs} args - Arguments to update or create a OpcaoRespostaPergunta.
     * @example
     * // Update or create a OpcaoRespostaPergunta
     * const opcaoRespostaPergunta = await prisma.opcaoRespostaPergunta.upsert({
     *   create: {
     *     // ... data to create a OpcaoRespostaPergunta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpcaoRespostaPergunta we want to update
     *   }
     * })
     */
    upsert<T extends OpcaoRespostaPerguntaUpsertArgs>(args: SelectSubset<T, OpcaoRespostaPerguntaUpsertArgs<ExtArgs>>): Prisma__OpcaoRespostaPerguntaClient<$Result.GetResult<Prisma.$OpcaoRespostaPerguntaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OpcaoRespostaPerguntas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaCountArgs} args - Arguments to filter OpcaoRespostaPerguntas to count.
     * @example
     * // Count the number of OpcaoRespostaPerguntas
     * const count = await prisma.opcaoRespostaPergunta.count({
     *   where: {
     *     // ... the filter for the OpcaoRespostaPerguntas we want to count
     *   }
     * })
    **/
    count<T extends OpcaoRespostaPerguntaCountArgs>(
      args?: Subset<T, OpcaoRespostaPerguntaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpcaoRespostaPerguntaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpcaoRespostaPergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OpcaoRespostaPerguntaAggregateArgs>(args: Subset<T, OpcaoRespostaPerguntaAggregateArgs>): Prisma.PrismaPromise<GetOpcaoRespostaPerguntaAggregateType<T>>

    /**
     * Group by OpcaoRespostaPergunta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpcaoRespostaPerguntaGroupByArgs} args - Group by arguments.
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
      T extends OpcaoRespostaPerguntaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpcaoRespostaPerguntaGroupByArgs['orderBy'] }
        : { orderBy?: OpcaoRespostaPerguntaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OpcaoRespostaPerguntaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpcaoRespostaPerguntaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpcaoRespostaPergunta model
   */
  readonly fields: OpcaoRespostaPerguntaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpcaoRespostaPergunta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpcaoRespostaPerguntaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formularioResposta<T extends FormularioRespostaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormularioRespostaDefaultArgs<ExtArgs>>): Prisma__FormularioRespostaClient<$Result.GetResult<Prisma.$FormularioRespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opcaoResposta<T extends OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs> = {}>(args?: Subset<T, OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pergunta<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OpcaoRespostaPergunta model
   */
  interface OpcaoRespostaPerguntaFieldRefs {
    readonly id: FieldRef<"OpcaoRespostaPergunta", 'String'>
    readonly idOpcaoResposta: FieldRef<"OpcaoRespostaPergunta", 'String'>
    readonly idPergunta: FieldRef<"OpcaoRespostaPergunta", 'String'>
    readonly respostaTexto: FieldRef<"OpcaoRespostaPergunta", 'String'>
    readonly respostaNumerica: FieldRef<"OpcaoRespostaPergunta", 'Decimal'>
    readonly respostaBooleana: FieldRef<"OpcaoRespostaPergunta", 'Boolean'>
    readonly createdAt: FieldRef<"OpcaoRespostaPergunta", 'DateTime'>
    readonly idFormularioResposta: FieldRef<"OpcaoRespostaPergunta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OpcaoRespostaPergunta findUnique
   */
  export type OpcaoRespostaPerguntaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostaPergunta to fetch.
     */
    where: OpcaoRespostaPerguntaWhereUniqueInput
  }

  /**
   * OpcaoRespostaPergunta findUniqueOrThrow
   */
  export type OpcaoRespostaPerguntaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostaPergunta to fetch.
     */
    where: OpcaoRespostaPerguntaWhereUniqueInput
  }

  /**
   * OpcaoRespostaPergunta findFirst
   */
  export type OpcaoRespostaPerguntaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostaPergunta to fetch.
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostaPerguntas to fetch.
     */
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpcaoRespostaPerguntas.
     */
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostaPerguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostaPerguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpcaoRespostaPerguntas.
     */
    distinct?: OpcaoRespostaPerguntaScalarFieldEnum | OpcaoRespostaPerguntaScalarFieldEnum[]
  }

  /**
   * OpcaoRespostaPergunta findFirstOrThrow
   */
  export type OpcaoRespostaPerguntaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostaPergunta to fetch.
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostaPerguntas to fetch.
     */
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpcaoRespostaPerguntas.
     */
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostaPerguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostaPerguntas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpcaoRespostaPerguntas.
     */
    distinct?: OpcaoRespostaPerguntaScalarFieldEnum | OpcaoRespostaPerguntaScalarFieldEnum[]
  }

  /**
   * OpcaoRespostaPergunta findMany
   */
  export type OpcaoRespostaPerguntaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * Filter, which OpcaoRespostaPerguntas to fetch.
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpcaoRespostaPerguntas to fetch.
     */
    orderBy?: OpcaoRespostaPerguntaOrderByWithRelationInput | OpcaoRespostaPerguntaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpcaoRespostaPerguntas.
     */
    cursor?: OpcaoRespostaPerguntaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpcaoRespostaPerguntas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpcaoRespostaPerguntas.
     */
    skip?: number
    distinct?: OpcaoRespostaPerguntaScalarFieldEnum | OpcaoRespostaPerguntaScalarFieldEnum[]
  }

  /**
   * OpcaoRespostaPergunta create
   */
  export type OpcaoRespostaPerguntaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * The data needed to create a OpcaoRespostaPergunta.
     */
    data: XOR<OpcaoRespostaPerguntaCreateInput, OpcaoRespostaPerguntaUncheckedCreateInput>
  }

  /**
   * OpcaoRespostaPergunta createMany
   */
  export type OpcaoRespostaPerguntaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpcaoRespostaPerguntas.
     */
    data: OpcaoRespostaPerguntaCreateManyInput | OpcaoRespostaPerguntaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OpcaoRespostaPergunta createManyAndReturn
   */
  export type OpcaoRespostaPerguntaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * The data used to create many OpcaoRespostaPerguntas.
     */
    data: OpcaoRespostaPerguntaCreateManyInput | OpcaoRespostaPerguntaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpcaoRespostaPergunta update
   */
  export type OpcaoRespostaPerguntaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * The data needed to update a OpcaoRespostaPergunta.
     */
    data: XOR<OpcaoRespostaPerguntaUpdateInput, OpcaoRespostaPerguntaUncheckedUpdateInput>
    /**
     * Choose, which OpcaoRespostaPergunta to update.
     */
    where: OpcaoRespostaPerguntaWhereUniqueInput
  }

  /**
   * OpcaoRespostaPergunta updateMany
   */
  export type OpcaoRespostaPerguntaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpcaoRespostaPerguntas.
     */
    data: XOR<OpcaoRespostaPerguntaUpdateManyMutationInput, OpcaoRespostaPerguntaUncheckedUpdateManyInput>
    /**
     * Filter which OpcaoRespostaPerguntas to update
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * Limit how many OpcaoRespostaPerguntas to update.
     */
    limit?: number
  }

  /**
   * OpcaoRespostaPergunta updateManyAndReturn
   */
  export type OpcaoRespostaPerguntaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * The data used to update OpcaoRespostaPerguntas.
     */
    data: XOR<OpcaoRespostaPerguntaUpdateManyMutationInput, OpcaoRespostaPerguntaUncheckedUpdateManyInput>
    /**
     * Filter which OpcaoRespostaPerguntas to update
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * Limit how many OpcaoRespostaPerguntas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OpcaoRespostaPergunta upsert
   */
  export type OpcaoRespostaPerguntaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * The filter to search for the OpcaoRespostaPergunta to update in case it exists.
     */
    where: OpcaoRespostaPerguntaWhereUniqueInput
    /**
     * In case the OpcaoRespostaPergunta found by the `where` argument doesn't exist, create a new OpcaoRespostaPergunta with this data.
     */
    create: XOR<OpcaoRespostaPerguntaCreateInput, OpcaoRespostaPerguntaUncheckedCreateInput>
    /**
     * In case the OpcaoRespostaPergunta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpcaoRespostaPerguntaUpdateInput, OpcaoRespostaPerguntaUncheckedUpdateInput>
  }

  /**
   * OpcaoRespostaPergunta delete
   */
  export type OpcaoRespostaPerguntaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
    /**
     * Filter which OpcaoRespostaPergunta to delete.
     */
    where: OpcaoRespostaPerguntaWhereUniqueInput
  }

  /**
   * OpcaoRespostaPergunta deleteMany
   */
  export type OpcaoRespostaPerguntaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpcaoRespostaPerguntas to delete
     */
    where?: OpcaoRespostaPerguntaWhereInput
    /**
     * Limit how many OpcaoRespostaPerguntas to delete.
     */
    limit?: number
  }

  /**
   * OpcaoRespostaPergunta.opcaoResposta
   */
  export type OpcaoRespostaPergunta$opcaoRespostaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    where?: OpcaoRespostaWhereInput
  }

  /**
   * OpcaoRespostaPergunta without action
   */
  export type OpcaoRespostaPerguntaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoRespostaPergunta
     */
    select?: OpcaoRespostaPerguntaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoRespostaPergunta
     */
    omit?: OpcaoRespostaPerguntaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaPerguntaInclude<ExtArgs> | null
  }


  /**
   * Model PerguntaCondicao
   */

  export type AggregatePerguntaCondicao = {
    _count: PerguntaCondicaoCountAggregateOutputType | null
    _min: PerguntaCondicaoMinAggregateOutputType | null
    _max: PerguntaCondicaoMaxAggregateOutputType | null
  }

  export type PerguntaCondicaoMinAggregateOutputType = {
    id: string | null
    perguntaOrigemId: string | null
    perguntaDestinoId: string | null
    opcaoRespostaId: string | null
    operador: $Enums.OperadorCondicao | null
    valorCondicao: string | null
    createdAt: Date | null
  }

  export type PerguntaCondicaoMaxAggregateOutputType = {
    id: string | null
    perguntaOrigemId: string | null
    perguntaDestinoId: string | null
    opcaoRespostaId: string | null
    operador: $Enums.OperadorCondicao | null
    valorCondicao: string | null
    createdAt: Date | null
  }

  export type PerguntaCondicaoCountAggregateOutputType = {
    id: number
    perguntaOrigemId: number
    perguntaDestinoId: number
    opcaoRespostaId: number
    operador: number
    valorCondicao: number
    createdAt: number
    _all: number
  }


  export type PerguntaCondicaoMinAggregateInputType = {
    id?: true
    perguntaOrigemId?: true
    perguntaDestinoId?: true
    opcaoRespostaId?: true
    operador?: true
    valorCondicao?: true
    createdAt?: true
  }

  export type PerguntaCondicaoMaxAggregateInputType = {
    id?: true
    perguntaOrigemId?: true
    perguntaDestinoId?: true
    opcaoRespostaId?: true
    operador?: true
    valorCondicao?: true
    createdAt?: true
  }

  export type PerguntaCondicaoCountAggregateInputType = {
    id?: true
    perguntaOrigemId?: true
    perguntaDestinoId?: true
    opcaoRespostaId?: true
    operador?: true
    valorCondicao?: true
    createdAt?: true
    _all?: true
  }

  export type PerguntaCondicaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerguntaCondicao to aggregate.
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerguntaCondicaos to fetch.
     */
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerguntaCondicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerguntaCondicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerguntaCondicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerguntaCondicaos
    **/
    _count?: true | PerguntaCondicaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerguntaCondicaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerguntaCondicaoMaxAggregateInputType
  }

  export type GetPerguntaCondicaoAggregateType<T extends PerguntaCondicaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePerguntaCondicao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerguntaCondicao[P]>
      : GetScalarType<T[P], AggregatePerguntaCondicao[P]>
  }




  export type PerguntaCondicaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerguntaCondicaoWhereInput
    orderBy?: PerguntaCondicaoOrderByWithAggregationInput | PerguntaCondicaoOrderByWithAggregationInput[]
    by: PerguntaCondicaoScalarFieldEnum[] | PerguntaCondicaoScalarFieldEnum
    having?: PerguntaCondicaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerguntaCondicaoCountAggregateInputType | true
    _min?: PerguntaCondicaoMinAggregateInputType
    _max?: PerguntaCondicaoMaxAggregateInputType
  }

  export type PerguntaCondicaoGroupByOutputType = {
    id: string
    perguntaOrigemId: string
    perguntaDestinoId: string
    opcaoRespostaId: string | null
    operador: $Enums.OperadorCondicao
    valorCondicao: string | null
    createdAt: Date
    _count: PerguntaCondicaoCountAggregateOutputType | null
    _min: PerguntaCondicaoMinAggregateOutputType | null
    _max: PerguntaCondicaoMaxAggregateOutputType | null
  }

  type GetPerguntaCondicaoGroupByPayload<T extends PerguntaCondicaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerguntaCondicaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerguntaCondicaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerguntaCondicaoGroupByOutputType[P]>
            : GetScalarType<T[P], PerguntaCondicaoGroupByOutputType[P]>
        }
      >
    >


  export type PerguntaCondicaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perguntaOrigemId?: boolean
    perguntaDestinoId?: boolean
    opcaoRespostaId?: boolean
    operador?: boolean
    valorCondicao?: boolean
    createdAt?: boolean
    opcaoResposta?: boolean | PerguntaCondicao$opcaoRespostaArgs<ExtArgs>
    perguntaDestino?: boolean | PerguntaDefaultArgs<ExtArgs>
    perguntaOrigem?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perguntaCondicao"]>

  export type PerguntaCondicaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perguntaOrigemId?: boolean
    perguntaDestinoId?: boolean
    opcaoRespostaId?: boolean
    operador?: boolean
    valorCondicao?: boolean
    createdAt?: boolean
    opcaoResposta?: boolean | PerguntaCondicao$opcaoRespostaArgs<ExtArgs>
    perguntaDestino?: boolean | PerguntaDefaultArgs<ExtArgs>
    perguntaOrigem?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perguntaCondicao"]>

  export type PerguntaCondicaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perguntaOrigemId?: boolean
    perguntaDestinoId?: boolean
    opcaoRespostaId?: boolean
    operador?: boolean
    valorCondicao?: boolean
    createdAt?: boolean
    opcaoResposta?: boolean | PerguntaCondicao$opcaoRespostaArgs<ExtArgs>
    perguntaDestino?: boolean | PerguntaDefaultArgs<ExtArgs>
    perguntaOrigem?: boolean | PerguntaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perguntaCondicao"]>

  export type PerguntaCondicaoSelectScalar = {
    id?: boolean
    perguntaOrigemId?: boolean
    perguntaDestinoId?: boolean
    opcaoRespostaId?: boolean
    operador?: boolean
    valorCondicao?: boolean
    createdAt?: boolean
  }

  export type PerguntaCondicaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "perguntaOrigemId" | "perguntaDestinoId" | "opcaoRespostaId" | "operador" | "valorCondicao" | "createdAt", ExtArgs["result"]["perguntaCondicao"]>
  export type PerguntaCondicaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opcaoResposta?: boolean | PerguntaCondicao$opcaoRespostaArgs<ExtArgs>
    perguntaDestino?: boolean | PerguntaDefaultArgs<ExtArgs>
    perguntaOrigem?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type PerguntaCondicaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opcaoResposta?: boolean | PerguntaCondicao$opcaoRespostaArgs<ExtArgs>
    perguntaDestino?: boolean | PerguntaDefaultArgs<ExtArgs>
    perguntaOrigem?: boolean | PerguntaDefaultArgs<ExtArgs>
  }
  export type PerguntaCondicaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opcaoResposta?: boolean | PerguntaCondicao$opcaoRespostaArgs<ExtArgs>
    perguntaDestino?: boolean | PerguntaDefaultArgs<ExtArgs>
    perguntaOrigem?: boolean | PerguntaDefaultArgs<ExtArgs>
  }

  export type $PerguntaCondicaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerguntaCondicao"
    objects: {
      opcaoResposta: Prisma.$OpcaoRespostaPayload<ExtArgs> | null
      perguntaDestino: Prisma.$PerguntaPayload<ExtArgs>
      perguntaOrigem: Prisma.$PerguntaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      perguntaOrigemId: string
      perguntaDestinoId: string
      opcaoRespostaId: string | null
      operador: $Enums.OperadorCondicao
      valorCondicao: string | null
      createdAt: Date
    }, ExtArgs["result"]["perguntaCondicao"]>
    composites: {}
  }

  type PerguntaCondicaoGetPayload<S extends boolean | null | undefined | PerguntaCondicaoDefaultArgs> = $Result.GetResult<Prisma.$PerguntaCondicaoPayload, S>

  type PerguntaCondicaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerguntaCondicaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerguntaCondicaoCountAggregateInputType | true
    }

  export interface PerguntaCondicaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerguntaCondicao'], meta: { name: 'PerguntaCondicao' } }
    /**
     * Find zero or one PerguntaCondicao that matches the filter.
     * @param {PerguntaCondicaoFindUniqueArgs} args - Arguments to find a PerguntaCondicao
     * @example
     * // Get one PerguntaCondicao
     * const perguntaCondicao = await prisma.perguntaCondicao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerguntaCondicaoFindUniqueArgs>(args: SelectSubset<T, PerguntaCondicaoFindUniqueArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PerguntaCondicao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerguntaCondicaoFindUniqueOrThrowArgs} args - Arguments to find a PerguntaCondicao
     * @example
     * // Get one PerguntaCondicao
     * const perguntaCondicao = await prisma.perguntaCondicao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerguntaCondicaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PerguntaCondicaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerguntaCondicao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoFindFirstArgs} args - Arguments to find a PerguntaCondicao
     * @example
     * // Get one PerguntaCondicao
     * const perguntaCondicao = await prisma.perguntaCondicao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerguntaCondicaoFindFirstArgs>(args?: SelectSubset<T, PerguntaCondicaoFindFirstArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PerguntaCondicao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoFindFirstOrThrowArgs} args - Arguments to find a PerguntaCondicao
     * @example
     * // Get one PerguntaCondicao
     * const perguntaCondicao = await prisma.perguntaCondicao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerguntaCondicaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PerguntaCondicaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PerguntaCondicaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerguntaCondicaos
     * const perguntaCondicaos = await prisma.perguntaCondicao.findMany()
     * 
     * // Get first 10 PerguntaCondicaos
     * const perguntaCondicaos = await prisma.perguntaCondicao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perguntaCondicaoWithIdOnly = await prisma.perguntaCondicao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerguntaCondicaoFindManyArgs>(args?: SelectSubset<T, PerguntaCondicaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PerguntaCondicao.
     * @param {PerguntaCondicaoCreateArgs} args - Arguments to create a PerguntaCondicao.
     * @example
     * // Create one PerguntaCondicao
     * const PerguntaCondicao = await prisma.perguntaCondicao.create({
     *   data: {
     *     // ... data to create a PerguntaCondicao
     *   }
     * })
     * 
     */
    create<T extends PerguntaCondicaoCreateArgs>(args: SelectSubset<T, PerguntaCondicaoCreateArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PerguntaCondicaos.
     * @param {PerguntaCondicaoCreateManyArgs} args - Arguments to create many PerguntaCondicaos.
     * @example
     * // Create many PerguntaCondicaos
     * const perguntaCondicao = await prisma.perguntaCondicao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerguntaCondicaoCreateManyArgs>(args?: SelectSubset<T, PerguntaCondicaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerguntaCondicaos and returns the data saved in the database.
     * @param {PerguntaCondicaoCreateManyAndReturnArgs} args - Arguments to create many PerguntaCondicaos.
     * @example
     * // Create many PerguntaCondicaos
     * const perguntaCondicao = await prisma.perguntaCondicao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerguntaCondicaos and only return the `id`
     * const perguntaCondicaoWithIdOnly = await prisma.perguntaCondicao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerguntaCondicaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PerguntaCondicaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PerguntaCondicao.
     * @param {PerguntaCondicaoDeleteArgs} args - Arguments to delete one PerguntaCondicao.
     * @example
     * // Delete one PerguntaCondicao
     * const PerguntaCondicao = await prisma.perguntaCondicao.delete({
     *   where: {
     *     // ... filter to delete one PerguntaCondicao
     *   }
     * })
     * 
     */
    delete<T extends PerguntaCondicaoDeleteArgs>(args: SelectSubset<T, PerguntaCondicaoDeleteArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PerguntaCondicao.
     * @param {PerguntaCondicaoUpdateArgs} args - Arguments to update one PerguntaCondicao.
     * @example
     * // Update one PerguntaCondicao
     * const perguntaCondicao = await prisma.perguntaCondicao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerguntaCondicaoUpdateArgs>(args: SelectSubset<T, PerguntaCondicaoUpdateArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PerguntaCondicaos.
     * @param {PerguntaCondicaoDeleteManyArgs} args - Arguments to filter PerguntaCondicaos to delete.
     * @example
     * // Delete a few PerguntaCondicaos
     * const { count } = await prisma.perguntaCondicao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerguntaCondicaoDeleteManyArgs>(args?: SelectSubset<T, PerguntaCondicaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerguntaCondicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerguntaCondicaos
     * const perguntaCondicao = await prisma.perguntaCondicao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerguntaCondicaoUpdateManyArgs>(args: SelectSubset<T, PerguntaCondicaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerguntaCondicaos and returns the data updated in the database.
     * @param {PerguntaCondicaoUpdateManyAndReturnArgs} args - Arguments to update many PerguntaCondicaos.
     * @example
     * // Update many PerguntaCondicaos
     * const perguntaCondicao = await prisma.perguntaCondicao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PerguntaCondicaos and only return the `id`
     * const perguntaCondicaoWithIdOnly = await prisma.perguntaCondicao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PerguntaCondicaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PerguntaCondicaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PerguntaCondicao.
     * @param {PerguntaCondicaoUpsertArgs} args - Arguments to update or create a PerguntaCondicao.
     * @example
     * // Update or create a PerguntaCondicao
     * const perguntaCondicao = await prisma.perguntaCondicao.upsert({
     *   create: {
     *     // ... data to create a PerguntaCondicao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerguntaCondicao we want to update
     *   }
     * })
     */
    upsert<T extends PerguntaCondicaoUpsertArgs>(args: SelectSubset<T, PerguntaCondicaoUpsertArgs<ExtArgs>>): Prisma__PerguntaCondicaoClient<$Result.GetResult<Prisma.$PerguntaCondicaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PerguntaCondicaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoCountArgs} args - Arguments to filter PerguntaCondicaos to count.
     * @example
     * // Count the number of PerguntaCondicaos
     * const count = await prisma.perguntaCondicao.count({
     *   where: {
     *     // ... the filter for the PerguntaCondicaos we want to count
     *   }
     * })
    **/
    count<T extends PerguntaCondicaoCountArgs>(
      args?: Subset<T, PerguntaCondicaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerguntaCondicaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerguntaCondicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerguntaCondicaoAggregateArgs>(args: Subset<T, PerguntaCondicaoAggregateArgs>): Prisma.PrismaPromise<GetPerguntaCondicaoAggregateType<T>>

    /**
     * Group by PerguntaCondicao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerguntaCondicaoGroupByArgs} args - Group by arguments.
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
      T extends PerguntaCondicaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerguntaCondicaoGroupByArgs['orderBy'] }
        : { orderBy?: PerguntaCondicaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerguntaCondicaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerguntaCondicaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerguntaCondicao model
   */
  readonly fields: PerguntaCondicaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerguntaCondicao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerguntaCondicaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opcaoResposta<T extends PerguntaCondicao$opcaoRespostaArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaCondicao$opcaoRespostaArgs<ExtArgs>>): Prisma__OpcaoRespostaClient<$Result.GetResult<Prisma.$OpcaoRespostaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    perguntaDestino<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    perguntaOrigem<T extends PerguntaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerguntaDefaultArgs<ExtArgs>>): Prisma__PerguntaClient<$Result.GetResult<Prisma.$PerguntaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PerguntaCondicao model
   */
  interface PerguntaCondicaoFieldRefs {
    readonly id: FieldRef<"PerguntaCondicao", 'String'>
    readonly perguntaOrigemId: FieldRef<"PerguntaCondicao", 'String'>
    readonly perguntaDestinoId: FieldRef<"PerguntaCondicao", 'String'>
    readonly opcaoRespostaId: FieldRef<"PerguntaCondicao", 'String'>
    readonly operador: FieldRef<"PerguntaCondicao", 'OperadorCondicao'>
    readonly valorCondicao: FieldRef<"PerguntaCondicao", 'String'>
    readonly createdAt: FieldRef<"PerguntaCondicao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerguntaCondicao findUnique
   */
  export type PerguntaCondicaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * Filter, which PerguntaCondicao to fetch.
     */
    where: PerguntaCondicaoWhereUniqueInput
  }

  /**
   * PerguntaCondicao findUniqueOrThrow
   */
  export type PerguntaCondicaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * Filter, which PerguntaCondicao to fetch.
     */
    where: PerguntaCondicaoWhereUniqueInput
  }

  /**
   * PerguntaCondicao findFirst
   */
  export type PerguntaCondicaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * Filter, which PerguntaCondicao to fetch.
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerguntaCondicaos to fetch.
     */
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerguntaCondicaos.
     */
    cursor?: PerguntaCondicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerguntaCondicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerguntaCondicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerguntaCondicaos.
     */
    distinct?: PerguntaCondicaoScalarFieldEnum | PerguntaCondicaoScalarFieldEnum[]
  }

  /**
   * PerguntaCondicao findFirstOrThrow
   */
  export type PerguntaCondicaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * Filter, which PerguntaCondicao to fetch.
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerguntaCondicaos to fetch.
     */
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerguntaCondicaos.
     */
    cursor?: PerguntaCondicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerguntaCondicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerguntaCondicaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerguntaCondicaos.
     */
    distinct?: PerguntaCondicaoScalarFieldEnum | PerguntaCondicaoScalarFieldEnum[]
  }

  /**
   * PerguntaCondicao findMany
   */
  export type PerguntaCondicaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * Filter, which PerguntaCondicaos to fetch.
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerguntaCondicaos to fetch.
     */
    orderBy?: PerguntaCondicaoOrderByWithRelationInput | PerguntaCondicaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerguntaCondicaos.
     */
    cursor?: PerguntaCondicaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerguntaCondicaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerguntaCondicaos.
     */
    skip?: number
    distinct?: PerguntaCondicaoScalarFieldEnum | PerguntaCondicaoScalarFieldEnum[]
  }

  /**
   * PerguntaCondicao create
   */
  export type PerguntaCondicaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * The data needed to create a PerguntaCondicao.
     */
    data: XOR<PerguntaCondicaoCreateInput, PerguntaCondicaoUncheckedCreateInput>
  }

  /**
   * PerguntaCondicao createMany
   */
  export type PerguntaCondicaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerguntaCondicaos.
     */
    data: PerguntaCondicaoCreateManyInput | PerguntaCondicaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerguntaCondicao createManyAndReturn
   */
  export type PerguntaCondicaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * The data used to create many PerguntaCondicaos.
     */
    data: PerguntaCondicaoCreateManyInput | PerguntaCondicaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerguntaCondicao update
   */
  export type PerguntaCondicaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * The data needed to update a PerguntaCondicao.
     */
    data: XOR<PerguntaCondicaoUpdateInput, PerguntaCondicaoUncheckedUpdateInput>
    /**
     * Choose, which PerguntaCondicao to update.
     */
    where: PerguntaCondicaoWhereUniqueInput
  }

  /**
   * PerguntaCondicao updateMany
   */
  export type PerguntaCondicaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerguntaCondicaos.
     */
    data: XOR<PerguntaCondicaoUpdateManyMutationInput, PerguntaCondicaoUncheckedUpdateManyInput>
    /**
     * Filter which PerguntaCondicaos to update
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * Limit how many PerguntaCondicaos to update.
     */
    limit?: number
  }

  /**
   * PerguntaCondicao updateManyAndReturn
   */
  export type PerguntaCondicaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * The data used to update PerguntaCondicaos.
     */
    data: XOR<PerguntaCondicaoUpdateManyMutationInput, PerguntaCondicaoUncheckedUpdateManyInput>
    /**
     * Filter which PerguntaCondicaos to update
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * Limit how many PerguntaCondicaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerguntaCondicao upsert
   */
  export type PerguntaCondicaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * The filter to search for the PerguntaCondicao to update in case it exists.
     */
    where: PerguntaCondicaoWhereUniqueInput
    /**
     * In case the PerguntaCondicao found by the `where` argument doesn't exist, create a new PerguntaCondicao with this data.
     */
    create: XOR<PerguntaCondicaoCreateInput, PerguntaCondicaoUncheckedCreateInput>
    /**
     * In case the PerguntaCondicao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerguntaCondicaoUpdateInput, PerguntaCondicaoUncheckedUpdateInput>
  }

  /**
   * PerguntaCondicao delete
   */
  export type PerguntaCondicaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
    /**
     * Filter which PerguntaCondicao to delete.
     */
    where: PerguntaCondicaoWhereUniqueInput
  }

  /**
   * PerguntaCondicao deleteMany
   */
  export type PerguntaCondicaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerguntaCondicaos to delete
     */
    where?: PerguntaCondicaoWhereInput
    /**
     * Limit how many PerguntaCondicaos to delete.
     */
    limit?: number
  }

  /**
   * PerguntaCondicao.opcaoResposta
   */
  export type PerguntaCondicao$opcaoRespostaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpcaoResposta
     */
    select?: OpcaoRespostaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpcaoResposta
     */
    omit?: OpcaoRespostaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpcaoRespostaInclude<ExtArgs> | null
    where?: OpcaoRespostaWhereInput
  }

  /**
   * PerguntaCondicao without action
   */
  export type PerguntaCondicaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerguntaCondicao
     */
    select?: PerguntaCondicaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PerguntaCondicao
     */
    omit?: PerguntaCondicaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerguntaCondicaoInclude<ExtArgs> | null
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


  export const FormularioScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    ordem: 'ordem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormularioScalarFieldEnum = (typeof FormularioScalarFieldEnum)[keyof typeof FormularioScalarFieldEnum]


  export const PerguntaScalarFieldEnum: {
    id: 'id',
    idFormulario: 'idFormulario',
    titulo: 'titulo',
    codigo: 'codigo',
    orientacaoResposta: 'orientacaoResposta',
    ordem: 'ordem',
    obrigatoria: 'obrigatoria',
    subPergunta: 'subPergunta',
    tipoPergunta: 'tipoPergunta',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PerguntaScalarFieldEnum = (typeof PerguntaScalarFieldEnum)[keyof typeof PerguntaScalarFieldEnum]


  export const OpcaoRespostaScalarFieldEnum: {
    id: 'id',
    idPergunta: 'idPergunta',
    resposta: 'resposta',
    ordem: 'ordem',
    respostaAberta: 'respostaAberta',
    createdAt: 'createdAt'
  };

  export type OpcaoRespostaScalarFieldEnum = (typeof OpcaoRespostaScalarFieldEnum)[keyof typeof OpcaoRespostaScalarFieldEnum]


  export const FormularioRespostaScalarFieldEnum: {
    id: 'id',
    formularioId: 'formularioId',
    createdAt: 'createdAt'
  };

  export type FormularioRespostaScalarFieldEnum = (typeof FormularioRespostaScalarFieldEnum)[keyof typeof FormularioRespostaScalarFieldEnum]


  export const OpcaoRespostaPerguntaScalarFieldEnum: {
    id: 'id',
    idOpcaoResposta: 'idOpcaoResposta',
    idPergunta: 'idPergunta',
    respostaTexto: 'respostaTexto',
    respostaNumerica: 'respostaNumerica',
    respostaBooleana: 'respostaBooleana',
    createdAt: 'createdAt',
    idFormularioResposta: 'idFormularioResposta'
  };

  export type OpcaoRespostaPerguntaScalarFieldEnum = (typeof OpcaoRespostaPerguntaScalarFieldEnum)[keyof typeof OpcaoRespostaPerguntaScalarFieldEnum]


  export const PerguntaCondicaoScalarFieldEnum: {
    id: 'id',
    perguntaOrigemId: 'perguntaOrigemId',
    perguntaDestinoId: 'perguntaDestinoId',
    opcaoRespostaId: 'opcaoRespostaId',
    operador: 'operador',
    valorCondicao: 'valorCondicao',
    createdAt: 'createdAt'
  };

  export type PerguntaCondicaoScalarFieldEnum = (typeof PerguntaCondicaoScalarFieldEnum)[keyof typeof PerguntaCondicaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TipoPergunta'
   */
  export type EnumTipoPerguntaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPergunta'>
    


  /**
   * Reference to a field of type 'TipoPergunta[]'
   */
  export type ListEnumTipoPerguntaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPergunta[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OperadorCondicao'
   */
  export type EnumOperadorCondicaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperadorCondicao'>
    


  /**
   * Reference to a field of type 'OperadorCondicao[]'
   */
  export type ListEnumOperadorCondicaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperadorCondicao[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type FormularioWhereInput = {
    AND?: FormularioWhereInput | FormularioWhereInput[]
    OR?: FormularioWhereInput[]
    NOT?: FormularioWhereInput | FormularioWhereInput[]
    id?: StringFilter<"Formulario"> | string
    titulo?: StringFilter<"Formulario"> | string
    descricao?: StringNullableFilter<"Formulario"> | string | null
    ordem?: IntFilter<"Formulario"> | number
    createdAt?: DateTimeFilter<"Formulario"> | Date | string
    updatedAt?: DateTimeFilter<"Formulario"> | Date | string
    respostas?: FormularioRespostaListRelationFilter
    perguntas?: PerguntaListRelationFilter
  }

  export type FormularioOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respostas?: FormularioRespostaOrderByRelationAggregateInput
    perguntas?: PerguntaOrderByRelationAggregateInput
  }

  export type FormularioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormularioWhereInput | FormularioWhereInput[]
    OR?: FormularioWhereInput[]
    NOT?: FormularioWhereInput | FormularioWhereInput[]
    titulo?: StringFilter<"Formulario"> | string
    descricao?: StringNullableFilter<"Formulario"> | string | null
    ordem?: IntFilter<"Formulario"> | number
    createdAt?: DateTimeFilter<"Formulario"> | Date | string
    updatedAt?: DateTimeFilter<"Formulario"> | Date | string
    respostas?: FormularioRespostaListRelationFilter
    perguntas?: PerguntaListRelationFilter
  }, "id">

  export type FormularioOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormularioCountOrderByAggregateInput
    _avg?: FormularioAvgOrderByAggregateInput
    _max?: FormularioMaxOrderByAggregateInput
    _min?: FormularioMinOrderByAggregateInput
    _sum?: FormularioSumOrderByAggregateInput
  }

  export type FormularioScalarWhereWithAggregatesInput = {
    AND?: FormularioScalarWhereWithAggregatesInput | FormularioScalarWhereWithAggregatesInput[]
    OR?: FormularioScalarWhereWithAggregatesInput[]
    NOT?: FormularioScalarWhereWithAggregatesInput | FormularioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Formulario"> | string
    titulo?: StringWithAggregatesFilter<"Formulario"> | string
    descricao?: StringNullableWithAggregatesFilter<"Formulario"> | string | null
    ordem?: IntWithAggregatesFilter<"Formulario"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Formulario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Formulario"> | Date | string
  }

  export type PerguntaWhereInput = {
    AND?: PerguntaWhereInput | PerguntaWhereInput[]
    OR?: PerguntaWhereInput[]
    NOT?: PerguntaWhereInput | PerguntaWhereInput[]
    id?: StringFilter<"Pergunta"> | string
    idFormulario?: StringFilter<"Pergunta"> | string
    titulo?: StringFilter<"Pergunta"> | string
    codigo?: StringFilter<"Pergunta"> | string
    orientacaoResposta?: StringNullableFilter<"Pergunta"> | string | null
    ordem?: IntFilter<"Pergunta"> | number
    obrigatoria?: BoolFilter<"Pergunta"> | boolean
    subPergunta?: BoolFilter<"Pergunta"> | boolean
    tipoPergunta?: EnumTipoPerguntaFilter<"Pergunta"> | $Enums.TipoPergunta
    createdAt?: DateTimeFilter<"Pergunta"> | Date | string
    updatedAt?: DateTimeFilter<"Pergunta"> | Date | string
    respostas?: OpcaoRespostaPerguntaListRelationFilter
    opcoesRespostas?: OpcaoRespostaListRelationFilter
    formulario?: XOR<FormularioScalarRelationFilter, FormularioWhereInput>
    condicoesDestino?: PerguntaCondicaoListRelationFilter
    condicoesOrigem?: PerguntaCondicaoListRelationFilter
  }

  export type PerguntaOrderByWithRelationInput = {
    id?: SortOrder
    idFormulario?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    orientacaoResposta?: SortOrderInput | SortOrder
    ordem?: SortOrder
    obrigatoria?: SortOrder
    subPergunta?: SortOrder
    tipoPergunta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respostas?: OpcaoRespostaPerguntaOrderByRelationAggregateInput
    opcoesRespostas?: OpcaoRespostaOrderByRelationAggregateInput
    formulario?: FormularioOrderByWithRelationInput
    condicoesDestino?: PerguntaCondicaoOrderByRelationAggregateInput
    condicoesOrigem?: PerguntaCondicaoOrderByRelationAggregateInput
  }

  export type PerguntaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: PerguntaWhereInput | PerguntaWhereInput[]
    OR?: PerguntaWhereInput[]
    NOT?: PerguntaWhereInput | PerguntaWhereInput[]
    idFormulario?: StringFilter<"Pergunta"> | string
    titulo?: StringFilter<"Pergunta"> | string
    orientacaoResposta?: StringNullableFilter<"Pergunta"> | string | null
    ordem?: IntFilter<"Pergunta"> | number
    obrigatoria?: BoolFilter<"Pergunta"> | boolean
    subPergunta?: BoolFilter<"Pergunta"> | boolean
    tipoPergunta?: EnumTipoPerguntaFilter<"Pergunta"> | $Enums.TipoPergunta
    createdAt?: DateTimeFilter<"Pergunta"> | Date | string
    updatedAt?: DateTimeFilter<"Pergunta"> | Date | string
    respostas?: OpcaoRespostaPerguntaListRelationFilter
    opcoesRespostas?: OpcaoRespostaListRelationFilter
    formulario?: XOR<FormularioScalarRelationFilter, FormularioWhereInput>
    condicoesDestino?: PerguntaCondicaoListRelationFilter
    condicoesOrigem?: PerguntaCondicaoListRelationFilter
  }, "id" | "codigo">

  export type PerguntaOrderByWithAggregationInput = {
    id?: SortOrder
    idFormulario?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    orientacaoResposta?: SortOrderInput | SortOrder
    ordem?: SortOrder
    obrigatoria?: SortOrder
    subPergunta?: SortOrder
    tipoPergunta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PerguntaCountOrderByAggregateInput
    _avg?: PerguntaAvgOrderByAggregateInput
    _max?: PerguntaMaxOrderByAggregateInput
    _min?: PerguntaMinOrderByAggregateInput
    _sum?: PerguntaSumOrderByAggregateInput
  }

  export type PerguntaScalarWhereWithAggregatesInput = {
    AND?: PerguntaScalarWhereWithAggregatesInput | PerguntaScalarWhereWithAggregatesInput[]
    OR?: PerguntaScalarWhereWithAggregatesInput[]
    NOT?: PerguntaScalarWhereWithAggregatesInput | PerguntaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pergunta"> | string
    idFormulario?: StringWithAggregatesFilter<"Pergunta"> | string
    titulo?: StringWithAggregatesFilter<"Pergunta"> | string
    codigo?: StringWithAggregatesFilter<"Pergunta"> | string
    orientacaoResposta?: StringNullableWithAggregatesFilter<"Pergunta"> | string | null
    ordem?: IntWithAggregatesFilter<"Pergunta"> | number
    obrigatoria?: BoolWithAggregatesFilter<"Pergunta"> | boolean
    subPergunta?: BoolWithAggregatesFilter<"Pergunta"> | boolean
    tipoPergunta?: EnumTipoPerguntaWithAggregatesFilter<"Pergunta"> | $Enums.TipoPergunta
    createdAt?: DateTimeWithAggregatesFilter<"Pergunta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pergunta"> | Date | string
  }

  export type OpcaoRespostaWhereInput = {
    AND?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    OR?: OpcaoRespostaWhereInput[]
    NOT?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    id?: StringFilter<"OpcaoResposta"> | string
    idPergunta?: StringFilter<"OpcaoResposta"> | string
    resposta?: StringFilter<"OpcaoResposta"> | string
    ordem?: IntFilter<"OpcaoResposta"> | number
    respostaAberta?: BoolFilter<"OpcaoResposta"> | boolean
    createdAt?: DateTimeFilter<"OpcaoResposta"> | Date | string
    respostas?: OpcaoRespostaPerguntaListRelationFilter
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
    condicoes?: PerguntaCondicaoListRelationFilter
  }

  export type OpcaoRespostaOrderByWithRelationInput = {
    id?: SortOrder
    idPergunta?: SortOrder
    resposta?: SortOrder
    ordem?: SortOrder
    respostaAberta?: SortOrder
    createdAt?: SortOrder
    respostas?: OpcaoRespostaPerguntaOrderByRelationAggregateInput
    pergunta?: PerguntaOrderByWithRelationInput
    condicoes?: PerguntaCondicaoOrderByRelationAggregateInput
  }

  export type OpcaoRespostaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    OR?: OpcaoRespostaWhereInput[]
    NOT?: OpcaoRespostaWhereInput | OpcaoRespostaWhereInput[]
    idPergunta?: StringFilter<"OpcaoResposta"> | string
    resposta?: StringFilter<"OpcaoResposta"> | string
    ordem?: IntFilter<"OpcaoResposta"> | number
    respostaAberta?: BoolFilter<"OpcaoResposta"> | boolean
    createdAt?: DateTimeFilter<"OpcaoResposta"> | Date | string
    respostas?: OpcaoRespostaPerguntaListRelationFilter
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
    condicoes?: PerguntaCondicaoListRelationFilter
  }, "id">

  export type OpcaoRespostaOrderByWithAggregationInput = {
    id?: SortOrder
    idPergunta?: SortOrder
    resposta?: SortOrder
    ordem?: SortOrder
    respostaAberta?: SortOrder
    createdAt?: SortOrder
    _count?: OpcaoRespostaCountOrderByAggregateInput
    _avg?: OpcaoRespostaAvgOrderByAggregateInput
    _max?: OpcaoRespostaMaxOrderByAggregateInput
    _min?: OpcaoRespostaMinOrderByAggregateInput
    _sum?: OpcaoRespostaSumOrderByAggregateInput
  }

  export type OpcaoRespostaScalarWhereWithAggregatesInput = {
    AND?: OpcaoRespostaScalarWhereWithAggregatesInput | OpcaoRespostaScalarWhereWithAggregatesInput[]
    OR?: OpcaoRespostaScalarWhereWithAggregatesInput[]
    NOT?: OpcaoRespostaScalarWhereWithAggregatesInput | OpcaoRespostaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpcaoResposta"> | string
    idPergunta?: StringWithAggregatesFilter<"OpcaoResposta"> | string
    resposta?: StringWithAggregatesFilter<"OpcaoResposta"> | string
    ordem?: IntWithAggregatesFilter<"OpcaoResposta"> | number
    respostaAberta?: BoolWithAggregatesFilter<"OpcaoResposta"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OpcaoResposta"> | Date | string
  }

  export type FormularioRespostaWhereInput = {
    AND?: FormularioRespostaWhereInput | FormularioRespostaWhereInput[]
    OR?: FormularioRespostaWhereInput[]
    NOT?: FormularioRespostaWhereInput | FormularioRespostaWhereInput[]
    id?: StringFilter<"FormularioResposta"> | string
    formularioId?: StringFilter<"FormularioResposta"> | string
    createdAt?: DateTimeFilter<"FormularioResposta"> | Date | string
    formulario?: XOR<FormularioScalarRelationFilter, FormularioWhereInput>
    respostas?: OpcaoRespostaPerguntaListRelationFilter
  }

  export type FormularioRespostaOrderByWithRelationInput = {
    id?: SortOrder
    formularioId?: SortOrder
    createdAt?: SortOrder
    formulario?: FormularioOrderByWithRelationInput
    respostas?: OpcaoRespostaPerguntaOrderByRelationAggregateInput
  }

  export type FormularioRespostaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormularioRespostaWhereInput | FormularioRespostaWhereInput[]
    OR?: FormularioRespostaWhereInput[]
    NOT?: FormularioRespostaWhereInput | FormularioRespostaWhereInput[]
    formularioId?: StringFilter<"FormularioResposta"> | string
    createdAt?: DateTimeFilter<"FormularioResposta"> | Date | string
    formulario?: XOR<FormularioScalarRelationFilter, FormularioWhereInput>
    respostas?: OpcaoRespostaPerguntaListRelationFilter
  }, "id">

  export type FormularioRespostaOrderByWithAggregationInput = {
    id?: SortOrder
    formularioId?: SortOrder
    createdAt?: SortOrder
    _count?: FormularioRespostaCountOrderByAggregateInput
    _max?: FormularioRespostaMaxOrderByAggregateInput
    _min?: FormularioRespostaMinOrderByAggregateInput
  }

  export type FormularioRespostaScalarWhereWithAggregatesInput = {
    AND?: FormularioRespostaScalarWhereWithAggregatesInput | FormularioRespostaScalarWhereWithAggregatesInput[]
    OR?: FormularioRespostaScalarWhereWithAggregatesInput[]
    NOT?: FormularioRespostaScalarWhereWithAggregatesInput | FormularioRespostaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormularioResposta"> | string
    formularioId?: StringWithAggregatesFilter<"FormularioResposta"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FormularioResposta"> | Date | string
  }

  export type OpcaoRespostaPerguntaWhereInput = {
    AND?: OpcaoRespostaPerguntaWhereInput | OpcaoRespostaPerguntaWhereInput[]
    OR?: OpcaoRespostaPerguntaWhereInput[]
    NOT?: OpcaoRespostaPerguntaWhereInput | OpcaoRespostaPerguntaWhereInput[]
    id?: StringFilter<"OpcaoRespostaPergunta"> | string
    idOpcaoResposta?: StringNullableFilter<"OpcaoRespostaPergunta"> | string | null
    idPergunta?: StringFilter<"OpcaoRespostaPergunta"> | string
    respostaTexto?: StringNullableFilter<"OpcaoRespostaPergunta"> | string | null
    respostaNumerica?: DecimalNullableFilter<"OpcaoRespostaPergunta"> | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: BoolNullableFilter<"OpcaoRespostaPergunta"> | boolean | null
    createdAt?: DateTimeFilter<"OpcaoRespostaPergunta"> | Date | string
    idFormularioResposta?: StringFilter<"OpcaoRespostaPergunta"> | string
    formularioResposta?: XOR<FormularioRespostaScalarRelationFilter, FormularioRespostaWhereInput>
    opcaoResposta?: XOR<OpcaoRespostaNullableScalarRelationFilter, OpcaoRespostaWhereInput> | null
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }

  export type OpcaoRespostaPerguntaOrderByWithRelationInput = {
    id?: SortOrder
    idOpcaoResposta?: SortOrderInput | SortOrder
    idPergunta?: SortOrder
    respostaTexto?: SortOrderInput | SortOrder
    respostaNumerica?: SortOrderInput | SortOrder
    respostaBooleana?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    idFormularioResposta?: SortOrder
    formularioResposta?: FormularioRespostaOrderByWithRelationInput
    opcaoResposta?: OpcaoRespostaOrderByWithRelationInput
    pergunta?: PerguntaOrderByWithRelationInput
  }

  export type OpcaoRespostaPerguntaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpcaoRespostaPerguntaWhereInput | OpcaoRespostaPerguntaWhereInput[]
    OR?: OpcaoRespostaPerguntaWhereInput[]
    NOT?: OpcaoRespostaPerguntaWhereInput | OpcaoRespostaPerguntaWhereInput[]
    idOpcaoResposta?: StringNullableFilter<"OpcaoRespostaPergunta"> | string | null
    idPergunta?: StringFilter<"OpcaoRespostaPergunta"> | string
    respostaTexto?: StringNullableFilter<"OpcaoRespostaPergunta"> | string | null
    respostaNumerica?: DecimalNullableFilter<"OpcaoRespostaPergunta"> | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: BoolNullableFilter<"OpcaoRespostaPergunta"> | boolean | null
    createdAt?: DateTimeFilter<"OpcaoRespostaPergunta"> | Date | string
    idFormularioResposta?: StringFilter<"OpcaoRespostaPergunta"> | string
    formularioResposta?: XOR<FormularioRespostaScalarRelationFilter, FormularioRespostaWhereInput>
    opcaoResposta?: XOR<OpcaoRespostaNullableScalarRelationFilter, OpcaoRespostaWhereInput> | null
    pergunta?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }, "id">

  export type OpcaoRespostaPerguntaOrderByWithAggregationInput = {
    id?: SortOrder
    idOpcaoResposta?: SortOrderInput | SortOrder
    idPergunta?: SortOrder
    respostaTexto?: SortOrderInput | SortOrder
    respostaNumerica?: SortOrderInput | SortOrder
    respostaBooleana?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    idFormularioResposta?: SortOrder
    _count?: OpcaoRespostaPerguntaCountOrderByAggregateInput
    _avg?: OpcaoRespostaPerguntaAvgOrderByAggregateInput
    _max?: OpcaoRespostaPerguntaMaxOrderByAggregateInput
    _min?: OpcaoRespostaPerguntaMinOrderByAggregateInput
    _sum?: OpcaoRespostaPerguntaSumOrderByAggregateInput
  }

  export type OpcaoRespostaPerguntaScalarWhereWithAggregatesInput = {
    AND?: OpcaoRespostaPerguntaScalarWhereWithAggregatesInput | OpcaoRespostaPerguntaScalarWhereWithAggregatesInput[]
    OR?: OpcaoRespostaPerguntaScalarWhereWithAggregatesInput[]
    NOT?: OpcaoRespostaPerguntaScalarWhereWithAggregatesInput | OpcaoRespostaPerguntaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OpcaoRespostaPergunta"> | string
    idOpcaoResposta?: StringNullableWithAggregatesFilter<"OpcaoRespostaPergunta"> | string | null
    idPergunta?: StringWithAggregatesFilter<"OpcaoRespostaPergunta"> | string
    respostaTexto?: StringNullableWithAggregatesFilter<"OpcaoRespostaPergunta"> | string | null
    respostaNumerica?: DecimalNullableWithAggregatesFilter<"OpcaoRespostaPergunta"> | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: BoolNullableWithAggregatesFilter<"OpcaoRespostaPergunta"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"OpcaoRespostaPergunta"> | Date | string
    idFormularioResposta?: StringWithAggregatesFilter<"OpcaoRespostaPergunta"> | string
  }

  export type PerguntaCondicaoWhereInput = {
    AND?: PerguntaCondicaoWhereInput | PerguntaCondicaoWhereInput[]
    OR?: PerguntaCondicaoWhereInput[]
    NOT?: PerguntaCondicaoWhereInput | PerguntaCondicaoWhereInput[]
    id?: StringFilter<"PerguntaCondicao"> | string
    perguntaOrigemId?: StringFilter<"PerguntaCondicao"> | string
    perguntaDestinoId?: StringFilter<"PerguntaCondicao"> | string
    opcaoRespostaId?: StringNullableFilter<"PerguntaCondicao"> | string | null
    operador?: EnumOperadorCondicaoFilter<"PerguntaCondicao"> | $Enums.OperadorCondicao
    valorCondicao?: StringNullableFilter<"PerguntaCondicao"> | string | null
    createdAt?: DateTimeFilter<"PerguntaCondicao"> | Date | string
    opcaoResposta?: XOR<OpcaoRespostaNullableScalarRelationFilter, OpcaoRespostaWhereInput> | null
    perguntaDestino?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
    perguntaOrigem?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }

  export type PerguntaCondicaoOrderByWithRelationInput = {
    id?: SortOrder
    perguntaOrigemId?: SortOrder
    perguntaDestinoId?: SortOrder
    opcaoRespostaId?: SortOrderInput | SortOrder
    operador?: SortOrder
    valorCondicao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    opcaoResposta?: OpcaoRespostaOrderByWithRelationInput
    perguntaDestino?: PerguntaOrderByWithRelationInput
    perguntaOrigem?: PerguntaOrderByWithRelationInput
  }

  export type PerguntaCondicaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PerguntaCondicaoWhereInput | PerguntaCondicaoWhereInput[]
    OR?: PerguntaCondicaoWhereInput[]
    NOT?: PerguntaCondicaoWhereInput | PerguntaCondicaoWhereInput[]
    perguntaOrigemId?: StringFilter<"PerguntaCondicao"> | string
    perguntaDestinoId?: StringFilter<"PerguntaCondicao"> | string
    opcaoRespostaId?: StringNullableFilter<"PerguntaCondicao"> | string | null
    operador?: EnumOperadorCondicaoFilter<"PerguntaCondicao"> | $Enums.OperadorCondicao
    valorCondicao?: StringNullableFilter<"PerguntaCondicao"> | string | null
    createdAt?: DateTimeFilter<"PerguntaCondicao"> | Date | string
    opcaoResposta?: XOR<OpcaoRespostaNullableScalarRelationFilter, OpcaoRespostaWhereInput> | null
    perguntaDestino?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
    perguntaOrigem?: XOR<PerguntaScalarRelationFilter, PerguntaWhereInput>
  }, "id">

  export type PerguntaCondicaoOrderByWithAggregationInput = {
    id?: SortOrder
    perguntaOrigemId?: SortOrder
    perguntaDestinoId?: SortOrder
    opcaoRespostaId?: SortOrderInput | SortOrder
    operador?: SortOrder
    valorCondicao?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PerguntaCondicaoCountOrderByAggregateInput
    _max?: PerguntaCondicaoMaxOrderByAggregateInput
    _min?: PerguntaCondicaoMinOrderByAggregateInput
  }

  export type PerguntaCondicaoScalarWhereWithAggregatesInput = {
    AND?: PerguntaCondicaoScalarWhereWithAggregatesInput | PerguntaCondicaoScalarWhereWithAggregatesInput[]
    OR?: PerguntaCondicaoScalarWhereWithAggregatesInput[]
    NOT?: PerguntaCondicaoScalarWhereWithAggregatesInput | PerguntaCondicaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PerguntaCondicao"> | string
    perguntaOrigemId?: StringWithAggregatesFilter<"PerguntaCondicao"> | string
    perguntaDestinoId?: StringWithAggregatesFilter<"PerguntaCondicao"> | string
    opcaoRespostaId?: StringNullableWithAggregatesFilter<"PerguntaCondicao"> | string | null
    operador?: EnumOperadorCondicaoWithAggregatesFilter<"PerguntaCondicao"> | $Enums.OperadorCondicao
    valorCondicao?: StringNullableWithAggregatesFilter<"PerguntaCondicao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PerguntaCondicao"> | Date | string
  }

  export type FormularioCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: FormularioRespostaCreateNestedManyWithoutFormularioInput
    perguntas?: PerguntaCreateNestedManyWithoutFormularioInput
  }

  export type FormularioUncheckedCreateInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: FormularioRespostaUncheckedCreateNestedManyWithoutFormularioInput
    perguntas?: PerguntaUncheckedCreateNestedManyWithoutFormularioInput
  }

  export type FormularioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: FormularioRespostaUpdateManyWithoutFormularioNestedInput
    perguntas?: PerguntaUpdateManyWithoutFormularioNestedInput
  }

  export type FormularioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: FormularioRespostaUncheckedUpdateManyWithoutFormularioNestedInput
    perguntas?: PerguntaUncheckedUpdateManyWithoutFormularioNestedInput
  }

  export type FormularioCreateManyInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormularioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCreateInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    formulario: FormularioCreateNestedOneWithoutPerguntasInput
    condicoesDestino?: PerguntaCondicaoCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaUncheckedCreateInput = {
    id?: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    condicoesDestino?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    formulario?: FormularioUpdateOneRequiredWithoutPerguntasNestedInput
    condicoesDestino?: PerguntaCondicaoUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idFormulario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    condicoesDestino?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaCreateManyInput = {
    id?: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PerguntaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idFormulario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaCreateInput = {
    id?: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutOpcaoRespostaInput
    pergunta: PerguntaCreateNestedOneWithoutOpcoesRespostasInput
    condicoes?: PerguntaCondicaoCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaUncheckedCreateInput = {
    id?: string
    idPergunta: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutOpcaoRespostaInput
    condicoes?: PerguntaCondicaoUncheckedCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutOpcaoRespostaNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutOpcoesRespostasNestedInput
    condicoes?: PerguntaCondicaoUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type OpcaoRespostaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPergunta?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutOpcaoRespostaNestedInput
    condicoes?: PerguntaCondicaoUncheckedUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type OpcaoRespostaCreateManyInput = {
    id?: string
    idPergunta: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
  }

  export type OpcaoRespostaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPergunta?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioRespostaCreateInput = {
    id?: string
    createdAt?: Date | string
    formulario: FormularioCreateNestedOneWithoutRespostasInput
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutFormularioRespostaInput
  }

  export type FormularioRespostaUncheckedCreateInput = {
    id?: string
    formularioId: string
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutFormularioRespostaInput
  }

  export type FormularioRespostaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulario?: FormularioUpdateOneRequiredWithoutRespostasNestedInput
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutFormularioRespostaNestedInput
  }

  export type FormularioRespostaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formularioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutFormularioRespostaNestedInput
  }

  export type FormularioRespostaCreateManyInput = {
    id?: string
    formularioId: string
    createdAt?: Date | string
  }

  export type FormularioRespostaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormularioRespostaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formularioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaPerguntaCreateInput = {
    id?: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    formularioResposta: FormularioRespostaCreateNestedOneWithoutRespostasInput
    opcaoResposta?: OpcaoRespostaCreateNestedOneWithoutRespostasInput
    pergunta: PerguntaCreateNestedOneWithoutRespostasInput
  }

  export type OpcaoRespostaPerguntaUncheckedCreateInput = {
    id?: string
    idOpcaoResposta?: string | null
    idPergunta: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    idFormularioResposta: string
  }

  export type OpcaoRespostaPerguntaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formularioResposta?: FormularioRespostaUpdateOneRequiredWithoutRespostasNestedInput
    opcaoResposta?: OpcaoRespostaUpdateOneWithoutRespostasNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idOpcaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    idPergunta?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFormularioResposta?: StringFieldUpdateOperationsInput | string
  }

  export type OpcaoRespostaPerguntaCreateManyInput = {
    id?: string
    idOpcaoResposta?: string | null
    idPergunta: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    idFormularioResposta: string
  }

  export type OpcaoRespostaPerguntaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idOpcaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    idPergunta?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFormularioResposta?: StringFieldUpdateOperationsInput | string
  }

  export type PerguntaCondicaoCreateInput = {
    id?: string
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
    opcaoResposta?: OpcaoRespostaCreateNestedOneWithoutCondicoesInput
    perguntaDestino: PerguntaCreateNestedOneWithoutCondicoesDestinoInput
    perguntaOrigem: PerguntaCreateNestedOneWithoutCondicoesOrigemInput
  }

  export type PerguntaCondicaoUncheckedCreateInput = {
    id?: string
    perguntaOrigemId: string
    perguntaDestinoId: string
    opcaoRespostaId?: string | null
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type PerguntaCondicaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opcaoResposta?: OpcaoRespostaUpdateOneWithoutCondicoesNestedInput
    perguntaDestino?: PerguntaUpdateOneRequiredWithoutCondicoesDestinoNestedInput
    perguntaOrigem?: PerguntaUpdateOneRequiredWithoutCondicoesOrigemNestedInput
  }

  export type PerguntaCondicaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaOrigemId?: StringFieldUpdateOperationsInput | string
    perguntaDestinoId?: StringFieldUpdateOperationsInput | string
    opcaoRespostaId?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoCreateManyInput = {
    id?: string
    perguntaOrigemId: string
    perguntaDestinoId: string
    opcaoRespostaId?: string | null
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type PerguntaCondicaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaOrigemId?: StringFieldUpdateOperationsInput | string
    perguntaDestinoId?: StringFieldUpdateOperationsInput | string
    opcaoRespostaId?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FormularioRespostaListRelationFilter = {
    every?: FormularioRespostaWhereInput
    some?: FormularioRespostaWhereInput
    none?: FormularioRespostaWhereInput
  }

  export type PerguntaListRelationFilter = {
    every?: PerguntaWhereInput
    some?: PerguntaWhereInput
    none?: PerguntaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FormularioRespostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerguntaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormularioCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormularioAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type FormularioMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormularioMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    ordem?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormularioSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumTipoPerguntaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPergunta | EnumTipoPerguntaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerguntaFilter<$PrismaModel> | $Enums.TipoPergunta
  }

  export type OpcaoRespostaPerguntaListRelationFilter = {
    every?: OpcaoRespostaPerguntaWhereInput
    some?: OpcaoRespostaPerguntaWhereInput
    none?: OpcaoRespostaPerguntaWhereInput
  }

  export type OpcaoRespostaListRelationFilter = {
    every?: OpcaoRespostaWhereInput
    some?: OpcaoRespostaWhereInput
    none?: OpcaoRespostaWhereInput
  }

  export type FormularioScalarRelationFilter = {
    is?: FormularioWhereInput
    isNot?: FormularioWhereInput
  }

  export type PerguntaCondicaoListRelationFilter = {
    every?: PerguntaCondicaoWhereInput
    some?: PerguntaCondicaoWhereInput
    none?: PerguntaCondicaoWhereInput
  }

  export type OpcaoRespostaPerguntaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpcaoRespostaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerguntaCondicaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerguntaCountOrderByAggregateInput = {
    id?: SortOrder
    idFormulario?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    orientacaoResposta?: SortOrder
    ordem?: SortOrder
    obrigatoria?: SortOrder
    subPergunta?: SortOrder
    tipoPergunta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerguntaAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type PerguntaMaxOrderByAggregateInput = {
    id?: SortOrder
    idFormulario?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    orientacaoResposta?: SortOrder
    ordem?: SortOrder
    obrigatoria?: SortOrder
    subPergunta?: SortOrder
    tipoPergunta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerguntaMinOrderByAggregateInput = {
    id?: SortOrder
    idFormulario?: SortOrder
    titulo?: SortOrder
    codigo?: SortOrder
    orientacaoResposta?: SortOrder
    ordem?: SortOrder
    obrigatoria?: SortOrder
    subPergunta?: SortOrder
    tipoPergunta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerguntaSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTipoPerguntaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPergunta | EnumTipoPerguntaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerguntaWithAggregatesFilter<$PrismaModel> | $Enums.TipoPergunta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPerguntaFilter<$PrismaModel>
    _max?: NestedEnumTipoPerguntaFilter<$PrismaModel>
  }

  export type PerguntaScalarRelationFilter = {
    is?: PerguntaWhereInput
    isNot?: PerguntaWhereInput
  }

  export type OpcaoRespostaCountOrderByAggregateInput = {
    id?: SortOrder
    idPergunta?: SortOrder
    resposta?: SortOrder
    ordem?: SortOrder
    respostaAberta?: SortOrder
    createdAt?: SortOrder
  }

  export type OpcaoRespostaAvgOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type OpcaoRespostaMaxOrderByAggregateInput = {
    id?: SortOrder
    idPergunta?: SortOrder
    resposta?: SortOrder
    ordem?: SortOrder
    respostaAberta?: SortOrder
    createdAt?: SortOrder
  }

  export type OpcaoRespostaMinOrderByAggregateInput = {
    id?: SortOrder
    idPergunta?: SortOrder
    resposta?: SortOrder
    ordem?: SortOrder
    respostaAberta?: SortOrder
    createdAt?: SortOrder
  }

  export type OpcaoRespostaSumOrderByAggregateInput = {
    ordem?: SortOrder
  }

  export type FormularioRespostaCountOrderByAggregateInput = {
    id?: SortOrder
    formularioId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormularioRespostaMaxOrderByAggregateInput = {
    id?: SortOrder
    formularioId?: SortOrder
    createdAt?: SortOrder
  }

  export type FormularioRespostaMinOrderByAggregateInput = {
    id?: SortOrder
    formularioId?: SortOrder
    createdAt?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FormularioRespostaScalarRelationFilter = {
    is?: FormularioRespostaWhereInput
    isNot?: FormularioRespostaWhereInput
  }

  export type OpcaoRespostaNullableScalarRelationFilter = {
    is?: OpcaoRespostaWhereInput | null
    isNot?: OpcaoRespostaWhereInput | null
  }

  export type OpcaoRespostaPerguntaCountOrderByAggregateInput = {
    id?: SortOrder
    idOpcaoResposta?: SortOrder
    idPergunta?: SortOrder
    respostaTexto?: SortOrder
    respostaNumerica?: SortOrder
    respostaBooleana?: SortOrder
    createdAt?: SortOrder
    idFormularioResposta?: SortOrder
  }

  export type OpcaoRespostaPerguntaAvgOrderByAggregateInput = {
    respostaNumerica?: SortOrder
  }

  export type OpcaoRespostaPerguntaMaxOrderByAggregateInput = {
    id?: SortOrder
    idOpcaoResposta?: SortOrder
    idPergunta?: SortOrder
    respostaTexto?: SortOrder
    respostaNumerica?: SortOrder
    respostaBooleana?: SortOrder
    createdAt?: SortOrder
    idFormularioResposta?: SortOrder
  }

  export type OpcaoRespostaPerguntaMinOrderByAggregateInput = {
    id?: SortOrder
    idOpcaoResposta?: SortOrder
    idPergunta?: SortOrder
    respostaTexto?: SortOrder
    respostaNumerica?: SortOrder
    respostaBooleana?: SortOrder
    createdAt?: SortOrder
    idFormularioResposta?: SortOrder
  }

  export type OpcaoRespostaPerguntaSumOrderByAggregateInput = {
    respostaNumerica?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumOperadorCondicaoFilter<$PrismaModel = never> = {
    equals?: $Enums.OperadorCondicao | EnumOperadorCondicaoFieldRefInput<$PrismaModel>
    in?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    not?: NestedEnumOperadorCondicaoFilter<$PrismaModel> | $Enums.OperadorCondicao
  }

  export type PerguntaCondicaoCountOrderByAggregateInput = {
    id?: SortOrder
    perguntaOrigemId?: SortOrder
    perguntaDestinoId?: SortOrder
    opcaoRespostaId?: SortOrder
    operador?: SortOrder
    valorCondicao?: SortOrder
    createdAt?: SortOrder
  }

  export type PerguntaCondicaoMaxOrderByAggregateInput = {
    id?: SortOrder
    perguntaOrigemId?: SortOrder
    perguntaDestinoId?: SortOrder
    opcaoRespostaId?: SortOrder
    operador?: SortOrder
    valorCondicao?: SortOrder
    createdAt?: SortOrder
  }

  export type PerguntaCondicaoMinOrderByAggregateInput = {
    id?: SortOrder
    perguntaOrigemId?: SortOrder
    perguntaDestinoId?: SortOrder
    opcaoRespostaId?: SortOrder
    operador?: SortOrder
    valorCondicao?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumOperadorCondicaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperadorCondicao | EnumOperadorCondicaoFieldRefInput<$PrismaModel>
    in?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    not?: NestedEnumOperadorCondicaoWithAggregatesFilter<$PrismaModel> | $Enums.OperadorCondicao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperadorCondicaoFilter<$PrismaModel>
    _max?: NestedEnumOperadorCondicaoFilter<$PrismaModel>
  }

  export type FormularioRespostaCreateNestedManyWithoutFormularioInput = {
    create?: XOR<FormularioRespostaCreateWithoutFormularioInput, FormularioRespostaUncheckedCreateWithoutFormularioInput> | FormularioRespostaCreateWithoutFormularioInput[] | FormularioRespostaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: FormularioRespostaCreateOrConnectWithoutFormularioInput | FormularioRespostaCreateOrConnectWithoutFormularioInput[]
    createMany?: FormularioRespostaCreateManyFormularioInputEnvelope
    connect?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
  }

  export type PerguntaCreateNestedManyWithoutFormularioInput = {
    create?: XOR<PerguntaCreateWithoutFormularioInput, PerguntaUncheckedCreateWithoutFormularioInput> | PerguntaCreateWithoutFormularioInput[] | PerguntaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFormularioInput | PerguntaCreateOrConnectWithoutFormularioInput[]
    createMany?: PerguntaCreateManyFormularioInputEnvelope
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
  }

  export type FormularioRespostaUncheckedCreateNestedManyWithoutFormularioInput = {
    create?: XOR<FormularioRespostaCreateWithoutFormularioInput, FormularioRespostaUncheckedCreateWithoutFormularioInput> | FormularioRespostaCreateWithoutFormularioInput[] | FormularioRespostaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: FormularioRespostaCreateOrConnectWithoutFormularioInput | FormularioRespostaCreateOrConnectWithoutFormularioInput[]
    createMany?: FormularioRespostaCreateManyFormularioInputEnvelope
    connect?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
  }

  export type PerguntaUncheckedCreateNestedManyWithoutFormularioInput = {
    create?: XOR<PerguntaCreateWithoutFormularioInput, PerguntaUncheckedCreateWithoutFormularioInput> | PerguntaCreateWithoutFormularioInput[] | PerguntaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFormularioInput | PerguntaCreateOrConnectWithoutFormularioInput[]
    createMany?: PerguntaCreateManyFormularioInputEnvelope
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FormularioRespostaUpdateManyWithoutFormularioNestedInput = {
    create?: XOR<FormularioRespostaCreateWithoutFormularioInput, FormularioRespostaUncheckedCreateWithoutFormularioInput> | FormularioRespostaCreateWithoutFormularioInput[] | FormularioRespostaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: FormularioRespostaCreateOrConnectWithoutFormularioInput | FormularioRespostaCreateOrConnectWithoutFormularioInput[]
    upsert?: FormularioRespostaUpsertWithWhereUniqueWithoutFormularioInput | FormularioRespostaUpsertWithWhereUniqueWithoutFormularioInput[]
    createMany?: FormularioRespostaCreateManyFormularioInputEnvelope
    set?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    disconnect?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    delete?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    connect?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    update?: FormularioRespostaUpdateWithWhereUniqueWithoutFormularioInput | FormularioRespostaUpdateWithWhereUniqueWithoutFormularioInput[]
    updateMany?: FormularioRespostaUpdateManyWithWhereWithoutFormularioInput | FormularioRespostaUpdateManyWithWhereWithoutFormularioInput[]
    deleteMany?: FormularioRespostaScalarWhereInput | FormularioRespostaScalarWhereInput[]
  }

  export type PerguntaUpdateManyWithoutFormularioNestedInput = {
    create?: XOR<PerguntaCreateWithoutFormularioInput, PerguntaUncheckedCreateWithoutFormularioInput> | PerguntaCreateWithoutFormularioInput[] | PerguntaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFormularioInput | PerguntaCreateOrConnectWithoutFormularioInput[]
    upsert?: PerguntaUpsertWithWhereUniqueWithoutFormularioInput | PerguntaUpsertWithWhereUniqueWithoutFormularioInput[]
    createMany?: PerguntaCreateManyFormularioInputEnvelope
    set?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    disconnect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    delete?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    update?: PerguntaUpdateWithWhereUniqueWithoutFormularioInput | PerguntaUpdateWithWhereUniqueWithoutFormularioInput[]
    updateMany?: PerguntaUpdateManyWithWhereWithoutFormularioInput | PerguntaUpdateManyWithWhereWithoutFormularioInput[]
    deleteMany?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
  }

  export type FormularioRespostaUncheckedUpdateManyWithoutFormularioNestedInput = {
    create?: XOR<FormularioRespostaCreateWithoutFormularioInput, FormularioRespostaUncheckedCreateWithoutFormularioInput> | FormularioRespostaCreateWithoutFormularioInput[] | FormularioRespostaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: FormularioRespostaCreateOrConnectWithoutFormularioInput | FormularioRespostaCreateOrConnectWithoutFormularioInput[]
    upsert?: FormularioRespostaUpsertWithWhereUniqueWithoutFormularioInput | FormularioRespostaUpsertWithWhereUniqueWithoutFormularioInput[]
    createMany?: FormularioRespostaCreateManyFormularioInputEnvelope
    set?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    disconnect?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    delete?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    connect?: FormularioRespostaWhereUniqueInput | FormularioRespostaWhereUniqueInput[]
    update?: FormularioRespostaUpdateWithWhereUniqueWithoutFormularioInput | FormularioRespostaUpdateWithWhereUniqueWithoutFormularioInput[]
    updateMany?: FormularioRespostaUpdateManyWithWhereWithoutFormularioInput | FormularioRespostaUpdateManyWithWhereWithoutFormularioInput[]
    deleteMany?: FormularioRespostaScalarWhereInput | FormularioRespostaScalarWhereInput[]
  }

  export type PerguntaUncheckedUpdateManyWithoutFormularioNestedInput = {
    create?: XOR<PerguntaCreateWithoutFormularioInput, PerguntaUncheckedCreateWithoutFormularioInput> | PerguntaCreateWithoutFormularioInput[] | PerguntaUncheckedCreateWithoutFormularioInput[]
    connectOrCreate?: PerguntaCreateOrConnectWithoutFormularioInput | PerguntaCreateOrConnectWithoutFormularioInput[]
    upsert?: PerguntaUpsertWithWhereUniqueWithoutFormularioInput | PerguntaUpsertWithWhereUniqueWithoutFormularioInput[]
    createMany?: PerguntaCreateManyFormularioInputEnvelope
    set?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    disconnect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    delete?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    connect?: PerguntaWhereUniqueInput | PerguntaWhereUniqueInput[]
    update?: PerguntaUpdateWithWhereUniqueWithoutFormularioInput | PerguntaUpdateWithWhereUniqueWithoutFormularioInput[]
    updateMany?: PerguntaUpdateManyWithWhereWithoutFormularioInput | PerguntaUpdateManyWithWhereWithoutFormularioInput[]
    deleteMany?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
  }

  export type OpcaoRespostaPerguntaCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaPerguntaCreateWithoutPerguntaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyPerguntaInputEnvelope
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
  }

  export type OpcaoRespostaCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
  }

  export type FormularioCreateNestedOneWithoutPerguntasInput = {
    create?: XOR<FormularioCreateWithoutPerguntasInput, FormularioUncheckedCreateWithoutPerguntasInput>
    connectOrCreate?: FormularioCreateOrConnectWithoutPerguntasInput
    connect?: FormularioWhereUniqueInput
  }

  export type PerguntaCondicaoCreateNestedManyWithoutPerguntaDestinoInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput> | PerguntaCondicaoCreateWithoutPerguntaDestinoInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaDestinoInputEnvelope
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
  }

  export type PerguntaCondicaoCreateNestedManyWithoutPerguntaOrigemInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput> | PerguntaCondicaoCreateWithoutPerguntaOrigemInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaOrigemInputEnvelope
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
  }

  export type OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaPerguntaCreateWithoutPerguntaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyPerguntaInputEnvelope
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
  }

  export type OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
  }

  export type PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaDestinoInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput> | PerguntaCondicaoCreateWithoutPerguntaDestinoInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaDestinoInputEnvelope
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
  }

  export type PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaOrigemInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput> | PerguntaCondicaoCreateWithoutPerguntaOrigemInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaOrigemInputEnvelope
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumTipoPerguntaFieldUpdateOperationsInput = {
    set?: $Enums.TipoPergunta
  }

  export type OpcaoRespostaPerguntaUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaPerguntaCreateWithoutPerguntaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput[]
    upsert?: OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyPerguntaInputEnvelope
    set?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    disconnect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    delete?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    update?: OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: OpcaoRespostaPerguntaUpdateManyWithWhereWithoutPerguntaInput | OpcaoRespostaPerguntaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
  }

  export type OpcaoRespostaUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    upsert?: OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    set?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    disconnect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    delete?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    update?: OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput | OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
  }

  export type FormularioUpdateOneRequiredWithoutPerguntasNestedInput = {
    create?: XOR<FormularioCreateWithoutPerguntasInput, FormularioUncheckedCreateWithoutPerguntasInput>
    connectOrCreate?: FormularioCreateOrConnectWithoutPerguntasInput
    upsert?: FormularioUpsertWithoutPerguntasInput
    connect?: FormularioWhereUniqueInput
    update?: XOR<XOR<FormularioUpdateToOneWithWhereWithoutPerguntasInput, FormularioUpdateWithoutPerguntasInput>, FormularioUncheckedUpdateWithoutPerguntasInput>
  }

  export type PerguntaCondicaoUpdateManyWithoutPerguntaDestinoNestedInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput> | PerguntaCondicaoCreateWithoutPerguntaDestinoInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput[]
    upsert?: PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaDestinoInput | PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaDestinoInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaDestinoInputEnvelope
    set?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    disconnect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    delete?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    update?: PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaDestinoInput | PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaDestinoInput[]
    updateMany?: PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaDestinoInput | PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaDestinoInput[]
    deleteMany?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
  }

  export type PerguntaCondicaoUpdateManyWithoutPerguntaOrigemNestedInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput> | PerguntaCondicaoCreateWithoutPerguntaOrigemInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput[]
    upsert?: PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaOrigemInput | PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaOrigemInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaOrigemInputEnvelope
    set?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    disconnect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    delete?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    update?: PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaOrigemInput | PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaOrigemInput[]
    updateMany?: PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaOrigemInput | PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaOrigemInput[]
    deleteMany?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaPerguntaCreateWithoutPerguntaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput[]
    upsert?: OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyPerguntaInputEnvelope
    set?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    disconnect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    delete?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    update?: OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: OpcaoRespostaPerguntaUpdateManyWithWhereWithoutPerguntaInput | OpcaoRespostaPerguntaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
  }

  export type OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput = {
    create?: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput> | OpcaoRespostaCreateWithoutPerguntaInput[] | OpcaoRespostaUncheckedCreateWithoutPerguntaInput[]
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutPerguntaInput | OpcaoRespostaCreateOrConnectWithoutPerguntaInput[]
    upsert?: OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput[]
    createMany?: OpcaoRespostaCreateManyPerguntaInputEnvelope
    set?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    disconnect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    delete?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    connect?: OpcaoRespostaWhereUniqueInput | OpcaoRespostaWhereUniqueInput[]
    update?: OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput | OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput[]
    updateMany?: OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput | OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput[]
    deleteMany?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
  }

  export type PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoNestedInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput> | PerguntaCondicaoCreateWithoutPerguntaDestinoInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput[]
    upsert?: PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaDestinoInput | PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaDestinoInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaDestinoInputEnvelope
    set?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    disconnect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    delete?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    update?: PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaDestinoInput | PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaDestinoInput[]
    updateMany?: PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaDestinoInput | PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaDestinoInput[]
    deleteMany?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
  }

  export type PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemNestedInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput> | PerguntaCondicaoCreateWithoutPerguntaOrigemInput[] | PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput | PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput[]
    upsert?: PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaOrigemInput | PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaOrigemInput[]
    createMany?: PerguntaCondicaoCreateManyPerguntaOrigemInputEnvelope
    set?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    disconnect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    delete?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    update?: PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaOrigemInput | PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaOrigemInput[]
    updateMany?: PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaOrigemInput | PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaOrigemInput[]
    deleteMany?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
  }

  export type OpcaoRespostaPerguntaCreateNestedManyWithoutOpcaoRespostaInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput> | OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyOpcaoRespostaInputEnvelope
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
  }

  export type PerguntaCreateNestedOneWithoutOpcoesRespostasInput = {
    create?: XOR<PerguntaCreateWithoutOpcoesRespostasInput, PerguntaUncheckedCreateWithoutOpcoesRespostasInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutOpcoesRespostasInput
    connect?: PerguntaWhereUniqueInput
  }

  export type PerguntaCondicaoCreateNestedManyWithoutOpcaoRespostaInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput> | PerguntaCondicaoCreateWithoutOpcaoRespostaInput[] | PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput | PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput[]
    createMany?: PerguntaCondicaoCreateManyOpcaoRespostaInputEnvelope
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
  }

  export type OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutOpcaoRespostaInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput> | OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyOpcaoRespostaInputEnvelope
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
  }

  export type PerguntaCondicaoUncheckedCreateNestedManyWithoutOpcaoRespostaInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput> | PerguntaCondicaoCreateWithoutOpcaoRespostaInput[] | PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput | PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput[]
    createMany?: PerguntaCondicaoCreateManyOpcaoRespostaInputEnvelope
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
  }

  export type OpcaoRespostaPerguntaUpdateManyWithoutOpcaoRespostaNestedInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput> | OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput[]
    upsert?: OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutOpcaoRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyOpcaoRespostaInputEnvelope
    set?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    disconnect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    delete?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    update?: OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutOpcaoRespostaInput[]
    updateMany?: OpcaoRespostaPerguntaUpdateManyWithWhereWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaUpdateManyWithWhereWithoutOpcaoRespostaInput[]
    deleteMany?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
  }

  export type PerguntaUpdateOneRequiredWithoutOpcoesRespostasNestedInput = {
    create?: XOR<PerguntaCreateWithoutOpcoesRespostasInput, PerguntaUncheckedCreateWithoutOpcoesRespostasInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutOpcoesRespostasInput
    upsert?: PerguntaUpsertWithoutOpcoesRespostasInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutOpcoesRespostasInput, PerguntaUpdateWithoutOpcoesRespostasInput>, PerguntaUncheckedUpdateWithoutOpcoesRespostasInput>
  }

  export type PerguntaCondicaoUpdateManyWithoutOpcaoRespostaNestedInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput> | PerguntaCondicaoCreateWithoutOpcaoRespostaInput[] | PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput | PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput[]
    upsert?: PerguntaCondicaoUpsertWithWhereUniqueWithoutOpcaoRespostaInput | PerguntaCondicaoUpsertWithWhereUniqueWithoutOpcaoRespostaInput[]
    createMany?: PerguntaCondicaoCreateManyOpcaoRespostaInputEnvelope
    set?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    disconnect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    delete?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    update?: PerguntaCondicaoUpdateWithWhereUniqueWithoutOpcaoRespostaInput | PerguntaCondicaoUpdateWithWhereUniqueWithoutOpcaoRespostaInput[]
    updateMany?: PerguntaCondicaoUpdateManyWithWhereWithoutOpcaoRespostaInput | PerguntaCondicaoUpdateManyWithWhereWithoutOpcaoRespostaInput[]
    deleteMany?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyWithoutOpcaoRespostaNestedInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput> | OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput[]
    upsert?: OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutOpcaoRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyOpcaoRespostaInputEnvelope
    set?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    disconnect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    delete?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    update?: OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutOpcaoRespostaInput[]
    updateMany?: OpcaoRespostaPerguntaUpdateManyWithWhereWithoutOpcaoRespostaInput | OpcaoRespostaPerguntaUpdateManyWithWhereWithoutOpcaoRespostaInput[]
    deleteMany?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
  }

  export type PerguntaCondicaoUncheckedUpdateManyWithoutOpcaoRespostaNestedInput = {
    create?: XOR<PerguntaCondicaoCreateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput> | PerguntaCondicaoCreateWithoutOpcaoRespostaInput[] | PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput[]
    connectOrCreate?: PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput | PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput[]
    upsert?: PerguntaCondicaoUpsertWithWhereUniqueWithoutOpcaoRespostaInput | PerguntaCondicaoUpsertWithWhereUniqueWithoutOpcaoRespostaInput[]
    createMany?: PerguntaCondicaoCreateManyOpcaoRespostaInputEnvelope
    set?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    disconnect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    delete?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    connect?: PerguntaCondicaoWhereUniqueInput | PerguntaCondicaoWhereUniqueInput[]
    update?: PerguntaCondicaoUpdateWithWhereUniqueWithoutOpcaoRespostaInput | PerguntaCondicaoUpdateWithWhereUniqueWithoutOpcaoRespostaInput[]
    updateMany?: PerguntaCondicaoUpdateManyWithWhereWithoutOpcaoRespostaInput | PerguntaCondicaoUpdateManyWithWhereWithoutOpcaoRespostaInput[]
    deleteMany?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
  }

  export type FormularioCreateNestedOneWithoutRespostasInput = {
    create?: XOR<FormularioCreateWithoutRespostasInput, FormularioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: FormularioCreateOrConnectWithoutRespostasInput
    connect?: FormularioWhereUniqueInput
  }

  export type OpcaoRespostaPerguntaCreateNestedManyWithoutFormularioRespostaInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput> | OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyFormularioRespostaInputEnvelope
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
  }

  export type OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutFormularioRespostaInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput> | OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyFormularioRespostaInputEnvelope
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
  }

  export type FormularioUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<FormularioCreateWithoutRespostasInput, FormularioUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: FormularioCreateOrConnectWithoutRespostasInput
    upsert?: FormularioUpsertWithoutRespostasInput
    connect?: FormularioWhereUniqueInput
    update?: XOR<XOR<FormularioUpdateToOneWithWhereWithoutRespostasInput, FormularioUpdateWithoutRespostasInput>, FormularioUncheckedUpdateWithoutRespostasInput>
  }

  export type OpcaoRespostaPerguntaUpdateManyWithoutFormularioRespostaNestedInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput> | OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput[]
    upsert?: OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutFormularioRespostaInput | OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutFormularioRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyFormularioRespostaInputEnvelope
    set?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    disconnect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    delete?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    update?: OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutFormularioRespostaInput | OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutFormularioRespostaInput[]
    updateMany?: OpcaoRespostaPerguntaUpdateManyWithWhereWithoutFormularioRespostaInput | OpcaoRespostaPerguntaUpdateManyWithWhereWithoutFormularioRespostaInput[]
    deleteMany?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyWithoutFormularioRespostaNestedInput = {
    create?: XOR<OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput> | OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput[] | OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput[]
    connectOrCreate?: OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput | OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput[]
    upsert?: OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutFormularioRespostaInput | OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutFormularioRespostaInput[]
    createMany?: OpcaoRespostaPerguntaCreateManyFormularioRespostaInputEnvelope
    set?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    disconnect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    delete?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    connect?: OpcaoRespostaPerguntaWhereUniqueInput | OpcaoRespostaPerguntaWhereUniqueInput[]
    update?: OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutFormularioRespostaInput | OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutFormularioRespostaInput[]
    updateMany?: OpcaoRespostaPerguntaUpdateManyWithWhereWithoutFormularioRespostaInput | OpcaoRespostaPerguntaUpdateManyWithWhereWithoutFormularioRespostaInput[]
    deleteMany?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
  }

  export type FormularioRespostaCreateNestedOneWithoutRespostasInput = {
    create?: XOR<FormularioRespostaCreateWithoutRespostasInput, FormularioRespostaUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: FormularioRespostaCreateOrConnectWithoutRespostasInput
    connect?: FormularioRespostaWhereUniqueInput
  }

  export type OpcaoRespostaCreateNestedOneWithoutRespostasInput = {
    create?: XOR<OpcaoRespostaCreateWithoutRespostasInput, OpcaoRespostaUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutRespostasInput
    connect?: OpcaoRespostaWhereUniqueInput
  }

  export type PerguntaCreateNestedOneWithoutRespostasInput = {
    create?: XOR<PerguntaCreateWithoutRespostasInput, PerguntaUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutRespostasInput
    connect?: PerguntaWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FormularioRespostaUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<FormularioRespostaCreateWithoutRespostasInput, FormularioRespostaUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: FormularioRespostaCreateOrConnectWithoutRespostasInput
    upsert?: FormularioRespostaUpsertWithoutRespostasInput
    connect?: FormularioRespostaWhereUniqueInput
    update?: XOR<XOR<FormularioRespostaUpdateToOneWithWhereWithoutRespostasInput, FormularioRespostaUpdateWithoutRespostasInput>, FormularioRespostaUncheckedUpdateWithoutRespostasInput>
  }

  export type OpcaoRespostaUpdateOneWithoutRespostasNestedInput = {
    create?: XOR<OpcaoRespostaCreateWithoutRespostasInput, OpcaoRespostaUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutRespostasInput
    upsert?: OpcaoRespostaUpsertWithoutRespostasInput
    disconnect?: OpcaoRespostaWhereInput | boolean
    delete?: OpcaoRespostaWhereInput | boolean
    connect?: OpcaoRespostaWhereUniqueInput
    update?: XOR<XOR<OpcaoRespostaUpdateToOneWithWhereWithoutRespostasInput, OpcaoRespostaUpdateWithoutRespostasInput>, OpcaoRespostaUncheckedUpdateWithoutRespostasInput>
  }

  export type PerguntaUpdateOneRequiredWithoutRespostasNestedInput = {
    create?: XOR<PerguntaCreateWithoutRespostasInput, PerguntaUncheckedCreateWithoutRespostasInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutRespostasInput
    upsert?: PerguntaUpsertWithoutRespostasInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutRespostasInput, PerguntaUpdateWithoutRespostasInput>, PerguntaUncheckedUpdateWithoutRespostasInput>
  }

  export type OpcaoRespostaCreateNestedOneWithoutCondicoesInput = {
    create?: XOR<OpcaoRespostaCreateWithoutCondicoesInput, OpcaoRespostaUncheckedCreateWithoutCondicoesInput>
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutCondicoesInput
    connect?: OpcaoRespostaWhereUniqueInput
  }

  export type PerguntaCreateNestedOneWithoutCondicoesDestinoInput = {
    create?: XOR<PerguntaCreateWithoutCondicoesDestinoInput, PerguntaUncheckedCreateWithoutCondicoesDestinoInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutCondicoesDestinoInput
    connect?: PerguntaWhereUniqueInput
  }

  export type PerguntaCreateNestedOneWithoutCondicoesOrigemInput = {
    create?: XOR<PerguntaCreateWithoutCondicoesOrigemInput, PerguntaUncheckedCreateWithoutCondicoesOrigemInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutCondicoesOrigemInput
    connect?: PerguntaWhereUniqueInput
  }

  export type EnumOperadorCondicaoFieldUpdateOperationsInput = {
    set?: $Enums.OperadorCondicao
  }

  export type OpcaoRespostaUpdateOneWithoutCondicoesNestedInput = {
    create?: XOR<OpcaoRespostaCreateWithoutCondicoesInput, OpcaoRespostaUncheckedCreateWithoutCondicoesInput>
    connectOrCreate?: OpcaoRespostaCreateOrConnectWithoutCondicoesInput
    upsert?: OpcaoRespostaUpsertWithoutCondicoesInput
    disconnect?: OpcaoRespostaWhereInput | boolean
    delete?: OpcaoRespostaWhereInput | boolean
    connect?: OpcaoRespostaWhereUniqueInput
    update?: XOR<XOR<OpcaoRespostaUpdateToOneWithWhereWithoutCondicoesInput, OpcaoRespostaUpdateWithoutCondicoesInput>, OpcaoRespostaUncheckedUpdateWithoutCondicoesInput>
  }

  export type PerguntaUpdateOneRequiredWithoutCondicoesDestinoNestedInput = {
    create?: XOR<PerguntaCreateWithoutCondicoesDestinoInput, PerguntaUncheckedCreateWithoutCondicoesDestinoInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutCondicoesDestinoInput
    upsert?: PerguntaUpsertWithoutCondicoesDestinoInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutCondicoesDestinoInput, PerguntaUpdateWithoutCondicoesDestinoInput>, PerguntaUncheckedUpdateWithoutCondicoesDestinoInput>
  }

  export type PerguntaUpdateOneRequiredWithoutCondicoesOrigemNestedInput = {
    create?: XOR<PerguntaCreateWithoutCondicoesOrigemInput, PerguntaUncheckedCreateWithoutCondicoesOrigemInput>
    connectOrCreate?: PerguntaCreateOrConnectWithoutCondicoesOrigemInput
    upsert?: PerguntaUpsertWithoutCondicoesOrigemInput
    connect?: PerguntaWhereUniqueInput
    update?: XOR<XOR<PerguntaUpdateToOneWithWhereWithoutCondicoesOrigemInput, PerguntaUpdateWithoutCondicoesOrigemInput>, PerguntaUncheckedUpdateWithoutCondicoesOrigemInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTipoPerguntaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPergunta | EnumTipoPerguntaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerguntaFilter<$PrismaModel> | $Enums.TipoPergunta
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTipoPerguntaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPergunta | EnumTipoPerguntaFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPergunta[] | ListEnumTipoPerguntaFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPerguntaWithAggregatesFilter<$PrismaModel> | $Enums.TipoPergunta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPerguntaFilter<$PrismaModel>
    _max?: NestedEnumTipoPerguntaFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumOperadorCondicaoFilter<$PrismaModel = never> = {
    equals?: $Enums.OperadorCondicao | EnumOperadorCondicaoFieldRefInput<$PrismaModel>
    in?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    not?: NestedEnumOperadorCondicaoFilter<$PrismaModel> | $Enums.OperadorCondicao
  }

  export type NestedEnumOperadorCondicaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperadorCondicao | EnumOperadorCondicaoFieldRefInput<$PrismaModel>
    in?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperadorCondicao[] | ListEnumOperadorCondicaoFieldRefInput<$PrismaModel>
    not?: NestedEnumOperadorCondicaoWithAggregatesFilter<$PrismaModel> | $Enums.OperadorCondicao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperadorCondicaoFilter<$PrismaModel>
    _max?: NestedEnumOperadorCondicaoFilter<$PrismaModel>
  }

  export type FormularioRespostaCreateWithoutFormularioInput = {
    id?: string
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutFormularioRespostaInput
  }

  export type FormularioRespostaUncheckedCreateWithoutFormularioInput = {
    id?: string
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutFormularioRespostaInput
  }

  export type FormularioRespostaCreateOrConnectWithoutFormularioInput = {
    where: FormularioRespostaWhereUniqueInput
    create: XOR<FormularioRespostaCreateWithoutFormularioInput, FormularioRespostaUncheckedCreateWithoutFormularioInput>
  }

  export type FormularioRespostaCreateManyFormularioInputEnvelope = {
    data: FormularioRespostaCreateManyFormularioInput | FormularioRespostaCreateManyFormularioInput[]
    skipDuplicates?: boolean
  }

  export type PerguntaCreateWithoutFormularioInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    condicoesDestino?: PerguntaCondicaoCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaUncheckedCreateWithoutFormularioInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    condicoesDestino?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaCreateOrConnectWithoutFormularioInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutFormularioInput, PerguntaUncheckedCreateWithoutFormularioInput>
  }

  export type PerguntaCreateManyFormularioInputEnvelope = {
    data: PerguntaCreateManyFormularioInput | PerguntaCreateManyFormularioInput[]
    skipDuplicates?: boolean
  }

  export type FormularioRespostaUpsertWithWhereUniqueWithoutFormularioInput = {
    where: FormularioRespostaWhereUniqueInput
    update: XOR<FormularioRespostaUpdateWithoutFormularioInput, FormularioRespostaUncheckedUpdateWithoutFormularioInput>
    create: XOR<FormularioRespostaCreateWithoutFormularioInput, FormularioRespostaUncheckedCreateWithoutFormularioInput>
  }

  export type FormularioRespostaUpdateWithWhereUniqueWithoutFormularioInput = {
    where: FormularioRespostaWhereUniqueInput
    data: XOR<FormularioRespostaUpdateWithoutFormularioInput, FormularioRespostaUncheckedUpdateWithoutFormularioInput>
  }

  export type FormularioRespostaUpdateManyWithWhereWithoutFormularioInput = {
    where: FormularioRespostaScalarWhereInput
    data: XOR<FormularioRespostaUpdateManyMutationInput, FormularioRespostaUncheckedUpdateManyWithoutFormularioInput>
  }

  export type FormularioRespostaScalarWhereInput = {
    AND?: FormularioRespostaScalarWhereInput | FormularioRespostaScalarWhereInput[]
    OR?: FormularioRespostaScalarWhereInput[]
    NOT?: FormularioRespostaScalarWhereInput | FormularioRespostaScalarWhereInput[]
    id?: StringFilter<"FormularioResposta"> | string
    formularioId?: StringFilter<"FormularioResposta"> | string
    createdAt?: DateTimeFilter<"FormularioResposta"> | Date | string
  }

  export type PerguntaUpsertWithWhereUniqueWithoutFormularioInput = {
    where: PerguntaWhereUniqueInput
    update: XOR<PerguntaUpdateWithoutFormularioInput, PerguntaUncheckedUpdateWithoutFormularioInput>
    create: XOR<PerguntaCreateWithoutFormularioInput, PerguntaUncheckedCreateWithoutFormularioInput>
  }

  export type PerguntaUpdateWithWhereUniqueWithoutFormularioInput = {
    where: PerguntaWhereUniqueInput
    data: XOR<PerguntaUpdateWithoutFormularioInput, PerguntaUncheckedUpdateWithoutFormularioInput>
  }

  export type PerguntaUpdateManyWithWhereWithoutFormularioInput = {
    where: PerguntaScalarWhereInput
    data: XOR<PerguntaUpdateManyMutationInput, PerguntaUncheckedUpdateManyWithoutFormularioInput>
  }

  export type PerguntaScalarWhereInput = {
    AND?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
    OR?: PerguntaScalarWhereInput[]
    NOT?: PerguntaScalarWhereInput | PerguntaScalarWhereInput[]
    id?: StringFilter<"Pergunta"> | string
    idFormulario?: StringFilter<"Pergunta"> | string
    titulo?: StringFilter<"Pergunta"> | string
    codigo?: StringFilter<"Pergunta"> | string
    orientacaoResposta?: StringNullableFilter<"Pergunta"> | string | null
    ordem?: IntFilter<"Pergunta"> | number
    obrigatoria?: BoolFilter<"Pergunta"> | boolean
    subPergunta?: BoolFilter<"Pergunta"> | boolean
    tipoPergunta?: EnumTipoPerguntaFilter<"Pergunta"> | $Enums.TipoPergunta
    createdAt?: DateTimeFilter<"Pergunta"> | Date | string
    updatedAt?: DateTimeFilter<"Pergunta"> | Date | string
  }

  export type OpcaoRespostaPerguntaCreateWithoutPerguntaInput = {
    id?: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    formularioResposta: FormularioRespostaCreateNestedOneWithoutRespostasInput
    opcaoResposta?: OpcaoRespostaCreateNestedOneWithoutRespostasInput
  }

  export type OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput = {
    id?: string
    idOpcaoResposta?: string | null
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    idFormularioResposta: string
  }

  export type OpcaoRespostaPerguntaCreateOrConnectWithoutPerguntaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    create: XOR<OpcaoRespostaPerguntaCreateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput>
  }

  export type OpcaoRespostaPerguntaCreateManyPerguntaInputEnvelope = {
    data: OpcaoRespostaPerguntaCreateManyPerguntaInput | OpcaoRespostaPerguntaCreateManyPerguntaInput[]
    skipDuplicates?: boolean
  }

  export type OpcaoRespostaCreateWithoutPerguntaInput = {
    id?: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutOpcaoRespostaInput
    condicoes?: PerguntaCondicaoCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaUncheckedCreateWithoutPerguntaInput = {
    id?: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutOpcaoRespostaInput
    condicoes?: PerguntaCondicaoUncheckedCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaCreateOrConnectWithoutPerguntaInput = {
    where: OpcaoRespostaWhereUniqueInput
    create: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput>
  }

  export type OpcaoRespostaCreateManyPerguntaInputEnvelope = {
    data: OpcaoRespostaCreateManyPerguntaInput | OpcaoRespostaCreateManyPerguntaInput[]
    skipDuplicates?: boolean
  }

  export type FormularioCreateWithoutPerguntasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: FormularioRespostaCreateNestedManyWithoutFormularioInput
  }

  export type FormularioUncheckedCreateWithoutPerguntasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: FormularioRespostaUncheckedCreateNestedManyWithoutFormularioInput
  }

  export type FormularioCreateOrConnectWithoutPerguntasInput = {
    where: FormularioWhereUniqueInput
    create: XOR<FormularioCreateWithoutPerguntasInput, FormularioUncheckedCreateWithoutPerguntasInput>
  }

  export type PerguntaCondicaoCreateWithoutPerguntaDestinoInput = {
    id?: string
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
    opcaoResposta?: OpcaoRespostaCreateNestedOneWithoutCondicoesInput
    perguntaOrigem: PerguntaCreateNestedOneWithoutCondicoesOrigemInput
  }

  export type PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput = {
    id?: string
    perguntaOrigemId: string
    opcaoRespostaId?: string | null
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type PerguntaCondicaoCreateOrConnectWithoutPerguntaDestinoInput = {
    where: PerguntaCondicaoWhereUniqueInput
    create: XOR<PerguntaCondicaoCreateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput>
  }

  export type PerguntaCondicaoCreateManyPerguntaDestinoInputEnvelope = {
    data: PerguntaCondicaoCreateManyPerguntaDestinoInput | PerguntaCondicaoCreateManyPerguntaDestinoInput[]
    skipDuplicates?: boolean
  }

  export type PerguntaCondicaoCreateWithoutPerguntaOrigemInput = {
    id?: string
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
    opcaoResposta?: OpcaoRespostaCreateNestedOneWithoutCondicoesInput
    perguntaDestino: PerguntaCreateNestedOneWithoutCondicoesDestinoInput
  }

  export type PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput = {
    id?: string
    perguntaDestinoId: string
    opcaoRespostaId?: string | null
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type PerguntaCondicaoCreateOrConnectWithoutPerguntaOrigemInput = {
    where: PerguntaCondicaoWhereUniqueInput
    create: XOR<PerguntaCondicaoCreateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput>
  }

  export type PerguntaCondicaoCreateManyPerguntaOrigemInputEnvelope = {
    data: PerguntaCondicaoCreateManyPerguntaOrigemInput | PerguntaCondicaoCreateManyPerguntaOrigemInput[]
    skipDuplicates?: boolean
  }

  export type OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutPerguntaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    update: XOR<OpcaoRespostaPerguntaUpdateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedUpdateWithoutPerguntaInput>
    create: XOR<OpcaoRespostaPerguntaCreateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutPerguntaInput>
  }

  export type OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutPerguntaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    data: XOR<OpcaoRespostaPerguntaUpdateWithoutPerguntaInput, OpcaoRespostaPerguntaUncheckedUpdateWithoutPerguntaInput>
  }

  export type OpcaoRespostaPerguntaUpdateManyWithWhereWithoutPerguntaInput = {
    where: OpcaoRespostaPerguntaScalarWhereInput
    data: XOR<OpcaoRespostaPerguntaUpdateManyMutationInput, OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaInput>
  }

  export type OpcaoRespostaPerguntaScalarWhereInput = {
    AND?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
    OR?: OpcaoRespostaPerguntaScalarWhereInput[]
    NOT?: OpcaoRespostaPerguntaScalarWhereInput | OpcaoRespostaPerguntaScalarWhereInput[]
    id?: StringFilter<"OpcaoRespostaPergunta"> | string
    idOpcaoResposta?: StringNullableFilter<"OpcaoRespostaPergunta"> | string | null
    idPergunta?: StringFilter<"OpcaoRespostaPergunta"> | string
    respostaTexto?: StringNullableFilter<"OpcaoRespostaPergunta"> | string | null
    respostaNumerica?: DecimalNullableFilter<"OpcaoRespostaPergunta"> | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: BoolNullableFilter<"OpcaoRespostaPergunta"> | boolean | null
    createdAt?: DateTimeFilter<"OpcaoRespostaPergunta"> | Date | string
    idFormularioResposta?: StringFilter<"OpcaoRespostaPergunta"> | string
  }

  export type OpcaoRespostaUpsertWithWhereUniqueWithoutPerguntaInput = {
    where: OpcaoRespostaWhereUniqueInput
    update: XOR<OpcaoRespostaUpdateWithoutPerguntaInput, OpcaoRespostaUncheckedUpdateWithoutPerguntaInput>
    create: XOR<OpcaoRespostaCreateWithoutPerguntaInput, OpcaoRespostaUncheckedCreateWithoutPerguntaInput>
  }

  export type OpcaoRespostaUpdateWithWhereUniqueWithoutPerguntaInput = {
    where: OpcaoRespostaWhereUniqueInput
    data: XOR<OpcaoRespostaUpdateWithoutPerguntaInput, OpcaoRespostaUncheckedUpdateWithoutPerguntaInput>
  }

  export type OpcaoRespostaUpdateManyWithWhereWithoutPerguntaInput = {
    where: OpcaoRespostaScalarWhereInput
    data: XOR<OpcaoRespostaUpdateManyMutationInput, OpcaoRespostaUncheckedUpdateManyWithoutPerguntaInput>
  }

  export type OpcaoRespostaScalarWhereInput = {
    AND?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
    OR?: OpcaoRespostaScalarWhereInput[]
    NOT?: OpcaoRespostaScalarWhereInput | OpcaoRespostaScalarWhereInput[]
    id?: StringFilter<"OpcaoResposta"> | string
    idPergunta?: StringFilter<"OpcaoResposta"> | string
    resposta?: StringFilter<"OpcaoResposta"> | string
    ordem?: IntFilter<"OpcaoResposta"> | number
    respostaAberta?: BoolFilter<"OpcaoResposta"> | boolean
    createdAt?: DateTimeFilter<"OpcaoResposta"> | Date | string
  }

  export type FormularioUpsertWithoutPerguntasInput = {
    update: XOR<FormularioUpdateWithoutPerguntasInput, FormularioUncheckedUpdateWithoutPerguntasInput>
    create: XOR<FormularioCreateWithoutPerguntasInput, FormularioUncheckedCreateWithoutPerguntasInput>
    where?: FormularioWhereInput
  }

  export type FormularioUpdateToOneWithWhereWithoutPerguntasInput = {
    where?: FormularioWhereInput
    data: XOR<FormularioUpdateWithoutPerguntasInput, FormularioUncheckedUpdateWithoutPerguntasInput>
  }

  export type FormularioUpdateWithoutPerguntasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: FormularioRespostaUpdateManyWithoutFormularioNestedInput
  }

  export type FormularioUncheckedUpdateWithoutPerguntasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: FormularioRespostaUncheckedUpdateManyWithoutFormularioNestedInput
  }

  export type PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaDestinoInput = {
    where: PerguntaCondicaoWhereUniqueInput
    update: XOR<PerguntaCondicaoUpdateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedUpdateWithoutPerguntaDestinoInput>
    create: XOR<PerguntaCondicaoCreateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaDestinoInput>
  }

  export type PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaDestinoInput = {
    where: PerguntaCondicaoWhereUniqueInput
    data: XOR<PerguntaCondicaoUpdateWithoutPerguntaDestinoInput, PerguntaCondicaoUncheckedUpdateWithoutPerguntaDestinoInput>
  }

  export type PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaDestinoInput = {
    where: PerguntaCondicaoScalarWhereInput
    data: XOR<PerguntaCondicaoUpdateManyMutationInput, PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoInput>
  }

  export type PerguntaCondicaoScalarWhereInput = {
    AND?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
    OR?: PerguntaCondicaoScalarWhereInput[]
    NOT?: PerguntaCondicaoScalarWhereInput | PerguntaCondicaoScalarWhereInput[]
    id?: StringFilter<"PerguntaCondicao"> | string
    perguntaOrigemId?: StringFilter<"PerguntaCondicao"> | string
    perguntaDestinoId?: StringFilter<"PerguntaCondicao"> | string
    opcaoRespostaId?: StringNullableFilter<"PerguntaCondicao"> | string | null
    operador?: EnumOperadorCondicaoFilter<"PerguntaCondicao"> | $Enums.OperadorCondicao
    valorCondicao?: StringNullableFilter<"PerguntaCondicao"> | string | null
    createdAt?: DateTimeFilter<"PerguntaCondicao"> | Date | string
  }

  export type PerguntaCondicaoUpsertWithWhereUniqueWithoutPerguntaOrigemInput = {
    where: PerguntaCondicaoWhereUniqueInput
    update: XOR<PerguntaCondicaoUpdateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedUpdateWithoutPerguntaOrigemInput>
    create: XOR<PerguntaCondicaoCreateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedCreateWithoutPerguntaOrigemInput>
  }

  export type PerguntaCondicaoUpdateWithWhereUniqueWithoutPerguntaOrigemInput = {
    where: PerguntaCondicaoWhereUniqueInput
    data: XOR<PerguntaCondicaoUpdateWithoutPerguntaOrigemInput, PerguntaCondicaoUncheckedUpdateWithoutPerguntaOrigemInput>
  }

  export type PerguntaCondicaoUpdateManyWithWhereWithoutPerguntaOrigemInput = {
    where: PerguntaCondicaoScalarWhereInput
    data: XOR<PerguntaCondicaoUpdateManyMutationInput, PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemInput>
  }

  export type OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput = {
    id?: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    formularioResposta: FormularioRespostaCreateNestedOneWithoutRespostasInput
    pergunta: PerguntaCreateNestedOneWithoutRespostasInput
  }

  export type OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput = {
    id?: string
    idPergunta: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    idFormularioResposta: string
  }

  export type OpcaoRespostaPerguntaCreateOrConnectWithoutOpcaoRespostaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    create: XOR<OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput>
  }

  export type OpcaoRespostaPerguntaCreateManyOpcaoRespostaInputEnvelope = {
    data: OpcaoRespostaPerguntaCreateManyOpcaoRespostaInput | OpcaoRespostaPerguntaCreateManyOpcaoRespostaInput[]
    skipDuplicates?: boolean
  }

  export type PerguntaCreateWithoutOpcoesRespostasInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutPerguntaInput
    formulario: FormularioCreateNestedOneWithoutPerguntasInput
    condicoesDestino?: PerguntaCondicaoCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaUncheckedCreateWithoutOpcoesRespostasInput = {
    id?: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutPerguntaInput
    condicoesDestino?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaCreateOrConnectWithoutOpcoesRespostasInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutOpcoesRespostasInput, PerguntaUncheckedCreateWithoutOpcoesRespostasInput>
  }

  export type PerguntaCondicaoCreateWithoutOpcaoRespostaInput = {
    id?: string
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
    perguntaDestino: PerguntaCreateNestedOneWithoutCondicoesDestinoInput
    perguntaOrigem: PerguntaCreateNestedOneWithoutCondicoesOrigemInput
  }

  export type PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput = {
    id?: string
    perguntaOrigemId: string
    perguntaDestinoId: string
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type PerguntaCondicaoCreateOrConnectWithoutOpcaoRespostaInput = {
    where: PerguntaCondicaoWhereUniqueInput
    create: XOR<PerguntaCondicaoCreateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput>
  }

  export type PerguntaCondicaoCreateManyOpcaoRespostaInputEnvelope = {
    data: PerguntaCondicaoCreateManyOpcaoRespostaInput | PerguntaCondicaoCreateManyOpcaoRespostaInput[]
    skipDuplicates?: boolean
  }

  export type OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutOpcaoRespostaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    update: XOR<OpcaoRespostaPerguntaUpdateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedUpdateWithoutOpcaoRespostaInput>
    create: XOR<OpcaoRespostaPerguntaCreateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutOpcaoRespostaInput>
  }

  export type OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutOpcaoRespostaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    data: XOR<OpcaoRespostaPerguntaUpdateWithoutOpcaoRespostaInput, OpcaoRespostaPerguntaUncheckedUpdateWithoutOpcaoRespostaInput>
  }

  export type OpcaoRespostaPerguntaUpdateManyWithWhereWithoutOpcaoRespostaInput = {
    where: OpcaoRespostaPerguntaScalarWhereInput
    data: XOR<OpcaoRespostaPerguntaUpdateManyMutationInput, OpcaoRespostaPerguntaUncheckedUpdateManyWithoutOpcaoRespostaInput>
  }

  export type PerguntaUpsertWithoutOpcoesRespostasInput = {
    update: XOR<PerguntaUpdateWithoutOpcoesRespostasInput, PerguntaUncheckedUpdateWithoutOpcoesRespostasInput>
    create: XOR<PerguntaCreateWithoutOpcoesRespostasInput, PerguntaUncheckedCreateWithoutOpcoesRespostasInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutOpcoesRespostasInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutOpcoesRespostasInput, PerguntaUncheckedUpdateWithoutOpcoesRespostasInput>
  }

  export type PerguntaUpdateWithoutOpcoesRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutPerguntaNestedInput
    formulario?: FormularioUpdateOneRequiredWithoutPerguntasNestedInput
    condicoesDestino?: PerguntaCondicaoUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutOpcoesRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    idFormulario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaNestedInput
    condicoesDestino?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaCondicaoUpsertWithWhereUniqueWithoutOpcaoRespostaInput = {
    where: PerguntaCondicaoWhereUniqueInput
    update: XOR<PerguntaCondicaoUpdateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedUpdateWithoutOpcaoRespostaInput>
    create: XOR<PerguntaCondicaoCreateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedCreateWithoutOpcaoRespostaInput>
  }

  export type PerguntaCondicaoUpdateWithWhereUniqueWithoutOpcaoRespostaInput = {
    where: PerguntaCondicaoWhereUniqueInput
    data: XOR<PerguntaCondicaoUpdateWithoutOpcaoRespostaInput, PerguntaCondicaoUncheckedUpdateWithoutOpcaoRespostaInput>
  }

  export type PerguntaCondicaoUpdateManyWithWhereWithoutOpcaoRespostaInput = {
    where: PerguntaCondicaoScalarWhereInput
    data: XOR<PerguntaCondicaoUpdateManyMutationInput, PerguntaCondicaoUncheckedUpdateManyWithoutOpcaoRespostaInput>
  }

  export type FormularioCreateWithoutRespostasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    perguntas?: PerguntaCreateNestedManyWithoutFormularioInput
  }

  export type FormularioUncheckedCreateWithoutRespostasInput = {
    id?: string
    titulo: string
    descricao?: string | null
    ordem?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    perguntas?: PerguntaUncheckedCreateNestedManyWithoutFormularioInput
  }

  export type FormularioCreateOrConnectWithoutRespostasInput = {
    where: FormularioWhereUniqueInput
    create: XOR<FormularioCreateWithoutRespostasInput, FormularioUncheckedCreateWithoutRespostasInput>
  }

  export type OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput = {
    id?: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    opcaoResposta?: OpcaoRespostaCreateNestedOneWithoutRespostasInput
    pergunta: PerguntaCreateNestedOneWithoutRespostasInput
  }

  export type OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput = {
    id?: string
    idOpcaoResposta?: string | null
    idPergunta: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
  }

  export type OpcaoRespostaPerguntaCreateOrConnectWithoutFormularioRespostaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    create: XOR<OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput>
  }

  export type OpcaoRespostaPerguntaCreateManyFormularioRespostaInputEnvelope = {
    data: OpcaoRespostaPerguntaCreateManyFormularioRespostaInput | OpcaoRespostaPerguntaCreateManyFormularioRespostaInput[]
    skipDuplicates?: boolean
  }

  export type FormularioUpsertWithoutRespostasInput = {
    update: XOR<FormularioUpdateWithoutRespostasInput, FormularioUncheckedUpdateWithoutRespostasInput>
    create: XOR<FormularioCreateWithoutRespostasInput, FormularioUncheckedCreateWithoutRespostasInput>
    where?: FormularioWhereInput
  }

  export type FormularioUpdateToOneWithWhereWithoutRespostasInput = {
    where?: FormularioWhereInput
    data: XOR<FormularioUpdateWithoutRespostasInput, FormularioUncheckedUpdateWithoutRespostasInput>
  }

  export type FormularioUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntas?: PerguntaUpdateManyWithoutFormularioNestedInput
  }

  export type FormularioUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntas?: PerguntaUncheckedUpdateManyWithoutFormularioNestedInput
  }

  export type OpcaoRespostaPerguntaUpsertWithWhereUniqueWithoutFormularioRespostaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    update: XOR<OpcaoRespostaPerguntaUpdateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedUpdateWithoutFormularioRespostaInput>
    create: XOR<OpcaoRespostaPerguntaCreateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedCreateWithoutFormularioRespostaInput>
  }

  export type OpcaoRespostaPerguntaUpdateWithWhereUniqueWithoutFormularioRespostaInput = {
    where: OpcaoRespostaPerguntaWhereUniqueInput
    data: XOR<OpcaoRespostaPerguntaUpdateWithoutFormularioRespostaInput, OpcaoRespostaPerguntaUncheckedUpdateWithoutFormularioRespostaInput>
  }

  export type OpcaoRespostaPerguntaUpdateManyWithWhereWithoutFormularioRespostaInput = {
    where: OpcaoRespostaPerguntaScalarWhereInput
    data: XOR<OpcaoRespostaPerguntaUpdateManyMutationInput, OpcaoRespostaPerguntaUncheckedUpdateManyWithoutFormularioRespostaInput>
  }

  export type FormularioRespostaCreateWithoutRespostasInput = {
    id?: string
    createdAt?: Date | string
    formulario: FormularioCreateNestedOneWithoutRespostasInput
  }

  export type FormularioRespostaUncheckedCreateWithoutRespostasInput = {
    id?: string
    formularioId: string
    createdAt?: Date | string
  }

  export type FormularioRespostaCreateOrConnectWithoutRespostasInput = {
    where: FormularioRespostaWhereUniqueInput
    create: XOR<FormularioRespostaCreateWithoutRespostasInput, FormularioRespostaUncheckedCreateWithoutRespostasInput>
  }

  export type OpcaoRespostaCreateWithoutRespostasInput = {
    id?: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    pergunta: PerguntaCreateNestedOneWithoutOpcoesRespostasInput
    condicoes?: PerguntaCondicaoCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaUncheckedCreateWithoutRespostasInput = {
    id?: string
    idPergunta: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    condicoes?: PerguntaCondicaoUncheckedCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaCreateOrConnectWithoutRespostasInput = {
    where: OpcaoRespostaWhereUniqueInput
    create: XOR<OpcaoRespostaCreateWithoutRespostasInput, OpcaoRespostaUncheckedCreateWithoutRespostasInput>
  }

  export type PerguntaCreateWithoutRespostasInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    opcoesRespostas?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    formulario: FormularioCreateNestedOneWithoutPerguntasInput
    condicoesDestino?: PerguntaCondicaoCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaUncheckedCreateWithoutRespostasInput = {
    id?: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    opcoesRespostas?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    condicoesDestino?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaDestinoInput
    condicoesOrigem?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaCreateOrConnectWithoutRespostasInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutRespostasInput, PerguntaUncheckedCreateWithoutRespostasInput>
  }

  export type FormularioRespostaUpsertWithoutRespostasInput = {
    update: XOR<FormularioRespostaUpdateWithoutRespostasInput, FormularioRespostaUncheckedUpdateWithoutRespostasInput>
    create: XOR<FormularioRespostaCreateWithoutRespostasInput, FormularioRespostaUncheckedCreateWithoutRespostasInput>
    where?: FormularioRespostaWhereInput
  }

  export type FormularioRespostaUpdateToOneWithWhereWithoutRespostasInput = {
    where?: FormularioRespostaWhereInput
    data: XOR<FormularioRespostaUpdateWithoutRespostasInput, FormularioRespostaUncheckedUpdateWithoutRespostasInput>
  }

  export type FormularioRespostaUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulario?: FormularioUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type FormularioRespostaUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    formularioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaUpsertWithoutRespostasInput = {
    update: XOR<OpcaoRespostaUpdateWithoutRespostasInput, OpcaoRespostaUncheckedUpdateWithoutRespostasInput>
    create: XOR<OpcaoRespostaCreateWithoutRespostasInput, OpcaoRespostaUncheckedCreateWithoutRespostasInput>
    where?: OpcaoRespostaWhereInput
  }

  export type OpcaoRespostaUpdateToOneWithWhereWithoutRespostasInput = {
    where?: OpcaoRespostaWhereInput
    data: XOR<OpcaoRespostaUpdateWithoutRespostasInput, OpcaoRespostaUncheckedUpdateWithoutRespostasInput>
  }

  export type OpcaoRespostaUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pergunta?: PerguntaUpdateOneRequiredWithoutOpcoesRespostasNestedInput
    condicoes?: PerguntaCondicaoUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type OpcaoRespostaUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPergunta?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    condicoes?: PerguntaCondicaoUncheckedUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type PerguntaUpsertWithoutRespostasInput = {
    update: XOR<PerguntaUpdateWithoutRespostasInput, PerguntaUncheckedUpdateWithoutRespostasInput>
    create: XOR<PerguntaCreateWithoutRespostasInput, PerguntaUncheckedCreateWithoutRespostasInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutRespostasInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutRespostasInput, PerguntaUncheckedUpdateWithoutRespostasInput>
  }

  export type PerguntaUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoesRespostas?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    formulario?: FormularioUpdateOneRequiredWithoutPerguntasNestedInput
    condicoesDestino?: PerguntaCondicaoUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutRespostasInput = {
    id?: StringFieldUpdateOperationsInput | string
    idFormulario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opcoesRespostas?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    condicoesDestino?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type OpcaoRespostaCreateWithoutCondicoesInput = {
    id?: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutOpcaoRespostaInput
    pergunta: PerguntaCreateNestedOneWithoutOpcoesRespostasInput
  }

  export type OpcaoRespostaUncheckedCreateWithoutCondicoesInput = {
    id?: string
    idPergunta: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutOpcaoRespostaInput
  }

  export type OpcaoRespostaCreateOrConnectWithoutCondicoesInput = {
    where: OpcaoRespostaWhereUniqueInput
    create: XOR<OpcaoRespostaCreateWithoutCondicoesInput, OpcaoRespostaUncheckedCreateWithoutCondicoesInput>
  }

  export type PerguntaCreateWithoutCondicoesDestinoInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    formulario: FormularioCreateNestedOneWithoutPerguntasInput
    condicoesOrigem?: PerguntaCondicaoCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaUncheckedCreateWithoutCondicoesDestinoInput = {
    id?: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    condicoesOrigem?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaOrigemInput
  }

  export type PerguntaCreateOrConnectWithoutCondicoesDestinoInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutCondicoesDestinoInput, PerguntaUncheckedCreateWithoutCondicoesDestinoInput>
  }

  export type PerguntaCreateWithoutCondicoesOrigemInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaCreateNestedManyWithoutPerguntaInput
    formulario: FormularioCreateNestedOneWithoutPerguntasInput
    condicoesDestino?: PerguntaCondicaoCreateNestedManyWithoutPerguntaDestinoInput
  }

  export type PerguntaUncheckedCreateWithoutCondicoesOrigemInput = {
    id?: string
    idFormulario: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedCreateNestedManyWithoutPerguntaInput
    opcoesRespostas?: OpcaoRespostaUncheckedCreateNestedManyWithoutPerguntaInput
    condicoesDestino?: PerguntaCondicaoUncheckedCreateNestedManyWithoutPerguntaDestinoInput
  }

  export type PerguntaCreateOrConnectWithoutCondicoesOrigemInput = {
    where: PerguntaWhereUniqueInput
    create: XOR<PerguntaCreateWithoutCondicoesOrigemInput, PerguntaUncheckedCreateWithoutCondicoesOrigemInput>
  }

  export type OpcaoRespostaUpsertWithoutCondicoesInput = {
    update: XOR<OpcaoRespostaUpdateWithoutCondicoesInput, OpcaoRespostaUncheckedUpdateWithoutCondicoesInput>
    create: XOR<OpcaoRespostaCreateWithoutCondicoesInput, OpcaoRespostaUncheckedCreateWithoutCondicoesInput>
    where?: OpcaoRespostaWhereInput
  }

  export type OpcaoRespostaUpdateToOneWithWhereWithoutCondicoesInput = {
    where?: OpcaoRespostaWhereInput
    data: XOR<OpcaoRespostaUpdateWithoutCondicoesInput, OpcaoRespostaUncheckedUpdateWithoutCondicoesInput>
  }

  export type OpcaoRespostaUpdateWithoutCondicoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutOpcaoRespostaNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutOpcoesRespostasNestedInput
  }

  export type OpcaoRespostaUncheckedUpdateWithoutCondicoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPergunta?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type PerguntaUpsertWithoutCondicoesDestinoInput = {
    update: XOR<PerguntaUpdateWithoutCondicoesDestinoInput, PerguntaUncheckedUpdateWithoutCondicoesDestinoInput>
    create: XOR<PerguntaCreateWithoutCondicoesDestinoInput, PerguntaUncheckedCreateWithoutCondicoesDestinoInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutCondicoesDestinoInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutCondicoesDestinoInput, PerguntaUncheckedUpdateWithoutCondicoesDestinoInput>
  }

  export type PerguntaUpdateWithoutCondicoesDestinoInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    formulario?: FormularioUpdateOneRequiredWithoutPerguntasNestedInput
    condicoesOrigem?: PerguntaCondicaoUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutCondicoesDestinoInput = {
    id?: StringFieldUpdateOperationsInput | string
    idFormulario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    condicoesOrigem?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUpsertWithoutCondicoesOrigemInput = {
    update: XOR<PerguntaUpdateWithoutCondicoesOrigemInput, PerguntaUncheckedUpdateWithoutCondicoesOrigemInput>
    create: XOR<PerguntaCreateWithoutCondicoesOrigemInput, PerguntaUncheckedCreateWithoutCondicoesOrigemInput>
    where?: PerguntaWhereInput
  }

  export type PerguntaUpdateToOneWithWhereWithoutCondicoesOrigemInput = {
    where?: PerguntaWhereInput
    data: XOR<PerguntaUpdateWithoutCondicoesOrigemInput, PerguntaUncheckedUpdateWithoutCondicoesOrigemInput>
  }

  export type PerguntaUpdateWithoutCondicoesOrigemInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    formulario?: FormularioUpdateOneRequiredWithoutPerguntasNestedInput
    condicoesDestino?: PerguntaCondicaoUpdateManyWithoutPerguntaDestinoNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutCondicoesOrigemInput = {
    id?: StringFieldUpdateOperationsInput | string
    idFormulario?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    condicoesDestino?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoNestedInput
  }

  export type FormularioRespostaCreateManyFormularioInput = {
    id?: string
    createdAt?: Date | string
  }

  export type PerguntaCreateManyFormularioInput = {
    id?: string
    titulo: string
    codigo: string
    orientacaoResposta?: string | null
    ordem?: number
    obrigatoria?: boolean
    subPergunta?: boolean
    tipoPergunta: $Enums.TipoPergunta
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormularioRespostaUpdateWithoutFormularioInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutFormularioRespostaNestedInput
  }

  export type FormularioRespostaUncheckedUpdateWithoutFormularioInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutFormularioRespostaNestedInput
  }

  export type FormularioRespostaUncheckedUpdateManyWithoutFormularioInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaUpdateWithoutFormularioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUpdateManyWithoutPerguntaNestedInput
    condicoesDestino?: PerguntaCondicaoUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUncheckedUpdateWithoutFormularioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaNestedInput
    opcoesRespostas?: OpcaoRespostaUncheckedUpdateManyWithoutPerguntaNestedInput
    condicoesDestino?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoNestedInput
    condicoesOrigem?: PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemNestedInput
  }

  export type PerguntaUncheckedUpdateManyWithoutFormularioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    orientacaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    ordem?: IntFieldUpdateOperationsInput | number
    obrigatoria?: BoolFieldUpdateOperationsInput | boolean
    subPergunta?: BoolFieldUpdateOperationsInput | boolean
    tipoPergunta?: EnumTipoPerguntaFieldUpdateOperationsInput | $Enums.TipoPergunta
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaPerguntaCreateManyPerguntaInput = {
    id?: string
    idOpcaoResposta?: string | null
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    idFormularioResposta: string
  }

  export type OpcaoRespostaCreateManyPerguntaInput = {
    id?: string
    resposta: string
    ordem?: number
    respostaAberta?: boolean
    createdAt?: Date | string
  }

  export type PerguntaCondicaoCreateManyPerguntaDestinoInput = {
    id?: string
    perguntaOrigemId: string
    opcaoRespostaId?: string | null
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type PerguntaCondicaoCreateManyPerguntaOrigemInput = {
    id?: string
    perguntaDestinoId: string
    opcaoRespostaId?: string | null
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type OpcaoRespostaPerguntaUpdateWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formularioResposta?: FormularioRespostaUpdateOneRequiredWithoutRespostasNestedInput
    opcaoResposta?: OpcaoRespostaUpdateOneWithoutRespostasNestedInput
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idOpcaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFormularioResposta?: StringFieldUpdateOperationsInput | string
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idOpcaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFormularioResposta?: StringFieldUpdateOperationsInput | string
  }

  export type OpcaoRespostaUpdateWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUpdateManyWithoutOpcaoRespostaNestedInput
    condicoes?: PerguntaCondicaoUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type OpcaoRespostaUncheckedUpdateWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas?: OpcaoRespostaPerguntaUncheckedUpdateManyWithoutOpcaoRespostaNestedInput
    condicoes?: PerguntaCondicaoUncheckedUpdateManyWithoutOpcaoRespostaNestedInput
  }

  export type OpcaoRespostaUncheckedUpdateManyWithoutPerguntaInput = {
    id?: StringFieldUpdateOperationsInput | string
    resposta?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    respostaAberta?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoUpdateWithoutPerguntaDestinoInput = {
    id?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opcaoResposta?: OpcaoRespostaUpdateOneWithoutCondicoesNestedInput
    perguntaOrigem?: PerguntaUpdateOneRequiredWithoutCondicoesOrigemNestedInput
  }

  export type PerguntaCondicaoUncheckedUpdateWithoutPerguntaDestinoInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaOrigemId?: StringFieldUpdateOperationsInput | string
    opcaoRespostaId?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaDestinoInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaOrigemId?: StringFieldUpdateOperationsInput | string
    opcaoRespostaId?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoUpdateWithoutPerguntaOrigemInput = {
    id?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opcaoResposta?: OpcaoRespostaUpdateOneWithoutCondicoesNestedInput
    perguntaDestino?: PerguntaUpdateOneRequiredWithoutCondicoesDestinoNestedInput
  }

  export type PerguntaCondicaoUncheckedUpdateWithoutPerguntaOrigemInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaDestinoId?: StringFieldUpdateOperationsInput | string
    opcaoRespostaId?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoUncheckedUpdateManyWithoutPerguntaOrigemInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaDestinoId?: StringFieldUpdateOperationsInput | string
    opcaoRespostaId?: NullableStringFieldUpdateOperationsInput | string | null
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaPerguntaCreateManyOpcaoRespostaInput = {
    id?: string
    idPergunta: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
    idFormularioResposta: string
  }

  export type PerguntaCondicaoCreateManyOpcaoRespostaInput = {
    id?: string
    perguntaOrigemId: string
    perguntaDestinoId: string
    operador?: $Enums.OperadorCondicao
    valorCondicao?: string | null
    createdAt?: Date | string
  }

  export type OpcaoRespostaPerguntaUpdateWithoutOpcaoRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formularioResposta?: FormularioRespostaUpdateOneRequiredWithoutRespostasNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateWithoutOpcaoRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPergunta?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFormularioResposta?: StringFieldUpdateOperationsInput | string
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyWithoutOpcaoRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPergunta?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    idFormularioResposta?: StringFieldUpdateOperationsInput | string
  }

  export type PerguntaCondicaoUpdateWithoutOpcaoRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntaDestino?: PerguntaUpdateOneRequiredWithoutCondicoesDestinoNestedInput
    perguntaOrigem?: PerguntaUpdateOneRequiredWithoutCondicoesOrigemNestedInput
  }

  export type PerguntaCondicaoUncheckedUpdateWithoutOpcaoRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaOrigemId?: StringFieldUpdateOperationsInput | string
    perguntaDestinoId?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerguntaCondicaoUncheckedUpdateManyWithoutOpcaoRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    perguntaOrigemId?: StringFieldUpdateOperationsInput | string
    perguntaDestinoId?: StringFieldUpdateOperationsInput | string
    operador?: EnumOperadorCondicaoFieldUpdateOperationsInput | $Enums.OperadorCondicao
    valorCondicao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaPerguntaCreateManyFormularioRespostaInput = {
    id?: string
    idOpcaoResposta?: string | null
    idPergunta: string
    respostaTexto?: string | null
    respostaNumerica?: Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: boolean | null
    createdAt?: Date | string
  }

  export type OpcaoRespostaPerguntaUpdateWithoutFormularioRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opcaoResposta?: OpcaoRespostaUpdateOneWithoutRespostasNestedInput
    pergunta?: PerguntaUpdateOneRequiredWithoutRespostasNestedInput
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateWithoutFormularioRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idOpcaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    idPergunta?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpcaoRespostaPerguntaUncheckedUpdateManyWithoutFormularioRespostaInput = {
    id?: StringFieldUpdateOperationsInput | string
    idOpcaoResposta?: NullableStringFieldUpdateOperationsInput | string | null
    idPergunta?: StringFieldUpdateOperationsInput | string
    respostaTexto?: NullableStringFieldUpdateOperationsInput | string | null
    respostaNumerica?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    respostaBooleana?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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