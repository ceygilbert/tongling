sed -i 's/isHtmlResponse: true,/isHtmlResponse: true,/g' src/components/AdminPanel.tsx
sed -i 's/Unexpected HTML content. The API request was intercepted and returned index.html instead of a backend JSON response./Static host detected. The API request returned index.html instead of a backend JSON response, which means the backend Node.js server is not running./g' src/components/AdminPanel.tsx
