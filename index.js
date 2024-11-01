// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(collection, match){
     
    return collection.filter(name => {
        
        if(name === match){
            return name
        }
        else if(name.toLowerCase()===match.toLowerCase()){
            return name
        }else{
            return null
        }
        }
    )
}
function fuzzyMatch(collection, match){
    return collection.filter(name =>{
       let newName = name.slice(0,2)
        if(newName===match){
            return name
        }
    })
}
function matchName(collection, match){
    return collection.filter(collection => collection.name===match)
}