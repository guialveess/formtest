import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default async function FormsPage() {
  const formularios = await prisma.formulario.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Formulários</h1>
        <Button asChild>
          <Link href="/forms/create">
            <Plus className="mr-2 h-4 w-4" />
            Novo Formulário
          </Link>
        </Button>
      </div>

      {formularios.length === 0 ? (
        <p className="text-muted-foreground">Nenhum formulário encontrado.</p>
      ) : (
        <div className="space-y-4">
          {formularios.map((formulario) => (
            <Card key={formulario.id}>
              <CardHeader>
                <CardTitle className="text-lg">{formulario.titulo}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {formulario.descricao || "Sem descrição"}
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/forms/${formulario.id}/answer`}>
                      Responder
                    </Link>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/forms/${formulario.id}/edit`}>
                      Editar
                    </Link>
                  </Button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
