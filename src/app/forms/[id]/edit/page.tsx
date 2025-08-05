import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { UpdateForm } from '@/components/forms/update-form';
import PerguntaDialog from '@/components/answer/answer-dialog';
import PerguntaSortableList from '@/components/forms/question-sortable-list';

interface EditPageProps {
  params: { id: string };
}

export default async function EditFormPage({ params }: EditPageProps) {
  const form = await prisma.formulario.findUnique({
    where: { id: params.id },
    include: {
      perguntas: {
        orderBy: { ordem: 'asc' },
      },
    },
  });

  if (!form) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-8">
      <h1 className="text-2xl font-bold">Editar formulário</h1>
      <UpdateForm form={form} />
      <PerguntaSortableList perguntas={form.perguntas} idFormulario={form.id} />
      <PerguntaDialog />
    </div>
  );
}
