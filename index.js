const displayNumber = function() {


    const bingoContainerNode = document.getElementById("bingo-container")
   
    for (let bingoNumber = 1; bingoNumber <= 76; bingoNumber++) { 
  
   
    
        let numberNode = document.createElement("div")
        numberNode.classList.add("numbers") 
        numberNode.innerText = bingoNumber 

        bingoContainerNode.appendChild(numberNode)      
    }
  
}


window.onload = function() {
    displayNumber()


}




