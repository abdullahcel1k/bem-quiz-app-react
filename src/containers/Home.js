import React from 'react';
import QuizCart from '../components/QuizCart';

const Home = () => {
  let cards = Array.apply(null, Array(5));
  const createCards = () => {

    return cards.map((item, index) => {
      return <QuizCart key={index} index={index} />;
    })
  };

  return (
    <div className='row mt-5'>
      <h1 className='text-center mb-5'>Girebileceğiniz Sınavlar</h1>
      {createCards()}
    </div>
  )
}

export default Home