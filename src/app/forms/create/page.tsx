'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFormularioSchema } from '@/lib/validations';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

type FormularioFormData = z.input<typeof createFormularioSchema>;

export default function CreateFormPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioFormData>({
    resolver: zodResolver(createFormularioSchema),
    defaultValues: {
      titulo: '',
      descricao: '',
      ordem: 0,
    },
  });

  const onSubmit = async (data: FormularioFormData) => {
    try {
      const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Erro ao criar formulário');

      const created = await res.json();
      router.push(`/forms/${created.id}/builder`);
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar formulário');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Criar novo formulário</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Título do formulário"
            {...register('titulo')}
          />
          {errors.titulo && (
            <p className="text-red-500 text-sm mt-1">
              {errors.titulo.message}
            </p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Descrição (opcional)"
            {...register('descricao')}
          />
          {errors.descricao && (
            <p className="text-red-500 text-sm mt-1">
              {errors.descricao.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Criar formulário
        </Button>
      </form>
    </div>
  );
}
