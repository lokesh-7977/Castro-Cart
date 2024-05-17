import React, { useContext } from 'react'
import styles from './Styles/ShopCategory.module.css';
import { ShopContext } from '../Context/ShopContext'
const ShopCategory = (props) => {
  const {} = useContext(ShopContext)
  return (
    <>
       <div className={styles.shop_category}>
          <img src={props.banner} className={styles.shopCategory_banner} alt="Banner" />
          <div className={styles.shopcategoryIndex_sort}>
            <p>
              <span>Showing 1-12</span>Out of 36 Products
            </p>
            <div className={styles.shopCategory_sort}>
              Sort By <img src="dropdown" alt="" />
            </div>
          </div>
          <div className={styles.shopCategory_Products}>
            {/* {map} */}

          </div>
      <div className={styles.shopCategory_loadmore}>
          Explore More
      </div>
       </div>
    </>
  )
}

export default ShopCategory