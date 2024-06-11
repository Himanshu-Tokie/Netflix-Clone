import React from 'react';
import './style.css'

interface GoTopProps {
    showGoTop: string;
    scrollUp: () => void;
  }

const GoTop: React.FC<GoTopProps> = (props) => {
  return (
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          id="btn-back-to-top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
  );
};

export default GoTop;
