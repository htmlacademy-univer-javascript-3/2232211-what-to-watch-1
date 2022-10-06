import { CatalogGenreItem } from '../components/catalog-genre-item/catalog-genre-item';

const items: [string, boolean?][] = [
  ['All genres', true],
  ['Comedies'],
  ['Crime'],
  ['Documentary'],
  ['Dramas'],
  ['Horror'],
  ['Kids & Family'],
  ['Romance'],
  ['Sci-Fi'],
  ['Thrillers']
];

export const catalogGenreItems = items.map((i) => <CatalogGenreItem key={i[0]} genre={i[0]} isActive={i[1]} />);
