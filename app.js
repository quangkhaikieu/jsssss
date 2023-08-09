// 1	Cách kiểm tra số nguyên dương trong javascript

// const kiemTraSoNguyenDuong = (n) => {
//     if (n <= 0) {
//         return false;
//     }

//     if (Math.floor(n) === n) {
//         return true;
//     }

//     return false;
// }

// const dapAn = kiemTraSoNguyenDuong(-4.1);

// if (dapAn) {
//     console.log('La so nguyen duong')
// }
// else {
//     console.log('Khong phai la so nguyen duong')
// }



// 2	Cách kiểm tra số nguyên âm trong javascript
// 3	Tính tổng hai số bằng Javascript (cộng hai số)
// 4	Tính tổng các phần tử trong mảng javascript
// 5	Hướng dẫn giải phương trình bậc 1 bằng Javascript
    // ax + b = 0 a#0 => x = -b / a
    // const giaiPhuongTrinhBacMot = (a, b) => {
    //     if (a === 0) {
    //         return 'vo nghiem!!!'
    //     }

    //     return -b/a
    // }

    // console.log(giaiPhuongTrinhBacMot(1, 2))

// 6	Kiểm tra số nguyên tố bằng Javascript
    // const kiemTraSoNguyenTo = (n) => {
    //     if (n <= 1) {
    //         return false
    //     }

    //     for (let i = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i === 0) {
    //             return false
    //         }
    //     }

    //     return true
    // }

    // console.log(kiemTraSoNguyenTo(11))



// 7	Bài tập vòng lặp for trong Javascript
// in ket qua tu 1 - n

    const inputValue = document.querySelector('#number').value
    const numbersBtn = document.querySelector('#numbers_btn')
    console.log(inputValue)

    const print_number = (n) => {
        for (let i = 1; i <= n; i++) {
            console.log(i)
        } 
    }

    numbersBtn.addEventListener('click', () => {
        print_number(inputValue)
    })


// 8	Bài tập vòng lặp while trong javascript
// 9	Bài tập tạo hàm trong Javascript
// 10	Một số hàm validate dữ liệu bằng Javascript
// 11	Hướng dẫn tạo menu dropdown bằng Javascript
// 12	Một số ví dụ học javascript căn bản (Phần 1)
// 13	Cách thêm thẻ HTML bằng Javascript
// DOM & BOM
// 14	In ra thông báo khi click vào button bằng Javascript
// 15	Thay đổi nội dung của thẻ HTML bằng Javascript
// 16	Thay đổi backgroud của thẻ HTML bằng Javascript
// 17	Thay đổi thuộc tính của thẻ HTML bằng Javascript
// 18	Code ẩn và hiện thẻ div bằng Javascript
// 19	Bài tập DOM căn bản trong Javascript