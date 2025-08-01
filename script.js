function appendItems(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  const newItems = input.value
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter((item) => item !== "");

  newItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  input.value = ""; // Clear after appending
}

// Updated getItems to use the current list items
function getItems(listId) {
  const list = document.getElementById(listId);
  return Array.from(list.getElementsByTagName("li")).map((li) =>
    li.textContent.trim().toLowerCase()
  );
}

function showIntersection() {
  const a = getItems("listA");
  const b = getItems("listB");

  const intersection = a.filter((item) => b.includes(item));
  document.getElementById("results").textContent =
    "🔁 Intersection item  (common items):\n" +
    (intersection.length ? intersection.join(", ") : "None");
}

function showUnion() {
  const a = getItems("listA");
  const b = getItems("listB");

  const union = [...new Set([...a, ...b])];
  document.getElementById("results").textContent =
    "➕ Union item (all unique items):\n" +
    (union.length ? union.join(", ") : "None");
}

function showUnavailable() {
  const a = getItems("listA");
  const b = getItems("listB");

  const onlyInA = a.filter((item) => !b.includes(item));
  const onlyInB = b.filter((item) => !a.includes(item));

  document.getElementById("results").textContent =
    "🚫  Items only in A (A / B):\n" +
    (onlyInA.length ? onlyInA.join(", ") : "None") +
    "\n\n🚫 Items only in B (B / A):\n" +
    (onlyInB.length ? onlyInB.join(", ") : "None");
}
function showDisjoint() {
  const a = getItems("listA");
  const b = getItems("listB");

  const common = a.filter((item) => b.includes(item));
  const disjoint = common.length === 0;

  document.getElementById("results").textContent =
    "❌ Disjoint result:\n" +
    (disjoint
      ? "Yes, both sets are disjoint (no common items)."
      : "No, they share some common items.");
}

function showComplement() {
  const a = getItems("listA");
  const b = getItems("listB");

  const complementA = b.filter((item) => !a.includes(item));
  const complementB = a.filter((item) => !b.includes(item));

  document.getElementById("results").textContent =
    "➖ A's Complement  (B \\ A):\n" +
    (complementA.length ? complementA.join(", ") : "None") +
    "\n\n➖ B's Complement  (A \\ B):\n" +
    (complementB.length ? complementB.join(", ") : "None");
}
