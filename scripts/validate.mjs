import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/codex-email/SKILL.md",
  "skills/codex-email/agents/openai.yaml",
  "skills/codex-email/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/codex-email/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: codex-email\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add codex-email")) throw new Error("Missing install shortcut");
console.log("codexemailskill.com ok");
