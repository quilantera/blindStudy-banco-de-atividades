import { LessonType } from "../../LessonType";

const texto1 = `Roma foi fundada em 753 a.C., na região do
Lácio, com a unificação de aldeias latinas e
sabinas. Alguns estudiosos acreditam que os responsáveis por essa
unificação foram os etruscos.

(...) Não se conhecem os detalhes da fundação histórica
de Roma, mas uma das hipóteses é que Roma, teria sido
fundada (...) por chefes etruscos que teriam unido numa
única comunidade diferentes povoados de sabinos e
latinos. Entre 753 a.C. e 509 a.C., Roma cresceu, deixou
de ser uma pequena povoação e transformou-se numa
cidade dotada de calçadas, fortificações e sistema de
esgoto, tendo o latim se consolidado como língua
corrente.(...)` 
const texto2 = `Roma foi fundada A região do Lácio, na Península Itálica, possui muitos rios e seu litoral é banhado pelo mar
Mediterrâneo. No século VIII a.C.,essa região era habitada por diferentes povos que, mais tarde,
deram origem à civilização romana.

Ao norte da Península viviam os lígures
nativos da região. A costa ocidental, por sua
vez, era habitada por povos de diversas
origens. Eles migraram para essa região por
causa do solo fértil, da facilidade de
navegação pelo rio Tibre e do relevo
montanhoso, que auxiliava na defesa das
aldeias. Entre esses povos estavam os
italiotas (latinos, sabinos, samnitas) e os
etruscos.
Nessa época, também se estabeleceram na
península outros povos, entre eles gregos e
cartagineses, que fundaram colônias na região
e passaram a disputar o domínio das rotas
comerciais no Mediterrâneo.`
const texto3 = `A República (509 a.C. a 27 a.C.)
Com o golpe político, os patrícios instauraram na cidade de Roma o regime republicano.
O Poder Executivo era exercido pelos magistrados, eleitos por um ano.
Dentre os diversos tipos de magistrados que existiam em Roma, destacam-se os seguintes:
● cônsules: em número de dois, comandavam o exército e eram os chefes dos demais
magistrados. Em época de guerra, eram substituídos por um ditador, com mandato de seis
meses;
● preteres: cuidavam da Justiça;
● censores: faziam o censo dos cidadãos, com base na riqueza deles;
● questores: encarregados das questões financeiras;
● edis: responsáveis pela preservação, pelo policiamento e pelo abastecimento das
cidades.
O Senado era o órgão que tinha maior poder, composto de senadores vitalícios. Eram suas
atribuições: elaborar as leis, cuidar das questões financeiras e religiosas, conduzir a política
externa, administrar as províncias, participar da escolha do ditador.
As Assembleias eram em número de três:
● Curial: examinava os assuntos de ordem religiosa;
● Tribal: responsável pela nomeação dos questores e edis;
● Centurial: composta das centúrias, grupo de militares encarregados de votar as leis e
eleger os magistrados.`
const texto4 = `Durante o período republicano, Roma, com um exército bem treinado e bem armado, conquistou
inúmeras regiões, formando um grande império. As conquistas iniciaram-se pela própria
Península Itálica. Com suas legiões, os romanos, em aproximadamente 200 anos, dominaram os
povos que viviam na região.
Para controlar o mar Mediterrâneo, os romanos tiveram de enfrentar Cartago, antiga colônia
fenícia no norte da África. Os cartagineses haviam alcançado grande prosperidade, e seu
comércio era feito com diversos lugares do mundo conhecido. As três guerras entre Roma e
Cartago são conhecidas como Guerras Púnicas e duraram de 264 a.C. a 146 a. C. Neste ano, os
romanos tomaram Cartago, escravizaram cerca de 40 mil pessoas e transformaram a cidade em
um província romana.
Continuando com a política de conquistas, Roma conquistou a Macedônia e a Grécia. Em 133
a.C., a Península Ibérica foi dominada e, no século I a. C., os romanos tomaram a Bitínia, a Síria,
o Egito e toda a Gália. Desse modo, o mar Mediterrâneo transformou-se no Mare Nostrum.
Roma reunia sob seu domínio povos de culturas diferentes. As regiões conquistadas foram
transformadas em províncias e eram obrigadas a pagar altos tributos a Roma.`;  
export const romaAntiga: LessonType = {
    id:"793a9dc7-fe4e-433e-9e7a-463815dbe899",
    nome: "Roma Antiga",
    questoes: [{
        pergunta:"Quando ocorreu a fundação de Roma e em qual região?",
        respostas:[`No ano 753 a.C., na região do Lácio.`,`No ano 509 a.C., na região da Campânia.`,`No ano 300 a.C., na região da Sicília.`,`No ano 1000 a.C., na região da Apúlia.`],
        respostaCorreta: 0,
        textoAuxiliar:texto1,
        referenciaTexto:"FUNARI, Pedro Paulo, Grécia e Roma 4. ed. São Paulo: Contexto, 2007, p.82.(Repensando a História)"
    },{
        pergunta:"Quais os povos que se estabeleceram na Península Itálica?",
        respostas:[`Gregos e Romanos.`,`Etruscos, Romanos e  Gálatas`,`Italiotas, Etruscos e Gregos `,`Os Cartagineses e os Samnitas.`],
        respostaCorreta: 2,
        textoAuxiliar:texto2,
        referenciaTexto:"FUNARI, Pedro Paulo, Grécia e Roma 4. ed. São Paulo: Contexto, 2007, p.82.(Repensando a História)"
    },{
        pergunta:`Como era chamado o órgão responsável por elaborar as leis, cuidar das questões financeiras e religiosas, e conduzir a política externa em Roma?`,
        respostas:[`Senado.`,`Assembleia Curial.`,`Consulado.`,`Tribunal.`],
        respostaCorreta: 0,
        textoAuxiliar:texto3,
        },{
        pergunta:`Qual o regime político que os patrícios instauraram em Roma depois de derrubar o rei Tarquínio, o Soberbo?`,
        respostas:[`Monarquia absolutista.`,`Regime republicano. Curial.`,`Feudalismo.`,`Democracia direta.`],
        respostaCorreta: 1,
        textoAuxiliar:texto3,
        },{
        pergunta:`O que faziam os censores na república romana?`,
        respostas:[`faziam o censo dos cidadãos, com base na riqueza deles`,`cuidavam da Justiça;`,`encarregados das questões financeiras;`,`responsáveis pela preservação, pelo policiamento e pelo abastecimento das cidades.`],
        respostaCorreta: 1,
        textoAuxiliar:texto3,
    
    },{
        pergunta:`Quais eram as atribuições das Assembleias em Roma?`,
        respostas:[`Administrar as províncias e escolher o ditador.`,
        `Elaborar as leis e cuidar das questões financeiras.`,
        `Examinar assuntos religiosos, nomear questores e edis,  votar as leis e eleger os magistrados.`,
        `Votar as leis e eleger os  ditadores.`],
        respostaCorreta: 2,
        textoAuxiliar:texto3,
      },{
        pergunta:`O que foram as Guerras Púnicas?`,
        respostas:[`Conflitos militares entre Roma e Cartago no norte da África`,
        `Conflitos internos entre as cidades-estado romanas.`,
        `Revoltas populares nas províncias romanas ao redor do Mediterrâneo.`,
        `Uma série de disputas comerciais entre Roma e cidades gregas.`],
        respostaCorreta: 0,
        textoAuxiliar:texto4,
        referenciaTexto:"Caderno do Futuro: história: 6º ano: ensino fundamental: anos finais.3a. ed. — IBEP, 2013. Pág. 92"
    },{
        pergunta:`Entre os motivos que levaram ao fim do Império Romano, estão as migrações e invasões bárbaras. Atualmente este termo tem diferentes designações, mas no período romano tinha como sentido:`,
        respostas:[`Representar o conjunto de povos cujos valores incitavam a violência e a destruição como forma de atuação.`,
        `Classificar povos considerados inferiores, que viviam de caça e pesca, eram nômades e, para os romanos, incapazes de civilizar-se.`,
        `Referir-se aos povos considerados primitivos, ou seja, aqueles que desconhecem a cidade e as regras de convivência comum.`,
        `Denominar povos que não compartilhavam os valores e o idioma falado pelos romanos`],
        respostaCorreta: 3,
    },
    {
        pergunta:`Dois tribunos da plebe que procuraram realizar reformas agrárias na república romana do século II a.C. ficaram conhecidos como:`,
        respostas:[`Irmãos César`,
        `Irmãos Bruto.`,
        ` Irmãos Augusto`,
        ` Irmãos Graco`],
        respostaCorreta: 3,
    },
    ]
}