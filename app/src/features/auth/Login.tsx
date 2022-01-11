import { useForm } from "react-hook-form";
import { Button, Input, Space } from "antd";

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ reValidateMode: "onChange" });

  const submit = (data: any) => {
    console.log(data);
  };

  const debug = () => {
    console.log(isValid, errors);
  };

  return (
    <div className="row pt5">
      <div className="col">
        <br />
        <br />
        <form onSubmit={handleSubmit(submit)}>
          <Space direction="vertical">
            <input
              placeholder="email"
              {...register("email", { required: true })}
            />
            <input
              type={"password"}
              placeholder="input password"
              {...register("password", { required: true, minLength: 6 })}
            />
            <Button
              type="primary"
              onClick={handleSubmit(submit)}
              disabled={!isValid}
            >
              Login
            </Button>

            {/* <button type="submit" onClick={debug}>
              Debug
            </button> */}
          </Space>
        </form>
      </div>
    </div>
  );
};
