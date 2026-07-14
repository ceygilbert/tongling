sed -i '1223,1242c\
            {status.isHtmlResponse && (\
              <div className="mt-1.5 font-sans text-[9px] leading-normal text-amber-700 font-medium space-y-1.5 border-t border-amber-200/40 pt-1.5">\
                <p>💡 <span className="font-bold">Backend Not Detected - Local Storage Mode Active:</span></p>\
                <p>Your application is hosted statically (e.g. Hostinger public_html) and the Node.js backend is not running.</p>\
                <p>Don'\''t worry — the app will continue to function normally using local storage in your browser. All data operations are safely handled locally.</p>\
              </div>\
            )}' src/components/AdminPanel.tsx
