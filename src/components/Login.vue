<template>
  <!DOCTYPE html>
  <html>
    <head>
      <title>Slide Navbar</title>
      <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div class="flex items-center justify-center">
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div class="signup">
            <form @submit.prevent="register">
              <label for="chk" aria-hidden="true"> регистрации</label>
              <input
                v-model="firstName"
                type="text"
                name="txt"
                placeholder="User name"
              />
              <input v-model="lastName" type="text" name="txt" placeholder="" />
              <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                v-model="pass"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />

              <button>регистрации</button>
            </form>
          </div>

          <div class="login">
            <form @submit.prevent="login">
              <label for="chk" aria-hidden="true">логин</label>
              <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                v-model="pass"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <button class="button1">логин</button>
            </form>
          </div>
        </div>
      </div>
    </body>
  </html>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";

export default {
  data() {
    return {
      currentUser: null,
      email: "",
      pass: "",
      firstName: "",
      lastName: "",
      phone: null,
      city: null,
      adress: null,
      kv: null,
      etaj: null,
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.pass);
        console.log(auth.currentUser);
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.pass);
        await signInWithEmailAndPassword(auth, this.email, this.pass);
        this.currentUser = auth.currentUser;
        await setDoc(doc(db, "users", this.currentUser.uid), {
          currentUser: null,
          email: this.email,
          pass: this.pass,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          city: this.city,
          adress: this.adress,
          kv: this.kv,
          etaj: this.etaj,
        });
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Jost", sans-serif;
}
.main {
  width: 350px;
  height: 500px;
  background: white;
  overflow: hidden;

  border-radius: 10px;
  box-shadow: 5px 10px 50px #000;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: #2e91ff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 60%;
  height: 20px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.button1 {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #2e91ff;
  background: white;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: white;
  background: #2e91ff;
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  color: #2e91ff;
  background: #fff;
}
.login {
  height: 460px;
  background: #2e91ff;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.3s ease-in-out;
}
.login label {
  color: white;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
