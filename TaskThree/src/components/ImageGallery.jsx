/* eslint-disable react/prop-types */
import ImageBox from "./ImageBox";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";

const ImageGallery = ({ photos, setPhotos }) => {
  const onDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) {
      return;
    }
    setPhotos((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-10 mt-5 px-3">
      {photos.length == 0 ? (
        <p className="text-xl font-semibold">No Image Found</p>
      ) : (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={photos} strategy={rectSwappingStrategy}>
            {photos.map((photo) => (
              <ImageBox key={photo.id} photo={photo} />
            ))}
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
};

export default ImageGallery;
