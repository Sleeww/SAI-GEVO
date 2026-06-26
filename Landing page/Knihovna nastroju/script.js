const historyTimelines = [
  {
    id: "samet",
    title: "Sametová revoluce a bezprostřední následky",
    category: "Sametová revoluce",
    period: "1988-1993",
    from: 1988,
    to: 1993,
    description: "Události vedoucí k pádu komunistického režimu.",
    href: "../../Nastroje do hodin/Casova osa historie/casova-osa-historie.html?timeline=samet"
  },
  {
    id: "ww1",
    title: "Jak začala první světová válka",
    category: "WW1",
    period: "1879-1914",
    from: 1879,
    to: 1914,
    description: "Dlouhodobé napětí, alianční systém a červencová krize.",
    href: "../../Nastroje do hodin/Casova osa historie/casova-osa-historie.html?timeline=ww1"
  },
  {
    id: "husite",
    title: "Husitské války",
    category: "Husitství",
    period: "1402-1436",
    from: 1402,
    to: 1436,
    description: "Od reformní kritiky církve po basilejská kompaktáta.",
    href: "../../Nastroje do hodin/Casova osa historie/casova-osa-historie.html?timeline=husite"
  },
  {
    id: "ww2",
    title: "Cesta ke druhé světové válce",
    category: "WW2",
    period: "1919-1939",
    from: 1919,
    to: 1939,
    description: "Vybrané meziválečné události před vypuknutím války.",
    href: "../../Nastroje do hodin/Casova osa historie/casova-osa-historie.html?timeline=ww2"
  }
];

const subjects = [
  {
    id: "general",
    title: "Obecné nástroje",
    teachers: ["Jmeno, prijmeni"],
    pinned: true,
    enrollment: { visibility: "default", allowedGroups: [], allowedStudents: [] },
    updates: { taskSummary: "No tasks due", unseenCount: 0 },
    tools: [
      { title: "AI poznámky z výkladu", description: "Nahrávky hodin a studijní podklady.", href: "#" }
    ]
  },
  {
    id: "history",
    title: "Historie",
    teachers: ["Jmeno, prijmeni"],
    pinned: false,
    enrollment: { visibility: "assigned", allowedGroups: [], allowedStudents: [] },
    updates: { taskSummary: "No tasks due", unseenCount: 0 },
    tools: historyTimelines
  },
  {
    id: "music",
    title: "Hudební výchova",
    teachers: ["Jmeno, prijmeni"],
    pinned: false,
    enrollment: { visibility: "assigned", allowedGroups: [], allowedStudents: [] },
    updates: { taskSummary: "No tasks due", unseenCount: 0 },
    tools: [
      { title: "Detekce hraných not", description: "Rozpoznávání tónů a příprava cvičení.", href: "#" }
    ]
  },
  {
    id: "physics",
    title: "Fyzika",
    teachers: ["Jmeno, prijmeni"],
    pinned: false,
    enrollment: { visibility: "assigned", allowedGroups: [], allowedStudents: [] },
    updates: { taskSummary: "No tasks due", unseenCount: 0 },
    tools: [
      { title: "Fyzikální simulace", description: "Pohyb, síly, optika a elektřina.", href: "#" }
    ]
  }
];

const grid = document.querySelector("#class-grid");
const search = document.querySelector("#tool-search");
const subjectList = document.querySelector("#subject-list");
const backButton = document.querySelector("#back-to-subjects");
const subjectTitle = document.querySelector("#subject-title");

let activeSubject = "all";
let openSubjectId = null;
let historyFilters = { category: "all", from: "", to: "" };

function sortedSubjects() {
  return [...subjects].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return a.title.localeCompare(b.title, "cs");
  });
}

function teacherLine(subject) {
  return subject.teachers.join(", ");
}

function getSearchQuery() {
  return search.value.trim().toLowerCase();
}

function subjectMatchesQuery(subject, query) {
  const toolText = subject.tools.map((tool) => `${tool.title} ${tool.description} ${tool.category || ""}`).join(" ");
  const subjectText = `${subject.title} ${teacherLine(subject)} ${subject.updates.taskSummary} ${toolText}`;
  return subjectText.toLowerCase().includes(query);
}

function visibleSubjects() {
  const query = getSearchQuery();
  return sortedSubjects().filter((subject) => {
    const matchesSidebar = activeSubject === "all" || subject.id === activeSubject;
    return matchesSidebar && subjectMatchesQuery(subject, query);
  });
}

function renderSidebar() {
  subjectList.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.className = "subject-pill";
  allButton.type = "button";
  allButton.dataset.subject = "all";
  allButton.textContent = "Všechny předměty";
  allButton.addEventListener("click", () => selectSubjectFilter("all"));
  subjectList.append(allButton);

  sortedSubjects().forEach((subject) => {
    const button = document.createElement("button");
    button.className = "subject-pill";
    button.type = "button";
    button.dataset.subject = subject.id;
    button.textContent = subject.title;
    button.addEventListener("click", () => {
      selectSubjectFilter(subject.id);
      renderSubjectTools(subject.id);
    });
    subjectList.append(button);
  });

  syncSidebarState();
}

function syncSidebarState() {
  subjectList.querySelectorAll(".subject-pill").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.subject === activeSubject);
  });
}

function selectSubjectFilter(subjectId) {
  activeSubject = subjectId;
  syncSidebarState();
  if (subjectId === "all") renderSubjects();
}

function renderSubjects() {
  openSubjectId = null;
  subjectTitle.textContent = "";
  backButton.classList.remove("is-visible");
  grid.innerHTML = "";

  const filtered = visibleSubjects();
  if (filtered.length === 0) {
    renderEmpty("Žádný předmět neodpovídá filtru.");
    return;
  }

  filtered.forEach((subject) => {
    const card = document.createElement("button");
    card.className = "class-card subject-card";
    card.type = "button";
    card.innerHTML = `
      <div class="card-banner ${subject.id}">
        <h2>${subject.title}</h2>
        <p>${teacherLine(subject)}</p>
      </div>
      <div class="card-body">
        <p>${subject.updates.taskSummary}</p>
        <span class="open-tool">${subject.tools.length} ${subject.tools.length === 1 ? "nástroj" : "nástroje"}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      activeSubject = subject.id;
      syncSidebarState();
      renderSubjectTools(subject.id);
    });
    grid.append(card);
  });
}

function renderSubjectTools(subjectId) {
  openSubjectId = subjectId;
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject) return;

  subjectTitle.textContent = subject.title;
  backButton.classList.add("is-visible");
  grid.innerHTML = "";

  if (subjectId === "history") renderHistoryFilters();

  const filteredTools = filterTools(subject);
  if (filteredTools.length === 0) {
    renderEmpty("V tomto předmětu není položka pro zadaný filtr.");
    return;
  }

  filteredTools.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "class-card tool-card";
    card.innerHTML = `
      <div class="card-banner ${subject.id}">
        <h2>${tool.title}</h2>
        <p>${tool.period || subject.title}</p>
      </div>
      <div class="card-body">
        <p>${tool.description}</p>
        <a class="open-tool" href="${tool.href}">${tool.href === "#" ? "Připravuje se" : "Otevřít"}</a>
      </div>
    `;
    grid.append(card);
  });
}

function filterTools(subject) {
  const query = getSearchQuery();
  return subject.tools.filter((tool) => {
    const text = `${tool.title} ${tool.description} ${tool.category || ""} ${tool.period || ""}`.toLowerCase();
    const matchesQuery = text.includes(query);
    if (subject.id !== "history") return matchesQuery;

    const from = historyFilters.from ? Number(historyFilters.from) : -Infinity;
    const to = historyFilters.to ? Number(historyFilters.to) : Infinity;
    const matchesCategory = historyFilters.category === "all" || tool.category === historyFilters.category;
    const matchesYears = tool.to >= from && tool.from <= to;
    return matchesQuery && matchesCategory && matchesYears;
  });
}

function renderHistoryFilters() {
  const filters = document.createElement("section");
  filters.className = "class-filters";
  filters.innerHTML = `
    <label>
      Kategorie
      <select id="history-category">
        <option value="all">Všechny kategorie</option>
      </select>
    </label>
    <label>
      Od roku
      <input id="history-from" type="number" inputmode="numeric" value="${historyFilters.from}">
    </label>
    <label>
      Do roku
      <input id="history-to" type="number" inputmode="numeric" value="${historyFilters.to}">
    </label>
  `;
  grid.append(filters);

  const categorySelect = filters.querySelector("#history-category");
  [...new Set(historyTimelines.map((timeline) => timeline.category))]
    .sort((a, b) => a.localeCompare(b, "cs"))
    .forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categorySelect.append(option);
    });
  categorySelect.value = historyFilters.category;

  categorySelect.addEventListener("change", (event) => {
    historyFilters.category = event.target.value;
    renderSubjectTools("history");
  });
  filters.querySelector("#history-from").addEventListener("input", (event) => {
    historyFilters.from = event.target.value;
    renderSubjectTools("history");
  });
  filters.querySelector("#history-to").addEventListener("input", (event) => {
    historyFilters.to = event.target.value;
    renderSubjectTools("history");
  });
}

function renderEmpty(message) {
  const empty = document.createElement("p");
  empty.className = "empty-state";
  empty.textContent = message;
  grid.append(empty);
}

search.addEventListener("input", () => {
  if (openSubjectId) {
    renderSubjectTools(openSubjectId);
    return;
  }
  renderSubjects();
});

backButton.addEventListener("click", () => {
  activeSubject = "all";
  syncSidebarState();
  renderSubjects();
});

renderSidebar();
renderSubjects();
