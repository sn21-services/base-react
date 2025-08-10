import camelCase from 'lodash.camelcase';
import snakeCase from 'lodash.snakecase';
import get from 'lodash.get';

// check if data is array
export const isArray = <T>(d: T): boolean => Array.isArray(d);

// check if data is object
export const isObject = <T>(d: T): boolean =>
  d === Object(d) && !isArray(d) && typeof d !== 'function';

// convert object keys to camelCase
export const toCamel = function <T = unknown>(
  d: T
): T | Record<string, unknown> {
  if (isObject(d)) {
    const o: Record<string, unknown> = {};
    Object.keys(d as Record<string, unknown>).forEach(k => {
      o[camelCase(k)] = toCamel(get(d, k));
    });

    return o;
  }

  if (isArray(d)) {
    return (d as Array<unknown>).map((o: unknown) => toCamel(o)) as T;
  }

  return d;
};

// convert object keys to snake_case
export const toSnakeCase = function <T = unknown>(
  d: T,
  filter = false
): T | Record<string, unknown> | undefined {
  if (d instanceof FormData || d instanceof File) {
    return d;
  }

  if (isObject(d)) {
    const o: Record<string, unknown> = {};
    Object.keys(d as Record<string, unknown>).forEach(k => {
      o[snakeCase(k)] = toSnakeCase(get(d, k) as T, filter);
    });

    return o;
  }

  if (isArray(d)) {
    return (d as Array<unknown>).map((o: unknown) =>
      toSnakeCase(o, filter)
    ) as T;
  }

  if (filter && d === '') {
    return undefined;
  }

  return d;
};
