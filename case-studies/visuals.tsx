import s from "./case-studies.module.css";

const recoveryStages = ["Diagnose", "Consolidate", "Clarify", "Reinforce"];
const recoveryDetails = ["Find the loss patterns", "Resolve content overlap", "Strengthen topic relevance", "Monitor recovery"];
const journeyStages = ["Discover", "Localize", "Evaluate", "Enquire"];
const journeyDetails = ["Search demand", "Market-specific content", "School information", "Qualified lead"];

export function RecoveryVisual() {
  return (
    <div>
      <div className={s.visualLabel}>Recovery system</div>
      <div className={s.phaseMini} role="img" aria-label="Diagnose, consolidate, clarify and reinforce">
        {recoveryStages.map((stage, index) => (
          <span key={stage}><b>0{index + 1}</b>{stage}</span>
        ))}
      </div>
    </div>
  );
}

export function MarketVisual() {
  return (
    <div className={s.marketVisual} role="img" aria-label="A network of 15 plus international markets">
      {Array.from({ length: 15 }, (_, index) => <span className={s.marketDot} key={index} />)}
      <div className={s.marketCount}><b>15+</b><span>markets connected through a shared SEO framework</span></div>
    </div>
  );
}

export function JourneyVisual() {
  return (
    <div className={s.pathFlow} role="img" aria-label="Search discovery leads through localized content and school information to an enquiry">
      {journeyStages.map((stage, index) => (
        <div className={s.pathNode} key={stage}>
          <span>0{index + 1}</span><b>{stage}</b><p>{journeyDetails[index]}</p>
        </div>
      ))}
    </div>
  );
}

export function CommerceVisual() {
  return (
    <div>
      <div className={s.visualLabel}>A clearer shopping path</div>
      <div className={s.pageMap} role="img" aria-label="Buying guide connects to a category page and then product details">
        <div className={s.mapNode}>Buying guide<small>Explain trade-offs and use cases</small></div>
        <span className={s.mapArrow} aria-hidden="true">→</span>
        <div className={s.mapNode}>Category<small>Help compare the available range</small></div>
        <span className={s.mapArrow} aria-hidden="true">→</span>
        <div className={s.mapNode}>Product detail<small>Support a confident decision</small></div>
      </div>
    </div>
  );
}
