import React from "react";
import { BsTranslate } from "react-icons/bs";

const DropdownLang = () => {
  return (
    <>
      <details className="dropdown ">
        <summary className="m-1 btn bg-transparent border-none hover:bg-transparent">
          <BsTranslate size={20} />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>English</a>
          </li>
          <li>
            <a>Indonesia</a>
          </li>
        </ul>
      </details>
    </>
  );
};

export default DropdownLang;
