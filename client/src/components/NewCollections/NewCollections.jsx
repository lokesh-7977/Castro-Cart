import React from "react";
import styles from "./NewCollections.module.css";

const NewCollections = () => {
  return (
    <>
      <div className={styles.new_collections}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className={styles.collections}>
          {/* {collections.map((collection) => () => {})} */}
        </div>
      </div>
    </>
  );
};

export default NewCollections;
