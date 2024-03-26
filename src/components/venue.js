import React from "react";
import "../styles/map.css";

function Map() {
  return (
    <div className="map_area mx-4" id="map">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3606961088967!2d75.62171977454474!3d11.915876788310866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba432289b47eab5%3A0xe296a54c111f8b18!2sSt.%20Thomas%20College%20of%20Engineering%20%26%20Technology%2C%20Sivapuram%2C%20Kannur!5e1!3m2!1sen!2sin!4v1680697012601!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="location_information bg-bgc wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
        <h3>AAKRITI</h3>
        <div className="info_wrap">
          <div className="single_info">
            <span>Venue:</span>
            <p>stm sivapuram ,mattanur</p>
          </div>
          <div className="single_info">
            <span>Phone:</span>
            <p>+91 2 283</p>
          </div>
          <div className="single_info">
            <span>Email:</span>
            <p>contact@stm.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
