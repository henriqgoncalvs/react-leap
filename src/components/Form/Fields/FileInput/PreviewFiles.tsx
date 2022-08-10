import { Box, Button, Icon, Image } from '@chakra-ui/react';
import { Fragment } from 'react';

import { PreviewFilesProps } from './types';

export const PreviewFiles: React.FC<PreviewFilesProps> = ({
  file,
  thumb,
  img,
  thumbInner,
  filesList,
  removeFile,
  removeIcon,
}) => {
  return (
    <Fragment key={file.name}>
      <Box sx={thumb}>
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
      {!filesList && (
        <Button
          w="0"
          onClick={() => removeFile(file)}
          bg="transparent"
          _focus={{}}
          _hover={{}}
          _active={{}}
          cursor="pointer"
          position="relative"
          right="10px"
          bottom="10px"
        >
          <Icon as={removeIcon} color="red" />
        </Button>
      )}
    </Fragment>
  );
};
