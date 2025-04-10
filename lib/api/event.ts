import { getRequest } from "./index";

type SearchEventsArgs = {
  searchTerm?: string;
  page?: number;
  limit?: number;
  date?: string;
  sort?: "asc" | "desc";
  priceRange?: [number, number];
};

export type Event = {
  _id: string;
  name: string;
  description: string;
  images: string[];
};

export async function searchEvents({
  searchTerm = "",
  page = 1,
  limit = 10,
  date,
  sort,
  priceRange,
}: SearchEventsArgs): Promise<Event[]> {
  const sortParam = sort
    ? JSON.stringify({ name: sort === "asc" ? "ascending" : "descending" })
    : undefined;

  let priceRangeParam: any = undefined;
  if (priceRange) {
    if (priceRange[1] === 999) {
      priceRangeParam = { min: priceRange[0] };
    } else {
      priceRangeParam = { min: priceRange[0], max: priceRange[1] };
    }
  }

  const params: any = {
    searchTerm,
    page: page - 1, // backend expects 0-indexed
    limit,
    ...(sortParam && { sortParam }),
    ...(date && { date }),
    ...(priceRangeParam && { priceRange: JSON.stringify(priceRangeParam) }),
  };

  const { events } = await getRequest<{ events: Event[] }>("events", params);
  return events;
}
