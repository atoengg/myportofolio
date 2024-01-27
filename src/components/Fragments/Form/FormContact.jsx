import React from "react";
import Input from "../../Elements/Input/Input";
import TextArea from "../../Elements/Input/TextArea";
import ButtonSubmit from "../../Elements/Button/ButtonSubmit/ButtonSubmit";

const FormContact = () => {
  return (
    <>
      <form action="">
        <div className="shadow-md p-8 rounded-md">
          <div className="my-5">
            <Input
              label={"First Name"}
              placeholder={"First Name"}
              name={"firstName"}
              className={
                "border border-[#9ca3af] rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent"
              }
            />
          </div>

          <div className="my-5">
            <Input
              label={"Last Name"}
              placeholder={"Last Name"}
              name={"lastName"}
              className={
                "border border-[#9ca3af] rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent"
              }
            />
          </div>
          <div className="my-5">
            <Input
              label={"Email"}
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              className={
                "border border-[#9ca3af] rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent"
              }
            />
          </div>

          <div className="my-5">
            <TextArea
              label={"Message"}
              placeholder={"Message"}
              name={"message"}
            />
          </div>

          <div className="my-5">
            <ButtonSubmit
              label={"Send"}
              name={"btnSubmit"}
              className={
                "w-full btn text-base transition duration-300 ease-in-out hover:bg-[#9ca3af] hover:text-white"
              }
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormContact;
