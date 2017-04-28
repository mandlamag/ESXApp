const gates = require('../../images/people/bill.jpeg');
const bluford = require('../../images/people/blackguy.jpg');
const stallman = require('../../images/people/stallman.jpg');
const johnson = require('../../images/people/user4.jpg');
const musk = require('../../images/people/user5.jpg');
const varun = require('../../images/people/user6.jpg');
const branson = require('../../images/people/branson.jpg');
const elison = require('../../images/people/elison.jpeg');
const bezos = require('../../images/people/bezos.jpg');
const motsepe = require('../../images/people/patrice-motsepe.jpg');
const winfrey = require('../../images/people/winfrey.jpg');

export const stocks = [
  {
    img: gates,
    mnemonic:'MSN' ,
    name: 'Bill',
    surname: 'Gates',
    shares: 500,
    price: 10,
	delta: 'up',
	percentage: '35%',
  },
  {
    img: bluford,
    mnemonic:'NSA' ,
    name: 'George',
    surname: 'Bluford',
    shares: 1000,
    price: 12,
		delta: 'down',
		percentage: '15%'
  },
  {
    img: stallman,
    mnemonic:'MIT' ,
    name: 'Richard',
    surname: 'Stallman',
    shares: 1335 ,
    price: 7,
		delta: 'down',
		percentage: '35%'
  },
  {
    img: musk,
    mnemonic:'TSL' ,
    name: 'Elon',
    surname: 'Musk',
    shares: 120 ,
    price: 12,
		delta: 'up',
		percentage: '10%'
  },
  {
    img: varun,
    mnemonic:'BLK' ,
    name: 'Kimberly',
    surname: 'Bryant',
    shares: 1220 ,
    price:10,
		delta: 'down',
		percentage: '55%'
  },
  {
    img: johnson,
    mnemonic:'KBL' ,
    name: 'Michael',
    surname: 'Johnson',
    shares: 1293 ,
    price: 13,
		delta: 'up',
		percentage: '13%'
  },
];

export const offers = [
  {
    img: branson,
    mnemonic:'VGN' ,
    name: 'R',
    surname: 'Branson',
    shares: 500,
    price: 10,
    side: 'Buy',
  },
 {
    img: bezos,
    mnemonic:'AMZ' ,
    name: 'C',
    surname: 'Bezos',
    shares: 100,
    price: 12,
    side: 'Buy',
  },
 {
    img: elison,
    mnemonic:'ORL' ,
    name: 'L',
    surname: 'Elison',
    shares: 140,
    price: 15,
    side: 'Sell',
  },
  {
    img:winfrey,
    mnemonic:'HPO' ,
    name: 'O',
    surname: 'Winfrey',
    shares: 340,
    price: 25,
    side: 'Buy',
  },
  {
    img:motsepe,
    mnemonic:'UBT',
    name: 'P',
    surname: 'Motsepe',
    shares: 200,
    price: 15,
    side: 'Buy',
},
];
