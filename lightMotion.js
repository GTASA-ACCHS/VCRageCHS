// 三体运动光点效果
const light1 = document.getElementById('light1');
const light2 = document.getElementById('light2');
const light3 = document.getElementById('light3');

// 检查元素是否存在
if (!light1 || !light2 || !light3) {
    console.error('光效元素未找到，请检查HTML中是否存在light1、light2、light3元素');
} else {
    console.log('光效元素已找到，开始初始化');
}

// 初始化位置
let positions = {
    light1: { x: 0.2, y: 0.3 },
    light2: { x: 0.7, y: 0.6 },
    light3: { x: 0.4, y: 0.8 }
};

// 运动参数
const params = {
    speed: 0.002,
    distance: 0.3,
    mouseInfluence: 0.2
};

// 鼠标位置跟踪
let mouseX = 0;
let mouseY = 0;

if (document.addEventListener) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
    });
}

// 动画循环
function animate() {
    // 确保元素存在再执行动画
    if (!light1 || !light2 || !light3) return;
    
    const time = Date.now() * params.speed;
    
    // 三体运动轨迹计算
    positions.light1.x = 0.2 + 0.1 * Math.cos(time * 0.7);
    positions.light1.y = 0.3 + 0.1 * Math.sin(time * 0.7);
    
    positions.light2.x = 0.7 + 0.1 * Math.cos(time * 0.5 + 2);
    positions.light2.y = 0.5 + 0.1 * Math.sin(time * 0.5 + 2);
    
    positions.light3.x = 0.4 + 0.1 * Math.cos(time * 0.3 + 4);
    positions.light3.y = 0.8 + 0.1 * Math.sin(time * 0.3 + 4);
    
    // 应用鼠标影响
    positions.light1.x += (mouseX - positions.light1.x) * params.mouseInfluence;
    positions.light1.y += (mouseY - positions.light1.y) * params.mouseInfluence;
    
    // 限制位置范围在0-1之间
    positions.light1.x = Math.max(0, Math.min(1, positions.light1.x));
    positions.light1.y = Math.max(0, Math.min(1, positions.light1.y));
    
    positions.light2.x = Math.max(0, Math.min(1, positions.light2.x));
    positions.light2.y = Math.max(0, Math.min(1, positions.light2.y));
    
    positions.light3.x = Math.max(0, Math.min(1, positions.light3.x));
    positions.light3.y = Math.max(0, Math.min(1, positions.light3.y));
    
    // 更新位置
    light1.style.left = `${positions.light1.x * 100}%`;
    light1.style.top = `${positions.light1.y * 100}%`;
    
    light2.style.left = `${positions.light2.x * 100}%`;
    light2.style.top = `${positions.light2.y * 100}%`;
    
    light3.style.left = `${positions.light3.x * 100}%`;
    light3.style.top = `${positions.light3.y * 100}%`;
    
    requestAnimationFrame(animate);
}

// 启动动画
function initAnimation() {
    if (light1 && light2 && light3) {
        console.log('开始光效动画');
        // 设置初始位置
        light1.style.left = `${positions.light1.x * 100}%`;
        light1.style.top = `${positions.light1.y * 100}%`;
        
        light2.style.left = `${positions.light2.x * 100}%`;
        light2.style.top = `${positions.light2.y * 100}%`;
        
        light3.style.left = `${positions.light3.x * 100}%`;
        light3.style.top = `${positions.light3.y * 100}%`;
        
        // 确保元素可见并重置文字相关样式
        light1.style.visibility = 'visible';
        light2.style.visibility = 'visible';
        light3.style.visibility = 'visible';
        
        // 重置可能被继承的文字样式
        light1.style.background = '';
        light1.style.webkitBackgroundClip = '';
        light1.style.backgroundClip = '';
        light1.style.webkitTextFillColor = '';
        
        light2.style.background = '';
        light2.style.webkitBackgroundClip = '';
        light2.style.backgroundClip = '';
        light2.style.webkitTextFillColor = '';
        
        light3.style.background = '';
        light3.style.webkitBackgroundClip = '';
        light3.style.backgroundClip = '';
        light3.style.webkitTextFillColor = '';
        
        // 开始动画
        animate();
    } else {
        console.error('无法找到光效元素，重试中...');
        // 如果元素尚未加载完成，稍后重试
        setTimeout(initAnimation, 100);
    }
}

// 页面加载完成后启动动画
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimation);
} else {
    // DOM已经加载完成
    initAnimation();
}