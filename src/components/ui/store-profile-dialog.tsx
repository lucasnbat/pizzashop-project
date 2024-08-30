import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagedRestaurantResponse,
} from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update-profile'

import { Button } from './button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog'
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'

// schema
const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

// tipo TS criado a partir do schema usando z.infer
type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export default function StoreProfileDialog() {
  // estou copiando o useQuery que invoca a função que chama a api
  // apesar de repetir aqui, por ela ter uma queryKey, não haverá 2ª req
  // o react só vai busacr por uma req com essa chave e pegar os dados
  const queryClient = useQueryClient()

  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema), // seta schema padronizador
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function updateManagedRestaurantCached({
    description,
    name,
  }: StoreProfileSchema) {
    // apos atualizar dados, vou pegar os dados atuais dessa queryKey:
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
      'managed-restaurant',
    ])

    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(
        ['managed-restaurant'],
        {
          ...cached, // pega tudo que ja existe (created at, name, etc)
          name, // atualiza nome
          description, // e atualiza a descrição. só
        },
      )
    }
    // retorna informações de contexto antes da atualização para disponibilziar para a onError() usar
    return { cached }
  }

  // lembre: mutation => create, updates, deletes...
  // useQuery é mais para GETs
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    // onSuccess(_, { name, description }) { * lógica de setQueryData antiga aqui * },
    // onMutate ao contrario de onSuccess, dispara ao clicar no "salvar"
    // mesmo se não der success. Isso é "optimistic UI". Como é uma req simples que
    // não tem chance de dar muito errado, você joga a resposta renderizada já
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCached({ name, description })

      // armazena os dados anterioes em previousProfile e retorne
      return { previousProfile: cached }
    },
    // se der erro...
    onError(_, __, context) {
      // pega o previousProfile e use-o para recuperar as info antigas de perfil
      if (context?.previousProfile) {
        updateManagedRestaurantCached(context.previousProfile)
      }
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Perfil atualizado com sucesso!')
    } catch (error) {
      toast.error('Falha ao atualizar o perfil. Tente novamente!')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>Informações visíveis aos clientes</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="gap-4 space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
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
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
