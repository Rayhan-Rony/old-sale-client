import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])

    // data load using axios

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(data => {
                // console.log(data.data)
                const phoneCategories = data.data
                setCategories(phoneCategories)
            })
    }, [])
    return (
        <div className='my-20'>
            <h2 className='text-5xl text-center font-extrabold mb-20'>Categories</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 '>
                {
                    categories.map(category => <div key={category._id} className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img className='w-1/2 h-40' src={category.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.name}</h2>
                            <div className="card-actions justify-end">
                                <Link to={`category/${category.category_id}`}><button className="btn btn-outline">See all phones</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;