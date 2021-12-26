import { Project, Stats } from './models';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Bamboo Stand',
    pledge: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Baker member list.",
    left: 101,
  },
  {
    id: '2',
    name: 'Black Edition Stand',
    pledge: 75,
    description:
      "You get a Black Special Edition computer stand and a personal than you. You'll be added to our Backer member list. Shipping is included.",
    left: 64,
  },
  {
    id: '3',
    name: 'Mahogany Special Edition',
    pledge: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 0,
  },
];

export const stats: Stats = {
  dayLeft: 56,
  totalBacker: 5007,
  totalDollars: 89914,
};
