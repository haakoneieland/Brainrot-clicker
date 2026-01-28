// ======================================================
// GAME STATE & DATA - MED DINE BILDER
// ======================================================

let gameState = {
    coins: 0,
    gems: 0,
    prestigePoints: 0,
    level: 1,
    enemyNumber: 1,
    maxEnemyReached: 1,
    bossCleared: {},
    baseDamagePerClick: 10,
    damageUpgrades: 0,
    autoDamage: 0,
    critChance: 5,
    critUpgrades: 0,
    autoUpgrades: 0,
    critMultiplier: 2.0,
    itemDamageMultiplier: 1,
    prestigeMultiplier: 1,
    currentEnemyHP: 100,
    maxEnemyHP: 100,
    bossTimer: 60,
    bossTimerInterval: null,
    currentBiome: 'grass',
    dailyCrateAvailable: true,
    lastDailyCrate: null,
    autoAttack: false,
    autoAttackInterval: null,
    totalDamageDealt: 0,
    totalEnemiesDefeated: 0,
    totalBossesDefeated: 0,
    totalCratesOpened: 0,
    difficultyMultiplier: 1.0,
    enteredCodes: []
};

// DINE BILDE-URL-ER FOR GITHUB PAGES - MED RIKTIG .png.PNG FILENDELSE
const baseURL = 'https://raw.githubusercontent.com/haakoneieland/Brainrot-clicker/main/';

// Bakgrunnsbilder for øyer - MED .png.PNG
const backgroundImages = {
    grass: baseURL + 'Bakgrunn1.png.PNG',
    desert: baseURL + 'Bakgrunn2.png.PNG',
    snow: baseURL + 'Bakgrunn3.png.PNG',
    lava: baseURL + 'Bakgrunn4.png.PNG',
    swamp: baseURL + 'Bakgrunn5.png.PNG',
    ocean: baseURL + 'Bakgrunn6.png.PNG',
    jungle: baseURL + 'Bakgrunn7.png.PNG',
    mountain: baseURL + 'Bakgrunn8.png.PNG',
    ruins: baseURL + 'Bakgrunn9.png.PNG',
    void: baseURL + 'Bakgrunn10.png.PNG'
};

// Øy-bilder - MED .png.PNG
const islandImages = {
    grass: baseURL + 'Øy1.png.PNG',
    desert: baseURL + 'Øy2.png.PNG',
    snow: baseURL + 'Øy3.png.PNG',
    lava: baseURL + 'Øy4.png.PNG',
    swamp: baseURL + 'Øy5.png.PNG',
    ocean: baseURL + 'Øy6.png.PNG',
    jungle: baseURL + 'Øy7.png.PNG',
    mountain: baseURL + 'Øy8.png.PNG',
    ruins: baseURL + 'Øy9.png.PNG',
    void: baseURL + 'Øy10.png.PNG'
};

// Fiende-bilder - MED .png.PNG
const enemyImages = {
    grass: baseURL + 'Gressøy.png.PNG',
    desert: baseURL + 'Ørkenøy.png.PNG',
    snow: baseURL + 'Snøøy.png.PNG',
    lava: baseURL + 'Flammeøy.png.PNG',
    swamp: baseURL + 'Svampøy.png.PNG',
    ocean: baseURL + 'Havøy.png.PNG',
    jungle: baseURL + 'Jungeløy.png.PNG',
    mountain: baseURL + 'Fjelløy.png.PNG',
    ruins: baseURL + 'Ruiner.png.PNG',
    void: baseURL + 'Voidøy.png.PNG'
};

// Boss-bilder - MED .png.PNG
const bossImages = {
    grass: baseURL + 'Gressøyb.png.PNG',
    desert: baseURL + 'Ørkenøyb.png.PNG',
    snow: baseURL + 'Snøøyb.png.PNG',
    lava: baseURL + 'Flammeøyb.png.PNG',
    swamp: baseURL + 'Svampøyb.png.PNG',
    ocean: baseURL + 'Havøyb.png.PNG',
    jungle: baseURL + 'Jungeløyb.png.PNG',
    mountain: baseURL + 'Fjelløyb.png.PNG',
    ruins: baseURL + 'Ruinerb.png.PNG',
    void: baseURL + 'Voidøyb.png.PNG'
};

// UI Ikoner - DINE BILDER - MED .png.PNG
const uiIcons = {
    coin: baseURL + 'Coin.png.PNG',
    gem: baseURL + 'Diamond.png.PNG',
    star: baseURL + 'Star.png.PNG'
};

// Crate-bilder - MED .png.PNG
const crateImages = {
    basic: {
        closed: baseURL + 'Basiccrate.png.PNG',
        open: baseURL + 'Basiccrateåpen.png.PNG'
    },
    advanced: {
        closed: baseURL + 'Advancedcrate.png.PNG',
        open: baseURL + 'Advancedcrateåpen.png.PNG'
    },
    premium: {
        closed: baseURL + 'Premiumcrate.png.PNG',
        open: baseURL + 'Premiumcrateåpen.png.PNG'
    },
    pet: {
        closed: baseURL + 'Petcrate.png.PNG',
        open: baseURL + 'Petcrateåpen.png.PNG'
    },
    godly: {
        closed: baseURL + 'Godlycrate.png.PNG',
        open: baseURL + 'Godlycrateåpen.png.PNG'
    },
    daily: {
        closed: baseURL + 'Dailycrate.png.PNG',
        open: baseURL + 'Dailycrateåpen.png.PNG'
    },
    pet_godly: {
        closed: baseURL + 'Godlypetcrate.png.PNG',
        open: baseURL + 'Godlypetcrateåpen.png.PNG'
    }
};

// Items Database - MED .png.PNG
const items = {
    weapons: [
        { 
            id: 'wood_sword', 
            name: 'Wood Sword', 
            icon: baseURL + 'Woodensword.png.PNG',
            rarity: 'common', 
            damage: 1.1, 
            required: 2 
        },
        { 
            id: 'iron_sword', 
            name: 'Iron Sword', 
            icon: baseURL + 'Ironsword.png.PNG',
            rarity: 'rare', 
            damage: 1.3, 
            required: 3 
        },
        { 
            id: 'steel_sword', 
            name: 'Steel Sword', 
            icon: baseURL + 'Steelsword.png.PNG',
            rarity: 'epic', 
            damage: 1.6, 
            required: 4 
        },
        { 
            id: 'dragon_sword', 
            name: 'Dragon Sword', 
            icon: baseURL + 'Dragonsword.png.PNG',
            rarity: 'legendary', 
            damage: 2.0, 
            required: 5 
        },
        { 
            id: 'excalibur', 
            name: 'Excalibur', 
            icon: baseURL + 'Excalibur.png.PNG',
            rarity: 'ultimate', 
            damage: 3.0, 
            required: 6 
        },
        { 
            id: 'godslayer', 
            name: 'Godslayer', 
            icon: baseURL + 'Godslayer.png.PNG',
            rarity: 'godly', 
            damage: 5.0, 
            required: 8 
        }
    ],
    armor: [
        { 
            id: 'leather_armor', 
            name: 'Leather Armor', 
            icon: baseURL + 'Woodenarmour.png.PNG',
            rarity: 'common', 
            defense: 1.1, 
            required: 2 
        },
        { 
            id: 'chainmail', 
            name: 'Chainmail', 
            icon: baseURL + 'Chainmail.png.PNG',
            rarity: 'rare', 
            defense: 1.2, 
            required: 3 
        },
        { 
            id: 'plate_armor', 
            name: 'Plate Armor', 
            icon: baseURL + 'Platearmour.png.PNG',
            rarity: 'epic', 
            defense: 1.4, 
            required: 4 
        },
        { 
            id: 'dragon_armor', 
            name: 'Dragon Armor', 
            icon: baseURL + 'Dragonarmour.png.PNG',
            rarity: 'legendary', 
            defense: 1.8, 
            required: 5 
        }
    ],
    pets: [
        { 
            id: 'cat', 
            name: 'Lucky Cat', 
            icon: baseURL + 'Luckycat.png.PNG',
            rarity: 'common', 
            bonus: { coins: 1.1 } 
        },
        { 
            id: 'dog', 
            name: 'Guard Dog', 
            icon: baseURL + 'Guarddog.png.PNG',
            rarity: 'rare', 
            bonus: { damage: 1.1 } 
        },
        { 
            id: 'owl', 
            name: 'Wise Owl', 
            icon: baseURL + 'Wiseowl.png.PNG',
            rarity: 'epic', 
            bonus: { crit: 5, auto: 1 } 
        },
        { 
            id: 'dragon', 
            name: 'Baby Dragon', 
            icon: baseURL + 'Babydrage.png.PNG',
            rarity: 'legendary', 
            bonus: { damage: 1.3, crit: 10 } 
        },
        { 
            id: 'phoenix', 
            name: 'Phoenix', 
            icon: baseURL + 'Fønix.png.PNG',
            rarity: 'ultimate', 
            bonus: { damage: 1.5, auto: 5, gems: 1.2 } 
        },
        { 
            id: 'unicorn', 
            name: 'Unicorn', 
            icon: baseURL + 'Uinicorn.png.PNG',
            rarity: 'godly', 
            bonus: { damage: 2.0, crit: 15, coins: 1.5, gems: 1.5 } 
        }
    ],
    artifacts: [
        { 
            id: 'lucky_coin', 
            name: 'Lucky Coin', 
            icon: baseURL + 'Luckycoin.png.PNG',
            rarity: 'common', 
            bonus: { coins: 1.05 } 
        },
        { 
            id: 'crit_gem', 
            name: 'Crit Gem', 
            icon: baseURL + 'Critgem.png.PNG',
            rarity: 'rare', 
            bonus: { crit: 3 } 
        },
        { 
            id: 'damage_orb', 
            name: 'Damage Orb', 
            icon: baseURL + 'Damageorb.png.PNG',
            rarity: 'epic', 
            bonus: { damage: 1.2 } 
        },
        { 
            id: 'auto_core', 
            name: 'Auto Core', 
            icon: baseURL + 'Autocore.png.PNG',
            rarity: 'legendary', 
            bonus: { auto: 10 } 
        },
        { 
            id: 'boss_trophy', 
            name: 'Boss Trophy', 
            icon: baseURL + 'Bosstropthy.png.PNG',
            rarity: 'ultimate', 
            bonus: { damage: 1.5, crit: 10 } 
        },
        { 
            id: 'divine_relic', 
            name: 'Divine Relic', 
            icon: baseURL + 'Divinerelic.png.PNG',
            rarity: 'godly', 
            bonus: { damage: 2.0, crit: 20, coins: 1.5, gems: 1.5 } 
        }
    ]
};

// Inventory System
let inventory = {
    weapons: {},
    armor: {},
    pets: {},
    artifacts: {},
    activePet: null
};

// Achievements System
const achievements = [
    {
        id: 'first_kill',
        name: 'First Blood',
        icon: uiIcons.coin,
        desc: 'Defeat your first enemy',
        condition: () => gameState.totalEnemiesDefeated >= 1,
        progress: () => Math.min(gameState.totalEnemiesDefeated, 1),
        total: 1,
        reward: { coins: 100 },
        claimed: false
    },
    {
        id: 'first_boss',
        name: 'Boss Slayer',
        icon: uiIcons.gem,
        desc: 'Defeat your first boss',
        condition: () => gameState.totalBossesDefeated >= 1,
        progress: () => Math.min(gameState.totalBossesDefeated, 1),
        total: 1,
        reward: { gems: 5, crate: 'basic' },
        claimed: false
    },
    {
        id: 'boss_master',
        name: 'Boss Master',
        icon: crateImages.premium.closed,
        desc: 'Defeat 10 bosses',
        condition: () => gameState.totalBossesDefeated >= 10,
        progress: () => Math.min(gameState.totalBossesDefeated, 10),
        total: 10,
        reward: { gems: 25, crate: 'advanced', item: 'dragon_sword' },
        claimed: false
    },
    {
        id: 'millionaire',
        name: 'Millionaire',
        icon: uiIcons.coin,
        desc: 'Collect 1,000,000 coins',
        condition: () => gameState.coins >= 1000000,
        progress: () => Math.min(gameState.coins, 1000000),
        total: 1000000,
        reward: { gems: 100, prestige: 1, crate: 'premium' },
        claimed: false
    },
    {
        id: 'crate_collector',
        name: 'Crate Collector',
        icon: crateImages.basic.closed,
        desc: 'Open 50 crates',
        condition: () => gameState.totalCratesOpened >= 50,
        progress: () => Math.min(gameState.totalCratesOpened, 50),
        total: 50,
        reward: { gems: 50, crate: 'pet_godly', item: 'phoenix' },
        claimed: false
    }
];

// Quests System
const quests = {
    daily: [
        {
            id: 'daily_kill_20',
            title: 'Enemy Slayer',
            desc: 'Defeat 20 enemies',
            difficulty: 'easy',
            type: 'kill',
            progress: 0,
            total: 20,
            reward: { coins: 500 },
            completed: false,
            claimed: false
        },
        {
            id: 'daily_boss_1',
            title: 'Boss Hunter',
            desc: 'Defeat 1 boss',
            difficulty: 'medium',
            type: 'boss',
            progress: 0,
            total: 1,
            reward: { gems: 3, crate: 'basic' },
            completed: false,
            claimed: false
        }
    ],
    weekly: [
        {
            id: 'weekly_kill_200',
            title: 'Mass Destruction',
            desc: 'Defeat 200 enemies',
            difficulty: 'hard',
            type: 'kill',
            progress: 0,
            total: 200,
            reward: { coins: 5000, gems: 10, crate: 'advanced' },
            completed: false,
            claimed: false
        }
    ]
};

// Biome System - MED ISLAND BILDER
const biomes = [
    { 
        name: 'grass', 
        color: '#43e97b',
        enemyType: 'Grass',
        bgImage: backgroundImages.grass,
        islandImage: islandImages.grass
    },
    { 
        name: 'desert', 
        color: '#f6d365',
        enemyType: 'Desert',
        bgImage: backgroundImages.desert,
        islandImage: islandImages.desert
    },
    { 
        name: 'snow', 
        color: '#a1c4fd',
        enemyType: 'Snow',
        bgImage: backgroundImages.snow,
        islandImage: islandImages.snow
    },
    { 
        name: 'lava', 
        color: '#ff9a9e',
        enemyType: 'Lava',
        bgImage: backgroundImages.lava,
        islandImage: islandImages.lava
    },
    { 
        name: 'swamp', 
        color: '#4facfe',
        enemyType: 'Swamp',
        bgImage: backgroundImages.swamp,
        islandImage: islandImages.swamp
    },
    { 
        name: 'ocean', 
        color: '#4facfe',
        enemyType: 'Ocean',
        bgImage: backgroundImages.ocean,
        islandImage: islandImages.ocean
    },
    { 
        name: 'jungle', 
        color: '#43e97b',
        enemyType: 'Jungle',
        bgImage: backgroundImages.jungle,
        islandImage: islandImages.jungle
    },
    { 
        name: 'mountain', 
        color: '#a1c4fd',
        enemyType: 'Mountain',
        bgImage: backgroundImages.mountain,
        islandImage: islandImages.mountain
    },
    { 
        name: 'ruins', 
        color: '#f6d365',
        enemyType: 'Ruins',
        bgImage: backgroundImages.ruins,
        islandImage: islandImages.ruins
    },
    { 
        name: 'void', 
        color: '#667eea',
        enemyType: 'Void',
        bgImage: backgroundImages.void,
        islandImage: islandImages.void
    }
];

// Crate Probabilities
const crateProbabilities = {
    basic: {
        common: 60,
        rare: 25,
        epic: 15
    },
    advanced: {
        rare: 50,
        epic: 35,
        legendary: 15
    },
    premium: {
        epic: 40,
        legendary: 35,
        ultimate: 20,
        godly: 5
    },
    pet: {
        common: 50,
        rare: 30,
        epic: 15,
        legendary: 4,
        ultimate: 1
    },
    pet_godly: {
        epic: 20,
        legendary: 40,
        ultimate: 30,
        godly: 10
    },
    godly_crate: {
        ultimate: 30,
        godly: 70
    },
    daily: {
        common: 40,
        rare: 25,
        epic: 20,
        legendary: 10,
        ultimate: 4,
        godly: 1
    }
};

// ======================================================
// GAME INITIALIZATION
// ======================================================

function init() {
    loadGame();
    setupEventListeners();
    spawnEnemy();
    updateUI();
    startAutoSave();
    checkDailyReset();
    updateUpgradeCosts();
    renderCrates();
    updatePrestigeButton();
    
    console.log('Game initialized with fixed combat system');
    
    // Start auto attack if enabled
    if (gameState.autoDamage > 0) {
        startAutoAttack();
    }
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            navigateToPage(page);
        });
    });
    
    // Prestige button
    const prestigeBtn = document.getElementById('prestigeBtn');
    if (prestigeBtn) {
        prestigeBtn.addEventListener('click', showPrestigeModal);
    }
    
    // Shop prestige button
    const shopPrestigeBtn = document.getElementById('shopPrestigeBtn');
    if (shopPrestigeBtn) {
        shopPrestigeBtn.addEventListener('click', showPrestigeModal);
    }
}

function navigateToPage(page) {
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === page) {
            btn.classList.add('active');
        }
    });
    
    // Update pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
        if (p.dataset.page === page) {
            p.classList.add('active');
        }
    });
    
    // Render specific page content
    if (page === 'achievements') {
        renderAchievements();
    } else if (page === 'inventory') {
        renderInventory();
    } else if (page === 'shop') {
        updateShop();
    } else if (page === 'quests') {
        renderQuests();
    }
}

// ======================================================
// COMBAT SYSTEM - FIXED: Fiender dør nå ordentlig
// ======================================================

function calculateDamage() {
    const baseDamage = gameState.baseDamagePerClick + (gameState.damageUpgrades * 2);
    let damage = baseDamage * gameState.itemDamageMultiplier * gameState.prestigeMultiplier;
    const isCrit = Math.random() * 100 < (gameState.critChance + (gameState.critUpgrades * 1));
    
    if (isCrit) {
        damage *= gameState.critMultiplier;
        showCritEffect();
    }
    
    return { damage: Math.max(1, Math.floor(damage)), isCrit };
}

function attack() {
    const { damage, isCrit } = calculateDamage();
    
    // Apply damage
    gameState.currentEnemyHP -= damage;
    gameState.totalDamageDealt += damage;
    
    // FIX: Sørg for at HP ikke går under 0
    if (gameState.currentEnemyHP < 0) {
        gameState.currentEnemyHP = 0;
    }
    
    // Shake enemy
    const enemyContainer = document.querySelector('.enemy-container');
    if (enemyContainer) {
        enemyContainer.classList.add('shaking');
        setTimeout(() => enemyContainer.classList.remove('shaking'), 150);
    }
    
    // Show damage number
    showDamageNumber(damage, isCrit);
    
    // Check if enemy defeated
    if (gameState.currentEnemyHP <= 0) {
        enemyDefeated();
    } else {
        updateEnemyHP();
    }
    
    // Update quest progress
    updateQuestProgress('damage', damage);
    
    // Update UI
    updateResources();
    saveGame();
}

function showDamageNumber(damage, isCrit) {
    const enemyContainer = document.querySelector('.enemy-container');
    if (!enemyContainer) return;
    
    const damageText = document.createElement('div');
    damageText.textContent = `-${formatNumber(damage)}`;
    damageText.style.cssText = `
        position: absolute;
        color: ${isCrit ? '#FFD700' : '#fff'};
        font-weight: bold;
        font-size: ${isCrit ? '24px' : '20px'};
        text-shadow: 0 0 10px ${isCrit ? 'rgba(255,215,0,0.9)' : 'rgba(255,0,0,0.9)'};
        z-index: 1000;
        pointer-events: none;
        animation: floatUp 1s ease-out forwards;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;
    
    enemyContainer.appendChild(damageText);
    
    setTimeout(() => {
        if (damageText.parentNode) {
            damageText.remove();
        }
    }, 1000);
}

function showCritEffect() {
    const enemyImage = document.getElementById('enemyImage');
    if (enemyImage) {
        enemyImage.style.filter = 'brightness(1.8) drop-shadow(0 0 20px gold)';
        setTimeout(() => {
            enemyImage.style.filter = '';
        }, 300);
    }
}

function enemyDefeated() {
    // FIX: Sørg for at HP er 0
    gameState.currentEnemyHP = 0;
    updateEnemyHP();
    
    const isBoss = gameState.enemyNumber === 9;
    
    // Calculate rewards
    const baseCoinReward = Math.floor(
        Math.pow(1.5, gameState.level) * 
        gameState.enemyNumber * 
        10 * 
        gameState.prestigeMultiplier
    );
    
    let coinReward = Math.floor(baseCoinReward / gameState.difficultyMultiplier);
    let gemReward = 0;
    let crateReward = null;
    
    if (isBoss) {
        // BOSS REWARDS
        coinReward = Math.max(1, Math.floor(coinReward * 5));
        gemReward = Math.max(1, Math.floor(gameState.level * 2 * gameState.prestigeMultiplier));
        gameState.bossCleared[gameState.level] = true;
        gameState.totalBossesDefeated++;
        
        // Boss har 50% sjanse for crate drop
        if (Math.random() < 0.5) {
            crateReward = 'basic';
        }
        
        // Clear boss timer
        if (gameState.bossTimerInterval) {
            clearInterval(gameState.bossTimerInterval);
            gameState.bossTimerInterval = null;
        }
        const bossTimerContainer = document.getElementById('bossTimerContainer');
        if (bossTimerContainer) bossTimerContainer.style.display = 'none';
        
        // Update quest progress
        updateQuestProgress('boss', 1);
        
        // Vis boss loot
        showMessage(
            `<img src="${bossImages[gameState.currentBiome] || uiIcons.coin}" style="width:64px;height:64px;"> BOSS DEFEATED!`, 
            `Rewards:<br>
            <img src="${uiIcons.coin}" style="width:24px;height:24px;"> +${formatNumber(coinReward)} Coins<br>
            <img src="${uiIcons.gem}" style="width:24px;height:24px;"> +${gemReward} Gems` +
            (crateReward ? `<br><img src="${crateImages[crateReward]?.closed || crateImages.basic.closed}" style="width:24px;height:24px;"> ${crateReward} Crate` : '')
        );
    } else {
        // Vanlig enemy
        coinReward = Math.max(1, Math.floor(coinReward * 1.5));
        
        // 10% sjanse for gem drop
        if (Math.random() < 0.1) {
            gemReward = Math.max(1, Math.floor(gameState.level / 5));
        }
        
        gameState.totalEnemiesDefeated++;
    }
    
    // Apply rewards
    gameState.coins += coinReward;
    gameState.gems += gemReward;
    
    // Legg til crate reward hvis boss ga en
    if (crateReward) {
        setTimeout(() => {
            showSimpleCrateOpening(crateReward, 'boss');
        }, 1500);
    }
    
    // Update quest progress
    updateQuestProgress('kill', 1);
    updateQuestProgress('coins', coinReward);
    
    // Update achievements
    updateAchievements();
    
    // Progress to next enemy
    if (gameState.enemyNumber >= gameState.maxEnemyReached) {
        gameState.maxEnemyReached = gameState.enemyNumber + 1;
    }
    
    gameState.enemyNumber++;
    
    if (gameState.enemyNumber > 9) {
        gameState.enemyNumber = 1;
        gameState.maxEnemyReached = 1;
        gameState.level++;
        gameState.difficultyMultiplier *= 1.3;
    }
    
    // Spawn new enemy
    setTimeout(() => {
        spawnEnemy();
        updateUI();
        saveGame();
    }, 1000); // Vent 1 sekund før ny fiende
}

// ======================================================
// SPAWN ENEMY - Med 3-lags system og større bilder
// ======================================================

function spawnEnemy() {
    const biomeIndex = (gameState.level - 1) % biomes.length;
    const biome = biomes[biomeIndex];
    
    console.log(`Spawning enemy: Biome=${biome.name}, Level=${gameState.level}`);
    
    // 1. HOVEDBAKGRUNN (bak alt)
    const mainBg = document.querySelector('.island-bg');
    if (mainBg) {
        mainBg.style.backgroundImage = `url('${biome.bgImage}')`;
        
        // Error handling for bakgrunn
        const bgImg = new Image();
        bgImg.onload = function() {
            console.log(`Main background loaded: ${biome.bgImage}`);
        };
        bgImg.onerror = function() {
            console.error(`Failed to load main background: ${biome.bgImage}`);
            mainBg.style.backgroundImage = `linear-gradient(135deg, ${biome.color} 0%, ${darkenColor(biome.color, 20)} 100%)`;
        };
        bgImg.src = biome.bgImage;
    }
    
    // 2. ØY-LAG (sirkelen bak fienden)
    const island = document.getElementById('island');
    if (island) {
        island.className = 'island ' + biome.name;
        
        // Fjern gammelt innhold
        island.innerHTML = '';
        
        // Legg til øy-bilde (lag 2) - STØRRE
        const islandImg = document.createElement('img');
        islandImg.className = 'island-img';
        islandImg.src = biome.islandImage;
        islandImg.alt = `${biome.enemyType} Island`;
        islandImg.style.cssText = `
            width: 150%;
            height: 150%;
            object-fit: contain;
            position: absolute;
            top: -25%;
            left: -25%;
            z-index: 1;
            pointer-events: none;
            transform: scale(1.3);
        `;
        
        island.appendChild(islandImg);
        
        // Legg til error handler
        islandImg.onload = function() {
            console.log(`Island image loaded: ${biome.islandImage}`);
        };
        islandImg.onerror = function() {
            console.error(`Failed to load island: ${biome.islandImage}`);
            this.style.display = 'none';
            island.style.background = `radial-gradient(circle, ${biome.color} 0%, ${darkenColor(biome.color, 40)} 100%)`;
            island.style.boxShadow = `0 0 40px ${biome.color}`;
        };
        
        // 3. FIENDE-LAG (på toppen) - STØRRE
        const enemyContainer = document.createElement('div');
        enemyContainer.id = 'enemy';
        enemyContainer.className = 'enemy-container';
        enemyContainer.style.cssText = `
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 2;
        `;
        
        const isBoss = gameState.enemyNumber === 9;
        const enemyImageSrc = isBoss ? bossImages[biome.name] : enemyImages[biome.name];
        
        const enemyImage = document.createElement('img');
        enemyImage.id = 'enemyImage';
        enemyImage.src = enemyImageSrc;
        enemyImage.alt = `${biome.enemyType} ${isBoss ? 'Boss' : 'Enemy'}`;
        enemyImage.style.cssText = `
            width: ${isBoss ? '240px' : '200px'};
            height: ${isBoss ? '240px' : '200px'};
            object-fit: contain;
            transform: scale(1.5); /* Øk størrelse 1.5x */
            transition: transform 0.2s ease;
            pointer-events: none;
        `;
        
        enemyContainer.appendChild(enemyImage);
        island.appendChild(enemyContainer);
        
        // Legg til klikk-event på hele containeren
        enemyContainer.addEventListener('click', attack);
        enemyContainer.addEventListener('touchstart', (e) => {
            e.preventDefault();
            attack();
        }, { passive: false });
        
        // Boss effekter - ENDA STØRRE
        if (isBoss) {
            enemyContainer.classList.add('boss-indicator', 'boss-enhanced');
            enemyImage.style.filter = 'drop-shadow(0 0 25px #ff4444) brightness(1.1)';
            enemyImage.style.width = '260px';
            enemyImage.style.height = '260px';
            enemyImage.style.transform = 'scale(1.8)';
        }
        
        // Error handling for fiende
        enemyImage.onload = function() {
            console.log(`Enemy image loaded: ${enemyImageSrc}`);
        };
        enemyImage.onerror = function() {
            console.error(`Failed to load enemy: ${enemyImageSrc}`);
            this.style.display = 'none';
            enemyContainer.innerHTML = `
                <div style="
                    color: white; 
                    text-align: center; 
                    padding: 20px; 
                    background: rgba(0,0,0,0.7); 
                    border-radius: 10px;
                    font-size: 16px;
                ">
                    <div style="font-size: 24px; margin-bottom: 10px;">${biome.enemyType}</div>
                    <div style="font-size: 32px;">${isBoss ? '👹 BOSS' : '⚔️'}</div>
                    <div style="margin-top: 10px;">Click to attack!</div>
                </div>
            `;
        };
    }
    
    // Update game state
    gameState.currentBiome = biome.name;
    
    // Update text info
    const enemyTypeEl = document.getElementById('enemyType');
    if (enemyTypeEl) enemyTypeEl.textContent = biome.enemyType + (gameState.enemyNumber === 9 ? ' Boss' : '');
    
    const enemyCountEl = document.getElementById('enemyCount');
    if (enemyCountEl) enemyCountEl.textContent = `${gameState.enemyNumber}/9`;
    
    // HP beregning - FIXED: Sørg for at HP alltid er minst 1
    const baseHP = Math.pow(1.8, gameState.level) * 50 * (1 + gameState.prestigePoints * 0.2);
    const enemyMultiplier = 1 + ((gameState.enemyNumber - 1) * 0.7);
    let enemyHP = Math.floor(baseHP * enemyMultiplier * gameState.difficultyMultiplier);
    
    if (enemyHP < 1) enemyHP = 1;
    
    if (gameState.enemyNumber === 9) {
        enemyHP *= 8;
    }
    
    gameState.currentEnemyHP = enemyHP;
    gameState.maxEnemyHP = enemyHP;
    
    updateEnemyHP();
    updateDifficultyDisplay();
    
    // Start boss timer hvis boss
    if (gameState.enemyNumber === 9) {
        gameState.bossTimer = 60;
        const bossTimerContainer = document.getElementById('bossTimerContainer');
        if (bossTimerContainer) bossTimerContainer.style.display = 'flex';
        startBossTimer();
    } else {
        const bossTimerContainer = document.getElementById('bossTimerContainer');
        if (bossTimerContainer) bossTimerContainer.style.display = 'none';
        if (gameState.bossTimerInterval) {
            clearInterval(gameState.bossTimerInterval);
            gameState.bossTimerInterval = null;
        }
    }
}

function updateDifficultyDisplay() {
    const isBoss = gameState.enemyNumber === 9;
    let difficultyText = '';
    
    if (isBoss) {
        difficultyText = `👹 BOSS FIGHT (Level ${gameState.level}) - 60s TIMER`;
    } else {
        const difficultyLevel = Math.floor(gameState.difficultyMultiplier * 10);
        let difficultyName = 'Easy';
        
        if (difficultyLevel >= 50) difficultyName = 'INSANE';
        else if (difficultyLevel >= 30) difficultyName = 'Very Hard';
        else if (difficultyLevel >= 20) difficultyName = 'Hard';
        else if (difficultyLevel >= 10) difficultyName = 'Medium';
        else if (difficultyLevel >= 5) difficultyName = 'Normal';
        
        difficultyText = `Level ${gameState.level} - ${difficultyName} (${difficultyLevel}x)`;
    }
    
    const diffTextEl = document.getElementById('difficultyText');
    if (diffTextEl) diffTextEl.textContent = difficultyText;
}

function updateEnemyHP() {
    const hpPercent = (gameState.currentEnemyHP / gameState.maxEnemyHP) * 100;
    const hpFill = document.getElementById('enemyHpFill');
    const hpText = document.getElementById('enemyHpText');
    
    if (hpFill) hpFill.style.width = `${Math.max(0, hpPercent)}%`;
    if (hpText) hpText.textContent = `${formatNumber(gameState.currentEnemyHP)}/${formatNumber(gameState.maxEnemyHP)} (${Math.floor(hpPercent)}%)`;
    
    if (hpFill) {
        if (hpPercent > 50) {
            hpFill.style.background = 'linear-gradient(90deg, #43e97b, #38f9d7)';
        } else if (hpPercent > 25) {
            hpFill.style.background = 'linear-gradient(90deg, #FF9800, #FFB74D)';
        } else {
            hpFill.style.background = 'linear-gradient(90deg, #F44336, #EF5350)';
        }
    }
}

function startBossTimer() {
    if (gameState.bossTimerInterval) {
        clearInterval(gameState.bossTimerInterval);
    }
    
    updateBossTimer();
    
    gameState.bossTimerInterval = setInterval(() => {
        gameState.bossTimer--;
        updateBossTimer();
        
        if (gameState.bossTimer <= 0) {
            clearInterval(gameState.bossTimerInterval);
            gameState.bossTimerInterval = null;
            gameState.enemyNumber = 1;
            spawnEnemy();
            showMessage('⏰ TIME\'S UP!', 'The boss escaped! Try again next time.');
        }
    }, 1000);
}

function updateBossTimer() {
    const timerElement = document.getElementById('bossTimer');
    if (!timerElement) return;
    
    timerElement.textContent = `${gameState.bossTimer}s`;
    
    if (gameState.bossTimer <= 10) {
        timerElement.style.color = '#ff4444';
        timerElement.style.animation = 'pulse 0.5s infinite';
    } else if (gameState.bossTimer <= 30) {
        timerElement.style.color = '#ffaa00';
        timerElement.style.animation = 'none';
    } else {
        timerElement.style.color = '#ffd700';
        timerElement.style.animation = 'none';
    }
}

// ======================================================
// PERMANENT UPGRADES SYSTEM
// ======================================================

function updateUpgradeCosts() {
    const damageCost = Math.floor(100 * Math.pow(1.4, gameState.damageUpgrades));
    const damageCostEl = document.getElementById('damageCost');
    const currentDamageEl = document.getElementById('currentDamage');
    
    if (damageCostEl) damageCostEl.textContent = formatNumber(damageCost);
    if (currentDamageEl) currentDamageEl.textContent = gameState.baseDamagePerClick + (gameState.damageUpgrades * 2);
    
    const critCost = Math.floor(250 * Math.pow(1.5, gameState.critUpgrades));
    const critCostEl = document.getElementById('critCost');
    const currentCritEl = document.getElementById('currentCrit');
    
    if (critCostEl) critCostEl.textContent = formatNumber(critCost);
    if (currentCritEl) currentCritEl.textContent = gameState.critChance + gameState.critUpgrades;
    
    const autoCost = Math.floor(500 * Math.pow(1.6, gameState.autoUpgrades));
    const autoCostEl = document.getElementById('autoCost');
    const currentAutoEl = document.getElementById('currentAuto');
    
    if (autoCostEl) autoCostEl.textContent = formatNumber(autoCost);
    if (currentAutoEl) currentAutoEl.textContent = gameState.autoDamage;
}

function buyDamageUpgrade() {
    const cost = Math.floor(100 * Math.pow(1.4, gameState.damageUpgrades));
    
    if (gameState.coins >= cost) {
        gameState.coins -= cost;
        gameState.damageUpgrades++;
        updateUpgradeCosts();
        updateResources();
        saveGame();
    }
}

function buyCritUpgrade() {
    const cost = Math.floor(250 * Math.pow(1.5, gameState.critUpgrades));
    
    if (gameState.coins >= cost) {
        gameState.coins -= cost;
        gameState.critUpgrades++;
        updateUpgradeCosts();
        updateResources();
        saveGame();
    }
}

function buyAutoUpgrade() {
    const cost = Math.floor(500 * Math.pow(1.6, gameState.autoUpgrades));
    
    if (gameState.coins >= cost) {
        gameState.coins -= cost;
        gameState.autoDamage += 1;
        gameState.autoUpgrades++;
        updateUpgradeCosts();
        updateResources();
        
        if (!gameState.autoAttackInterval) {
            startAutoAttack();
        }
        
        saveGame();
    }
}

// ======================================================
// SHOP SYSTEM
// ======================================================

function updateShop() {
    updateUpgradeCosts();
    renderCrates();
}

function buyCoins(coins, gems) {
    if (gameState.gems >= gems) {
        gameState.gems -= gems;
        gameState.coins += coins;
        updateResources();
        saveGame();
    }
}

function renderCrates() {
    const cratesGrid = document.getElementById('cratesGrid');
    if (!cratesGrid) return;
    
    cratesGrid.innerHTML = '';
    
    const crates = [
        {
            type: 'basic',
            name: 'Basic Crate',
            icon: crateImages.basic.closed,
            desc: 'Common - Epic items',
            price: 10,
            odds: crateProbabilities.basic,
            class: 'basic'
        },
        {
            type: 'advanced',
            name: 'Advanced Crate',
            icon: crateImages.advanced.closed,
            desc: 'Rare - Legendary',
            price: 25,
            odds: crateProbabilities.advanced,
            class: 'advanced'
        },
        {
            type: 'premium',
            name: 'Premium Crate',
            icon: crateImages.premium.closed,
            desc: 'Epic - Godly',
            price: 50,
            odds: crateProbabilities.premium,
            class: 'premium'
        },
        {
            type: 'pet',
            name: 'Pet Crate',
            icon: crateImages.pet.closed,
            desc: 'Special pets only',
            price: 30,
            odds: crateProbabilities.pet,
            class: 'pet'
        },
        {
            type: 'pet_godly',
            name: 'Godly Pet Crate',
            icon: crateImages.pet_godly.closed,
            desc: 'Epic - Godly pets',
            price: 75,
            odds: crateProbabilities.pet_godly,
            class: 'pet-godly'
        },
        {
            type: 'godly_crate',
            name: 'Godly Crate',
            icon: crateImages.godly.closed,
            desc: 'ONLY Ultimate & Godly items',
            price: 500,
            odds: crateProbabilities.godly_crate,
            class: 'godly-crate'
        }
    ];
    
    crates.forEach(crate => {
        const crateCard = document.createElement('div');
        crateCard.className = `crate-card ${crate.class}`;
        
        crateCard.innerHTML = `
            <div class="crate-header">
                <img src="${crate.icon}" style="width:40px;height:40px;transform:scale(1.2);">
                <span class="crate-name">${crate.name}</span>
            </div>
            <div class="crate-info">
                <div class="crate-desc">${crate.desc}</div>
                <div class="crate-odds">
                    ${Object.entries(crate.odds).map(([rarity, chance]) => `
                        <div class="odd-row">
                            <span class="odd-rarity ${rarity}">${rarity.charAt(0).toUpperCase() + rarity.slice(1)}</span>
                            <span class="odd-percent">${chance}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="crate-btn" onclick="buyCrate('${crate.type}')">
                <span class="crate-price">${crate.price}</span>
                <img src="${uiIcons.gem}" style="width:20px;height:20px;transform:scale(1.2);">
            </button>
        `;
        
        cratesGrid.appendChild(crateCard);
    });
}

function buyCrate(type) {
    let cost;
    switch(type) {
        case 'basic': cost = 10; break;
        case 'advanced': cost = 25; break;
        case 'premium': cost = 50; break;
        case 'pet': cost = 30; break;
        case 'pet_godly': cost = 75; break;
        case 'godly_crate': cost = 500; break;
        default: return;
    }
    
    if (gameState.gems >= cost) {
        gameState.gems -= cost;
        gameState.totalCratesOpened++;
        
        showSimpleCrateOpening(type, 'shop');
        
        updateResources();
        updateAchievements();
        updateQuestProgress('crate', 1);
        saveGame();
    }
}

function showSimpleCrateOpening(crateType, source = 'shop') {
    const item = openCrate(crateType, source === 'boss');
    
    showMessage(`<img src="${crateImages[crateType]?.open || crateImages.basic.open}" style="width:80px;height:80px;transform:scale(1.3);"> CRATE OPENED!`, 
        `You got:<br>
        <img src="${item.icon}" style="width:48px;height:48px;transform:scale(1.3);"> <strong>${item.name}</strong><br>
        <span class="rarity-badge ${item.rarity}" style="display:inline-block;padding:6px 12px;border-radius:12px;margin:8px 0;font-size:14px;">
            ${item.rarity.toUpperCase()}
        </span><br><br>
        ${item.damage ? `<img src="${uiIcons.coin}" style="width:20px;height:20px;vertical-align:middle;"> Damage: ${item.damage}x<br>` : ''}
        ${item.defense ? `<img src="${uiIcons.coin}" style="width:20px;height:20px;vertical-align:middle;"> Defense: ${item.defense}x<br>` : ''}
        ${item.bonus ? Object.entries(item.bonus).map(([key, value]) => 
            `<img src="${key === 'coins' ? uiIcons.coin : key === 'gems' ? uiIcons.gem : uiIcons.star}" style="width:20px;height:20px;vertical-align:middle;"> ${key.charAt(0).toUpperCase() + key.slice(1)}: +${value}${key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%'}<br>`
        ).join('') : ''}`
    );
    
    addItemToInventory(item);
}

function openCrate(type, isBossDrop = false) {
    const probabilities = crateProbabilities[type];
    const roll = Math.random() * 100;
    
    let selectedRarity;
    let cumulative = 0;
    
    for (const [rarity, chance] of Object.entries(probabilities)) {
        cumulative += chance;
        if (roll <= cumulative) {
            selectedRarity = rarity;
            break;
        }
    }
    
    if (isBossDrop && Math.random() < 0.3) {
        const rarities = ['common', 'rare', 'epic', 'legendary', 'ultimate', 'godly'];
        const currentIndex = rarities.indexOf(selectedRarity);
        if (currentIndex < rarities.length - 1) {
            selectedRarity = rarities[currentIndex + 1];
        }
    }
    
    let itemPool;
    if (type === 'pet' || type === 'pet_godly') {
        itemPool = items.pets.filter(item => item.rarity === selectedRarity);
    } else {
        itemPool = [
            ...items.weapons.filter(item => item.rarity === selectedRarity),
            ...items.armor.filter(item => item.rarity === selectedRarity),
            ...items.artifacts.filter(item => item.rarity === selectedRarity)
        ];
    }
    
    if (itemPool.length === 0) {
        itemPool = items.weapons.filter(i => i.rarity === 'common');
    }
    
    return itemPool[Math.floor(Math.random() * itemPool.length)];
}

// ======================================================
// PRESTIGE SYSTEM
// ======================================================

function showPrestigeModal() {
    const canPrestige = gameState.level >= 10;
    if (!canPrestige) {
        showMessage('Prestige Locked', `Reach Level 10 to prestige!<br>Current Level: ${gameState.level}<br>Need: ${10 - gameState.level} more levels`);
        return;
    }
    
    const prestigePoints = Math.floor(gameState.level / 2) + gameState.prestigePoints;
    const multiplierIncrease = prestigePoints * 0.1;
    const newMultiplier = 1 + multiplierIncrease;
    
    const message = `<img src="${uiIcons.star}" style="width:40px;height:40px;transform:scale(1.3);"> PRESTIGE AVAILABLE!<br><br>
                   Current Level: ${gameState.level}<br>
                   Prestige Points: +${prestigePoints}<br>
                   New Multiplier: ${newMultiplier.toFixed(1)}x<br><br>
                   Prestige now?`;
    
    if (confirm(message.replace(/<br>/g, '\n'))) {
        prestige();
    }
}

function prestige() {
    const prestigePoints = Math.floor(gameState.level / 2);
    
    gameState.prestigePoints += prestigePoints;
    gameState.prestigeMultiplier = 1 + (gameState.prestigePoints * 0.1);
    
    const savedInventory = {...inventory};
    const savedDamageUpgrades = gameState.damageUpgrades;
    const savedCritUpgrades = gameState.critUpgrades;
    const savedAutoUpgrades = gameState.autoUpgrades;
    const savedGems = gameState.gems;
    
    gameState.coins = 1000;
    gameState.gems = savedGems;
    gameState.level = 1;
    gameState.enemyNumber = 1;
    gameState.maxEnemyReached = 1;
    gameState.currentEnemyHP = 100;
    gameState.maxEnemyHP = 100;
    gameState.difficultyMultiplier = 1.0 + (gameState.prestigePoints * 0.1);
    gameState.bossCleared = {};
    
    gameState.damageUpgrades = savedDamageUpgrades;
    gameState.critUpgrades = savedCritUpgrades;
    gameState.autoUpgrades = savedAutoUpgrades;
    
    inventory = savedInventory;
    
    updateQuestProgress('prestige', 1);
    
    showMessage(`<img src="${uiIcons.star}" style="width:60px;height:60px;transform:scale(1.3);"> PRESTIGE COMPLETE!`, 
        `You gained ${prestigePoints} Prestige Points!<br>
         <img src="${uiIcons.star}" style="width:30px;height:30px;vertical-align:middle;"> Total Prestige: ${gameState.prestigePoints}<br>
         Global Multiplier: ${gameState.prestigeMultiplier.toFixed(1)}x`
    );
    
    spawnEnemy();
    updateUI();
    saveGame();
}

function updatePrestigeButton() {
    const prestigeBtn = document.getElementById('prestigeBtn');
    const shopPrestigeBtn = document.getElementById('shopPrestigeBtn');
    
    const canPrestige = gameState.level >= 10;
    
    if (prestigeBtn) {
        if (canPrestige) {
            prestigeBtn.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
            prestigeBtn.style.animation = 'pulse 2s infinite';
            prestigeBtn.innerHTML = `<img src="${uiIcons.star}" style="width:20px;height:20px;vertical-align:middle;"> PRESTIGE!`;
        } else {
            prestigeBtn.style.background = 'linear-gradient(135deg, #888, #666)';
            prestigeBtn.style.animation = 'none';
            prestigeBtn.innerHTML = `<img src="${uiIcons.star}" style="width:20px;height:20px;vertical-align:middle;"> Prestige`;
        }
    }
    
    if (shopPrestigeBtn) {
        shopPrestigeBtn.disabled = !canPrestige;
    }
    
    setTimeout(updatePrestigeButton, 5000);
}

// ======================================================
// INVENTORY SYSTEM
// ======================================================

function addItemToInventory(item) {
    let category;
    if (items.weapons.includes(item)) category = 'weapons';
    else if (items.armor.includes(item)) category = 'armor';
    else if (items.pets.includes(item)) category = 'pets';
    else category = 'artifacts';
    
    if (!inventory[category]) {
        inventory[category] = {};
    }
    
    if (!inventory[category][item.id]) {
        inventory[category][item.id] = {
            item: item,
            count: 1,
            level: 1
        };
    } else {
        inventory[category][item.id].count += 1;
    }
    
    if (document.querySelector('.inventory-page.active')) {
        renderInventory();
    }
}

function renderInventory() {
    const totalDamage = (gameState.baseDamagePerClick + (gameState.damageUpgrades * 2)) * gameState.itemDamageMultiplier * gameState.prestigeMultiplier;
    const statDamageEl = document.getElementById('statDamage');
    const statAutoEl = document.getElementById('statAuto');
    const statCritEl = document.getElementById('statCrit');
    const statMultiEl = document.getElementById('statMulti');
    
    if (statDamageEl) statDamageEl.textContent = Math.floor(totalDamage);
    if (statAutoEl) statAutoEl.textContent = gameState.autoDamage;
    if (statCritEl) statCritEl.textContent = `${gameState.critChance + gameState.critUpgrades}%`;
    if (statMultiEl) statMultiEl.textContent = `${gameState.prestigeMultiplier.toFixed(1)}x`;
    
    const activePetElement = document.getElementById('activePet');
    if (activePetElement) {
        if (inventory.activePet) {
            const pet = inventory.activePet;
            activePetElement.innerHTML = `
                <div class="pet-display">
                    <img src="${pet.icon}" style="width:60px;height:60px;transform:scale(1.3);">
                    <div class="pet-details">
                        <span class="pet-name">${pet.name}</span>
                        <span class="pet-rarity ${pet.rarity}">${pet.rarity.toUpperCase()}</span>
                    </div>
                </div>
                <div class="pet-bonuses">
                    ${Object.entries(pet.bonus || {}).map(([key, value]) => `
                        <div class="bonus">
                            <span class="bonus-type">${key}:</span>
                            <span class="bonus-value">+${value}${key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%'}</span>
                        </div>
                    `).join('')}
                </div>
                <button class="remove-pet-btn" onclick="removePet()">Remove</button>
            `;
        } else {
            activePetElement.innerHTML = `<div class="no-pet">No pet equipped</div>`;
        }
    }
    
    const itemsGrid = document.getElementById('itemsGrid');
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    const allItems = [];
    for (const category in inventory) {
        if (category === 'activePet') continue;
        for (const itemId in inventory[category]) {
            allItems.push({...inventory[category][itemId], category: category});
        }
    }
    
    allItems.forEach(itemData => {
        const item = itemData.item;
        const category = itemData.category;
        const div = document.createElement('div');
        div.className = `item-card ${item.rarity}`;
        
        let actionButton = '';
        let statsHtml = '';
        
        if (item.damage) {
            statsHtml += `<div class="item-stat"><span class="stat-label">Damage:</span> <span class="stat-value">${item.damage}x</span></div>`;
        }
        if (item.defense) {
            statsHtml += `<div class="item-stat"><span class="stat-label">Defense:</span> <span class="stat-value">${item.defense}x</span></div>`;
        }
        if (item.bonus) {
            Object.entries(item.bonus).forEach(([key, value]) => {
                const keyName = key.charAt(0).toUpperCase() + key.slice(1);
                const suffix = key === 'coins' || key === 'gems' || key === 'damage' ? 'x' : '%';
                statsHtml += `<div class="item-stat"><span class="stat-label">${keyName}:</span> <span class="stat-value">+${value}${suffix}</span></div>`;
            });
        }
        
        if (category === 'pets') {
            const isActive = inventory.activePet && inventory.activePet.id === item.id;
            actionButton = `<button class="item-equip" onclick="equipPet('${item.id}')" ${isActive ? 'disabled style="opacity:0.5;"' : ''}>
                ${isActive ? '✓ Equipped' : 'Equip'}
            </button>`;
        } else {
            actionButton = itemData.count >= itemData.level + 1 ? 
                `<button class="item-upgrade" onclick="upgradeItem('${item.id}')">↑ Upgrade</button>` : 
                `<div class="item-required">Need ${itemData.level + 1 - itemData.count} more</div>`;
        }
        
        div.innerHTML = `
            <div class="item-count">${itemData.count}/${itemData.level + 1}</div>
            <img src="${item.icon}" class="item-icon" style="width:40px;height:40px;transform:scale(1.3);">
            <div class="item-name">${item.name}</div>
            <div class="item-level">Level ${itemData.level}</div>
            <div class="item-rarity ${item.rarity}">${item.rarity.toUpperCase()}</div>
            ${statsHtml ? `<div class="item-stats">${statsHtml}</div>` : ''}
            ${actionButton}
        `;
        itemsGrid.appendChild(div);
    });
}

function equipPet(petId) {
    if (inventory.pets[petId]) {
        if (inventory.activePet) {
            const currentPet = inventory.activePet;
            if (currentPet.bonus) {
                if (currentPet.bonus.damage) gameState.itemDamageMultiplier /= currentPet.bonus.damage;
                if (currentPet.bonus.crit) gameState.critChance -= currentPet.bonus.crit;
                if (currentPet.bonus.auto) gameState.autoDamage -= currentPet.bonus.auto;
            }
        }
        
        inventory.activePet = inventory.pets[petId].item;
        
        const pet = inventory.activePet;
        if (pet.bonus) {
            if (pet.bonus.damage) gameState.itemDamageMultiplier *= pet.bonus.damage;
            if (pet.bonus.crit) gameState.critChance += pet.bonus.crit;
            if (pet.bonus.auto) gameState.autoDamage += pet.bonus.auto;
        }
        
        renderInventory();
        updateUI();
        saveGame();
    }
}

function removePet() {
    if (inventory.activePet) {
        const pet = inventory.activePet;
        
        if (pet.bonus) {
            if (pet.bonus.damage) gameState.itemDamageMultiplier /= pet.bonus.damage;
            if (pet.bonus.crit) gameState.critChance -= pet.bonus.crit;
            if (pet.bonus.auto) gameState.autoDamage -= pet.bonus.auto;
        }
        
        inventory.activePet = null;
        renderInventory();
        updateUI();
        saveGame();
    }
}

// ======================================================
// UTILITY FUNCTIONS
// ======================================================

function updateUI() {
    updateResources();
    updateEnemyHP();
    updatePrestigeButton();
    
    if (document.querySelector('.inventory-page.active')) {
        renderInventory();
    }
    
    if (document.querySelector('.shop-page.active')) {
        updateShop();
    }
}

function updateResources() {
    const coinsEl = document.getElementById('coins');
    const gemsEl = document.getElementById('gems');
    const prestigeEl = document.getElementById('prestige');
    
    if (coinsEl) coinsEl.textContent = formatNumber(gameState.coins);
    if (gemsEl) gemsEl.textContent = formatNumber(gameState.gems);
    if (prestigeEl) prestigeEl.textContent = gameState.prestigePoints;
    
    // Oppdater ALLE resource visninger på hele siden
    document.querySelectorAll('.coin-display, .coins-display, .coin-amount').forEach(el => {
        el.innerHTML = `<img src="${uiIcons.coin}" style="width:24px;height:24px;vertical-align:middle;margin-right:5px;">${formatNumber(gameState.coins)}`;
    });
    
    document.querySelectorAll('.gem-display, .gems-display, .gem-amount').forEach(el => {
        el.innerHTML = `<img src="${uiIcons.gem}" style="width:24px;height:24px;vertical-align:middle;margin-right:5px;">${formatNumber(gameState.gems)}`;
    });
    
    document.querySelectorAll('.prestige-display, .stars-display, .star-amount').forEach(el => {
        el.innerHTML = `<img src="${uiIcons.star}" style="width:24px;height:24px;vertical-align:middle;margin-right:5px;">${gameState.prestigePoints}`;
    });
    
    // Oppdater også resource cards i toppen
    const coinIcon = document.querySelector('.resource-icon[data-type="coin"]');
    const gemIcon = document.querySelector('.resource-icon[data-type="gem"]');
    const starIcon = document.querySelector('.resource-icon[data-type="star"]');
    
    if (coinIcon) coinIcon.innerHTML = `<img src="${uiIcons.coin}" style="width:28px;height:28px;">`;
    if (gemIcon) gemIcon.innerHTML = `<img src="${uiIcons.gem}" style="width:28px;height:28px;">`;
    if (starIcon) starIcon.innerHTML = `<img src="${uiIcons.star}" style="width:28px;height:28px;">`;
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return Math.floor(num).toString();
}

function darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    
    return "#" + (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
    ).toString(16).slice(1);
}

function startAutoAttack() {
    if (gameState.autoAttackInterval) {
        clearInterval(gameState.autoAttackInterval);
    }
    
    gameState.autoAttackInterval = setInterval(() => {
        if (gameState.autoDamage > 0 && gameState.currentEnemyHP > 0) {
            const { damage } = calculateDamage();
            const autoDamage = Math.floor(damage * 0.3);
            
            gameState.currentEnemyHP -= autoDamage;
            gameState.totalDamageDealt += autoDamage;
            
            // FIX: Sørg for at HP ikke går under 0
            if (gameState.currentEnemyHP < 0) {
                gameState.currentEnemyHP = 0;
            }
            
            if (gameState.currentEnemyHP <= 0) {
                enemyDefeated();
            } else {
                updateEnemyHP();
            }
        }
    }, 1000);
}

function startAutoSave() {
    setInterval(() => {
        saveGame();
    }, 30000);
}

function saveGame() {
    const saveData = {
        gameState,
        inventory,
        achievements,
        quests,
        lastSave: Date.now()
    };
    
    try {
        localStorage.setItem('brainrotClickerSave', JSON.stringify(saveData));
    } catch (e) {
        console.error('Failed to save game:', e);
    }
}

function loadGame() {
    const saved = localStorage.getItem('brainrotClickerSave');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            Object.assign(gameState, data.gameState || {});
            inventory = data.inventory || {
                weapons: {}, armor: {}, pets: {}, artifacts: {}, activePet: null
            };
        } catch (e) {
            console.error('Failed to load save:', e);
        }
    }
}

function showMessage(title, text) {
    const messageOverlay = document.getElementById('messageOverlay');
    const messageTitle = document.getElementById('messageTitle');
    const messageText = document.getElementById('messageText');
    
    if (messageOverlay && messageTitle && messageText) {
        messageTitle.innerHTML = title;
        messageText.innerHTML = text;
        messageOverlay.classList.add('show');
        
        // Auto-close etter 5 sekunder for vanlige meldinger
        setTimeout(() => {
            if (messageOverlay.classList.contains('show')) {
                closeMessage();
            }
        }, 5000);
    }
}

function closeMessage() {
    const messageOverlay = document.getElementById('messageOverlay');
    if (messageOverlay) {
        messageOverlay.classList.remove('show');
    }
}

// ======================================================
// ADDITIONAL FUNCTIONS (for completeness)
// ======================================================

function updateQuestProgress(type, amount) {
    // Simpel implementasjon - utvid etter behov
    console.log(`Quest progress: ${type} +${amount}`);
}

function updateAchievements() {
    // Simpel implementasjon - utvid etter behov
    achievements.forEach(achievement => {
        if (!achievement.claimed && achievement.condition()) {
            console.log(`Achievement unlocked: ${achievement.name}`);
        }
    });
}

function checkDailyReset() {
    const now = new Date();
    const lastCrate = gameState.lastDailyCrate ? new Date(gameState.lastDailyCrate) : null;
    
    if (!lastCrate || now.getDate() !== lastCrate.getDate() || now.getMonth() !== lastCrate.getMonth()) {
        gameState.dailyCrateAvailable = true;
    }
}

function renderAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    if (!achievementsGrid) return;
    
    achievementsGrid.innerHTML = '';
    
    achievements.forEach(achievement => {
        const div = document.createElement('div');
        div.className = `achievement-card ${achievement.claimed ? 'claimed' : ''}`;
        
        const progress = achievement.progress();
        const percentage = (progress / achievement.total) * 100;
        
        div.innerHTML = `
            <img src="${achievement.icon}" style="width:32px;height:32px;">
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.desc}</div>
                <div class="achievement-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="progress-text">${progress}/${achievement.total}</span>
                </div>
            </div>
            ${achievement.claimed ? 
                '<div class="achievement-claimed">✓</div>' : 
                '<button class="achievement-claim" onclick="claimAchievement(\'' + achievement.id + '\')">Claim</button>'
            }
        `;
        
        achievementsGrid.appendChild(div);
    });
}

function renderQuests() {
    const questsGrid = document.getElementById('questsGrid');
    if (!questsGrid) return;
    
    questsGrid.innerHTML = '';
    
    [...quests.daily, ...quests.weekly].forEach(quest => {
        const div = document.createElement('div');
        div.className = `quest-card ${quest.difficulty}`;
        
        const percentage = (quest.progress / quest.total) * 100;
        
        div.innerHTML = `
            <div class="quest-header">
                <span class="quest-title">${quest.title}</span>
                <span class="quest-difficulty ${quest.difficulty}">${quest.difficulty}</span>
            </div>
            <div class="quest-desc">${quest.desc}</div>
            <div class="quest-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <span class="progress-text">${quest.progress}/${quest.total}</span>
            </div>
            <div class="quest-reward">
                ${quest.reward.coins ? `<span><img src="${uiIcons.coin}" style="width:16px;height:16px;"> ${quest.reward.coins}</span>` : ''}
                ${quest.reward.gems ? `<span><img src="${uiIcons.gem}" style="width:16px;height:16px;"> ${quest.reward.gems}</span>` : ''}
                ${quest.reward.crate ? `<span><img src="${crateImages[quest.reward.crate]?.closed}" style="width:16px;height:16px;"> Crate</span>` : ''}
            </div>
            ${quest.completed ? 
                (quest.claimed ? 
                    '<button class="quest-claimed" disabled>Claimed</button>' : 
                    '<button class="quest-claim" onclick="claimQuest(\'' + quest.id + '\')">Claim Reward</button>'
                ) : 
                '<button class="quest-incomplete" disabled>In Progress</button>'
            }
        `;
        
        questsGrid.appendChild(div);
    });
}

// ======================================================
// INITIALIZE GAME
// ======================================================

window.addEventListener('DOMContentLoaded', init);

// Export functions to window scope
window.attack = attack;
window.buyCoins = buyCoins;
window.buyCrate = buyCrate;
window.buyDamageUpgrade = buyDamageUpgrade;
window.buyCritUpgrade = buyCritUpgrade;
window.buyAutoUpgrade = buyAutoUpgrade;
window.showPrestigeModal = showPrestigeModal;
window.closeMessage = closeMessage;
window.showSimpleCrateOpening = showSimpleCrateOpening;
window.equipPet = equipPet;
window.removePet = removePet;
window.claimAchievement = function(id) {
    console.log(`Claim achievement: ${id}`);
};
window.claimQuest = function(id) {
    console.log(`Claim quest: ${id}`);
};
window.upgradeItem = function(id) {
    console.log(`Upgrade item: ${id}`);
};
