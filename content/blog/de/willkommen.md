---
title: "Willkommen im Blog"
description: "Erster Post auf hillger.net - was euch erwartet"
date: 2026-01-26
lang: de
slug: willkommen
published: true
---

Das ist mein persönlicher Tech-Blog, in dem ich über **Webentwicklung**, **Home Automation** und interessante Projekte schreibe.

## Was euch erwartet

Nach 17+ Jahren in der Softwareentwicklung haben sich einige Geschichten und Erkenntnisse angesammelt. Hier ein Überblick:

- **Technische Deep-Dives** in Laravel, Vue.js und TypeScript
- **Home Automation** mit Home Assistant und ESPHome
- **Architektur-Entscheidungen** und warum bestimmte Patterns funktionieren (oder nicht)
- **E-Commerce Insights** aus dem Aufbau eigener Shopsysteme

## Ein kurzes Code-Beispiel

Ein TypeScript-Snippet, das ich häufig verwende:

```typescript
const debounce = <T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
```

Mehr kommt bald!
