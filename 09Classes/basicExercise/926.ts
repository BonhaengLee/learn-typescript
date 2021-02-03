// 926.ts
function getInfoText(name: string, age: number, language?: string): string {
    // 1
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? "senior" : "junior";
    const languageText = language ? language.substr(0, 10) : ""; // 2
    return `name : ${nameText}, age: ${ageText}, language: ${languageText}`;
}
getInfoText("mike", 23, "ko");
getInfoText("mike", 23); // 3
getInfoText("mike", 23, 123); // 타입 에러 4
