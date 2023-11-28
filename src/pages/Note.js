import ContainerFrame from "../components/ContainerFrame";
import SectionCard from "../components/SectionCard";
import "./Note.css";

const Note = () => {
  return (
    <div className="note">
      <ContainerFrame />
      <div className="frame">
        <div className="frame-child" />
        <SectionCard />
        <div className="title-parent">
          <div className="title">Title</div>
          <div className="line-parent">
            <div className="frame-item" />
            <div className="take-a-note">Take a note...</div>
          </div>
          <div className="add-a-note-wrapper">
            <div className="add-a-note">Add a Note</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
