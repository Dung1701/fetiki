import React, { useState } from "react";
import ImageRead from "../../assets/Image/Chính hãng.png"


const ProductItem = (props) => {
  const arrStar =[{
    img:"https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg"
  },
  {
    img:"https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg"
  },
  {
    img:"https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg"
  },
  {
    img:"https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg"
  },
  {
    img:"https://tiki.loca.lt/api/v1/image/get/image-1703043325304.svg"
  },
]
  const data = props?.data;


  const formatCurrency = (price) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  // const imageSrc = `${getImageUrl}/${data?.image}`;
  // const imageSrcAlt = `${getImageUrl}/image-1703067361701.png`;
  return (
    <div className="product_item">
      <div className="item1">
        <div className="thumbnail">

          <img
          className="thumbnail_image"
            src={`https://tiki.loca.lt/api/v1/image/get/${data.image}`}
            alt="No Image" 
          />
          <img src={ImageRead} alt="real" className="img-child" />
        </div>
        <div className="body-info">
          <div className="name">
            <h5>{data?.description}</h5>
          </div>
          <div className="rating">
            {arrStar.map((item , index) =>{
              return(

            <div className="star" key={index}>
                <img src={item.img}/>
            </div>
              )
            })}
            <p>|</p>
            <div className="quantity-sold">đã bán {data?.quantity}</div>
          </div>
          <div className="sell">
            <span className="discount">{formatCurrency(data?.DiscountPrice) }</span>
            <span style={{marginLeft:"10px" ,color:'gray'}}>{data.discount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductItem;