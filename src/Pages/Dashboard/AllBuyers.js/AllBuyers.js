import { useQuery } from '@tanstack/react-query';


const AllBuyers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: () => fetch('http://localhost:5000/user')
            .then(res => res.json())

    })
    const handleDelete = (id) => {

        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch()
                }
                console.log(data)

            })

    }

    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>



                    </tr>
                </thead>
                <tbody>



                    {
                        users.map(user => <tr key={user._id} className="hover">

                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => handleDelete(user._id)} className='btn btn-outline btn-xs'>Delete</button></td>


                            {/* {
                                myProduct.soldStatus === 'sold' ? <td><button className='btn btn-outline btn-xs ' disabled>Advertise</button></td> :

                                    <td><button onClick={() => handleAdvertise(myProduct)} className='btn btn-outline btn-xs'>Advertise</button></td>



                            } */}
                            {/* <td><button onClick={() => handleDelete(myProduct._id)} className='btn btn-outline btn-xs'>Delete</button></td> */}
                        </tr>)
                    }

                </tbody>
            </table >
        </div >
    );
};

export default AllBuyers;