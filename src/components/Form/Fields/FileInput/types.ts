import { ChakraProps } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { IconType } from 'react-icons/lib';

export type FileInputProps = {
  dragAndDrop?: boolean;
  button?: boolean;
  preview?: boolean;
  dragMessage?: string;
  buttonMessage?: string;
  filesListTitle?: string;
  filesList?: boolean;
  maxFiles?: number;
  acceptFiles?: any;
  maxSize?: number;
  minSize?: number;
  removeIcon?: IconType;
  listIcon?: IconType;
  disabled?: boolean;
  removeAllMessage?: string;
  acceptStyle?: CSSProperties;
  focusedStyle?: CSSProperties;
  rejectStyle?: CSSProperties;
};

export type FileListProps = {
  listIcon: IconType;
  file: File;
  removeFile: (file: File) => void;
  removeIcon: IconType;
} & ChakraProps;

export type PreviewFilesProps = {
  file: { preview: string } & File;
  thumb: any;
  img: CSSProperties;
  thumbInner: CSSProperties;
  filesList: boolean;
  removeFile: (file: File) => void;
  removeIcon: IconType;
} & ChakraProps;
