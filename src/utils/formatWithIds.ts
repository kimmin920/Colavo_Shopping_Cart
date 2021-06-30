import {
  Items,
  Discounts,
  Item,
  Discount,
} from '../types/salon.types';

type FormattableObject = Items | Discounts;

interface formattedObject {
  [key: string]: Item | Discount;
}

export default function formatWithIds(object: FormattableObject): formattedObject {
  const result: FormattableObject = {};

  const keys = Object.keys(object);

  keys.forEach(key => {
    result[key] = {
      ...object[key],
      id: key,
    };
  });

  return result;
}
