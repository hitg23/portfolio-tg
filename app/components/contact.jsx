"use client";

import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    // const mailtoLink = `mailto:tegestu29@gmail.com?subject=New%20Message%20from%20Your%20Website&body=Email:%20${email}%0A%0AMessage:%20${message}`;
    // window.location.href = mailtoLink;

    const mailtoLink = `mailto:tegestu29@gmail.com?subject=New%20Message%20from%20Your%20Website&body=Email:%20${email}%0A%0AMessage:%20${message}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };
  return (
    <div id="contact">
      <div className="text-2xl pb-8">Any Query?</div>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <input
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email"
        />
        <label
          htmlFor="message"
          class="pt-6 block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          onChange={(e) => setMessage(e.target.value)}
          class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-teal-600-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave your request..."
        ></textarea>

        <div className="pt-6 flex justify-center">
          <button
            type="submit"
            class=" text-teal-300 bg-teal-400/10  hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
}
