import { ReviewProps } from '../components/review/review';

export const firstColumnReviews: ReviewProps[] = [
  {
    id: 1,
    user: {
      id: 17,
      name: 'Emely'
    },
    rating: 9.9,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-06-03T12:25:36.946Z'
  },
  {
    id: 2,
    user: {
      id: 16,
      name: 'Mollie'
    },
    rating: 1.1,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2022-06-23T12:25:36.946Z'
  },
];

export const secondColumnReviews: ReviewProps[] = [
  {
    id: 1,
    user: {
      id: 13,
      name: 'Zak'
    },
    rating: 8.1,
    comment: 'I really find it difficult to believe this movie is rated highly by people. It\'s hands down the worst movie I\'ve seen in my life',
    date: '2022-06-07T12:25:36.946Z'
  },
  {
    id: 2,
    user: {
      id: 17,
      name: 'Emely'
    },
    rating: 8.4,
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2022-06-05T12:25:36.946Z'
  }
];
