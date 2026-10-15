import { useState } from "react";
import PrimaryButton from "../shared/PrimaryButton";
import errorIcon from "/assets/contact/desktop/icon-error.svg";

function ContactHero() {
  const [submitted, setSubmitted] = useState(false);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const emptyRequiredFields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[required]"),
    )
      .filter((field) => !field.value.trim())
      .map((field) => field.id);

    setEmptyFields(emptyRequiredFields);
    setSubmitted(false);

    if (emptyRequiredFields.length > 0 || !form.reportValidity()) {
      return;
    }

    form.reset();
    setSubmitted(true);
  }

  function clearFieldError(fieldId: string) {
    setEmptyFields((fields) => fields.filter((field) => field !== fieldId));
  }

  return (
    <section 
      className="
        bg-peach bg-[url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] bg-no-repeat 
        bg-position-[-90px_top] py-18 px-6 flex flex-col gap-12 tablet:rounded-[15px] tablet:bg-position-[-120px_-78px]
        tablet:bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] tablet:gap-10 tablet:px-14.5 tablet:py-17.75
        desktop:bg-bottom-left desktop:px-23.75 desktop:py-13.75 desktop:gap-23.75 desktop:grid 
        desktop:grid-cols-[auto_380px] desktop:items-center
      "
    >
      <div className="flex flex-col gap-6 text-center text-white tablet:text-start tablet:gap-8">
        <h1 className="text-[32px] leading-9 font-medium tablet:text-[48px] tablet:leading-12">Contact Us</h1>

        <p className="text-[15px] leading-6.25 tablet:text-base tablet:leading-base">
          Ready to take it to the next level? Let’s talk about your project or idea and find out 
          how we can help your business grow. If you are looking for unique digital experiences 
          that’s relatable to your users, drop us a line.
        </p>
      </div>

      <form
        className="flex flex-col gap-10 items-center tablet:items-end tablet:gap-6"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="self-stretch flex flex-col gap-3.5 text-white font-medium text-[15px] leading-6.25 desktop:gap-3">
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="
                w-full border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px]
                placeholder:leading-6.25 placeholder:font-medium focus:outline-none
                focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
              "
              onChange={() => clearFieldError("name")}
              required
            />

            {emptyFields.includes("name") && (
              <span
                id="name-error"
                className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2 text-xs italic font-normal"
                role="alert"
              >
                Can't be empty
                <img src={errorIcon} alt="" />
              </span>
            )}
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="
                w-full border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px]
                placeholder:leading-6.25 placeholder:font-medium focus:outline-none
                focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
              "
              onChange={() => clearFieldError("email")}
              required
            />

            {emptyFields.includes("email") && (
              <span
                id="email-error"
                className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2 text-xs italic font-normal"
                role="alert"
              >
                Can't be empty
                <img src={errorIcon} alt="" />
              </span>
            )}
          </div>

          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            className="
              border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px]
              placeholder:leading-6.25 placeholder:font-medium focus:outline-none
              focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
            "
          />
          
          <div className="relative">
            <textarea
              id="message"
              placeholder="Your Message"
              className="
                w-full border-b border-white min-h-25.5 p-3 placeholder:text-white/50 placeholder:text-[15px]
                placeholder:leading-6.25 placeholder:font-medium focus:outline-none
                focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
              "
              onChange={() => clearFieldError("message")}
              required
            ></textarea>

            {emptyFields.includes("message") && (
              <span
                id="message-error"
                className="absolute right-3 top-3 flex items-center gap-2 text-xs italic font-normal"
                role="alert"
              >
                Can't be empty
                <img src={errorIcon} alt="" />
              </span>
            )}
          </div>
        </div>

        <PrimaryButton type="submit">
          Submit
        </PrimaryButton>
        
        {submitted && (
          <p className="text-white text-sm" role="status">
            Thanks for your message. We’ll be in touch soon.
          </p>
        )}
      </form>
    </section>
  )
}

export default ContactHero;