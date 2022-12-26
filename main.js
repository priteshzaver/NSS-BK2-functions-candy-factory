const buyChocolate = () => {
    const chocolate = {
        type: "Milk chocolate"
    }
    return chocolate
}

const addFlavoring = (giveFlavor) => {
    giveFlavor.flavor = "Mint"

    return giveFlavor
}

const makeBarkMixture = (makeBark) => {
    if (makeBark.flavor === "Mint") {
        makeBark.mixed = true
    }
    else {
        makeBark.mixed = false
    }
    return makeBark
}

const bakeCandy = (make) => {
    if (make.mixed === true) {
        make.bake = true
    }
    else {
        make.bake = false
    }
    return make
}

const breakBark = (bust) => { //why can't I use the word break instead of bust?
    if (bust.bake === true) {
     return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    
    } 
}

const buy = buyChocolate()
const flavor = addFlavoring(buy)
const bark = makeBarkMixture(flavor)
const cook = bakeCandy(bark)
const eat = breakBark(cook)

console.log(eat)