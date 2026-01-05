import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  SortableContext,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

function SortableItem({ section }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.idsection });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}
      className="sortable-section">
      <strong>{section.section_title}</strong>
    </div>
  );
}

export default function SectionList({ sections, setSections, page_uid }) {

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = sections.findIndex(s => s.idsection === active.id);
      const newIndex = sections.findIndex(s => s.idsection === over.id);

      const newOrder = arrayMove(sections, oldIndex, newIndex);
      setSections(newOrder);

      // save order
      for (let i = 0; i < newOrder.length; i++) {
        await fetch("/api/cms/admin/sections", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idsection: newOrder[i].idsection,
            section_order: i + 1,
          }),
        });
      }
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={sections.map(s => s.idsection)}>
        {sections.map(section => (
          <SortableItem key={section.idsection} section={section} />
        ))}
      </SortableContext>
    </DndContext>
  );
}
