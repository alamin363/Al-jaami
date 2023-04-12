import React from "react";

const Location = () => {
  return (
    <section class="google-map py-0">
      <div id="map" class="height-500 mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2009490559344!2d88.60573211393516!3d24.3743119705743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefb33b2158d9%3A0xa8c17a50d46141c0!2sDhaka%20Bus%20Stand%2C%20Rajshahi!5e0!3m2!1sen!2sbd!4v1681282262091!5m2!1sen!2sbd"
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
