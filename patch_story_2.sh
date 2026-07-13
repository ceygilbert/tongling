sed -i 's/<source src="https:\/\/joqedqcltiyvzgenbmsu.supabase.co\/storage\/v1\/object\/public\/TongLing\/linen_brandstory.mp4" type="video\/mp4" \/>/<source src={content.hero.videoUrl} type="video\/mp4" \/>/g' src/components/BrandStory.tsx
sed -i 's/Maison De Textile — Est. 2005/{content.hero.subtitle}/g' src/components/BrandStory.tsx
sed -i 's/The Living <br \/>Fabric/{content.hero.titleLine1} <br \/>{content.hero.titleLine2}/g' src/components/BrandStory.tsx

sed -i 's/Chapter I/{content.chapter1.label}/g' src/components/BrandStory.tsx
sed -i 's/A Legacy of <br \/>Sincerity/{content.chapter1.titleLine1} <br \/>{content.chapter1.titleLine2}/g' src/components/BrandStory.tsx
sed -i 's/Founded in 2005, Tongling Sincerity Linen Group was built upon a singular philosophy: that the most extraordinary textiles are born from an honest dialogue between human hands and nature'\''s raw fiber./{content.chapter1.desc1}/g' src/components/BrandStory.tsx
sed -i 's/What began as a specialized dyeing house in Tongling has evolved into a global benchmark for luxury linen production, serving as a silent architect behind the world'\''s most prestigious fashion houses./{content.chapter1.desc2}/g' src/components/BrandStory.tsx
sed -i 's/https:\/\/images.unsplash.com\/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1200&q=80/{content.chapter1.imageUrl}/g' src/components/BrandStory.tsx
sed -i 's/Crafted with <br \/>Uncompromising <br \/>Standard/{content.chapter1.imageBadge.split("\\n").map((line, i) => <React.Fragment key={i}>{line}<br\/><\/React.Fragment>)}/g' src/components/BrandStory.tsx

sed -i 's/https:\/\/images.unsplash.com\/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80/{content.chapter2.imageUrl}/g' src/components/BrandStory.tsx
sed -i 's/Chapter II/{content.chapter2.label}/g' src/components/BrandStory.tsx
sed -i 's/The Sensitivity <br \/>of Touch/{content.chapter2.titleLine1} <br \/>{content.chapter2.titleLine2}/g' src/components/BrandStory.tsx
sed -i 's/Linen is a living organism. It breathes, reacts to humidity, and holds the memory of the hands that guide it. Our master weavers spend decades mastering the tension required to transform flax into a fabric that feels cooling to the skin and weightless to the spirit./{content.chapter2.desc}/g' src/components/BrandStory.tsx
sed -i 's/Vertical Control/{content.chapter2.point1Title}/g' src/components/BrandStory.tsx
sed -i 's/Total yarn traceability. We oversee every stage from spinning to the final finish./{content.chapter2.point1Desc}/g' src/components/BrandStory.tsx
sed -i 's/Artisanal Scale/{content.chapter2.point2Title}/g' src/components/BrandStory.tsx
sed -i 's/Production volume balanced with meticulous individual inspection protocols./{content.chapter2.point2Desc}/g' src/components/BrandStory.tsx

sed -i 's/https:\/\/images.unsplash.com\/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=2000&q=80/{content.chapter3.imageUrl}/g' src/components/BrandStory.tsx
sed -i 's/Chapter III/{content.chapter3.label}/g' src/components/BrandStory.tsx
sed -i 's/Quiet <br \/>Innovation/{content.chapter3.titleLine1} <br \/>{content.chapter3.titleLine2}/g' src/components/BrandStory.tsx
sed -i 's/R&D Laboratory/{content.chapter3.header}/g' src/components/BrandStory.tsx
sed -i 's/Beyond the loom, our laboratory focuses on the molecular future of linen. Through proprietary technical developments, we have enhanced the natural properties of flax—increasing wrinkle resistance while maintaining breathability./{content.chapter3.desc}/g' src/components/BrandStory.tsx
sed -i 's/Efficiency/{content.chapter3.stat1Label}/g' src/components/BrandStory.tsx
sed -i 's/98.4%/{content.chapter3.stat1Value}/g' src/components/BrandStory.tsx
sed -i 's/Sustainability/{content.chapter3.stat2Label}/g' src/components/BrandStory.tsx
sed -i 's/Zero Waste/{content.chapter3.stat2Value}/g' src/components/BrandStory.tsx
sed -i 's/Partners/{content.chapter3.stat3Label}/g' src/components/BrandStory.tsx
sed -i 's/Global Reach/{content.chapter3.stat3Value}/g' src/components/BrandStory.tsx

sed -i 's/https:\/\/images.unsplash.com\/photo-1558051815-0f18e64e6280?auto=format&fit=crop&w=400&q=80/{content.finalQuote.imageUrl}/g' src/components/BrandStory.tsx
sed -i 's/"We do not merely sell fabric; we provide the catalyst for creation. Every bolt that leaves our facility carries the legacy of Tongling and the future of sustainable luxury."/{content.finalQuote.quote}/g' src/components/BrandStory.tsx
sed -i 's/Authenticity Guaranteed/{content.finalQuote.author}/g' src/components/BrandStory.tsx

sed -i 's/);/);\n};\n/g' src/components/BrandStory.tsx
