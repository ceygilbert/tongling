const fs = require('fs');

function processEditor(filename, pageId) {
  let code = fs.readFileSync(filename, 'utf8');
  
  // Replace initial state
  code = code.replace(/const \[content, setContent\] = useState\(getStored.*?Content\(\)\);/,
    `const [content, setContent] = useState<any>(null);
  
  React.useEffect(() => {
    fetch('/api/public/content/${pageId}')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => console.error(err));
  }, []);`);
  
  // Replace save
  code = code.replace(/const handleSave = \(\) => \{[\s\S]*?setTimeout\(\(\) => setIsSaving\(false\), 500\);\n  \};/,
    `const handleSave = async () => {
    setIsSaving(true);
    try {
      const token = localStorage.getItem("admin_token");
      await fetch('/api/admin/content/${pageId}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${token}\`
        },
        body: JSON.stringify(content)
      });
      // Fallback update local storage just in case
      localStorage.setItem("sincerity_${pageId}_content", JSON.stringify(content));
      window.dispatchEvent(new Event("storage"));
    } catch (e) {
      console.error(e);
    }
    setIsSaving(false);
  };`);
  
  // Add loading return
  code = code.replace(/return \(/, `if (!content) return <div>Loading...</div>;\n\n  return (`);
  
  fs.writeFileSync(filename, code);
}

processEditor('src/components/HomeEditor.tsx', 'home');
processEditor('src/components/SolutionsEditor.tsx', 'solutions');
processEditor('src/components/StoryEditor.tsx', 'story');
