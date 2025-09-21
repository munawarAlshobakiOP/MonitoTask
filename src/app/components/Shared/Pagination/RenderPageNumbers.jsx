import './RenderPageNumbers.css';
import  RightArrowIcon  from '@/app/assets/icons/RightArrow.svg'; 
import LeftArrowIcon  from '@/app/assets/icons/LeftArrow.svg'; 
export default function RenderPageNumbers(currentPage, totalPages, setCurrentPage) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={`page-btn${currentPage === i ? ' active' : ''}`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="pagination-container">
      <button
        className="arrow-btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <LeftArrowIcon className="left-arrow-icon" />
      </button>
      <div className="page-numbers">
        {pages}
      </div>
      <button
        className="arrow-btn right-arrow"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <RightArrowIcon className="right-arrow-icon" />
      </button>
    </div>
  );
}