"use client";

import Link from "next/link";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="p-3 flex flex-col justify-center items-center md:min-h-[30rem] text-center bg-[url('/images/indian-flag.jpg')] bg-cover">
      <p className="text-5xl max-w-5xl font-bold bg-gradient-to-r from-blue-500 to-primary-400 bg-clip-text text-transparent">
        Empower Your Voice, Shape Your Future with Evote!
      </p>

      <div className="text-xl font-bold my-5 flex flex-col text-white text-shadow">
        <q>Let&apos;s revolutionize democracy together</q>
        <p>- Rachit Bharadwaj</p>
      </div>

      <div className="mt-10 md:mt-20 flex gap-5 md:gap-14 flex-col md:flex-row">
        <Link
          href="/issues"
          className="flex rounded-xl py-2 px-10 ring-primary-300 ring text-primary-100 bg-primary-400/50"
        >
          <p className="sm:text-lg">Submit issue</p>
        </Link>

        <button
          onClick={scrollToFeatures}
          className="flex rounded-xl py-2 px-10 sm:text-lg ring-primary-300 ring text-primary-100 bg-primary-400/50"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
