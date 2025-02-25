type Primitive = string | number | boolean | null | undefined | Date;

export type SnakeToCamel<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamel<U>>}`
  : S;

type ConvertToCamelCase<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
  ? Array<ConvertToCamelCase<U>>
  : {
      [K in keyof T as SnakeToCamel<K & string>]: ConvertToCamelCase<T[K]>;
    };

export function snakeToCamel<T extends string>(str: T): SnakeToCamel<T> {
  return (
    str
      // Convert the first letter after each underscore or dash to uppercase
      .replace(/[-_](.)/g, (_, group1) =>
        group1.toUpperCase()
      ) as SnakeToCamel<T>
  );
}

export function convertToCamelCase<T>(obj: T): ConvertToCamelCase<T> {
  if (typeof obj !== "object" || obj === null) {
    return obj as ConvertToCamelCase<T>;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertToCamelCase(item)) as ConvertToCamelCase<T>;
  }

  const result: Partial<ConvertToCamelCase<T>> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = snakeToCamel(key) as keyof ConvertToCamelCase<T>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)[camelKey] = convertToCamelCase((obj as T)[key]);
    }
  }

  return result as ConvertToCamelCase<T>;
}
