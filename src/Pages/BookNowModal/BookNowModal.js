import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookNowModal = ({ setModalProduct, modalproduct }) => {
    const { user } = useContext(AuthContext)

    const handleBook = (e) => {
        e.preventDefault()
        toast.success('Added Your Booking')
        const id = modalproduct._id
        console.log(id)
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        setModalProduct(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{modalproduct.name}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className="badge badge-outline">Resale Price:{modalproduct.resalePrice} </div>

                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />

                        <input name='phone' type="number" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                        <br />
                        <input className='w-full  btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNowModal;