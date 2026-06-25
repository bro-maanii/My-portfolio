"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Volume2, VolumeX, Sparkles } from "lucide-react";

const ads = [
  {
    id: 1,
    brand: "Niacinamide 10% + Zinc",
    category: "Skincare",
    hook: "Stop. If your face looks like a frying pan by noon, keep watching.",
    video: "/UGC_ads/Niacinamide.mp4",
    thumbnail: null,
    tags: ["Skincare", "Beauty", "AI Voiceover"],
    script: [
      { label: "Hook",     text: "Stop. If your face looks like a frying pan by noon, keep watching." },
      { label: "Problem",  text: "You wash your face, feel fresh for like an hour, then boom shine is back, pores are visible, and that one acne mark from three months ago is still just... sitting there." },
      { label: "Solution", text: "This is Niacinamide 10% with Zinc two drops, that's it. It actually goes after the oil at the root, tightens pores over time, and fades those stubborn marks without bleaching your skin." },
      { label: "Proof",    text: "Over a hundred Pakistani girls have already switched and the biggest thing they say? Their makeup actually stays on now." },
      { label: "CTA",      text: "Link's right below. Order today, genuine imported stock, delivered to your door." },
    ],
  },
  {
    id: 2,
    brand: "FOXS Clothing",
    category: "Fashion",
    hook: "Okay wait I need to show you what I just found at FOXS.",
    video: "/UGC_ads/dress  FOXS  cloths.mp4",
    thumbnail: null,
    tags: ["Fashion", "Lifestyle", "AI Script"],
    script: [
      { label: "Hook",       text: "Okay wait I need to show you what I just found at FOXS." },
      { label: "Look 1",     text: "First look this cream bomber. It's giving expensive without the price tag. Under a hundred dollars." },
      { label: "Look 2",     text: "This apricot tweed with sequins I wore it to dinner and everyone asked. Seventy-nine dollars." },
      { label: "Look 3",     text: "This lace sleeve denim jacket casual but it's got that little extra thing. Perfect for the weekend." },
      { label: "Look 4",     text: "And when it actually gets cold this faux fur trim jacket is everything. Not puffy, not frumpy. Seventy-nine dollars." },
      { label: "CTA",        text: "Everything's on foxs.com free shipping over ninety-nine. Link is right below." },
    ],
  },
  {
    id: 3,
    brand: "Crème de la Mer",
    category: "Luxury Skincare",
    hook: "If your skin is constantly red and angry no matter what you put on it stop scrolling.",
    video: "/UGC_ads/Crème de la Mer.mp4",
    thumbnail: null,
    tags: ["Luxury", "Skincare", "AI Voiceover"],
    script: [
      { label: "Hook",     text: "If your skin is constantly red and angry no matter what you put on it stop scrolling." },
      { label: "Problem",  text: "I was doing everything right gentle cleanser, SPF, the whole routine and my skin still felt raw, tight, and irritated by noon. Like my barrier was just… broken." },
      { label: "Solution", text: "A friend told me to try La Mer's Crème de la Mer. You warm a tiny bit between your fingers, it melts into your skin, and the redness just... calms." },
      { label: "Proof",    text: "The formula uses Miracle Broth™ fermented for four months, clinically shown to improve skin resilience by 81% in two weeks. That's why dermatologists have recommended this for 50 years." },
      { label: "CTA",      text: "Link's below. Try it for two weeks your skin will tell you everything you need to know." },
    ],
  },
  {
    id: 4,
    brand: "Coca-Cola",
    category: "Beverage",
    hook: "No voiceover pure visuals. A cinematic AI-generated brand film.",
    video: "/UGC_ads/coca cola.mp4",
    thumbnail: null,
    tags: ["Beverage", "Cinematic", "No Voiceover"],
    script: [],
  },
];

export default function UGCAds() {
  const [active, setActive] = useState<null | (typeof ads)[0]>(null);
  const [muted, setMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function openModal(ad: (typeof ads)[0]) {
    setActive(ad);
    setMuted(false);
  }

  function closeModal() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActive(null);
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="section-label">UGC Ads</span>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">AI-Generated Ads</h2>
        <div className="flex items-center gap-2 mt-3">
          <Sparkles size={13} className="text-primary shrink-0" />
          <p className="font-body text-sm text-muted-foreground">
            Script, voiceover, scenes, and editing all made with AI tools.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ads.map((ad, i) => (
          <motion.button
            key={ad.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => openModal(ad)}
            className="group text-left bg-card border border-border hover:border-primary/30 rounded-sm overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {/* Video preview (muted autoplay loop as thumbnail) */}
            <div className="relative h-52 overflow-hidden bg-background">
              <video
                src={ad.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-11 h-11 rounded-sm bg-primary/80 border border-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <Play size={16} className="text-white ml-0.5" fill="white" />
                </div>
              </div>
              {/* Category badge */}
              <span className="absolute top-3 left-3 font-body text-[9px] font-semibold uppercase tracking-widest bg-black/60 text-white px-2.5 py-1 rounded-sm backdrop-blur-sm">
                {ad.category}
              </span>
            </div>

            {/* Card body */}
            <div className="p-4">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {ad.brand}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                {ad.hook}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ad.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] font-medium px-2 py-0.5 rounded-sm border border-border bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-card border border-border rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-sm bg-black/60 text-muted-foreground hover:text-foreground hover:bg-black/80 transition-colors backdrop-blur-sm"
                aria-label="Close"
              >
                <X size={15} />
              </button>

              {/* Video panel */}
              <div className="relative w-full md:w-[45%] bg-black shrink-0">
                <video
                  ref={videoRef}
                  src={active.video}
                  autoPlay
                  muted={muted}
                  loop
                  playsInline
                  controls={false}
                  className="w-full h-full object-contain max-h-[55vh] md:max-h-none md:h-full"
                />
                {/* Mute toggle */}
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center rounded-sm bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
              </div>

              {/* Script panel */}
              <div className="flex-1 p-6 overflow-y-auto">
                <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-primary">{active.category}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1 mb-1">{active.brand}</h3>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {active.tags.map((tag) => (
                    <span key={tag} className="font-body text-[10px] px-2 py-0.5 rounded-sm border border-border bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {active.script.length > 0 ? (
                  <div className="space-y-4">
                    <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">Ad Script</p>
                    {active.script.map((line, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-primary shrink-0 pt-0.5 min-w-[56px]">
                          {line.label}
                        </span>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">
                          {line.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 mt-4 p-4 bg-secondary border border-border rounded-sm">
                    <Sparkles size={13} className="text-primary shrink-0" />
                    <p className="font-body text-sm text-muted-foreground italic">
                      Pure cinematic visuals no voiceover. Scene direction and editing entirely AI-generated.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
