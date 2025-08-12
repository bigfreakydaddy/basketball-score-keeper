scoreA = 0 
scoreB = 0 
document.getElementById("scoreA").innerText = scoreA
document.getElementById("scoreB").innerText = scoreB


function plusOneA(){
    scoreA +=1 
    document.getElementById("scoreA").innerText = scoreA
    
}

function plusTwoA(){
    scoreA += 2
    document.getElementById("scoreA").innerText = scoreA
}

function plusThreeA(){
    scoreA += 3
    document.getElementById("scoreA").innerText = scoreA
}

function plusOneB(){
    scoreB += 1 
    document.getElementById("scoreB").innerText = scoreB
}

function plusTwoB(){
    scoreB += 2
    document.getElementById("scoreB").innerText = scoreB
}

function plusThreeB(){
    scoreB += 3
    document.getElementById("scoreB").innerText = scoreB
}
function resetScore(){
    scoreA = 0
    scoreB = 0 
    document.getElementById("scoreA").innerText = scoreA
    document.getElementById("scoreB").innerText = scoreB
    
}