const love = document.querySelector('.love-heart');
const phara = document.querySelector('.love-phara');
const automusic = document.querySelector('.music');
const listItem = document.querySelector('.list-item');
const content = document.querySelector('.totinh-content');
love.addEventListener('click', function () {
    content.style.display = 'flex';
    phara.innerHTML = `
        Xin chào Yêu Thương của anh!
        Cảm ơn em vì đã đến bên anh. Anh cảm ơn ông trời đã ban em đến bên anh. 
        Anh sẽ luôn luôn cố gắng nỗ lực, cố gắng giàu ú ụ để sau này em được ăn sung mặc sướng, shopping tháng 100 củ khoai. Em sẽ được mặc chiếc váy cưới đẹp nhất trong cuộc đời và sánh đôi bên anh. Ngày đó chúng ta sẽ có nhau. Vậy nên hãy kiên nhẫn chịu đựng và chờ đợi anh em nhá!!
        Anh yêu em cục vàng của anh
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-heart"></i>
    `
    automusic.innerHTML = `
        <audio src="./src/Nhin-Vao-Doi-Mat-Nay-Long-Cao.mp3" class="nhac" autoplay></audio>
    `
})

