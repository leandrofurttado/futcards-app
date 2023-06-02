import { Center, Spinner } from "native-base";

export function Loading() {
    return (
        <Center flex={1} bg="green.700">
            <Spinner color="blue.900" size="lg"/>
        </Center>
    )
}