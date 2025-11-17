import { JSX, SVGProps } from "react";
import Link from "next/link";
import { COMPANY_NAME, FOOTER_NAVIGATION } from "@/global-constants";

type IconType = JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>;

const navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/realitize-ai/",
      icon: (props: IconType) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // {
    //   name: "X",
    //   href: "#",
    //   icon: (props: IconType) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    //     </svg>
    //   ),
    // },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-900/10 bg-white lg:pt-10 dark:border-white/10 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {FOOTER_NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {COMPANY_NAME} Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
