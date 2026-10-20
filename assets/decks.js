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

// Entregáveis completos por deck (ordem de apresentação)
function entregaveis(deck) {
  return [...deck.encontros, ...COMMON.processo, ...COMMON.conversao, ...deck.exclusivos];
}
function soma(items) { return items.reduce((a, b) => a + b.v, 0); }

// Fotos (preencher com os caminhos quando as imagens estiverem em assets/img/)
// Ex.: { capa: 'assets/img/henrique-retrato.jpg', palestra: 'assets/img/henrique-palestra.jpg' }
const PHOTOS = {
  // capa: 'assets/img/henrique-retrato.jpg',   // PENDENTE: retrato profissional (camisa azul, escritório) — pedir original ao Henrique
  // palestra: 'assets/img/henrique-palestra.jpg',
  familia: 'assets/img/henrique-familia.jpg',
  casal: 'assets/img/henrique-casal-paris.jpg',
};

window.ESL_DECKS = { DECKS, COMMON, entregaveis, soma, PHOTOS };
