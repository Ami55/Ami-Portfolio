import s from "./case-studies.module.css";

const journeyStages = ["Discover", "Localize", "Evaluate", "Enquire"];
const journeyDetails = ["Search demand", "Market-specific content", "School information", "Qualified lead"];

export function RecoveryVisual() {
  return (
    <div className={s.recoveryGraphic}>
      <svg className={s.recoveryOrbit} viewBox="0 0 400 260" fill="none" aria-hidden="true">
        <circle cx="335" cy="130" r="108" stroke="currentColor" opacity=".2" />
        <circle cx="335" cy="130" r="77" stroke="currentColor" opacity=".16" />
        <circle cx="335" cy="130" r="46" stroke="currentColor" opacity=".12" />
        <circle cx="260" cy="52" r="5" fill="#8ff0ce" />
        <circle cx="335" cy="207" r="4" fill="#a49aff" />
      </svg>
      <span className={s.recoveryEyebrow}>ORGANIC RECOVERY</span>
      <strong>Visibility,<br/>rebuilt.</strong>
      <span className={s.recoveryCaption}>Content · Relevance · Trust</span>
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
