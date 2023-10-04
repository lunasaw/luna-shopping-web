import { doGet, doPost } from "@/utils/request";

// 获取图形验证码
export const getPicCode = () => {
  return doGet("/captcha/image");
};

// 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return doPost("/captcha/sendSmsCaptcha", {
    form: {
      captchaCode,
      captchaKey,
      mobile,
    },
  });
};

// 验证码登录
export const codeLogin = (mobile, smsCode) => {
  return doPost("/passport/login", {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode,
    },
  });
};
