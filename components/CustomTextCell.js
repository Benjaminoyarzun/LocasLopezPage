import { Box, Text } from "@nextui-org/react";

export const CustomTextCell = ({children}) => {
  return (
    <Box padding="1rem" backgroundColor="gray.200" borderRadius="8px">
      <Text fontSize="1.5rem" fontWeight="bold" color="black">
        Contenido del cuadro
      </Text>
      <Text fontSize="1rem" color="gray.600">
        {children}
      </Text>
    </Box>
  );
};

