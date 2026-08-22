/** Prerender girişi: her rota için gerçek HTML üretir. */
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { ssrMeta } from "./lib/ssrMeta";

export function render(yol: string) {
  ssrMeta.title = "";
  ssrMeta.description = "";
  const html = renderToString(
    <Router ssrPath={yol}>
      <App />
    </Router>,
  );
  return { html, title: ssrMeta.title, description: ssrMeta.description };
}
