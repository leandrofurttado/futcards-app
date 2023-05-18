import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
    title: string;
}

export function Button({ title, ...rest }:Props) {
    return (
        <ButtonNativeBase 
        bg="yellow.500"
        h={12}
        w={100}
        fontSize="md"
        rounded="md"
        mt={10}
        {...rest}
        _pressed={{bg: 'yellow.800'}}>
            <Heading color="black" fontSize="md">
                {title}
            </Heading>
        </ButtonNativeBase>
    );
}