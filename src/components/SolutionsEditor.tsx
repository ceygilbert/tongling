import React, { useState } from "react";
import { getStoredSolutionsContent } from "../data";
import { Save, Plus, Trash2 } from "lucide-react";
import { SolutionsContent } from "../types";

export const SolutionsEditor = () => {
  const [content, setContent] = useState<SolutionsContent>(getStoredSolutionsContent());
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem("sincerity_solutions_content", JSON.stringify(content));
    window.dispatchEvent(new Event("storage"));
    setTimeout(() => setIsSaving(false), 500);
  };

  const updateField = (section: keyof SolutionsContent, field: string, value: string) => {
    setContent({
      ...content,
      [section]: {
        ...(content[section] as any),
        [field]: value
      }
    });
  };

  const updateArrayItem = (section: keyof SolutionsContent, index: number, value: any) => {
    const newArray = [...(content[section] as any[])];
    newArray[index] = value;
    setContent({ ...content, [section]: newArray });
  };

  const addArrayItem = (section: keyof SolutionsContent, defaultItem: any) => {
    setContent({ ...content, [section]: [...(content[section] as any[]), defaultItem] });
  };

  const removeArrayItem = (section: keyof SolutionsContent, index: number) => {
    const newArray = [...(content[section] as any[])];
    newArray.splice(index, 1);
    setContent({ ...content, [section]: newArray });
  };

  const updateObjectInArray = (section: keyof SolutionsContent, index: number, field: string, value: string) => {
    const arr = content[section] as any[];
    const newArray = [...arr];
    newArray[index] = { ...newArray[index], [field]: value };
    setContent({ ...content, [section]: newArray });
  };

  return (
    <div className="bg-white p-6 md:p-8 shadow-xl border border-ink/5 space-y-12">
      <div className="flex justify-between items-center pb-6 border-b border-ink/10">
        <h2 className="text-2xl font-formal text-ink tracking-widest uppercase">Solutions Page Content</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-ink text-bg-base px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-ink/80 transition-all"
        >
          <Save size={14} />
          {isSaving ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Heritage Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Heritage Section</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Subtitle (titleLine1)</label>
            <input
              type="text"
              value={content.heritage.titleLine1}
              onChange={(e) => updateField("heritage", "titleLine1", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Main Title (title)</label>
            <input
              type="text"
              value={content.heritage.title}
              onChange={(e) => updateField("heritage", "title", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Description Paragraph 1</label>
            <textarea
              value={content.heritage.desc1}
              onChange={(e) => updateField("heritage", "desc1", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-24 focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Description Paragraph 2</label>
            <textarea
              value={content.heritage.desc2}
              onChange={(e) => updateField("heritage", "desc2", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-32 focus:outline-none focus:border-collision"
            />
          </div>
        </div>
      </div>

      {/* Basic Arrays (Strings) */}
      {[
        { key: "applications", title: "Applications", default: "New Application" },
        { key: "yarnSpecs", title: "Yarn Specifications", default: "New Spec" },
        { key: "pfdSpecs", title: "PFD Specifications", default: "New Spec" },
        { key: "bespokeSolutions", title: "Bespoke Solutions", default: "New Solution" },
      ].map(sec => (
        <div key={sec.key} className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-formal uppercase tracking-widest text-ink">{sec.title}</h3>
            <button onClick={() => addArrayItem(sec.key as any, sec.default)} className="text-collision text-xs font-mono uppercase flex items-center gap-1">
              <Plus size={14} /> Add Item
            </button>
          </div>
          <div className="space-y-3">
            {(content[sec.key as keyof SolutionsContent] as string[]).map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateArrayItem(sec.key as any, idx, e.target.value)}
                  className="flex-1 border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
                />
                <button onClick={() => removeArrayItem(sec.key as any, idx)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Complex Arrays (Objects) */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Color Features</h3>
          <button onClick={() => addArrayItem("colorFeatures", { num: "00", name: "New", desc: "Desc" })} className="text-collision text-xs font-mono uppercase flex items-center gap-1">
            <Plus size={14} /> Add Feature
          </button>
        </div>
        <div className="grid gap-6">
          {content.colorFeatures.map((item, idx) => (
            <div key={idx} className="border border-ink/10 p-4 relative space-y-4">
              <button onClick={() => removeArrayItem("colorFeatures", idx)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <div className="grid grid-cols-2 gap-4 mr-8">
                <input
                  placeholder="Number (e.g. 01)"
                  value={item.num}
                  onChange={(e) => updateObjectInArray("colorFeatures", idx, "num", e.target.value)}
                  className="border border-ink/20 p-2 font-sans text-sm focus:outline-none"
                />
                <input
                  placeholder="Name"
                  value={item.name}
                  onChange={(e) => updateObjectInArray("colorFeatures", idx, "name", e.target.value)}
                  className="border border-ink/20 p-2 font-sans text-sm focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Description"
                value={item.desc}
                onChange={(e) => updateObjectInArray("colorFeatures", idx, "desc", e.target.value)}
                className="w-full border border-ink/20 p-2 font-sans text-sm focus:outline-none h-20"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Supporting Services</h3>
          <button onClick={() => addArrayItem("supportingServices", { name: "New", note: "Note" })} className="text-collision text-xs font-mono uppercase flex items-center gap-1">
            <Plus size={14} /> Add Service
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {content.supportingServices.map((item, idx) => (
            <div key={idx} className="border border-ink/10 p-4 relative space-y-3">
              <button onClick={() => removeArrayItem("supportingServices", idx)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <input
                placeholder="Name"
                value={item.name}
                onChange={(e) => updateObjectInArray("supportingServices", idx, "name", e.target.value)}
                className="w-full border border-ink/20 p-2 font-sans text-sm focus:outline-none mr-8"
              />
              <input
                placeholder="Note"
                value={item.note}
                onChange={(e) => updateObjectInArray("supportingServices", idx, "note", e.target.value)}
                className="w-full border border-ink/20 p-2 font-sans text-sm focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Finishing Techniques</h3>
          <button onClick={() => addArrayItem("finishingTechniques", { name: "New", desc: "Desc" })} className="text-collision text-xs font-mono uppercase flex items-center gap-1">
            <Plus size={14} /> Add Technique
          </button>
        </div>
        <div className="grid gap-4">
          {content.finishingTechniques.map((item, idx) => (
            <div key={idx} className="border border-ink/10 p-4 relative space-y-3 flex flex-col md:flex-row gap-4 items-start">
              <div className="w-full md:w-1/3">
                <input
                  placeholder="Name"
                  value={item.name}
                  onChange={(e) => updateObjectInArray("finishingTechniques", idx, "name", e.target.value)}
                  className="w-full border border-ink/20 p-2 font-sans text-sm focus:outline-none"
                />
              </div>
              <div className="w-full md:w-2/3 pr-8">
                <textarea
                  placeholder="Description"
                  value={item.desc}
                  onChange={(e) => updateObjectInArray("finishingTechniques", idx, "desc", e.target.value)}
                  className="w-full border border-ink/20 p-2 font-sans text-sm h-20 focus:outline-none"
                />
              </div>
              <button onClick={() => removeArrayItem("finishingTechniques", idx)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Capabilities</h3>
          <button onClick={() => addArrayItem("capabilities", { title: "New", desc: "Desc", img: "" })} className="text-collision text-xs font-mono uppercase flex items-center gap-1">
            <Plus size={14} /> Add Capability
          </button>
        </div>
        <div className="grid gap-6">
          {content.capabilities.map((item, idx) => (
            <div key={idx} className="border border-ink/10 p-4 relative space-y-4">
              <button onClick={() => removeArrayItem("capabilities", idx)} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <div className="mr-8">
                <input
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) => updateObjectInArray("capabilities", idx, "title", e.target.value)}
                  className="w-full border border-ink/20 p-2 font-sans text-sm focus:outline-none mb-3"
                />
                <textarea
                  placeholder="Description"
                  value={item.desc}
                  onChange={(e) => updateObjectInArray("capabilities", idx, "desc", e.target.value)}
                  className="w-full border border-ink/20 p-2 font-sans text-sm h-20 focus:outline-none mb-3"
                />
                <input
                  placeholder="Image URL"
                  value={item.img}
                  onChange={(e) => updateObjectInArray("capabilities", idx, "img", e.target.value)}
                  className="w-full border border-ink/20 p-2 font-sans text-sm focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
