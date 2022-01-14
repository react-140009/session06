import { useForm } from "react-hook-form";
import { Button, Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, selectIsLoggedin } from "./authSlice";
import { LoginModel } from "./LoginModel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedin);
  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin]);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginModel>({ mode: "all" });

  const submit = (data: LoginModel) => {
    dispatch(loginAsync(data));
  };

  return (
    <div className="row pt5">
      <div className="col">
        <br />
        <br />
        <form onSubmit={handleSubmit(submit)}>
          <input
            placeholder="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          <input
            type={"password"}
            placeholder="input password"
            {...register("password", { minLength: 4 })}
          />
          <button disabled={!isValid} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
