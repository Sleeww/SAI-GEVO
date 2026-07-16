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

const subjectSeed = [
  { id: "general", title: "Obecné nástroje", pinned: true, teachers: ["Jmeno, prijmeni"], tools: [{ title: "AI poznámky z výkladu", description: "Nahrávky hodin a studijní podklady.", href: "#" }] },
  { id: "anglicky", title: "Anglický jazyk", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "biologie", title: "Biologie", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "cesky", title: "Český jazyk", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "filosofie", title: "Filosofie", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "fyzika", title: "Fyzika", teachers: ["Jmeno, prijmeni"], tools: [{ title: "Fyzikální simulace", description: "Pohyb, síly, optika a elektřina.", href: "#" }] },
  { id: "geografie", title: "Geografie", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "geologie", title: "Geologie", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "historie", title: "Historie", teachers: ["Jmeno, prijmeni"], tools: historyTimelines },
  { id: "chemie", title: "Chemie", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "literatura", title: "Literatura", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "matematika", title: "Matematika", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "nemecky", title: "Německý jazyk", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "socialni", title: "Sociální výchova", teachers: ["Jmeno, prijmeni"], tools: [] },
  { id: "hudebni", title: "Hudební výchova", teachers: ["Jmeno, prijmeni"], tools: [{ title: "Detekce hraných not", description: "Rozpoznávání tónů a příprava cvičení.", href: "#" }] }
];

const subjects = subjectSeed.map((subject) => ({
  pinned: false,
  enrollment: { visibility: subject.pinned ? "default" : "assigned", allowedGroups: [], allowedStudents: [] },
  updates: { taskSummary: "No tasks due", unseenCount: 0 },
  ...subject
}));

const users = [
  { username: "ucitel.prijmeni", password: "ucitel.prijmeni", role: "teacher", name: "Jmeno, prijmeni" },
  { username: "student1.prijmeni", password: "student1.prijmeni", role: "student", name: "Student 1, prijmeni", className: "prima" },
  { username: "student2.prijmeni", password: "student2.prijmeni", role: "student", name: "Student 2, prijmeni", className: "sekunda" },
  { username: "student3.prijmeni", password: "student3.prijmeni", role: "student", name: "Student 3, prijmeni", className: "tercie" },
  { username: "student4.prijmeni", password: "student4.prijmeni", role: "student", name: "Student 4, prijmeni", className: "kvarta" },
  { username: "student5.prijmeni", password: "student5.prijmeni", role: "student", name: "Student 5, prijmeni", className: "kvinta" },
  { username: "student6.prijmeni", password: "student6.prijmeni", role: "student", name: "Student 6, prijmeni", className: "sexta" },
  { username: "student7.prijmeni", password: "student7.prijmeni", role: "student", name: "Student 7, prijmeni", className: "septima" },
  { username: "student8.prijmeni", password: "student8.prijmeni", role: "student", name: "Student 8, prijmeni", className: "IB1" },
  { username: "student9.prijmeni", password: "student9.prijmeni", role: "student", name: "Student 9, prijmeni", className: "oktava" },
  { username: "student10.prijmeni", password: "student10.prijmeni", role: "student", name: "Student 10, prijmeni", className: "IB2" }
];

const defaultAssignments = {
  "student1.prijmeni": ["general", "historie", "matematika", "cesky"],
  "student2.prijmeni": ["general", "historie", "anglicky", "biologie"],
  "student3.prijmeni": ["general", "matematika", "chemie", "fyzika"],
  "student4.prijmeni": ["general", "nemecky", "geografie", "socialni"],
  "student5.prijmeni": ["general", "literatura", "matematika", "fyzika"],
  "student6.prijmeni": ["general", "chemie", "biologie", "geologie"],
  "student7.prijmeni": ["general", "historie", "filosofie", "socialni"],
  "student8.prijmeni": ["general", "anglicky", "literatura", "historie"],
  "student9.prijmeni": ["general", "matematika", "fyzika", "chemie"],
  "student10.prijmeni": ["general", "anglicky", "filosofie", "geografie"]
};

const classOrder = ["prima", "sekunda", "tercie", "kvarta", "kvinta", "sexta", "septima", "IB1", "oktava", "IB2"];

const grid = document.querySelector("#class-grid");
const search = document.querySelector("#tool-search");
const subjectList = document.querySelector("#subject-list");
const backButton = document.querySelector("#back-to-subjects");
const subjectTitle = document.querySelector("#subject-title");
const libraryTitle = document.querySelector("#library-title");
const libraryEyebrow = document.querySelector("#library-eyebrow");
const themeToggle = document.querySelector("#theme-toggle");
const topTabs = document.querySelector("#top-tabs");
const loginForm = document.querySelector("#login-form");
const loginError = document.querySelector("#login-error");
const userChip = document.querySelector("#user-chip");
const signOutButton = document.querySelector("#sign-out");
const factoryResetButton = document.querySelector("#factory-reset");

let activeSubject = "all";
let openSubjectId = null;
let activeMainTab = "subjects";
let historyFilters = { category: "all", from: "", to: "" };
let currentUser = getStoredUser();

const storedTheme = localStorage.getItem("sai-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(storedTheme || (prefersDark ? "dark" : "light"));
ensureAssignments();
renderAuthState();

function ensureAssignments() {
  const stored = localStorage.getItem("sai-assignments");
  const assignments = stored ? JSON.parse(stored) : {};
  let changed = !stored;

  Object.entries(defaultAssignments).forEach(([username, subjectsForStudent]) => {
    if (!assignments[username]) {
      assignments[username] = subjectsForStudent;
      changed = true;
    }
  });

  if (changed) localStorage.setItem("sai-assignments", JSON.stringify(assignments));
}

function getAssignments() {
  ensureAssignments();
  return JSON.parse(localStorage.getItem("sai-assignments"));
}

function saveAssignments(assignments) {
  localStorage.setItem("sai-assignments", JSON.stringify(assignments));
}

function getStoredUser() {
  const username = localStorage.getItem("sai-current-user");
  return users.find((user) => user.username === username) || null;
}

function renderAuthState() {
  document.body.classList.toggle("is-authenticated", Boolean(currentUser));
  userChip.textContent = currentUser ? `${currentUser.name} (${currentUser.role})` : "";

  if (!currentUser) return;
  activeSubject = "all";
  openSubjectId = null;
  activeMainTab = "subjects";
  renderSidebar();
  renderTopTabs();
  renderSubjects();
}

function renderTopTabs(subject = null) {
  topTabs.innerHTML = "";
  const tabs = subject
    ? [["stream", "Stream"], ["classwork", "Práce v hodině"], ["students", "Lidé"], ["more", "Další"]]
    : [["subjects", "Předměty"], ...(currentUser?.role === "teacher" ? [["manage", "Správa studentů"]] : [])];

  tabs.forEach(([id, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "top-tab";
    button.classList.toggle("is-active", id === activeMainTab);
    button.textContent = label;
    button.addEventListener("click", () => {
      activeMainTab = id;
      if (subject) renderSubjectTools(subject.id);
      else renderSubjects();
    });
    topTabs.append(button);
  });
}

function visibleSubjectPool() {
  if (!currentUser || currentUser.role === "teacher") return subjects;
  const assigned = new Set(getAssignments()[currentUser.username] || ["general"]);
  return subjects.filter((subject) => subject.pinned || assigned.has(subject.id));
}

function sortedSubjects(list = visibleSubjectPool()) {
  return [...list].sort((a, b) => {
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
  allButton.textContent = currentUser?.role === "teacher" ? "Přehled učitele" : "Všechny předměty";
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
    activeMainTab = "subjects";
    renderTopTabs();
    renderSubjects();
  }
}

function renderSubjects() {
  openSubjectId = null;
  subjectTitle.textContent = "";
  libraryEyebrow.textContent = activeMainTab === "manage" ? "Správa" : "Školní učebny";
  libraryTitle.textContent = activeMainTab === "manage" ? "Studenti a předměty" : "Moje předměty";
  backButton.classList.remove("is-visible");
  grid.innerHTML = "";
  renderTopTabs();

  if (currentUser?.role === "teacher" && activeMainTab === "manage") {
    renderTeacherPanel();
    return;
  }

  if (activeMainTab !== "subjects") {
    renderEmpty("Tato sekce je připravená jako prototyp.");
    return;
  }

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
        <span class="open-tool">${subject.tools.length} ${toolCountLabel(subject.tools.length)}</span>
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

function renderTeacherPanel() {
  const panel = document.createElement("section");
  panel.className = "teacher-panel";
  panel.innerHTML = `<h2>Studenti a přiřazené předměty</h2><div class="student-list"></div>`;
  const list = panel.querySelector(".student-list");
  const assignments = getAssignments();
  const studentUsers = users
    .filter((user) => user.role === "student")
    .sort((a, b) => classOrder.indexOf(a.className) - classOrder.indexOf(b.className) || a.name.localeCompare(b.name, "cs"));
  const assignableSubjects = sortedSubjects(subjects.filter((subject) => !subject.pinned));

  classOrder.forEach((className) => {
    const classStudents = studentUsers.filter((student) => student.className === className);
    if (classStudents.length === 0) return;

    const classSection = document.createElement("details");
    classSection.className = "class-group";
    classSection.open = className === "prima";
    classSection.innerHTML = `<summary>${className}</summary>`;

    classStudents.forEach((student) => {
      const row = document.createElement("details");
      row.className = "student-row";
      row.innerHTML = `<summary>${student.name} <span class="muted">${student.username}</span></summary><div class="assignment-grid"></div>`;
      const assignmentGrid = row.querySelector(".assignment-grid");

      assignableSubjects.forEach((subject) => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = (assignments[student.username] || []).includes(subject.id);
        checkbox.addEventListener("change", () => {
          const latest = getAssignments();
          const assigned = new Set(latest[student.username] || ["general"]);
          if (checkbox.checked) assigned.add(subject.id);
          else assigned.delete(subject.id);
          assigned.add("general");
          latest[student.username] = [...assigned];
          saveAssignments(latest);
        });
        label.append(checkbox, subject.title);
        assignmentGrid.append(label);
      });

      classSection.append(row);
    });

    list.append(classSection);
  });

  grid.append(panel);
}

function toolCountLabel(count) {
  if (count === 1) return "nástroj";
  if (count > 1 && count < 5) return "nástroje";
  return "nástrojů";
}

function tabTitle(tabId) {
  const titles = {
    stream: "Stream",
    classwork: "Práce v hodině",
    students: "Lidé",
    more: "Další"
  };
  return titles[tabId] || "";
}

function renderSubjectTools(subjectId) {
  openSubjectId = subjectId;
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject) return;

  libraryEyebrow.textContent = "Předmět";
  libraryTitle.textContent = subject.title;
  backButton.classList.add("is-visible");
  grid.innerHTML = "";
  if (!["stream", "classwork", "students", "more"].includes(activeMainTab)) activeMainTab = "stream";
  subjectTitle.textContent = tabTitle(activeMainTab);
  renderTopTabs(subject);

  if (activeMainTab === "stream") {
    renderClassStream(subject);
    return;
  }

  if (activeMainTab === "students") {
    renderPeople(subject);
    return;
  }

  if (activeMainTab === "more") {
    renderEmpty("Další nastavení a materiály budou doplněny později.");
    return;
  }

  if (subjectId === "historie") renderHistoryFilters();

  const filteredTools = filterTools(subject);
  if (filteredTools.length === 0) {
    renderEmpty("V tomto předmětu zatím nejsou dostupné nástroje.");
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

function renderClassStream(subject) {
  const stream = document.createElement("section");
  stream.className = "stream-panel";
  stream.innerHTML = `
    <h2>${subject.title}</h2>
    <p>${teacherLine(subject)}</p>
    <article class="stream-item">
      <strong>${subject.updates.taskSummary}</strong>
      <span>Nové úkoly a oznámení se zde zobrazí po napojení účtů.</span>
    </article>
  `;
  grid.append(stream);
}

function renderPeople(subject) {
  const panel = document.createElement("section");
  panel.className = "stream-panel";
  const assignments = getAssignments();
  const enrolled = users.filter((user) => user.role === "student" && (assignments[user.username] || []).includes(subject.id));
  panel.innerHTML = `<h2>Lidé</h2><p>${teacherLine(subject)}</p>`;
  enrolled.forEach((student) => {
    const item = document.createElement("article");
    item.className = "stream-item";
    item.innerHTML = `<strong>${student.name}</strong><span>${student.className} · ${student.username}</span>`;
    panel.append(item);
  });
  if (enrolled.length === 0) {
    const empty = document.createElement("article");
    empty.className = "stream-item";
    empty.textContent = "Do tohoto předmětu zatím není přiřazen žádný student.";
    panel.append(empty);
  }
  grid.append(panel);
}

function filterTools(subject) {
  const query = getSearchQuery();
  return subject.tools.filter((tool) => {
    const text = `${tool.title} ${tool.description} ${tool.category || ""} ${tool.period || ""}`.toLowerCase();
    const matchesQuery = text.includes(query);
    if (subject.id !== "historie") return matchesQuery;

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
    renderSubjectTools("historie");
  });
  filters.querySelector("#history-from").addEventListener("input", (event) => {
    historyFilters.from = event.target.value;
    renderSubjectTools("historie");
  });
  filters.querySelector("#history-to").addEventListener("input", (event) => {
    historyFilters.to = event.target.value;
    renderSubjectTools("historie");
  });
}

function renderEmpty(message) {
  const empty = document.createElement("p");
  empty.className = "empty-state";
  empty.textContent = message;
  grid.append(empty);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("sai-theme", theme);
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const username = String(formData.get("username")).trim();
  const password = String(formData.get("password")).trim();
  const user = users.find((candidate) => candidate.username === username && candidate.password === password);

  if (!user) {
    loginError.textContent = "Neplatné přihlašovací údaje.";
    return;
  }

  localStorage.setItem("sai-current-user", user.username);
  currentUser = user;
  loginError.textContent = "";
  loginForm.reset();
  renderAuthState();
});

signOutButton.addEventListener("click", () => {
  localStorage.removeItem("sai-current-user");
  currentUser = null;
  renderAuthState();
});

factoryResetButton.addEventListener("click", () => {
  localStorage.removeItem("sai-assignments");
  ensureAssignments();
  loginError.textContent = "Přiřazení byla obnovena.";
});

search.addEventListener("input", () => {
  if (openSubjectId) {
    renderSubjectTools(openSubjectId);
    return;
  }
  renderSubjects();
});

backButton.addEventListener("click", () => {
  activeSubject = "all";
  activeMainTab = "subjects";
  syncSidebarState();
  renderTopTabs();
  renderSubjects();
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});
