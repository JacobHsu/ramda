const R = require('ramda');

const nationOptions = [
    {
      value: "1",
      title: "USA"
    },
    {
      value: "2",
      title: "CHN"
    },
    {
      value: "3",
      title: "JPN"
    }
  ];
  
const nation = R.find( R.propEq('value', '2' ) )(nationOptions).title
console.log('nation:', nation)