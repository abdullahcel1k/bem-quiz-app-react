import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({ index }) => {
 return (
  <div className="col-3 offset-1 card mb-5">
   <img src="/images/quiz.webp" className="card-img-top" alt="..." />
   <div className="card-body text-center">
    <h5 className="card-title">Sınav adı {index + 1}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={'quiz/' + index} className="btn btn-primary">Let's Start</Link>
   </div>
  </div>
 )
}

export default QuizCart