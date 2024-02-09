import PropTypes from 'prop-types'
import { FaArrowRight } from "react-icons/fa";

const Service = ({service}) => {
    const {title,img,price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body flex-row justify-between items-center ">
          <div>
          <h2 className="card-title font-bold">{title}</h2>
          <p className='text-yellow-500 text-xl font-bold'>Price: {price}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-ghost "><FaArrowRight /></button>
          </div>
        </div>
      </div>
    );
};


Service.propTypes = {
    service :PropTypes.object
}

export default Service;