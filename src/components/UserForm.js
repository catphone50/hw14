import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfoAction } from "../redux/actions";
import { useForm } from "react-hook-form";

const UserForm = ({ setUserInfoAction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserInfoAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Update user info</h3>
      <label>
        Имя пользователя:
        <input
          type="text"
          {...register("name", {
            required: { value: true, message: "Введите имя пользователя" },
          })}
          placeholder="Введите имя пользователя"
        />
        {errors.name && (
          <div style={{ color: "red" }}>{errors.name.message}</div>
        )}
      </label>
      <br />
      <label>
        Статус пользователя:
        <input
          type="text"
          {...register("status", {
            required: { value: true, message: "Введите имя пользователя" },
          })}
          placeholder="Введите статус пользователя"
        />
        {errors.status && (
          <div style={{ color: "red" }}>{errors.status.message}</div>
        )}
      </label>
      <br />
      <button type="submit">Сохранить изменения</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfoAction: (userInfo) => dispatch(setUserInfoAction(userInfo)),
  };
};
export default connect(null, mapDispatchToProps)(UserForm);
