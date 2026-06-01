const manifestoCards = [
  {
    id: '01',
    title: 'Death to Theory',
    text: 'We have abolished the traditional classroom. There are no simulations here. You learn capital markets by managing real portfolios. You learn sales by closing live developer inventory.',
  },
  {
    id: '02',
    title: 'Operators, Not Academics',
    text: 'Our faculty aren\'t career professors. They are venture capitalists, active developers, and PropTech founders who step off the trading floor and into our Sandbox.',
  },
  {
    id: '03',
    title: 'Guaranteed Skin in the Game',
    text: 'We don\'t believe in the "internship hustle." Every operator admitted to Lotlite signs a salaried employment contract on Day 1. You earn while you build.',
  },
  {
    id: '04',
    title: 'The Technology Mandate',
    text: 'Brick and mortar is no longer enough. Our operators are trained in Python, GIS mapping, AI valuation models, and blockchain fractionalization. We engineer the future of the stack.',
  },
]

const VisionManifesto = () => (
  <section className="vision-manifesto-section">
    <div className="vision-section-header">
      <div className="vision-section-label">THE LOTLITE MANIFESTO</div>
      <div className="vision-section-underline" />
    </div>
    <div className="vision-manifesto-grid">
      {manifestoCards.map((card) => (
        <article key={card.id} className="vision-manifesto-card">
          <div className="vision-card-icon">{card.id}</div>
          <h3 className="vision-card-title">{card.title}</h3>
          <p className="vision-card-text">{card.text}</p>
        </article>
      ))}
    </div>
  </section>
)

export default VisionManifesto;
