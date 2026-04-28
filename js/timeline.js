// 时间线页面脚本

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    initTimelineAnimations();
});

// 初始化时间线动画
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // 使用 Intersection Observer 检测元素是否进入视口
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// 切换详情展开/收起
function toggleDetails(btn) {
    const details = btn.previousElementSibling;
    const isExpanded = details.classList.contains('expanded');
    
    if (isExpanded) {
        details.classList.remove('expanded');
        btn.textContent = '展开详情';
        btn.style.transform = 'rotate(0deg)';
    } else {
        details.classList.add('expanded');
        btn.textContent = '收起详情';
        btn.style.transform = 'rotate(180deg)';
    }
}

// 点击节点跳转（可选功能）
document.querySelectorAll('.timeline-marker').forEach(marker => {
    marker.style.cursor = 'pointer';
    marker.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const btn = content.querySelector('.expand-btn');
        if (btn && !content.querySelector('.timeline-details').classList.contains('expanded')) {
            toggleDetails(btn);
        }
        content.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
