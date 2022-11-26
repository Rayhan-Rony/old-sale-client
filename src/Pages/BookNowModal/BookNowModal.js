import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookNowModal = ({ name, price }) => {
    const { user } = useContext(AuthContext)
    console.log(user?.displayName)
    const handleBook = e => {
        e.preventDefault()
        toast.success('Added Your Booking')

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBook} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className="badge badge-outline">Resale Price: {price}</div>
                        {/* <input type="text" defaultValue={price} disabled className="input w-full input-bordered" /> */}
                        {/* <select name='slot' className="select select-bordered w-full ">

                            {slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)}
                        </select> */}
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        {/* <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Your Email" className="input w-full input-bordered" /> */}
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        <br />
                        <input className='w-full  btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNowModal;