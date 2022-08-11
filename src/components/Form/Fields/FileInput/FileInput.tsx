import { Button, Flex, List, Text, VStack, Icon, Tooltip } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCheckmarkCircle, IoMdClose } from 'react-icons/io';

import {
  accept,
  baseStyle,
  focused,
  img,
  reject,
  thumb,
  thumbInner,
  thumbsContainer,
} from './baseStyles';
import { FileListItem } from './FileListItem';
import { PreviewFiles } from './PreviewFiles';
import { FileInputProps } from './types';

export const FileInput = ({
  dragAndDrop = true,
  preview = true,
  dragMessage = 'Drag and drop some files here, or click to select files',
  filesList = true,
  filesListTitle = 'Accepted',
  maxFiles,
  maxSize,
  minSize,
  acceptFiles = { 'image/*': [], 'video/*': [], 'application/pdf': [] },
  removeIcon = IoMdClose,
  listIcon = IoMdCheckmarkCircle,
  removeAllMessage = 'Remove all files',
  button = false,
  buttonMessage = 'Send file',
  disabled = false,
  acceptStyle = accept,
  focusedStyle = focused,
  rejectStyle = reject,
}: FileInputProps) => {
  const [files, setFiles] = useState<any>([]);
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: acceptFiles,
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

  const removeFile = (file: File) => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const acceptedFileItems = files.map((file: File) => (
    <FileListItem
      file={file}
      removeIcon={removeIcon}
      listIcon={listIcon}
      removeFile={removeFile}
      key={file.name}
    />
  ));

  const previewFiles = files.map((file) => (
    <PreviewFiles
      file={file}
      filesList={filesList}
      img={img}
      removeFile={removeFile}
      removeIcon={removeIcon}
      thumbInner={thumbInner}
      thumb={thumb}
      key={file.name}
    />
  ));

  const removeAll = () => setFiles([]);

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject, acceptStyle, rejectStyle, focusedStyle],
  );

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
