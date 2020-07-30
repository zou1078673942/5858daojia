const localCity =  (city) => {
    // console.log(city,"++++")
    let obj = {}
    let newObj = []
    obj['city'] = city
    if(localStorage.getItem('city')){
        let oldObj = [...JSON.parse(localStorage.getItem('city'))]
        newObj=[obj,...oldObj]
    }else{
        newObj=[obj]
    }
    localStorage.setItem('city',JSON.stringify(newObj.slice(0,3)))
    console.log(localStorage.getItem('city'))
}
export {localCity}