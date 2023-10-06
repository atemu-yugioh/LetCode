##### biSecLeft: trả về chỉ số index của phần tử đầu tiên trong mảng >= target

    > trong mảng có chưa target => vị trị trả về sẽ là vị trí đầu tiên của target đó trong mảng (vị trí chèn trái)
    > trong mảng không chứa target => ví trí trả về sẽ là vị trí đầu tiên lớn hơn target trong mảng (vị trí chèn phải)
    > NẾU:
            + (indexReturn === ar.length) trong mảng không có phần tử lớn hơn target
            + (ar[indexReturn] !== target) trong mảng không có phần bằng target
            ==> không có phần tử trong mảng return -1

##### biSecRight: trả về chỉ số index phần tử đầu tiên trong mảng > target (vị trí chèn phải)

`ý tưởng là gán giá trị thỏa mãn tạm thời và tiếp tục dich sang trái để tìm được phần tử đầu tiên nhất (đầu tiên nhất == nằm về phía bên trái của dãy)`
