import { notFound } from 'next/navigation';
import ChatForm from '@/components/forms/chat-form';

export default async function AnswerPage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3001/api/forms/${params.id}`, {
    next: { revalidate: 60 },
    cache: 'no-store',
  });

  if (!res.ok) return notFound();

  const form = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-4">
      <ChatForm form={form} />
    </div>
  );
}