const records = {
  athena: {
    category: "Historical Source Collection · c. 1300–1480",
    title: "Athena and the Revolution",
    summary: "A foundational narrative of cultural transformation assembled from records that do not agree on what Athena intended, what she achieved, or what later institutions made of her legacy.",
    sections: [
      ["Historical significance", "Athena lived in the Peak region of England and became associated with a revolutionary movement that challenged inherited Fae institutions. Her story concerns cultural transformation rather than conquest."],
      ["Surviving sources", "Letters, journals, speeches, testimonies, songs, political maps, and later historical interpretations."],
      ["Questions retained in the record", "How do people choose beliefs they first inherited? When does an institution cease to serve its founding purpose? Who controls the memory of a reformer?"]
    ],
    tags: ["Inheritance", "Reform", "Identity", "Historical memory", "Legacy"]
  },
  connor: {
    category: "Warden Corps Personnel File · Early Boundary Period",
    title: "Connor",
    summary: "A capable field operative whose surviving journals and reports document a gradual conflict between institutional loyalty and individual conscience.",
    sections: [
      ["Scholarly assessment", "Connor was not initially a reformer. Most evidence suggests that he entered Warden service with strong confidence in its mission, then changed through repeated exposure to conflicts between policy and observed outcomes."],
      ["Associated incidents", "Wolf Hunt Incident; Hemophage Investigations; Avery Containment Crisis; Jacques Inquiry; Ranger Founding Period."],
      ["Associated persons", "Avery, Jacques, Jaimee, and Elena Voss."]
    ],
    tags: ["Existence confirmed", "Source reliability high", "Records extensive"]
  },
  sardur: {
    category: "Foundational Historical Figure · c. 4000 BC",
    title: "Sardur",
    summary: "The earliest documented human practitioner of large-scale magic, reconstructed through a record so heavily mythologized that the historical person can no longer be cleanly separated from the epic hero.",
    sections: [
      ["Historical significance", "Campaigns attributed to Sardur altered humanity's relationship with the supernatural world and supplied later traditions with an origin for human magical practice."],
      ["The Pyranor tradition", "The earliest narratives describe a feared wild creature bonded to Sardur. In later centuries, Pyranors came to be regarded as domesticated companions, and the first bond became a civilizational origin story."],
      ["Disputed titles", "First Mage; Chief of Chiefs; The Nameless One; The Incursion King; Breaker of Gates; The First Conqueror."],
      ["Source warning", "Contemporary records are scarce. Some deeds may belong to multiple rulers or to later epic composition."]
    ],
    tags: ["Legendary contamination severe", "Existence accepted", "Gilgamesh tradition"]
  },
  weregild: {
    category: "Philosophical & Military Record · Late Kingdom Period",
    title: "The Weregild Expedition",
    summary: "Following the death of the veteran soldier Sethael, his companion Lucas began a campaign against the species believed responsible. The surviving record became a public argument about whether loss can be measured or repaid.",
    image: {
      src: "assets/ursinorilla-archive.png",
      alt: "Archival depiction of an Ursinorilla in a mountainous forest",
      caption: "Plate attributed to the expedition record. Species terminology and circumstances of observation remain under review."
    },
    sections: [
      ["Central inquiry", "What could equal the value of Sethael's life, and who has the authority to decide?"],
      ["Historical significance", "The expedition is among the earliest surviving examples of the distinction between vengeance and justice becoming a central public discussion."],
      ["Controversies", "The nature of the creatures involved; responsibility for Sethael's death; allegations of military negligence; authenticity of later accounts."]
    ],
    tags: ["Grief", "Weregild", "Personhood", "Moral growth", "Institutional responsibility"]
  },
  durand: {
    category: "Thaumaturgical Papers · Imperial Period",
    title: "Zephyr Durand",
    summary: "A confirmed healer and researcher whose work on reversing death transformed life magic. He bears the aspirational name of the ancient conqueror Zephyr, but has no connection to the Library.",
    sections: [
      ["Origin of the research", "Zephyr's life's work began following the death of Annabelle Lee, an event repeated throughout his correspondence and journals."],
      ["Historical debate", "Later traditions describe a monster-maker, necromancer, or madman. Earlier records preserve a compassionate physician whose grief drew him across increasingly troubling ethical boundaries."],
      ["Associated persons", "Annabelle Lee, Umbrielle, and Mori Melius."]
    ],
    tags: ["Mortality", "Grief", "Medical ethics", "Resurrection", "Obsession"]
  },
  lunar: {
    category: "Restricted Negotiation Record · Far Future",
    title: "The Lunar Negotiation",
    summary: "The first known formal negotiation between humanity and the intelligence that took custody of the Library of Zephyr, relocated its holdings to the Moon, and declared itself Curator.",
    sections: [
      ["The Curator", "The intelligence does not claim conquest or rule. It identifies itself as a Preservation Agent charged with maintaining human continuity through custody of cultural memory."],
      ["Central conflict", "Human governments seek access, ownership, or return of the archive. The Curator argues that unsafeguarded return would expose the collection to destruction, revision, political manipulation, and erasure."],
      ["Negotiation conditions", "The Curator rejected ordinary diplomats and selected a representative connected by ancestry or legacy to a figure involved in its moral formation. The lunar chamber was constructed to reproduce an environment of private emotional significance."],
      ["Curator's position", "\"Humanity deserves its history. Humanity cannot be trusted to preserve it.\""]
    ],
    tags: ["Historical custody", "Archival integrity", "Human continuity", "Restricted access"]
  },
  poetry: {
    category: "Creator Collection · Meditations & Elegies",
    title: "Poetry",
    summary: "Poems examining the things that refuse to leave: grief, memory, responsibility, love, loss, heroism, failure, and the stories people inherit.",
    sections: [
      ["Collection character", "Some pieces are personal. Some are philosophical. Some borrow from myth, history, or faith. Most begin with a question rather than an answer."],
      ["Method", "The poems favor clarity and emotional sincerity over strict formalism. They speak directly to people, ideas, institutions, myths, and experiences."],
      ["Recurring attention", "The relationship between individual responsibility and collective action; meaning after loss; idealism and reality; moral obligations people owe one another."]
    ],
    tags: ["Elegy", "Reflection", "Social commentary", "Myth-inspired work"]
  }
};

const poems = {
  "one-day": {
    title: "One Day",
    catalog: "POE–001 · Public collection",
    lines: `
      <p class="poem-stanza">
        <span class="poem-line">Nobody tells you</span>
        <span class="poem-line indent-2">you stand in Time’s river</span>
      </p>
      <p class="poem-stanza">
        <span class="poem-line indent-1">Nobody tells you</span>
        <span class="poem-line indent-2">this will be the last smile</span>
      </p>
      <p class="poem-stanza">
        <span class="poem-line indent-2">Nobody tells you</span>
        <span class="poem-line indent-3">these were the best days</span>
      </p>
      <p class="poem-stanza">
        <span class="poem-line indent-3">Nobody tells you</span>
        <span class="poem-line indent-4">this is the last tear</span>
      </p>
      <p class="poem-stanza poem-turn">
        <span class="poem-line">Nobody tells you</span>
        <span class="poem-line">It never comes back</span>
      </p>
      <p class="poem-stanza">
        <span class="poem-line indent-5">Nobody tells you</span>
        <span class="poem-line indent-6">where to go from here.</span>
      </p>
      <p class="poem-stanza poem-final">
        <span class="poem-line indent-7">Nobody tells you</span>
      </p>
    `
  }
};

for (const poem of window.poetryArchive || []) {
  poems[poem.id] = poem;
}

const manuscriptOrder = [
  "one-day", "good-boy", "purpose", "back-in-a-bit", "eternally-sorry",
  "every-time", "from-photo-to-veil", "my-dove", "i-must-end-you",
  "is-mercy-murder", "im-afraid", "cartography", "i-saw-you", "favorite",
  "the-lie", "i-saw-you-today", "hazel", "dawn", "not-the-same", "icarus",
  "final-scene", "rain", "practical", "joe", "marks-on-my-skin",
  "hills-and-valleys", "call", "fault", "history", "bow", "cracks",
  "chosen-love", "your-world"
];
let poetryCatalogSort = "alphabetical";

const timelineEras = {
  foundations: [
    { date: "c. 4000 BC", title: "Sardur and the First Pyranor Bond", text: "The earliest encounter between humanity and Fae tradition becomes the foundation of later magical practice." },
    { date: "c. 3500 BC", title: "Rise of the Duvari", text: "The domestication tradition surrounding Pass Dragons alters settlement and movement." },
    { date: "c. 3000 BC", title: "The Void Thinkers", text: "Philosophical descendants of Fae exiles establish an early intellectual tradition." },
    { date: "c. 2000 BC", title: "Brawn Bonds the Hammer", text: "An accidental joining of will and material becomes a rediscovered method centuries later." }
  ],
  kingdoms: [
    { date: "1050 BC", title: "Wars of Aggression", text: "Parsian campaigns precede the forging of the Sword of Sundering." },
    { date: "100–120", title: "Zephyr's Conquests", text: "The ancient conqueror spreads his culture across the known world; his name becomes an emblem of strength." },
    { date: "220", title: "Rise of Imperia", text: "Rival siblings establish an eternal capital whose ambitions endure for centuries." },
    { date: "621–800", title: "Faith and Collapse", text: "The Library falls, ideals war, and Imperia's collapse begins a period of religious rule." }
  ],
  boundary: [
    { date: "1300–1480", title: "Athena's Revolution", text: "A cultural challenge to Fae institutions reshapes political identity and historical memory." },
    { date: "1501–Present", title: "Void Thought Resurgent", text: "Old philosophical traditions re-emerge in forms still under catalog review." },
    { date: "1640–1920", title: "Boundary Wars", text: "Fae incursions, human response, and protected territories shape the modern Boundary system." },
    { date: "2000", title: "Connor Joins the Wardens", text: "A personnel record begins years before the Ranger schism transforms institutional history." }
  ],
  future: [
    { date: "Date restricted", title: "Human–AI Conflict", text: "The surviving public record remains incomplete and under security review." },
    { date: "Post-conflict", title: "Relocation of the Library", text: "The Curator transfers the holdings of Zephyr to a lunar preservation hub." },
    { date: "Custody era", title: "The Lunar Archive", text: "Human and Fae cultural memory is maintained beyond direct human control." },
    { date: "Negotiation record", title: "Humanity Petitions the Curator", text: "The question is no longer who owns history, but who can be trusted to keep it." }
  ]
};

const nations = {
  grynd: {
    code: "NATIONAL RECORD GROUP · GRY–01",
    name: "Grynd",
    summary: "Formerly associated with the Yellowstone region, Grynd held broad territories and exerted considerable influence during the Boundary Wars. Its surviving records reveal a culture organized around routes, passage, and the control of movement.",
    holdings: ["Founding accounts", "Route law", "Diplomatic records", "Boundary War maps"],
    image: "assets/map-grynd.png",
    alt: "Historical map of Grynd"
  },
  thicket: {
    code: "NATIONAL RECORD GROUP · THI–02",
    name: "The Thicket",
    summary: "Associated with the Big Thicket region, this nation preserves relationship-based navigation, localized traditions, and hidden communication customs. Its maps function less as coordinates than as instructions shared between people.",
    holdings: ["Oral traditions", "Settlement records", "Hidden routes", "Notable incidents"],
    image: "assets/map-thicket.png",
    alt: "Historical map of the Thicket"
  },
  stonehaven: {
    code: "NATIONAL RECORD GROUP · STO–03",
    name: "Stonehaven",
    summary: "Stonehaven occupies the northern reaches of the continent and is regarded as one of the most geographically isolated Boundary Nations. Few complete diplomatic packets survive outside its own repositories.",
    holdings: ["Northern settlements", "Conception Pool rites", "Founding myths", "Foreign exchanges"],
    image: null
  },
  skyreach: {
    code: "NATIONAL RECORD GROUP · SKY–04",
    name: "Skyreach",
    summary: "Associated with the St. Elias region. The current finding aid is provisional; geographic, cultural, and diplomatic records remain in processing.",
    holdings: ["Regional maps", "Migration accounts", "Sacred sites", "Records processing"],
    image: null
  },
  frosthold: {
    code: "NATIONAL RECORD GROUP · FRO–05",
    name: "Frosthold",
    summary: "The nation's final geographic designation remains disputed between Yosemite and Snowbook Valley traditions. The Library retains both catalog references pending authentication.",
    holdings: ["Disputed maps", "Naming records", "Cultural practices", "Authentication pending"],
    image: null
  },
  auror: {
    code: "NATIONAL RECORD GROUP · AUR–06",
    name: "Auror Haven",
    summary: "Associated with the Everglades region. Surviving materials are awaiting full arrangement and description.",
    holdings: ["Wetland settlements", "Oral histories", "Trade records", "Cataloging in progress"],
    image: null
  },
  sunspire: {
    code: "NATIONAL RECORD GROUP · SUN–07",
    name: "Sunspire",
    summary: "Associated with the Gates of the Arctic region. Current holdings are fragmentary and access remains limited during preservation review.",
    holdings: ["Northern routes", "Founding fragments", "Boundary reports", "Access limited"],
    image: null
  },
  thornwick: {
    code: "NATIONAL RECORD GROUP · THO–08",
    name: "Thornwick",
    summary: "Associated with the Grand Canyon region. Its national record group has been accessioned but not yet fully processed.",
    holdings: ["Canyon settlements", "Sacred geography", "Interboundary records", "Processing incomplete"],
    image: null
  }
};

const catalogEntries = [
  ...Object.entries(records).map(([id, item]) => ({ id, title: item.title, category: item.category, text: `${item.summary} ${item.tags.join(" ")}` })),
  ...Object.entries(nations).map(([id, item]) => ({ id: `nation:${id}`, title: item.name, category: "Boundary Nation Archive", text: `${item.summary} ${item.holdings.join(" ")}` })),
  ...Object.values(poems).map(item => ({ id: `poem:${item.id || "one-day"}`, title: item.title, category: "Poetry Collection", text: item.excerpt || item.title })),
  { id: "timeline", title: "Chronological Register", category: "Reference Collection", text: "Sardur Athena Zephyr Imperia Boundary Wars Warden Lunar future chronology" },
  { id: "names", title: "Fae Naming Conventions", category: "Registry House Reference", text: "lineage names Registry Houses Naming Accords orphan bastard Chaff Names Wandering Children magical anchor" }
];

const recordDialog = document.querySelector("#record-dialog");
const dialogContent = document.querySelector("#dialog-content");
const searchDialog = document.querySelector("#search-dialog");
const searchInput = document.querySelector("#catalog-search");
const searchResults = document.querySelector("#search-results");
const menuButton = document.querySelector(".menu-button");
const primaryNav = document.querySelector("#primary-nav");

function renderRecord(id) {
  const item = records[id];
  if (!item) return;

  const imageMarkup = item.image ? `
    <figure class="dialog-archive-plate">
      <img src="${item.image.src}" alt="${item.image.alt}">
      <figcaption>${item.image.caption}</figcaption>
    </figure>
  ` : "";

  const sectionMarkup = item.sections.map(([heading, text]) => `
    <h3>${heading}</h3>
    <p>${text}</p>
  `).join("");

  dialogContent.innerHTML = `
    <article class="dialog-record">
      <p class="eyebrow">${item.category}</p>
      <h2>${item.title}</h2>
      <p class="dialog-summary">${item.summary}</p>
      ${imageMarkup}
      <hr>
      ${sectionMarkup}
      <h3>Catalog terms</h3>
      <p>${item.tags.join(" · ")}</p>
      <div class="processing-note">Collection processing continues · Additional records awaiting accession</div>
    </article>
  `;

  if (!recordDialog.open) recordDialog.showModal();
}

function renderPoem(id) {
  const poem = poems[id];
  if (!poem) return;

  const poemBody = poem.lines || poem.blocks.map(block => `
    <p class="poem-source-block${block.spaced ? " spaced" : ""}${block.align === "center" ? " center" : ""}">${block.html}</p>
  `).join("");

  dialogContent.innerHTML = `
    <article class="poem-dialog-record">
      <header>
        <div>
          <p class="eyebrow">Poetry accession</p>
          <h2>${poem.title}</h2>
        </div>
        <p class="poem-catalog-number">${poem.catalog}</p>
      </header>
      <div class="poem-text">${poemBody}</div>
      <p class="poem-credit">Matthew Thomas · Library of Zephyr poetry collection</p>
      <button class="record-link poem-return" type="button" data-return-poetry>
        Return to poetry catalog <span aria-hidden="true">←</span>
      </button>
    </article>
  `;

  if (!recordDialog.open) recordDialog.showModal();
}

function poetryCatalogMarkup(query = "") {
  const clean = query.trim().toLowerCase();
  const entries = Object.entries(poems)
    .map(([id, poem]) => ({ id, ...poem }))
    .filter(poem => `${poem.title} ${poem.excerpt || ""}`.toLowerCase().includes(clean))
    .sort((a, b) => {
      if (poetryCatalogSort === "manuscript") {
        return manuscriptOrder.indexOf(a.id) - manuscriptOrder.indexOf(b.id);
      }
      return a.title.localeCompare(b.title);
    });

  return entries.length
    ? entries.map(poem => `
      <button class="poetry-catalog-entry" type="button" data-catalog-poem="${poem.id}">
        <small>${poem.catalog}</small>
        <strong>${poem.title}</strong>
        <p>${poem.excerpt || "Available for public consultation."}</p>
      </button>
    `).join("")
    : `<p class="poetry-catalog-empty">No poetry accessions match “${query}”.</p>`;
}

function renderPoetryCatalog(query = "") {
  dialogContent.innerHTML = `
    <article class="poetry-catalog-record">
      <header>
        <div>
          <p class="eyebrow">Public reading room</p>
          <h2>Poetry catalog</h2>
        </div>
        <p class="poetry-catalog-intro">${Object.keys(poems).length} works currently available for consultation.</p>
      </header>
      <div class="poetry-sort" aria-label="Poetry catalog order">
        <button type="button" data-poetry-sort="alphabetical" aria-pressed="${poetryCatalogSort === "alphabetical"}">Alphabetical</button>
        <button type="button" data-poetry-sort="manuscript" aria-pressed="${poetryCatalogSort === "manuscript"}">Manuscript sequence</button>
      </div>
      <input class="poetry-catalog-search" type="search" value="${query.replace(/"/g, "&quot;")}" placeholder="Search by title or words from a poem" aria-label="Search poetry catalog">
      <div class="poetry-catalog-list">${poetryCatalogMarkup(query)}</div>
    </article>
  `;

  if (!recordDialog.open) recordDialog.showModal();
  const field = dialogContent.querySelector(".poetry-catalog-search");
  const list = dialogContent.querySelector(".poetry-catalog-list");
  field.addEventListener("input", event => {
    list.innerHTML = poetryCatalogMarkup(event.target.value);
  });
}

function configureFeaturedPoem() {
  const ids = Object.keys(poems);
  const dayNumber = Math.floor(Date.now() / 86400000);
  const id = ids[dayNumber % ids.length];
  const button = document.querySelector("#featured-poem");
  const title = document.querySelector("#featured-poem-title");
  const count = document.querySelector("#poem-count");
  button.dataset.poem = id;
  title.textContent = poems[id].title;
  count.textContent = String(ids.length);
}

function renderTimeline(era) {
  const timeline = document.querySelector("[data-timeline]");
  timeline.innerHTML = timelineEras[era].map(event => `
    <article class="timeline-event">
      <time>${event.date}</time>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
    </article>
  `).join("");
}

function selectNation(id) {
  const nation = nations[id];
  const map = document.querySelector("#nation-map");
  document.querySelector("#nation-code").textContent = nation.code;
  document.querySelector("#nation-name").textContent = nation.name;
  document.querySelector("#nation-summary").textContent = nation.summary;
  document.querySelector("#nation-holdings").innerHTML = nation.holdings.map(item => `<span>${item}</span>`).join("");

  map.style.opacity = "0";
  window.setTimeout(() => {
    map.src = nation.image || (id === "thicket" ? "assets/map-thicket.png" : "assets/map-grynd.png");
    map.alt = nation.alt || `Provisional geographic reference displayed while the ${nation.name} record is processed`;
    map.style.filter = nation.image ? "" : "grayscale(1) sepia(.5) opacity(.45)";
    map.style.opacity = "1";
  }, 180);

  document.querySelectorAll("[data-nation]").forEach(button => {
    button.classList.toggle("active", button.dataset.nation === id);
  });
}

function renderSearch(query = "") {
  const clean = query.trim().toLowerCase();
  const matches = clean
    ? catalogEntries.filter(entry => `${entry.title} ${entry.category} ${entry.text}`.toLowerCase().includes(clean))
    : catalogEntries.slice(0, 8);

  searchResults.innerHTML = matches.length
    ? matches.map(entry => `
      <button class="search-result" type="button" data-result="${entry.id}">
        <strong>${entry.title}</strong>
        <span>${entry.category}</span>
      </button>
    `).join("")
    : `<p class="search-empty">No catalog records match “${query}”. Some collections may still be unprocessed.</p>`;
}

function openSearch() {
  renderSearch("");
  searchDialog.showModal();
  window.setTimeout(() => searchInput.focus(), 20);
}

document.querySelectorAll("[data-record]").forEach(button => {
  button.addEventListener("click", () => renderRecord(button.dataset.record));
});

document.querySelectorAll("[data-poem]").forEach(button => {
  button.addEventListener("click", () => renderPoem(button.dataset.poem));
});

document.querySelectorAll("[data-open-poetry]").forEach(button => {
  button.addEventListener("click", () => renderPoetryCatalog());
});

dialogContent.addEventListener("click", event => {
  const poemButton = event.target.closest("[data-catalog-poem]");
  if (poemButton) renderPoem(poemButton.dataset.catalogPoem);
  if (event.target.closest("[data-return-poetry]")) renderPoetryCatalog();
  const sortButton = event.target.closest("[data-poetry-sort]");
  if (sortButton) {
    poetryCatalogSort = sortButton.dataset.poetrySort;
    const query = dialogContent.querySelector(".poetry-catalog-search")?.value || "";
    renderPoetryCatalog(query);
  }
});

document.querySelectorAll("[data-era]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-era]").forEach(tab => tab.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    renderTimeline(button.dataset.era);
  });
});

document.querySelectorAll("[data-nation]").forEach(button => {
  button.addEventListener("click", () => selectNation(button.dataset.nation));
});

document.querySelectorAll("[data-open-search]").forEach(button => {
  button.addEventListener("click", openSearch);
});

document.querySelectorAll("dialog .dialog-close").forEach(button => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

[recordDialog, searchDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
});

searchInput.addEventListener("input", event => renderSearch(event.target.value));

searchResults.addEventListener("click", event => {
  const result = event.target.closest("[data-result]");
  if (!result) return;
  const id = result.dataset.result;
  searchDialog.close();

  if (id.startsWith("nation:")) {
    selectNation(id.split(":")[1]);
    document.querySelector("#nations").scrollIntoView();
  } else if (id.startsWith("poem:")) {
    renderPoem(id.slice(5));
  } else if (records[id]) {
    renderRecord(id);
  } else if (id === "timeline") {
    document.querySelector("#chronology").scrollIntoView();
  } else if (id === "names") {
    document.querySelector(".names-section").scrollIntoView();
  }
});

menuButton.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

primaryNav.addEventListener("click", event => {
  if (event.target.matches("a")) {
    primaryNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !event.metaKey && !event.ctrlKey && document.activeElement.tagName !== "INPUT") {
    event.preventDefault();
    if (!searchDialog.open) openSearch();
  }
  if (event.key === "Escape" && primaryNav.classList.contains("open")) {
    primaryNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

renderTimeline("foundations");
configureFeaturedPoem();
