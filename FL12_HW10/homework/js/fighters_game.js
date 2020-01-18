class Fighter {
    constructor(person) {
        let name = person.name;
        let dmg = person.damage;
        let hp = person.hp;
        let str = person.strength;
        let agil = person.agility;
        let fullHp = person.hp;
        let wins = 0;
        let losses = 0;
        this.getName = function() {
            return name;
        };
        this.getDamage = function() {
            return dmg;
        };
        this.getStrength = function() {
            return str;
        };
        this.getAgility = function() {
            return agil;
        };
        this.getHealth = function() {
            return hp;
        };
        this.dealDamage = function(dmg) {
            if (hp > 0 && dmg < hp) {
                hp -= dmg;
            } else {
                hp = 0;
            }
        };
        this.attack = function(defender) {
            const successRange = 100;
            let successPoint = Math.floor(Math.random() * successRange + 1);
            let attackProbability = successRange - (defender.getStrength() + defender.getAgility());
            if (attackProbability <= successPoint) {
                defender.dealDamage(dmg);
                console.log(`${name} makes ${dmg} damage to ${defender.getName()}`);
            } else {
                console.log(`${name} attack missed`);
            }
        };
        this.heal = function(addHp) {
            if (fullHp > hp + addHp) {
                hp += addHp;
            } else {
                hp = fullHp;
            }
        };
        this.addWin = function() {
            wins++;
        };
        this.addLoss = function() {
            losses++;
        };
        this.logCombatHistory = function() {
            console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
        };
    }
}

function battle(unit1, unit2) {
    let hp1 = unit1.getHealth();
    let hp2 = unit2.getHealth();

    if (hp1 > 0 && hp2 > 0) {
        while (hp1 > 0 && hp2 > 0) {
            unit1.attack(unit2);
            hp2 = unit2.getHealth();
            if (hp2 > 0) {
                unit2.attack(unit1);
                hp1 = unit1.getHealth();
            }
        }
        if (hp1 > 0) {
            unit1.addWin();
            unit2.addLoss();
            console.log(`${unit1.getName()} has won!`);
        } else {
            unit2.addWin();
            unit1.addLoss();
            console.log(`${unit2.getName()} has won!`);
        }
    } else if (hp1 === 0) {
        return console.log(`${unit1.getName()} is dead`);
    } else {
        return console.log(`${unit2.getName()} is dead`)
    }
}

const fighter1 = new Fighter({
    name: 'Maximus',
    damage: 20,
    strength: 20,
    agility: 15,
    hp: 100
});

const fighter2 = new Fighter({
    name: 'Commodus',
    damage: 25,
    strength: 25,
    agility: 20,
    hp: 90
});

battle(fighter1, fighter2);
console.log(`${fighter1.getName()} hp ${fighter1.getHealth()}`);
console.log(`${fighter2.getName()} hp ${fighter2.getHealth()}`);
fighter1.logCombatHistory();
fighter2.logCombatHistory();
