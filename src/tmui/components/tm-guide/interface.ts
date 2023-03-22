export interface guideTItem {
    width: number,
    height: number,
    left: number,
    top: number,
    style?: object,
}

export interface guideListItem {
    queryClass: string,
    style?: object,
    img?: Array<img>
}

export interface img {
    width?: number,
    height?: number,
    left?: number,
    top?: number,
    src: string,
    isNextButton: boolean,
    clickEvent?: Function
}