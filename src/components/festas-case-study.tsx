function RentalItem({ name, icon, status }: { name: string; icon: string; status: string }) {
  return <div className="festas-rental-item"><span>{icon}</span><div><b>{name}</b><small>{status}</small></div></div>;
}

function RentalAvailability() {
  return <figure className="festas-availability" aria-label="Visão estática da disponibilidade de unidades de locação por data">
    <div className="festas-availability__head"><span>DISPONIBILIDADE · CADEIRA TIFFANY</span><b>21 SET</b></div>
    <div className="festas-availability__row"><span>CT-014</span><b>Reservada</b><i /></div>
    <div className="festas-availability__row"><span>CT-015</span><b>Disponível</b><i /></div>
    <div className="festas-availability__row is-maintenance"><span>CT-016</span><b>Manutenção</b><i /></div>
    <div className="festas-availability__legend"><span><i /> ocupada no período</span><span><i /> livre na data</span></div>
    <figcaption>Estado ilustrativo; a disponibilidade depende das reservas e do intervalo escolhido.</figcaption>
  </figure>;
}

function RentalFlow() {
  return <figure className="festas-rental-flow" aria-label="Diagrama estático do pedido público de locação até a festa registrada na administração">
    <div className="festas-rental-flow__store"><small>VITRINE PÚBLICA · /LOJA</small><b>Escolher para a festa</b><span>Data · itens · contato</span><RentalItem name="Cadeira Tiffany" icon="▧" status="R$ 8,00 / unidade"/><RentalItem name="Mesa redonda" icon="◉" status="R$ 35,00 / unidade"/></div>
    <div className="festas-rental-flow__arrow"><i>→</i><small>pedido + reserva</small></div>
    <div className="festas-rental-flow__admin"><small>ADMINISTRAÇÃO · /APP</small><b>Festa registrada</b><span>Cliente · data · itens atribuídos</span><div className="festas-rental-flow__status"><i>●</i> Reserva pendente</div></div>
    <figcaption>Fluxo de demonstração com dados fictícios. A vitrine é ligada a uma organização pela configuração do servidor.</figcaption>
  </figure>;
}

function RentalOrderRecord() {
  return <div className="festas-order-record"><div className="festas-order-record__heading"><small>FESTA · PEDIDO DA VITRINE</small><b>Aniversário da Ana</b><span>21 de setembro · Cliente fictícia</span></div><div><span>1 × Cadeira Tiffany</span><b>R$ 8,00</b></div><div><span>1 × Mesa redonda</span><b>R$ 35,00</b></div><footer><span>Unidades atribuídas</span><b>CT-015 · MR-004</b></footer><p>Uma unidade física por tipo selecionado nesta simulação.</p></div>;
}

function PaymentLayers() {
  return <figure className="festas-payment-layers" aria-label="Separação entre cobrança da assinatura SaaS e pagamento de um aluguel">
    <div><small>ASSINATURA DO SOFTWARE</small><b>Locadora → plano Festas</b><span>Stripe Checkout · subscription</span></div>
    <i>≠</i>
    <div><small>PAGAMENTO DO ALUGUEL</small><b>Cliente → pedido da festa</b><span>Stripe Checkout · payment</span></div>
    <figcaption>Dois objetivos de cobrança, ambos condicionados à configuração do Stripe.</figcaption>
  </figure>;
}

export function FestasCaseStudy() {
  return <div className="festas-case">
    <section className="festas-case__intro">
      <p className="eyebrow"><span>CASE / LOCAÇÃO</span> PRODUTO · VAREJO DE EVENTOS</p>
      <h2>Alugar uma cadeira envolve catálogo, unidade física e uma data.</h2>
      <p>Festas é uma aplicação para locadoras de itens de evento. A área administrativa acompanha catálogo, inventário, clientes, reservas e manutenção; uma vitrine pública permite que clientes escolham data e itens para enviar um pedido.</p>
      <p className="festas-case__note">As telas desta página são diagramas editoriais com dados inventados. Não são imagens de uma demonstração pública; o repositório documenta uma execução local.</p>
    </section>

    <section className="festas-case__hero">
      <div className="festas-case__hero-copy"><p className="eyebrow"><span>DUAS FACES · UM ESTOQUE</span> PEDIDO E OPERAÇÃO</p><h2>A vitrine escolhe. A locadora confirma e acompanha.</h2><p>O pedido público usa a data e os objetos selecionados para criar registros de cliente, festa e unidades reservadas. Na administração, o mesmo domínio continua com a operação de inventário, pagamentos e manutenção.</p></div>
      <RentalFlow />
    </section>

    <div className="festas-story">
      <section className="festas-section">
        <p className="eyebrow"><span>01</span> / Tipo alugável e unidade</p><div className="festas-section__content"><div><h2>Um produto do catálogo não é a unidade que vai para o evento.</h2><p>O modelo separa o tipo de item alugável — como mesa ou cadeira — das unidades físicas que a locadora possui. O catálogo guarda descrição, preço e imagem de capa. Cada unidade tem identificador e estado próprio, além de registros de atribuição e manutenção.</p><p>Essa distinção ajuda a responder duas perguntas diferentes: o que a locadora oferece e qual unidade pode ser comprometida em determinada data.</p></div><div className="festas-inventory-panel"><div className="festas-inventory-panel__heading"><small>CATÁLOGO</small><b>Cadeira Tiffany</b><span>R$ 8,00 / unidade</span></div><div className="festas-inventory-panel__units"><small>UNIDADES FÍSICAS</small><RentalItem name="CT-014" icon="▧" status="Em uso"/><RentalItem name="CT-015" icon="▧" status="Disponível"/><RentalItem name="CT-016" icon="▧" status="Em manutenção"/></div></div></div>
      </section>

      <section className="festas-section">
        <p className="eyebrow"><span>02</span> / Disponibilidade por período</p><div className="festas-section__content"><div><h2>A consulta considera a data do evento e reservas que se sobrepõem.</h2><p>Para encontrar unidades disponíveis, o sistema procura atribuições ativas com status de reserva ou entrega em festas cujos períodos cruzam a data solicitada. A unidade reservada para um período não aparece livre dentro daquele intervalo; outra data pode ter uma disponibilidade diferente.</p><p>Unidades em manutenção ficam fora da seleção. A tela da vitrine mostra uma disponibilidade de referência para uma data próxima, enquanto o pedido reavalia os itens na data escolhida pelo cliente.</p></div><RentalAvailability /></div>
      </section>

      <section className="festas-section">
        <p className="eyebrow"><span>03</span> / Vitrine e pedido</p><div className="festas-section__content"><div><h2>O pedido público inicia o fluxo comercial sem substituir o trabalho da locadora.</h2><p>Na rota <code>/loja</code>, a pessoa informa nome, telefone, data do evento e escolhe tipos de item. O servidor cria o registro do cliente e da festa, busca unidades disponíveis e associa uma unidade de cada tipo selecionado ao pedido.</p><p>O pedido aparece na área administrativa para a locadora acompanhar. A configuração <code>STOREFRONT_ORG_SLUG</code> determina qual organização abastece essa vitrine fixa, conforme o README do projeto.</p></div><RentalOrderRecord /></div>
      </section>

      <section className="festas-section">
        <p className="eyebrow"><span>04</span> / Manutenção e operação</p><div className="festas-section__content"><div><h2>O estado da unidade acompanha o ciclo de uso.</h2><p>Além de atribuir unidades a eventos, a administração registra manutenção com tipo, descrição, status e responsável. O inventário distingue itens disponíveis, em uso e sob manutenção; esse estado afeta quais unidades podem ser oferecidas na consulta de disponibilidade.</p><p>Clientes, festas, itens atribuídos, pagamentos e manutenção permanecem relacionados no domínio, permitindo que a locadora navegue do pedido até as unidades físicas envolvidas.</p></div><div className="festas-maintenance-panel"><div className="festas-maintenance-panel__unit"><small>UNIDADE · CT-016</small><b>Cadeira Tiffany</b><span>Estado do inventário</span><strong>EM MANUTENÇÃO</strong></div><div className="festas-maintenance-panel__log"><small>REGISTRO DE MANUTENÇÃO</small><b>Limpeza após devolução</b><span>Pendente · responsável registrado</span></div><p>Esquema de relações do inventário e do registro operacional.</p></div></div>
      </section>

      <section className="festas-section">
        <p className="eyebrow"><span>05</span> / Dois fluxos de cobrança</p><div className="festas-section__content"><div><h2>A assinatura da locadora e o pagamento do aluguel não são a mesma transação.</h2><p>O produto tem uma área de billing para a locadora assinar o serviço e um fluxo de pagamento do aluguel associado a um pedido de festa. O código diferencia a assinatura SaaS de uma sessão única de Checkout para a locação; o webhook também identifica o evento de pagamento do aluguel por metadata.</p><p>Esses caminhos dependem das chaves, preços e webhooks do Stripe estarem configurados. O repositório descreve execução local e não confirma uma vitrine pública disponível; portanto o case não apresenta uma URL de demonstração.</p></div><PaymentLayers /></div>
      </section>

      <section className="festas-close"><p className="eyebrow"><span>06</span> / Escopo demonstrável</p><h2>O case acompanha a locação sem prometer estoque infalível.</h2><div className="festas-close__grid"><p><strong>Incluído no produto.</strong><br />Catálogo, unidades identificáveis, disponibilidade por período, pedidos, atribuições, pagamentos e registros de manutenção.</p><p><strong>Dependente de ambiente.</strong><br />Checkout do Stripe e imagens no MinIO/S3 exigem configuração local ou de produção.</p><p><strong>Antes de divulgar.</strong><br />Validar a reserva em execução, revisar concorrência de solicitações e usar dados inteiramente fictícios.</p></div><p className="festas-case__note">Estudo de caso em revisão. O README inclui uma conta seed local; credenciais e dados de exemplo não aparecem nesta página.</p></section>
    </div>
  </div>;
}
