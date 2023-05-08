export default function (myTitle, routes) {
    let breadcrumbs = []
    breadcrumbs.push(routes[0])
    const myData = routes.filter((page) => {
        return page.name === myTitle
    })
    let pathList = myData[0].path.split('/')
    pathList.shift()
    pathList.pop()

    let parentPath = '/'

    for (let path of pathList) {

        parentPath += path

        const parent = routes.filter((page) => {
            return page.path === parentPath
        })

        breadcrumbs.push({name: parent[0].name, path: parent[0].path})

        parentPath += '/'
    }

    breadcrumbs.push({name: myTitle})
    console.log (breadcrumbs[breadcrumbs.length - 1].name)
    return breadcrumbs
}
