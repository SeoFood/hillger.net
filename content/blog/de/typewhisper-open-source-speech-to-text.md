---
title: "TypeWhisper: Lokale Speech-to-Text-App als Open Source"
description: "TypeWhisper wandelt Sprache direkt auf dem Gerät in Text um - ohne Cloud, ohne Abo. Verfügbar für macOS, Windows, iOS und Raycast."
date: 2026-02-23
lang: de
slug: typewhisper-open-source-speech-to-text
published: true
---

Spracherkennung ist 2026 kein gelöstes Problem. Klar, Siri und Google funktionieren. Aber sie schicken deine Audiodaten in die Cloud, bieten wenig Kontrolle über die Ausgabe und lassen sich kaum in eigene Workflows integrieren.

[TypeWhisper](https://www.typewhisper.com){target="_blank"} ist mein Ansatz, das anders zu machen: Eine freie, quelloffene Speech-to-Text-App, die komplett lokal arbeitet. Kein Cloud-Service, kein Abo, keine Daten, die das Gerät verlassen.

## Warum noch eine Speech-to-Text-App?

Die meisten Diktierlösungen fallen in zwei Kategorien: Cloud-basierte Dienste mit guter Erkennung aber Datenschutzproblemen, oder lokale Tools mit mäßiger Qualität. TypeWhisper kombiniert das Beste aus beiden Welten - lokale Verarbeitung mit modernen ML-Modellen.

Der entscheidende Unterschied: TypeWhisper ist nicht nur ein Transkriptionstool. Es ist eine **Verarbeitungspipeline**. Audio wird transkribiert, dann durch LLM-Prompts geschickt, die den Text formatieren, korrigieren und an den Kontext anpassen.

## On-Device ML

TypeWhisper nutzt mehrere Speech-to-Text-Engines je nach Plattform:

- **WhisperKit** - Apples optimierte Implementierung von OpenAIs Whisper-Modell, läuft nativ auf Apple Silicon
- **Parakeet TDT** - NVIDIAs Token-and-Duration Transducer, besonders schnell und akkurat
- **Apple Speech** - Das System-Framework als Fallback, funktioniert ohne zusätzliche Modelle

Die Modelle laufen vollständig auf dem Gerät. Bei WhisperKit und Parakeet TDT wird die Neural Engine bzw. GPU genutzt - die Transkription passiert in Echtzeit, oft schneller als du sprichst.

## Die Verarbeitungspipeline

Rohe Transkription ist selten perfekt. "Hallo Komma wie geht es dir Fragezeichen" ist nicht das, was du tippen willst. TypeWhisper löst das mit einer mehrstufigen Pipeline:

**1. Transkription** - Audio wird in Rohtext umgewandelt.

**2. LLM-Verarbeitung** - Der Rohtext wird durch konfigurierbare Prompts geschickt. Standardmäßig kümmern sich diese um Interpunktion, Groß-/Kleinschreibung und Formatierung. Du kannst eigene Prompts definieren - zum Beispiel für automatische Übersetzung oder Zusammenfassung.

**3. Per-App Profile** - Verschiedene Apps brauchen verschiedene Formatierungen. In Slack willst du lockeren Ton, in einer E-Mail formelleren. TypeWhisper erkennt die aktive App und wendet das passende Profil an.

**4. Wörterbuch** - Ein persönliches Wörterbuch korrigiert Fachbegriffe, Namen und Abkürzungen, die das ML-Modell nicht kennt. Statt "Kube Nettis" bekommst du "Kubernetes".

## Systemintegration

TypeWhisper ist darauf ausgelegt, sich nahtlos in bestehende Workflows einzufügen:

**Global Hotkey** - Ein Tastenkürzel startet die Aufnahme aus jeder App heraus. Nochmal drücken stoppt die Aufnahme und fügt den verarbeiteten Text ein. Das Ganze dauert typischerweise unter einer Sekunde nach Ende der Aufnahme.

**HTTP API** - Für Automatisierung gibt es eine lokale HTTP-Schnittstelle. Damit lässt sich TypeWhisper in Shortcuts, Automator oder eigene Scripts einbinden.

**CLI** - Kommandozeilentool für Batch-Verarbeitung und Scripting.

**Plugins** - TypeWhisper gibt es als native Raycast Extension. Weitere Integrationen sind geplant.

## Plattformen

TypeWhisper läuft auf:

- **macOS** - Native Swift-App mit Menu-Bar-Integration
- **Windows** - Native App mit System-Tray
- **iOS** - Keyboard Extension und eigenständige App

Zusätzlich gibt es eine Raycast Extension als Add-on für schnellen Zugriff über den Launcher.

Die Konfiguration synchronisiert sich optional zwischen Geräten - Prompts, Profile und Wörterbuch sind überall verfügbar.

## Open Source

TypeWhisper steht unter der GPLv3-Lizenz auf [GitHub](https://github.com/TypeWhisper){target="_blank"}. Der gesamte Code ist einsehbar und erweiterbar.

Warum Open Source? Weil eine App, die deine Stimme verarbeitet, transparent sein sollte. Du solltest nachprüfen können, dass keine Daten nach Hause telefonieren. Und du solltest die App an deine Bedürfnisse anpassen können.

Mehr Infos und Downloads auf [typewhisper.com](https://www.typewhisper.com){target="_blank"}.
