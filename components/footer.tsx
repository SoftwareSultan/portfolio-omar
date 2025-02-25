import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Abdellah. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built by {" "}
        <a className="underline text-red-500" href="mailto:omardebiane4@gmail.com">
          omardebiane4@gmail.com
        </a>{" "}with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
