import { ObjectValueHavingIds, ObjectHavingKeys } from '../types/salon.types';

export default function formatWithIds(object: ObjectHavingKeys): ObjectValueHavingIds {
  const result: ObjectHavingKeys = {};

  const keys = Object.keys(object);

  keys.forEach(key => {
    result[key] = {
      ...object[key],
      id: key,
    };
  });

  return result;
}
