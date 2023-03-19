import TitleImage from './resources/Title.jpg';
import LocationMapImage from './resources/LocationMap.png';
import GalleryPhoto1 from './resources/1.jpg';
import GalleryPhoto2 from './resources/2.jpg';
import GalleryPhoto3 from './resources/3.jpg';
import GalleryPhoto4 from './resources/4.jpg';
import GalleryPhoto5 from './resources/5.jpg';
import GalleryPhoto6 from './resources/6.jpg';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  kakaoToken: '카카오톡 API 토큰을 입력해주세요!',
  kakaoImage: TitleImage,
  weddingDate: '2023년 12월 16일, 토요일 오후 6시',
  weddingLocation: '그랜드힐 컨벤션, 그랜드볼룸',
  groom: {
    name: '이광현',
    accountNumber: '토스뱅크 ***-***-******',
    fatherName: '이경국',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '최소영',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  bride: {
    name: '성지현',
    accountNumber: '○○은행 ***-***-******',
    fatherName: '성기석',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: '박윤주',
    motherAccountNumber: '○○은행 ***-***-******',
  },
  titleImage: TitleImage,
  locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
  ],
};

export type ConfigsType = {
  url: string;
  kakaoToken: string;
  kakaoImage: string;
  weddingDate: string;
  weddingLocation: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  locationMapImage: string;
  galleryImages: string[];
};

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
};

export default Configs;
