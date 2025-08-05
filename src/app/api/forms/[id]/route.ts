import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const form = await prisma.formulario.findUnique({
      where: { id },
      include: {
        perguntas: {
          orderBy: { ordem: 'asc' },
        },
      },
    });

    if (!form) {
      return NextResponse.json({ error: 'Formulário não encontrado' }, { status: 404 });
    }

    return NextResponse.json(form);
  } catch (error) {
    console.error('[GET /api/forms/:id]', error);
    return NextResponse.json({ error: 'Erro ao buscar formulário' }, { status: 500 });
  }
}
