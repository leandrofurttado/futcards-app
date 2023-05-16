import { Input as InputNativeBase } from "native-base";

export default function Input() {
    return (
        <InputNativeBase
            bg="gray.700"
            height={14}
            size="md"
            fontFamily="body"
            color="white"
            placeholder="E-mail"
            placeholderTextColor="gray.300"
            _focus={{
                bg: "white",
                borderColor: "yellow.500",
                borderWidth: 1
            }}
        >

        </InputNativeBase>
    )
}