export interface IPaginated<Item> {
  page: number,
  totalPages: number,
  totalCount: number
  items: Item[]
}
