// 藏子世间 - 主脚本文件

// 页面切换
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

// 返回首页
function goBack() {
    showPage('cover');
}

// 点击区域事件
document.querySelectorAll('.click-zone').forEach(zone => {
    zone.addEventListener('click', function() {
        const universe = this.dataset.universe;
        
        if (universe === 'wukong') {
            showPage('wukong-universe');
        } else if (universe === 'create') {
            showPage('create-universe');
        }
    });
});

// 表单提交
document.getElementById('universe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const universeName = document.getElementById('universe-name').value;
    const law = document.querySelector('input[name="law"]:checked').value;
    const identity = document.getElementById('user-identity').value;
    
    // 生成随机数据
    const fusionDegree = Math.floor(Math.random() * 30) + 70; // 70-99%
    const destinies = [
        '诸天见证，觉字将现',
        '菩提门下，大道可期',
        '世界融合，命运交织',
        '混沌初开，万物归一',
        '跨越时空，证道长生'
    ];
    const destiny = destinies[Math.floor(Math.random() * destinies.length)];
    
    // 生成宇宙编号
    const cardNumber = 'NO.' + String(Math.floor(Math.random() * 999999) + 1).padStart(6, '0');
    
    // 更新身份卡
    document.getElementById('card-number').textContent = cardNumber;
    document.getElementById('card-universe').textContent = universeName;
    document.getElementById('card-law').textContent = law;
    document.getElementById('card-identity').textContent = identity;
    document.getElementById('card-fusion').textContent = fusionDegree + '%';
    document.getElementById('card-destiny').textContent = destiny;
    
    // 显示身份卡
    document.getElementById('identity-card').classList.remove('hidden');
    
    // 滚动到身份卡位置
    document.getElementById('identity-card').scrollIntoView({ behavior: 'smooth' });
});

// 背景视差效果
document.addEventListener('mousemove', function(e) {
    const coverImage = document.querySelector('.cover-image');
    if (coverImage) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        coverImage.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    }
});

// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 标题文字逐字显示
    const chars = document.querySelectorAll('.title-char');
    chars.forEach((char, index) => {
        char.style.opacity = '0';
        setTimeout(() => {
            char.style.opacity = '1';
            char.style.transition = 'opacity 0.5s ease';
        }, index * 150);
    });
});
