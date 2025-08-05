import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').filter(Boolean).at(-3); 

  const body = await req.json();
  const perguntas = body.perguntas;

  if (!id) {
    return NextResponse.json({ error: 'ID do formulário não informado' }, { status: 400 });
  }

  try {
    const updates = await Promise.all(
      perguntas.map((p: { id: string; ordem: number }) =>
        prisma.pergunta.update({
          where: { id: p.id },
          data: { ordem: p.ordem },
        })
      )
    );
    return NextResponse.json({ updated: updates.length });
  } catch (error) {
    console.error('[REORDER QUESTIONS]', error);
    return NextResponse.json({ error: 'Erro ao reordenar' }, { status: 500 });
  }
}
