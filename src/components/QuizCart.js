import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({ quiz }) => {
 return (
  <div className="col-3 offset-1 card mb-5">
   <img src="/images/quiz.webp" className="card-img-top" alt="..." />
   <div className="card-body text-center">
    <h5 className="card-title">{quiz.name}</h5>
    <p className="card-text">{quiz.description}</p>
    <Link to={'quiz/' + quiz.slug} className="btn btn-primary">Let's Start</Link>
   </div>
  </div>
 )
}

export default QuizCart