import {
  Box, Flex, Stack, Text, Link,
} from '@chakra-ui/react'

const NotFound = () => (
  <Flex
    p={50}
    h="full"
    w="full"
    alignItems="center"
    justifyContent="center"
    bg="white"
    _dark={{
      bg: 'gray.800',
    }}
  >
    <Flex
      justify="center"
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      w="full"
    >
      <Box
        w={{
          base: 'full',
          md: '75%',
          lg: '50%',
        }}
        px={4}
        py={20}
        textAlign={{
          base: 'left',
          md: 'center',
        }}
      >

        <Text
          fontSize="9xl"
          fontWeight="bold"
          color="brand.primary"
          display="block"
        >
          Ooops!
        </Text>
        <Text fontSize="4xl" mt={4}>We couldn&apos;t find this page</Text>
        <Stack
          justifyContent={{
            base: 'left',
            md: 'center',
          }}
          direction={{
            base: 'column',
            sm: 'row',
          }}
          spacing={2}
          mt={8}
        >
          <Box ml={3} display="inline-flex" rounded="md" shadow="md">
            <Link
              w="full"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              bg="white"
              color="gray.600"
              _dark={{
                bg: 'gray.900',
                color: 'white',
              }}
              _hover={{
                bg: 'brand.50',
              }}
              href="/"
            >
              Go Back Home
            </Link>
          </Box>
        </Stack>
      </Box>
    </Flex>
  </Flex>

)
export default NotFound
