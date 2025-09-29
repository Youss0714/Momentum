import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";
import { getSEOData, generateMetaTags } from "./seo-config";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      
      // Extraire le chemin pour la configuration SEO (enlever les paramètres de requête)
      const routePath = url.split('?')[0];
      
      // Obtenir les données SEO pour cette route
      const seoData = getSEOData(routePath);
      const seoMetaTags = generateMetaTags(seoData);
      
      // Remplacer les meta tags fallback par ceux spécifiques à la route
      // On cherche et remplace depuis le titre jusqu'aux meta Twitter Cards
      const fallbackSEORegex = /<!-- Fallback SEO \(sera remplacé dynamiquement par le composant SEO\) -->[\s\S]*?<meta name="twitter:description" content="[^"]*" \/>/;
      
      if (fallbackSEORegex.test(template)) {
        template = template.replace(fallbackSEORegex, seoMetaTags.trim());
      } else {
        // Si le pattern n'est pas trouvé, on insère après les meta de base
        const insertAfter = '<meta name="theme-color" content="#1e40af" />';
        template = template.replace(insertAfter, insertAfter + '\n    \n    ' + seoMetaTags.trim());
      }
      
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html avec injection SEO pour la production
  app.use("*", (req, res) => {
    const htmlPath = path.resolve(distPath, "index.html");
    
    try {
      // Lire le fichier HTML de production
      let template = fs.readFileSync(htmlPath, "utf-8");
      
      // Extraire le chemin pour la configuration SEO
      const routePath = req.originalUrl.split('?')[0];
      
      // Obtenir les données SEO pour cette route
      const seoData = getSEOData(routePath);
      const seoMetaTags = generateMetaTags(seoData);
      
      // Remplacer les meta tags fallback par ceux spécifiques à la route
      const fallbackSEORegex = /<!-- Fallback SEO \(sera remplacé dynamiquement par le composant SEO\) -->[\s\S]*?<meta name="twitter:description" content="[^"]*" \/>/;
      
      if (fallbackSEORegex.test(template)) {
        template = template.replace(fallbackSEORegex, seoMetaTags.trim());
      } else {
        // Si le pattern n'est pas trouvé, on insère après les meta de base
        const insertAfter = '<meta name="theme-color" content="#1e40af" />';
        template = template.replace(insertAfter, insertAfter + '\n    \n    ' + seoMetaTags.trim());
      }
      
      res.set({ "Content-Type": "text/html" }).send(template);
    } catch (e) {
      // En cas d'erreur, fallback vers le fichier original
      res.sendFile(htmlPath);
    }
  });
}
