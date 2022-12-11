import "./ProfessionalModal.scss";

const ProfessionalModal = ({ isOpen, onClose, imageData }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">

          <div className="modal-container">
            <img 
              src={require("../../assets" + imageData.profile_picture)}
              alt="profile portrait"
            />
            <h3>{imageData.first_name} {imageData.last_name}</h3>
            <span>[{imageData.job_title}]</span>
            <p>{imageData.description}</p>
            <button onClick={onClose}>X</button>
          </div>
          
        </div>
      )}
    </>
  );
};
export default ProfessionalModal;
