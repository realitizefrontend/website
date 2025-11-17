"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="hover:bg-brand-500 dark:bg-brand-500 dark:focus-visible:outline-brand-500 dark:hover:bg-brand-400 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Let’s talk
    </button>
  );
};

export default SubmitButton;
