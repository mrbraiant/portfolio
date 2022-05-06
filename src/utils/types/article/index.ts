import { Certification } from '../certification';

export type Article = {
  id: number;
  title: string;
  introText: string;
  text: string;
  image: string;
  imageAlt: string;
  video?: string;
  certifications?: Certification[];
}[];
