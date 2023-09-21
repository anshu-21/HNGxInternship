/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ImageBox = ({ photo }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: photo.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="rounded-md border pb-3 overflow-hidden"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <img src={photo.src.portrait} alt={photo.alt} />

      <h3 className="mt-1 px-1 font-medium">{photo.photographer}</h3>
    </div>
  );
};

export default ImageBox;
