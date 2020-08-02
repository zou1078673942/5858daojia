const localCity = (name) => {
    // console.log(name,"++++")
    let obj = {}
    let newObj = []
    obj['name'] = name
    if (localStorage.getItem('name')) {
        let oldObj = [...JSON.parse(localStorage.getItem('name'))]
        newObj = [obj, ...oldObj]
    } else {
        newObj = [obj]
    }
    localStorage.setItem('name', JSON.stringify(newObj.slice(0, 3)))
}

export {localCity}