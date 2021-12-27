import { Pledge, Stats } from './models';

export const pledges: Pledge[] = [
  {
    id: 0,
    name: 'Pledge with no reward',
    amount: 0,
    description:
      'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    left: 0,
  },
  {
    id: 1,
    name: 'Bamboo Stand',
    amount: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Baker member list.",
    left: 101,
  },
  {
    id: 2,
    name: 'Black Edition Stand',
    amount: 75,
    description:
      "You get a Black Special Edition computer stand and a personal than you. You'll be added to our Backer member list. Shipping is included.",
    left: 64,
  },
  {
    id: 3,
    name: 'Mahogany Special Edition',
    amount: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 0,
  },
];

export const stats: Stats = {
  left: 56,
  backers: 5007,
  pledged: 89_914,
  goal: 100_000,
};
