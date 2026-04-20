import soiledImg from "@/assets/soiled.png";

const PhIcon = () => (
  <svg className="ph-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="56" height="40" rx="4" stroke="#5a7a5a" strokeWidth="2" />
    <circle cx="24" cy="28" r="8" stroke="#5a7a5a" strokeWidth="2" />
    <path d="M4 44 L20 30 L32 42 L44 28 L60 44" stroke="#5a7a5a" strokeWidth="2" />
  </svg>
);

const blocks = [
  {
    emoji: "🍂",
    title: "No Leaves",
    desc: "Our precision micromesh surface lets water through while deflecting leaves right off the edge.",
  },
  {
    emoji: "🌲",
    title: "No Pine Needles",
    desc: "The ultra-fine 275-micron mesh is small enough to stop even the thinnest pine needles.",
  },
  {
    emoji: "🌱",
    title: "No Seed Pods",
    desc: "Helicopter seeds and pods can't grip or pass through our smooth, sealed mesh surface.",
  },
  {
    emoji: "🪵",
    title: "No Sticks or Twigs",
    desc: "The angled profile guides sticks and twigs off your roof instead of into your gutters.",
  },
  {
    emoji: "🐛",
    title: "No Insects",
    desc: "A fully sealed barrier means no gaps for mosquitoes, wasps, or other pests to nest in.",
  },
  {
    emoji: "🐀",
    title: "No Rodents or Birds",
    desc: "Complete gutter enclosure removes the entry points that small animals love to exploit.",
  },
];

const BlocksSection = () => {
  return (
    <section className="blocks-section">
      <div className="blocks-label">
        <div className="section-label">Protection</div>
        <h2 className="section-title">Your Gutters Stay Clear, No Matter the Season</h2>
        <p className="section-sub">From autumn leaves to winter debris — our system handles every threat so you never have to climb a ladder again.</p>
      </div>
      <div className="blocks-grid">
        {blocks.map((block) => (
          <div className="block-card" key={block.title}>
            <div className="block-card-img" style={{ padding: 0, overflow: "hidden" }}>
              <img src={soiledImg} alt={block.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div className="block-card-body">
              <h4>{block.emoji} {block.title}</h4>
              <p>{block.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlocksSection;
