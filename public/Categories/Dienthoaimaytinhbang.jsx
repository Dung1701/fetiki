import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../product-page/ProductItem";

// import Item from "antd/es/list/Item";

function Dienthoaimaytinhbang() {
  const Body = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const getProducts = async () => {
      try {
        // const categorisid = "nhan tu props"
        // const categorisid = "4cc25950-9f1c-11ee-a2d5-8b1f6d88a1c7"
        // const productURL = `https://tiki.loca.lt/api/v1/product?fields=["$all"]&filter={"categorisid":"${categorisid}"}`;
        const productURL = `https://tiki.loca.lt/api/v1/product/categoris/75cc5dc0-a631-11ee-8e2c-6d3bff3feb0c`;
        const res = await axios.get(productURL);
        const arrayItem = res?.data?.map((item, index) => {
          const price = parseFloat(item.price);
          const discountPercentage = parseFloat(item.percent_discount) / 100;
          
          let formattedDiscountedPrice;
          
          // Check if there is a discount
          if (discountPercentage > 0) {
            const discountedPrice = price - price * discountPercentage;
            formattedDiscountedPrice = discountedPrice.toFixed();
            console.log("Discounted Price:", formattedDiscountedPrice);
          } else {
            formattedDiscountedPrice = price.toFixed();
            console.log("Original Price:", formattedDiscountedPrice);
          }
          
          return {
            // ...item,
            id: item?.id,
            name: item?.name,
            price: item?.price,
            description: item?.description,
            image: item?.image,
            quantity: item?.stock_quantity,
            discount: item?.percent_discount,
            DiscountPrice: formattedDiscountedPrice,
          };
        });
  
        setProducts(arrayItem);
      } catch (error) {}
    };
      
      console.log("cart",products)
    useEffect(() => {
      getProducts();
    },[]);
    return (
      <div>
        <main>
          <div className="container-main">
            <div className="main">
              {/* header */}
              <div className="header-main">
                <h2 className="title">Gợi ý hôm nay</h2>
                {/* item */}
                <div className="menu">
                  {/* dành cho bạn */}
                  <div className="menu-item active">
                    <img src="../img/user.png" alt="Tiki" />
                    <div className="tab-text">Dành cho bạn</div>
                  </div>
                  <div className="menu-item">
                    <img src="../img/nano.jpg" alt="Salo sữa mát" />
                    <div className="tab-text">Bão Sale Sữa mát</div>
                  </div>
                  {/*  */}
                  <div className="menu-item">
                    <img src="../img/Bán chạy.png" alt="Salo sữa mát" />
                    <div className="tab-text">Top Bán Chạy</div>
                  </div>
                  {/*  */}
                  <div className="menu-item">
                    <img src="../img/hot.png" alt="Salo sữa mát" />
                    <div className="tab-text">Deal Siêu Hot</div>
                  </div>
                </div>
              </div>
              {/* header content*/}
              <div className="home">
                <div className="content" style={{marginTop:"20px"}}>
            
                    {products && products.length > 0 ? (
                      products.map((item, index) => {
                        return <ProductItem data={item} key={index}  />;
                      })
                    ) : (
                      <div>Không có dữ liệu</div>
                    )}
              
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  };
  return <Body />;
}

export default Dienthoaimaytinhbang;
