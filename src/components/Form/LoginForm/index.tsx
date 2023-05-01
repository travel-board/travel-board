import { UserContext } from "../../../providers/UserProvider";
import { Button } from "../../Button/index";
import {Input} from "../../Input/index";
import { schema } from "./validator";
import * as api from "../../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { StyledForm } from "./StyledForm";

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
  
    const { handleLogin: onLogin, loading } = useContext(UserContext);
  
    async function login({ email, password }: LoginFieldValues) {
      try {
        const session = await api.login(email, password);
        toast.success("Login efetuado com sucesso");
        onLogin(session);
      } catch (error: unknown) {
        const responseError = error as AxiosError<string>;
        toast.error(responseError.response?.data);
      }
    }
  
    return (
      <StyledForm onSubmit={handleSubmit(login)}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          error={errors?.email?.message}
          register={register("email")}
          button= {false}
        />
        <Input
          type="password"
          id="password"
          placeholder="Senha"
          error={errors?.password?.message}
          register={register("password")}
          button= {false}
        />
        <Button classN="blue" types="submit" text="Entrar"/>
        
      </StyledForm>
    );
  };