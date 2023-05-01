import * as z from "zod";

export const schema = z.object({
  email: z.string().nonempty("Por favor preencha o email"),
  password: z.string().nonempty("Por favor preencha a senha"),
});