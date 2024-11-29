 
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import list from '../../public/data.json';
import Cards from "./Cards";

const Freebook = () => {
  const filterdata = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
    <div>

    <h1 className='font-semibold text-xl pb-2' >Free offered Courses</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ratione amet 
      illo at voluptatem animi, sunt optio consequatur aspernatur, maxime natus, debitis
      saepe. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis.
    </p>
  </div>
  <div>
  <Slider {...settings}>
    {filterdata.map( // add something in new array and return new array
      (item) =>{
        return (
          <Cards item={item} key={item.id} />
        )
        // <Cards/>
        
        // <Cards item={item} key={item.id} />
     
      }
    )}
      
      </Slider>
  </div>
  </div> 

  </>
  )
}

export default Freebook;