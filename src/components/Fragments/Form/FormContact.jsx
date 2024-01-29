import React from "react";
import Input from "../../Elements/Input/Input";
import TextArea from "../../Elements/Input/TextArea";
import ButtonSubmit from "../../Elements/Button/ButtonSubmit/ButtonSubmit";
import { useFormik } from "formik";
import * as yup from "yup";

const FormContact = () => {
  const submitForm = () => {
    console.log(formik.values.firstName);
    console.log(formik.values.lastName);
    console.log(formik.values.email);
    console.log(formik.values.message);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },

    onSubmit: submitForm,
    validationSchema: yup.object().shape({
      firstName: yup.string().required().min(3).max(10),
      lastName: yup.string().required().min(3).max(10),
      email: yup.string().required().email(),
      message: yup.string().required(),
    }),
  });

  const handleInputChange = (e) => {
    const { target } = e;

    formik.setFieldValue(target.name, target.value);
  };

  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="shadow-md p-8 rounded-md">
          <div className="my-5">
            <Input
              label={"First Name"}
              placeholder={"First Name"}
              name={"firstName"}
              onChange={handleInputChange}
              className={`border border-[#9ca3af] ${
                formik.errors.firstName ? "input-error" : "input-success"
              } rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent `}
            />
            {formik.errors.firstName && (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            )}
          </div>

          <div className="my-5">
            <Input
              label={"Last Name"}
              placeholder={"Last Name"}
              name={"lastName"}
              onChange={handleInputChange}
              className={`border border-[#9ca3af] ${
                formik.errors.lastName ? "input-error" : "input-success"
              } rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent`}
            />
            {formik.errors.lastName && (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            )}
          </div>
          <div className="my-5">
            <Input
              label={"Email"}
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              onChange={handleInputChange}
              className={`border border-[#9ca3af] ${
                formik.errors.email ? "input-error" : "input-success"
              } rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent`}
            />
            {formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>

          <div className="my-5">
            <TextArea
              label={"Message"}
              placeholder={"Message"}
              name={"message"}
              className={`border border-[#9ca3af] ${
                formik.errors.message ? "input-error" : "input-success"
              } rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent`}
              onChange={handleInputChange}
            />
            {formik.errors.message && (
              <div className="text-red-500 text-sm">
                {formik.errors.message}
              </div>
            )}
          </div>

          <div className="my-5">
            <ButtonSubmit
              label={"Send"}
              name={"btnSubmit"}
              className={`w-full btn text-base ${
                formik.isValid
                  ? "bg-[#9ca3af] text-white"
                  : "cursor-not-allowed"
              } transition duration-300 ease-in-out `}
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormContact;
