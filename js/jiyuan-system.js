// 机缘积累系统

const JiyuanSystem = {
    // 能量值定义
    energyValues: {
        '天命': { positive: 100, negative: 0 },
        '上上签': { positive: 50, negative: 0 },
        '中签': { positive: 10, negative: 5 },
        '下签': { positive: 0, negative: 30 },
        '劫数': { positive: 0, negative: 80 }
    },
    
    // 特殊能力解锁条件
    abilities: {
        '厄运护盾': {
            requirement: { negative: 200 },
            description: '下次劫数自动化解为中性签',
            icon: '🛡️'
        },
        '以暴制暴': {
            requirement: { negative: 500 },
            description: '将积累的衰运转化为一次天命签',
            icon: '⚔️'
        },
        '祸福相依': {
            requirement: { negative: 300, positive: 100 },
            description: '平衡阴阳，重置所有能量',
            icon: '☯️'
        },
        '厄运转移': {
            requirement: { negative: 400 },
            description: '需要"转移符"道具，可将衰运转给他人',
            icon: '🎯'
        },
        '天命逆改': {
            requirement: { positive: 500 },
            description: '可指定下一次抽签等级',
            icon: '✨'
        },
        '因果之眼': {
            requirement: { negative: 600 },
            description: '提前预知下一次签文内容',
            icon: '👁️'
        }
    },
    
    // 特殊道具
    items: {
        '转移符': {
            rarity: '稀有',
            description: '配合"厄运转移"能力使用，将衰运转移给指定目标',
            dropRate: 0.02, // 2%掉率
            icon: '📜'
        },
        '净化符': {
            rarity: '普通',
            description: '清除50%衰运能量',
            dropRate: 0.05,
            icon: '💮'
        },
        '命运硬币': {
            rarity: '传说',
            description: '可重新抽一次签',
            dropRate: 0.01,
            icon: '🪙'
        },
        '轮回钥匙': {
            rarity: '传说',
            description: '查看前世签文记录',
            dropRate: 0.005,
            icon: '🗝️'
        }
    },
    
    // 获取玩家数据
    getPlayerData() {
        const data = localStorage.getItem('jiyuanPlayer');
        if (!data) {
            return {
                positiveEnergy: 0,
                negativeEnergy: 0,
                totalDraws: 0,
                abilities: [],
                items: [],
                stats: {
                    tianming: 0,
                    shangshang: 0,
                    zhong: 0,
                    xia: 0,
                    jieshu: 0
                },
                createdAt: new Date().toISOString()
            };
        }
        return JSON.parse(data);
    },
    
    // 保存玩家数据
    savePlayerData(data) {
        localStorage.setItem('jiyuanPlayer', JSON.stringify(data));
    },
    
    // 抽签后更新能量
    updateEnergy(level) {
        const player = this.getPlayerData();
        const energy = this.energyValues[level];
        
        player.positiveEnergy += energy.positive;
        player.negativeEnergy += energy.negative;
        player.totalDraws++;
        
        // 更新统计
        const levelMap = {
            '天命': 'tianming',
            '上上签': 'shangshang',
            '中签': 'zhong',
            '下签': 'xia',
            '劫数': 'jieshu'
        };
        player.stats[levelMap[level]]++;
        
        // 检查是否解锁新能力
        const newAbilities = this.checkAbilityUnlock(player);
        player.abilities = [...new Set([...player.abilities, ...newAbilities])];
        
        // 检查是否掉落道具
        const droppedItem = this.checkItemDrop();
        if (droppedItem) {
            player.items.push({
                name: droppedItem,
                obtainedAt: new Date().toISOString()
            });
        }
        
        this.savePlayerData(player);
        
        return {
            newAbilities,
            droppedItem,
            player
        };
    },
    
    // 检查能力解锁
    checkAbilityUnlock(player) {
        const unlocked = [];
        for (const [name, ability] of Object.entries(this.abilities)) {
            if (player.abilities.includes(name)) continue;
            
            const req = ability.requirement;
            const meetsPositive = !req.positive || player.positiveEnergy >= req.positive;
            const meetsNegative = !req.negative || player.negativeEnergy >= req.negative;
            
            if (meetsPositive && meetsNegative) {
                unlocked.push(name);
            }
        }
        return unlocked;
    },
    
    // 检查道具掉落
    checkItemDrop() {
        for (const [name, item] of Object.entries(this.items)) {
            if (Math.random() < item.dropRate) {
                return name;
            }
        }
        return null;
    },
    
    // 使用能力
    useAbility(abilityName, target = null) {
        const player = this.getPlayerData();
        
        if (!player.abilities.includes(abilityName)) {
            return { success: false, message: '尚未解锁此能力' };
        }
        
        const ability = this.abilities[abilityName];
        
        switch(abilityName) {
            case '以暴制暴':
                if (player.negativeEnergy < 500) {
                    return { success: false, message: '衰运能量不足' };
                }
                player.negativeEnergy -= 500;
                this.savePlayerData(player);
                return { success: true, message: '下一次必出天命签', effect: 'force_tianming' };
                
            case '厄运转移':
                if (!player.items.find(i => i.name === '转移符')) {
                    return { success: false, message: '需要转移符道具' };
                }
                if (player.negativeEnergy < 400) {
                    return { success: false, message: '衰运能量不足' };
                }
                if (!target) {
                    return { success: false, message: '请指定转移目标' };
                }
                // 移除转移符
                const idx = player.items.findIndex(i => i.name === '转移符');
                player.items.splice(idx, 1);
                player.negativeEnergy -= 400;
                this.savePlayerData(player);
                return { success: true, message: `已将衰运转移给 ${target}`, effect: 'transfer', target };
                
            case '祸福相依':
                player.positiveEnergy = 0;
                player.negativeEnergy = 0;
                this.savePlayerData(player);
                return { success: true, message: '阴阳重置，一切归零', effect: 'reset' };
                
            default:
                return { success: false, message: '能力效果待实现' };
        }
    },
    
    // 获取能量条显示
    getEnergyDisplay() {
        const player = this.getPlayerData();
        const maxEnergy = 1000;
        
        return {
            positive: {
                current: player.positiveEnergy,
                max: maxEnergy,
                percentage: Math.min(player.positiveEnergy / maxEnergy * 100, 100)
            },
            negative: {
                current: player.negativeEnergy,
                max: maxEnergy,
                percentage: Math.min(player.negativeEnergy / maxEnergy * 100, 100)
            },
            total: player.totalDraws,
            abilities: player.abilities,
            items: player.items,
            stats: player.stats
        };
    }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = JiyuanSystem;
}

// 能量条组件HTML生成
function generateEnergyBarHTML(energy) {
    return `
        <div class="energy-container">
            <div class="energy-bar">
                <div class="energy-label">
                    <span>✨ 福运</span>
                    <span>${energy.positive.current}</span>
                </div>
                <div class="energy-track positive">
                    <div class="energy-fill positive" style="width: ${energy.positive.percentage}%"></div>
                </div>
            </div>
            <div class="energy-bar">
                <div class="energy-label">
                    <span>💀 衰运</span>
                    <span>${energy.negative.current}</span>
                </div>
                <div class="energy-track negative">
                    <div class="energy-fill negative" style="width: ${energy.negative.percentage}%"></div>
                </div>
            </div>
        </div>
    `;
}
