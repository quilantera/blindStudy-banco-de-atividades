export interface LessonType {
    id:string;
    nome: string;
    questoes :Questoes[];
}
export interface Questoes {
    pergunta: string;
    urlImage?: string;
    respostas: string[];
    descricaoImagem?: string;
    referenciaImagem?: string;
    urlVideo?: string;
    respostaCorreta: number;
    textoAuxiliar?: string;
    referenciaTexto?: string;
}

export interface SubjectType {
    id: string;
    nome: string;
    lessons: LessonType[];
}
export interface ClassType{
    id: string;
    nome: string;
    subjects: SubjectType[];
}