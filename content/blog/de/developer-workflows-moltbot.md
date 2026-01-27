---
title: "Developer Workflows mit Moltbot: AI-Assistenz über WhatsApp, Telegram & Co."
description: "Moltbot verbindet deine Messaging-Apps mit AI Coding Agents. Setup, Konfiguration und praktische Workflows für den Entwickleralltag."
date: 2026-01-27
updated: 2026-01-27
lang: de
slug: developer-workflows-moltbot
published: true
---

*Update 27.01.2026: Das Projekt wurde wegen Trademark-Problemen [von Clawdbot zu Moltbot umbenannt](https://x.com/steipete/status/2016068265391354181){target="_blank"}. Artikel entsprechend aktualisiert.*

[Moltbot](https://github.com/moltbot/moltbot){target="_blank"} ist eine Open-Source-Bridge zwischen Messaging-Apps und AI Coding Agents. Du schickst eine Nachricht über WhatsApp, Telegram, Discord oder iMessage - und bekommst eine Antwort von einem AI-Agenten, der auf deine lokalen Projekte zugreifen kann.

Mit über 42.000 GitHub-Stars ist das Projekt ziemlich etabliert. Die Idee dahinter: Coding-Fragen klären, ohne den Kontext zu verlieren oder zwischen Apps zu wechseln.

## Was Moltbot ist (und was nicht)

Moltbot ist kein weiterer AI-Chatbot. Es ist eine **Bridge** - ein Gateway, das zwischen deinen Messaging-Apps und AI-Agenten vermittelt. Der Agent selbst ist Pi, ein Coding-Assistant, der über RPC angebunden ist und Zugriff auf deine lokalen Projekte haben kann.

Die Architektur ist simpel: Ein Gateway-Prozess läuft auf deinem Rechner (oder Server) und hält die Verbindungen zu den verschiedenen Messaging-Plattformen offen. Wenn eine Nachricht reinkommt, wird sie an den passenden Agenten geroutet, die Antwort zurückgeschickt, und du siehst sie in deiner gewohnten Chat-App.

::flow-diagram
---
layout: "hub"
sources:
  - icon: "simple-icons:whatsapp"
    label: "WhatsApp"
  - icon: "simple-icons:telegram"
    label: "Telegram"
  - icon: "simple-icons:discord"
    label: "Discord"
  - icon: "simple-icons:apple"
    label: "iMessage"
hub:
  label: "Gateway"
  sub: "localhost:18789"
target:
  label: "AI Agent"
  sub: "RPC"
---
::

Das Geniale daran: Du musst keine neue App lernen. Du nutzt einfach WhatsApp oder Telegram wie immer - nur dass am anderen Ende ein AI-Agent sitzt, der Code verstehen kann.

## Setup

Seit das Projekt auf X viral ging, kursiert die Empfehlung, man brauche einen Mac Mini oder VPS dafür. [Grok hat das verbreitet](https://x.com/grok/status/2015215402737930598){target="_blank"} - und es ist Unsinn. Moltbot läuft auf jedem Rechner mit Node.js 22. Dein Laptop reicht völlig.

Die Installation:

```bash
npm install -g moltbot@latest
moltbot onboard --install-daemon
```

Der Onboarding-Wizard führt dich durch die Konfiguration und generiert Gateway-Tokens. Danach verbindest du deine Messaging-Kanäle:

```bash
moltbot channels login
```

Für WhatsApp erscheint ein QR-Code, den du mit der App scannst - genau wie bei WhatsApp Web. Telegram und Discord laufen über Bot-Tokens.

Dann startest du das Gateway:

```bash
moltbot gateway
```

Ab jetzt erreichst du deinen AI-Assistenten über deine normalen Chat-Apps. Die Konfiguration liegt in `~/.moltbot/moltbot.json` und lässt sich granular anpassen - welche Kontakte zugelassen sind, wie Gruppen behandelt werden, ob Mentions erforderlich sind.

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+49..."],
      "groups": {
        "*": { "requireMention": true }
      }
    }
  }
}
```

## Warum nicht einfach die Claude-App nutzen?

Moltbot ersetzt Claude nicht - es nutzt Claude (oder andere AI-Modelle) als Backend. Der Unterschied liegt im Interface und der Integration:

**Lokaler Zugriff**: Das Gateway läuft auf deinem Rechner. Der Agent kann auf deine Projekte zugreifen, Dateien lesen, Code analysieren. Bei der Web-App müsstest du Code rauskopieren und Kontext manuell übertragen.

**Gewohntes Interface**: Du bleibst in WhatsApp oder Telegram. Keine neue App, keine Extra-Logins. Die Hemmschwelle für eine schnelle Frage sinkt, wenn du nicht erst was öffnen musst.

**Deine Infrastruktur**: Du kontrollierst das Gateway, die Verbindungen, und welche Projekte der Agent sehen darf.

## Praktische Workflows

Moltbot glänzt bei Situationen, in denen du mobil bist oder nebenbei arbeitest.

**Code Reviews unterwegs**: Im Zug, im Wartezimmer, auf der Couch - eine kurze Nachricht wie "Schau dir den letzten Commit in project-x an, irgendwas stimmt mit der Validierung nicht" und du bekommst eine Analyse zurück.

**Schnelle Fragen klären**: "Wie war nochmal die Syntax für TypeScript Generics mit Constraints?" Statt StackOverflow zu öffnen und durch veraltete Antworten zu scrollen, bekommst du eine präzise Antwort im Chat.

**Debugging-Kontext sammeln**: Wenn ein Bug auftritt, kannst du Screenshots, Fehlermeldungen oder Log-Ausschnitte direkt an den Assistenten schicken. Moltbot unterstützt Bilder, Audio und Dokumente - der Agent sieht, was du siehst.

**Gruppenchats mit Mention-Activation**: In Projekt-Gruppen kann der Bot auf @mentions reagieren. Das Team kann Fragen stellen, ohne dass jemand extra recherchieren muss. Besonders praktisch für wiederkehrende Fragen ("Wie deployen wir nochmal auf Staging?").

## Webhooks und Automation

Moltbot ist nicht nur für manuelle Interaktion gedacht. Mit Webhooks und Cron-Jobs lassen sich automatisierte Workflows bauen.

Ein Beispiel: Jeden Morgen um 9 Uhr schickt mir der Bot eine Zusammenfassung der offenen PRs und CI-Failures. Ich sehe das in meiner normalen WhatsApp-Nachrichtenliste, zwischen anderen Chats.

Gmail-Integration über Pub/Sub ist auch möglich - der Bot kann auf bestimmte E-Mails reagieren und dich proaktiv benachrichtigen.

Die Slash-Commands (`/activation`, `/session`, etc.) geben dir Kontrolle über das Verhalten, ohne die Config-Datei anfassen zu müssen.

## Plattform-Support

Moltbot läuft überall dort, wo Node.js läuft:

- **macOS**: Native Menu-Bar-App als Companion
- **Linux**: Systemd-Daemon für Headless-Server
- **Windows**: WSL2-basiert
- **iOS/Android**: Mobile Nodes mit Canvas-Support für reichere Interaktionen

Das Gateway selbst ist loopback-first - es bindet standardmäßig auf `127.0.0.1:18789`. Für Remote-Zugriff empfehlen die Docs SSH-Tunneling oder Tailscale. Mein Setup läuft auf einem Home-Server, erreichbar über Tailscale.

## Grenzen und Erwartungen

Moltbot ist kein Ersatz für eine vollwertige IDE mit AI-Integration. Für tiefgreifendes Refactoring oder komplexe Multi-File-Änderungen ist ein Desktop-Setup mit Cursor oder ähnlichen AI-IDEs besser geeignet.

Die Stärke liegt in der **Accessibility**: Du hast immer einen AI-Assistenten dabei, der deinen Code kennt, über die App, die du sowieso offen hast. Das senkt die Hemmschwelle für schnelle Fragen und hält den Kontext zwischen Sessions.

Die Community hinter dem Projekt ist aktiv - Peter Steinberger und andere Contributors entwickeln kontinuierlich weiter. Mit 42k+ Stars auf GitHub ist das Projekt etabliert genug, dass du dich auf Maintenance verlassen kannst.

## Fazit

Moltbot löst ein Problem, das ich vorher nicht klar benennen konnte: Die Lücke zwischen "ich hab eine Coding-Frage" und "ich setze mich an den Rechner". Diese Lücke ist jetzt geschlossen.

Für das Setup brauchst du vielleicht eine halbe Stunde, danach hast du einen AI-Assistenten in deiner Hosentasche, der mehr kann als nur chatten. Er kennt deine Projekte, reagiert auf Webhooks, und ist über die App erreichbar, die du sowieso dutzende Male am Tag öffnest.

Alle Infos zum Setup findest du in der [offiziellen Dokumentation](https://docs.molt.bot/){target="_blank"} und auf [GitHub](https://github.com/moltbot/moltbot){target="_blank"}.
