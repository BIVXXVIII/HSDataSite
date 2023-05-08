export const access_token = `EU2sDJRxe4AAKdxIQYXOPILEOpj35BIxVl`

export const requestCards = (setData: Function, setIsLoaded: Function, lang:string) => {
    const pagesId = [1, 2, 3, 4, 5]
    const tempData: any = []

    const request = pagesId.map(
        page => fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=minion&page=${page}&access_token=${access_token}`)
            .then(res => res.json())
    )
    Promise.all(request)
        .then(res => res.map(resItem => tempData.push(...resItem.cards)))
        .then(() => {
            setData(tempData)
            setIsLoaded(true)
        })
}

export const requestHeroes = (setData: Function, setIsLoaded: Function, lang:string) => {
    const pagesId = [1, 2, 3]

    const request = pagesId.map(page => fetch(`https://us.api.blizzard.com/hearthstone/cards?locale=${lang}&gameMode=battlegrounds&bgCardType=hero&page=${page}&access_token=${access_token}`).then(res => res.json()))
    const tempData: any = []
    Promise.all(request)
        .then(response => response.map(res => tempData.push(...res.cards)))
        .then(() => {
        setData(tempData)
        setIsLoaded(true)
    })

}

