import { useQuery } from "@tanstack/react-query";

import { getManagedRestaurant } from "@/api/get-managed-restaurant";

import { Button } from "./button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// schema
const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

// tipo TS criado a partir do schema usando z.infer
type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export default function StoreProfileDialog() {
  // estou copiando o useQuery que invoca a função que chama a api
  // apesar de repetir aqui, por ela ter uma queryKey, não haverá 2ª req
  // o react só vai busacr por uma req com essa chave e pegar os dados
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
  });

  const { register, handleSubmit } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema), // seta schema padronizador
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>Informações visíveis aos clientes</DialogDescription>
      </DialogHeader>

      <form>
        <div className="gap-4 space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
        </div>
        <div className="gap-4 space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancelar
          </Button>
          <Button variant="success" type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
