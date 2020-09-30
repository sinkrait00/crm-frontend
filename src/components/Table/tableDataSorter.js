


export const tableDataSorter = (data,searchText)=>{
    return data.filter(item=>{
        let word=''
        for(let key in item){
            word += item[key]
        }
        return word.trim().toLowerCase().match(searchText)
}).sort((x,y)=>y.favorite-x.favorite)
}