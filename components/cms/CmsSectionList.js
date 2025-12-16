import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function CmsSectionList({ sections, onReorder }) {

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    onReorder(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="sections">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {sections.map((section, index) => (
              <Draggable
                key={section.section_uid}
                draggableId={String(section.section_uid)}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="cms-section-card"
                  >
                    <h4>{section.section_title}</h4>
                    <div
                      className="cms-section-preview"
                      dangerouslySetInnerHTML={{ __html: section.section_content }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
