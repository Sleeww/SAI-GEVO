const rooms = [
  { id: "101", name: "101 Učebna", floor: "0", x: 6, y: 18, w: 22, h: 32, kind: "classroom" },
  { id: "aula", name: "Aula", floor: "0", x: 32, y: 18, w: 28, h: 48, kind: "shared" },
  { id: "kabinet", name: "Kabinet", floor: "0", x: 64, y: 18, w: 24, h: 32, kind: "service" },
  { id: "201", name: "201 Fyzika", floor: "1", x: 7, y: 18, w: 24, h: 32, kind: "classroom" },
  { id: "202", name: "202 Seminář", floor: "1", x: 36, y: 18, w: 20, h: 32, kind: "classroom" },
  { id: "sborovna", name: "Sborovna", floor: "1", x: 62, y: 18, w: 26, h: 32, kind: "service" },
  { id: "301", name: "301 Hudebna", floor: "2", x: 7, y: 18, w: 22, h: 32, kind: "shared" },
  { id: "302", name: "302 Historie", floor: "2", x: 35, y: 18, w: 24, h: 32, kind: "classroom" },
  { id: "303", name: "303 Volná učebna", floor: "2", x: 64, y: 18, w: 24, h: 32, kind: "classroom" }
];

const building = document.querySelector("#building");
const floorSelect = document.querySelector("#floor-select");
const searchInput = document.querySelector("#room-search");
const roomList = document.querySelector("#room-list");

let selectedRoomId = rooms[0].id;

function createMap() {
  ["0", "1", "2"].forEach((floorId) => {
    const floor = document.createElement("div");
    floor.className = "floor";
    floor.dataset.floor = floorId;

    rooms
      .filter((room) => room.floor === floorId)
      .forEach((room) => {
        const roomElement = document.createElement("button");
        roomElement.className = `room kind-${room.kind}`;
        roomElement.dataset.roomId = room.id;
        roomElement.textContent = room.name.split(" ")[0];
        roomElement.style.left = `${room.x}%`;
        roomElement.style.top = `${room.y}%`;
        roomElement.style.width = `${room.w}%`;
        roomElement.style.height = `${room.h}%`;
        roomElement.addEventListener("click", () => selectRoom(room.id));
        floor.append(roomElement);
      });

    building.append(floor);
  });
}

function renderList() {
  const query = searchInput.value.trim().toLowerCase();
  const activeFloor = floorSelect.value;
  const visibleRooms = rooms.filter((room) => {
    const matchesFloor = room.floor === activeFloor;
    const matchesSearch = room.name.toLowerCase().includes(query) || room.id.includes(query);
    return matchesFloor && matchesSearch;
  });

  roomList.innerHTML = "";

  visibleRooms.forEach((room) => {
    const button = document.createElement("button");
    button.className = "room-button";
    button.classList.toggle("is-active", room.id === selectedRoomId);
    button.textContent = room.name;
    button.addEventListener("click", () => selectRoom(room.id));
    roomList.append(button);
  });

  if (visibleRooms.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Nic nenalezeno.";
    roomList.append(empty);
  }
}

function updateMap() {
  const activeFloor = floorSelect.value;

  document.querySelectorAll(".floor").forEach((floor) => {
    floor.classList.toggle("is-dimmed", floor.dataset.floor !== activeFloor);
  });

  document.querySelectorAll(".room").forEach((roomElement) => {
    roomElement.classList.toggle("is-highlighted", roomElement.dataset.roomId === selectedRoomId);
  });
}

function selectRoom(roomId) {
  selectedRoomId = roomId;
  const room = rooms.find((item) => item.id === roomId);
  if (room) floorSelect.value = room.floor;
  renderList();
  updateMap();
}

floorSelect.addEventListener("change", () => {
  const firstRoomOnFloor = rooms.find((room) => room.floor === floorSelect.value);
  selectedRoomId = firstRoomOnFloor ? firstRoomOnFloor.id : selectedRoomId;
  renderList();
  updateMap();
});

searchInput.addEventListener("input", renderList);

createMap();
renderList();
updateMap();
