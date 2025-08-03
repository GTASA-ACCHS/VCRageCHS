// 性能优化和滚动处理脚本
document.addEventListener('DOMContentLoaded', function() {
    // 节流函数，用于优化滚动事件性能
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 优化光效动画性能
    const lights = document.querySelectorAll('.light-point');
    
    // 使用 requestAnimationFrame 优化光效动画
    let ticking = false;
    
    function updateLights() {
        // 光效位置更新逻辑可以放在这里
        // 当前lightMotion.js已经实现了动画，这里主要是确保性能优化
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateLights);
            ticking = true;
        }
    }
    
    // 监听滚动事件并使用节流优化
    window.addEventListener('scroll', throttle(function() {
        // 滚动时的处理逻辑
        requestTick();
    }, 16)); // 约60FPS
    
    // 图片懒加载
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // 如果有data-src属性，则将其设置为src
                    if (img.hasAttribute('data-src')) {
                        img.src = img.getAttribute('data-src');
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // 观察所有图片
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
    
    // 导航链接平滑滚动处理
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // 使用scrollIntoView实现平滑滚动
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 优化动画性能 - 对于不在视口中的元素暂停动画
    const animatedElements = document.querySelectorAll('.char-hover, .software-card, .function-cell');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 元素进入视口，确保动画可以正常播放
                    entry.target.style.willChange = 'transform';
                } else {
                    // 元素离开视口，移除will-change属性以节省资源
                    entry.target.style.willChange = 'auto';
                }
            });
        }, {
            root: null,
            rootMargin: '200px', // 提前200px开始加载
            threshold: 0.1
        });
        
        animatedElements.forEach(el => animationObserver.observe(el));
    }
});