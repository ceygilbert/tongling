import React, { useState } from "react";
import { getStoredHomeContent, DEFAULT_HOME_CONTENT, PRODUCTS } from "../data";
import { Save } from "lucide-react";

export const HomeEditor = () => {
  const [content, setContent] = useState(getStoredHomeContent());
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem("sincerity_home_content", JSON.stringify(content));
    window.dispatchEvent(new Event("storage"));
    setTimeout(() => setIsSaving(false), 500);
  };

  const handleTeamChange = (index: number, field: string, value: string) => {
    const newTeam = [...content.philosophy.team];
    newTeam[index] = { ...newTeam[index], [field]: value };
    setContent({
      ...content,
      philosophy: { ...content.philosophy, team: newTeam }
    });
  };

  const toggleProductId = (id: string) => {
    const currentIds = content.mainCollection.productIds || [];
    const newIds = currentIds.includes(id) 
      ? currentIds.filter(pid => pid !== id)
      : [...currentIds, id];
    setContent({
      ...content,
      mainCollection: { ...content.mainCollection, productIds: newIds }
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 shadow-xl border border-ink/5 space-y-12">
      <div className="flex justify-between items-center pb-6 border-b border-ink/10">
        <h2 className="text-2xl font-formal text-ink tracking-widest uppercase">Home Page Content</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-ink text-bg-base px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-ink/80 transition-all"
        >
          <Save size={14} />
          {isSaving ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="space-y-8">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Hero Section</h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Title Line 1</label>
            <input
              type="text"
              value={content.hero.titleLine1}
              onChange={(e) => setContent({...content, hero: {...content.hero, titleLine1: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Title Line 2</label>
            <input
              type="text"
              value={content.hero.titleLine2}
              onChange={(e) => setContent({...content, hero: {...content.hero, titleLine2: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Title Line 3</label>
            <input
              type="text"
              value={content.hero.titleLine3}
              onChange={(e) => setContent({...content, hero: {...content.hero, titleLine3: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Description</label>
            <textarea
              value={content.hero.description}
              onChange={(e) => setContent({...content, hero: {...content.hero, description: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors h-32"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Image URL</label>
            <input
              type="text"
              value={content.hero.image}
              onChange={(e) => setContent({...content, hero: {...content.hero, image: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      <div className="space-y-8">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Philosophy Section</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Quote</label>
            <textarea
              value={content.philosophy.quote}
              onChange={(e) => setContent({...content, philosophy: {...content.philosophy, quote: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors h-32"
            />
          </div>

          <div className="space-y-6 pt-4">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Team Members</label>
            {content.philosophy.team.map((member, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-ink/5 p-4 bg-ink/[0.02]">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-ink/40 font-bold block">Name</label>
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => handleTeamChange(i, 'name', e.target.value)}
                    className="w-full border border-ink/20 p-2 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-ink/40 font-bold block">Role / Description</label>
                  <input
                    type="text"
                    value={member.role}
                    onChange={(e) => handleTeamChange(i, 'role', e.target.value)}
                    className="w-full border border-ink/20 p-2 bg-white font-sans text-sm outline-none focus:border-ink transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      <div className="space-y-8">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Main Collection Section</h3>
        <div className="space-y-6">
          <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Select Products to Feature</label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PRODUCTS.map(product => (
              <label key={product.id} className="flex items-start gap-3 p-4 border border-ink/10 hover:border-ink/30 cursor-pointer transition-colors bg-ink/[0.02]">
                <input
                  type="checkbox"
                  checked={(content.mainCollection?.productIds || []).includes(product.id)}
                  onChange={() => toggleProductId(product.id)}
                  className="mt-1"
                />
                <div className="space-y-1">
                  <div className="font-mono text-xs font-bold text-ink">{product.title}</div>
                  <div className="font-sans text-[11px] text-ink/60 line-clamp-1">{product.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      <div className="space-y-8">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Culture as Nature Section</h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Subtitle</label>
            <input
              type="text"
              value={content.sustainability?.subtitle || ""}
              onChange={(e) => setContent({...content, sustainability: {...content.sustainability, subtitle: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Title Line 1</label>
            <input
              type="text"
              value={content.sustainability?.titleLine1 || ""}
              onChange={(e) => setContent({...content, sustainability: {...content.sustainability, titleLine1: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Title Line 2</label>
            <input
              type="text"
              value={content.sustainability?.titleLine2 || ""}
              onChange={(e) => setContent({...content, sustainability: {...content.sustainability, titleLine2: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Description</label>
            <textarea
              value={content.sustainability?.description || ""}
              onChange={(e) => setContent({...content, sustainability: {...content.sustainability, description: e.target.value}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors h-32"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Image 1 URL</label>
              <input
                type="text"
                value={content.sustainability?.image1 || ""}
                onChange={(e) => setContent({...content, sustainability: {...content.sustainability, image1: e.target.value}})}
                className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Image 1 Caption</label>
              <input
                type="text"
                value={content.sustainability?.image1Caption || ""}
                onChange={(e) => setContent({...content, sustainability: {...content.sustainability, image1Caption: e.target.value}})}
                className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Image 2 URL</label>
              <input
                type="text"
                value={content.sustainability?.image2 || ""}
                onChange={(e) => setContent({...content, sustainability: {...content.sustainability, image2: e.target.value}})}
                className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Image 2 Caption</label>
              <input
                type="text"
                value={content.sustainability?.image2Caption || ""}
                onChange={(e) => setContent({...content, sustainability: {...content.sustainability, image2Caption: e.target.value}})}
                className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-[#B2A490] font-black block">Features (one per line)</label>
            <textarea
              value={(content.sustainability?.features || []).join('\n')}
              onChange={(e) => setContent({...content, sustainability: {...content.sustainability, features: e.target.value.split('\n')}})}
              className="w-full border border-ink/20 p-3 bg-transparent font-sans text-sm outline-none focus:border-ink transition-colors h-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
