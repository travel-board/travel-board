import * as z from "zod";

export const schema = z.object({
  name: z.string().nonempty("Por favor preencha o nome"),
  location: z.string().nonempty("Por favor preencha o local"),
});
