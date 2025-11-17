import FadeIn from "@/components/fade-in";
import { BuildingOffice2Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import ContactForm from "./form";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-xl lg:max-w-5xl">
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <FadeIn className="lg:mt-6 lg:w-80 lg:flex-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
              Planning a project or looking for guidance? Our team is here to
              help you take the first step toward intelligent automation.
              Contact us through the form or by email and we’ll get back to you
              promptly.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  Montague Sterling Centre,
                  <br />
                  N-3924, Nassau, Bahamas
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a
                    href="mailto:hello@example.com"
                    className="hover:text-gray-900 dark:hover:text-white"
                  >
                    info@realitize.ai
                  </a>
                </dd>
              </div>
            </dl>
          </FadeIn>
          <FadeIn className="lg:flex-auto">
            <ContactForm />
            <p className="mt-4 text-sm/6 text-gray-500 dark:text-gray-400">
              By submitting this form, I agree to the{" "}
              <a
                href="#"
                className="dark:text-brand-400 font-semibold whitespace-nowrap text-indigo-600"
              >
                privacy policy
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
