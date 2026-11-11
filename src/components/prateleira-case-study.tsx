const products = [
  { icon: "🍅", name: "Tomate italiano", detail: "Lote recebido · vence em 4 dias", qty: "12 un.", tone: "tomato" },
  { icon: "🥛", name: "Leite integral", detail: "Lote recebido · vence em 9 dias", qty: "18 un.", tone: "milk" },
  { icon: "☕", name: "Café torrado", detail: "Lote recebido · sem validade", qty: "7 un.", tone: "coffee" },
];

function ProductRows() {
  return <div className="prateleira-products">{products.map((product, index) => <div className={`prateleira-product prateleira-product--${product.tone}`} key={product.name} style={{ "--row": index } as React.CSSProperties}><span className="prateleira-product__icon">{product.icon}</span><span className="prateleira-product__copy"><b>{product.name}</b><small>{product.detail}</small></span><strong>{product.qty}</strong></div>)}</div>;
}

function MiniScene({ kind, label }: { kind: "lots" | "sale" | "team" | "billing"; label: string }) {
  return <figure className={`prateleira-scene prateleira-scene--${kind}`} aria-label={label}>
    {kind === "lots" && <>
      <div className="prateleira-scene__lot-card"><small>ESTOQUE · TOMATE ITALIANO</small><b>30 <span>unidades</span></b><div className="prateleira-lots"><i><span>Lote A · vence em 4 dias</span><b>12 un.</b></i><i><span>Lote B · vence em 12 dias</span><b>18 un.</b></i></div></div>
      <div className="prateleira-lot-take"><span>VENDA · 5 UN.</span><b>−5</b></div>
      <div className="prateleira-scene__stock-result"><small>APÓS A VENDA</small><b>25 <span>unidades</span></b><i>Lote A · 7 un.</i><i>Lote B · 18 un.</i></div>
    </>}
    {kind === "sale" && <>
      <div className="prateleira-sale-list"><small>CAIXA · CARRINHO</small><i><span>Tomate italiano × 2</span><b>R$ 11,80</b></i><i><span>Leite integral × 1</span><b>R$ 6,49</b></i><i><span>Café torrado × 1</span><b>R$ 18,90</b></i><strong><span>Total</span><b>R$ 37,19</b></strong></div>
      <div className="prateleira-sale-method"><small>FORMA DE PAGAMENTO</small><b>PIX <span>✓</span></b><i>Venda registrada</i></div>
    </>}
    {kind === "team" && <>
      <div className="prateleira-team-card"><small>EMPRESA · MERCADO DO BAIRRO</small><b>Equipe da loja</b><div><span className="prateleira-avatar">MA</span><i><b>Marina Alves</b><small>Proprietária</small></i><strong>OWNER</strong></div><div><span className="prateleira-avatar">CA</span><i><b>Caio Andrade</b><small>Caixa</small></i><strong>CASHIER</strong></div></div>
      <div className="prateleira-team-scope"><span>ORGANIZAÇÃO</span><b>Mercado do Bairro</b><i>↳ Loja Centro</i></div>
    </>}
    {kind === "billing" && <>
      <div className="prateleira-billing-card"><small>ASSINATURA DO MERCADINHO</small><b>Plano Essencial</b><span>Até 1 loja · até 5 pessoas</span><div>Stripe Checkout <i>↗</i></div></div>
      <div className="prateleira-billing-divider"><span>CAMADA SAAS</span><i>≠</i><span>OPERAÇÃO DA LOJA</span></div>
      <div className="prateleira-billing-pos"><small>VENDA NO CAIXA</small><b>PIX <span>·</span> dinheiro <span>·</span> cartão</b><em>Forma registrada na venda</em></div>
    </>}
    <figcaption>{label}</figcaption>
  </figure>;
}

export function PrateleiraCaseStudy() {
  return <div className="prateleira-case">
    <section className="prateleira-case__intro">
      <p className="eyebrow"><span>CASE / VAREJO</span> PRODUTO · GESTÃO DE MERCADINHO</p>
      <h2>Uma venda no caixa começa muito antes de passar pelo caixa.</h2>
      <p>O Prateleira conecta catálogo, estoque por lotes, equipe e ponto de venda em uma aplicação para pequenos mercados. O case acompanha uma venda simples para mostrar como uma ação cotidiana atravessa o domínio do produto: escolher itens, definir a forma de pagamento, registrar a venda e atualizar os lotes que sustentam aquele estoque.</p>
      <p className="prateleira-case__note">As cenas desta página são ilustrações editoriais com dados fictícios. Elas explicam comportamentos representados no código; não são capturas de uma sessão real nem integração com um caixa físico.</p>
    </section>

    <figure className="prateleira-hero" aria-label="Demonstração ilustrativa do fluxo de venda e atualização do estoque">
      <div className="prateleira-hero__top"><div><p className="eyebrow"><span>OPERAÇÃO · LOJA CENTRO</span> DADOS DE DEMONSTRAÇÃO</p><h2>Do carrinho à baixa do lote.</h2></div><span className="prateleira-live"><i /> FLUXO ILUSTRATIVO</span></div>
      <div className="prateleira-hero__workspace">
        <section className="prateleira-hero__inventory"><header><div><small>ESTOQUE DA LOJA</small><b>Produtos e lotes</b></div><span>3 itens</span></header><ProductRows /><footer><span>Estoque é a soma das quantidades em lote.</span><b>Ver lotes ↗</b></footer></section>
        <span className="prateleira-hero__connector" aria-hidden="true">→</span>
        <section className="prateleira-hero__checkout"><header><div><small>PONTO DE VENDA</small><b>Venda #0482</b></div><span className="prateleira-register-dot">● Aberto</span></header><div className="prateleira-cart"><small>ITENS NO CARRINHO</small><i><span>Tomate italiano <em>2 × R$ 5,90</em></span><b>R$ 11,80</b></i><i><span>Leite integral <em>1 × R$ 6,49</em></span><b>R$ 6,49</b></i><i><span>Café torrado <em>1 × R$ 18,90</em></span><b>R$ 18,90</b></i></div><div className="prateleira-cart__total"><span>Total</span><b>R$ 37,19</b></div><div className="prateleira-payment"><span>Pagamento</span><b>PIX</b></div><div className="prateleira-sale-confirm"><i>✓</i><span><b>Venda registrada</b><small>Estoque atualizado · lotes debitados</small></span></div></section>
        <div className="prateleira-hero__stock-update"><span className="prateleira-stock-pulse">↘</span><small>LOTE DE TOMATE · VENCE EM 4 DIAS</small><b>12 <i>un.</i><span>−2</span></b><div><i /></div><em>10 unidades restantes neste lote</em></div>
      </div>
      <figcaption>Fluxo representado: carrinho → venda registrada em transação → baixa dos lotes por validade mais próxima. PIX é uma forma de pagamento registrada, sem integração TEF nesta demonstração.</figcaption>
    </figure>

    <div className="prateleira-story">
      <section className="prateleira-section">
        <p className="eyebrow"><span>01</span> / O problema operacional</p><div className="prateleira-section__content"><div><h2>Um número de estoque não conta a história inteira.</h2><p>Para um mercado, saber que existem trinta unidades de um produto é só parte da resposta. As unidades podem ter chegado em momentos diferentes, ter custos distintos e estar associadas a datas de validade diferentes. Se o sistema guarda apenas um total agregado, detalhes importantes da operação desaparecem.</p><p>O Prateleira modela o estoque em lotes ligados ao produto. Cada lote registra quantidade, custo e, quando informado, validade. A visão resumida pode somar as unidades disponíveis; a estrutura preserva os lotes por trás desse total.</p></div><MiniScene kind="lots" label="Animação ilustrativa de estoque agregado em dois lotes e baixa de cinco unidades do lote com validade mais próxima." /></div>
      </section>

      <section className="prateleira-section">
        <p className="eyebrow"><span>02</span> / Venda no PDV</p><div className="prateleira-section__content"><div><h2>O checkout transforma o carrinho em registros conectados.</h2><p>No ponto de venda, a pessoa seleciona produtos, ajusta quantidades e escolhe dinheiro, PIX ou cartão. O servidor confere que cada produto pertence à loja ativa, calcula o total com preços persistidos e tenta retirar a quantidade solicitada dos lotes disponíveis.</p><p>A venda e seus itens são criados dentro da mesma transação do banco. Se não houver estoque suficiente para concluir a baixa, a operação lança um erro e a transação não registra uma venda parcial. Cada item também guarda o preço e o custo unitário usados no momento da venda.</p></div><MiniScene kind="sale" label="Animação ilustrativa de um carrinho, total e forma de pagamento registrada." /></div>
      </section>

      <section className="prateleira-section">
        <p className="eyebrow"><span>03</span> / Consumo dos lotes</p><div className="prateleira-section__content"><div><h2>A baixa segue a validade mais próxima primeiro.</h2><p>Ao vender um produto, o sistema ordena os lotes com validade antes dos lotes sem validade; entre os que têm data, consome primeiro a data mais próxima. Se um lote não cobre toda a quantidade, continua no próximo até completar a venda ou detectar falta de estoque.</p><p>O custo unitário registrado no item é calculado a partir do custo médio ponderado das unidades retiradas. Isso mantém um retrato do custo associado àquela venda, mesmo quando a quantidade veio de mais de um lote.</p><p>Essa é uma regra de consumo implementada no checkout. Não estamos apresentando aqui um painel de alertas, previsão de perdas ou uma ferramenta fiscal.</p></div><MiniScene kind="lots" label="Animação ilustrativa do consumo de um lote antes de avançar ao lote seguinte." /></div>
      </section>

      <section className="prateleira-section">
        <p className="eyebrow"><span>04</span> / Organização e equipe</p><div className="prateleira-section__content"><div><h2>Uma organização pode reunir lojas e pessoas.</h2><p>O domínio separa a organização das lojas e associa pessoas à organização por meio de vínculos com papéis como proprietário, gerente e caixa. Produtos, categorias, lotes e vendas pertencem a uma loja; os vínculos da equipe pertencem à organização.</p><p>Essa estrutura prepara o produto para representar quem opera o sistema e em qual contexto. A ilustração mostra o modelo de relacionamento em alto nível, sem prometer uma matriz completa de permissões por tela.</p></div><MiniScene kind="team" label="Diagrama animado de uma organização, uma loja e membros da equipe com papéis distintos." /></div>
      </section>

      <section className="prateleira-section">
        <p className="eyebrow"><span>05</span> / Assinatura SaaS</p><div className="prateleira-section__content"><div><h2>A assinatura do software e a venda do mercado são fluxos diferentes.</h2><p>O produto também modela planos, período de teste e estado da assinatura da organização, com integração de billing via Stripe Checkout, Customer Portal e webhooks. Essa camada trata da assinatura do mercadinho ao serviço.</p><p>Já no PDV, dinheiro, PIX e cartão são valores registrados junto à venda. O código consultado não integra um terminal TEF nem processa o pagamento do cliente final. Separar as duas coisas deixa claro o limite entre cobrança do SaaS e operação comercial.</p></div><MiniScene kind="billing" label="Animação que distingue a assinatura SaaS no Stripe das formas de pagamento registradas no ponto de venda." /></div>
      </section>

      <section className="prateleira-close"><p className="eyebrow"><span>06</span> / Escopo e decisões</p><h2>O foco é dar continuidade aos dados da operação.</h2><div className="prateleira-close__grid"><p><strong>Estoque rastreável.</strong><br />Quantidade disponível é derivada de lotes, que carregam custo e validade.</p><p><strong>Venda atômica.</strong><br />Itens, total, forma de pagamento e baixa de estoque são conectados no checkout transacional.</p><p><strong>Limites declarados.</strong><br />Emissão fiscal e integração TEF ficam fora do escopo descrito pelo projeto.</p></div><p className="prateleira-case__note">Estudo de caso em revisão. A demonstração deve usar apenas dados fictícios e não deve expor as contas seed ou configurações privadas do ambiente.</p></section>
    </div>
  </div>;
}
