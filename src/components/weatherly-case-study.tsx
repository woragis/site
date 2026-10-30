function DiagramLabel({ children }: { children: React.ReactNode }) {
  return <small className="weatherly-diagram__label">{children}</small>;
}

function RouteDiagram() {
  return <figure className="weatherly-route-diagram">
    <div className="weatherly-route-diagram__inputs">
      <div><span className="weatherly-route-diagram__icon">⌖</span><b>Localização</b><small>GPS permitido</small></div>
      <span>ou</span>
      <div><span className="weatherly-route-diagram__icon">⌕</span><b>Busca manual</b><small>cidade digitada</small></div>
    </div>
    <div className="weatherly-route-diagram__connector"><i /><span>coordenadas</span><i /></div>
    <div className="weatherly-route-diagram__bff"><DiagramLabel>ROUTE HANDLERS · BFF</DiagramLabel><b>Weatherly API</b><span>valida entrada · mantém a chave no servidor · normaliza dados</span></div>
    <div className="weatherly-route-diagram__connector"><i /><span>requisição com cache</span><i /></div>
    <div className="weatherly-route-diagram__provider"><span className="weatherly-provider-mark">O</span><div><DiagramLabel>PROVEDOR DE CLIMA</DiagramLabel><b>OpenWeatherMap</b><small>condições atuais + previsão</small></div></div>
    <figcaption>Mapa conceitual das responsabilidades; não representa uma chamada ao vivo nesta página.</figcaption>
  </figure>;
}

function ForecastCard() {
  return <figure className="weatherly-forecast-card" aria-label="Cartão editorial de previsão com dados fictícios">
    <div className="weatherly-forecast-card__top"><div><small>JOÃO PESSOA · EXEMPLO FICTÍCIO</small><b>Agora</b></div><span>☀</span></div>
    <div className="weatherly-forecast-card__temperature">29°<small>Ensolarado</small></div>
    <div className="weatherly-forecast-card__metrics"><span><small>SENSAÇÃO</small><b>31°</b></span><span><small>UMIDADE</small><b>68%</b></span><span><small>VENTO</small><b>14 km/h</b></span></div>
    <div className="weatherly-forecast-card__range"><div><b>12h</b><span>☀</span><small>29°</small></div><i /><div><b>15h</b><span>⛅</span><small>28°</small></div><i /><div><b>18h</b><span>☁</span><small>26°</small></div><i /><div><b>21h</b><span>☾</span><small>24°</small></div></div>
    <figcaption>Composição ilustrativa. Não é uma previsão atual nem uma captura da aplicação.</figcaption>
  </figure>;
}

export function WeatherlyCaseStudy() {
  return <div className="weatherly-case">
    <section className="weatherly-case__intro">
      <p className="eyebrow"><span>CASE / CLIMA</span> PRODUTO · WEB + MOBILE</p>
      <h2>Uma previsão útil começa por transformar dados em contexto.</h2>
      <p>O Weatherly reúne condições atuais e previsões em uma experiência web e mobile. A pessoa pode compartilhar a localização, se quiser, ou procurar uma cidade manualmente. Nos bastidores, a aplicação web funciona como uma camada intermediária para consultar e normalizar os dados do provedor antes de entregá-los às interfaces.</p>
      <p className="weatherly-case__note">Este case descreve o MVP registrado no repositório. Os cartões e valores são exemplos visuais fictícios; esta página não consulta a API de clima.</p>
    </section>

    <section className="weatherly-case__hero">
      <div className="weatherly-case__hero-copy"><p className="eyebrow"><span>O FLUXO DE DADOS</span> UMA CAMADA COMPARTILHADA</p><h2>Da cidade escolhida às duas interfaces.</h2><p>Web e mobile usam uma API própria como fronteira com os serviços externos. A chave da OpenWeatherMap fica no servidor, e as Route Handlers validam os parâmetros antes de consultar o provedor.</p></div>
      <RouteDiagram />
    </section>

    <div className="weatherly-story">
      <section className="weatherly-section">
        <p className="eyebrow"><span>01</span> / Escolher uma localização</p><div className="weatherly-section__content"><div><h2>O GPS é um atalho, não uma condição para usar o produto.</h2><p>No primeiro acesso, o app web pode solicitar as coordenadas do navegador. A implementação distingue estados como aguardando permissão, acesso negado e localização indisponível. Se a pessoa não quiser compartilhar a posição ou o navegador não conseguir obtê-la, pode procurar uma cidade pelo nome.</p><p>A busca consulta o endpoint de geocodificação do servidor, que devolve resultados com nome e coordenadas. Selecionar um resultado transforma a escolha da cidade em parâmetros que a consulta do clima consegue usar.</p></div><div className="weatherly-location-panel"><div className="weatherly-location-panel__heading"><span>LOCALIZAÇÃO</span><b>Escolha como continuar</b></div><div className="weatherly-location-option"><i>⌖</i><span><b>Usar minha localização</b><small>O navegador pedirá permissão</small></span><strong>OPCIONAL</strong></div><div className="weatherly-location-or">OU BUSQUE UMA CIDADE</div><div className="weatherly-location-search"><span>⌕</span><b>João Pessoa</b><i>↵</i></div><div className="weatherly-location-result"><span>João Pessoa, Paraíba, BR</span><b>−7.12, −34.86</b></div></div></div>
      </section>

      <section className="weatherly-section">
        <p className="eyebrow"><span>02</span> / Proteger e organizar integrações</p><div className="weatherly-section__content"><div><h2>O cliente não precisa conhecer a chave nem o formato do provedor.</h2><p>As Route Handlers recebem coordenadas ou um termo de busca, validam a entrada e consultam a OpenWeatherMap no servidor. Assim, a credencial não precisa ser enviada ao navegador nem incluída no cliente Expo.</p><p>A camada também converte a resposta externa para um contrato usado pela interface: condições atuais, métricas e pontos de previsão. Ela mapeia códigos de clima para ícones, rótulos em português e temas visuais que ajudam a compor a tela.</p></div><div className="weatherly-boundary-panel"><div className="weatherly-boundary-panel__client"><small>WEB + EXPO</small><b>Clientes do produto</b><span>coordenadas · termo de busca</span></div><div className="weatherly-boundary-panel__server"><small>ROUTE HANDLERS</small><b>Weatherly BFF</b><span>✓ valida parâmetros</span><span>✓ guarda credencial no servidor</span><span>✓ normaliza resposta do provedor</span></div><div className="weatherly-boundary-panel__provider"><span>O</span><b>OpenWeatherMap</b></div><p>Chave de API restrita ao ambiente de servidor.</p></div></div>
      </section>

      <section className="weatherly-section">
        <p className="eyebrow"><span>03</span> / Atualizar com equilíbrio</p><div className="weatherly-section__content"><div><h2>Clima muda; consultar a cada renderização seria desperdício.</h2><p>As chamadas ao provedor usam cache com revalidação de 15 minutos. As respostas das rotas também comunicam uma janela de cache compartilhado com revalidação em segundo plano. Isso reduz chamadas repetidas para coordenadas iguais e mantém a interface com dados recentes sem buscar novamente em toda renderização.</p><p>O intervalo é uma decisão de equilíbrio: o dado continua sendo uma aproximação temporal, e não uma observação em tempo real. A experiência deve deixar essa expectativa coerente com a frequência de atualização.</p></div><div className="weatherly-cache-card"><div className="weatherly-cache-card__heading"><span>MESMA CONSULTA</span><b>−7.12, −34.86</b></div><div className="weatherly-cache-card__timeline"><i /><span><b>1ª visita</b><small>consulta ao provedor</small></span><i /><span><b>até 15 min</b><small>resposta em cache</small></span><i /><span><b>após janela</b><small>revalidação</small></span></div><p>Esquema do comportamento de cache documentado.</p></div></div>
      </section>

      <section className="weatherly-section">
        <p className="eyebrow"><span>04</span> / Apresentar informação graduada</p><div className="weatherly-section__content"><div><h2>Condição atual primeiro; previsões dão perspectiva.</h2><p>A tela principal combina temperatura e condição atual com métricas como sensação térmica, umidade e vento. A previsão horária ajuda a perceber mudanças ao longo do dia; a lista diária oferece uma leitura mais ampla dos próximos dias.</p><p>O mapeamento da condição também fornece a base visual para atmosferas diferentes, como céu limpo, chuva ou neblina. A composição abaixo ilustra essa hierarquia com valores inventados, sem sugerir que são dados atuais.</p></div><ForecastCard /></div>
      </section>

      <section className="weatherly-section">
        <p className="eyebrow"><span>05</span> / Compartilhar a mesma fronteira</p><div className="weatherly-section__content"><div><h2>O aplicativo mobile consome o BFF da web.</h2><p>O cliente Expo usa os mesmos endpoints de clima e busca de cidades. Ele não chama a OpenWeatherMap diretamente: recebe a URL base do backend por configuração e trabalha com o tipo de resposta do produto.</p><p>Essa fronteira evita duplicar a integração externa em cada cliente. A web e o mobile podem ter interfaces diferentes e ainda depender das mesmas regras de validação, cache e normalização do serviço.</p></div><div className="weatherly-clients"><div className="weatherly-client-card"><small>CLIENTE WEB</small><b>Next.js</b><span>Route Handlers</span></div><div className="weatherly-clients__api"><i /> <b>API Weatherly</b> <i /></div><div className="weatherly-client-card weatherly-client-card--mobile"><small>CLIENTE MOBILE</small><b>Expo</b><span>consome o mesmo contrato</span></div><p>Uma API própria entre interfaces e provedor externo.</p></div></div>
      </section>

      <section className="weatherly-close"><p className="eyebrow"><span>06</span> / Escopo do MVP</p><h2>Um produto útil também precisa mostrar onde termina.</h2><div className="weatherly-close__grid"><p><strong>No MVP.</strong><br />Clima atual, previsão horária e diária, geolocalização, busca manual e estados para erros de localização e API.</p><p><strong>Infraestrutura.</strong><br />BFF em Route Handlers, chave do provedor no servidor, cache de 15 minutos e cliente Expo consumindo a API.</p><p><strong>Roadmap.</strong><br />Notificações push, widgets, modo viagem e anúncios seguem como ideias futuras, não como capacidades entregues.</p></div><p className="weatherly-case__note">A demo web está publicada. A disponibilidade do provedor pode variar; os exemplos deste estudo de caso permanecem fictícios.</p></section>
    </div>
  </div>;
}
