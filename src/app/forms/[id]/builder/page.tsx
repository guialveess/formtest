'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PerguntaDialog from '@/components/answer/answer-dialog';

interface Pergunta {
  id: string;
  titulo: string;
  tipoPergunta: string;
  obrigatoria: boolean;
  ordem: number;
}

interface Formulario {
  id: string;
  titulo: string;
  descricao: string;
  perguntas: Pergunta[];
}

export default function FormBuilderPage() {
  const { id } = useParams();
  const [formulario, setFormulario] = useState<Formulario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || typeof id !== 'string') return;

    fetch(`/api/forms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormulario(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="p-6">Carregando formulário...</div>;
  }

  if (!formulario) {
    return <div className="p-6 text-red-500">Formulário não encontrado.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{formulario.titulo}</h1>
        <PerguntaDialog /> {/* ✅ INSERIDO AQUI */}
      </div>

      <div className="space-y-4">
        {formulario.perguntas.length === 0 ? (
          <p className="text-muted-foreground">Nenhuma pergunta ainda.</p>
        ) : (
          formulario.perguntas
            .sort((a, b) => a.ordem - b.ordem)
            .map((pergunta) => (
              <Card key={pergunta.id}>
                <CardHeader className="flex justify-between items-center">
                  <CardTitle className="text-lg">
                    {pergunta.titulo}
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {pergunta.tipoPergunta} {pergunta.obrigatoria ? '(obrigatória)' : ''}
                  </span>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Ordem: {pergunta.ordem}
                </CardContent>
              </Card>
            ))
        )}
      </div>
    </div>
  );
}
