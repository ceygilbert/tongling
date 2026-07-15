const fs = require('fs');

let story = fs.readFileSync('src/components/BrandStory.tsx', 'utf8');

story = story.replace(/const \[content, setContent\] = React\.useState\(getStoredStoryContent\(\)\);/, 
`const [content, setContent] = React.useState<import("../types").StoryContent | null>(null);

  React.useEffect(() => {
    fetch('/api/public/content/story')
      .then(res => res.json())
      .then(data => setContent(data))
      .catch(err => {
        console.error(err);
        setContent(getStoredStoryContent());
      });
  }, []);`);
  
story = story.replace(/return \(/, `if (!content) return <div className="pt-32 text-center text-ink/70">Loading...</div>;\n\n  return (`);

fs.writeFileSync('src/components/BrandStory.tsx', story);
