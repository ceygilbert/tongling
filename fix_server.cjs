const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf8');

const routes = `
  // Page content endpoints
  app.get("/api/public/content/:page", async (req, res) => {
    try {
      const data = await dbService.getPageContent(req.params.page);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: "Content not found" });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/api/admin/content/:page", authMiddleware, async (req, res) => {
    try {
      const updated = await dbService.updatePageContent(req.params.page, req.body);
      res.json(updated);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });
`;

content = content.replace(/\/\/ Public read endpoints for dynamic content delivery/, routes + "\n  // Public read endpoints for dynamic content delivery");

fs.writeFileSync('server.ts', content);
