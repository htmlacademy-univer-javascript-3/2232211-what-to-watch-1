import { MovieItemProps, MovieItem } from '../components/movie-item/movie-item';

const mainPageMoviesNames: string[] = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'No Country for Old Men',
  'Snatch',
  'Moonrise Kingdom',
  'Seven Years in Tibet',
  'Midnight Special',
  'War of the Worlds',
  'Dardjeeling Limited',
  'Orlando',
  'Mindhunter',
  'Midnight Special'
];

const moviePageMoviesNames: string[] = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator'
];

const myListPageMovieNames: string[] = [
  'Fantastic Beasts: The Crimes of Grindelwald',
  'Bohemian Rhapsody',
  'Macbeth',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island'
];

const movieNameSplitRegexp = new RegExp('[^a-zA-Z0-9]');

const getMovieItemProps = (movieName: string): MovieItemProps => {
  const dashedMovieName = movieName
    .split(movieNameSplitRegexp)
    .filter((i) => i.trim())
    .map((i) => i.toLowerCase())
    .join('-');

  return {
    imageProps: {
      source: `img/${dashedMovieName}.jpg`,
      alt: movieName,
      width: '280',
      height: '175'
    },
    name: movieName,
    href: 'film-page.html'
  };
};

const getMovieItems = (moviesNames: string[]) => moviesNames.map((name, index) => <MovieItem key={name + index.toString()} {...getMovieItemProps(name)} />);

export const mainPageMovieItems = getMovieItems(mainPageMoviesNames);
export const moviePageMovieItems = getMovieItems(moviePageMoviesNames);
export const myListPageMovieItems = getMovieItems(myListPageMovieNames);
