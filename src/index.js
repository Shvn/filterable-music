import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableMusic from './App';
import registerServiceWorker from './registerServiceWorker';

var MUSIC_LIST = [
  {name: 'Mere Raske Qamar', duration: '5:01', musician: 'Rahat Fateh Ali Khan', type: 'Ghazal'},
  {name: 'Tamma Tamma Again', duration: '4:44', musician: 'Lata Mangeshkar', type: 'Pop'},
  {name: 'The Breakup Song', duration: '5:11', musician: 'A R Rehman', type: 'Religious'},
  {name: 'Zaalima', duration: '3:51', musician: 'Kishore Kumar', type: 'Rock'},
  {name: 'Ho Gya Hai Tujhko To', duration: '5:01', musician: 'Sunidhi Chauhan', type: 'Patriotic'},
  {name: 'Lag Ja Gale Se Phir', duration: '4:36', musician: 'Bappi Lahiri', type: 'Instrumental'},
  {name: 'Enna Sona', duration: '5:09', musician: 'A R Rehman', type: 'Ghazal'},
  {name: 'Kala Chasma', duration: '3:22', musician: 'Kishore Kumar', type: 'Religious'},
  {name: 'Piya More', duration: '4:32', musician: 'A R Rehman', type: 'Instrumental'},
  {name: 'Galti Se Mistake', duration: '5:22', musician: 'Sunidhi Chauhan', type: 'Religious'},
  {name: 'Khaana Khaake', duration: '6:02', musician: 'Rahat Fateh Ali Khan', type: 'Rock'},
  {name: 'Chandralekha', duration: '4:00', musician: 'Sunidhi Chauhan', type: 'Rock'},
  {name: 'Bakheda', duration: '4:59', musician: 'Bappi Lahiri', type: 'Pop'}
];

ReactDOM.render(<FilterableMusic musicList={MUSIC_LIST} />, document.getElementById('root'));
registerServiceWorker();
