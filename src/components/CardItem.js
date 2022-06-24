import {React, useState} from 'react';
import Button from './Button';

function CardItem({weapon}) {
    const initialState = (
        weapon.levels.map((level) => {
            console.log(level);
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

    const [weaponInfo, setWeaponInfo] = useState(initialState)

    const clearState = () => {
        setWeaponInfo(initialState)
    }

    const upgradeLevel1 = () => {
        setWeaponInfo(
    weapon.levels.map((level) => {
            if(level.level === 1) {
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
    }

    const upgradeLevel2 = () => {
        setWeaponInfo(
    weapon.levels.map((level) => {
            if(level.level === 2) {
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
    }

    const upgradeLevel3 = () => {
        setWeaponInfo(
    weapon.levels.map((level) => {
            if(level.level === 3) {
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
    }

    const upgradeLevel4 = () => {
        setWeaponInfo(
    weapon.levels.map((level) => {
            if(level.level === 4) {
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
    }

    const upgradeLevel5 = () => {
        setWeaponInfo(
    weapon.levels.map((level) => {
            if(level.level === 5) {
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
    }

        return (
        <article className="weapon-info-container">
            <div>
                <img src={weapon.src} alt={weapon.alt} className="card-image" />
            </div>
            <div>
                <h3>{weapon.title}</h3>
                <p>{weapon.description}</p>
                <ul>
                {weaponInfo}
                </ul>
                <Button className="level-button" text="level 0" onClick={clearState} />
                <Button className="level-button" text="level 1" onClick={upgradeLevel1} />
                <Button className="level-button" text="level 2" onClick={upgradeLevel2} />
                <Button className="level-button" text="level 3" onClick={upgradeLevel3} />
                <Button className="level-button" text="level 4" onClick={upgradeLevel4} />
                <Button className="level-button" text="level 5" onClick={upgradeLevel5} />
            </div>
        </article>
        )
}

export default CardItem
