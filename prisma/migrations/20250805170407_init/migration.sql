-- CreateEnum
CREATE TYPE "public"."tipo_pergunta" AS ENUM ('Sim_Nao', 'multipla_escolha', 'unica_escolha', 'texto_livre', 'Inteiro', 'Numero_com_duas_casa_decimais');

-- CreateEnum
CREATE TYPE "public"."operador_condicao" AS ENUM ('EQUALS', 'NOT_EQUALS', 'CONTAINS');

-- CreateTable
CREATE TABLE "public"."formulario" (
    "id" TEXT NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "descricao" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "formulario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pergunta" (
    "id" TEXT NOT NULL,
    "id_formulario" TEXT NOT NULL,
    "titulo" VARCHAR(255) NOT NULL,
    "codigo" VARCHAR(100) NOT NULL,
    "orientacao_resposta" TEXT,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "obrigatoria" BOOLEAN NOT NULL DEFAULT false,
    "sub_pergunta" BOOLEAN NOT NULL DEFAULT false,
    "tipo_pergunta" "public"."tipo_pergunta" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pergunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."opcoes_respostas" (
    "id" TEXT NOT NULL,
    "id_pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "resposta_aberta" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "opcoes_respostas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."opcoes_resposta_pergunta" (
    "id" TEXT NOT NULL,
    "id_opcao_resposta" TEXT,
    "id_pergunta" TEXT NOT NULL,
    "resposta_texto" TEXT,
    "resposta_numerica" DECIMAL(10,2),
    "resposta_booleana" BOOLEAN,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "opcoes_resposta_pergunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."pergunta_condicoes" (
    "id" TEXT NOT NULL,
    "pergunta_origem_id" TEXT NOT NULL,
    "pergunta_destino_id" TEXT NOT NULL,
    "opcao_resposta_id" TEXT,
    "operador" "public"."operador_condicao" NOT NULL DEFAULT 'EQUALS',
    "valor_condicao" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pergunta_condicoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pergunta_codigo_key" ON "public"."pergunta"("codigo");

-- AddForeignKey
ALTER TABLE "public"."pergunta" ADD CONSTRAINT "pergunta_id_formulario_fkey" FOREIGN KEY ("id_formulario") REFERENCES "public"."formulario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."opcoes_respostas" ADD CONSTRAINT "opcoes_respostas_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "public"."pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."opcoes_resposta_pergunta" ADD CONSTRAINT "opcoes_resposta_pergunta_id_opcao_resposta_fkey" FOREIGN KEY ("id_opcao_resposta") REFERENCES "public"."opcoes_respostas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."opcoes_resposta_pergunta" ADD CONSTRAINT "opcoes_resposta_pergunta_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "public"."pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pergunta_condicoes" ADD CONSTRAINT "pergunta_condicoes_pergunta_origem_id_fkey" FOREIGN KEY ("pergunta_origem_id") REFERENCES "public"."pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pergunta_condicoes" ADD CONSTRAINT "pergunta_condicoes_pergunta_destino_id_fkey" FOREIGN KEY ("pergunta_destino_id") REFERENCES "public"."pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."pergunta_condicoes" ADD CONSTRAINT "pergunta_condicoes_opcao_resposta_id_fkey" FOREIGN KEY ("opcao_resposta_id") REFERENCES "public"."opcoes_respostas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
