import { z } from "zod";

export const schema = z.object({
    name: z.string().min(1,"Adicione um titulo!"),
    cityCountry: z.string().min(1, "Adicione a cidade e o país!"),
    img: z.string().min(1,"Adicione o link de uma imagem!"),
    category: z.string().min(1,"Selecione uma categoria!"),
})

export type travelBoardType = z.infer<typeof schema>;