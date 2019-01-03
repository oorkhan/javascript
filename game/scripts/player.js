let player;
function Player(classType, hp, mp, str, agi, dex) {
    this.class = classType;
    this.hp = hp;
    this.mp = mp;
    this.str = str;
    this.agi = agi;
    this.dex = dex;
}

let PlayerMoves = {
    calcAttack: function () {
        let getPlayerAgility = player.agi;
        let getEnemyAgility = enemy.agi;

        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mp > 0) {
                calcBaseDamage = player.str * player.mp / 1000;
            } else {
                calcBaseDamage = player.str * player.dex / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agi / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            console.log(attackValues);
            return attackValues;
            
        }
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mp > 0) {
                calcBaseDamage = enemy.str * enemy.mp / 1000;
            } else {
                calcBaseDamage = enemy.str * enemy.dex / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agi / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        let getPlayerHealth = document.querySelector('.player-hp');
        let getEnemyHealth = document.querySelector('.enemy-hp');
        if (getPlayerAgility >= getEnemyAgility) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.hp = enemy.hp - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times");
            if (enemy.hp <= 0) {
                alert("you have won refresh the browser to start over.");
                getEnemyHealth.innerHTML = "Health: 0";
                getPlayerHealth.innerHTML = "Health: " + player.hp;
            } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.hp;
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.hp = player.hp - totalDamage;
                alert("Enemy hits " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times");
                if (player.hp <= 0) {
                    alert("you have lost refresh the browser to start over.");
                    getPlayerHealth.innerHTML = "Health: 0";
                    getEnemyHealth.innerHTML = "Health: " + enemy.hp;
                } else {
                    getPlayerHealth.innerHTML = "Health: " + player.hp;
                }
            }
        }
    }
}

//enemy
