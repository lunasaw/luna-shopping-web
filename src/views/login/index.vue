<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input
            v-model="mobile"
            class="inp"
            maxlength="11"
            placeholder="请输入手机号码"
            type="text"
          />
        </div>
        <div class="form-item">
          <input
            v-model="picCode"
            class="inp"
            maxlength="5"
            placeholder="请输入图形验证码"
            type="text"
          />
          <img v-if="picUrl" :src="picUrl" alt="" @click="getPicCode" />
        </div>
        <div class="form-item">
          <input
            class="inp"
            placeholder="请输入短信验证码"
            type="text"
            v-model="msgCode"
          />
          <button @click="getCode">
            {{
              second === totalSecond ? "获取验证码" : second + `秒后重新发送`
            }}
          </button>
        </div>
      </div>

      <div
        class="login-btn"
        ref="loginButton"
        :class="{ active: isActive }"
        @click="login"
      >
        登录
      </div>
    </div>
  </div>
</template>

<script>
import { getPicCode, getMsgCode, codeLogin } from "@/api/login";

export default {
  name: "LoginPage",
  data() {
    return {
      isActive: false,
      picUrl: "",
      picKey: "",
      totalSecond: 60, // 总秒数
      second: 60, // 倒计时的秒数
      timer: null, // 定时器 id
      mobile: "15699996579", // 手机号
      picCode: "", // 图形验证码
      msgCode: "246810", // 短信验证码
    };
  },
  async created() {
    this.getPicCode();
  },
  methods: {
    // 获取图形验证码
    async getPicCode() {
      const {
        data: { base64, key },
      } = await getPicCode();
      this.picUrl = base64;
      this.picKey = key;
    },
    async login() {
      this.onClick();
      if (!this.validFn()) {
        return;
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast("请输入正确的手机验证码");
        return;
      }
      const res = await codeLogin(this.mobile, this.msgCode);
      this.$store.commit("user/setUserInfo", res.data);
      // 判断有无回跳地址
      const url = this.$route.query.backUrl || "/";
      this.$router.replace(url);
      this.$toast("登录成功");
    },
    onClick() {
      this.isActive = true;
      setTimeout(() => {
        this.isActive = false;
      }, 300);
    },

    async getCode() {
      if (!this.validFn()) {
        return;
      }
      if (!this.timer && this.second === this.totalSecond) {
        // 发送请求，获取验证码   246810
        await getMsgCode(this.picCode, this.picKey, this.mobile);
        this.$toast("发送成功，请注意查收");
        // 开启倒计时
        this.timer = setInterval(() => {
          this.second--;

          if (this.second < 1) {
            clearInterval(this.timer);
            this.timer = null;
            this.second = this.totalSecond;
          }
        }, 1000);

        // 发送请求，获取验证码
        this.$toast("发送成功，请注意查收");
      }
    },
    validFn() {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast("请输入正确的手机号");
        return false;
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast("请输入正确的图形验证码");
        return false;
      }
      return true;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg, #ecb53c, #ff9211);
    border: none;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .login-btn:hover {
    background-color: #4d8fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .login-btn.active {
    transform: translateY(-3px);
    transition: all 0.4s ease;
  }
}
</style>
