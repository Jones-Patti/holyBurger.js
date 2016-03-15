var enemyTypes = {
	pistolPep: 0,
	slimShakey: 1,
	terribleTom: 2
};

function Character()
{
	this.attackValue = 1;
	this.healthPoints = 20;
            this.defense = 1;
	this.currency = 0;
}
	
function Enemy(enemyType)
{
	this.healthPoints = 10;
	this.attackValue = 1;
	this.currencyValue = 2;
	this.defense = 1;
	if (enemyType == enemyTypes.pistolPep)
	{
		this.healthPoints = 7;
	}
	else if (enemyType == enemyType.slimShakey)
	{
		this.attackValue = 2;
	}
	else if (enemyType == enemyType.terribleTom)
	{
		this.healthPoints = 50;
		this.attackValue = 5;
	}
	else
	{
		throw ArgumentException('Enemy type not recognized.')
	}
}

var holyBurger = new Character();
var pistolPep = new Enemy(enemyTypes.pistolPep);
var slimShakey = new Enemy(enemyTypes.slimShakey);
var terribleTom = new Enemy(enemyTypes.terribleTom);

function attack(attacker,defender)
{
	//10 & 10 -> 5
	//a & a -> a/2
	//10 & 5 -> (⅔)10 == 6.666...
	//2 & 1 -> 4/3 = 1.333...
	//1 & 2 -> ⅓ 
	//a & d -> h

	//x/10 == y/2
	
	//a * (a / (a + d) ) = 

	var attack = attacker.attackValue;
	var defense = defender.defense;

	var damageDealt = attack * attack / (attack + defense);
	defender.healthPoints -= damageDealt;

	if (defender.healthPoints <= 0)
	{
		if (defender instanceof Enemy)
		{
			destroyEnemy(defender);
		}
		else //the defender must be the character		{
			gameOver();
		}		
	}
}

function createEnemy()
{
var randomNum = Math.floor(Math.random() *3); //0,1,2

//var enemy = new Enemy(randomNum);

var enemy;
if (randomNum == 0)
{
enemy = new Enemy(enemyTypes.pistolPep);
}
else if (randomNum == 1)
{
enemy = new Enemy(enemyTypes.slimShakey);
}
else
{
	enemy = new Enemy(enemyTpes.terribleTom);
}
return enemy;
}

enemies = [];
	
function destroyEnemy(enemy)
{
	holyBurger.currency += enemy.currency;
	//? loadHolyMollies(holyBurger.currency);
	
	//enemies.remove(enemy);

	//use if enemy has a unique identifier
	for (var i = 0; 1 < enemies.length; i++) {
		if (enemies[i].id == enemy.id) {
			enemies.removeAt(i);
			break;
		}
	}
}


function gameOver()
{
	isGameOver = true;
	alert(‘Looks like Holy Burger is now Holy Charcoal.’);
}



