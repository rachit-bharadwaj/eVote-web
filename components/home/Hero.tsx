"use client";

import Link from "next/link";

const Hero = () => {
  const scrollToLearnMore = () => {
    document
      .getElementById("learn-more")
      ?.scrollIntoView({ behavior: "smooth" });
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
          className="flex rounded-xl py-2 px-5 ring-primary-300 ring text-primary-100 bg-primary-400/50"
        >
          <p>Submit issue</p>
        </Link>

        <Link
          href="/issues"
          className="flex rounded-xl py-2 px-5 ring-primary-300 ring text-primary-100 bg-primary-400/50"
        >
          <button onClick={scrollToLearnMore}>Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
