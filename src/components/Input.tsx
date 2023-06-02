import { Input as InputNativeBase, IInputProps } from "native-base";
import React from "react";

export default function Input({...rest }: IInputProps) {
    return (
        <InputNativeBase
            bg="gray.700"
            height={10}
            size="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="gray.300"
            { ...rest }
        >

        </InputNativeBase>
    )
}