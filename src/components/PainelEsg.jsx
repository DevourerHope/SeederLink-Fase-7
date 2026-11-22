import React from 'react';

const number = (value, digits = 0) => new Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: digits,
  minimumFractionDigits: digits,
}).format(value);

const contextoLabel = {
  nao_informado: 'Não informado',
  familiar: 'Agricultura familiar',
  comunitario: 'Contexto comunitário / territorial',
  comercial: 'Produção comercial',
};

// Painel demonstrativo da Fase 7: score ESG + totais acumulados (integral discreta).
export default function PainelEsg({ property }) {
  if (!property?.resumo()) {
    return (
      <div className="portfolio-esg is-empty" data-testid="painel-esg-empty">
        <h4><i className="bi bi-leaf" aria-hidden="true"></i> Painel ESG</h4>
        <p>Ainda não há análise climática para estimar o indicador. Consulte o mapa e salve a propriedade.</p>
      </div>
    );
  }

  const esg = property.indicadorEsg();
  const axes = [
    { key: 'ambiental', label: 'Ambiental (E)', value: esg.ambiental, hint: 'Critérios climáticos do período' },
    { key: 'social', label: 'Social (S)', value: esg.social, hint: contextoLabel[property.contextoTerritorial] },
    { key: 'governanca', label: 'Governança (G)', value: esg.governanca, hint: 'Qualidade e fonte dos dados' },
  ];

  return (
    <div className="portfolio-esg" data-testid="painel-esg">
      <div className="portfolio-esg-head">
        <h4><i className="bi bi-leaf" aria-hidden="true"></i> Painel ESG</h4>
        <p className="portfolio-esg-score" aria-label={`Score ESG ${esg.score}`}>
          <strong>{esg.score}</strong>
          <span>/100</span>
        </p>
      </div>
      <ul className="portfolio-esg-axes">
        {axes.map((axis) => (
          <li key={axis.key}>
            <div className="portfolio-esg-axis-label">
              <span>{axis.label}</span>
              <strong>{axis.value}</strong>
            </div>
            <div className="portfolio-esg-bar" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={axis.value} aria-label={axis.label}>
              <span style={{ width: `${axis.value}%` }} />
            </div>
            <small>{axis.hint}</small>
          </li>
        ))}
      </ul>
      <dl className="portfolio-metrics portfolio-esg-accum">
        <div>
          <dt>Graus-dia</dt>
          <dd>{number(esg.acumulados.temperatureDegreeDays, 0)} °C·dia</dd>
        </div>
        <div>
          <dt>Umidade acumulada</dt>
          <dd>{number(esg.acumulados.humidityPercentDays, 0)} %·dia</dd>
        </div>
        <div>
          <dt>Radiação total</dt>
          <dd>{number(esg.acumulados.radiationTotalMj, 0)} MJ/m²</dd>
        </div>
      </dl>
      <p className="portfolio-esg-note">{esg.acumulados.note}</p>
      <p className="portfolio-warning">{esg.disclaimer}</p>
    </div>
  );
}
