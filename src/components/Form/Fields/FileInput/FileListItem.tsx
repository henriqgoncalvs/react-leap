import { Button, Flex, Icon, ListIcon, ListItem, Text } from '@chakra-ui/react';

import { FileListProps } from './types';

export const FileListItem: React.FC<FileListProps> = ({
  listIcon,
  file,
  removeFile,
  removeIcon,
}) => {
  return (
    <ListItem fontSize="sm">
      <Flex justifyContent="space-between" alignItems="center">
        <ListIcon as={listIcon} color="green.500" />
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
};
