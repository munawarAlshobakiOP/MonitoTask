import  RightArrowIcon  from '@/app/assets/icons/RightArrow'; 
import LeftArrowIcon  from '@/app/assets/icons/LeftArrow'; 
import * as Styles from './RenderPage.styles';
export default function RenderPageNumbers({ currentPage, totalPages, setCurrentPage }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
    <Styles.PageBtn
  key={i}
  onClick={() => setCurrentPage(i)}
  className={currentPage === i ? 'active' : ''}
>
  {i}
</Styles.PageBtn>
    );
  }

  return (
    
    <Styles.PaginationContainer>
      <Styles.ArrowBtn
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <LeftArrowIcon width={18} height={18} />
      </Styles.ArrowBtn>
      <Styles.PageNumbers>
        {pages}
      </Styles.PageNumbers>
      <Styles.ArrowBtn
        className="right-arrow"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <RightArrowIcon width={18} height={18} />
      </Styles.ArrowBtn>
    </Styles.PaginationContainer>
  );
}