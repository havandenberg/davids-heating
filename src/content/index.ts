import BryantImg from '../assets/images/brands/bryant.png';
import DucaneImg from '../assets/images/brands/ducane.png';
import MitsubishiImg from '../assets/images/brands/mitsubishi.png';
import RuudImg from '../assets/images/brands/ruud.png';
import SamsungImg from '../assets/images/brands/samsung.png';
import YorkImg from '../assets/images/brands/york.png';
import { ASSETS_PATH } from '../utils/constants';

export const brands = [
  BryantImg,
  DucaneImg,
  MitsubishiImg,
  RuudImg,
  SamsungImg,
  YorkImg,
];

export const locations = [
  'Worcester',
  'Auburn',
  'Boylston',
  'Holden',
  'Shrewsbury',
  'Leicester',
  'Spencer',
  'Oxford',
];

export const projects = [
  {
    caption: '',
    src: `${ASSETS_PATH}/project-1.jpg`,
    thumbnail: `${ASSETS_PATH}/project-1.jpg`,
    thumbnailHeight: 200,
    thumbnailWidth: 300,
  },
  {
    caption: '',
    src: `${ASSETS_PATH}/project-2.jpg`,
    thumbnail: `${ASSETS_PATH}/project-2.jpg`,
    thumbnailHeight: 200,
    thumbnailWidth: 300,
  },
];
