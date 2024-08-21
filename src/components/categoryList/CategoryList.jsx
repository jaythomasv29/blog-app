import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Cuisines</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.trending}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          trending
        </Link>
        <Link
          href="/blog?cat=pizza"
          className={`${styles.category} ${styles.pizza}`}
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          pizza
        </Link>
        <Link
          href="/blog?cat=mexican"
          className={`${styles.category} ${styles.mexican}`}
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          mexican
        </Link>
        <Link
          href="/blog?cat=asian"
          className={`${styles.category} ${styles.asian}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          asian
        </Link>
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.indian}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          indian
        </Link>

        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.american}`}
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          american
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
