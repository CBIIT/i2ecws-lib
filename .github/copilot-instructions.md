## sm_i2e_wiki (optional)

This project is part of the I2E portfolio documented in the **sm_i2e_wiki**.

> ⚠️ The sm_i2e_wiki is **environment-specific** and may not exist on your machine.
> If none of the paths below resolve on your machine, skip this section — all instructions
> above are self-contained and work without the wiki.

**Known wiki locations** (the agent uses the first path that exists on this machine):
- `C:\Users\kanozad\dev\workspaces\sm_i2e_wiki`

> To add your local path: run `wiki-connect` in this project after setting `wiki_root` in
> `~/.copilot/wiki-config.yaml`.

**If the wiki is present, follow this protocol at the start of every session:**

| Step | Action |
|------|--------|
| 1 | Read `i2ecws-lib\docs\agent-config.md` — authoritative architecture, commands, conventions, pitfalls |
| 2 | Skim `i2ecws-lib\docs\lessons.md` — past mistakes to avoid repeating |
| 3 | Skim `i2ecws-lib\docs\threads.md` — open questions and deferred work from prior sessions |
| 4 | For changes touching shared libraries (`i2ecws-domain`, `i2ecommon_security`, `i2ecommon_core`), `i2ecommonws`, or `@cbiit/i2ecui-lib`, read `service-workspace\docs\dependency-map.md` to assess blast radius |

**Publishing back to the wiki at the end of a session:**

| Skill | When to invoke |
|-------|----------------|
| `session-summary` | End of any significant work session |
| `capture-lessons` | After a fix, correction, or non-obvious discovery |
| `capture-threads` | To record deferred questions or follow-up items |
