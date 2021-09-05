import { Avatar, Box, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import ImageUploading, { ImageListType } from 'react-images-uploading';

function UploadImage({ onChange: onChangeParent, initialSrc }) {
  const [images, setImages] = useState<ImageListType>([]);

  const onChange = (imageList: ImageListType) => {
    onChangeParent(imageList[0]);
    setImages(imageList);
  };

  return (
    <ImageUploading multiple value={images} onChange={onChange} maxNumber={1} dataURLKey="data_url">
      {({
        imageList,
        // onImageUpload,
        // onImageRemoveAll,
        onImageUpdate,
        // onImageRemove,
        // isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <Box position="relative" w="6rem" h="6rem">
            <IconButton
              aria-label="Adicionar imagem"
              icon={<AiOutlineCloudUpload size="1.5rem" />}
              bg="#2e2e2e44"
              position="absolute"
              zIndex="10"
              top="50%"
              left="50%"
              h="100%"
              w="100%"
              transform="translate(-50%, -50%)"
              onClick={() => onImageUpdate(0)}
              _hover={{ bg: 'gray.700' }}
              borderRadius="50%"
              {...dragProps}
            />
            {imageList.length > 0 ? (
              <Avatar
                // style={isDragging ? { color: 'red' } : null}
                src={imageList?.[0].data_url}
                w="100%"
                h="100%"
              />
            ) : initialSrc ? (
              <Avatar
                // style={isDragging ? { color: 'red' } : null}
                src={initialSrc}
                w="100%"
                h="100%"
              />
            ) : (
              <Box bg="gray.600" w="100%" h="100%" borderRadius="50%" />
            )}
          </Box>
        </div>
      )}
    </ImageUploading>
  );
}

export default UploadImage;
