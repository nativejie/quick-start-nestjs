/*
 * @Description: 文件描述
 * @Author: zhoujie
 * @Date: 2022-01-24 16:18:56
 * @LastEditTime: 2022-01-24 16:49:22
 * @LastEditors: zhoujie
 */

type Column = {
  Field: string;
  Type: string;
  Collation: null;
  Null: string;
  Key: string;
  Default: string;
  Extra: string;
  Privileges: string;
  Comment: string;
};

const typeMapping = {
  int: 'number',
  bigint: 'number',
  smallint: 'number',
  tinyint: 'number',
  char: 'string',
  varcher: 'string',
  text: 'string',
  blob: 'string',
  decimal: 'number',
  date: 'Date',
  datetime: 'Date',
};

const reverseType = (type: string): { length?: number; type: string } => {
  const ingoreType = ['text', 'decimal', 'blob', 'json'];
  if (type.indexOf('int') >= 0 || ingoreType.includes(type)) {
    return { type };
  }
  const symbolIndex = type.indexOf('(');
  if (symbolIndex >= 0) {
    const realType = type.substring(0, symbolIndex);
    const length = type.substring(symbolIndex + 1, type.length - 1);
    return {
      type: realType,
      length: parseInt(length),
    };
  }
  return { type };
};

export const camelCased = (str: string): string => {
  return str.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
};

export const formateColumns = (columns: Column[]) => {
  return columns.map((column: Column) => {
    const { Field, Type, Default, Null, Comment, Extra } = column;
    const { type, length } = reverseType(Type);
    const nullable = Null === 'NO' ? false : true;
    return {
      name: Field,
      type,
      length,
      nullable,
      default: Default,
      comment: Comment,
      ormType: typeMapping[type],
    };
  });
};
