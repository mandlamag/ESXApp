const gates = require('../../images/people/bill.jpeg');
const bluford = require('../../images/people/blackguy.jpg');
const stallman = require('../../images/people/stallman.jpg');
const johnson = require('../../images/people/user4.jpg');
const musk = require('../../images/people/user5.jpg');
const varun = require('../../images/people/user6.jpg');

export const stocks = [
  {
    img: gates,
    name: 'MSN - B. Gates',
    shares: 500,
    price: 10,
		delta: 'up',
		percentage: '35%',
  },
  {
    img: bluford,
    name: 'NSA - G Bluford',
    shares: 1000,
    price: 8,
		delta: 'down',
		percentage: '15%'
  },
  {
    img: stallman,
    name: 'MIT - R. Stallman',
    shares: 1335 ,
    price: 7,
		delta: 'down',
		percentage: '35%'
  },
  {
    img: musk,
    name: 'TSL - Elon Musk',
    shares: 120 ,
    price: 12,
		delta: 'up',
		percentage: '10%'
  },
  {
    img: varun,
    name: 'BLK - K Bryant',
    shares: 12 ,
    price:10,
		delta: 'down',
		percentage: '55%'
  },
  {
    img: johnson,
    name: 'KBL -  M Johnson',
    shares: 3 ,
    price: 10,
		delta: 'up',
		percentage: '13%'
  },
];
