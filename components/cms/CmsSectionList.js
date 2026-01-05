import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SectionItem({ section, index, onEdit }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: section.idsection });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        background: "#ffffff",
        borderRadius: 14,
        border: isDragging ? "2px solid #2563eb" : "1px solid #e5e7eb",
        padding: "16px 18px",
        marginBottom: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: isDragging
          ? "0 20px 40px rgba(37,99,235,0.25)"
          : "0 6px 14px rgba(0,0,0,0.06)",
      }}
    >
      {/* LEFT */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* DRAG HANDLE */}
        <div
          {...attributes}
          {...listeners}
          style={{
            cursor: "grab",
            padding: 6,
            borderRadius: 6,
            background: "#f3f4f6",
            color: "#6b7280",
            fontSize: 18,
          }}
        >
          ☰
        </div>

        {/* ORDER */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#e0e7ff",
            color: "#1e3a8a",
            fontSize: 13,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {index + 1}
        </div>

        {/* TITLE */}
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "#111827",
              maxWidth: 420,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {section.section_title}
          </div>

          {/* TYPE BADGE */}
          <div
            style={{
              marginTop: 4,
              fontSize: 11,
              fontWeight: 700,
              color:
                section.section_type === "note"
                  ? "#92400e"
                  : "#1e40af",
              background:
                section.section_type === "note"
                  ? "#fef3c7"
                  : "#e0e7ff",
              display: "inline-block",
              padding: "3px 8px",
              borderRadius: 999,
            }}
          >
            {section.section_type || "content"}
          </div>
        </div>
      </div>

      {/* EDIT */}
      <button
        onClick={() => onEdit(section)}
        style={{
          background: "#2563eb",
          color: "#fff",
          border: "none",
          padding: "8px 18px",
          borderRadius: 10,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default function CmsSectionList({ sections, onReorder, onEdit }) {
  const sensors = useSensors(useSensor(PointerSensor));

  const onDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex(i => i.idsection === active.id);
    const newIndex = sections.findIndex(i => i.idsection === over.id);

    onReorder(
      arrayMove(sections, oldIndex, newIndex).map((s, i) => ({
        ...s,
        section_order: i + 1,
      }))
    );
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
    >
      <SortableContext
        items={sections.map(s => s.idsection)}
        strategy={verticalListSortingStrategy}
      >
        {sections.map((s, i) => (
          <SectionItem key={s.idsection} section={s} index={i} onEdit={onEdit} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
