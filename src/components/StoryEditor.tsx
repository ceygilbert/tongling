import React, { useState } from "react";
import { getStoredStoryContent } from "../data";
import { Save } from "lucide-react";
import { StoryContent } from "../types";

export const StoryEditor = () => {
  const [content, setContent] = useState<StoryContent>(getStoredStoryContent());
  const [isSaving, setIsSaving] = useState(false);

  React.useEffect(() => {
    fetch('/api/public/content/story')
      .then(res => res.json())
      .then(data => {
        if (data && !data.error) {
          setContent(data);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const token = localStorage.getItem("admin_token");
      await fetch('/api/admin/content/story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(content)
      });
      // Fallback update local storage just in case
      localStorage.setItem("sincerity_story_content", JSON.stringify(content));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {
      console.error(e);
    }
    setIsSaving(false);
  };

  const updateField = (section: keyof StoryContent, field: string, value: string) => {
    setContent({
      ...content,
      [section]: {
        ...(content[section] as any),
        [field]: value
      }
    });
  };

  if (!content) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 md:p-8 shadow-xl border border-ink/5 space-y-12">
      <div className="flex justify-between items-center pb-6 border-b border-ink/10">
        <h2 className="text-2xl font-formal text-ink tracking-widest uppercase">Story Page Content</h2>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-ink text-bg-base px-6 py-2.5 font-mono text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-ink/80 transition-all"
        >
          <Save size={14} />
          {isSaving ? "Saved!" : "Save Changes"}
        </button>
      </div>

      {/* Hero Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Hero Section</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Subtitle</label>
            <input
              type="text"
              value={content.hero.subtitle}
              onChange={(e) => updateField("hero", "subtitle", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 1</label>
              <input
                type="text"
                value={content.hero.titleLine1}
                onChange={(e) => updateField("hero", "titleLine1", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 2</label>
              <input
                type="text"
                value={content.hero.titleLine2}
                onChange={(e) => updateField("hero", "titleLine2", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Video URL</label>
            <input
              type="text"
              value={content.hero.videoUrl}
              onChange={(e) => updateField("hero", "videoUrl", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      {/* Chapter 1 Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Chapter 1 (Heritage)</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Label</label>
            <input
              type="text"
              value={content.chapter1.label}
              onChange={(e) => updateField("chapter1", "label", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 1</label>
              <input
                type="text"
                value={content.chapter1.titleLine1}
                onChange={(e) => updateField("chapter1", "titleLine1", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 2</label>
              <input
                type="text"
                value={content.chapter1.titleLine2}
                onChange={(e) => updateField("chapter1", "titleLine2", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Description 1</label>
            <textarea
              value={content.chapter1.desc1}
              onChange={(e) => updateField("chapter1", "desc1", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-20 focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Description 2</label>
            <textarea
              value={content.chapter1.desc2}
              onChange={(e) => updateField("chapter1", "desc2", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-20 focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Image URL</label>
            <input
              type="text"
              value={content.chapter1.imageUrl}
              onChange={(e) => updateField("chapter1", "imageUrl", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Image Badge Text (Use \n for line breaks)</label>
            <input
              type="text"
              value={content.chapter1.imageBadge.replace(/\n/g, '\\n')}
              onChange={(e) => updateField("chapter1", "imageBadge", e.target.value.replace(/\\n/g, '\n'))}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      {/* Chapter 2 Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Chapter 2 (Philosophy of Touch)</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Label</label>
            <input
              type="text"
              value={content.chapter2.label}
              onChange={(e) => updateField("chapter2", "label", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 1</label>
              <input
                type="text"
                value={content.chapter2.titleLine1}
                onChange={(e) => updateField("chapter2", "titleLine1", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 2</label>
              <input
                type="text"
                value={content.chapter2.titleLine2}
                onChange={(e) => updateField("chapter2", "titleLine2", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Description</label>
            <textarea
              value={content.chapter2.desc}
              onChange={(e) => updateField("chapter2", "desc", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-24 focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Image URL</label>
            <input
              type="text"
              value={content.chapter2.imageUrl}
              onChange={(e) => updateField("chapter2", "imageUrl", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Point 1 Title</label>
              <input
                type="text"
                value={content.chapter2.point1Title}
                onChange={(e) => updateField("chapter2", "point1Title", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
              <textarea
                value={content.chapter2.point1Desc}
                onChange={(e) => updateField("chapter2", "point1Desc", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm mt-2 h-16 focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Point 2 Title</label>
              <input
                type="text"
                value={content.chapter2.point2Title}
                onChange={(e) => updateField("chapter2", "point2Title", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
              <textarea
                value={content.chapter2.point2Desc}
                onChange={(e) => updateField("chapter2", "point2Desc", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm mt-2 h-16 focus:outline-none focus:border-collision"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      {/* Chapter 3 Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Chapter 3 (Innovation)</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Label</label>
            <input
              type="text"
              value={content.chapter3.label}
              onChange={(e) => updateField("chapter3", "label", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 1</label>
              <input
                type="text"
                value={content.chapter3.titleLine1}
                onChange={(e) => updateField("chapter3", "titleLine1", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Title Line 2</label>
              <input
                type="text"
                value={content.chapter3.titleLine2}
                onChange={(e) => updateField("chapter3", "titleLine2", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Header</label>
            <input
              type="text"
              value={content.chapter3.header}
              onChange={(e) => updateField("chapter3", "header", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Description</label>
            <textarea
              value={content.chapter3.desc}
              onChange={(e) => updateField("chapter3", "desc", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-24 focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Image URL</label>
            <input
              type="text"
              value={content.chapter3.imageUrl}
              onChange={(e) => updateField("chapter3", "imageUrl", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Stat 1 Label</label>
              <input
                type="text"
                value={content.chapter3.stat1Label}
                onChange={(e) => updateField("chapter3", "stat1Label", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2 mt-2">Stat 1 Value</label>
              <input
                type="text"
                value={content.chapter3.stat1Value}
                onChange={(e) => updateField("chapter3", "stat1Value", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Stat 2 Label</label>
              <input
                type="text"
                value={content.chapter3.stat2Label}
                onChange={(e) => updateField("chapter3", "stat2Label", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2 mt-2">Stat 2 Value</label>
              <input
                type="text"
                value={content.chapter3.stat2Value}
                onChange={(e) => updateField("chapter3", "stat2Value", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Stat 3 Label</label>
              <input
                type="text"
                value={content.chapter3.stat3Label}
                onChange={(e) => updateField("chapter3", "stat3Label", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
              <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2 mt-2">Stat 3 Value</label>
              <input
                type="text"
                value={content.chapter3.stat3Value}
                onChange={(e) => updateField("chapter3", "stat3Value", e.target.value)}
                className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-ink/10" />

      {/* Final Quote Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-formal uppercase tracking-widest text-ink">Final Quote</h3>
        <div className="grid gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Quote</label>
            <textarea
              value={content.finalQuote.quote}
              onChange={(e) => updateField("finalQuote", "quote", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm h-20 focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Author / Label</label>
            <input
              type="text"
              value={content.finalQuote.author}
              onChange={(e) => updateField("finalQuote", "author", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-ink/60 mb-2">Image URL</label>
            <input
              type="text"
              value={content.finalQuote.imageUrl}
              onChange={(e) => updateField("finalQuote", "imageUrl", e.target.value)}
              className="w-full border border-ink/20 p-2.5 font-sans text-sm focus:outline-none focus:border-collision"
            />
          </div>
        </div>
      </div>

    </div>
  );
};
