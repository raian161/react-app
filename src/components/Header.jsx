import React from "react";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.myHeader}>
      <h3>My Page</h3>
      <p>Posts: {props.posts.length}</p>
    </header>
  );
};

export default Header;
