const scenarios = {
  keris: {
    label: "Malay keris story",
    query: "Search Malay keris story, material, age, and cultural meaning.",
    topic: "Malay keris collection record and historical context",
    detailHeading: "Malay Keris: object story, symbolism, and historical context",
    detailCopy:
      "This knowledge detail page helps visitors move from a simple object search to a richer understanding of material, craftsmanship, symbolic meaning, regional history, and museum interpretation.",
    time: {
      past: {
        title: "Historical Layer: ceremonial and regional use",
        text: "The keris is presented as a bladed object connected with Malay court culture, identity, craftsmanship, and ritual meaning."
      },
      present: {
        title: "Collection Layer: museum object record",
        text: "The current museum record links object type, material, date range, maker context, acquisition notes, and curatorial keywords."
      },
      future: {
        title: "Interpretation Layer: AR-supported object reading",
        text: "A future-facing museum interface can overlay blade pattern, hilt detail, map context, and curator narration without replacing evidence."
      }
    },
    evidence: {
      claim:
        "A keris search result is more useful when the interface connects artifact features with historical context and curatorial evidence.",
      copy:
        "The claim is supported by collection metadata, conservation notes, exhibition labels, and regional history sources, so visitors can tell which explanation is evidence-based.",
      sources: [
        {
          type: "Collection record",
          title: "Malay Keris Object Catalogue",
          meta: "Reliability: High | Use: object metadata, material, date range",
          reliability: "High",
          use: "Object identification, material description, provenance and acquisition context",
          cue: "Museum collection record, object ID, curator note, accession year"
        },
        {
          type: "Exhibition source",
          title: "Weapons, Status, and Malay Court Culture",
          meta: "Reliability: Medium | Use: historical interpretation",
          reliability: "Medium",
          use: "Visitor-facing historical explanation and exhibition narrative",
          cue: "Exhibition label, curator essay, gallery section reference"
        }
      ]
    },
    lens: {
      Visitor:
        "A visitor needs a clear object story: what the keris is, why it matters, and which visible details reveal its cultural meaning.",
      Student:
        "A student needs a structured explanation that separates object facts, historical context, symbolic interpretation, and source evidence.",
      Curator:
        "A curator needs the interface to preserve uncertainty, show collection metadata, and avoid turning cultural interpretation into unsupported myth.",
      Accessibility:
        "An accessibility view should provide plain-language summaries, audio description of blade and hilt details, and keyboard-friendly source navigation."
    },
    journey: [
      ["Object", "Identify the keris type, material, hilt, sheath, and visible decorative pattern."],
      ["Context", "Connect the artifact to Malay court culture, craftsmanship, and regional historical use."],
      ["Evidence", "Check collection record, exhibition label, and curator notes before accepting the interpretation."],
      ["Perspective", "Compare visitor, student, curator, and accessibility explanations of the same artifact."],
      ["Understanding", "Build a final object story that explains meaning without losing source traceability."]
    ],
    risks: [
      ["High", "Cultural meaning may be oversimplified if the result only describes the object as a weapon."],
      ["Medium", "Provenance or dating uncertainty may be hidden from visitors."],
      ["Low", "AR overlays may distract from close observation of the real artifact."]
    ],
    fix: {
      issue: "Cultural interpretation gap",
      issueCopy:
        "The result explains the keris visually but does not clearly separate verified facts from symbolic interpretation.",
      solution: "Add curator-approved evidence labels",
      solutionCopy:
        "Attach collection metadata, curator notes, and uncertainty markers beside each historical claim."
    },
    ai: {
      Simple:
        "The keris is not only a blade. In a museum search result, visitors should see what it is made of, where it may come from, and why its shape and decoration matter.",
      Academic:
        "A strong keris retrieval interface should connect object metadata, cultural history, and interpretive uncertainty. Evidence cards help visitors distinguish catalogue facts from curatorial explanation.",
      Risk:
        "Main risks: oversimplifying Malay cultural meaning, hiding provenance uncertainty, and letting AR effects make the artifact feel more certain than the evidence allows."
    },
    voiceQuery:
      "Show me the story, age, material, and cultural meaning of the Malay keris in this gallery."
  },
  beadwork: {
    label: "Nyonya beadwork voices",
    query: "Search Nyonya beadwork motifs, maker memory, and oral history.",
    topic: "Nyonya beadwork collection and oral-history retrieval",
    detailHeading: "Nyonya Beadwork: craft technique, family memory, and oral history",
    detailCopy:
      "This page helps visitors explore beadwork as both a visual artifact and a living heritage record connected with domestic culture, Peranakan identity, making techniques, and personal memory.",
    time: {
      past: {
        title: "Historical Layer: domestic craft and identity",
        text: "Beadwork is connected with Peranakan household objects, wedding culture, handcraft skill, and inherited family knowledge."
      },
      present: {
        title: "Collection Layer: artifact plus oral record",
        text: "The museum record combines object images, pattern description, maker notes, material, and related oral-history interviews."
      },
      future: {
        title: "Interpretation Layer: voice-based heritage access",
        text: "Voice retrieval can let visitors ask about motif, maker, memory, and technique while keeping transcript and source links visible."
      }
    },
    evidence: {
      claim:
        "A beadwork search result becomes richer when object metadata is linked with oral-history records and close visual exploration.",
      copy:
        "The claim is supported by collection images, interview transcripts, craft documentation, and exhibition notes about Peranakan cultural memory.",
      sources: [
        {
          type: "Oral-history record",
          title: "Interview Transcript: Beadwork, Memory, and Making",
          meta: "Reliability: High | Use: maker memory and lived context",
          reliability: "High",
          use: "Connects artifact interpretation with spoken memory and family knowledge",
          cue: "Interview transcript, speaker, date, consent note, archive ID"
        },
        {
          type: "Collection record",
          title: "Nyonya Beaded Slippers / Textile Object Record",
          meta: "Reliability: High | Use: object image, material, motif, date range",
          reliability: "High",
          use: "Object metadata, visual motif description, and material classification",
          cue: "Museum object record, image ID, accession number, material note"
        }
      ]
    },
    lens: {
      Visitor:
        "A visitor needs a simple route from visible pattern to story: motif, use, maker memory, and why the object belongs in the museum.",
      Student:
        "A student needs comparison between visual evidence, transcript evidence, and historical explanation of Peranakan culture.",
      Curator:
        "A curator needs consent-aware oral-history handling, clear archive references, and separation between personal memory and general cultural claims.",
      Accessibility:
        "An accessibility view should support voice questions, transcript display, image description, and audio summaries of pattern and texture."
    },
    journey: [
      ["Object", "Identify the beadwork item, motif, material, colour pattern, and function."],
      ["Memory", "Connect the object with oral-history clips, maker stories, and family use."],
      ["Evidence", "Check transcript, object image, collection record, and exhibition label."],
      ["Perspective", "Compare visitor learning, student research, curator ethics, and accessibility needs."],
      ["Understanding", "Build a story that connects craft technique with Peranakan cultural memory."]
    ],
    risks: [
      ["High", "Oral-history consent and sensitive family memory may be shown without enough context."],
      ["Medium", "Voice retrieval may miss motif terms or names from Peranakan language contexts."],
      ["Low", "Image-based exploration may ignore touch, texture, and making process."]
    ],
    fix: {
      issue: "Oral-history context gap",
      issueCopy:
        "The result gives a transcript quote but does not show consent, speaker context, or how the memory links to the object.",
      solution: "Add consent and transcript evidence trail",
      solutionCopy:
        "Show archive ID, speaker role, interview date, transcript segment, and a plain-language summary beside the object image."
    },
    ai: {
      Simple:
        "Nyonya beadwork can be explored by asking about pattern, colour, maker, and family use. The system should answer with both object facts and oral-history evidence.",
      Academic:
        "A beadwork retrieval interface should combine collection metadata with oral-history records. This supports multimodal learning because visitors can connect visual motifs with memory, identity, and making practice.",
      Risk:
        "Main risks: exposing oral-history context without consent cues, misrecognising names through voice input, and treating one family memory as a universal cultural explanation."
    },
    voiceQuery:
      "Find Nyonya beadwork motifs, maker memory, oral history, and object images."
  }
};

const state = {
  scenarioKey: "keris",
  selectedLayer: "present",
  lens: "Curator",
  aiMode: "Academic",
  saved: []
};

const maxSavedItems = 6;
const pages = Array.from(document.querySelectorAll(".screen"));
const navButtons = Array.from(document.querySelectorAll(".nav-btn"));
const toast = document.getElementById("toast");
const homeQuery = document.getElementById("home-query");
const timeQuery = document.getElementById("time-query");
const selectedResultLabel = document.getElementById("selected-result-label");
const claimTitle = document.getElementById("claim-title");
const claimCopy = document.getElementById("claim-copy");
const lensTopic = document.getElementById("lens-topic");
const lensOutputTitle = document.getElementById("lens-output-title");
const lensOutput = document.getElementById("lens-output");
const lensDetailHeading = document.getElementById("lens-detail-heading");
const lensDetailCopy = document.getElementById("lens-detail-copy");
const aiModeLabel = document.getElementById("ai-mode-label");
const aiOutput = document.getElementById("ai-output");
const voiceState = document.getElementById("voice-state");
const voiceQuery = document.getElementById("voice-query");
const boardGrid = document.getElementById("board-grid");
const exportPreview = document.getElementById("export-preview");
const exportContent = document.getElementById("export-content");

const pageMap = {
  home: "page-home",
  time: "page-time",
  evidence: "page-evidence",
  lens: "page-lens",
  journey: "page-journey",
  blind: "page-blind",
  ai: "page-ai",
  voice: "page-voice",
  detail: "page-detail",
  source: "page-source",
  "lens-detail": "page-lens-detail",
  fix: "page-fix",
  board: "page-board"
};

function scenario() {
  return scenarios[state.scenarioKey];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function showPage(pageName) {
  const id = pageMap[pageName] || pageMap.home;
  pages.forEach((page) => page.classList.toggle("is-active", page.id === id));
  navButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.page === pageName));
  if (!["home", "time", "evidence", "lens", "journey", "blind", "ai", "voice"].includes(pageName)) {
    navButtons.forEach((button) => button.classList.remove("is-active"));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function detectScenarioFromQuery(query) {
  const text = query.toLowerCase();
  if (text.includes("bead") || text.includes("nyonya") || text.includes("peranakan") || text.includes("oral") || text.includes("voice")) {
    return "beadwork";
  }
  return "keris";
}

function setScenario(key, shouldToast = true) {
  state.scenarioKey = scenarios[key] ? key : "keris";
  state.selectedLayer = "present";
  state.lens = "Curator";
  state.aiMode = "Academic";
  homeQuery.value = scenario().query;
  timeQuery.value = scenario().query;
  applyScenarioToUI();
  if (shouldToast) showToast(`${scenario().label} scenario loaded`);
}

function applyScenarioToUI() {
  const data = scenario();
  const layers = ["past", "present", "future"];

  layers.forEach((layer) => {
    const card = document.querySelector(`.layer-card[data-layer="${layer}"]`);
    card.classList.toggle("is-selected", layer === state.selectedLayer);
    card.querySelector("h3").textContent = data.time[layer].title;
    card.querySelector("p").textContent = data.time[layer].text;
  });

  selectedResultLabel.textContent = data.time[state.selectedLayer].title;
  claimTitle.textContent = data.evidence.claim;
  claimCopy.textContent = data.evidence.copy;

  const sourceCards = Array.from(document.querySelectorAll(".source-card"));
  data.evidence.sources.forEach((source, index) => {
    const card = sourceCards[index];
    if (!card) return;
    card.querySelector(".source-type").textContent = source.type;
    card.querySelector("h3").textContent = source.title;
    card.querySelector("p").textContent = source.meta;
  });

  lensTopic.textContent = data.topic;
  updateLens(state.lens);
  updateJourney();
  updateRisks();
  updateAiMode(state.aiMode);
  updateSupportPages();
  voiceQuery.value = data.voiceQuery;
  renderBoard();
  exportPreview.hidden = true;
}

function updateJourney() {
  const data = scenario();
  document.querySelectorAll(".journey-path article").forEach((article, index) => {
    const step = data.journey[index];
    article.querySelector("strong").textContent = step[0];
    article.querySelector("p").textContent = step[1];
  });
}

function updateRisks() {
  const data = scenario();
  document.querySelectorAll(".risk-item").forEach((item, index) => {
    const risk = data.risks[index];
    item.querySelector("strong").textContent = risk[0];
    item.querySelector("span").textContent = risk[1];
  });
}

function updateSupportPages() {
  const data = scenario();
  const source = data.evidence.sources[0];
  document.getElementById("detail-heading").textContent = data.detailHeading;
  document.getElementById("detail-copy").textContent = data.detailCopy;
  document.getElementById("source-heading").textContent = source.title;
  document.getElementById("source-reliability").textContent = source.reliability;
  document.getElementById("source-use").textContent = source.use;
  document.getElementById("source-cue").textContent = source.cue;
  document.getElementById("fix-issue-heading").textContent = data.fix.issue;
  document.getElementById("fix-issue-copy").textContent = data.fix.issueCopy;
  document.getElementById("fix-solution-heading").textContent = data.fix.solution;
  document.getElementById("fix-solution-copy").textContent = data.fix.solutionCopy;
}

function updateLens(lens) {
  state.lens = lens;
  document.querySelectorAll(".lens-pill").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lens === lens);
  });
  lensOutputTitle.textContent = `${lens} perspective`;
  lensOutput.textContent = scenario().lens[lens];
  lensDetailHeading.textContent = `${lens} Lens + ${scenario().topic}`;
  lensDetailCopy.textContent = scenario().lens[lens];
}

function updateAiMode(mode) {
  state.aiMode = mode;
  document.querySelectorAll(".mode-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  aiModeLabel.textContent = `${mode} Mode`;
  aiOutput.textContent = scenario().ai[mode];
}

function updateFromTypedQuery(value) {
  const key = detectScenarioFromQuery(value);
  state.scenarioKey = key;
  state.selectedLayer = "present";
  homeQuery.value = value.trim() || scenarios[key].query;
  timeQuery.value = homeQuery.value;
  applyScenarioToUI();
  showToast(`Matched query to ${scenario().label}`);
}

function savedText(kind) {
  const data = scenario();
  const source = data.evidence.sources[0];
  const map = {
    Claim: data.evidence.claim,
    Source: `${source.title} (${source.reliability})`,
    "Lens note": `${state.lens}: ${data.lens[state.lens]}`,
    Journey: data.journey.map((step) => `${step[0]}: ${step[1]}`).join(" | "),
    "AI note": data.ai[state.aiMode],
    "Risk fix": `${data.fix.issue}: ${data.fix.solution}`
  };
  return map[kind] || `${data.label}: saved note`;
}

function saveItem(kind) {
  if (state.saved.length >= maxSavedItems) {
    showToast("Saved Board is full. Delete an item before saving more.");
    showPage("board");
    return;
  }
  state.saved.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    scenario: scenario().label,
    type: kind,
    value: savedText(kind)
  });
  renderBoard();
  showToast("Saved to Knowledge Board");
  showPage("board");
}

function renderBoard() {
  boardGrid.innerHTML = "";
  if (state.saved.length === 0) {
    const empty = document.createElement("article");
    empty.className = "board-empty";
    empty.innerHTML = "<span>Saved Board</span><strong>No saved items yet. Save evidence, lens notes, AI notes, journey, or risk fixes from the feature pages.</strong>";
    boardGrid.append(empty);
    return;
  }
  state.saved.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <span>${item.type} | ${item.scenario}</span>
      <strong>${item.value}</strong>
      <button class="delete-btn" data-delete-id="${item.id}" aria-label="Delete saved item">Delete</button>
    `;
    boardGrid.append(article);
  });
}

function buildExportText() {
  const data = scenario();
  const savedLines = state.saved.length
    ? state.saved.map((item, index) => `${index + 1}. [${item.type}] ${item.value}`).join("\n")
    : "No manual saved items. Default scenario summary is shown below.";

  return `EchoTrace Museum - PDF Export Preview

Search topic:
${data.query}

Selected museum information scenario:
${data.label}

Evidence claim:
${data.evidence.claim}

Primary source:
${data.evidence.sources[0].title}
Reliability: ${data.evidence.sources[0].reliability}
Citation cue: ${data.evidence.sources[0].cue}

Knowledge journey:
${data.journey.map((step, index) => `${index + 1}. ${step[0]} - ${step[1]}`).join("\n")}

Current perspective:
${state.lens} - ${data.lens[state.lens]}

Blind spot and improvement:
${data.fix.issue} -> ${data.fix.solution}

Saved items:
${savedLines}`;
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-page]");
  if (nav) {
    showPage(nav.dataset.page);
    return;
  }

  const pageJump = event.target.closest("[data-page-jump]");
  if (pageJump) {
    showPage(pageJump.dataset.pageJump);
    return;
  }

  const scenarioButton = event.target.closest("[data-scenario]");
  if (scenarioButton) {
    setScenario(scenarioButton.dataset.scenario);
    showPage("time");
    return;
  }

  const resultButton = event.target.closest("[data-action='select-result']");
  if (resultButton) {
    state.selectedLayer = resultButton.dataset.result;
    applyScenarioToUI();
    showToast("Selected layer updated across Evidence, Lens, Journey, Risk, and AI");
    return;
  }

  const lensButton = event.target.closest(".lens-pill");
  if (lensButton) {
    updateLens(lensButton.dataset.lens);
    return;
  }

  const modeButton = event.target.closest(".mode-btn");
  if (modeButton) {
    updateAiMode(modeButton.dataset.mode);
    return;
  }

  const deleteButton = event.target.closest("[data-delete-id]");
  if (deleteButton) {
    state.saved = state.saved.filter((item) => item.id !== deleteButton.dataset.deleteId);
    renderBoard();
    showToast("Saved item deleted");
    return;
  }

  const action = event.target.closest("[data-action]");
  if (!action) return;

  const actionName = action.dataset.action;
  if (actionName === "run-search") {
    updateFromTypedQuery(homeQuery.value);
    showPage("time");
  }
  if (actionName === "update-results") {
    updateFromTypedQuery(timeQuery.value);
  }
  if (actionName === "save") {
    saveItem(action.dataset.saveKind || "Saved item");
  }
  if (actionName === "compare") {
    showToast(`Comparing ${scenario().evidence.sources[0].type} with ${scenario().evidence.sources[1].type}`);
  }
  if (actionName === "regenerate-journey") {
    updateJourney();
    showToast("Journey rebuilt for the current museum information scenario");
  }
  if (actionName === "listen") {
    action.classList.add("is-listening");
    voiceState.textContent = "Listening...";
    window.setTimeout(() => {
      setScenario("beadwork", false);
      voiceState.textContent = "Voice query detected";
      action.classList.remove("is-listening");
      showToast("Voice query matched to Nyonya beadwork scenario");
    }, 900);
  }
  if (actionName === "voice-search") {
    updateFromTypedQuery(voiceQuery.value);
    showPage("time");
  }
  if (actionName === "edit-voice") {
    voiceQuery.focus();
    voiceQuery.select();
  }
  if (actionName === "organise") {
    state.saved.sort((a, b) => a.type.localeCompare(b.type));
    renderBoard();
    showToast("Saved Board organised by item type");
  }
  if (actionName === "export-board") {
    exportContent.textContent = buildExportText();
    exportPreview.hidden = false;
    showToast("PDF export preview ready");
  }
  if (actionName === "close-export") {
    exportPreview.hidden = true;
  }
  if (actionName === "print-export") {
    window.print();
  }
});

homeQuery.addEventListener("change", () => updateFromTypedQuery(homeQuery.value));
timeQuery.addEventListener("change", () => updateFromTypedQuery(timeQuery.value));

setScenario("keris", false);
