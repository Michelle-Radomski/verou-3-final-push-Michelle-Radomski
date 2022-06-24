import crowbar from "../images/crowbar.jpg";
import machete from "../images/machete.jpg";
import baseballBat from "../images/baseball-bat.jpg";
import katana from "../images/katana.jpg";
import axe from "../images/axe.jpg";
import huntingRifle from "../images/hunting-rifle.jpg";
import sledgehammer from "../images/sledgehammer.jpg";
import riotShield from "../images/riot-shield.jpg";
import khopesh from "../images/khopesh.jpg";
import powerFist from "../images/power-fist.jpg";

const weapons = [
    {
        src: crowbar,
        alt: "Crowbar.",
        title: "Crowbar",
        description:
            "Can be used for defense and to break lightweight objects.",
        level0: {
            damage: 8,
            powerAttackDamage: "+60%",
        },
        level1: {
            damage: 12,
            powerAttackDamage: "+60%",
        },
        level2: {
            damage: 16,
            powerAttackDamage: "+60%",
        },
        level3: {
            damage: 20,
            powerAttackDamage: "+60%",
        },
        level4: {
            damage: 24,
            powerAttackDamage: "+60%",
        },
        level5: {
            level: 5,
            damage: 28,
            powerAttackDamage: "+60%",
        },
    },
    {
        src: machete,
        alt: "Machete.",
        title: "Machete",
        description:
            "A weapon with a broad blade usable both in combat and gardening.",
        level0: {
            damage: 30,
            powerAttackDamage: "+30%",
            criticalHitDamage: "+30%",
        },
        level1: {
            damage: 35,
            powerAttackDamage: "+30%",
            criticalHitDamage: "+60%",
        },
        level2: {
            damage: 40,
            powerAttackDamage: "+30%",
            criticalHitDamage: "+60%",
            meleeDamage: "+10%",
        },
        level3: {
            damage: 45,
            powerAttackDamage: "+30%",
            criticalHitDamage: "+90%",
            meleeDamage: "+10%",
        },
        level4: {
            damage: 50,
            powerAttackDamage: "+30%",
            criticalHitDamage: "+90%",
            meleeDamage: "+20%",
        },
        level5: {
            damage: 55,
            powerAttackDamage: "+30%",
            criticalHitDamage: "+120%",
            meleeDamage: "+20%",
        },
    },
    {
        src: baseballBat,
        alt: "Baseball Bat.",
        title: "Baseball Bat",
        description:
            "Originally used to hit balls very far, but should double as a handy weapon.",
        level0: {
            damage: 24,
            powerAttackDamage: "+25%",
        },
        level1: {
            level: 1,
            damage: 30,
            powerAttackDamage: "+55%",
        },
        level2: {
            level: 2,
            damage: 36,
            powerAttackDamage: "+55%",
            knockbackStrength: "+110",
        },
        level3: {
            level: 3,
            damage: 42,
            powerAttackDamage: "+85%",
            knockbackStrength: "+110",
        },
        level4: {
            level: 4,
            damage: 48,
            powerAttackDamage: "+85%",
            knockbackStrength: "+220",
        },
        level5: {
            level: 5,
            damage: 54,
            powerAttackDamage: "+125%",
            knockbackStrength: "+220",
        },
    },
    {
        src: katana,
        alt: "Katana.",
        title: "Katana",
        description:
            "Deadly blade weapon inspired by the Land of the Rising Sun.",
        level0: { level: 0, damage: 15, extraTargets: "+1" },
        level1: {
            level: 1,
            damage: 20,
            extraTargets: "+2",
            meleeDamage: "+33.3%",
        },
        level2: {
            level: 2,
            damage: 25,
            extraTargets: "+3",
            meleeDamage: "+50%",
        },
        level3: {
            level: 3,
            damage: 30,
            extraTargets: "+3",
            meleeDamage: "+66.6%",
        },
        level4: {
            level: 4,
            damage: 35,
            extraTargets: "+4",
            meleeDamage: "+100%",
        },
        level5: {
            level: 5,
            damage: 40,
            extraTargets: "+4",
            meleeDamage: "+140%",
        },
    },
    {
        src: axe,
        alt: "Axe.",
        title: "Axe",
        description: "Sharp and sturdy. Can be used to hack things to pieces.",
        level0: {
            level: 0,
            damage: 24,
            powerAttackDamage: "+100%",
            criticalHitDamage: "+20%",
        },
        level1: {
            level: 1,
            damage: 31,
            powerAttackDamage: "+100%",
            criticalHitDamage: "+20%",
        },
        level2: {
            level: 2,
            damage: 38,
            powerAttackDamage: "+100%",
            criticalHitDamage: "+20%",
        },
        level3: {
            level: 3,
            damage: 45,
            powerAttackDamage: "+100%",
            criticalHitDamage: "+20%",
        },
        level4: {
            level: 4,
            damage: 52,
            powerAttackDamage: "+100%",
            criticalHitDamage: "+20%",
        },
        level5: {
            level: 5,
            damage: 59,
            powerAttackDamage: "+100%",
            criticalHitDamage: "+20%",
        },
    },
    {
        src: huntingRifle,
        alt: "Hunting Rifle",
        title: "Hunting Rifle",
        description: "Semi automatic ranged weapon mainly used for hunting.",
        level0: { level: 0, damage: 75, uses: 4 },
        level1: { level: 1, damage: 84, uses: 5 },
        level2: { level: 2, damage: 93, uses: 6 },
        level3: { level: 3, damage: 102, uses: 7 },
        level4: { level: 4, damage: 111, uses: 8 },
        level5: { level: 5, damage: 120, uses: 9 },
    },
    {
        src: sledgehammer,
        alt: "Sledgehammer",
        title: "Sledgehammer",
        description:
            "Heavyweight tool adept at breaking objects and structures.",
        level0: {
            level: 0,
            damage: 50,
            stunChance: "+20%",
            powerAttackDamage: "+50%",
        },
        level1: {
            level: 1,
            damage: 56,
            stunChance: "+20%",
            powerAttackDamage: "+100%",
        },
        level2: {
            level: 2,
            damage: 62,
            stunChance: "+30%",
            powerAttackDamage: "+100%",
        },
        level3: {
            level: 3,
            damage: 68,
            stunChance: "+30%",
            powerAttackDamage: "+150%",
        },
        level4: {
            level: 4,
            damage: 74,
            stunChance: "+40%",
            powerAttackDamage: "+150%",
        },
        level5: {
            level: 5,
            damage: 80,
            stunChance: "+40%",
            powerAttackDamage: "+200%",
        },
    },
    {
        src: riotShield,
        alt: "Riot Shield",
        title: "Riot Shield",
        description:
            "Can be used for both defense and breaking objects. Blocks damage until it breaks.",
        level0: {
            level: 0,
            damage: 18,
            hitPoints: "+80",
            powerAttackDamage: "+200%",
            knockbackStrength: "+150",
        },
        level1: {
            level: 1,
            damage: 20,
            hitPoints: "+100",
            powerAttackDamage: "+200%",
            knockbackStrength: "+160",
        },
        level2: {
            level: 2,
            damage: 22,
            hitPoints: "+120",
            powerAttackDamage: "+200%",
            knockbackStrength: "+170",
        },
        level3: {
            level: 3,
            damage: 24,
            hitPoints: "+140",
            powerAttackDamage: "+200%",
            knockbackStrength: "+150",
        },
        level4: {
            level: 4,
            damage: 26,
            hitPoints: "+160",
            powerAttackDamage: "+200%",
            knockbackStrength: "+190",
        },
        level5: {
            level: 5,
            damage: 28,
            hitPoints: "+180",
            powerAttackDamage: "+200%",
            knockbackStrength: "+200",
        },
    },
    {
        src: khopesh,
        alt: "Khopesh",
        title: "Khopesh",
        description:
            "Powerful sickle-shaped sword wielded by the ancient tomb guards. Forged from mana infused metals.",
        level0: { level: 0, damage: 75, powerAttackDamage: "+30%" },
        level1: {
            level: 1,
            damage: 80,
            powerAttackDamage: "+60%",
            criticalHitDamage: "+33.3%",
        },
        level2: {
            level: 2,
            damage: 85,
            powerAttackDamage: "+90%",
            criticalHitChance: "+2%",
            criticalHitDamage: "+33.3",
        },
        level3: {
            level: 3,
            damage: 90,
            powerAttackDamage: "+120%",
            criticalHitChance: "+2%",
            criticalHitDamage: "+66.6%",
        },
        level4: {
            level: 4,
            damage: 95,
            powerAttackDamage: "+150%",
            criticalHitChance: "+4%",
            criticalHitDamage: "+66.6%",
        },
        level5: {
            level: 5,
            damage: 100,
            powerAttackDamage: "+180%",
            criticalHitChance: "+5",
            criticalHitDamage: "+100%",
        },
    },
    {
        src: powerFist,
        alt: "Power Fist",
        title: "Power Fist",
        description:
            "Mechanical gauntlet that greatly enhances the punch strength.",
        level0: {
            level: 0,
            damage: 75,
            knockbackStrength: "+100",
            powerAttackDamage: "+40%",
            extraTargets: "+1",
        },
        level1: {
            level: 1,
            damage: 80,
            knockbackStrength: "+200",
            powerAttackDamage: "+80%",
            extraTargets: "+2",
        },
        level2: {
            level: 2,
            damage: 85,
            knockbackStrength: "+300",
            powerAttackDamage: "+120%",
            extraTargets: "+2",
        },
        level3: {
            level: 3,
            damage: 90,
            knockbackStrength: "+400",
            powerAttackDamage: "+160%",
            extraTargets: "+3",
        },
        level4: {
            level: 4,
            damage: 95,
            knockbackStrength: "+500",
            powerAttackDamage: "+200%",
            extraTargets: "+3",
        },
        level5: {
            level: 5,
            damage: 100,
            knockbackStrength: "+600",
            powerAttackDamage: "+240%",
            extraTargets: "+4",
        },
    },
];

export default weapons;
