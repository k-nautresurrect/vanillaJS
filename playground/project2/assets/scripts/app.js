import { adjustHealthBars, dealMonsterDamage, dealPlayerDamage, increasePlayerHealth, removeBonusLife, setPlayerHealth} from "./vendor.js";
import elements from './vendor.js'

// constants and variables
const MONSTER_DAMAGE = 14;
const PLAYER_DAMAGE = 10;
const  HEALTH = 100
let playerHealthValue=HEALTH;
let monsterHealthValue=HEALTH;

adjustHealthBars(HEALTH);

// functions
function attackHandler(e) {
    const monsterDamage = dealMonsterDamage(PLAYER_DAMAGE);
    const playerDamage = dealPlayerDamage(MONSTER_DAMAGE);
    playerHealthValue-=playerDamage;
    monsterHealthValue-=monsterDamage;

    if(playerHealthValue<=0)
    {
        if(elements.playerLifeEl.childElementCount != 0)
        {
            removeBonusLife();
            console.log("hiii");
            setPlayerHealth(100);
            playerHealthValue=100;
        }
        else
        {
            if(playerHealthValue<monsterHealthValue)
            {
                alert('You Loose');
            }
            else
            {
                alert('You Win');

            }
        }
    }
    else if(monsterHealthValue<=0)
    {
        alert('You Win');

    }
}

function strongAttack(e)
{
    const monsterDamage=dealMonsterDamage(MONSTER_DAMAGE);
    const playerDamage=dealPlayerDamage(PLAYER_DAMAGE);
}

function heal(e)
{
    const adderToHealth=Math.floor(Math.random()*10);
    if(playerHealthValue>100)
    {
        setPlayerHealth(100);
        playerHealthValue=100;
    }
    else
    {
        playerHealthValue+= adderToHealth;
        increasePlayerHealth(adderToHealth);
    }
}



// event listner
elements.attackBtn.addEventListener('click', attackHandler);
elements.strongAttackBtn.addEventListener('click',strongAttack);
elements.healBtn.addEventListener('click',heal);
// elements.logBtn.addEventListener('click',removeBonusLife);