import "./Services.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
import { companyData, servicesData } from "./ServiceData";

const Services = () => {
  return (
    <div className="service-section">
      <div className="head-text">
        <span>[ OUR SEVICES ]</span>
        <h3>What Can We Offer</h3>
        <div className="underline"></div>
      </div>

      <div className="services-wrap">
        {servicesData.map((data, index) => (
          <ServiceCard key={index} information={data} />
        ))}
      </div>

      <div className="company-wrap">
        {companyData.map((data) => (
          <div className="company-data">
            <span>{data.value}</span>
            <h4>{data.name}</h4>
          </div>
        ))}
      </div>

      <hr className="right-line1" />
      <hr className="center-line1" />
      <hr className="left-line1" />
    </div>
  );
};

export default Services;
