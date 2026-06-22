# EchoTrace Museum

EchoTrace Museum is a high-fidelity web prototype for museum information retrieval. It supports the Future Museum interactive system theme by helping users search, retrieve, evaluate, and explore museum-related information through a structured, evidence-aware interface.

## Project Focus

Selected project function:

**Knowledge Retrieval of Future Museum Development**

The prototype is designed as a user-facing museum knowledge retrieval system. Instead of presenting a general museum website, it focuses on helping visitors and learners ask museum-related questions, inspect evidence, compare perspectives, identify missing context, and save useful knowledge outputs.

## Prototype Features

The prototype includes seven connected feature areas:

1. **Time-Layered Search**  
   Retrieves museum information across historical, collection, and interpretation layers.

2. **Evidence Trail**  
   Shows the sources behind a result, including reliability level, source type, and use context.

3. **Perspective Lens**  
   Reframes the same topic for visitor, student, curator, and accessibility needs.

4. **Knowledge Journey Builder**  
   Converts retrieved information into a step-by-step learning path.

5. **Blind Spot Detector**  
   Identifies missing cultural, ethical, accessibility, and interpretation concerns.

6. **Guided AI Explanation**  
   Provides adjustable explanation styles while keeping the answer connected to the selected topic.

7. **Voice Query Simulation**  
   Demonstrates how visitors could retrieve museum information through spoken questions.

The prototype also includes support pages for knowledge detail, source preview, lens detail, improvement suggestions, and a saved knowledge board with delete and export preview functions.

## Demonstration Topics

The interaction logic is built around two museum information retrieval scenarios:

- **Malay keris story**: artifact meaning, material, age, cultural context, and curatorial evidence.
- **Nyonya beadwork voices**: motif, maker memory, oral history, object record, and accessibility support.

Selecting either topic updates the search result, evidence cards, perspective lens, journey path, blind spot warnings, AI explanation, voice query, and saved board output.

## Interaction Design Rationale

The interface applies interaction design concepts from human-computer interaction and user experience design:

- Visibility of system status through selected states, active navigation, and feedback messages.
- User control through editable search, topic switching, navigation buttons, save actions, and delete actions.
- Consistency through repeated layout patterns, button styles, page structure, and terminology.
- Recognition rather than recall through named navigation buttons and visible feature labels.
- Cognitive load reduction through staged exploration from search to evidence, lens, journey, risk, explanation, and output.
- Accessibility support through keyboard-friendly controls, readable contrast, clear labels, and voice query simulation.
- Error prevention through blind spot warnings, source reliability cues, and evidence-based explanation.

## Usability Evaluation Plan

The prototype is suitable for a Cognitive Walkthrough evaluation. Representative tasks can include:

- Search for the Malay keris story.
- Inspect the evidence trail and source preview.
- Switch perspective lens from curator to visitor or accessibility.
- Build and save a knowledge journey.
- Use voice query simulation for Nyonya beadwork.
- Delete saved items and export a saved knowledge board preview.

The evaluation should check whether users understand the available actions, can predict the result of each action, receive clear feedback, and know how to continue to the next step.

## How to Run

Open `index.html` in a browser. The prototype uses only HTML, CSS, and JavaScript, so it can be hosted directly through GitHub Pages.

## Files

- `index.html`: prototype structure and screens
- `styles.css`: visual interface design and responsive layout
- `app.js`: interaction logic and scenario data
- `low-fidelity-prototype.svg`: low-fidelity interface mockup
- `desktop-preview.png`: desktop screenshot for the local submission package
- `mobile-preview.png`: mobile screenshot for the local submission package

## Submission Mapping

- **Clickable prototype link**: GitHub Pages link after publishing this repository.
- **Interface mockups**: `low-fidelity-prototype.svg` and the high-fidelity web prototype screens.
- **Screenshots**: `desktop-preview.png`, `mobile-preview.png`, and additional captured screens can be submitted separately or uploaded to this repository through GitHub's upload interface.
