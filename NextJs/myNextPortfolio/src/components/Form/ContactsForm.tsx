"use client";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import PrimaryButton from "../Button/PrimaryButton";
import ContactsInput from "../Input/ContactsInput";
import { useSnackbar } from "@/app/context/SnackbarContext";

export default function ContactsForm() {
  const { showSnackbar } = useSnackbar();


  const form = useRef(null);
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
          'process.env.NEXT_PUBLIC_EMAILJS_USER_ID'
        )
        .then(
          (result) => {
            showSnackbar({
              alertText: "Message sent successfully!",
              severity: "success",
            });
          },
          (error) => {
            showSnackbar({
              alertText: "Something went wrong! Please try again later.",
              severity: "error",
            });
          }
        );
      event.currentTarget.reset();
    }
  };

  return (
    <>
      <form ref={form} className="flex flex-col gap-2" onSubmit={sendEmail}>
        <ContactsInput />

        <PrimaryButton text="Send" />
      </form>
    </>
  );
}
