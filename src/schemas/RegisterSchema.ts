import * as z from "zod";

export const schema = z
  .object({
    name: z.string().nonempty("Por favor preencha o nome"),
    email: z
      .string()
      .nonempty("Por favor preencha o email")
      .email("email inválido"),
    avatar: z.string(),
    password: z
      .string()
      .nonempty("Por favor preencha a senha")
      .min(8)
      .regex(/\d+/, "A senha deve conter pelo menos um número")
      .regex(/[a-z]+/i, "A senha deve conter pelo menos uma letra")
      .regex(/[\W_]+/, "A senha deve conter pelo menos um símbolo"),
    confirm: z.string(),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas não são iguais",
    path: ["confirm"],
  });

  // const registerUser = schema

  // export type schemaRegisterUser = z.infer <TypeOf registerUser>