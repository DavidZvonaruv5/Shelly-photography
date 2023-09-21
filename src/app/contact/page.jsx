"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const body = { name, email, message };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setSubmitSuccess(true);
    setRedirecting(true);
    setTimeout(() => {
      router.push("/");
    }, 1500);

    setSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent px-4 sm:px-0">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-4 sm:p-10 rounded-lg shadow-md w-full max-w-xs sm:max-w-lg"
      >
        <h2 className="text-2xl sm:text-3xl mb-4 sm:mb-8 font-semibold">
          Contact Me
        </h2>

        <div className="mb-4 sm:mb-5">
          <label className="block text-lg sm:text-xl mb-2" htmlFor="first-name">
            Name
          </label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 sm:mb-5">
          <label className="block text-lg sm:text-xl mb-2" htmlFor="email">
            Email address
          </label>
          <input
            className="w-full p-2 border rounded"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4 sm:mb-5">
          <label className="block text-lg sm:text-xl mb-2" htmlFor="message">
            Content
          </label>
          <textarea
            className="w-full p-2 border rounded resize-none"
            id="message"
            name="message"
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            defaultValue={""}
          />
        </div>

        {submitSuccess && (
          <div className="text-center text-green-500 mt-2 sm:mt-4" role="alert">
            Message sent successfully! &#40;check your spam folder&#41;
          </div>
        )}
        {submitError && (
          <div className="text-center text-red-500 mt-2 sm:mt-4" role="alert">
            Error sending message. Please try again later.
          </div>
        )}
        {redirecting && (
          <div className="text-center text-blue-500 mt-2 sm:mt-4" role="alert">
            Redirecting to home page...
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between mt-4">
          <button
            id="submitButton"
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 mb-2 sm:mb-0"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
          <button
            onClick={() => router.back()}
            className="bg-zinc-700 text-white p-3 rounded hover:bg-zinc-900"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
