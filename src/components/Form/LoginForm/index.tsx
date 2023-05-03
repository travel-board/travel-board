import { UserContext } from "../../../providers/UserProvider";
import { Button } from "../../Button/index";
import { Input } from "../../Input/index";
import { schema } from "../../../schemas/loginValidator";
import * as api from "../../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { StyledForm } from "./StyledForm";
import { useUser } from "../../../hooks/useUser";

import { ILogin } from "../../../interfaces/user";

interface LoginFieldValues {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldValues>({ resolver: zodResolver(schema) });

  const { handleLogin } = useUser()

  async function login( formData : LoginFieldValues) {
      handleLogin(formData);
  }

  return (
    <StyledForm onSubmit={handleSubmit(login)}>
      <Input
        type="email"
        placeholder="Email"
        error={errors?.email?.message}
        register={register("email")}
        button={false}
      />
      <Input
        type="password"
        placeholder="Senha"
        error={errors?.password?.message}
        register={register("password")}
        button={false}
      />
      <Button classN="blue" types="submit" children="Entrar" />
    </StyledForm>
  );
};
