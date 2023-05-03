import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../LoginForm/StyledForm";
import { schema } from "../../../pages/RegisterUser/validator.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider.tsx";



interface RegisterFieldValues {
    name: string;
    email: string;
    password: string;
    confirm: string;
  }

interface IUserContext {
    user: RegisterFieldValues | null;
    setUser: React.Dispatch<React.SetStateAction<RegisterFieldValues | null>>;
    registerUser: (dataRegister: RegisterFieldValues) => Promise<void>;
  }

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegisterFieldValues>({ resolver: zodResolver(schema) 
    });

    const { registerUser } = useContext(UserContext);

    const renderSubmit: SubmitHandler<RegisterFieldValues> = (data) => {
        registerUser(data)
      }
  
    return (
      <StyledForm onSubmit={handleSubmit(renderSubmit)}>
        <Input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          register={register("email")}
          button={false}
        />
        <Input
          type="email"
          id="email"
          placeholder="Digite seu email"
          error={errors?.email?.message}
          register={register("email")}
          button={false}
        />
        <Input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          error={errors?.password?.message}
          register={register("password")}
          button={false}
        />
        <Input
          type="password"
          id="confirm"
          placeholder="Confirme sua senha"
          error={errors?.password?.message}
          register={register("password")}
          button={false}
        />
        <Input
          type="text"
          id="imgLink"
          placeholder="Link para imagem de perfil"
          error={errors?.password?.message}
          register={register("password")}
          button={false}
        />
        <Button classN="blue" types="submit" text="Cadastrar" />
        <Link to="/">Voltar para o login</Link>
      </StyledForm>
        );
    };