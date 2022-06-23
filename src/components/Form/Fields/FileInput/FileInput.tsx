import { Box, Button, Flex, Image, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCheckmarkCircle } from 'react-icons/io';

import {
  acceptStyle,
  baseStyle,
  focusedStyle,
  img,
  rejectStyle,
  thumb,
  thumbInner,
  thumbsContainer,
} from './baseStyles';

type FileInputProps = {
  dragAndDrop?: boolean;
  button?: boolean;
  preview?: boolean;
  style?: any;
  dragMessage?: string;
  buttonMessage?: string;
  filesListTitle?: string;
  filesList?: boolean;
  maxFiles?: number;
  maxSize?: number;
  minSize?: number;
  disabled?: boolean;
};

export const FileInput = ({
  dragAndDrop = true,
  button = false,
  preview = false,
  style = baseStyle,
  dragMessage = 'Drag and drop some files here, or click to select files',
  buttonMessage = 'Open file dialog',
  filesList = false,
  filesListTitle = 'Accepted',
  maxFiles,
  maxSize,
  minSize,
  disabled = false,
}: FileInputProps) => {
  const [files, setFiles] = useState<any[]>([]);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    open,
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: maxFiles,
    noClick: true,
    noKeyboard: true,
    maxSize: maxSize,
    minSize: minSize,
    disabled: disabled,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const acceptedFileItems = acceptedFiles.map((file) => {
    return (
      <ListItem fontSize="sm" key={file.name}>
        <ListIcon as={IoMdCheckmarkCircle} color="green.500" />
        {file.name} - {file.size} bytes
      </ListItem>
    );
  });

  const previewFiles = files.map((file) => (
    <Box sx={thumb} key={file.name}>
      <Box style={thumbInner}>
        <Image
          src={file.preview}
          style={img}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </Box>
    </Box>
  ));

  const styleChanging = useMemo(
    () => ({
      ...style,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, style],
  );

  return (
    <VStack justify="left" alignItems="flex-start">
      {dragAndDrop && (
        <Flex flexDir="column" {...getRootProps({ styleChanging })}>
          <input type="file" {...getInputProps({ className: 'dropzone' })} />
          <Text fontSize="md">{dragMessage}</Text>
        </Flex>
      )}

      {button && (
        <Flex flexDir="column" {...getRootProps({ styleChanging })}>
          {button && <Button onClick={open}>{buttonMessage}</Button>}
        </Flex>
      )}

      {preview && <Flex sx={thumbsContainer}>{previewFiles}</Flex>}

      {filesList && (
        <Flex alignItems="flex-start" justify="left">
          <VStack>
            <Flex flexDirection="column">
              <Text fontSize="md" fontWeight="500">
                {filesListTitle}
              </Text>
              <List>{acceptedFileItems}</List>
            </Flex>
          </VStack>
        </Flex>
      )}
    </VStack>
  );
};
