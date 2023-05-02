import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../LoginForm/StyledForm";
import { schema } from "../../../pages/RegisterUser/validator.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


interface RegisterFieldValues {
    name: string;
    email: string;
    password: string;
    confirm: string;
  }

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegisterFieldValues>({ resolver: zodResolver(schema) 
    });
  
    return (
      <StyledForm>
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