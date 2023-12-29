import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../Components/product-page/ProductItem";
// import Item from "antd/es/list/Item";
const productURL = `https://tiki.loca.lt/api/v1/product?fields=["$all"]`;

function App() {
  const Body = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    const getProducts = async () => {
      try {
        const res = await axios.get(productURL);
        const arrayItem = res?.data?.results?.objects?.rows.map((item, index) => {
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
        // console.log(arrayItem, "First");
        setProducts(arrayItem);
      } catch (error) {}
    };
      // console.log("cc",products)
      // const [cart, setCart] = useState([]);
      // const sum = (payload) => {
      //   const item = products.find((el) => payload._id === el._id);
  
      //   if (item) {
      //     console.log("item",item)
      //     const price = item.discount
      //       ? item.price - (item.price * item.discount) / 100
      //       : item.price;
  
      //     item.cartQuantity = item.cartQuantity + payload.cartQuantity;
      //     item.total = item.cartQuantity * price;
      
      //   } else {
      //     const price = payload.discount
      //       ? payload.price - (payload.price * payload.discount) / 100
      //       : payload.price;
  
      //       setProducts([
      //       ...products,
      //       {
      //         ...payload,
      //         cartQuantity: payload.cartQuantity,
      //         total: price,
      //       },
      //     ]);
      //   }
      // }
      console.log("cart",products)
    useEffect(() => {
      getProducts();
    }, []);
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
                    <img src="img/user.png" alt="Tiki" />
                    <div className="tab-text">Dành cho bạn</div>
                  </div>
                  <div className="menu-item">
                    <img src="img/nano.jpg" alt="Salo sữa mát" />
                    <div className="tab-text">Bão Sale Sữa mát</div>
                  </div>
                  {/*  */}
                  <div className="menu-item">
                    <img src="img/Bán chạy.png" alt="Salo sữa mát" />
                    <div className="tab-text">Top Bán Chạy</div>
                  </div>
                  {/*  */}
                  <div className="menu-item">
                    <img src="img/hot.png" alt="Salo sữa mát" />
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

export default App;
