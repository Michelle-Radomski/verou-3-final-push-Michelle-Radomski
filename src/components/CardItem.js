import {React, useState} from 'react';
import Button from './Button';

function CardItem({weapon}) {
    const initialState = (
        weapon.level0
    )

    const [weaponInfo, setWeaponInfo] = useState(initialState)

    const clearState = () => {
        setWeaponInfo(initialState)
    }

    const upgradeLevel1 = () => {
        setWeaponInfo(
            weapon.level1
        )
    }

    const upgradeLevel2 = () => {
        setWeaponInfo(
            weapon.level2
        )
    }

    const upgradeLevel3 = () => {
        setWeaponInfo(
            weapon.level3
        )
    }

    const upgradeLevel4 = () => {
        setWeaponInfo(
            weapon.level4
        )
    }

    const upgradeLevel5 = () => {
        setWeaponInfo(
            weapon.level5
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
                {weaponInfo.damage ? <li>Damage: {weaponInfo.damage}</li> : ""}
                {weaponInfo.powerAttackDamage ? <li>Power Attack Damage: {weaponInfo.powerAttackDamage}</li> : ""}
                {weaponInfo.criticalHitDamage ? <li>Critical Hit Damage: {weaponInfo.criticalHitDamage}</li> : ""}
                {weaponInfo.knockbackStrength ? <li>Knockback Strength: {weaponInfo.knockbackStrength}</li> : ""}
                {weaponInfo.extraTargets ? <li>Extra Targets: {weaponInfo.extraTargets}</li> : ""}
                {weaponInfo.meleeDamage ? <li>Melee Damage: {weaponInfo.meleeDamage}</li> : ""}
                {weaponInfo.uses ? <li>Uses: {weaponInfo.uses}</li> : ""}
                {weaponInfo.stunChance ? <li>Stun Chance: {weaponInfo.stunChance}</li> : ""}
                {weaponInfo.hitPoints ? <li>Hit Points: {weaponInfo.hitPoints}</li> : ""}
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
