export const SET_USER_INFO = "SET_USER_INFO";

export function setUserInfoAction(userInfo) {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
}
