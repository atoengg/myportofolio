import React from "react";
import Layouts from "../../layouts/Layouts";
import { imgNotFound } from "../../../image";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Layouts>
        <section className="container lg:min-h-screen">
          <div className="py-20">
            <div className="flex flex-col justify-center items-center">
              <img
                src={imgNotFound}
                alt="img-notFound"
                className="lg:max-w-md"
              />
              <p className="text-center lg:px-32 lg:text-base mt-2">
                Maaf, sepertinya halaman yang Anda cari tidak dapat ditemukan.
                Mungkin halaman tersebut telah dihapus, atau tidak pernah ada.
                Pastikan URL yang Anda masukkan benar atau kembali ke{" "}
                <span className="underline italic decoration-sky-500 text-sky-500">
                  <Link to={"/"}>halaman utama.</Link>
                </span>
              </p>
            </div>
          </div>
        </section>
      </Layouts>
    </>
  );
};

export default NotFound;
