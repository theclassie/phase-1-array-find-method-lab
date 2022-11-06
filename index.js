// code your solution here

// const superbowlWin = record.find(records => records.result === "W")

// console.log(superbowlWin.year)

function superbowlWin(records){
    let obj = records.find(records => records.result === "W")
    if(obj){
        return obj.year
    }
    return obj
}


