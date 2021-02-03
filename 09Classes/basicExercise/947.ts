// 947.ts
interface GetInfoText {
    (naem: string, age: number): string;
    // 1
    totalCall: number;
}
const getInfoText: GetInfoText = function (name, age) {
    // 2
    getInfoText.totalCall += 1;
    console.log(`totalCall: ${getInfoText.totalCall}`);
    // ...
};
getInfoText.totalCall = 0;
