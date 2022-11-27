import React from 'react';
import BookNowModal from '../BookNowModal/BookNowModal';

const SingleProduct = ({ product, setModalProduct }) => {
    // console.log(product)
    const { img, name, time, resalePrice, originalPrice, usedTime, location, sellersName } = product
    // console.log(img)
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className='h-40' src={img} alt="Mobile" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{time}</div>
                </h2>
                <p className='font-semibold text-lg'>Seller Name:  {sellersName}</p>
                <div className="card-actions ">
                    <div className="badge badge-outline">{usedTime} Used</div>
                    <div className="badge badge-outline">Location: {location}</div>
                    <div className="badge badge-outline">Original Price: {originalPrice}</div>
                    <div className="badge badge-outline">Resale Price: {resalePrice}</div>
                </div>
                {/* <label disabled={slots.length === 0} onClick={() => setTreatment(option)}  className="btn btn-primary text-white">Book Appointment</label> */}
                <label onClick={() => setModalProduct(product)} className="btn btn-primary" htmlFor="booking-modal">Book Now</label>
            </div>

        </div >
    );
};

export default SingleProduct;