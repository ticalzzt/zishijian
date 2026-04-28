// 增强角色创建器脚本

// 数据映射
const raceMap = {
    'human': { name: '人族', icon: '👤' },
    'demon': { name: '妖族', icon: '👹' },
    'immortal': { name: '仙族', icon: '🧚' },
    'buddha': { name: '佛门', icon: '🙏' },
    'ghost': { name: '鬼族', icon: '👻' },
    'divine': { name: '神族', icon: '⚡' }
};

const realmMap = {
    'mortal': '凡境',
    'qi-gathering': '聚气境',
    'foundation': '筑基境',
    'core': '金丹境',
    'nascent': '元婴境',
    'transcendent': '化神境',
    'enlightened': '大觉境'
};

const treasureMap = {
    'sword': '⚔️',
    'staff': '🏆',
    'fan': '🪭',
    'bell': '🔔',
    'pagoda': '🗼',
    'bottle': '🏺',
    'scroll': '📜',
    'mirror': '🪞'
};

const lawMap = {
    'cultivation': '修仙问道',
    'magic': '魔法世界',
    'technology': '科技文明',
    'martial': '武道至上',
    'chaos': '混沌原初'
};

// 表单提交
document.getElementById('enhanced-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const data = {
        universeName: document.getElementById('universe-name').value || '未命名宇宙',
        playerTitle: document.getElementById('player-title').value || '无名氏',
        race: document.querySelector('input[name="race"]:checked').value,
        realm: document.querySelector('input[name="realm"]:checked').value,
        treasures: Array.from(document.querySelectorAll('input[name="treasure"]:checked')).map(cb => cb.value),
        law: document.querySelector('input[name="law"]:checked').value
    };
    
    // 生成随机数据
    data.cardNumber = 'NO.' + String(Math.floor(Math.random() * 999999) + 1).padStart(6, '0');
    data.fusionDegree = Math.floor(Math.random() * 30) + 70;
    data.powerLevel = Math.floor(Math.random() * 50) + 50;
    
    // 生成命运描述
    const destinies = [
        '诸天见证，觉字将现',
        '菩提门下，大道可期',
        '世界融合，命运交织',
        '混沌初开，万物归一',
        '跨越时空，证道长生',
        '星河流转，唯我独尊',
        '万法归一，诸天同寿'
    ];
    data.destiny = destinies[Math.floor(Math.random() * destinies.length)];
    
    // 绘制身份卡
    drawIdentityCard(data);
    
    // 显示预览
    document.getElementById('card-preview').classList.remove('hidden');
    document.getElementById('card-preview').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// 绘制身份卡
function drawIdentityCard(data) {
    const canvas = document.getElementById('identity-canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 清空画布
    ctx.clearRect(0, 0, width, height);
    
    // 绘制背景
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1a1520');
    gradient.addColorStop(0.5, '#0f0a15');
    gradient.addColorStop(1, '#1a1520');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 绘制边框
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.4)';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    
    // 绘制内边框
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 20, width - 40, height - 40);
    
    // 绘制装饰线
    drawDecorations(ctx, width, height);
    
    // 绘制标题区域
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 18px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('诸天宇宙 · 身份卡', width / 2, 60);
    
    // 绘制卡号
    ctx.fillStyle = 'rgba(255, 200, 100, 0.6)';
    ctx.font = '12px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(data.cardNumber, width - 40, 60);
    
    // 绘制分隔线
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 85);
    ctx.lineTo(width - 40, 85);
    ctx.stroke();
    
    // 绘制角色头像区域
    const avatarX = width / 2;
    const avatarY = 150;
    
    // 头像光晕
    const avatarGradient = ctx.createRadialGradient(avatarX, avatarY, 0, avatarX, avatarY, 70);
    avatarGradient.addColorStop(0, 'rgba(255, 200, 100, 0.3)');
    avatarGradient.addColorStop(1, 'transparent');
    ctx.fillStyle = avatarGradient;
    ctx.beginPath();
    ctx.arc(avatarX, avatarY, 70, 0, Math.PI * 2);
    ctx.fill();
    
    // 头像边框
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(avatarX, avatarY, 55, 0, Math.PI * 2);
    ctx.stroke();
    
    // 绘制角色图标
    ctx.font = '60px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(raceMap[data.race].icon, avatarX, avatarY);
    
    // 绘制名号
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 24px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(data.playerTitle, width / 2, 240);
    
    // 绘制宇宙名称
    ctx.fillStyle = 'rgba(255, 200, 100, 0.8)';
    ctx.font = '14px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText('「 ' + data.universeName + ' 」', width / 2, 265);
    
    // 绘制分隔线
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 290);
    ctx.lineTo(width - 40, 290);
    ctx.stroke();
    
    // 绘制信息区域
    const infoStartY = 320;
    const lineHeight = 45;
    const labelX = 50;
    const valueX = 180;
    
    // 种族
    ctx.fillStyle = 'rgba(232, 213, 183, 0.7)';
    ctx.font = '14px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('种族', labelX, infoStartY);
    ctx.fillStyle = '#ffd700';
    ctx.fillText(raceMap[data.race].name, valueX, infoStartY);
    
    // 境界
    ctx.fillStyle = 'rgba(232, 213, 183, 0.7)';
    ctx.fillText('境界', labelX, infoStartY + lineHeight);
    ctx.fillStyle = data.realm === 'enlightened' ? '#b464ff' : '#ffd700';
    ctx.fillText(realmMap[data.realm], valueX, infoStartY + lineHeight);
    
    // 法则
    ctx.fillStyle = 'rgba(232, 213, 183, 0.7)';
    ctx.fillText('法则', labelX, infoStartY + lineHeight * 2);
    ctx.fillStyle = '#ffd700';
    ctx.fillText(lawMap[data.law], valueX, infoStartY + lineHeight * 2);
    
    // 法宝
    ctx.fillStyle = 'rgba(232, 213, 183, 0.7)';
    ctx.fillText('法宝', labelX, infoStartY + lineHeight * 3);
    const treasuresText = data.treasures.length > 0 
        ? data.treasures.map(t => treasureMap[t]).join(' ') 
        : '无';
    ctx.fillStyle = '#ffd700';
    ctx.font = '18px serif';
    ctx.fillText(treasuresText, valueX - 20, infoStartY + lineHeight * 3);
    ctx.font = '14px "PingFang SC", "Microsoft YaHei", sans-serif';
    
    // 分隔线
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.2)';
    ctx.beginPath();
    ctx.moveTo(40, infoStartY + lineHeight * 4 - 10);
    ctx.lineTo(width - 40, infoStartY + lineHeight * 4 - 10);
    ctx.stroke();
    
    // 绘制属性区域
    const attrY = infoStartY + lineHeight * 4 + 20;
    
    // 世界融合度
    ctx.fillStyle = 'rgba(232, 213, 183, 0.7)';
    ctx.font = '12px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('世界融合度', 50, attrY);
    
    // 绘制进度条背景
    ctx.fillStyle = 'rgba(255, 200, 100, 0.2)';
    ctx.fillRect(140, attrY - 10, 150, 16);
    
    // 绘制进度条
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(140, attrY - 10, 150 * (data.fusionDegree / 100), 16);
    
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'left';
    ctx.fillText(data.fusionDegree + '%', 300, attrY);
    
    // 命运走向
    ctx.fillStyle = 'rgba(232, 213, 183, 0.7)';
    ctx.textAlign = 'center';
    ctx.fillText('命运走向', width / 2, attrY + 50);
    
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 16px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText(data.destiny, width / 2, attrY + 80);
    
    // 绘制底部装饰
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 50, height - 100);
    ctx.lineTo(width / 2, height - 90);
    ctx.lineTo(width / 2 + 50, height - 100);
    ctx.stroke();
    
    // 底部文字
    ctx.fillStyle = 'rgba(255, 200, 100, 0.5)';
    ctx.font = '12px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('大圣一脉 · 诸天见证', width / 2, height - 50);
    
    // 绘制日期
    const now = new Date();
    const dateStr = now.getFullYear() + '.' + String(now.getMonth() + 1).padStart(2, '0') + '.' + String(now.getDate()).padStart(2, '0');
    ctx.fillStyle = 'rgba(255, 200, 100, 0.4)';
    ctx.font = '10px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(dateStr, width - 40, height - 50);
}

// 绘制装饰元素
function drawDecorations(ctx, width, height) {
    // 四角装饰
    const cornerSize = 30;
    ctx.strokeStyle = 'rgba(255, 200, 100, 0.3)';
    ctx.lineWidth = 1;
    
    // 左上角
    ctx.beginPath();
    ctx.moveTo(25, 25 + cornerSize);
    ctx.lineTo(25, 25);
    ctx.lineTo(25 + cornerSize, 25);
    ctx.stroke();
    
    // 右上角
    ctx.beginPath();
    ctx.moveTo(width - 25 - cornerSize, 25);
    ctx.lineTo(width - 25, 25);
    ctx.lineTo(width - 25, 25 + cornerSize);
    ctx.stroke();
    
    // 左下角
    ctx.beginPath();
    ctx.moveTo(25, height - 25 - cornerSize);
    ctx.lineTo(25, height - 25);
    ctx.lineTo(25 + cornerSize, height - 25);
    ctx.stroke();
    
    // 右下角
    ctx.beginPath();
    ctx.moveTo(width - 25 - cornerSize, height - 25);
    ctx.lineTo(width - 25, height - 25);
    ctx.lineTo(width - 25, height - 25 - cornerSize);
    ctx.stroke();
}

// 下载身份卡
document.getElementById('download-btn').addEventListener('click', function() {
    const canvas = document.getElementById('identity-canvas');
    const link = document.createElement('a');
    link.download = '诸天宇宙-身份卡.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
