import React from "react";

export default function ContactsInput() {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        className="p-4 shadow-xl focus:outline-none"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="p-4 shadow-lg focus:outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="Enter your message"
        className="p-4 shadow-lg h-3/4 focus:outline-none"
        required
      />
    </>
  );
}
