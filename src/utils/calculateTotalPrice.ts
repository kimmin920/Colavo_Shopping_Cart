export default function calculateTotalPrice(items: any) {
  // TODO: change any to proper type
  return items.reduce((acc: number, item: any) => acc + item.count * item.price, 0);
}
