import { notFound } from 'next/navigation';
import ChatForm from '@/components/forms/chat-form';
import { prisma } from '@/lib/prisma';

export default async function AnswerPage({ params }: { params: { id: string } }) {
  const form = await prisma.formulario.findUnique({
    where: { id: params.id },
    include: {
      perguntas: {
        orderBy: { ordem: 'asc' },
        include: {
          opcoesRespostas: {
            orderBy: { ordem: 'asc' },
          },
        },
      },
    },
  });

  if (!form) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ChatForm form={form} />
    </div>
  );
}
