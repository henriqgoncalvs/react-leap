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
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { IoMdCheckmarkCircle, IoMdClose } from 'react-icons/io';

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
  acceptFiles?: any;
};

const baseStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
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
  acceptFiles = { 'image/*': [], 'video/*': [], 'application/pdf': [] },
  removeIcon = IoMdClose,
  button = false,
  buttonMessage = 'send file',
  disabled = false,
}: FileInputProps) => {
  const [files, setFiles] = useState<any[]>([]);

  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
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

  const acceptedFileItems = acceptedFiles.map((file) => {
    return (
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

  const removeFile = (file: File) => () => {
    acceptedFiles.splice(acceptedFiles.indexOf(file), 1);
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
