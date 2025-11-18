import { NavbarSimple } from "@/components/navbar";
import React from "react";

const PrivacyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarSimple />
      <main
        id="main-content"
        className="prose bg-white px-6 py-24 lg:px-8 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </main>
    </>
  );
};

export default PrivacyLayout;
