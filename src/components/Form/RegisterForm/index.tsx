import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../LoginForm/StyledForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserProvider.tsx";
import { IRegisterFieldValues } from "../../../interfaces/user.ts";
import { schema } from "../../../schemas/RegisterSchema.ts";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFieldValues>({ resolver: zodResolver(schema) });

  const { registerUser } = useContext(UserContext);

  const renderSubmit: SubmitHandler<IRegisterFieldValues> = (data) => {
    registerUser(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(renderSubmit)}>
      <Input
        type="text"
        placeholder="Digite seu nome"
        error={errors?.name?.message}
        register={register("name")}
        button={false}
      />
      <Input
        type="email"
        placeholder="Digite seu email"
        error={errors?.email?.message}
        register={register("email")}
        button={false}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        error={errors?.password?.message}
        register={register("password")}
        button={false}
      />
      <Input
        type="password"
        placeholder="Confirme sua senha"
        error={errors?.confirm?.message}
        register={register("confirm")}
        button={false}
      />
      <Input
        type="text"
        placeholder="Link para imagem de perfil"
        error={errors?.avatar?.message}
        register={register("avatar")}
        button={false}
      />
      <Button classN="blue" types="submit" children="Cadastrar" />
      <Link to="/">Voltar para o login</Link>
    </StyledForm>
  );
};
