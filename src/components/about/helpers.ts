import type { Dispatch, MutableRefObject, SetStateAction } from 'react';
import type { IParallax } from '@react-spring/parallax';
import { CARD_NUM } from './constants';

type ParallaxRef = MutableRefObject<IParallax>;
type SetPage = Dispatch<SetStateAction<number>>;

const updatePage = (newPage: number, setCurrentPage: SetPage, parallax: ParallaxRef): number => {
  parallax.current.scrollTo(newPage);
  setCurrentPage(newPage);
  return newPage;
};

export const incrementPage = (
  currentPage: number,
  setCurrentPage: SetPage,
  parallax: ParallaxRef
): number => {
  const newPage = (currentPage + 1) % CARD_NUM;
  return updatePage(newPage, setCurrentPage, parallax);
};

export const decrementPage = (
  currentPage: number,
  setCurrentPage: SetPage,
  parallax: ParallaxRef
): number => {
  const newPage = (currentPage - 1 + CARD_NUM) % CARD_NUM;
  return updatePage(newPage, setCurrentPage, parallax);
};
