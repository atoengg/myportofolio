import React from "react";

const ButtonLink = ({ className, text, href, download, icon }) => {
  return (
    <div>
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
