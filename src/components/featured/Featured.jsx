import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey there,</b> ready to find your next amazing <em>dish</em> in town?
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/p1.jpeg"
            alt=""
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            repudiandae!
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            placeat rerum dignissimos dolores laudantium, et unde, maiores sunt
            incidunt veritatis id delectus fugiat aliquam similique animi, natus
            qui tempore. Veniam minus porro nemo doloribus voluptas provident,
            voluptatem dolorum similique. Exercitationem.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
