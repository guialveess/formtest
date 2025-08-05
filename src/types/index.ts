import {
  Formulario,
  Pergunta,
  OpcaoResposta,
  OpcaoRespostaPergunta,
  PerguntaCondicao,
  TipoPergunta,
  OperadorCondicao,
} from '@/generated/prisma';

export {
    TipoPergunta,
    OperadorCondicao
};
    export type {
        Formulario,
        Pergunta,
        OpcaoResposta,
        OpcaoRespostaPergunta,
        PerguntaCondicao
    };

export type FormularioCompleto = Formulario & {
  perguntas: PerguntaCompleta[];
};

export type PerguntaCompleta = Pergunta & {
  opcoesRespostas: OpcaoResposta[];
  condicoesOrigem: PerguntaCondicao[];
  condicoesDestino: PerguntaCondicao[];
};

export interface CreateFormularioDto {
  titulo: string;
  descricao?: string;
  ordem?: number;
}

export interface UpdateFormularioDto {
  titulo?: string;
  descricao?: string;
  ordem?: number;
}

export interface CreatePerguntaDto {
  idFormulario: string;
  titulo: string;
  codigo: string;
  orientacaoResposta?: string;
  ordem?: number;
  obrigatoria?: boolean;
  subPergunta?: boolean;
  tipoPergunta: TipoPergunta;
  opcoesRespostas?: CreateOpcaoRespostaDto[];
}

export interface UpdatePerguntaDto {
  titulo?: string;
  codigo?: string;
  orientacaoResposta?: string;
  ordem?: number;
  obrigatoria?: boolean;
  subPergunta?: boolean;
  tipoPergunta?: TipoPergunta;
  opcoesRespostas?: CreateOpcaoRespostaDto[];
}

export interface CreateOpcaoRespostaDto {
  resposta: string;
  ordem?: number;
  respostaAberta?: boolean;
}

export interface CreateCondicaoDto {
  perguntaOrigemId: string;
  perguntaDestinoId: string;
  opcaoRespostaId?: string;
  operador?: OperadorCondicao;
  valorCondicao?: string;
}

export interface RespostaFormulario {
  idPergunta: string;
  idOpcaoResposta?: string;
  respostaTexto?: string;
  respostaNumerica?: number;
  respostaBooleana?: boolean;
}

export interface FormularioResposta {
  formularioId: string;
  respostas: RespostaFormulario[];
  metadados?: {
    iniciadoEm: Date;
    finalizadoEm?: Date;
    tempoResposta?: number;
    dispositivoInfo?: string;
  };
}

export interface FormularioState {
  formulario?: FormularioCompleto;
  perguntasVisiveis: Set<string>;
  respostas: Map<string, RespostaFormulario>;
  perguntaAtual?: string;
  progresso: {
    totalPerguntas: number;
    perguntasRespondidas: number;
    percentual: number;
  };
  validacao: {
    erros: Map<string, string[]>;
    isValid: boolean;
  };
}

export interface FormBuilderState {
  formulario: Partial<CreateFormularioDto>;
  perguntas: Array<Partial<CreatePerguntaDto & { tempId: string }>>;
  condicoes: Array<Partial<CreateCondicaoDto>>;
  perguntaSelecionada?: string;
  modoEdicao: 'formulario' | 'pergunta' | 'condicao';
}
