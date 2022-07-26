import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import img6 from '../assets/img/6.jpg';
import img7 from '../assets/img/7.jpg';
import img8 from '../assets/img/8.jpg';
import img9 from '../assets/img/9.jpg';
import img10 from '../assets/img/10.jpg';
import img11 from '../assets/img/11.jpg';
import img12 from '../assets/img/12.jpg';

export interface Image {
  imgUrl: string;
  id: number;
}

export const imagesData: Image[] = [
  { imgUrl: img1, id: 1 },
  { imgUrl: img2, id: 2 },
  { imgUrl: img3, id: 3 },
  { imgUrl: img4, id: 4 },
  { imgUrl: img5, id: 5 },
  { imgUrl: img6, id: 6 },
  { imgUrl: img7, id: 7 },
  { imgUrl: img8, id: 8 },
  { imgUrl: img9, id: 9 },
  { imgUrl: img10, id: 10 },
  { imgUrl: img11, id: 11 },
  { imgUrl: img12, id: 12 }
];
