import React from 'react';
import Service from './Service';

const Servicelist = ({posts,loading}) => {
    return (
        <div>
           {
            posts.map((service, index) => <Service key={index} service={service} loading={loading}></Service>)
           } 
        </div>
    );
};

export default Servicelist;