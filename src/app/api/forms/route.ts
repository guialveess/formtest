import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createFormularioSchema, updateFormularioSchema } from '@/lib/validations';
import { ZodError } from 'zod';

export async function GET() {
  try {
    const forms = await prisma.formulario.findMany({
      orderBy: { ordem: 'asc' },
    });

    return NextResponse.json(forms);
  } catch (error) {
    console.error('[GET /api/forms]', error);
    return NextResponse.json({ error: 'Erro ao buscar formulários' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const parsed = updateFormularioSchema.parse(body);

    const updated = await prisma.formulario.update({
      where: { id: params.id },
      data: parsed,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error('[PUT /api/forms/:id]', error);
    return NextResponse.json({ error: 'Erro ao atualizar formulário' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createFormularioSchema.parse(body);

    const form = await prisma.formulario.create({
      data: parsed,
      select: {
        id: true,
        titulo: true,
        descricao: true,
        ordem: true,
      },
    });

    return NextResponse.json(form, { status: 201 });
  } catch (error) {
    console.error('[POST /api/forms]', error);

    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: 'Erro de validação', issues: error.flatten() },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: 'Erro ao criar formulário', details: error },
      { status: 400 }
    );
  }
}
