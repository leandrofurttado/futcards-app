import { Center, Spinner } from "native-base";
import React from "react";

export function Loading() {
    return (
        <Center flex={1} bg="green.700">
            <Spinner color="blue" size="lg"/>
        </Center>
    )
}