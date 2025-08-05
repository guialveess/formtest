'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateFormularioSchema } from '@/lib/validations';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type UpdateFormData = z.input<typeof updateFormularioSchema>;

export function UpdateForm({ form }: { form: { id: string; titulo: string; descricao: string | null; ordem: number } }) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateFormularioSchema),
    defaultValues: {
      titulo: form.titulo,
      descricao: form.descricao ?? '',
      ordem: form.ordem ?? 0,
    },
  });

  const onSubmit = async (data: UpdateFormData) => {
    const res = await fetch(`/api/forms/${form.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push('/forms');
    } else {
      alert('Erro ao atualizar formulário');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input placeholder="Título" {...register('titulo')} />
      {errors.titulo && <p className="text-sm text-red-500">{errors.titulo.message}</p>}

      <Textarea placeholder="Descrição (opcional)" {...register('descricao')} />
      {errors.descricao && <p className="text-sm text-red-500">{errors.descricao.message}</p>}

      <Input type="number" {...register('ordem', { valueAsNumber: true })} />
      {errors.ordem && <p className="text-sm text-red-500">{errors.ordem.message}</p>}

      <Button type="submit">Salvar alterações</Button>
    </form>
  );
}
