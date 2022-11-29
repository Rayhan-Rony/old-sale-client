import React from 'react';

const FeedBack = () => {
    return (
        <div className='my-20'>
            <h2 className='text-center font-extrabold text-5xl'>Share Your Feedback</h2>
            <div className="hero my-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Share your feedback with us so that we can improve.</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">

                                <textarea className="textarea input-bordered" placeholder="Feedback"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;