const subjects = [
  {
    id: "general",
    title: "Obecné nástroje",
    teachers: ["Jmeno, prijmeni"],
    pinned: true,
    enrollment: {
      visibility: "default",
      allowedGroups: [],
      allowedStudents: []
    },
    updates: {
      taskSummary: "No tasks due",
      unseenCount: 0
    },
    tools: [
      {
        title: "AI poznámky z výkladu",
        description: "Nahrávky hodin a studijní podklady.",
        href: "#"
      }
    ]
  },
  {
    id: "history",
    title: "Historie",
    teachers: ["Jmeno, prijmeni"],
    pinned: false,
    enrollment: {
      visibility: "assigned",
      allowedGroups: [],
      allowedStudents: []
    },
    updates: {
      taskSummary: "No tasks due",
      unseenCount: 0
    },
    tools: [
      {
        title: "Interaktivní časová osa",
        description: "Tematické časové osy s doplňováním přímo v událostech.",
        href: "../../Nastroje do hodin/Casova osa historie/casova-osa-historie.html"
      }
    ]
  },
  {
    id: "music",
    title: "Hudební výchova",
    teachers: ["Jmeno, prijmeni"],
    pinned: false,
    enrollment: {
      visibility: "assigned",
      allowedGroups: [],
      allowedStudents: []
    },
    updates: {
      taskSummary: "No tasks due",
      unseenCount: 0
    },
    tools: [
      {
        title: "Detekce hraných not",
        description: "Rozpoznávání tónů a příprava cvičení.",
        href: "#"
      }
    ]
  },
  {
    id: "physics",
    title: "Fyzika",
    teachers: ["Jmeno, prijmeni"],
    pinned: false,
    enrollment: {
      visibility: "assigned",
      allowedGroups: [],
      allowedStudents: []
    },
    updates: {
      taskSummary: "No tasks due",
      unseenCount: 0
    },
    tools: [
      {
        title: "Fyzikální simulace",
        description: "Pohyb, síly, optika a elektřina.",
        href: "#"
      }
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
  const toolText = subject.tools.map((tool) => `${tool.title} ${tool.description}`).join(" ");
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
  if (subjectId === "all") {
    renderSubjects();
  }
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

  const query = search.value.trim().toLowerCase();
  const filteredTools = subject.tools.filter((tool) => `${tool.title} ${tool.description}`.toLowerCase().includes(query));

  subjectTitle.textContent = subject.title;
  backButton.classList.add("is-visible");
  grid.innerHTML = "";

  if (filteredTools.length === 0) {
    renderEmpty("V tomto předmětu není nástroj pro zadaný filtr.");
    return;
  }

  filteredTools.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "class-card tool-card";
    card.innerHTML = `
      <div class="card-banner ${subject.id}">
        <h2>${tool.title}</h2>
        <p>${subject.title}</p>
      </div>
      <div class="card-body">
        <p>${tool.description}</p>
        <a class="open-tool" href="${tool.href}">${tool.href === "#" ? "Připravuje se" : "Otevřít"}</a>
      </div>
    `;
    grid.append(card);
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
