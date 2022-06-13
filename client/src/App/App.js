import React from "react";
import Button from "react-bootstrap/Button"
import './App.scss';

function App() {

  const alertFunc = () => {
    alert("Alert!");
  }
  
  return (
    <h1>Hello World!</h1>
  );
}

const sampleCards = [
  {
    id: 1,
    question: 'What color is the sky?',
    answer: 'blue',
    options: ['yellow', 'blue', 'red', 'purple']
  },
  {
    id: 2,
    question: 'How many ounces are in a pound?',
    answer: '16',
    options: ['12', '14', '16', '18']
  },
  {
    id: 3,
    question: 'What type of dog is Snoopy?',
    answer: 'beagle',
    options: ['beagle', 'lab', 'collie', 'pitbull']
  },
  {
    id: 4,
    question: 'How many fucks do I give?',
    answer: '0',
    options: ['0', '1', '2', '76']
  },
]

export default App;
