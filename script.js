let playerNum = 1;
let playerInputs = document.querySelector("#playerNameInputs");
let startingMoney = document.querySelector("#startingMoney");
let startingMoneyValue = 1200;
let playerInventories = document.querySelector("#playerInventories");
let currentPokemon = document.querySelector("#currentPokemon");
let maxPokemon = document.querySelector("#maxPokemon");
let pokemonNumbers = [];
let maxPokemonTemp;
let pokemonName = document.querySelector("#pokemonName");
let types = document.querySelector("#types");
let hpValue = document.querySelector("#hpValue");
let atkValue = document.querySelector("#atkValue");
let defValue = document.querySelector("#defValue");
let satkValue = document.querySelector("#satkValue");
let sdefValue = document.querySelector("#sdefValue");
let spdValue = document.querySelector("#spdValue");
let bstValue = document.querySelector("#bstValue");
let hpBar = document.querySelector("#hpBar");
let atkBar = document.querySelector("#atkBar");
let defBar = document.querySelector("#defBar");
let satkBar = document.querySelector("#satkBar");
let sdefBar = document.querySelector("#sdefBar");
let spdBar = document.querySelector("#spdBar");
let auctionSprite = document.querySelector("#auctionSprite");
let abilityNameValue = document.querySelector("#abilityNameValue");
let abilityNumbers = [];
let abilityDesc = document.querySelector("#abilityDesc");
let nature = document.querySelector("#nature");
let heldItem = document.querySelector("#heldItem");
let teraType = document.querySelector("#teraType");
let natureNumbers = [];
let heldItemNumbers = [];
let teraTypeNumbers = [];
let moveNumber1 = [];
let moveNumber2 = [];
let moveNumber3 = [];
let moveNumber4 = [];
let moveName1 = document.querySelector("#moveName1");
let moveType1 = document.querySelector("#moveType1");
let moveCategory1 = document.querySelector("#moveCategory1");
let movePower1 = document.querySelector("#movePower1");
let moveAccuracy1 = document.querySelector("#moveAccuracy1");
let movePP1 = document.querySelector("#movePP1");
let moveDesc1 = document.querySelector("#moveDesc1");
let reroll1 = document.querySelector("#reroll1");
let moveName2 = document.querySelector("#moveName2");
let moveType2 = document.querySelector("#moveType2");
let moveCategory2 = document.querySelector("#moveCategory2");
let movePower2 = document.querySelector("#movePower2");
let moveAccuracy2 = document.querySelector("#moveAccuracy2");
let movePP2 = document.querySelector("#movePP2");
let moveDesc2 = document.querySelector("#moveDesc2");
let reroll2 = document.querySelector("#reroll2");
let moveName3 = document.querySelector("#moveName3");
let moveType3 = document.querySelector("#moveType3");
let moveCategory3 = document.querySelector("#moveCategory3");
let movePower3 = document.querySelector("#movePower3");
let moveAccuracy3 = document.querySelector("#moveAccuracy3");
let movePP3 = document.querySelector("#movePP3");
let moveDesc3 = document.querySelector("#moveDesc3");
let reroll3 = document.querySelector("#reroll3");
let moveName4 = document.querySelector("#moveName4");
let moveType4 = document.querySelector("#moveType4");
let moveCategory4 = document.querySelector("#moveCategory4");
let movePower4 = document.querySelector("#movePower4");
let moveAccuracy4 = document.querySelector("#moveAccuracy4");
let movePP4 = document.querySelector("#movePP4");
let moveDesc4 = document.querySelector("#moveDesc4");
let reroll4 = document.querySelector("#reroll4");
let hpTitleChoice = [];
let atkTitleChoice = [];
let defTitleChoice = [];
let satkTitleChoice = [];
let sdefTitleChoice = [];
let spdTitleChoice = [];
let evNumbers = [];
let claimed = [];
let claimedImg = document.querySelector("#claimedImg");
let playerClaimed = [];

// ADDS AND REMOVES NAME INPUTS

function playerCountRemove () {
    if (playerNum < 2) {
        console.log(`${playerNum}`);
    } else {

        let latestName = document.querySelector(`#playerName${playerNum}`);

        playerNum--;
        console.log(`${playerNum}`);
        
       playerInputs.removeChild(latestName);
    }
}

function playerCountAdd () {

    let nameInput = document.createElement("li");
    nameInput.innerHTML = "<input></input>";

    playerNum++;
    console.log(`${playerNum}`);

    nameInput.setAttribute("id", `playerName${playerNum}`)
    playerInputs.appendChild(nameInput);
}

// ADJUSTS STARTING MONEY

function decreaseStartingMoney () {
    startingMoneyValue = startingMoneyValue - 100;
    startingMoney.innerHTML = `${startingMoneyValue}`;
}

function increaseStartingMoney () {
    startingMoneyValue = startingMoneyValue + 100;
    startingMoney.innerHTML = `${startingMoneyValue}`;
}

// STARTS THE AUCTION

function startAuction () {
    for (let i = 1; i <= playerNum; i++) {
        let name = document.querySelector(`#playerName${i} > input`).value;
        console.log(`${name}`);

        let inventoryTemplate = document.createElement("div");
        inventoryTemplate.className = "playerInv";
        inventoryTemplate.innerHTML = `
        <h5>${name}</h5>
            <div class='moneyControls'>
                <div class='moneyButtons'>
                    <p class='clickable' onclick='decreasePlayerMoney(${i}, 100)' tabindex="0">-100</p>
                    <p class='clickable' onclick='decreasePlayerMoney(${i}, 10)' tabindex="0">-10</p>
                </div>
                    <p><s>P</s><div class='playerMoney' id='playerMoneyValue${i}'>${startingMoneyValue}</div></p>
                <div class='moneyButtons'>
                    <p class='clickable' onclick='increasePlayerMoney(${i}, 100)' tabindex="0">+100</p>
                    <p class='clickable' onclick='increasePlayerMoney(${i}, 10)' tabindex="0">+10</p>
                </div>
            </div>
            <div class='pokemonTeam'>
                <div class='pkmnSlot' id='pkmnSlot1${i}'>
                    <i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(1, ${i})" tabindex="0"></i>
                </div>
                <div class='pkmnSlot' id='pkmnSlot2${i}'>
                    <i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(2, ${i})" tabindex="0"></i>
                </div>
                <div class='pkmnSlot' id='pkmnSlot3${i}'>
                    <i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(3, ${i})" tabindex="0"></i>
                </div>
                <div class='pkmnSlot' id='pkmnSlot4${i}'>
                    <i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(4, ${i})" tabindex="0"></i>
                </div>
                <div class='pkmnSlot' id='pkmnSlot5${i}'>
                    <i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(5, ${i})" tabindex="0"></i>
                </div>
                <div class='pkmnSlot' id='pkmnSlot6${i}'>
                    <i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(6, ${i})" tabindex="0"></i>
                </div>
            </div>`;

        playerInventories.appendChild(inventoryTemplate);

        let auctionScreen = document.querySelector("#auction");
        let setupScreen = document.querySelector("#setup");

        auctionScreen.style = "display: grid;";
        setupScreen.style = "display: none;";

        maxPokemonTemp = playerNum * 6;
        maxPokemon.innerHTML = `${maxPokemonTemp}`;

        for (let j = 0; j < maxPokemonTemp; j++) {
            evNumbers[j] = 0;
            claimed[j] = false;
        }

        playerClaimed[i-1] = [0, 0, 0, 0, 0, 0];
    }

    randomizePokemon();
}

// PLAYER MONEY CONTROLS

function decreasePlayerMoney (playerChoice, moneyAmount) {

    let playerMoneySelector = document.querySelector(`#playerMoneyValue${playerChoice}`);
    let playerMoneyTemp = document.querySelector(`#playerMoneyValue${playerChoice}`).innerHTML;

    playerMoneyTemp = playerMoneyTemp - moneyAmount;

    playerMoneySelector.innerHTML = `${playerMoneyTemp}`;
}

function increasePlayerMoney (playerChoice, moneyAmount) {

    let playerMoneySelector = document.querySelector(`#playerMoneyValue${playerChoice}`);
    let playerMoneyTemp = document.querySelector(`#playerMoneyValue${playerChoice}`).innerHTML;

    playerMoneyTemp = parseInt(playerMoneyTemp) + parseInt(moneyAmount);

    playerMoneySelector.innerHTML = `${playerMoneyTemp}`;
}

// RANDOMIZES POKEMON AND DISPLAYS 0th SLOT

function randomizePokemon () {

    for (let i = 0; i < maxPokemonTemp; i++) {
        pokemonNumbers[i] = Math.floor(Math.random() * 833 + 1);
        abilityNumbers[i] = Math.floor(Math.random() * 308);
        natureNumbers[i] = 0;
        heldItemNumbers[i] = 0;
        teraTypeNumbers[i] = 0;
        moveNumber1[i] = Math.floor(Math.random() * 728);
        moveNumber2[i] = Math.floor(Math.random() * 728);
        moveNumber3[i] = Math.floor(Math.random() * 728);
        moveNumber4[i] = Math.floor(Math.random() * 728);

        let bstTemp = parseInt(pokemonData[pokemonNumbers[i]][4]) + parseInt(pokemonData[pokemonNumbers[i]][5]) + parseInt(pokemonData[pokemonNumbers[i]][6]) + parseInt(pokemonData[pokemonNumbers[i]][7]) + parseInt(pokemonData[pokemonNumbers[i]][8]) + parseInt(pokemonData[pokemonNumbers[i]][9]);

        console.log(`${bstTemp} ${pokemonData[pokemonNumbers[i]]}`);

        while (bstTemp > 600) {
            pokemonNumbers[i] = Math.floor(Math.random() * 836 + 1);
            bstTemp = parseInt(pokemonData[pokemonNumbers[i]][4]) + parseInt(pokemonData[pokemonNumbers[i]][5]) + parseInt(pokemonData[pokemonNumbers[i]][6]) + parseInt(pokemonData[pokemonNumbers[i]][7]) + parseInt(pokemonData[pokemonNumbers[i]][8]) + parseInt(pokemonData[pokemonNumbers[i]][9]);
            console.log("reroll!");
            console.log(`${bstTemp} ${pokemonData[pokemonNumbers[i]]}`);
        }

    }

    let tempSprite;

    if (pokemonData[pokemonNumbers[0]][1]) {
        pokemonName.innerHTML = `${pokemonData[pokemonNumbers[0]][0]} : ${pokemonData[pokemonNumbers[0]][1]}`;
        tempSprite = pokemonData[pokemonNumbers[0]][10];
    } else {
        pokemonName.innerHTML = `${pokemonData[pokemonNumbers[0]][0]}`;
        tempSprite = pokemonData[pokemonNumbers[0]][0];
    }

    tempSprite = tempSprite.replaceAll(" ", "-");

    auctionSprite.innerHTML = `<img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/${tempSprite.toLowerCase()}.png">`;
    
    types.innerHTML = `<h3 class="${pokemonData[pokemonNumbers[0]][2]}">${pokemonData[pokemonNumbers[0]][2].toUpperCase()}</h3><h3 class="${pokemonData[pokemonNumbers[0]][3]}">${pokemonData[pokemonNumbers[0]][3].toUpperCase()}</h3>`;

    hpValue.innerHTML = `${pokemonData[pokemonNumbers[0]][4]}`;
    atkValue.innerHTML = `${pokemonData[pokemonNumbers[0]][5]}`;
    defValue.innerHTML = `${pokemonData[pokemonNumbers[0]][6]}`;
    satkValue.innerHTML = `${pokemonData[pokemonNumbers[0]][7]}`;
    sdefValue.innerHTML = `${pokemonData[pokemonNumbers[0]][8]}`;
    spdValue.innerHTML = `${pokemonData[pokemonNumbers[0]][9]}`;
    bstValue.innerHTML = `BST ${parseInt(pokemonData[pokemonNumbers[0]][4]) + parseInt(pokemonData[pokemonNumbers[0]][5]) + parseInt(pokemonData[pokemonNumbers[0]][6]) + parseInt(pokemonData[pokemonNumbers[0]][7]) + parseInt(pokemonData[pokemonNumbers[0]][8]) + parseInt(pokemonData[pokemonNumbers[0]][9])}`;

    hpBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[0]][4]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[0]][4])};"></div>`;
    atkBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[0]][5]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[0]][5])};"></div>`;
    defBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[0]][6]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[0]][6])};"></div>`;
    satkBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[0]][7]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[0]][7])};"></div>`;
    sdefBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[0]][8]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[0]][8])};"></div>`;
    spdBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[0]][9]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[0]][9])};"></div>`;


    abilityNameValue.innerHTML = `${abilityData[abilityNumbers[0]][1]}`;
    abilityDesc.innerHTML = `${abilityData[abilityNumbers[0]][2]}`;

    moveName1.innerHTML = `${moveData[moveNumber1[0]][0]}`;
    moveType1.innerHTML = `${moveData[moveNumber1[0]][1].toUpperCase()}`;
    moveType1.className = `${moveData[moveNumber1[0]][1]}`
    moveCategory1.src = `assets/${moveData[moveNumber1[0]][2]}Move.png`
    movePower1.innerHTML = `PWR ${moveData[moveNumber1[0]][3]}`;
    moveAccuracy1.innerHTML = `ACC ${moveData[moveNumber1[0]][4]}`;
    movePP1.innerHTML = `PP ${moveData[moveNumber1[0]][5]}`;
    moveDesc1.innerHTML = `${moveData[moveNumber1[0]][6]}`;

    moveName2.innerHTML = `${moveData[moveNumber2[0]][0]}`;
    moveType2.innerHTML = `${moveData[moveNumber2[0]][1].toUpperCase()}`;
    moveType2.className = `${moveData[moveNumber2[0]][1]}`
    moveCategory2.src = `assets/${moveData[moveNumber2[0]][2]}Move.png`
    movePower2.innerHTML = `PWR ${moveData[moveNumber2[0]][3]}`;
    moveAccuracy2.innerHTML = `ACC ${moveData[moveNumber2[0]][4]}`;
    movePP2.innerHTML = `PP ${moveData[moveNumber2[0]][5]}`;
    moveDesc2.innerHTML = `${moveData[moveNumber2[0]][6]}`;

    moveName3.innerHTML = `${moveData[moveNumber3[0]][0]}`;
    moveType3.innerHTML = `${moveData[moveNumber3[0]][1].toUpperCase()}`;
    moveType3.className = `${moveData[moveNumber3[0]][1]}`
    moveCategory3.src = `assets/${moveData[moveNumber3[0]][2]}Move.png`
    movePower3.innerHTML = `PWR ${moveData[moveNumber3[0]][3]}`;
    moveAccuracy3.innerHTML = `ACC ${moveData[moveNumber3[0]][4]}`;
    movePP3.innerHTML = `PP ${moveData[moveNumber3[0]][5]}`;
    moveDesc3.innerHTML = `${moveData[moveNumber3[0]][6]}`;

    moveName4.innerHTML = `${moveData[moveNumber4[0]][0]}`;
    moveType4.innerHTML = `${moveData[moveNumber4[0]][1].toUpperCase()}`;
    moveType4.className = `${moveData[moveNumber4[0]][1]}`
    moveCategory4.src = `assets/${moveData[moveNumber4[0]][2]}Move.png`
    movePower4.innerHTML = `PWR ${moveData[moveNumber4[0]][3]}`;
    moveAccuracy4.innerHTML = `ACC ${moveData[moveNumber4[0]][4]}`;
    movePP4.innerHTML = `PP ${moveData[moveNumber4[0]][5]}`;
    moveDesc4.innerHTML = `${moveData[moveNumber4[0]][6]}`;

}

function changePokemon(alterDirection) {

    let tempPokemonPosition = parseInt(currentPokemon.innerHTML);

    if (tempPokemonPosition == 1 && alterDirection == -1) {
        tempPokemonPosition = maxPokemonTemp;
    }
    else if (tempPokemonPosition == maxPokemonTemp && alterDirection == 1) {
        tempPokemonPosition = 1;
    } else {
        tempPokemonPosition = tempPokemonPosition + alterDirection;
    }

    currentPokemon.innerHTML = `${tempPokemonPosition}`;
    tempPokemonPosition --;

    let tempSprite;

    if (pokemonData[pokemonNumbers[tempPokemonPosition]][1]) {
        pokemonName.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][0]} : ${pokemonData[pokemonNumbers[tempPokemonPosition]][1]}`;
        tempSprite = pokemonData[pokemonNumbers[tempPokemonPosition]][10];
    } else {
        pokemonName.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][0]}`;
        tempSprite = pokemonData[pokemonNumbers[tempPokemonPosition]][0];
    }

    tempSprite = tempSprite.replaceAll(" ", "-");

    auctionSprite.innerHTML = `<img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/${tempSprite.toLowerCase()}.png">`;
    
    types.innerHTML = `<h3 class="${pokemonData[pokemonNumbers[tempPokemonPosition]][2]}">${pokemonData[pokemonNumbers[tempPokemonPosition]][2].toUpperCase()}</h3><h3 class="${pokemonData[pokemonNumbers[tempPokemonPosition]][3]}">${pokemonData[pokemonNumbers[tempPokemonPosition]][3].toUpperCase()}</h3>`;

    hpValue.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][4]}`;
    atkValue.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][5]}`;
    defValue.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][6]}`;
    satkValue.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][7]}`;
    sdefValue.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][8]}`;
    spdValue.innerHTML = `${pokemonData[pokemonNumbers[tempPokemonPosition]][9]}`;
    bstValue.innerHTML = `BST ${parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][4]) + parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][5]) + parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][6]) + parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][7]) + parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][8]) + parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][9])}`;

    hpBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[tempPokemonPosition]][4]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][4])};"></div>`;
    atkBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[tempPokemonPosition]][5]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][5])};"></div>`;
    defBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[tempPokemonPosition]][6]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][6])};"></div>`;
    satkBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[tempPokemonPosition]][7]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][7])};"></div>`;
    sdefBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[tempPokemonPosition]][8]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][8])};"></div>`;
    spdBar.innerHTML = `<div class="filledBar" style="flex-grow: ${pokemonData[pokemonNumbers[tempPokemonPosition]][9]};"></div><div class="emptyBar" style="flex-grow: ${200 - parseInt(pokemonData[pokemonNumbers[tempPokemonPosition]][9])};"></div>`;

    abilityNameValue.innerHTML = `${abilityData[abilityNumbers[tempPokemonPosition]][1]}`;
    abilityDesc.innerHTML = `${abilityData[abilityNumbers[tempPokemonPosition]][2]}`;

    nature.selectedIndex = natureNumbers[tempPokemonPosition];
    heldItem.selectedIndex = heldItemNumbers[tempPokemonPosition];
    teraType.selectedIndex = teraTypeNumbers[tempPokemonPosition];

    moveName1.innerHTML = `${moveData[moveNumber1[tempPokemonPosition]][0]}`;
    moveType1.innerHTML = `${moveData[moveNumber1[tempPokemonPosition]][1].toUpperCase()}`;
    moveType1.className = `${moveData[moveNumber1[tempPokemonPosition]][1]}`
    moveCategory1.src = `assets/${moveData[moveNumber1[tempPokemonPosition]][2]}Move.png`
    movePower1.innerHTML = `PWR ${moveData[moveNumber1[tempPokemonPosition]][3]}`;
    moveAccuracy1.innerHTML = `ACC ${moveData[moveNumber1[tempPokemonPosition]][4]}`;
    movePP1.innerHTML = `PP ${moveData[moveNumber1[tempPokemonPosition]][5]}`;
    moveDesc1.innerHTML = `${moveData[moveNumber1[tempPokemonPosition]][6]}`;

    moveName2.innerHTML = `${moveData[moveNumber2[tempPokemonPosition]][0]}`;
    moveType2.innerHTML = `${moveData[moveNumber2[tempPokemonPosition]][1].toUpperCase()}`;
    moveType2.className = `${moveData[moveNumber2[tempPokemonPosition]][1]}`
    moveCategory2.src = `assets/${moveData[moveNumber2[tempPokemonPosition]][2]}Move.png`
    movePower2.innerHTML = `PWR ${moveData[moveNumber2[tempPokemonPosition]][3]}`;
    moveAccuracy2.innerHTML = `ACC ${moveData[moveNumber2[tempPokemonPosition]][4]}`;
    movePP2.innerHTML = `PP ${moveData[moveNumber2[tempPokemonPosition]][5]}`;
    moveDesc2.innerHTML = `${moveData[moveNumber2[tempPokemonPosition]][6]}`;

    moveName3.innerHTML = `${moveData[moveNumber3[tempPokemonPosition]][0]}`;
    moveType3.innerHTML = `${moveData[moveNumber3[tempPokemonPosition]][1].toUpperCase()}`;
    moveType3.className = `${moveData[moveNumber3[tempPokemonPosition]][1]}`
    moveCategory3.src = `assets/${moveData[moveNumber3[tempPokemonPosition]][2]}Move.png`
    movePower3.innerHTML = `PWR ${moveData[moveNumber3[tempPokemonPosition]][3]}`;
    moveAccuracy3.innerHTML = `ACC ${moveData[moveNumber3[tempPokemonPosition]][4]}`;
    movePP3.innerHTML = `PP ${moveData[moveNumber3[tempPokemonPosition]][5]}`;
    moveDesc3.innerHTML = `${moveData[moveNumber3[tempPokemonPosition]][6]}`;

    moveName4.innerHTML = `${moveData[moveNumber4[tempPokemonPosition]][0]}`;
    moveType4.innerHTML = `${moveData[moveNumber4[tempPokemonPosition]][1].toUpperCase()}`;
    moveType4.className = `${moveData[moveNumber4[tempPokemonPosition]][1]}`
    moveCategory4.src = `assets/${moveData[moveNumber4[tempPokemonPosition]][2]}Move.png`
    movePower4.innerHTML = `PWR ${moveData[moveNumber4[tempPokemonPosition]][3]}`;
    moveAccuracy4.innerHTML = `ACC ${moveData[moveNumber4[tempPokemonPosition]][4]}`;
    movePP4.innerHTML = `PP ${moveData[moveNumber4[tempPokemonPosition]][5]}`;
    moveDesc4.innerHTML = `${moveData[moveNumber4[tempPokemonPosition]][6]}`;

    if (hpTitleChoice[tempPokemonPosition] == true) {
        document.querySelector("#hpTitle").className = "selectedEV clickable";
    } else {
        document.querySelector("#hpTitle").className = "clickable";
    }
    if (atkTitleChoice[tempPokemonPosition] == true) {
        document.querySelector("#atkTitle").className = "selectedEV clickable";
    } else {
        document.querySelector("#atkTitle").className = "clickable";
    }
    if (defTitleChoice[tempPokemonPosition] == true) {
        document.querySelector("#defTitle").className = "selectedEV clickable";
    } else {
        document.querySelector("#defTitle").className = "clickable";
    }
    if (satkTitleChoice[tempPokemonPosition] == true) {
        document.querySelector("#satkTitle").className = "selectedEV clickable";
    } else {
        document.querySelector("#satkTitle").className = "clickable";
    }
    if (sdefTitleChoice[tempPokemonPosition] == true) {
        document.querySelector("#sdefTitle").className = "selectedEV clickable";
    } else {
        document.querySelector("#sdefTitle").className = "clickable";
    }
    if (spdTitleChoice[tempPokemonPosition] == true) {
        document.querySelector("#spdTitle").className = "selectedEV clickable";
    } else {
        document.querySelector("#spdTitle").className = "clickable";
    }

    if (claimed[tempPokemonPosition+1]) {
        claimedImg.className = "";
    } else {
        claimedImg.className = "hidden";
    }
}

function setNature () {
    natureNumbers[currentPokemon.innerHTML-1] = nature.selectedIndex;
}

function setHeldItem () {
    heldItemNumbers[currentPokemon.innerHTML-1] = heldItem.selectedIndex;
}

function setTeraType () {
    teraTypeNumbers[currentPokemon.innerHTML-1] = teraType.selectedIndex;
}

function rerollMove (moveSlot, moveName, moveType, moveCategory, movePower, moveAccuracy, movePP, moveDesc) {
    let tempPokemonPosition = parseInt(currentPokemon.innerHTML) - 1;

    console.log(moveSlot[tempPokemonPosition]);

    moveSlot[tempPokemonPosition] = Math.floor(Math.random() * 728);

    console.log(moveSlot[tempPokemonPosition]);

    moveName.innerHTML = `${moveData[moveSlot[tempPokemonPosition]][0]}`;
    moveType.innerHTML = `${moveData[moveSlot[tempPokemonPosition]][1].toUpperCase()}`;
    moveType.className = `${moveData[moveSlot[tempPokemonPosition]][1]}`
    moveCategory.src = `assets/${moveData[moveSlot[tempPokemonPosition]][2]}Move.png`
    movePower.innerHTML = `PWR ${moveData[moveSlot[tempPokemonPosition]][3]}`;
    moveAccuracy.innerHTML = `ACC ${moveData[moveSlot[tempPokemonPosition]][4]}`;
    movePP.innerHTML = `PP ${moveData[moveSlot[tempPokemonPosition]][5]}`;
    moveDesc.innerHTML = `${moveData[moveSlot[tempPokemonPosition]][6]}`;

}

function updateEV (evChoice) {
    let tempEV = document.querySelector(`#${evChoice}`);
    let tempPokemonPosition = parseInt(currentPokemon.innerHTML) - 1;
    let tempEVChoice = `${evChoice}Choice`;

    console.log(evNumbers[tempPokemonPosition]);

    if (tempEVChoice == "hpTitleChoice" && (evNumbers[tempPokemonPosition] < 2 || hpTitleChoice[tempPokemonPosition] == true)) {
        hpTitleChoice[tempPokemonPosition] = !hpTitleChoice[tempPokemonPosition];

        if (hpTitleChoice[tempPokemonPosition] == true) {
            evNumbers[tempPokemonPosition]++;
            tempEV.className = "selectedEV clickable";
        } else if (hpTitleChoice[tempPokemonPosition] == false) {
            evNumbers[tempPokemonPosition]--;
            tempEV.className = "clickable";
        }
    } else if (tempEVChoice == "atkTitleChoice" && (evNumbers[tempPokemonPosition] < 2 || atkTitleChoice[tempPokemonPosition] == true)) {
        atkTitleChoice[tempPokemonPosition] = !atkTitleChoice[tempPokemonPosition];

        if (atkTitleChoice[tempPokemonPosition] == true) {
            evNumbers[tempPokemonPosition]++;
            tempEV.className = "selectedEV clickable";
        } else if (atkTitleChoice[tempPokemonPosition] == false) {
            evNumbers[tempPokemonPosition]--;
            tempEV.className = "clickable";
        }
    } else if (tempEVChoice == "defTitleChoice" && (evNumbers[tempPokemonPosition] < 2 || defTitleChoice[tempPokemonPosition] == true)) {
        defTitleChoice[tempPokemonPosition] = !defTitleChoice[tempPokemonPosition];

        if (defTitleChoice[tempPokemonPosition] == true) {
            evNumbers[tempPokemonPosition]++;
            tempEV.className = "selectedEV clickable";
        } else if (defTitleChoice[tempPokemonPosition] == false) {
            evNumbers[tempPokemonPosition]--;
            tempEV.className = "clickable";
        }
    } else if (tempEVChoice == "satkTitleChoice" && (evNumbers[tempPokemonPosition] < 2 || satkTitleChoice[tempPokemonPosition] == true)) {
        satkTitleChoice[tempPokemonPosition] = !satkTitleChoice[tempPokemonPosition];

        if (satkTitleChoice[tempPokemonPosition] == true) {
            evNumbers[tempPokemonPosition]++;
            tempEV.className = "selectedEV clickable";
        } else if (satkTitleChoice[tempPokemonPosition] == false) {
            evNumbers[tempPokemonPosition]--;
            tempEV.className = "clickable";
        }
    } else if (tempEVChoice == "sdefTitleChoice" && (evNumbers[tempPokemonPosition] < 2 || sdefTitleChoice[tempPokemonPosition] == true)) {
        sdefTitleChoice[tempPokemonPosition] = !sdefTitleChoice[tempPokemonPosition];

        if (sdefTitleChoice[tempPokemonPosition] == true) {
            evNumbers[tempPokemonPosition]++;
            tempEV.className = "selectedEV clickable";
        } else if (sdefTitleChoice[tempPokemonPosition] == false) {
            evNumbers[tempPokemonPosition]--;
            tempEV.className = "clickable";
        }
    } else if (tempEVChoice == "spdTitleChoice" && (evNumbers[tempPokemonPosition] < 2 || spdTitleChoice[tempPokemonPosition] == true)) {
        spdTitleChoice[tempPokemonPosition] = !spdTitleChoice[tempPokemonPosition];

        if (spdTitleChoice[tempPokemonPosition] == true) {
            evNumbers[tempPokemonPosition]++;
            tempEV.className = "selectedEV clickable";
        } else if (spdTitleChoice[tempPokemonPosition] == false) {
            evNumbers[tempPokemonPosition]--;
            tempEV.className = "clickable";
        }
    }
}



function addPokemonToTeam (slotNum, playerSlotNum) {
    let pokeSlot = document.querySelector(`#pkmnSlot${slotNum}${playerSlotNum}`);
    let tempPokemonPosition = parseInt(currentPokemon.innerHTML) - 1;
    let tempSprite = pokemonData[pokemonNumbers[tempPokemonPosition]][0];

    if (pokemonData[pokemonNumbers[tempPokemonPosition]][10]) {
        tempSprite = pokemonData[pokemonNumbers[tempPokemonPosition]][10];
    }
    
    if (claimed[tempPokemonPosition+1] != true) {
        tempSprite = tempSprite.replaceAll(" ", "-");

        pokeSlot.innerHTML = `
        <i class="fa-solid fa-minus clickable slotRemove" onclick='removePokemonFromTeam(${slotNum}, ${playerSlotNum}, ${tempPokemonPosition})' tabindex="0"></i>
        <i class="fa-regular fa-copy clickable slotCopy" tabindex="0" onclick="copy(${tempPokemonPosition})"></i>
        <img src="https://img.pokemondb.net/sprites/scarlet-violet/normal/${tempSprite.toLowerCase()}.png">`;

        claimed[tempPokemonPosition+1] = true;
        claimedImg.className = "";

        playerClaimed[playerSlotNum-1][slotNum-1] = pokemonNumbers[tempPokemonPosition+1];
    }
}

function removePokemonFromTeam (slotNum, playerSlotNum, setPokemonNumber) {
    let pokeSlot = document.querySelector(`#pkmnSlot${slotNum}${playerSlotNum}`);
    let tempPokemonPosition = parseInt(currentPokemon.innerHTML)-1;

    pokeSlot.innerHTML = `<i class='fa-solid fa-plus pkmnAdd clickable' onclick="addPokemonToTeam(${slotNum}, ${playerSlotNum})" tabindex="0"></i>`;
    claimed[setPokemonNumber+1] = false;
    if (pokemonNumbers[tempPokemonPosition+1] === playerClaimed[playerSlotNum-1][slotNum-1]) {
        claimedImg.className = "hidden";
    }
}

function copy (pokemonIndex) {
    let copyName = `${pokemonData[pokemonNumbers[pokemonIndex]][0]}`;
    let copyItem = `${heldItem[heldItemNumbers[pokemonIndex]].value}`;
    let copyAbility = `${abilityData[abilityNumbers[pokemonIndex]][1]}`;
    let copyTeraType = `${teraType[teraTypeNumbers[pokemonIndex]].value}`;
    let copyHP = 0;
    let copyATK = 0;
    let copyDEF = 0;
    let copySATK = 0;
    let copySDEF = 0;
    let copySPD = 0;
    let copyNature = `${nature[natureNumbers[pokemonIndex]].value}`;
    let copyMove1 = `${moveData[moveNumber1[pokemonIndex]][0]}`;
    let copyMove2 = `${moveData[moveNumber2[pokemonIndex]][0]}`;
    let copyMove3 = `${moveData[moveNumber3[pokemonIndex]][0]}`;
    let copyMove4 = `${moveData[moveNumber4[pokemonIndex]][0]}`;

    if (pokemonData[pokemonNumbers[pokemonIndex]][10]) {
        copyName = `${pokemonData[pokemonNumbers[pokemonIndex]][10]}`;
        copyName = copyName.replaceAll(" ", "-");
    }

    if (hpTitleChoice[pokemonIndex] == true) {
        copyHP = 252;
    }
    if (atkTitleChoice[pokemonIndex] == true) {
        copyATK = 252;
    }
    if (defTitleChoice[pokemonIndex] == true) {
        copyDEF = 252;
    }
    if (satkTitleChoice[pokemonIndex] == true) {
        copySATK = 252;
    }
    if (sdefTitleChoice[pokemonIndex] == true) {
        copySDEF = 252;
    }
    if (spdTitleChoice[pokemonIndex] == true) {
        copySPD = 252;
    }

    let natureSplit = copyNature.search(" ");
    copyNature = copyNature.slice(0, natureSplit);
    
    console.log(natureSplit);
    navigator.clipboard.writeText(`${copyName} @ ${copyItem}
Ability: ${copyAbility}
Tera Type: ${copyTeraType}
EVs: ${copyHP} HP / ${copyATK} Atk / ${copyDEF} Def / ${copySATK} SpA / ${copySDEF} SpD / ${copySPD} Spe
${copyNature} Nature
- ${copyMove1}
- ${copyMove2}
- ${copyMove3}
- ${copyMove4}`);
}