// 945.ts
interface YearPriceMap {
    // 1
    [year: number]: number;
    [year: string]: string | number;
}
const yearMap: YearPriceMap = {};
yearMap[1998] = 1000;
yearMap[1998] = "abc"; // 타입 에러 2
yearMap["2000"] = 1234;
yearMap["2000"] = "million";
