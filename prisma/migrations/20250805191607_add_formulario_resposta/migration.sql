/*
  Warnings:

  - Added the required column `id_formulario_resposta` to the `opcoes_resposta_pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."opcoes_resposta_pergunta" ADD COLUMN     "id_formulario_resposta" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."formulario_respostas" (
    "id" TEXT NOT NULL,
    "id_formulario" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "formulario_respostas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."formulario_respostas" ADD CONSTRAINT "formulario_respostas_id_formulario_fkey" FOREIGN KEY ("id_formulario") REFERENCES "public"."formulario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."opcoes_resposta_pergunta" ADD CONSTRAINT "opcoes_resposta_pergunta_id_formulario_resposta_fkey" FOREIGN KEY ("id_formulario_resposta") REFERENCES "public"."formulario_respostas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
