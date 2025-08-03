// 自动字符分割函数
function splitChars() {
    // 获取所有需要分割的文本元素
    const elements = document.querySelectorAll('.js-char-split');
    
    elements.forEach(element => {
        // 获取原始文本并清空元素
        const text = element.textContent;
        element.innerHTML = '';
        
        // 为每个字符创建span并添加类名
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.className = 'char-hover';
            charSpan.textContent = text[i];
            element.appendChild(charSpan);
        }
    });
}

// 页面加载完成后执行分割
window.addEventListener('DOMContentLoaded', splitChars);