import { PrismaClient, TipoPergunta } from '@/generated/prisma';


const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Executando seed...');

  await prisma.opcaoRespostaPergunta.deleteMany();
  await prisma.perguntaCondicao.deleteMany();
  await prisma.opcaoResposta.deleteMany();
  await prisma.pergunta.deleteMany();
  await prisma.formulario.deleteMany();

  const formulario = await prisma.formulario.create({
    data: {
      titulo: 'Pesquisa de Satisfação',
      descricao: 'Formulário para avaliar a satisfação dos usuários',
      ordem: 1,
    },
  });

  const pergunta1 = await prisma.pergunta.create({
    data: {
      idFormulario: formulario.id,
      titulo: 'Qual é o seu nome?',
      codigo: 'nome_usuario',
      tipoPergunta: TipoPergunta.TEXTO_LIVRE,
      obrigatoria: true,
      ordem: 1,
    },
  });

  const pergunta2 = await prisma.pergunta.create({
    data: {
      idFormulario: formulario.id,
      titulo: 'Você recomendaria nosso produto?',
      codigo: 'recomendaria_produto',
      tipoPergunta: TipoPergunta.SIM_NAO,
      obrigatoria: true,
      ordem: 2,
      opcoesRespostas: {
        create: [
          { resposta: 'Sim', ordem: 1 },
          { resposta: 'Não', ordem: 2 },
        ],
      },
    },
    include: {
      opcoesRespostas: true,
    },
  });

  const pergunta3 = await prisma.pergunta.create({
    data: {
      idFormulario: formulario.id,
      titulo: 'Por que você recomendaria?',
      codigo: 'motivo_recomendacao',
      tipoPergunta: TipoPergunta.TEXTO_LIVRE,
      ordem: 3,
    },
  });

  const opcaoSim = pergunta2.opcoesRespostas.find(o => o.resposta === 'Sim');

  if (opcaoSim) {
    await prisma.perguntaCondicao.create({
      data: {
        perguntaOrigemId: pergunta2.id,
        perguntaDestinoId: pergunta3.id,
        opcaoRespostaId: opcaoSim.id,
        operador: 'EQUALS',
      },
    });
  }

  console.log('✅ Seed executado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
