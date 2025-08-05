'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export default function ChatForm({ form }: { form: any }) {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<any>('');
  const [respostas, setRespostas] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const perguntaAtual = form.perguntas[step];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (step < form.perguntas.length) {
      setMessages((prev) => [...prev, { from: 'bot', text: perguntaAtual.titulo }]);
    } else if (step === form.perguntas.length) {
      enviarRespostas();
    }
  }, [step]);

  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const mapTipoPergunta = (
    tipo: string,
  ): 'TEXTO' | 'NUMERO' | 'BOOLEANO' | 'OPCAO' | 'MULTIPLA_ESCOLHA' => {
    switch (tipo) {
      case 'TEXTO_LIVRE':
        return 'TEXTO';
      case 'INTEIRO':
      case 'NUMERO_COM_DUAS_CASA_DECIMAIS':
        return 'NUMERO';
      case 'SIM_NAO':
        return 'BOOLEANO';
      case 'UNICA_ESCOLHA':
        return 'OPCAO';
      case 'MULTIPLA_ESCOLHA':
        return 'MULTIPLA_ESCOLHA';
      default:
        throw new Error(`Tipo de pergunta não mapeado: ${tipo}`);
    }
  };

  const enviarRespostas = async () => {
    try {
      const payload = {
        formularioId: form.id,
        respostas,
      };

      const res = await fetch('/api/responses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error('[ERRO RESPOSTA]', err);
        toast.error('Erro ao enviar respostas. Tente novamente.');
      } else {
        toast.success('Respostas enviadas com sucesso!');
        setTimeout(() => {
          setStep(0);
          setMessages([]);
          setInputValue('');
          setRespostas([]);
        }, 2000);
      }
    } catch (err) {
      console.error('Erro ao enviar respostas', err);
      toast.error('Erro inesperado ao enviar respostas.');
    }
  };

  const handleUserInput = (resposta: any) => {
    const pergunta = form.perguntas[step];

    const respostaObj: any = {
      idPergunta: pergunta.id,
      tipoPergunta: mapTipoPergunta(pergunta.tipoPergunta),
    };

    switch (pergunta.tipoPergunta) {
      case 'SIM_NAO':
        respostaObj.respostaBooleana = resposta === 'Sim';
        break;
      case 'INTEIRO':
      case 'NUMERO_COM_DUAS_CASA_DECIMAIS':
        respostaObj.respostaNumerica = parseFloat(resposta);
        break;
      case 'TEXTO_LIVRE':
      case 'UNICA_ESCOLHA':
        respostaObj.respostaTexto = resposta;
        break;
      case 'MULTIPLA_ESCOLHA':
        respostaObj.opcoesSelecionadas = resposta;
        break;
      default:
        respostaObj.respostaTexto = String(resposta);
    }

    setRespostas((prev) => [...prev, respostaObj]);
    setMessages((prev) => [...prev, { from: 'user', text: String(resposta) }]);
    setInputValue('');
    setTimeout(() => setStep((s) => s + 1), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue?.toString().trim()) return;
    handleUserInput(inputValue);
  };

  function renderInput() {
    if (!perguntaAtual) return null;

    const tipo = perguntaAtual.tipoPergunta;
    const opcoes = perguntaAtual.opcoesRespostas || [];

    switch (tipo) {
      case 'SIM_NAO':
        return (
          <div className="flex gap-4">
            <Button type="button" onClick={() => handleUserInput('Sim')}>Sim</Button>
            <Button type="button" onClick={() => handleUserInput('Não')}>Não</Button>
          </div>
        );
      case 'TEXTO_LIVRE':
        return (
          <form onSubmit={handleSubmit} className="relative w-full">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua resposta..."
              className="text-base pr-10 resize-none"
              rows={2}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            >
              <Send size={20} />
            </button>
          </form>
        );
      case 'INTEIRO':
      case 'NUMERO_COM_DUAS_CASA_DECIMAIS':
        return (
          <form onSubmit={handleSubmit} className="relative w-full">
            <Input
              type="number"
              step={tipo === 'INTEIRO' ? '1' : '0.01'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-base pr-10"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
            >
              <Send size={20} />
            </button>
          </form>
        );
      case 'UNICA_ESCOLHA':
        return (
          <div className="flex flex-col gap-2">
            {opcoes.map((opcao: any) => (
              <Button
                key={opcao.id}
                variant="outline"
                onClick={() => handleUserInput(opcao.resposta)}
                className="text-base"
              >
                {opcao.resposta}
              </Button>
            ))}
          </div>
        );
      case 'MULTIPLA_ESCOLHA':
        return (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {opcoes.map((opcao: any) => (
              <label key={opcao.id} className="flex gap-2 items-center text-base">
                <input
                  type="checkbox"
                  value={opcao.resposta}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setInputValue((prev: string[]) => {
                      const current = prev || [];
                      return checked
                        ? [...current, opcao.resposta]
                        : current.filter((r) => r !== opcao.resposta);
                    });
                  }}
                />
                {opcao.resposta}
              </label>
            ))}
            <Button type="submit">Enviar</Button>
          </form>
        );
      default:
        return <p className="text-sm text-red-500">Tipo de pergunta não suportado.</p>;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl flex flex-col h-[600px]">
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-foreground"
          >
            {form.titulo}
          </motion.h1>
        </div>

        <div ref={containerRef} className="flex-1 overflow-y-auto space-y-4 p-2 flex flex-col">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`max-w-[75%] px-4 py-3 rounded-xl text-base ${
                msg.from === 'bot'
                  ? 'bg-muted text-left self-start'
                  : 'bg-primary text-primary-foreground self-end'
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>

        {perguntaAtual && (
          <div className="mt-4">{renderInput()}</div>
        )}
      </div>
    </div>
  );
}
