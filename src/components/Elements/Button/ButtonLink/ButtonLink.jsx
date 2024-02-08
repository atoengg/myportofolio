import React, { useEffect } from "react";
import AOS from "aos";

const ButtonLink = ({ className, text, href, download, icon }) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div data-aos="fade-in" data-aos-duration="2000" data-aos-delay="1400">
      <a
        download={download}
        role="button"
        href={href}
        className={className ? className : "btn"}
      >
        {text}
        <span className="flex items-center">{icon}</span>
      </a>
    </div>
  );
};

export default ButtonLink;
