import { Parallax } from "react-parallax";

export default function Cover({ img, title,desc }) {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[550px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="w-[750px] bg-slate-900 opacity-70 px-10 py-6">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-center">
             {desc}
             </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
