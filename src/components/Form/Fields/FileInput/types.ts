import { ChakraProps } from '@chakra-ui/react';
import { CSSProperties } from 'react';
import { DropzoneOptions } from 'react-dropzone';
import { IconType } from 'react-icons/lib';

export type FileInputProps = {
  dragAndDrop?: boolean;
  button?: boolean;
  preview?: boolean;
  dragMessage?: string;
  buttonMessage?: string;
  filesListTitle?: string;
  filesList?: boolean;
  removeIcon?: IconType;
  listIcon?: IconType;
  removeAllMessage?: string;
  acceptStyle?: CSSProperties;
  focusedStyle?: CSSProperties;
  rejectStyle?: CSSProperties;
} & DropzoneOptions;

export type FileListProps = {
  listIcon: IconType;
  file: File;
  removeFile: (file: File) => void;
  removeIcon: IconType;
} & ChakraProps;

export type PreviewFilesProps = {
  file: File & FileProperties;
  thumb: any;
  img: CSSProperties;
  thumbInner: CSSProperties;
  filesList: boolean;
  removeFile: (file: File) => void;
  removeIcon: IconType;
} & ChakraProps;

type FileProperties = {
  name?: string;
  preview?: string;
};
