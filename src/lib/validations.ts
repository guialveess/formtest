import { z } from 'zod';
import { TipoPergunta, OperadorCondicao } from '@/generated/prisma';

export const tipoPerguntaSchema = z.nativeEnum(TipoPergunta);
export const operadorCondicaoSchema = z.nativeEnum(OperadorCondicao);

export const createFormularioSchema = z.object({
  titulo: z.string()
    .min(1, 'Título é obrigatório')
    .max(255, 'Título deve ter no máximo 255 caracteres')
    .trim(),

  descricao: z.string()
    .max(1000, 'Descrição deve ter no máximo 1000 caracteres')
    .optional()
    .nullable(),

  ordem: z.number()
    .int('Ordem deve ser um número inteiro')
    .min(0, 'Ordem deve ser maior ou igual a 0')
    .default(0),
});

export const respostaEntradaSchema = z.object({
  perguntaId: z.string().uuid({ message: 'ID da pergunta inválido' }),
  resposta: z.union([
    z.string(),
    z.array(z.string()),
  ]),
});

export const submitRespostasSchema = z.object({
  formularioId: z.string().uuid({ message: 'ID do formulário inválido' }),
  respostas: z.array(respostaEntradaSchema).min(1, 'Pelo menos uma resposta é necessária'),
});

export const updateFormularioSchema = createFormularioSchema.partial();

export const createOpcaoRespostaSchema = z.object({
  resposta: z.string()
    .min(1, 'Resposta é obrigatória')
    .max(500, 'Resposta deve ter no máximo 500 caracteres')
    .trim(),
  ordem: z.number()
    .int()
    .min(0)
    .optional(),
  respostaAberta: z.boolean().optional().default(false),
});

export const createPerguntaSchema = z.object({
  idFormulario: z.string().uuid(),
  titulo: z.string().min(1).max(255).trim(),
  codigo: z.string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z0-9_]+$/, 'Apenas letras, números e underscore'),
  orientacaoResposta: z.string().max(1000).optional().nullable(),

  // Corrigido aqui
  ordem: z.number()
    .int()
    .min(0)
    .default(0),

  obrigatoria: z.boolean().optional().default(false),
  subPergunta: z.boolean().optional().default(false),
  tipoPergunta: tipoPerguntaSchema,
  opcoesRespostas: z.array(createOpcaoRespostaSchema).optional().default([]),
})
.refine((data) => {
  const tiposComOpcoes: TipoPergunta[] = [
    'SIM_NAO',
    'MULTIPLA_ESCOLHA',
    'UNICA_ESCOLHA',
  ];

  return !tiposComOpcoes.includes(data.tipoPergunta) ||
    (data.opcoesRespostas && data.opcoesRespostas.length > 0);
}, {
  message: 'Este tipo de pergunta precisa de pelo menos uma opção.',
  path: ['opcoesRespostas'],
})
.refine((data) => {
  return data.tipoPergunta !== 'SIM_NAO' ||
    (data.opcoesRespostas && data.opcoesRespostas.length === 2);
}, {
  message: 'Perguntas do tipo Sim/Não devem ter exatamente 2 opções.',
  path: ['opcoesRespostas'],
});

export const updatePerguntaSchema = createPerguntaSchema.partial();
