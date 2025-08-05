'use client';

import { useState, useCallback } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Button } from '@/components/ui/button';
import { GripVertical } from 'lucide-react';
import SortableItem from './question-sortable-item';

interface Pergunta {
  id: string;
  titulo: string;
  ordem: number;
}

interface PerguntaSortableListProps {
  perguntas: Pergunta[];
  idFormulario: string;
}

export default function PerguntaSortableList({
  perguntas,
  idFormulario,
}: PerguntaSortableListProps) {
  const [items, setItems] = useState<Pergunta[]>(perguntas);
  const [saving, setSaving] = useState(false);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);
    const reordered = arrayMove(items, oldIndex, newIndex).map((item, index) => ({
      ...item,
      ordem: index,
    }));
    setItems(reordered);
  }, [items]);

  const handleSalvar = async () => {
    try {
      setSaving(true);
      await fetch(`/api/forms/${idFormulario}/questions/reorder`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ perguntas: items }),
      });
      alert('Nova ordem salva com sucesso!');
    } catch (err) {
      alert('Erro ao salvar a nova ordem.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((p) => p.id)} strategy={verticalListSortingStrategy}>
          {items.map((pergunta) => (
            <SortableItem key={pergunta.id} id={pergunta.id}>
              <div className="border p-4 rounded flex items-center justify-between gap-4 bg-muted shadow-sm">
                <span className="flex-1 font-medium text-sm text-muted-foreground">{pergunta.titulo}</span>
                <Button size="icon" variant="ghost" className="cursor-grab active:cursor-grabbing">
                  <GripVertical className="w-4 h-4" />
                </Button>
              </div>
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>

      <Button onClick={handleSalvar} disabled={saving}>
        {saving ? 'Salvando...' : 'Salvar nova ordem'}
      </Button>
    </div>
  );
}
