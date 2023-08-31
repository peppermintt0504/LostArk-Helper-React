
export interface IItemData{
    Id : number | null,
    BundleCount : number,
    Icon : string,
    Name : string,
    CurrentMinPrice : number,
    YDayAvgPrice : number,
    ingredients : Partial<IItemData>[],
    itemMakingGold : number,
    needCount:number,
    Grade:string,
}