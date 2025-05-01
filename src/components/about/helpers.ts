import type { Dispatch, SetStateAction } from 'react';
import { CARD_NUM } from './constants';

export const incrementPage = (
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  parallax: React.RefObject<any>
): number => {
  currentPage = (currentPage + 1) % CARD_NUM;
  parallax.current.scrollTo(currentPage);
  setCurrentPage(currentPage);
  return currentPage;
};

export const decrementPage = (
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  parallax: React.RefObject<any>
): number => {
  currentPage = (currentPage - 1 + CARD_NUM) % CARD_NUM;
  parallax.current.scrollTo(currentPage);
  setCurrentPage(currentPage);
  return currentPage;
};
