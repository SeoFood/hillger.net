---
title: "TypeWhisper: Local Speech-to-Text App, Open Source"
description: "TypeWhisper converts speech to text directly on your device - no cloud, no subscription. Available for macOS, Windows, iOS and Raycast."
date: 2026-02-23
lang: en
slug: typewhisper-open-source-speech-to-text
published: true
---

Speech recognition in 2026 isn't a solved problem. Sure, Siri and Google work. But they send your audio to the cloud, offer little control over the output, and barely integrate into custom workflows.

[TypeWhisper](https://www.typewhisper.com){target="_blank"} is my approach to doing this differently: a free, open-source speech-to-text app that works entirely on-device. No cloud service, no subscription, no data leaving your machine.

## Why another speech-to-text app?

Most dictation solutions fall into two categories: cloud-based services with good recognition but privacy concerns, or local tools with mediocre quality. TypeWhisper combines the best of both worlds - local processing with modern ML models.

The key difference: TypeWhisper isn't just a transcription tool. It's a **processing pipeline**. Audio gets transcribed, then routed through LLM prompts that format, correct, and adapt the text to your context.

## On-Device ML

TypeWhisper uses multiple speech-to-text engines depending on the platform:

- **WhisperKit** - Apple's optimized implementation of OpenAI's Whisper model, runs natively on Apple Silicon
- **Parakeet TDT** - NVIDIA's Token-and-Duration Transducer, particularly fast and accurate
- **Apple Speech** - The system framework as a fallback, works without additional models

All models run entirely on-device. WhisperKit and Parakeet TDT leverage the Neural Engine or GPU - transcription happens in real-time, often faster than you speak.

## The processing pipeline

Raw transcription is rarely perfect. "Hello comma how are you question mark" isn't what you want to type. TypeWhisper solves this with a multi-stage pipeline:

**1. Transcription** - Audio is converted to raw text.

**2. LLM processing** - The raw text is routed through configurable prompts. By default, these handle punctuation, capitalization, and formatting. You can define custom prompts - for example, for automatic translation or summarization.

**3. Per-app profiles** - Different apps need different formatting. In Slack you want a casual tone, in an email something more formal. TypeWhisper detects the active app and applies the matching profile.

**4. Dictionary** - A personal dictionary corrects technical terms, names, and abbreviations that the ML model doesn't know. Instead of "Kube Nettis" you get "Kubernetes".

## System integration

TypeWhisper is designed to fit seamlessly into existing workflows:

**Global hotkey** - A keyboard shortcut starts recording from any app. Press again to stop recording and insert the processed text. The whole process typically takes under a second after you stop speaking.

**HTTP API** - For automation, there's a local HTTP interface. This lets you integrate TypeWhisper into Shortcuts, Automator, or custom scripts.

**CLI** - Command-line tool for batch processing and scripting.

**Plugins** - TypeWhisper is available as a native Raycast Extension. More integrations are planned.

## Platforms

TypeWhisper runs on:

- **macOS** - Native Swift app with menu bar integration
- **Windows** - Native app with system tray
- **iOS** - Keyboard extension and standalone app

There's also a Raycast Extension as an add-on for quick access through the launcher.

Configuration optionally syncs between devices - prompts, profiles, and dictionary are available everywhere.

## Open source

TypeWhisper is available under the GPLv3 license on [GitHub](https://github.com/TypeWhisper){target="_blank"}. The entire codebase is open for review and contribution.

Why open source? Because an app that processes your voice should be transparent. You should be able to verify that no data is phoning home. And you should be able to adapt the app to your needs.

More info and downloads at [typewhisper.com](https://www.typewhisper.com){target="_blank"}.
