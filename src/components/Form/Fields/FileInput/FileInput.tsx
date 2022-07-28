import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCheckmarkCircle, IoMdClose } from 'react-icons/io';

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
  dragMessage?: string;
  buttonMessage?: string;
  filesListTitle?: string;
  filesList?: boolean;
  maxFiles?: number;
  maxSize?: number;
  minSize?: number;
  removeIcon?: any;
  disabled?: boolean;
  removeAllMessage?: string;
};

export const FileInput = ({
  dragAndDrop = true,
  preview = true,
  dragMessage = 'Drag and drop some files here, or click to select files',
  filesList = true,
  filesListTitle = 'Accepted',
  maxFiles,
  maxSize,
  minSize,
  removeIcon = IoMdClose,
  removeAllMessage = 'Remove all files',
  button = false,
  buttonMessage = 'Send file',
  disabled = false,
}: FileInputProps) => {
  const [files, setFiles] = useState<any>([]);

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
    maxFiles: maxFiles,
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

  const acceptedFileItems = files.map((file: File) => (
    <ListItem fontSize="sm" key={file.name}>
      <Flex justifyContent="space-between" alignItems="center">
        <ListIcon as={IoMdCheckmarkCircle} color="green.500" />
        <Text>
          {file.name} - {file.size} bytes
        </Text>
        <Button
          onClick={() => removeFile(file)}
          bg="transparent"
          _focus={{}}
          _hover={{}}
          _active={{}}
          cursor="pointer"
        >
          <Icon as={removeIcon} color="red" />
        </Button>
      </Flex>
    </ListItem>
  ));

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

  console.log(files);

  const removeFile = (file: File) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const removeAll = () => {
    setFiles([]);
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  useEffect(() => {
    console.log('isFocused :>> ', isFocused);
    console.log('isDragAccept :>> ', isDragAccept);
  }, [isFocused, isDragAccept]);

  return (
    <VStack justify="left" alignItems="flex-start">
      {dragAndDrop && (
        <Flex flexDir="column" cursor="pointer" className="container" {...getRootProps({ style })}>
          <input type="file" {...getInputProps()} />
          <Text fontSize="md">{dragMessage}</Text>
        </Flex>
      )}

      {preview && <Flex sx={thumbsContainer}>{previewFiles}</Flex>}

      {button && <Button {...getRootProps()}>{buttonMessage}</Button>}

      {filesList && (
        <Flex alignItems="flex-start" justify="left">
          <VStack>
            <Flex flexDirection="column">
              <Flex alignItems="center" justifyContent="space-between">
                <Text fontSize="md" fontWeight="500">
                  {filesListTitle}
                </Text>
                {files.length ? (
                  <Tooltip label={removeAllMessage} placement="right" hasArrow>
                    <Button
                      bg="transparent"
                      w="0"
                      onClick={() => removeAll()}
                      _focus={{}}
                      _hover={{}}
                      _active={{}}
                      cursor="pointer"
                    >
                      <Icon as={removeIcon} color="red" fontSize="2rem" />
                    </Button>
                  </Tooltip>
                ) : (
                  ''
                )}
              </Flex>
              <List>{acceptedFileItems}</List>
            </Flex>
          </VStack>
        </Flex>
      )}
    </VStack>
  );
};
