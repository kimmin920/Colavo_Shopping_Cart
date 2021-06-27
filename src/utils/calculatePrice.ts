export function calculateTotalPrice(items: any) {
  // TODO: change any to proper type & style
  return items.reduce((acc: number, item: any) => acc + item.price * item.count, 0);
}

export function calculateItemPrice(item: any) {
  return item.price * item.count * (item.discount || 1);
}

export function calculateTotalDiscounts(discounts: any, items: any) {
  let totalDiscount = 0;

  discounts.forEach((discount: any) => {
    const { appliedItemIds, rate } = discount;

    appliedItemIds.forEach((id: string) => {
      const targetItem = items.find((item: any) => item.id === id);
      const { price, count } = targetItem;

      totalDiscount += price * count * rate;
    });
  });

  return totalDiscount;
}
