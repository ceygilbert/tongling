sed -i '6,23c\
export const BrandStory: React.FC = () => {\
  const [content, setContent] = React.useState(getStoredStoryContent());\
  React.useEffect(() => {\
    const handleStorage = () => setContent(getStoredStoryContent());\
    window.addEventListener("storage", handleStorage);\
    return () => window.removeEventListener("storage", handleStorage);\
  }, []);\
  return (\
' src/components/BrandStory.tsx
