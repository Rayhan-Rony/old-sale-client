import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseItems = ({ advertiseProducts }) => {



    return (
        <div className='my-20'>
            <h2 className='text-5xl text-center font-extrabold mb-20'>Advertised Items</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
                {
                    advertiseProducts.map(item => <div key={item._id} className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img className='w-1/2 h-40' src={item.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <div className="card-actions ">
                                <div className="badge badge-outline">{item.usedTime} Used</div>
                                <div className="badge badge-outline">Location: {item.location}</div>
                                <div className="badge badge-outline">Original Price: ${item.originalPrice}</div>
                                <div className="badge badge-outline">Resale Price: ${item.resalePrice}</div>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`category/${item.category_id}`}><button className="btn btn-outline">See Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;