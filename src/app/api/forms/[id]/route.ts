import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { updateFormularioSchema } from '@/lib/validations';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const parts = url.pathname.split('/');
  const id = parts[parts.indexOf('forms') + 1];

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

export async function PUT(request: NextRequest) {
  const url = new URL(request.url);
  const parts = url.pathname.split('/');
  const id = parts[parts.indexOf('forms') + 1];

  try {
    const body = await request.json();
    const parsed = updateFormularioSchema.parse(body);

    const updated = await prisma.formulario.update({
      where: { id },
      data: parsed,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('[PUT /api/forms/:id]', error);
    return NextResponse.json({ error: 'Erro ao atualizar formulário' }, { status: 500 });
  }
}
