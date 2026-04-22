import soiledImg from "@/assets/soiled.png";
import { Leaf, TreePine, Sprout, Layers, Bug, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const blocks: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Leaf,
    title: "No Leaves",
    desc: "Our precision micromesh surface lets water through while deflecting leaves right off the edge.",
  },
  {
    icon: TreePine,
    title: "No Pine Needles",
    desc: "The ultra-fine 275-micron mesh is small enough to stop even the thinnest pine needles.",
  },
  {
    icon: Sprout,
    title: "No Seed Pods",
    desc: "Helicopter seeds and pods can't grip or pass through our smooth, sealed mesh surface.",
  },
  {
    icon: Layers,
    title: "No Sticks or Twigs",
    desc: "The angled profile guides sticks and twigs off your roof instead of into your gutters.",
  },
  {
    icon: Bug,
    title: "No Insects",
    desc: "A fully sealed barrier means no gaps for mosquitoes, wasps, or other pests to nest in.",
  },
  {
    icon: Shield,
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
        <p className="section-sub">From autumn leaves to winter debris , our system handles every threat so you never have to climb a ladder again.</p>
      </div>
      <div className="blocks-grid">
        {blocks.map((block) => {
          const Icon = block.icon;
          return (
            <div className="block-card" key={block.title}>
              <div className="block-card-img" style={{ padding: 0, overflow: "hidden" }}>
                <img src={soiledImg} alt={block.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div className="block-card-body">
                <h4 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Icon size={18} style={{ flexShrink: 0 }} />
                  {block.title}
                </h4>
                <p>{block.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlocksSection;
