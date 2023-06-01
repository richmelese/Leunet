import React from "react";
import { useParams } from "react-router-dom";
import DataServices from "../../Data/DataServices";
import ServicesSubServiceStyle1 from "./ServicesSubServiceStyle1";
import ServicesSubServiceStyle2 from "./ServicesSubServiceStyle2";
import GrowWithUs from "../../Components/GrowWithUs";

export default function ServicesSubServiceList() {
    let { serviceId } = useParams();
    let service = DataServices.find((ds) => ds.id == serviceId);

    console.log(service);

    return (
        <div className="service_sub_service_list ">
            <div className="top_seciton container">
                <img src={service.img} />
                <h1>{service.title}</h1>
                <p>{service.shortDesc}</p>
            </div>
            <div>
                {service.childServices.map((cs, i) => {
                    return i % 2 == 0 ? <ServicesSubServiceStyle1 key={i} parentId={serviceId} childService={cs}/> : <ServicesSubServiceStyle2 key={i} parentId={serviceId}  childService={cs}/>;
                })}
            </div>
            <GrowWithUs customClassName="container"/>
        </div>
    );
}
