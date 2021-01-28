// 936.ts
function getInfoText({
    // 1
    name,
    age = 15,
    language,
}: {
    // 2
    name: string;
    age?: number;
    language?: string;
}): string {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
