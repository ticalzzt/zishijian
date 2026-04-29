/**
 * 藏子世间 - 电影级过渡动画
 * 创造独立宇宙按钮触发
 */

(function() {
    'use strict';
    
    // 过渡动画状态管理
    const TransitionManager = {
        isAnimating: false,
        hasPlayed: false, // session内只播放一次
        targetUrl: 'enhanced-creator.html',
        
        // 预加载图片
        preloadImages: function() {
            const images = [
                'images/cosmos-transition/kael_v3_lookback_v2_1.jpg',
                'images/cosmos-transition/kael_story_discover.jpg',
                'images/cosmos-transition/kael_story_crack.jpg'
            ];
            
            images.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        },
        
        // 初始化
        init: function() {
            // 预加载图片
            this.preloadImages();
            
            // 绑定按钮事件
            const btn = document.getElementById('createUniverseBtn');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.startTransition();
                });
            }
            
            // 创建碎裂碎片
            this.createShatterPieces();
        },
        
        // 创建碎裂效果碎片
        createShatterPieces: function() {
            const container = document.getElementById('shatterContainer');
            if (!container) return;
            
            const pieces = 12; // 碎片数量
            container.innerHTML = '';
            
            for (let i = 0; i < pieces; i++) {
                const piece = document.createElement('div');
                piece.className = 'shatter-piece';
                
                // 计算碎片位置和动画参数
                const angle = (i / pieces) * 360;
                const distance = 100 + Math.random() * 200;
                const tx = Math.cos(angle * Math.PI / 180) * distance;
                const ty = Math.sin(angle * Math.PI / 180) * distance;
                const rot = (Math.random() - 0.5) * 60;
                
                piece.style.cssText = `
                    left: ${45 + Math.random() * 10}%;
                    top: ${45 + Math.random() * 10}%;
                    width: ${15 + Math.random() * 20}%;
                    height: ${15 + Math.random() * 20}%;
                    --tx: ${tx}px;
                    --ty: ${ty}px;
                    --rot: ${rot}deg;
                    animation-delay: ${4.3 + Math.random() * 0.2}s;
                `;
                
                container.appendChild(piece);
            }
        },
        
        // 开始过渡动画
        startTransition: function() {
            if (this.isAnimating) return;
            
            // 如果已经播放过，直接跳转
            if (this.hasPlayed) {
                window.location.href = this.targetUrl;
                return;
            }
            
            this.isAnimating = true;
            this.hasPlayed = true;
            
            // 锁定页面交互
            document.body.style.overflow = 'hidden';
            document.body.style.userSelect = 'none';
            
            const transition = document.getElementById('cosmosTransition');
            const shatterOverlay = document.getElementById('shatterOverlay');
            const energyBurst = document.getElementById('energyBurst');
            
            // 显示过渡容器
            transition.classList.add('active');
            
            // 触发能量爆发
            setTimeout(() => {
                energyBurst.classList.add('active');
            }, 4000);
            
            // 触发碎裂效果
            setTimeout(() => {
                shatterOverlay.classList.add('active');
            }, 4300);
            
            // 完成动画，跳转页面
            setTimeout(() => {
                this.completeTransition();
            }, 5300);
        },
        
        // 完成过渡
        completeTransition: function() {
            // 隐藏过渡容器
            const transition = document.getElementById('cosmosTransition');
            transition.classList.remove('active');
            
            // 恢复页面交互
            document.body.style.overflow = '';
            document.body.style.userSelect = '';
            
            this.isAnimating = false;
            
            // 跳转到目标页面
            window.location.href = this.targetUrl;
        }
    };
    
    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            TransitionManager.init();
        });
    } else {
        TransitionManager.init();
    }
    
    // 暴露到全局
    window.CosmosTransition = TransitionManager;
})();
