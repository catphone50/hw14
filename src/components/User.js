import React from "react";
import { connect } from "react-redux";

const User = ({ name, status }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <h3>User info</h3>
      <p>Имя пользователя: {name}</p>
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
