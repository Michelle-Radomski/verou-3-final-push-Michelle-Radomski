import React from 'react';

function CardItem({weapon}) {
        return (
        <article>
            <div>
                <img src="/" alt="/" />
            </div>
            <div>
                <h3>{weapon.title}</h3>
                <p>{weapon.description}</p>
                <ul>
                    <li>Damage: {weapon.damage}</li>
                    {weapon.powerAttackDamage ? <li>Power Attack Damage: {weapon.powerAttackDamage}</li> : ""}
                    {weapon.criticalHitDamage ? <li>Critical Hit Damage: {weapon.criticalHitDamage}</li> : ""}
                    {weapon.knockbackStrength ? <li>Knockback Strength: {weapon.knockbackStrength}</li> : ""}
                    {weapon.extraTargets ? <li>Extra Targets: {weapon.extraTargets}</li> : ""}
                    {weapon.meleeDamage ? <li>Melee Damage: {weapon.meleeDamage}</li> : ""}
                    {weapon.uses ? <li>Uses: {weapon.uses}</li> : ""}
                    {weapon.stunChance ? <li>Stun Chance: {weapon.stunChance}</li> : ""}
                    {weapon.hitPoints ? <li>Hit Points: {weapon.hitPoints}</li> : ""}
                </ul>
            </div>
        </article>
        )
}

export default CardItem
