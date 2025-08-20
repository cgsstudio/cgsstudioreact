import { Helmet } from "react-helmet";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../../../components/common/Breadcrumb";
import education from "../../../assets/images/icon/Education.svg";
import healthcare from "../../../assets/images/icon/Healthcare.svg";
import ecommerce from "../../../assets/images/icon/E-commerce.svg";
import RealEstate from "../../../assets/images/icon/Real Estate.svg";
import Finance from "../../../assets/images/icon/Finance.svg";
import hospitality from "../../../assets/images/icon/Hospitality & Travel.svg";
import Technology from "../../../assets/images/icon/Technology & IT.svg";
import Nonprofits from "../../../assets/images/icon/Nonprofits & NGOs.svg";
import Automotive from "../../../assets/images/icon/Automotive.svg";
import Entertainment from "../../../assets/images/icon/Entertainment & Media.svg";
import Legal from "../../../assets/images/icon/Legal & Law Firms.svg";
import Construction from "../../../assets/images/icon/Construction & Architecture.svg";
import Manufacturing from "../../../assets/images/icon/Manufacturing & Industrial.svg";
import Retail from "../../../assets/images/icon/Retail & Consumer Goods.svg";
import Sports from "../../../assets/images/icon/Sports & Fitness.svg";
import Beauty from "../../../assets/images/icon/Beauty & Fashion.svg";

const industries = [


{ title: "Education", description: "Schools, colleges, universities, and online learning platforms.",icon: education },
  { title: "Healthcare", description: "Hospitals, clinics, doctors, and medical service providers.", icon: healthcare },
  { title: "E-commerce", description: "Online stores, marketplaces, and retail businesses.", icon: ecommerce},
  { title: "Real Estate", description: "Property listings, agencies, and builders.", icon: RealEstate},
  { title: "Finance", description: "Banks, investment firms, and fintech companies.", icon: Finance},
  { title: "Hospitality & Travel", description: "Hotels, restaurants, travel agencies, and tourism services.", icon: hospitality},
  { title: "Technology & IT", description: "SaaS, startups, and IT service providers.", icon: Technology},
  { title: "Nonprofits & NGOs", description: "Charity organizations, foundations, and social initiatives.", icon: Nonprofits},
  { title: "Automotive", description: "Car dealerships, rental services, and auto repair businesses.", icon: Automotive},
  { title: "Entertainment & Media", description: "News portals, blogs, music, and streaming services.", icon: Entertainment},
  { title: "Legal & Law Firms", description: "Attorneys, law offices, and legal consultants.", icon: Legal},
  { title: "Construction & Architecture", description: "Builders, contractors, and architects.", icon: Construction},
  { title: "Manufacturing & Industrial", description: "Factories, suppliers, and B2B manufacturers.", icon: Manufacturing},
  { title: "Retail & Consumer Goods", description: "Brick-and-mortar businesses with online presence.", icon: Retail},
  { title: "Sports & Fitness", description: "Gyms, personal trainers, sports clubs, and wellness centers.", icon: Sports},
  { title: "Beauty & Fashion", description: "Salons, beauty brands, and fashion designers.", icon: Beauty},
];

const Industryweserve = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve</title>
      </Helmet>
      <BreadCrumb title="Industries We Serve" />
      <div className="container py-5">
        <h2 className="my-4 text-center aximo-section-title center">Industries We Serve</h2>
        <div className="row g-4 justify-content-center aximo-service-wrap">
          {industries.map((industry, index) => (
            <div key={index} className="col-md-6 col-lg-4 ">
              <div className="  aximo-iconbox-wrap">
                {industry.icon && <img src={industry.icon} alt={industry.title} className="img-fluid" style={{ height: "50px" }} />}
                <h3 className="mt-3 aximo-iconbox-data">{industry.title}</h3>
                <p className="">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Industryweserve;
