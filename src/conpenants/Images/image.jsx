import React from 'react'
// import Burger from '../../img/Burger.png'
 const Image  = (props) => {
    const {name,nme,asia} = props;

  return(
    <>
   {name &&  <img src={require(`../../img/${name}.png`)} alt={name}/>}
   {asia &&  <img src={require(`../../img/${asia}.png`)} alt={asia}/>}
   {nme &&  <img src={require(`../../img/${nme}.png`)} alt={nme}/>}


    </>
   )
  };
  export default Image;
