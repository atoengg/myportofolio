import React, { useRef, useState } from "react";
import Input from "../../Elements/Input/Input";
import TextArea from "../../Elements/Input/TextArea";
import ButtonSubmit from "../../Elements/Button/ButtonSubmit/ButtonSubmit";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ButtonLoading from "../../Elements/Button/ButtonLoading/ButtonLoading";

const FormContact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_MY_SERVICE_ID;
  const templateId = import.meta.env.VITE_MY_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_MY_PUBLIC_KEY;

  const submitForm = (e) => {
    setLoading(true);
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          formik.resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error("message failed to send");
        }
      )
      .finally(() => {
        setLoading(false);
        formik.resetForm();
      });
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },

    onSubmit: submitForm,
    validationSchema: yup.object().shape({
      fullName: yup.string().required().min(3).max(50),
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
      <form action="" ref={form} onSubmit={formik.handleSubmit}>
        <div className="shadow-md p-8 rounded-md">
          <div className="my-5">
            <Input
              label={"Full Name"}
              placeholder={"Full Name"}
              name={"fullName"}
              onChange={handleInputChange}
              className={`border border-[#9ca3af] ${
                formik.errors.fullName ? "input-error" : "input-success"
              } rounded-md peer text-base py-2 px-2 w-full transition duration-200 placeholder-transparent `}
            />
            {formik.errors.fullName && (
              <div className="text-red-500 text-sm">
                {formik.errors.fullName}
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
            {loading ? (
              <ButtonLoading
                label={"Sending..."}
                className={`w-full btn text-base ${
                  formik.isValid
                    ? "bg-[#9ca3af] text-white"
                    : "cursor-not-allowed"
                } transition duration-300 ease-in-out `}
                disabled={!formik.isValid}
              />
            ) : (
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
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormContact;
