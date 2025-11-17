import React from "react";

const PrivacyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white px-6 py-32 lg:px-8 dark:bg-gray-900 prose">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </main>
  );
};

export default PrivacyLayout;
