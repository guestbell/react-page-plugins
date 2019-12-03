import { Image } from '../../../common/types/image/Image';
import { ButtonProps } from 'guestbell-forms/build/components/button';

export interface ChooseImageButtonCustom {
  className?: string;
  btnProps?: ButtonProps;
  bntContent?: JSX.Element | string;
  imageChosen?: (img: Image) => void;
}

export interface UploadImageButtonCustom {
  className?: string;
  btnProps?: ButtonProps;
  bntContent?: JSX.Element | string;
  imageUploaded?: (image: Image) => void;
  maxSize?: number;
  maxWidth?: number;
  maxHeight?: number;
  potentialTitle?: string;
}

export interface UploadImageFieldProps {
  title?: string | JSX.Element;
  label?: string | JSX.Element;
  className?: string;
  imageId: number;
  existingImage?: Image;
  onChange: (imageId: number, image: Image) => void;
  chooseImageButtonProps?: Partial<ChooseImageButtonCustom>;
  uploadImageButtonProps?: Partial<UploadImageButtonCustom>;
  potentialTitle?: string;
}

export type UploadImageField = React.ComponentType<UploadImageFieldProps>;
