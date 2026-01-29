---
title: "EU AI Act: Welches KI-Tool darf's denn sein?"
description: "Der EU AI Act zwingt zur Differenzierung bei KI-Tools. Ein Vergleich von US-, chinesischen und europäischen Anbietern - mit Checkliste für die Tool-Auswahl."
date: 2026-01-29
lang: de
slug: eu-ai-act-ki-tools-bewerten
published: true
---

Okay, reden wir Klartext: Die Schonfrist ist vorbei. Seit Februar 2025 gilt die AI-Literacy-Pflicht, seit August 2025 die GPAI-Regeln. Und ab August 2026 wird's richtig ernst - dann greift die volle Durchsetzung. Strafen? Bis zu 35 Millionen Euro oder 7% vom weltweiten Jahresumsatz. Das tut weh.

Die Realität in den meisten Unternehmen: Alle nutzen längst ChatGPT, Copilot, Claude und was nicht alles. Aber Hand aufs Herz - wer hat sich ernsthaft Gedanken gemacht, was das regulatorisch heißt? Und jetzt kommen auch noch DeepSeek und Kimi aus China dazu, die GDPR einfach ignorieren. Läuft.

## EU AI Act - Was gilt denn jetzt eigentlich?

Der EU AI Act ist ein Stufenmodell - nicht alles kommt auf einmal. Hier das Wichtigste:

**Seit Februar 2025: AI Literacy** - Dein Team muss wissen, wie KI funktioniert. Klingt banal, ist aber Pflicht. Wer Copilot oder ChatGPT im Job nutzt, braucht "ausreichende KI-Kompetenz". Keine Prüfung nötig, aber dokumentier die Schulungen - falls mal jemand fragt.

**Seit August 2025: GPAI-Regeln** - OpenAI, Anthropic & Co. müssen jetzt Doku liefern: Was steckt drin? Wie wurde trainiert? Das betrifft dich nicht direkt, aber du kannst (und solltest) diese Infos von Anbietern einfordern.

**Ab August 2026: Hochrisiko & volle Durchsetzung** - Dann greifen die harten Anforderungen für Biometrie, kritische Infrastruktur, HR-Entscheidungen. Und die Strafen werden ernst genommen.

**Deployer vs. Provider** - Als "Deployer" (du nutzt einfach nur KI-Tools) hast du bestimmte Pflichten. Aber Vorsicht: Sobald du ein Tool unter deinem Namen anbietest oder ordentlich anpasst, bist du plötzlich "Provider" - und dann wird's kompliziert.

::info-box{type="warning" title="Achtung bei Customizing"}
Wer ein Modell fine-tuned, unter eigenem Branding anbietet oder in eigene Produkte einbaut, kann vom Deployer zum Provider werden. Das heißt: Dokumentationspflichten, Konformitätsbewertung, und im schlimmsten Fall Produkthaftung. Nicht unterschätzen!
::

## Die vier Anbieter-Kategorien

### US-Anbieter: GitHub Copilot, ChatGPT, Claude, Cursor

Die großen Amerikaner geben sich Mühe. OpenAI und Anthropic haben Datenschutz-Addenda für Europa, Microsoft bietet EU Data Boundary für M365 Copilot. Das ist schon mal was.

**Was spricht dafür:**
- Solide Enterprise-Verträge mit DPA (Data Processing Agreement)
- Meist SOC 2, ISO 27001 zertifiziert - also kein Neuland
- Du hast Ansprechpartner, wenn's brennt
- OpenAI und andere haben den [EU AI Code of Practice](https://euperspectives.eu/2025/07/mistral-and-openai-back-eu-ai-code-of-practice/){target="_blank"} unterschrieben

**Was dagegen spricht:**
- **CLOUD Act**: US-Behörden können theoretisch an deine Daten ran - auch wenn die in der EU liegen. Unschön.
- **Trainingsdata-Nutzung**: Bei billigeren Tarifen werden deine Prompts fürs Training verwendet. Enterprise-Pläne schließen das meist aus, aber les das Kleingedruckte.
- **Vendor Lock-in**: Proprietäre Modelle, kein Plan B wenn der Anbieter nervt

### Chinesische Anbieter: DeepSeek, Kimi, Doubao

DeepSeek und das R1-Modell haben eingeschlagen wie eine Bombe - gut und günstig. Aber die EU hat schnell reagiert: [Italien hat die App blockiert](https://www.euronews.com/next/2025/01/29/italian-data-privacy-agency-probes-chinas-deepseek-ai-as-eu-tests-gdpr-compliance){target="_blank"}, [Deutschland will sie aus den App Stores](https://vinciworks.com/blog/germany-moves-to-block-deepseek-will-the-rest-of-the-eu-follow/){target="_blank"}, und das EU AI Office prüft auf Systemic Risk.

**Cloud-Nutzung? Vergiss es.** DeepSeek sagt ganz offen: GDPR gilt für uns nicht. Alle Daten landen in China, kein DPA, niemand in der EU den du anrufen kannst. In der Privacy Policy kommt GDPR nicht mal vor. Das ist keine Grauzone, das ist rot.

**Self-Hosting - besser, aber...** Das Datentransfer-Problem fällt weg wenn du lokal hostest. Aber: Woher kommen die Trainingsdaten? Keiner weiß es. Wurde EU-Copyright beachtet? Keine Ahnung. Dokumentation zur AI Act Compliance? Nicht vorhanden. Wer haftet wenn's Copyright-Ärger gibt? Du vermutlich.

::info-box{type="danger" title="Red Flags"}
- Anbieter sagt "EU-Recht gilt für uns nicht" - ernsthaft?
- Keine Trainingsdaten-Infos veröffentlicht
- Aktive Verfahren in mehreren EU-Ländern
- Chinesische Behörden haben weitreichende Zugriffsrechte auf Daten chinesischer Unternehmen
::

**Meine Meinung:** Lass die Finger davon - Cloud wie Self-Hosted. Das Compliance-Risiko ist zu hoch, die rechtliche Lage ein Minenfeld.

### EU-Anbieter: Mistral (Frankreich)

Mistral ist der europäische Hoffnungsträger - 2023 gegründet, inzwischen 14 Milliarden Dollar wert. Das französische Militär nutzt Mistral-Modelle, und sie haben den EU AI Code of Practice unterschrieben. Klingt gut, oder?

**Was spricht dafür:** GDPR-native (französisch, EU-Rechtsraum, kein Drittlandtransfer), kein CLOUD Act-Stress, flexible Deployment-Optionen (API, Private Cloud, On-Prem), Open-Weights-Modelle (Mixtral, Mistral Large), und sie können mehrere Sprachen richtig gut.

**Was dagegen spricht:** Bei komplexen Reasoning-Tasks noch nicht ganz auf GPT-4o/Claude-Niveau, kleineres Ökosystem als die Amis, und der Enterprise-Support ist noch nicht so poliert wie bei Microsoft.

::info-box{type="tip" title="Empfehlung"}
Gute Wahl wenn EU-Compliance an erster Stelle steht und du mit kleinen Capability-Einschränkungen leben kannst. Besonders spannend: On-Prem-Deployment für volle Datenkontrolle.
::

### Deutsche Anbieter: Aleph Alpha, Langdock, Omnifact

Wir haben in Deutschland tatsächlich was zu bieten. Aleph Alpha ist ein echter LLM-Anbieter, dazu kommen spezialisierte Plattformen wie Langdock und Omnifact.

**Aleph Alpha (Heidelberg)** - BSI C5 zertifiziert (der einzige deutsche LLM-Anbieter mit diesem Stempel), hat den [EU AI Code of Practice aktiv mitgeschrieben](https://aleph-alpha.com/a-signature-and-a-stance-why-we-signed-the-code-of-practice/){target="_blank"}, [Pharia-Modelle sind "100% AI Act compliant"](https://www.techzine.eu/blogs/privacy-compliance/123863/aleph-alphas-open-source-llms-fully-comply-with-the-ai-act/){target="_blank"} ab Start. Optimiert für Deutsch/Französisch/Spanisch, On-Prem möglich, und Behörden plus DAX-Konzerne nutzen es schon.

**Langdock (Berlin)** - Eine Plattform, die mehrere LLMs (Mistral, Claude, GPT) GDPR-konform macht. EU-only Hosting, strenge Zugriffskontrolle. Praktisch wenn dein Team verschiedene Modelle ausprobieren will.

**Omnifact (Deutschland)** - Hat einen "Privacy Filter" der sensible Daten erkennt und rausfiltert, bevor sie beim Modell ankommen. Perfekt für Recht, Medizin, HR - alles wo Compliance wirklich zählt.

::info-box{type="tip" title="Empfehlung"}
**Aleph Alpha** wenn du maximale Compliance-Sicherheit brauchst, vor allem bei öffentlichen Aufträgen oder in regulierten Branchen. BSI C5 ist oft Voraussetzung für Behörden. **Langdock/Omnifact** als Compliance-Layer wenn du eigentlich US-Modelle nutzen willst, aber sicher gehen musst.
::

## Self-Hosting: Kein Freifahrtschein

"Wir hosten das einfach selbst!" - klingt erstmal schlau. Keine Daten an Dritte, volle Kontrolle, GDPR-Problem gelöst. Tja, so einfach ist es leider nicht.

**Was Self-Hosting tatsächlich löst:** Keine Daten gehen raus, du hast volle Kontrolle über Infrastruktur und Zugriff, du bist nicht abhängig ob OpenAI gerade mal wieder down ist, und bei EU-Hosting gibt's kein Drittlandtransfer-Problem.

**Was Self-Hosting nicht löst:** Der AI Act verlangt eine [Zusammenfassung der Trainingsdaten](https://www.modulos.ai/blog/eu-ai-act-open-source-llms-must-disclose-their-training-data/){target="_blank"}. Wenn du ein Modell einsetzt dessen Trainingsdaten im Dunkeln liegen, erbst du das Problem. Bei DeepSeek? Total intransparent. Dazu Copyright-Fragen (wurden Opt-outs beachtet?) und Haftungsrisiken.

::info-box{type="warning"}
Self-Hosting klingt nach "kostenlos" - die Modelle sind ja Open Source! Die Realität: Die "günstigen" chinesischen Modelle sind nur günstig wenn du Compliance-Risiken ignorierst.
::

**Und dann die Hardware-Kosten:** Llama 3.1 70B braucht mindestens 2x A100 (80GB). Eine NVIDIA H100 kostet aktuell 30.000-40.000€ - Tendenz steigend. Plus Strom, Kühlung, Wartung, Personal. Das läppert sich.

::data-table
---
headers: ["Option", "Compliance", "Kosten", "Kontrolle"]
rows:
  - ["US-API (OpenAI, Anthropic)", "Mittel", "Niedrig", "Gering"]
  - ["EU-API (Mistral)", "Hoch", "Niedrig-Mittel", "Gering"]
  - ["Self-Hosted EU Cloud", "Hoch", "Mittel", "Mittel"]
  - ["Self-Hosted On-Premises", "Sehr hoch", "Hoch", "Sehr hoch"]
---
::

::data-table
---
headers: ["Modellherkunft", "GDPR", "Training Data", "Copyright", "Empfehlung"]
rows:
  - ["EU (Mistral, Aleph Alpha)", "✓", "dokumentiert", "EU-konform", "Empfohlen"]
  - ["US Open Source (Llama)", "✓", "teilweise", "unklar", "Mit Vorbehalt"]
  - ["China (DeepSeek)", "✓", "nicht dokumentiert", "unklar", "Nicht empfohlen"]
---
::

## Checkliste: Fragen an jeden KI-Anbieter

::info-box{type="info"}
Diese Fragen kannst du direkt an Sales stellen. Wer rumdruckst oder keine klaren Antworten hat - Finger weg.
::

**Datenschutz & GDPR**

- [ ] Wo landen meine Daten eigentlich?
- [ ] Gibt's ein DPA nach GDPR-Standard?
- [ ] Werden meine Prompts fürs Training verwendet?
- [ ] Wie lange speichert ihr Daten?
- [ ] Habt ihr eine EU-Niederlassung?

**AI Act Compliance**

- [ ] Kann ich eine Trainingsdaten-Zusammenfassung bekommen?
- [ ] Habt ihr den EU AI Code of Practice unterschrieben?
- [ ] Wie sieht's mit Copyright-Dokumentation aus?

**Sicherheit & Zertifizierungen**

- [ ] SOC 2 Type II?
- [ ] ISO 27001?
- [ ] BSI C5 (wichtig für Behörden)?
- [ ] Penetration Tests dokumentiert?

**Deployment & Kontrolle**

- [ ] Welche Optionen hab ich? API, Private Cloud, On-Prem?
- [ ] Ist das Modell Open Source / Open Weights?
- [ ] Was wenn ich wechseln will - gibt's eine Exit-Strategie?

## Red Flags: Hier wird's kritisch

::data-table
---
headers: ["Red Flag", "Warum das ein Problem ist"]
rows:
  - ["Kein DPA verfügbar", "GDPR-Verstoß bei personenbezogenen Daten"]
  - ["\"GDPR gilt nicht für uns\"", "Ernsthaft? Aktive Missachtung von EU-Recht"]
  - ["Keine Trainingsdaten-Info", "AI Act Compliance nicht prüfbar"]
  - ["Nur Rechenzentren außerhalb EU", "Drittlandtransfer-Risiko"]
  - ["Prompts werden für Training genutzt", "Datenschutz- und IP-Risiko"]
  - ["Keine Zertifizierungen", "Schwer im Audit zu rechtfertigen"]
  - ["Aktives Regulierungsverfahren", "Rechtsunsicherheit - willst du wirklich dabei sein?"]
---
::

## Fazit: Was tun?

Der EU AI Act zwingt dich zum Nachdenken. "Wir nutzen halt ChatGPT" reicht nicht mehr.

**Compliance muss an erster Stelle stehen?** (Öffentliche Aufträge, regulierte Branchen, sensible Daten) → **Aleph Alpha** oder **Mistral mit EU-Hosting**. BSI C5 bei Aleph Alpha ist für Behörden oft Pflicht.

**Performance und Ökosystem wichtiger?** (Und Compliance "gut genug") → **US-Anbieter mit Enterprise-Vertrag** (OpenAI, Anthropic, Microsoft). DPA checken, EU Data Residency aktivieren, sicherstellen dass deine Prompts nicht fürs Training verwendet werden.

**Verschiedene Modelle testen ohne Compliance-Stress?** → **Langdock** oder **Omnifact** als Compliance-Layer vor US-Modellen.

**Self-Hosting im Blick?** → Nur mit EU-Modellen (Mistral, Aleph Alpha Pharia). Hardware-Kosten realistisch kalkulieren. Chinesische Modelle? Das Compliance-Risiko ist es nicht wert.

::info-box{type="info" title="Nächste Schritte"}
1. **Bestandsaufnahme**: Welche KI-Tools werden genutzt? Schatten-IT nicht vergessen!
2. **Klassifizierung**: Bist du Deployer oder Provider? Hochrisiko-Szenarien dabei?
3. **AI Literacy dokumentieren**: Schulungen machen und nachweisen können.
4. **Anbieter-Check**: Checkliste durchgehen, fehlende DPAs einfordern.
5. **Bis August 2026**: Hochrisiko-Szenarien identifizieren und Anforderungen umsetzen.
::

---

*Disclaimer: Das hier ist keine Rechtsberatung. Für verbindliche Aussagen zum EU AI Act hol dir einen spezialisierten Anwalt.*
