import React from "react";
import { useTranslation } from "react-i18next";
import { BsTranslate } from "react-icons/bs";

const DropdownLang = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", lang: "English" },
    { code: "ina", lang: "Indonesia" },
  ];

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <details className="dropdown ">
        <summary className="m-1 btn bg-transparent border-none hover:bg-transparent">
          <BsTranslate size={20} />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {languages.map((lng) => (
            <li key={lng.code} onClick={() => handleChangeLanguage(lng.code)}>
              <a>{lng.lang}</a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
};

export default DropdownLang;
