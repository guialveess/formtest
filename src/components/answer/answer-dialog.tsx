'use client';

import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { createPerguntaSchema } from '@/lib/validations';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

type CreatePerguntaData = z.input<typeof createPerguntaSchema>;

function toSlug(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .toLowerCase();
}

const TIPOS_COM_OPCOES: string[] = ['SIM_NAO', 'MULTIPLA_ESCOLHA', 'UNICA_ESCOLHA'] as const;

export default function PerguntaDialog() {
  const { id: idFormulario } = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
    setValue,
  } = useForm<CreatePerguntaData>({
    resolver: zodResolver(createPerguntaSchema),
    defaultValues: {
      titulo: '',
      codigo: '',
      tipoPergunta: 'TEXTO_LIVRE',
      orientacaoResposta: '',
      ordem: 0,
      obrigatoria: false,
      subPergunta: false,
      idFormulario: idFormulario as string,
      opcoesRespostas: [],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'opcoesRespostas',
  });

  const tipoPergunta = watch('tipoPergunta');
  const titulo = watch('titulo');

  // Atualiza o código baseado no título
  useEffect(() => {
    const slug = toSlug(titulo || '');
    if (slug) setValue('codigo', slug);
  }, [titulo, setValue]);

  // Adiciona opções fixas para SIM/NÃO
  useEffect(() => {
    if (tipoPergunta === 'SIM_NAO') {
      replace([
        { resposta: 'Sim', ordem: 0, respostaAberta: false },
        { resposta: 'Não', ordem: 1, respostaAberta: false },
      ]);
    } else if (TIPOS_COM_OPCOES.includes(tipoPergunta) && fields.length === 0) {
      append({ resposta: '', ordem: 0, respostaAberta: false });
    } else if (!TIPOS_COM_OPCOES.includes(tipoPergunta)) {
      replace([]);
    }
  }, [tipoPergunta]);

  const onSubmit = async (data: CreatePerguntaData) => {
    try {
      const res = await fetch(`/api/forms/${idFormulario}/questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: 'Erro desconhecido' }));
        console.error(`[${res.status}] Falha ao criar pergunta:`, error);
        return alert('Erro ao salvar pergunta.');
      }

      reset();
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error('[500] Erro inesperado ao salvar pergunta:', error);
      alert('Erro inesperado. Verifique o console.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>+ Adicionar pergunta</Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Nova Pergunta</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Título da pergunta" {...register('titulo')} />
          {errors.titulo && <p className="text-sm text-red-500">{errors.titulo.message}</p>}

          <input type="hidden" {...register('codigo')} />

          <div>
            <Label className="block mb-1">Tipo da pergunta</Label>
            <select
              {...register('tipoPergunta')}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option value="TEXTO_LIVRE">Texto livre</option>
              <option value="SIM_NAO">Sim/Não</option>
              <option value="MULTIPLA_ESCOLHA">Múltipla escolha</option>
              <option value="UNICA_ESCOLHA">Única escolha</option>
              <option value="INTEIRO">Número inteiro</option>
              <option value="NUMERO_COM_DUAS_CASA_DECIMAIS">Número decimal</option>
            </select>
            {errors.tipoPergunta && (
              <p className="text-sm text-red-500">{errors.tipoPergunta.message}</p>
            )}
          </div>

          <Textarea
            placeholder="Orientação da resposta (opcional)"
            {...register('orientacaoResposta')}
          />
          {errors.orientacaoResposta && (
            <p className="text-sm text-red-500">{errors.orientacaoResposta.message}</p>
          )}

          <Input
            type="number"
            placeholder="Ordem"
            {...register('ordem', { valueAsNumber: true })}
          />
          {errors.ordem && <p className="text-sm text-red-500">{errors.ordem.message}</p>}

          <div className="flex items-center justify-between">
            <Label>Obrigatória?</Label>
            <Switch {...register('obrigatoria')} />
          </div>

          <div className="flex items-center justify-between">
            <Label>É uma subpergunta?</Label>
            <Switch {...register('subPergunta')} />
          </div>

          {/* Opções de resposta - condicional */}
          {TIPOS_COM_OPCOES.includes(tipoPergunta) && (
            <div className="space-y-2 border border-muted p-4 rounded-md">
              <Label className="text-sm font-medium">Opções de Resposta</Label>
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2">
                  <Input
                    placeholder={`Opção ${index + 1}`}
                    {...register(`opcoesRespostas.${index}.resposta`)}
                  />
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => remove(index)}
                    disabled={tipoPergunta === 'SIM_NAO'}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              ))}
              {tipoPergunta !== 'SIM_NAO' && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => append({ resposta: '', ordem: fields.length, respostaAberta: false })}
                >
                  + Adicionar opção
                </Button>
              )}
              {errors.opcoesRespostas && (
                <p className="text-sm text-red-500">
                  {(errors.opcoesRespostas as any)?.message}
                </p>
              )}
            </div>
          )}

          <DialogFooter>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
