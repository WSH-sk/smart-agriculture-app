// 页面跳转功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航项
    const tabItems = document.querySelectorAll('.tab-item');
    
    // 为每个导航项添加点击事件
    tabItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            tabItems.forEach(tab => tab.classList.remove('active'));
            
            // 给当前项添加active类
            this.classList.add('active');
            
            // 获取目标页面路径
            const targetPage = this.getAttribute('data-target');
            
            // 跳转到目标页面
            window.location.href = targetPage;
        });
    });
    
    // 根据当前页面高亮对应导航项
    const currentPage = window.location.pathname.split('/').pop();
    tabItems.forEach(item => {
        const itemPage = item.getAttribute('data-target').split('/').pop();
        if (itemPage === currentPage) {
            item.classList.add('active');
        }
    });

    // 登录功能
    const loginForm = document.getElementById('login-form');
    const userInfo = document.getElementById('user-info');
    const loginBtn = document.getElementById('login-btn');
    
    // 检查本地存储中是否有登录状态
    if (localStorage.getItem('isLoggedIn') === 'true') {
        userInfo.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
    }
    
    // 登录按钮点击事件
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // 简单验证(实际项目中应该调用API验证)
        if (username && password) {
            // 模拟登录成功
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            
            // 显示用户信息，隐藏登录表单
            loginForm.style.display = 'none';
            userInfo.style.display = 'block';
            
            // 更新用户名显示
            document.querySelector('.user-name').textContent = username;
        } else {
            alert('请输入用户名和密码');
        }
    });
    
    // 注册链接点击事件
    document.getElementById('register-link').addEventListener('click', function(e) {
        e.preventDefault();
        alert('注册功能即将上线，敬请期待！');
    });
    
    // 退出登录功能
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('确定要退出登录吗？')) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            userInfo.style.display = 'none';
            loginForm.style.display = 'block';
            // 清空输入框
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });
});
