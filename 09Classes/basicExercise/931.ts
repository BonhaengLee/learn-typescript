// 931.ts
function getParam(index: number): string {
    const params = this.splt(","); // 1
    if (index < 0 || params.length <= index) {
        return "";
    }
    return this.split(",")[index];
} 
