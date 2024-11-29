import PropTypes from 'prop-types';

const Cards = ({item}) => {
  return (
   <>
   <div className='mt-4 my-3 p-3 '  >
   <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 ">
  <figure>
    <img 
    
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className=" cursor-pointer px-2 py-1 text-sm rounded-full border-[2px]  hover:bg-pink-400 hover:text-white ">Buy now</div>
    </div>
  </div>
</div>
</div>
</>
  )
}


Cards.propTypes = {
    item: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Cards