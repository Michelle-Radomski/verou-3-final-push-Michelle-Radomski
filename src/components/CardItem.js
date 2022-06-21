import {React, useState} from 'react';

function CardItem({weapon}) {
    const [weaponInfo, setWeaponInfo] = useState(
        weapon.levels.map((level) => {
            if(level.level === 0) {
            return (
                <>
                {level.damage ? <li>Damage: {level.damage}</li> : ""}
                {level.powerAttackDamage ? <li>Power Attack Damage: {level.powerAttackDamage}</li> : ""}
                {level.criticalHitDamage ? <li>Critical Hit Damage: {level.criticalHitDamage}</li> : ""}
                {level.knockbackStrength ? <li>Knockback Strength: {level.knockbackStrength}</li> : ""}
                {level.extraTargets ? <li>Extra Targets: {level.extraTargets}</li> : ""}
                {level.meleeDamage ? <li>Melee Damage: {level.meleeDamage}</li> : ""}
                {level.uses ? <li>Uses: {level.uses}</li> : ""}
                {level.stunChance ? <li>Stun Chance: {level.stunChance}</li> : ""}
                {level.hitPoints ? <li>Hit Points: {level.hitPoints}</li> : ""}
                </>
            );
            }
        })
    )
        return (
        <article>
            <div>
                <img src={weapon.src} alt={weapon.alt} />
            </div>
            <div>
                <h3>{weapon.title}</h3>
                <p>{weapon.description}</p>
                <ul>
                {weaponInfo}
                </ul>
            </div>
        </article>
        )
}

export default CardItem
