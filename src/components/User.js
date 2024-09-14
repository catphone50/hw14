import React from "react";
import { connect } from "react-redux";
import styles from "../styles/User.module.css";

const User = ({ name, status }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Profile</h2>
      <h3 className={styles.subTitle}>User info</h3>
      <p className={styles.info}>Имя пользователя: {name}</p>
      <p>Статус пользователя: {status}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    status: state.status,
  };
};

export default connect(mapStateToProps)(User);
