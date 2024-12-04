import { useState } from "react";

function LoginForm() {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
//   let [active, setActive] = useState(true);


  function handleLogin(ev) {
    setLogin(ev.target.value);
    console.log(login);
    // inputsCheck()
  }

  function handlePassword(ev) {
    setPassword(ev.target.value);
    console.log(password);
    // inputsCheck()
  }

//   function inputsCheck() {
//     if(login.length > 8 && password.length > 8){
//         setActive(false)
//     }else{
//         setActive(true)
//     }
//   }

  let active = login.length >= 8 && password.length >= 8 ? false : true

  return (
    <section>
      <form>
        <input
          onInput={handleLogin}
          type="text"
          placeholder="login"
          name="login"
        />
        <input
          type="password"
          onInput={handlePassword}
          placeholder="password"
          name="password"
        />
        <button disabled={active}>LOGIN</button>
      </form>
    </section>
  );
}

export default LoginForm;
