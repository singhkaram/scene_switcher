"use client";

import { BenefitsData } from "@/data";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Add useState and useEffect

export default function Home() {
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true after component mounts
  }, []);

  return (
    <main className={styles.main_container}>
      <section className={styles.hero_section_container}>
        <div className={styles.hero_text_container}>
          <h1>
            Maximize Your Profitable VSL&apos;s with Effortless Variations—No
            Editors Needed!
          </h1>
          <p>
            Unlock the power of iteration and extend the life of your winning
            VSLs by easily changing scenes, voiceovers, and background music in
            minutes, not days.
          </p>
          <Link className={styles.get_started_btn} href="#">
            Get started
          </Link>
        </div>

        <Image
          src={"/images/Frame.png"}
          width={854}
          height={608}
          alt="image"
          priority
          className={styles.hero_image_container}
        />
      </section>
      {/* <section className={styles.features_section_container}>features</section> */}
      <section className={styles.benefits_section_container}>
        <div className={styles.benefits_text_container}>
          <h1>Why You Need This</h1>
          <p>
            The most effective way to make iterations of your VSL is by changing
            three key elements:
          </p>
        </div>
        <div className={styles.benefits_card_container}>
          {BenefitsData.map((item) => (
            <div key={item.id} className={styles.benefits_card}>
              {item.icon}
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className={styles.benefits_detail_text}>
          The problem? Doing all this manually takes days—sometimes
          weeks—especially when working with video editors. But with
          VSLOptimizer.io, you can create brand-new, attention-grabbing versions
          of your VSL in just minutes. Imagine turning out 20+ fresh VSLs every
          month, all with minimal effort.
        </p>
      </section>
      {/* <section className={styles.pricing_section_container}>pricing</section> */}
      <section className={styles.contactUs_section_container}>
        <div className={styles.contactUs_text_container}>
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you. Please fill out this form.</p>
        </div>
        {isClient && ( // Only render this part on the client
          <form action="#" className={styles.form_container}>
            <span className={styles.name_input_container}>
              <label htmlFor="firstName">
                First name
                <input type="text" placeholder="First name" />
              </label>
              <label htmlFor="lastName">
                Last name
                <input type="text" placeholder="Last name" />
              </label>
            </span>
            <label htmlFor="email">
              Email
              <input type="email" placeholder="you@company.com" />
            </label>
            <label htmlFor="message">
              Message
              <textarea rows={8} />
            </label>
            <button
              type="submit"
              name="submit"
              id="submit"
              className={styles.submit_btn}
            >
              Send message
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
