export interface DisplayCategory {
    dispCtgNo: string
    dispCtgNm: string
    dispSeq: number
    uprDispCtgNo: string
    lrgCtgNo: string
    midCtgNo: string
    smlCtgNo: string
    thnCtgNo: string
    leafYn: string
    depth: string
    subCategoryList?: DisplayCategory[]
}
