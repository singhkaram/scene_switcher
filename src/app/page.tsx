import { BenefitsData } from "@/data";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      {/* <section className={styles.contactUs_section_container}>
        contactus
      </section> */}
    </main>
  );
}
