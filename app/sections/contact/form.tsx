"use client";
import { useActionState } from "react";
import { sendMessage } from "./actions";

import Notification from "./notification";
import SubmitButton from "./submit-button";

const ContactForm = () => {
  const [state, formAction] = useActionState(sendMessage, {
    status: "",
    message: "",
  });

  return (
    <>
      <form action={formAction}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                required
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                className="dark:focus:outline-brand-500 block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="dark:focus:outline-brand-500 block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900 dark:text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="dark:focus:outline-brand-500 block w-full rounded-md bg-white px-3.5 py-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 backdrop-blur-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <SubmitButton />
        </div>
      </form>
      {state.status && state.message && (
        <Notification
          key={`${state.status}-${state.message}`}
          status={state.status}
          message={state.message}
        />
      )}
    </>
  );
};

export default ContactForm;
