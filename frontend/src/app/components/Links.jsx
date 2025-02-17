import { HStack } from '@chakra-ui/react';
import IconButton from './IconButton';

export default function Links({ dict, spacing = "8px", onlyIcon = true }) {
  return (
    <HStack spacing={spacing}>
      {dict.map((item, index) => (
        <IconButton
          key={index}
          icon={item.name}
          url={item.url}
          onlyIcon={onlyIcon}
        />
      ))}
    </HStack>
  );
}