import { useForm } from "react-hook-form";
import { Button, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { loginAsync } from "./authSlice";
/*
  Auth:
    server -> session -> cookie

    Token
      jwt.io
*/
export const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const submit = (data: { email: string; password: string }) => {
    console.log("loginnnnnnnnnnn");
    dispatch(loginAsync(data));
  };

  return (
    <div className="row pt5">
      <div className="col">
        <br />
        <br />
        <form onSubmit={handleSubmit(submit)}>
          <input placeholder="email" {...register("email")} />
          <input
            type={"password"}
            placeholder="input password"
            {...register("password")}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
