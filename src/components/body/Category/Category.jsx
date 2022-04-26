import React, { useEffect,useState } from 'react'
import Item from './CategoryItem/CategoryItem';
export const Category = () => {
  const [catgItems, setcatgItems] = useState([]);
  
  useEffect(()=>{
    fetch('./catagory.JSON')
    .then(res => res.json())
    .then(data => {
      setcatgItems(data);
    })
  },[]);
  return (

    <div style={{marginBottom:30}}>

      <div className="container">
      {catgItems.map(eachItem => <Item key={eachItem.key} Item = {eachItem} />)}
      </div>

    </div>
  )
}
export default Category;

