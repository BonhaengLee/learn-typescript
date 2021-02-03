// 9106.ts
import React from "react";

// 1
interface Props {
    name: string;
    age?: number;
}
// 2
export default function MyComponent({ name, age = 23 }: Props) {
    return (
        <div>
            <p>{name}</p>
            <p>{age.substr(0)}</p> {/* 타입 에러 3*/}
        </div>
    );
}
// 2
const MyComponent: React.FunctionComponent<Props> = function ({
    name,
    age = 23,
}) {
    return (
        <div>
            <p>{name}</p>
            <p>{age.substr(0)}</p> {/* 타입 에러 3*/}
        </div>
    );
};
