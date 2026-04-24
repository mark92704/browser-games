# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A collection of standalone browser projects — no build system, no package manager, no dependencies. Each file is a self-contained HTML page that opens directly in a browser.

## Running the projects

Open any `.html` file directly in a browser. No server required.

## Architecture

Every file follows the same single-file pattern: `<style>` block → HTML markup → `<script>` block. All logic, styles, and markup live together in one file. There is no shared CSS, no shared JS, and no module system.

**Design language** (apply to all new pages):
- Background: `#1a1a2e`, card/surface: `#16213e`, deep accent: `#0f3460`
- Primary action color: `#e94560` (buttons, headings, highlights)
- Secondary text/accent: `#a8dadc`
- Font: `'Segoe UI', sans-serif` for UI; `monospace` for game canvas text

**Game loop pattern** (`galaga.html`): `state` string (`'start' | 'play' | 'over'`) gates both `update()` and `draw()` inside a single `requestAnimationFrame` loop. All game objects are plain arrays of flat objects; collision uses axis-aligned bounding box center-distance checks.

**Form validation pattern** (`register.html`): `novalidate` on the `<form>`, manual validation on submit via a `validate(id, testFn, msg)` helper that toggles an `.error` class and populates a sibling `.error-msg` span. Input listeners clear errors on change.

## Git conventions

- One logical change per commit
- Commit message: imperative subject line, blank line, 2–3 line body describing *what* and *why*
- Remote: `https://github.com/mark92704/browser-games`
