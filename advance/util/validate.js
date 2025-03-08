import { getCookie } from "./cookie.js";

export const validateEmail = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};

export const validatePassword = (password) => {
  const pattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return pattern.test(password);
};

export const validateNickname = (nickname) => {
  const user = getCookie("user");
  try {
    const userInfo = JSON.parse(user);

    return userInfo.nickname === nickname;
  } catch (e) {
    console.log(e);
  }
};
