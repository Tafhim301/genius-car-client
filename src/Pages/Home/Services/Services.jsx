import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services,setServices] = useState([]);


    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])


    return (
        <div className="my-10">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500">Our Services:</h3>
                <p className="text-lg ">the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="md:grid gap-5 lg:grid-cols-3 md:grid-cols-2">
                {   services &&
                    services.map(service => <Service key={service._id} service={service}></Service> )

                }
            </div>
            
        </div>
    );
};

export default Services;