/* ============================================================
   Decks da Mentoria ESL — dados das 3 apresentações
   Valores de ancoragem conforme os PDFs entregues em 20/10/2026.
   Erros dos PDFs corrigidos: página de outro mentor removida,
   somas conferidas, "1 ano" trocado por "4 meses" no Trimestral.
   ============================================================ */

const COMMON = {
  processo: [
    { t: 'Implementação do processo de vendas', v: 15000, d: 'Do primeiro contato ao pós-venda, desenhado com você e entregue ao time.' },
    { t: 'Script de prospecção quente e fria', v: 12000, d: 'Abordagem, gatilhos e sequência de follow-up para quem conhece e para quem nunca ouviu falar de você.' },
    { t: 'Script de indicação e geração de novos referidos', v: 15000, d: 'O pedido de indicação que vira rotina: quando, como e para quem pedir.' },
    { t: 'Indicadores personalizados de performance do time', v: 7000, d: 'Os 5 a 7 números que o dono olha toda semana, montados para o seu negócio.' },
  ],
  conversao: [
    { t: 'Plano de atendimento de alto padrão e alta conversão', v: 9000, d: 'Padrão de resposta, tempo, tom e condução até a reunião.' },
    { t: 'Ajuste da esteira de produtos', v: 7000, d: 'Reformulação da oferta: do serviço avulso ao protocolo com três níveis de preço.' },
    { t: 'Script para a reunião 1x1 de vendas', v: 12000, d: 'Abertura, diagnóstico, apresentação da oferta, preço e fechamento.' },
  ],
  bonus: [
    { t: '1 encontro extra de mentoria individual com Henrique Ventura', v: 7000 },
    { t: 'Plano de comunicação para palestras e geração de autoridade', v: 10000 },
    { t: 'Plano de palestras como funil de vendas', v: 8000 },
  ],
};

const DECKS = {
  avancada: {
    id: 'avancada',
    nome: 'Mentoria Avançada em Grupo',
    curto: 'Avançada em Grupo',
    duracao: '12 meses',
    tagline: 'O processo montado e o time rodando até o fim do ano.',
    encontros: [
      { t: '2 hot seats por mês com Henrique Ventura', v: 45000, d: 'Encontros coletivos quinzenais, o ano inteiro, com análise de casos reais.' },
      { t: 'Tutoria mensal com o seu time de vendas, por 12 meses', v: 24000, d: 'Uma vez por mês, com quem executa, não só com o dono.' },
      { t: '2 encontros individuais com Henrique Ventura (3 sessões)', v: 21000, d: 'Esteira, script e processo construídos ao vivo, para a sua empresa.' },
      { t: '2 encontros com mentor especialista e o seu time', v: 8000, d: 'Especialista convidado trabalhando direto com a equipe.' },
    ],
    exclusivos: [],
    bonus: [...COMMON.bonus, { t: 'Tutoria mensal de IA e tecnologia para vendas e escala, por 12 meses', v: 24000 }],
    preco: { cartao: 45000, parcelas: 12, parcela: 3750, entrada: 15000, restante: 10, parcelaRestante: 3000, avista: 37500 },
  },
  premium: {
    id: 'premium',
    nome: 'Mentoria Premium / In Company',
    curto: 'Premium',
    duracao: '12 meses',
    tagline: 'Henrique dentro da empresa, com o time, toda semana nos primeiros 90 dias.',
    encontros: [
      { t: '2 hot seats por mês com Henrique Ventura', v: 45000, d: 'Encontros coletivos quinzenais, o ano inteiro, com análise de casos reais.' },
      { t: 'Tutoria mensal com o seu time de vendas, por 12 meses', v: 24000, d: 'Uma vez por mês, com quem executa, não só com o dono.' },
      { t: '9 encontros individuais com Henrique Ventura (10 sessões)', v: 70000, d: 'Acompanhamento próximo, quase mensal, da implementação.' },
      { t: '2 encontros com mentor especialista e o seu time', v: 8000, d: 'Especialista convidado trabalhando direto com a equipe.' },
    ],
    exclusivos: [
      { t: 'Implementação do CRM comercial', v: 40000, d: 'Com o parceiro de tecnologia: CRM, mensageria, automação e atendimento híbrido.' },
      { t: 'Encontro semanal com o time de vendas nos primeiros 90 dias', v: 50000, d: 'Tração agressiva: toda semana, com o time, até o processo rodar sozinho.' },
    ],
    bonus: [...COMMON.bonus, { t: 'Tutoria mensal de IA e tecnologia para vendas e escala, por 12 meses', v: 24000 }],
    preco: { cartao: 120000, parcelas: 12, parcela: 10000, entrada: 36000, restante: 10, parcelaRestante: 8400, avista: 100000 },
  },
  trimestral: {
    id: 'trimestral',
    nome: 'Mentoria Trimestral + 1 mês de bônus',
    curto: 'Trimestral',
    duracao: '4 meses',
    tagline: 'A base do processo montada em 4 meses.',
    encontros: [
      { t: '2 hot seats por mês com Henrique Ventura, por 4 meses', v: 45000, d: 'Encontros coletivos quinzenais com análise de casos reais.' },
      { t: 'Tutoria mensal com o seu time de vendas, por 4 meses', v: 24000, d: 'Uma vez por mês, com quem executa, não só com o dono.' },
      { t: '1 encontro individual com Henrique Ventura (2 sessões)', v: 14000, d: 'Esteira, script e processo construídos ao vivo, para a sua empresa.' },
      { t: '1 encontro com mentor especialista e o seu time', v: 8000, d: 'Especialista convidado trabalhando direto com a equipe.' },
    ],
    exclusivos: [],
    bonus: [...COMMON.bonus, { t: 'Tutoria mensal de IA e tecnologia para vendas e escala, por 4 meses', v: 7000 }],
    preco: { cartao: 21000, parcelas: 12, parcela: 1750, entrada: 6000, restante: 10, parcelaRestante: 1500, avista: 17500 },
  },
};

// ------------------------------------------------------------
// Decks personalizados por cliente (?plano=<id>). Não aparecem no seletor.
// Repo público: nada de faturamento, saúde ou dado pessoal do cliente aqui.
// ------------------------------------------------------------
DECKS.patricia = {
  ...DECKS.avancada,
  id: 'patricia',
  nome: 'Mentoria Avançada + Tecnologia',
  curto: 'Avançada + Tecnologia',
  tagline: 'Sair da obra e vender educação em escala, sem tudo depender de você.',
  exclusivos: [
    { t: 'CRM comercial com WhatsApp e cadência por produto', v: 40000, d: 'Todos os leads num funil só, com follow-up automático.' },
    { t: 'Reativação da base de ex-alunos do Mestre', v: 10000, d: 'Os cursos novos para quem já confia em você.' },
    { t: 'Automações do Instagram com isca por palavra-chave', v: 12000, d: 'Comentou, recebeu o material, entrou no funil.' },
    { t: 'Agente de IA no pré-atendimento e na qualificação', v: 20000, d: 'Separa o interessado do curioso antes da vendedora.' },
    { t: 'Simulador de vendas com os cenários do seu mercado', v: 8000, d: 'A vendedora treina antes de falar com o cliente real.' },
    { t: 'Painel do funil por produto', v: 7000, d: 'Custo por lead, conversão e receita de cada curso.' },
  ],
  preco: { cartao: 72000, parcelas: 12, parcela: 6000, entrada: 24000, restante: 10, parcelaRestante: 4800, avista: 60000 },
  cliente: {
    nome: 'Patrícia Andrade',
    negocio: 'Mestre Steel Frame',
    premissa: {
      big: 'O curso que <em>mais gera margem</em> é justamente o que não consegue acontecer sem você na sala.',
      after: 'Educação deixa muito mais dinheiro na mesa do que obra. A virada é fazer ela vender e rodar sem que cada turma dependa da sua agenda.',
    },
    espelho: [
      'Tráfego pago já me trouxe mais curioso do que aluno.',
      'Tenho as ferramentas, mas ninguém para fazer elas funcionarem.',
      'O Mestre tem a minha cara. Se eu não vou, a turma não acontece.',
      'O produto digital está pronto. Falta saber onde e como vender.',
    ],
    fases: [
      { k: 'Mês 1', t: 'Desenho', p: 'Cliente ideal de cada curso, esteira e preços fechados, indicadores do funil.' },
      { k: 'Meses 1 a 3', t: 'Caixa com a base', p: 'Reativação dos ex-alunos do Mestre, cadência no CRM e a vendedora treinada no simulador.' },
      { k: 'Meses 2 a 5', t: 'Lançamento digital', p: 'Vendas Técnicas no ar, tráfego com filtro de qualificação, automações e agente de IA.' },
      { k: 'Meses 5 a 12', t: 'Escala', p: 'Curso de Gestão, grupo de mentores parceiros, Mestre In Company com lojistas e a mentoria técnica.' },
    ],
    caso: {
      titulo: 'O ativo mais subestimado do negócio: quem já fez o Mestre.',
      passos: [
        'Ligar para cada ex-aluno em formato de pesquisa: o que mudou, onde travou.',
        'Voltar em 3 a 4 dias com a solução para o que ele mesmo contou.',
        'Oferecer Vendas Técnicas e Gestão para quem já confia em você.',
        'Transformar quem fecha em indicação para a próxima turma.',
      ],
      nota: 'Mecânica que usamos na rede de lojas Steel Home. A conversão depende de execução.',
      antes: { n: 'Base parada', l: 'ex-alunos sem contato' },
      depois: { n: '1 em cada 5', l: 'de volta, na estimativa do diagnóstico' },
    },
    porque: [
      'Dois anos e meio por dentro do steel frame: franqueadora, lojas, curso para montador e turmas para os EUA.',
      'O mesmo desafio que estruturamos lá: equilibrar o técnico e o comercial num curso que vende.',
      'Tecnologia implantada junto, não indicada: CRM, automação e IA rodando dentro do seu negócio.',
    ],
  },
  desc: {
    'Implementação do processo de vendas': 'Do lead do Instagram à matrícula, para cada curso.',
    'Script de prospecção quente e fria': 'Para lojistas e construtoras, e para quem já te segue.',
    'Script de indicação e geração de novos referidos': 'A indicação entre montadores vira rotina, com script e meta.',
    'Indicadores personalizados de performance do time': 'Os números de cada turma, toda semana.',
    'Plano de atendimento de alto padrão e alta conversão': 'Filtra o curioso e atende bem quem pode pagar.',
    'Ajuste da esteira de produtos': 'Cada curso com o seu preço e o seu público.',
    'Script para a reunião 1x1 de vendas': 'O roteiro para fechar turma, consultoria e mentoria.',
    'Tutoria mensal com o seu time de vendas, por 12 meses': 'Uma vez por mês, com a sua vendedora.',
    '2 encontros com mentor especialista e o seu time': 'No tema que travar: tráfego, conteúdo ou gestão.',
    '2 hot seats por mês com Henrique Ventura': 'Quinzenais, o ano inteiro, com casos reais.',
    '2 encontros individuais com Henrique Ventura (3 sessões)': 'Esteira, script e processo construídos ao vivo.',
  },
};

// Entregáveis completos por deck (ordem de apresentação)
function entregaveis(deck) {
  return [...deck.encontros, ...COMMON.processo, ...COMMON.conversao, ...deck.exclusivos];
}
function soma(items) { return items.reduce((a, b) => a + b.v, 0); }

// Fotos (preencher com os caminhos quando as imagens estiverem em assets/img/)
// Ex.: { capa: 'assets/img/henrique-retrato.jpg', palestra: 'assets/img/henrique-palestra.jpg' }
const PHOTOS = {
  capa: 'assets/img/henrique-retrato.jpg',       // 855BAEFC (ensaio, fundo cinza) — WhatsApp 22/10/2026
  palestra: 'assets/img/henrique-palestra.jpg',  // IMG_0987, palestra evento Steel Home/PlacLux
  familia: 'assets/img/henrique-familia.jpg',
  casal: 'assets/img/henrique-casal-paris.jpg',
};

// Imagem de cada entregável (assets/img/entregaveis/). A primeira regra que casar com o título vale.
// Origem de cada arquivo em assets/img/entregaveis/CREDITOS.txt (fotos reais do Henrique, banco Unsplash e IA).
const IMG_ENT = [
  [/encontro extra/i, 'henrique-extra'],
  [/hot seat/i, 'hotseats'],
  [/tutoria mensal de ia/i, 'tutoria'],
  [/tutoria mensal com o seu time/i, 'henrique-time'],
  [/encontros? individua/i, 'henrique-individual'],
  [/mentor especialista/i, 'especialista'],
  [/encontro semanal/i, 'henrique-semanal'],
  [/implementação do processo/i, 'henrique-workshop'],
  [/prospecção/i, 'prospeccao'],
  [/indicação/i, 'indicacao'],
  [/indicadores/i, 'indicadores'],
  [/atendimento/i, 'atendimento'],
  [/esteira/i, 'esteira'],
  [/reunião 1x1/i, 'individuais'],
  [/crm/i, 'crm'],
  [/reativação/i, 'reativacao'],
  [/instagram/i, 'instagram'],
  [/agente de ia/i, 'agente'],
  [/simulador/i, 'simulador'],
  [/painel/i, 'painel'],
  [/comunicação para palestras/i, 'henrique-palco'],
  [/palestras como funil/i, 'henrique-plateia'],
];
function imgDe(titulo) {
  const r = IMG_ENT.find(([re]) => re.test(titulo));
  return r ? `assets/img/entregaveis/${r[1]}.jpg` : null;
}

// Trajetória (slide "De onde eu venho"): fotos reais em assets/img/trajetoria/
const TRAJETORIA = [
  { k: '2013', t: 'Do call center ao palco', p: 'Saí do atendimento num banco e entrei no marketing de relacionamento sem saber vender.', img: 'assets/img/trajetoria/1-palco.jpg' },
  { k: '9 anos · 5 países', t: '30 mil pessoas lideradas', p: 'Brasil, Equador, México, Peru e República Dominicana, com script e processo escritos.', img: 'assets/img/trajetoria/2-paises.jpg' },
  { k: 'Plateias de até 20 mil', t: 'O tímido virou palestrante', p: 'O mesmo método, ensinado para salas cada vez maiores.', img: 'assets/img/trajetoria/3-arena.jpg' },
  { k: '2023 a 2025', t: '22 lojas abertas', p: 'Diretor de expansão no steel frame: 30 contratos de franquia e um braço educacional com cerca de mil alunos.', img: 'assets/img/trajetoria/4-lojas.jpg' },
  { k: 'Estados Unidos', t: 'Turmas de empresários lá fora', p: 'Duas turmas levadas para dez dias de imersão nas fábricas e lojas americanas.', img: 'assets/img/trajetoria/5-eua.jpg' },
];

window.ESL_DECKS = { DECKS, COMMON, entregaveis, soma, PHOTOS, imgDe, TRAJETORIA };
