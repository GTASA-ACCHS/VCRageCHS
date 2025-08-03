// 这里是 JavaScript 代码，用于实现交互功能
console.log('网站加载完成');

// 隐藏加载动画
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
    }

    // 为所有文本节点中的字符添加悬浮效果
    // 获取需要处理的元素
    const elements = document.querySelectorAll('.title, .software-info h2, .software-info p');
    
    elements.forEach(element => {
        const text = element.textContent;
        const charElements = [];
        
        // 为每个字符创建span元素
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.className = 'char-hover';
            charSpan.textContent = text[i];
            charElements.push(charSpan);
        }
        
        // 清空元素内容并添加字符span
        element.innerHTML = '';
        charElements.forEach(charElement => {
            element.appendChild(charElement);
        });

// 下载弹窗功能
const downloadBtn = document.getElementById('downloadBtn');
const modal = document.getElementById('downloadModal');
const closeBtn = document.querySelector('.close-modal');
const downloadOptions = document.querySelectorAll('.download-option');

// 打开弹窗
downloadBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// 关闭弹窗
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// 点击弹窗外部关闭
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 下载选项点击事件
downloadOptions.forEach(option => {
    option.addEventListener('click', function() {
        const source = this.getAttribute('data-source');
        let downloadUrl = '';
        
        switch(source) {
            case 'baidu':
                downloadUrl = 'https://pan.baidu.com/example';
                break;
            case 'github':
                downloadUrl = 'https://github.com/example';
                break;
            case 'official':
                downloadUrl = 'https://official-website.com/example';
                break;
        }
        
        window.open(downloadUrl, '_blank');
        modal.style.display = 'none';
    });
});
    });

// 下载弹窗功能
const downloadBtn = document.getElementById('downloadBtn');
const modal = document.getElementById('downloadModal');
const closeBtn = document.querySelector('.close-modal');
const downloadOptions = document.querySelectorAll('.download-option');

// 打开弹窗
downloadBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// 关闭弹窗
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// 点击弹窗外部关闭
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 下载选项点击事件
downloadOptions.forEach(option => {
    option.addEventListener('click', function() {
        const source = this.getAttribute('data-source');
        let downloadUrl = '';
        
        switch(source) {
            case 'baidu':
                downloadUrl = 'https://pan.baidu.com/example';
                break;
            case 'github':
                downloadUrl = 'https://github.com/example';
                break;
            case 'official':
                downloadUrl = 'https://official-website.com/example';
                break;
        }
        
        window.open(downloadUrl, '_blank');
        modal.style.display = 'none';
    });
});
});

// 下载弹窗功能
const downloadBtn = document.getElementById('downloadBtn');
const modal = document.getElementById('downloadModal');
const closeBtn = document.querySelector('.close-modal');
const downloadOptions = document.querySelectorAll('.download-option');

// 打开弹窗
downloadBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

// 关闭弹窗
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// 点击弹窗外部关闭
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 下载选项点击事件
downloadOptions.forEach(option => {
    option.addEventListener('click', function() {
        const source = this.getAttribute('data-source');
        let downloadUrl = '';
        
        switch(source) {
            case 'baidu':
                downloadUrl = 'https://pan.baidu.com/example';
                break;
            case 'github':
                downloadUrl = 'https://github.com/example';
                break;
            case 'official':
                downloadUrl = 'https://official-website.com/example';
                break;
        }
        
        window.open(downloadUrl, '_blank');
        modal.style.display = 'none';
    });
});