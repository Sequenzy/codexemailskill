import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "public/about/index.html",
  "public/privacy-policy/index.html",
  "public/terms-of-use/index.html",
  "skills/codexemailskill/SKILL.md",
  "skills/codexemailskill/agents/openai.yaml",
  "skills/codexemailskill/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/codexemailskill/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: codexemailskill\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add codexemailskill")) throw new Error("Missing install shortcut");
console.log("codexemailskill.com ok");
