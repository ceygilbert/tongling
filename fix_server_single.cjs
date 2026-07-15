const fs = require('fs');
let server = fs.readFileSync('server.ts', 'utf8');

const singleEndpoint = `
  app.get("/api/public/products/:id", async (req, res) => {
    try {
      const data = await dbService.getProduct(req.params.id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });
`;

server = server.replace(/app\.get\("\/api\/public\/categories"/, singleEndpoint + '\n  app.get("/api/public/categories"');
fs.writeFileSync('server.ts', server);
