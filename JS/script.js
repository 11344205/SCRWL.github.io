let infoIndex = 0;
const infoTexts = document.querySelectorAll('.info-text');

function rotateInfo() {
    // 移除當前 active
    infoTexts[infoIndex].classList.remove('active');
    
    // 計算下一組索引
    infoIndex = (infoIndex + 1) % infoTexts.length;
    
    // 加上新 active
    infoTexts[infoIndex].classList.add('active');
}

// 每 3 秒執行一次切換
setInterval(rotateInfo, 3000);



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); // 抓取 dots
let slideInterval = setInterval(autoPlay, 3000);

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach(s => s.classList.remove('active'));
    // 防錯判斷：如果有 dots 才執行移除
    if (dots.length > 0) {
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    slides[currentIndex].classList.add('active');
}

function moveSlide(step) {
    resetTimer();
    showSlide(currentIndex + step);
}

function autoPlay() {
    showSlide(currentIndex + 1);
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoPlay, 3000);
}

/*member*/ 
function toggleMember() {
    const loginBox = document.getElementById('login-box');
    const regBox = document.getElementById('register-box');

    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        regBox.style.display = 'none';
    } else {
        loginBox.style.display = 'none';
        regBox.style.display = 'block';
    }
}

function handleForgotPwd() {
    alert("請聯繫客服或檢查您的註冊信箱以重設密碼！");
    // 未來可以跳轉到 forgot-password.html
}

/*會員服務*/
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-main-row');
    // 當頁面下滑超過 50px 時，加上 scrolled class
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 登入表單事件
document.addEventListener('DOMContentLoaded', function() {

    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');

    window.toggleMember = function() {
        if (loginBox.style.display === "none") {
            loginBox.style.display = "block";
            registerBox.style.display = "none";
        } else {
            loginBox.style.display = "none";
            registerBox.style.display = "block";
        }
    };

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 抓取註冊欄位值
            const nameInput = registerForm.querySelector('input[type="text"]').value;
            const emailInput = registerForm.querySelector('input[type="email"]').value;
            const pwdInput = registerForm.querySelector('input[type="password"]').value;

            // 建立會員資料物件
            const userData = {
                name: nameInput,
                email: emailInput,
                password: pwdInput,
                level: "V.I.P SKATER",
                joinDate: new Date().toLocaleDateString()
            };

            // 存入瀏覽器快取
            localStorage.setItem('userAccount', JSON.stringify(userData));
            
            alert("註冊成功！歡迎加入 SCRWL，請使用新帳號登入。");
            toggleMember(); // 自動切換回登入畫面
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止網頁刷新的核心
            
            const emailInput = document.getElementById('login-email').value;
            const pwdInput = document.getElementById('login-pwd').value;
            
            // 抓取先前註冊的資料
            const savedData = JSON.parse(localStorage.getItem('userAccount'));

            if (savedData && savedData.email === emailInput && savedData.password === pwdInput) {
                alert("登入成功！");
                window.location.href = "login.html"; // 改成跳轉到新設的頁面
            }
        });
    }


    const modal = document.getElementById('member-modal');

    function openMemberModal(data) {
        if (modal) {
            modal.style.display = "block";
            const infoDiv = document.getElementById('modal-user-info');
            // 動態注入資料到彈窗
            infoDiv.innerHTML = `
                <p style="margin-bottom: 15px; font-size: 1.2rem;"><strong>SKATER:</strong> ${data.name}</p>
                <p style="margin-bottom: 10px;"><strong>EMAIL:</strong> ${data.email}</p>
                <p style="margin-bottom: 10px;"><strong>LEVEL:</strong> <span style="color:#D36A28">${data.level}</span></p>
                <p style="font-size: 0.8rem; color: #888;">註冊日期: ${data.joinDate}</p>
            `;
        }
    }

    // 全域關閉函數，供 HTML 中的 onclick 使用
    window.closeMemberModal = function() {
        if (modal) {
            modal.style.display = "none";
        }
    };

    // 點擊背景遮罩也可以關閉彈窗
    window.onclick = function(event) {
        if (event.target == modal) {
            closeMemberModal();
        }
    };

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlides() {
        if (slides.length > 0) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide++;
            if (currentSlide > slides.length) { currentSlide = 1 }
            slides[currentSlide - 1].classList.add('active');
            setTimeout(showSlides, 3000); // 3000ms = 3秒
        }
    }
    
    // 如果你在首頁，就啟動輪播
    if (slides.length > 0) {
        showSlides();
    }
});