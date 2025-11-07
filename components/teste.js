
// app/(dashboard)/notebooks/page.js
"use client";

import { useId, useState } from "react";

/**
 * EXAMPLE DATA
 * Each notebook is its own component with its own expand/collapse state.
 */
const notebooksData = [
  {
    id: "nb-1",
    title: "Caderno 1",
    notes: ["Anotação 1", "Anotação 2", "Anotação 3"],
  },
  {
    id: "nb-2",
    title: "Caderno 2",
    notes: ["Anotação 1", "Anotação 2"],
  },
  {
    id: "nb-3",
    title: "Caderno 3",
    notes: ["Rascunho", "Ideias"],
  },
];

/**
 * Small chevron icon that rotates when open
 */
function Chevron({ open }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        transition: "transform 200ms ease",
        transform: open ? "rotate(90deg)" : "rotate(0deg)",
      }}
    >
      ▶
    </span>
  );
}

/**
 * Accessible collapsible "section"
 * - Renders a button with aria-expanded
 * - Hides/shows the panel (ul) with aria-controls
 */
function Collapsible({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <li style={{ listStyle: "none", margin: 0 }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: 0,
          padding: "8px 6px",
          cursor: "pointer",
          borderRadius: 8,
        }}
        onKeyDown={(e) => {
          // optional keyboard niceties
          if (e.key === "ArrowRight") setOpen(true);
          if (e.key === "ArrowLeft") setOpen(false);
        }}
      >
        <Chevron open={open} />
        <strong>{title}</strong>
      </button>

      <ul
        id={panelId}
        hidden={!open}
        style={{
          marginLeft: 20,
          marginTop: 4,
          marginBottom: 6,
          paddingLeft: 10,
          borderLeft: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        {children}
      </ul>
    </li>
  );
}

/**
 * NOTE COMPONENT (leaf)
 */
function NoteItem({ text }) {
  return (
    <li
      style={{
        listStyle: "none",
        padding: "6px 4px",
        borderRadius: 6,
      }}
    >
      {text}
    </li>
  );
}

/**
 * NOTEBOOK COMPONENT
 * Each notebook manages its own expand/collapse state via Collapsible.
 */
function Notebook({ title, notes }) {
  return (
    <Collapsible title={title} defaultOpen={false}>
      {notes.map((n, idx) => (
        <NoteItem key={idx} text={n} />
      ))}
    </Collapsible>
  );
}

/**
 * ROOT PAGE
 * Top-level "Notebooks" item can expand to show the list of notebooks.
 */
export default function NotebooksComp() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "40px auto",
        padding: "0 16px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}
    >
      <h1 style={{ marginBottom: 12 }}>Notebooks</h1>

      <ul style={{ margin: 0, padding: 0 }}>
        {/* Top-level collapsible for the whole notebooks group */}
        <Collapsible title="Notebooks" defaultOpen>
          {notebooksData.map((nb) => (
            <Notebook key={nb.id} title={nb.title} notes={nb.notes} />
          ))}
        </Collapsible>
      </ul>

      {/* Example: place to render the selected note later */}
      {/* You could use state/context/router to show note content on the right */}
    </main>
  );
}
