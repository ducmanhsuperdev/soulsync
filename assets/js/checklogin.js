const checkLogged = localStorage.getItem('logged');
const formsigninup = document.querySelector('.navbar-button');
const datauser = document.querySelector('.user-name');
const buttonlogout = document.querySelector(".dropdown-item");


const client_id = `543620233929-6ft6cajn8s7unf19e79f8io5h00g3drp.apps.googleusercontent.com`;
const url1 = 'https://ducmanhsuperdev.github.io/soulsync';
const url2 = 'http//127.0.0.1:5500';

const GET_LINK_TOKEN = `
https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=https://ducmanhsuperdev.github.io/soulsync&client_id=${client_id}
`
document.addEventListener("DOMContentLoaded", () => {
    const signBtn = document.querySelector(".sign_btn");
    signBtn.addEventListener("click", () => {
        window.location.href = GET_LINK_TOKEN
    });
});



// Hàm lấy access token từ URL
const getToken = () => {
    console.log(window.location.hash);

    const params = new URLSearchParams(window.location.hash.substring(1));
    return params.get("access_token");
};

// Hàm gọi API để lấy thông tin người dùng
const getUserInfo = async () => {

    try {
        const accessToken = getToken();
        if (!accessToken) {
            console.error("Access token không tồn tại!");
            return;
        }

        const response = await fetch(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
        );

        if (!response.ok) {
            throw new Error(`Lỗi API: ${response.status} ${response.statusText}`);
        }

        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('logged', true);

        window.location.href = 'index.html';
        alert("Đăng nhập thành công")

        return userData;

    } catch (error) {
        console.error("Đã xảy ra lỗi khi lấy thông tin người dùng:", error);
        return null;
    }


};

function render() {

    const userdata = JSON.parse(localStorage.getItem('user'));

    if (userdata) {
        datauser.textContent = userdata.name;
        formsigninup.style.display = 'none';
    }
    else {
        datauser.style.display = 'none';
        formsigninup.style.display = 'flex';
    }
}
render();



// Gọi hàm lấy thông tin người dùng

getUserInfo();





function checklogin() {

    if (JSON.parse(localStorage.getItem('logged')) == true) {
        datauser.textContent = userdata.name;
        formsigninup.style.display = 'none';
    }
    else {
        datauser.style.display = 'none';
        formsigninup.style.display = 'flex';
        document.querySelector('.user-dropdown').style.display = 'none';
    }
}




function checkLinkAccess() {
    localStorage.setItem('userdata', userdata.name);
    const userName = JSON.parse(localStorage.getItem('userdata'));
    if (!userName) {
        alert("Bạn cần đăng nhập để truy cập đường link này.");
        window.location.href = "login.html"; // Chuyển đến trang đăng nhập nếu chưa đăng nhập
        return false; // Ngăn không cho truy cập
    }
    return true; // Cho phép truy cập
}


buttonlogout.onclick = function () {
    localStorage.setItem('logged', false);
    window.location.href = "index.html";

}

// checkLinkAccess(); 

checklogin(); 
