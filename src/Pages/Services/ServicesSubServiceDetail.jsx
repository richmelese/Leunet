import React from "react";
import { useParams } from "react-router-dom";
import DataServices from "../../Data/DataServices";
import GrowWithUs from "../../Components/GrowWithUs";

export default function ServicesSubServiceDetail() {
  let { serviceId, subServiceId } = useParams();
  let service = DataServices.find((ds) => ds.id == serviceId);
  let subService = service.childServices.find((cs) => cs.id == subServiceId);

  return (
    <div className="container sub_service_detail">
      <h1>{subService.title}</h1>
      <img src={subService.img} />
      <div
        className="detail"
        dangerouslySetInnerHTML={{ __html: subService.desc }}
      ></div>
      <GrowWithUs />
    </div>
  );
}
