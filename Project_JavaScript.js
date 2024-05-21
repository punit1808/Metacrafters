// create a variable to hold your NFTs
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyecolor, age, country,maritalstatus,ranking) {
    const nft = {
        ownerName: name,
        ownerEyeColor: eyecolor,
        ownerAge: age,
        ownerCountry: country,
        ownerMaritalStatus: maritalstatus,
        ownerRanking: ranking
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()

function listNFTs() {
    for(let i=1;i<=nfts.length;i++){
        console.log("NFT no. " + " : " + i);
        console.log("Name " + " : " + nfts[i-1].ownerName );
        console.log("Eyecolor " + " : " + nfts[i-1].ownerEyeColor );
        console.log("Age " + " : " + nfts[i-1].ownerAge );
        console.log("Country " + " : " + nfts[i-1].ownerCountry );
        console.log("MaritalStatus " + " : " + nfts[i-1].ownerMaritalStatus );
        console.log("Ranking " + " : " + nfts[i-1].ownerRanking );
        console.log('x - - - - - - - x');
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line

mintNFT("Rahul", "Black", 24, "US", "Divorced", 1);
mintNFT("Rajesh", "Brown", 19, "Srilanka", "Unmarried", 2);
mintNFT("Neha", "Brown", 21, "China", "Unmaried", 3);
mintNFT("Virat", "Blue", 34, "India", "Married", 4);
mintNFT("Rohit", "Green", 48, "UK", "Married", 5);

listNFTs();

console.log("Total Supply: " + getTotalSupply());
