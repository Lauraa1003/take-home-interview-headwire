import "./Professionals.scss";
import professionals from "./sample.json";
import { useState } from "react";
import Modal from "../ProfessionalModal/ProfessionalModal";

const Professionals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageData, setImageData] = useState([]);

  return (
    <div className="professional-section">
      <div className="head-text">
        <span>[ OUR PROFESSIONALS ]</span>
        <h3>Meet Our Skilled Team</h3>
        <div className="underline"></div>
      </div>

      <div className="carousel">
        <div className="carousel-slides">
          {/*slice method used to create a new array displaying only 5 elements in each slide*/}
          {professionals
            .slice(currentIndex * 5, (currentIndex + 1) * 5)
            .map((professional, index) => (
              <div className="card-wrap">
                <img
                  src={require("../../assets" + professional.profile_picture)}
                  alt="profile portrait"
                />

                {/* info is only shown when hovered + opens modal when clicked */}
                <div className="card-info" onClick={() => {
                    setImageData(professional);
                    setIsModalOpen(true);
                }}>
                  <h4 className="professional-name">{`${professional.first_name} ${professional.last_name}`}</h4>
                  <span className="plus">+</span>
                  <h5 className="job-title">[{professional.job_title}]</h5>
                </div>
              </div>
            ))}
        </div>

        <div class="slide-btns">
            {/* Update currentIndex to show the current slide*/}
            <button className={currentIndex === 0 ? 'active' : ''} onClick={() => setCurrentIndex(0)}>.</button>
            <button className={currentIndex === 1 ? 'active' : ''} onClick={() => setCurrentIndex(1)}>.</button>
            <button className={currentIndex === 2 ? 'active' : ''} onClick={() => setCurrentIndex(2)}>.</button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageData={imageData}
        />
      </div>
    </div>
  );
};

export default Professionals;
