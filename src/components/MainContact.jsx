'use client'
import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from "react"
import { useRouter } from "next/navigation"; 

export default function MainContact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(false);
    const router = useRouter();
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setSubmitting(true);
  
      const body = { name, email, message };
  
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      setSubmitSuccess(true);
      setTimeout(() => {
      }, 1500);
  
      setSubmitting(false);
    };
  return (
<ParallaxProvider>
      <ParallaxBanner
        layers={[{ image: '/2.jpg', speed: 25 }]}
        className="aspect-[1/1] h-[750px] sm:aspect-[2/1] sm:h-auto"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className='text-white font-bold text-4xl sm:text-3xl'>GET IN TOUCH</h1>
          <form
            className="bg-transparent p-8 rounded-lg shadow-md w-full md:w-1/2 sm:w-4/5"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="text-md font-bold text-white inline-flex items-center">
                Name <span className="text-xs text-gray-100 ml-1">(required)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full rounded-md"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-md font-bold text-white inline-flex items-center">
                Email <span className="text-xs text-gray-100 ml-1">(required)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className=" text-md font-bold text-white inline-flex items-center">
                Message <span className="text-xs text-gray-100 ml-1">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full rounded-md resize-none"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {submitSuccess && (
              <div className="text-center text-green-500 mt-2 sm:mt-4" role="alert">
                Message sent successfully!
              </div>
            )}
            {submitError && (
              <div className="text-center text-red-500 mt-2 sm:mt-4" role="alert">
                Error sending message. Please try again later.
              </div>
            )}
            <div>
              <button type="submit" className="text-white bg-gray-900 p-2 rounded hover:bg-gray-700 hover:text-gray-200">
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
)

}
