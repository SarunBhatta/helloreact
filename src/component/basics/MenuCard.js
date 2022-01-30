import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card-cointainer'>
    {menuData.map((curElem)=>{
      return(
        <>
        <div className="card-container" key={curElem.id } > </div>
  <div className="card"> </div>
  <div className="card-body"> </div>
  <span className="card-number card-circle subtle"  color="red">  {curElem.id } </span>
  <span className="card-author subtle " >{curElem.name }</span>
  <h2 className='card-title'>{curElem.name }</h2>
  <span className='card-description '>
  {curElem.description}
  </span>
  <div className='card-read'>Read</div>
  <img src={curElem.image} alt="images" className='card-media'/>
  
  <span className='card-tag subtle'>Order Now</span>
      
    </>
      )
    })}
    </section>
  </>
  )

}

export default MenuCard;
