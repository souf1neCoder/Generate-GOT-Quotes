function Quote({quote}){
  return (
    <div className="quote" data-aos="zoom-in">
      <h3>"{quote.sentence}"</h3>
      <h6>- {quote.actor}</h6>
    </div>
  );
};


export default Quote;