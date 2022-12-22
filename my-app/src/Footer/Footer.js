import React from "react";
import "./footer.css";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer(props) {
  const GCRS = [
    {
      name: "Franchise",
    },
    {
      name: "Blogs",
    },
    {
      name: "Customer Review",
    },
    {
      name: "Careers",
    },
    {
      name: "About Us",
    },
    {
      name: "Why choose us",
    },
    {
      name: " Contact Us",
    },
  ];

  const service = [
    {
      name: " Services",
    },
    {
      name: "Why choose us",
    },
    {
      name: "Become A Tech",
    },
    {
      name: "Remote Service",
    },
    {
      name: "Tech Support",
    },
  ];

  return (
    <div className="bg-black">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4 className="text-white text-start">Get in Touch</h4>
            <div>
              <p className="footer-font lh-base">
                Require out assistance?<br></br> Contact us through our<br></br>{" "}
                number.
              </p>
            </div>
            <div className="d-flex color">
              <FaPhoneVolume style={{ fontSize: "20px" }} />
              <p className="ms-2">1300 894 946</p>
            </div>
            <div class="py-3">
              <div
                style={{ borderTop: "1px solid rgb(195, 90, 0)", width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4 className="text-white text-start">Geeks CRS</h4>
            <div className="">
              <div>
                {GCRS.map((item) => (
                 <p className="footer-font">{item.name}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4 className="text-white text-start">Services</h4>
            <div className="">
              <div>
                <p className="text-start footer-font lh-base">
                  Geeks CRS - the computer <br></br>and tech service provider
                  <br></br> who says,
                  <span className="color"> "you point it, we fix it".</span>
                </p>
                {service.map((item) => (
                  <p className="footer-font">{item.name}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h4 className="text-white  text-start ">Follow Us</h4>
            <div>
              <p className=" text-start footer-font lh-base">
                Keep in touch with us through our social media linked below.
              </p>
            </div>
            <div className="d-flex color ">
              <div className="d-flex align-items-center">
              <FaLinkedin style={{ fontSize: "20px",marginBottom:"8px" }}/>
                <p className="color pe-2 ps-2 pt-2">Linkdin</p>
              </div>
                <div
                style={{ borderLeft: "1px solid rgb(195, 90, 0)" }}
              ></div>
            <div className="d-flex ">
                <FaYoutube style={{ fontSize: "20px",marginLeft:"10px",marginTop:"9px" }}/>
            <p className="color ps-2 pt-2">YouTube</p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
