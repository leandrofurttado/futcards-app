import { VStack, Heading } from "native-base";
import { Input } from "native-base";

export default function SignIn() {
    return (
        <VStack flex={1} bg="gray.600" alignItems="center" px={8} py={24}>
            <Heading color="gray.100" fontSize="xl" mt={20}>
                Acesse sua conta:
            </Heading>

            <Input />
        </VStack>
    );
}