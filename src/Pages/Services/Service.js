import React, { useState } from 'react';

const Service = ({service,loading}) => {

    const [viewDetails, setViewDetails] = useState(false)
    const {name,phone,company,address,email,username} = service
    console.log(service)

    if(loading) {
        return <h2>Loading....</h2>
    }
    return (
       <>

       
        <div className=''>
           <div className='border'>
           <div className='grid grid-cols-5 gap-20 py-6 rounded-lg bg-base-100'>
            {company.name}
            <p className='place-items-center'>
                <span className='font-bold'>CONTACT</span><br />
                {name}
            </p>
            <p>
            <span className='font-bold'>CITY</span><br />{address.city}
            </p>
            <p>
            <span className='font-bold'>STATE</span> <br />{address.street}
            </p>
           
            <p onClick={() =>setViewDetails(!viewDetails)}><a class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="collapse" href="#collapseWithScrollbar" role="button" aria-expanded="false" aria-controls="collapseWithScrollbar">
  
  {
    viewDetails && <h1 className='capitalize'>Hide Details</h1>
  }
  
  {
    !viewDetails && <h1 className='capitalize'>Show Details  </h1>
    
  }
</a></p>
           
           
           </div>
           <div >
            {
                viewDetails ? <div className='border mr-10 p-10 rounded-lg mb-10 ml-14'>
                    <h1 className='font-bold'>Description:</h1>
                    {email}
                   <div className=''>
                   <div className='grid grid-cols-4 gap-10'>
                        <p>
                            <span className='font-bold'>Contact Person</span>: <br />
                            {username}
                        </p>
                        <p>
                            <span className='font-bold'>Address:</span> <br />
                            {address.street} <br />
                            {address.suite} <br />
                            {address.city}
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-10'>
                        <p>
                            <span className='font-bold'>Designation:</span><br />
                            {username}
                        </p>
                        <p className=''>
                            <span className='font-bold'>City</span> <br /> 
                            {address.city}
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-10'>
                        <p>
                            <span className='font-bold'>Emails:</span><br />
                            {email}
                        </p>
                        <p className=''>
                            <span className='font-bold'>State</span> <br /> 
                            {address.city}
                        </p>
                    </div>
                    <div className='grid grid-cols-4 gap-10'>
                        <p>
                            <span className='font-bold'>Phone:</span><br />
                            {phone}
                        </p>
                        <p className=''>
                            <span className='font-bold'>Country</span> <br /> 
                            {address.city}
                        </p>
                    </div>
                   </div>

                </div> :null
            }
            </div>
            </div>
            
        </div>
 
       </>
    );
};

export default Service;