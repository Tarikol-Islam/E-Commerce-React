import React from 'react'
import classes from './CategoryItem.module.css'
export const CategoryItem = ({Item}) => {
    let url = "#";
    console.log(Item);
    
  return (
    <div className={classes.category_item}>

            <div className={classes.category_img_box}>
              <img src={Item.img} alt={Item.title} width="30" />
            </div>

            <div className={classes.category_content_box}>

              <div className={classes.category_content_flex}>
                <h3 className={classes.category_item_title}>{Item.title}</h3>

                <p className={classes.category_item_amount}>{Item.amount}</p>
              </div>

              <a href={url} className={classes.category_btn}>Show all</a>

            </div>

          </div>
  )
}
export default CategoryItem;