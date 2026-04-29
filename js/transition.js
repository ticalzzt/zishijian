/**
 * 宇宙过渡动画控制器
 * 点击"创造独立宇宙"按钮时播放过渡动画，动画结束后跳转到目标页面
 */
(function() {
    'use strict';
    
    // 配置
    const CONFIG = {
        targetPage: 'enhanced-creator.html',
        // 动画时间轴（毫秒）
        sceneDurations: {
            scene1: 1500,      // 回眸图停留
            transition1to2: 800, // 过渡到第二张
            scene2: 1500,      // 触碰图停留
            transition2to3: 600, // 过渡到第三张
            scene3: 1000,      // 碎裂图停留
            crackEffect: 1000, // 碎裂动画
            flash: 500,        // 闪光
            fadeOut: 500       // 淡出
        }
    };
    
    // 状态
    let isTransitioning = false;
    let hasPlayedThisSession = false;
    let overlay = null;
    
    // 创建过渡动画容器
    function createTransitionContainer() {
        if (overlay) return;
        
        overlay = document.createElement('div');
        overlay.className = 'cosmos-transition-overlay';
        overlay.id = 'cosmos-transition';
        overlay.innerHTML = `
            <!-- 第一场景：回眸 -->
            <div class="cosmos-scene cosmos-scene-1" id="scene-1">
                <img src="images/cosmos-transition/kael_v3_lookback_v2_1.jpg" alt="回眸">
            </div>
            <!-- 第二场景：触碰 -->
            <div class="cosmos-scene cosmos-scene-2" id="scene-2">
                <img src="images/cosmos-transition/kael_story_discover.jpg" alt="触碰">
            </div>
            <!-- 第三场景：碎裂 -->
            <div class="cosmos-scene cosmos-scene-3" id="scene-3">
                <img src="images/cosmos-transition/kael_story_crack.jpg" alt="碎裂">
            </div>
            <!-- 碎裂遮罩 -->
            <div class="crack-overlay" id="crack-overlay"></div>
            <!-- 裂痕光线 -->
            <div class="crack-lines" id="crack-lines">
                <div class="crack-line"></div>
                <div class="crack-line"></div>
                <div class="crack-line"></div>
                <div class="crack-line"></div>
                <div class="crack-line"></div>
                <div class="crack-line"></div>
                <div class="crack-line"></div>
                <div class="crack-line"></div>
            </div>
            <!-- 碎片容器 -->
            <div class="fragment-container" id="fragment-container"></div>
            <!-- 白色闪光 -->
            <div class="flash-overlay" id="flash-overlay"></div>
        `;
        document.body.appendChild(overlay);
    }
    
    // 锁定/解锁滚动
    function lockScroll() {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    }
    
    function unlockScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
    }
    
    // 重置场景状态
    function resetScenes() {
        ['scene-1', 'scene-2', 'scene-3'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('active');
            }
        });
        document.getElementById('crack-overlay')?.classList.remove('active');
        document.getElementById('crack-lines')?.classList.remove('active');
        document.getElementById('flash-overlay')?.classList.remove('active');
        document.getElementById('fragment-container').innerHTML = '';
    }
    
    // 创建碎片
    function createFragments() {
        const container = document.getElementById('fragment-container');
        if (!container) return;
        
        const fragmentCount = 12;
        for (let i = 0; i < fragmentCount; i++) {
            const fragment = document.createElement('div');
            fragment.className = 'fragment';
            
            // 随机位置和大小
            const size = Math.random() * 50 + 20;
            const centerX = 50;
            const centerY = 50;
            const angle = (i / fragmentCount) * 360 + Math.random() * 30;
            const distance = 200 + Math.random() * 300;
            
            const rad = angle * Math.PI / 180;
            const tx = Math.cos(rad) * distance;
            const ty = Math.sin(rad) * distance;
            const rot = Math.random() * 720 - 360;
            
            fragment.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${centerX}%;
                top: ${centerY}%;
                --tx: ${tx}px;
                --ty: ${ty}px;
                --rot: ${rot}deg;
            `;
            
            container.appendChild(fragment);
            
            // 延迟触发动画
            setTimeout(() => {
                fragment.classList.add('active');
            }, 100 + i * 30);
        }
    }
    
    // 播放过渡动画
    async function playTransition() {
        if (isTransitioning) return false;
        if (hasPlayedThisSession) {
            // 同一次访问再次点击直接跳转
            window.location.href = CONFIG.targetPage;
            return true;
        }
        
        isTransitioning = true;
        hasPlayedThisSession = true;
        
        // 锁定滚动
        lockScroll();
        
        // 创建容器并显示
        createTransitionContainer();
        resetScenes();
        
        // 显示overlay
        requestAnimationFrame(() => {
            overlay.classList.add('active');
        });
        
        const d = CONFIG.sceneDurations;
        let delay = 0;
        
        // 场景1：回眸
        await wait(delay);
        document.getElementById('scene-1').classList.add('active');
        delay += d.scene1;
        
        // 过渡到场景2
        await wait(delay);
        document.getElementById('scene-2').classList.add('active');
        delay += d.transition1to2;
        
        // 场景2：触碰
        await wait(delay);
        document.getElementById('scene-2').classList.add('active');
        delay += d.scene2;
        
        // 过渡到场景3
        await wait(delay);
        document.getElementById('scene-3').classList.add('active');
        document.getElementById('crack-overlay').classList.add('active');
        document.getElementById('crack-lines').classList.add('active');
        createFragments();
        delay += d.transition2to3;
        
        // 场景3：碎裂
        await wait(delay);
        delay += d.scene3;
        
        // 闪光
        await wait(delay);
        document.getElementById('flash-overlay').classList.add('active');
        delay += d.flash;
        
        // 淡出并跳转
        await wait(delay);
        overlay.classList.add('fade-out');
        
        await wait(d.fadeOut);
        
        // 解锁滚动
        unlockScroll();
        
        // 跳转
        window.location.href = CONFIG.targetPage;
        
        return true;
    }
    
    // 等待辅助函数
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // 绑定事件
    function bindEvents() {
        // 查找"创造独立宇宙"按钮
        const creatorButton = document.querySelector('a[data-page="creator"]');
        
        if (creatorButton) {
            creatorButton.addEventListener('click', function(e) {
                e.preventDefault();
                playTransition();
            });
        }
    }
    
    // 初始化
    function init() {
        // 确保DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', bindEvents);
        } else {
            bindEvents();
        }
    }
    
    // 启动
    init();
})();
