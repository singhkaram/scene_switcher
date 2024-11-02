"use client";

import { RightArrowLogo } from "@/components/svg/JoinSectionIcons";
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
      {/* hero-section */}
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
          src={"/images/Frame.webp"}
          width={854}
          height={608}
          alt="image"
          priority
          className={styles.hero_image_container}
        />
      </section>
      {/* power-section */}
      <section className={styles.power_section_container}>
        <div className={styles.power_text_container}>
          <h1>The Power Of SceneSwithcer.io</h1>
          <p className="capitalize">
            See how we turned this fatigued ad from barely breaking even to a
            2-3 ROAS by simply changing the scenes, and the the voice-over while
            keeping script exactly the same.
          </p>
        </div>
        <div className={`${styles.power_main_image_container} `}>
          <h2>Original video</h2>
          <Image
            src={"/images/Frame.webp"}
            width={610}
            height={562}
            alt="image"
            priority
            className={styles.power_main_image}
          />
        </div>
        <div className={styles.power_variation_container}>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`${styles.power_variation_box} drop-shadow-md md:drop-shadow-none`}
            >
              <h2>Variation {index + 1}</h2>
              <Image
                src={"/images/Frame.webp"}
                width={389}
                height={380}
                alt="image"
                priority
                className={styles.power_variation_image}
              />
            </div>
          ))}
        </div>
      </section>
      {/* benefits-section */}
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
            <div
              key={item.id}
              className={`${styles.benefits_card} drop-shadow-md`}
            >
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
      {/* contact-us */}
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
      {/* join-section */}
      <section className={styles.join_section_container}>
        <div className={styles.join_text_container}>
          <h1>Join the SceneSwithcer.io Revolution</h1>
          <p>
            Start optimizing your VSLs now. Get started with VSLOptimizer.io and
            create unlimited new opportunities with your winning VSLs!
          </p>
        </div>
        <div className={`${styles.join_get_started_container} drop-shadow-md`}>
          <span>
            Sign up now and experience the SceneSwitcher.io difference for
            yourself. Your ROI will thank you!
          </span>
          <button type="button" className={styles.join_get_started_btn}>
            Get started <RightArrowLogo />
          </button>
        </div>
      </section>
    </main>
  );
}
