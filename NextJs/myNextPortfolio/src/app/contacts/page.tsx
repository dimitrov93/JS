"use client";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import CustomSnackbar from "@/components/SnackBar/SnackBar";

export default function Contacts() {
  const form = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setSnackbarOpen(true);
          },
          (error) => {
            alert(error.text);
          }
        );
      event.currentTarget.reset();
      setSnackbarOpen(false);
    }
  };
  return (
    <>
      <div className=" container shadow-lg mx-auto grid md:grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1 relative">
          <Image
            src={"/Images/contact.png"}
            alt="contact me image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-2  my-auto  p-6">
          <div className="flex flex-col gap-16 my-auto">
            <h1 className="text-5xl text-center">Send me a message</h1>

            <form
              ref={form}
              className="flex flex-col gap-2"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-4 shadow-xl focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-4 shadow-lg focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                className="p-4 shadow-lg h-3/4 focus:outline-none"
              />

              <button
                type="submit"
                className="mt-4 place-self-end border border-slate-600 px-8 py-2 rounded-md bg-slate-600 text-white hover:bg-white hover:text-slate-600"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {snackbarOpen && (
        <CustomSnackbar
          alertText="Message is successfully sent!"
          severity="success"
        />
      )}
    </>
  );
}
