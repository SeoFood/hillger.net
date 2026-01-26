---
title: "Welcome to My Blog"
description: "First post on hillger.net - what to expect"
date: 2026-01-26
lang: en
slug: welcome
published: true
---

This is my personal tech blog where I'll share thoughts on **web development**, **home automation**, and interesting projects I'm working on.

## What to Expect

After 17+ years in software development, I've accumulated quite a few stories and lessons learned. Here's what I plan to write about:

- **Technical deep-dives** into Laravel, Vue.js, and TypeScript
- **Home automation** setups with Home Assistant and ESPHome
- **Architecture decisions** and why certain patterns work (or don't)
- **E-commerce insights** from building custom shop systems

## A Quick Code Example

Here's a simple TypeScript snippet I use often:

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

Stay tuned for more!
