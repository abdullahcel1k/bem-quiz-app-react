import React from 'react'

const Home = () => {
  let cards = Array.apply(null, Array(5));
  const createCards = () => {

    return cards.map(item => {
      cards += <div className="col-4 card" style="width: 18rem;">
        <img src="/images/quiz.webp" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>;
    })
  };

  return (
    <div className='row'>
      {cards.map(item => {
        return <div className="col-4 card" >
          <img src="/images/quiz.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>;
      })}
    </div>
  )
}

export default Home