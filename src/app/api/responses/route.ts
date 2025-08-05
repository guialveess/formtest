import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const respostaSchema = z.object({
  formularioId: z.string(),
  respostas: z.array(
    z.object({
      idPergunta: z.string(),
      tipoPergunta: z.enum(['TEXTO', 'NUMERO', 'BOOLEANO', 'OPCAO', 'MULTIPLA_ESCOLHA']),
      respostaTexto: z.string().optional(),
      respostaNumerica: z.number().optional(),
      respostaBooleana: z.boolean().optional(),
      idOpcaoResposta: z.string().optional(),
    }),
  ),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = respostaSchema.parse(body);

    // 1. Cria o registro de resposta do formulário
    const formularioResposta = await prisma.formularioResposta.create({
      data: {
        formularioId: parsed.formularioId,
      },
    });

    // 2. Cria as respostas vinculadas
    const promises = parsed.respostas.map((res) => {
      return prisma.opcaoRespostaPergunta.create({
        data: {
          idFormularioResposta: formularioResposta.id,
          idPergunta: res.idPergunta,
          idOpcaoResposta: res.idOpcaoResposta ?? null,
          respostaTexto: res.respostaTexto ?? undefined,
          respostaNumerica: res.respostaNumerica ?? null,
          respostaBooleana: res.respostaBooleana ?? null,
        },
      });
    });

    await Promise.all(promises);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[POST /api/responses]', error);
    return NextResponse.json({ error: 'Erro ao salvar respostas.' }, { status: 500 });
  }
}
