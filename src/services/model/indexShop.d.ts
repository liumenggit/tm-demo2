declare interface IndexShop {
    carousel: Array<string>
    grid: Array<IndexShopGrid>
    notice: Array<string>
    list: Array<IndexShopList>
}

interface IndexShopGrid {
    url: string,
    image: string
}

interface IndexShopList {
    rightDetail: {
        title: string
        subtitle: string
        time: string
    },
    type: string,
    thumb: string
}