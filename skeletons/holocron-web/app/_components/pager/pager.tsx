import { Text } from '@epidemicsound/design-system';
import styles from './pager.module.css';

export const PAGE_SIZE = 5;

interface PagerProps {
  pages: number[],
  page: number,
  setPage: (page: number) => void
}
const Pager = ({ pages, setPage, page }: PagerProps) => {
  return (
    <div className={styles.pager}>
      {pages.length > 1 && pages.map((p, ix) => {
        const pageClassNames = [styles.page, page === p ? styles.pageActive : ''].filter(Boolean).join(' ');
        return (
          <Text.span key={ix} variant="textM" className={pageClassNames} onClick={() => setPage(p)}>&nbsp;{p}</Text.span>
        );
      }
      )}
    </div>
  )
};

export default Pager;