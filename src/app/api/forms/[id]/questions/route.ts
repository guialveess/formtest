import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createPerguntaSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const pathnameParts = url.pathname.split('/');
  const idFormulario = pathnameParts[pathnameParts.indexOf('forms') + 1];

  try {
    const body = await request.json();

    const parsed = createPerguntaSchema.safeParse({
      ...body,
      idFormulario,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Erro de validação', issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const {
      titulo,
      codigo,
      tipoPergunta,
      obrigatoria,
      subPergunta,
      orientacaoResposta,
      ordem,
      opcoesRespostas,
    } = parsed.data;

    const perguntaCriada = await prisma.pergunta.create({
      data: {
        titulo,
        codigo,
        tipoPergunta,
        obrigatoria,
        subPergunta,
        orientacaoResposta,
        ordem,
        idFormulario,
        opcoesRespostas: {
          create: opcoesRespostas.map((opcao) => ({
            resposta: opcao.resposta,
            ordem: opcao.ordem ?? 0,
            respostaAberta: opcao.respostaAberta ?? false,
          })),
        },
      },
      include: {
        opcoesRespostas: true,
      },
    });

    return NextResponse.json(perguntaCriada, { status: 201 });
  } catch (error) {
    console.error('[POST /api/forms/[id]/questions]', error);
    return NextResponse.json(
      { error: 'Erro interno ao criar pergunta' },
      { status: 500 }
    );
  }
}
