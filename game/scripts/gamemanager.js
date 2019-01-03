let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 50, 150, 70, 70)
                break;
            case "Giant":
                player = new Player(classType, 250, 10, 200, 70, 80)
                break;
            case "Archer":
                player = new Player(classType, 180, 70, 100, 100, 100)
                break;
            case "Witch":
                player = new Player(classType, 150, 250, 50, 60, 50)
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = "<img src='images/" + classType.toLowerCase() + ".jpg' class='img-avatar'><div><h3>" + classType + "</h3><p class='player-hp'>Health: " + player.hp + "</p><p>Mana: " + player.mp + "</p><p>Strength: " + player.str + "</p><p>Agility: " + player.agi + "</p><p>Dexterity: " + player.dex + "</p></div>";
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = "<p>Task: find your enemy!</p>";
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search enemy.</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        let enemy00 = new Enemy("Goblin", 100, 50, 70, 100, 90);
        let enemy02 = new Enemy("Troll", 200, 10, 200, 70, 50);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy02;
                break;
        }
        getHeader.innerHTML = "<p>Choose your move.</p>"
        getActions.innerHTML = '<a href="#" class="btn-action" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="images/' + enemy.type.toLowerCase() + '.jpg" class="img - avatar"><div><h3>' + enemy.type + '</h3><p class="enemy-hp">Health: ' + enemy.hp + '</p><p>Mana: ' + enemy.mp + '</p><p>Strength: ' + enemy.str + '</p><p>Agility: ' + enemy.agi + '</p><p>Dexterity: ' + enemy.dex + '</p></div>';
    }

}