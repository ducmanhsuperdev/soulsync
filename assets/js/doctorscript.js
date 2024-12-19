document.querySelector('.submit-btn').addEventListener('click', function () {
    const time = document.querySelector('input[type="datetime-local"]').value;
    const description = document.querySelector('textarea').value;
    const rating = document.querySelector('select').value;

    if (!time || !description) {
        alert('Vui lòng điền đầy đủ thông tin trước khi đặt lịch.');
    } else {
        alert(`Lịch đã được đặt!\nThời gian: ${time}\nMô tả: ${description}\nĐánh giá: ${rating} sao`);
    }
});
