const fs = require('fs')

fs.readFile('./restaurants_list.json', (err, data) => {
    const list = JSON.parse(data.toString())

    fs.readFile('./restaurants_info.csv', (err, data) => {
        const info = data.toString().split('\n')
        const infoColumns = info.slice(0, 1)[0].split(';')
        const infoRows = info.slice(1)

        const jsonInfoRows = infoRows.map((row) => {
            const splitRow = row.split(';')

            const rowToJson = splitRow.reduce((acc, curr, i) => {
                return Object.assign(acc, {
                    [infoColumns[i]]: curr
                })
            }, {})

            const correspondingListItemIndex = list.findIndex(e => {
                return e.objectID == new Number(rowToJson.objectID)
            })

            const correspondingListItem = list[correspondingListItemIndex]

            return Object.assign({}, rowToJson, correspondingListItem)
        })

        console.log(JSON.stringify(jsonInfoRows))
    })
})
