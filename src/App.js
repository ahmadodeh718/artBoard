import React, { useEffect, useState, useRef } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { HeartFill, CartPlusFill, PlusLg, DashLg } from "react-bootstrap-icons";
import axios from "axios";
import Slider from "react-slick";
import Progress from "./components/progress";
import  Salary from "./components/salary";
import  Product from "./components/product";
import  ControlBtns from "./components/controlBtns";

function App() {
  const [products, setProducts] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const sliderRef = useRef();
  const changeSlider = (e) => {
    setSliderValue(e);
    setPercentage(
      (
        (products[e].quantity_sold / products[e].product_quantity) *
        100
      ).toFixed(3)
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    afterChange: changeSlider,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  useEffect(async () => {
    const result = await axios(
      "https://wawinner.its.ae/dev/public/api/v1/front-end/campaign"
    );
    axios.get( "https://wawinner.its.ae/dev/public/api/v1/front-end/campaign").then(
      (response) => {
        setProducts(response.data.data);
        setPercentage(
          (
            (result.data.data[0].quantity_sold /
              result.data.data[0].product_quantity) *
            100
          ).toFixed(3)
        );
      },
      (error) => {
        console.log(error.data);
      }
    );
  
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <div className="App">
      <Container>
        <div className="board">
          <Progress
            percentage={percentage}
            quantity_sold={
              products[sliderValue] && products[sliderValue].quantity_sold
            }
            product_quantity={
              products[sliderValue] && products[sliderValue].product_quantity
            }
          />
          <Salary product_price={products[sliderValue] && products[sliderValue].product_price}/>
         
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <Product product={product}/>
            ))}
          </Slider>

          <div className="BtnsCon">
            <button className="likeBtn">
              <HeartFill />
            </button>
            <button className="cartBtn">
              <CartPlusFill />
            </button>
          </div>
          <ControlBtns
            next={()=>sliderRef.current.slickNext()}
            prev={()=>sliderRef.current.slickPrev()}
            current={sliderValue}
          />
        
        </div>
      </Container>
    </div>
  );
}

export default App;
