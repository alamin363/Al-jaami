import React from "react";

const Location = () => {
  return (
    <section class="google-map py-0">
      <div id="map" class="height-500 mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14510.327584499304!2d89.0771251976253!3d24.603621579911717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc6b673c7c433b%3A0x83a6d9c0c2d3b0b0!2sHingulkandi%20Primary%20School!5e0!3m2!1sen!2sbd!4v1681378895800!5m2!1sen!2sbd"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
export default Location;
