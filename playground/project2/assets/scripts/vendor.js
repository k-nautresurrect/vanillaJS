const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const playerLifeEl = document.getElementById('player-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

//work for one time 
export function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

//decrease health of monster
export function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

//decrease health of palayer
export function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

//increase health on press of heal button
export function increasePlayerHealth(healValue) {
  playerHealthBar.value = +(playerHealthBar.value + healValue);
}

//reset
export function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

//health 0 then life --
export function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

//life -- health 100
export function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

let obj = {
  monsterHealthBar:monsterHealthBar,
  playerHealthBar:playerHealthBar,
  bonusLifeEl:bonusLifeEl,
  attackBtn:attackBtn,
  strongAttackBtn:strongAttackBtn,
  healBtn:healBtn,
  logBtn:logBtn,
  playerLifeEl:playerLifeEl,
}

export default obj;