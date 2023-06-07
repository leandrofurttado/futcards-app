import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";
import React from "react";

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }:Props) {
    return (
        <ButtonNativeBase 
        bg="yellow.500"
        height={10}
        width= {328}
        size="md"
        fontSize="md"
        rounded="md"
        mt={5}
        {...rest}
        _pressed={{bg: 'yellow.800'}}>
            <Heading color="black" fontSize="md">
                {title}
            </Heading>
        </ButtonNativeBase>
    );
}