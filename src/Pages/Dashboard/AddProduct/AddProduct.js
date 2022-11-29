import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const [categoryId, setCategoryId] = useState('')
    const [products, setProducts] = useState({})
    const navigate = useNavigate()

    const category_id = categoryId
    const sellerName = user?.displayName
    const sellerEmail = user?.email


    const { name, img, location, resalePrice, originalPrice, usedTime, time, sellersName, soldStatus } = products
    const saveProduct = {
        category_id, name, img, location, resalePrice, originalPrice, usedTime, time, sellersName, soldStatus, sellerEmail
    }

    const handleAddProduct = e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value;
        const originalPrice = form.originalprice.value;
        const resalePrice = form.resaleprice.value;
        const category = form.category.value;
        const usedTime = form.usedtime.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const date = new Date()
        const product = {
            name,
            img: photo,
            location,
            resalePrice,
            originalPrice,
            usedTime,
            time: date,
            sellersName: sellerName,
            soldStatus: 'avialable'
        }
        setProducts(product)
        if (category === 'samsung') {
            setCategoryId('1')
        }
        else if (category === 'vivo') {
            setCategoryId('2')
        }
        else {
            setCategoryId('3')
        }
    }
    if (saveProduct.category_id === '') {

    }
    else {
        fetch(`https://server-murex-nine.vercel.app/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveProduct)
        })
            .then(res => res.json())
            .then(data => {

                navigate('/myproducts')

            })

    }






    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2 md:w-full mx-auto">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-28">
                        <h1 className="text-3xl font-bold text-center">Add A Product</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Product Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Product Condition</span>
                                </label>
                                <select name='condition' className="select w-full input-bordered required  ">

                                    <option value='excellent'>Excellent</option>
                                    <option value='good'>Good</option>
                                    <option value='fair'>Fair</option>
                                </select>
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Select Category</span>
                                </label>
                                <select name='category' className="select w-full input-bordered required  ">

                                    <option value='samsung'>Samsung</option>
                                    <option value='vivo'>vivo</option>
                                    <option value='oppo'>oppo</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Original Price</span>
                                </label>
                                <input type="number" name='originalprice' placeholder="Original Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resale Price</span>
                                </label>
                                <input type="number" name='resaleprice' placeholder="Resale Price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name='location' placeholder="Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Purchase Date</span>
                                </label>
                                <input type="text" name='date' placeholder="Purchase Date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Used Time</span>
                                </label>
                                <input type="text" name='usedtime' placeholder="Used Time" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>

                                <textarea name='description' className="textarea input-bordered" placeholder="Product Description" required></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Add Product</button>
                            </div>


                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;