const fs = require('fs');

function processFile(filename, fallbackFnName) {
  let code = fs.readFileSync(filename, 'utf8');
  
  code = code.replace(/\.then\(data => setContent\(data\)\)/,
    `.then(data => {
        if (data.error) {
          setContent(${fallbackFnName ? fallbackFnName + '()' : 'null'});
        } else {
          setContent(data);
        }
      })`);
      
  fs.writeFileSync(filename, code);
}

processFile('src/components/Home.tsx', 'getStoredHomeContent');
processFile('src/components/BrandStory.tsx', 'getStoredStoryContent');
processFile('src/components/Solutions.tsx', 'getStoredSolutionsContent');
processFile('src/components/HomeEditor.tsx', ''); // Editor doesn't fallback on error, let it stay null or we can give it default content
processFile('src/components/StoryEditor.tsx', '');
processFile('src/components/SolutionsEditor.tsx', '');

