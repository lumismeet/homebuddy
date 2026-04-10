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
    desc: "Micromesh blocks fallen leaves before they enter and clog your gutters.",
  },
  {
    emoji: "🌲",
    title: "No Pine Needles",
    desc: "Even tiny pine needles are stopped by the 275-micron fine stainless mesh.",
  },
  {
    emoji: "🌱",
    title: "No Seed Pods",
    desc: "Seed pods and helicopters can't find their way into your gutters.",
  },
  {
    emoji: "🪵",
    title: "No Sticks",
    desc: "Twigs and sticks shed off the surface thanks to the sloped design.",
  },
  {
    emoji: "🐛",
    title: "No Insects",
    desc: "Keeps out insects and other pests that nest in moist, clogged gutters.",
  },
  {
    emoji: "🐀",
    title: "No Rodents",
    desc: "Sealed coverage eliminates entry points for small rodents and birds.",
  },
];

const BlocksSection = () => {
  return (
    <section className="blocks-section">
      <div className="blocks-label">
        <div className="section-label">Protection</div>
        <h2 className="section-title">Protects Your Gutter From Clogs</h2>
        <p className="section-sub">Prevents common debris from entering the gutter that can cause costly damage.</p>
      </div>
      <div className="blocks-grid">
        {blocks.map((block) => (
          <div className="block-card" key={block.title}>
            <div className="block-card-img" style={{ padding: 0, overflow: "hidden" }}>
              <img src="/src/assets/soiled.png" alt={block.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
