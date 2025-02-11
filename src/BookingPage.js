import React from 'react';
//import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <div className='main' style={{padding:`32px`}}>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-sm-12'>
                <div className='row' style={{marginBottom:`8px`}}>
           {/*     <img src="/jbygg_transparent.png" alt="Little Lemon Logo" style={{ maxWidth: '200px', marginRight: '10px' }} />  */}
                    <h1 className='Lora' style={{color: `#face14`}}><b>Jbygg</b></h1>
                    <h3 className='Lora'>Porvoo</h3>
                </div>
             {/*   <BookingForm />  */}
            </div>
        </div>
    </div>
  );
};

export default BookingPage;