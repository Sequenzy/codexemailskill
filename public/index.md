# Codex Email Skill

codexemailskill.com

Make email edits testable inside real codebases.

A code-aware email skill for agents implementing template changes, content updates, and QA notes with diffs instead of vague recommendations.

## Install

```bash
npx skills add codexemailskill
```

## Operating Data

- **4**: repo surfaces
- **11**: template checks
- **100%**: diff-first output

## Repo-aware workflow

1. Find template
2. Read variables
3. Patch copy
4. Run checks
5. Summarize diff

## Scenarios

### Repo-aware email edits

Locate templates, copy files, preview fixtures, and content sources before writing.

### Template implementation

Convert an approved brief into scoped code or content changes.

### Testable content changes

Return exact files changed, checks run, and remaining risk.

## Operating Proof

- **Best for**: Engineering teams with email templates in source control
- **Primary artifact**: Scoped diff plus QA checklist
- **Stop condition**: Unknown variable schema or missing preview path

## Agent Resources

- Markdown index: /index.md
- Skill discovery JSON: /.well-known/skills/index.json
- Raw SKILL.md: /skills/codexemailskill/SKILL.md
- Articles: /articles/
