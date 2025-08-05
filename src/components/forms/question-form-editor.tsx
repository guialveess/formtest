'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PerguntaDialog from '@/components/answer/answer-dialog';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import SortableItem from '@/components/forms/question-sortable-item'; 

interface Pergunta {
  id: string;
  titulo: string;
  tipoPergunta: string;
  ordem: number;
}

export default function FormPerguntasEditor() {
  const { id: formId } = useParams();
  const router = useRouter();
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/forms/${formId}/questions`)
      .then((res) => res.json())
      .then((data) => setPerguntas(data))
      .finally(() => setLoading(false));
  }, [formId]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = perguntas.findIndex((p) => p.id === active.id);
      const newIndex = perguntas.findIndex((p) => p.id === over.id);
      const reordered = arrayMove(perguntas, oldIndex, newIndex);
      setPerguntas(reordered);

      fetch(`/api/forms/${formId}/questions/reorder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ perguntas: reordered.map((p, i) => ({ id: p.id, ordem: i })) }),
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Perguntas do Formulário</h2>
        <PerguntaDialog />
      </div>

      {loading ? (
        <p className="text-muted-foreground">Carregando perguntas...</p>
      ) : perguntas.length === 0 ? (
        <p className="text-muted-foreground">Nenhuma pergunta adicionada ainda.</p>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
          <SortableContext items={perguntas.map((p) => p.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-4">
              {perguntas.map((pergunta) => (
                <SortableItem key={pergunta.id} id={pergunta.id}>
                  <Card className="border-muted">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">{pergunta.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{pergunta.tipoPergunta}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Editar</Button>
                        <Button size="sm" variant="ghost" className="text-red-500">Excluir</Button>
                      </div>
                    </CardContent>
                  </Card>
                </SortableItem>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}
