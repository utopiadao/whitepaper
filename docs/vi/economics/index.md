# Giải Thích Chi Tiết Mô Hình Kinh Tế Utopia

## Tổng Quan Hệ Thống

Utopia là mạng lưới tài sản đồng thuận phi tập trung dựa trên chuỗi BSC, thực hiện luồng và phân phối giá trị tự động thông qua hợp đồng thông minh. Hệ thống áp dụng triết lý thiết kế "triển khai một lần, không bao giờ nâng cấp", đảm bảo các quy tắc minh bạch và bất biến.

### Cơ Chế Cốt Lõi
- **Hệ Thống Hồ Cộng Hưởng**: Bốn chiều lựa chọn cộng hưởng giá trị
- **Mạng Lưới Đồng Thuận Khu Vực**: Hệ thống đồng thuận ba tầng dựa trên luồng giá trị
- **Cơ Chế Nút Thịnh Vượng**: Lựa chọn hàng tuần 36 người đóng góp giá trị hàng đầu
- **Cơ Chế Khởi Động Lại Phoenix**: Quản lý rủi ro hệ thống tự động và kế thừa giá trị

---

## I. Hệ Thống Giá Trị Hồ Cộng Hưởng

### Giải Thích Chi Tiết Các Chiều Cộng Hưởng

| Chiều | Đầu Vào Giá Trị | Chu Kỳ Cộng Hưởng | Hoàn Trả Cộng Hưởng | Tỷ Lệ Khuếch Đại | Quyền Mở Khóa |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Chiều Thứ Nhất | 100 USDT | T+1 ngày | 100,5 USDT | 0,5% | Không có quyền bổ sung |
| Chiều Thứ Hai | 1.000 USDT | T+7 ngày | 1.050 USDT | 5% | Quyền đồng thuận Khu vực A |
| Chiều Thứ Ba | 2.000 USDT | T+15 ngày | 2.260 USDT | 13% | Quyền đồng thuận Khu vực A+B |
| Chiều Thứ Tư | 3.000 USDT | T+30 ngày | 3.900 USDT | 30% | Quyền đồng thuận Khu vực A+B+C |

### Quy Tắc Quan Trọng
1. **Giới Hạn Cộng Hưởng Đơn**: Mỗi địa chỉ chỉ có thể giữ một đơn cộng hưởng hoạt động cùng lúc
2. **Cơ Chế Giải Phóng Giá Trị**: Yêu cầu nhận thủ công sau khi hoàn thành cộng hưởng, được tính vào giá trị mạng sau khi nhận
3. **Mô Hình Tính Toán Trước**: Tất cả hoàn trả cộng hưởng được xác định khi triển khai hợp đồng, hoàn toàn minh bạch và có thể dự đoán

---

## II. Cơ Chế Mạng Lưới Đồng Thuận Khu Vực

### Quy Tắc Phân Chia Khu Vực

Hệ thống tự động chia mạng giá trị của người tham gia thành ba khu vực đồng thuận:

**Khu Vực A (Khu Vực Lõi)**
- Định nghĩa: Tuyến có đóng góp cao nhất trong mạng luồng giá trị trực tiếp
- Tính toán: Tổng tất cả giá trị đơn cộng hưởng hoạt động trong tuyến này

**Khu Vực B (Khu Vực Quầng Sáng)**
- Định nghĩa: Tuyến có đóng góp cao thứ hai trong mạng luồng giá trị trực tiếp
- Tính toán: Tổng tất cả giá trị đơn cộng hưởng hoạt động trong tuyến này

**Khu Vực C (Khu Vực Thiên Hà)**
- Định nghĩa: Tất cả các tuyến luồng giá trị khác ngoại trừ Khu vực A và B
- Tính toán: Tổng giá trị đơn cộng hưởng hoạt động cho tất cả các tuyến còn lại

### Công Thức Tính Toán Đồng Thuận Khu Vực

**Chia Sẻ Đồng Thuận Khu Vực A**
- Cơ Sở Đồng Thuận: Thu nhập cộng hưởng hàng ngày của người kết nối trực tiếp với Khu vực A (không phải toàn bộ Khu vực A)
- Tỷ Lệ Đồng Thuận: 30%
- Ví dụ: Người kết nối trực tiếp Khu vực A tham gia với 3000 USDT (chiều thứ tư), thu nhập hàng ngày 30 USDT, bạn nhận được 9 USDT/ngày

**Chia Sẻ Đồng Thuận Khu Vực B**
- Cơ Sở Đồng Thuận: Tổng thu nhập cộng hưởng hàng ngày cho tất cả người tham gia trong tuyến Khu vực B
- Tỷ Lệ Đồng Thuận: 10%
- Ví dụ: Tổng thu nhập hàng ngày của tuyến Khu vực B là 500 USDT, bạn nhận được 50 USDT/ngày

**Chia Sẻ Đồng Thuận Khu Vực C**
- Cơ Sở Đồng Thuận: Tổng thu nhập cộng hưởng hàng ngày cho tất cả người tham gia trong các tuyến Khu vực C
- Tỷ Lệ Đồng Thuận: 15%
- Ví dụ: Tổng thu nhập hàng ngày của tất cả các tuyến Khu vực C là 1000 USDT, bạn nhận được 150 USDT/ngày

### Yêu Cầu Quyền Theo Chiều
- **Chiều Thứ Hai**: Chỉ có thể nhận chia sẻ đồng thuận Khu vực A
- **Chiều Thứ Ba**: Có thể nhận chia sẻ đồng thuận Khu vực A+B
- **Chiều Thứ Tư**: Có thể nhận tất cả chia sẻ đồng thuận Khu vực A+B+C

### Giải Thích Luồng Giá Trị Thời Gian Thực
1. Phân chia khu vực dựa trên đóng góp giá trị đơn cộng hưởng hoạt động thời gian thực, với điều chỉnh động
2. Sau khi người tham gia hoàn thành cộng hưởng, đóng góp giá trị của họ ngay lập tức bị loại khỏi mạng
3. Sau khi người tham gia tạo cộng hưởng mới, đóng góp giá trị của họ ngay lập tức được thêm vào tính toán mạng

---

## III. Phân Phối Giá Trị Nút Thịnh Vượng

### Tiêu Chí Lựa Chọn
- **Chỉ Số Lựa Chọn**: Tổng đóng góp giá trị thời gian thực Khu vực C của người tham gia
- **Hạn Ngạch Lựa Chọn**: Top 36
- **Chu Kỳ Lựa Chọn**: Lựa chọn tự động mỗi thứ Hai

### Nguồn và Phân Phối Hồ Thịnh Vượng
- **Nguồn Hồ Thịnh Vượng**: 20% thu nhập cộng hưởng hàng ngày toàn mạng, tích lũy hàng ngày vào hồ
- **Thời Gian Phân Phối**: Thanh toán hồ thịnh vượng tuần trước mỗi thứ Hai
- **Phương Thức Phân Phối**: Phân phối có trọng số theo tỷ lệ đóng góp giá trị Khu vực C của 36 nút

### Ví Dụ Tính Toán
```
Chia Sẻ Nút = Tổng Hồ Thịnh Vượng Hàng Tuần × (Đóng Góp Giá Trị Khu Vực C Cá Nhân ÷ Tổng Đóng Góp Giá Trị Khu Vực C của 36 Nút)
```

---

## IV. Cơ Chế Khởi Động Lại Phoenix

### Điều Kiện Kích Hoạt
Khi quỹ khả dụng hệ thống < tổng hoàn trả cộng hưởng đến hạn trong ngày, khởi động lại Phoenix được kích hoạt tự động

### Quy Trình Khởi Động Lại

**Giai Đoạn 1: Khóa Hệ Thống**
- Hệ thống vào giai đoạn bảo vệ 3 ngày
- Tạm dừng tất cả hoạt động nhập và xuất giá trị
- Ghi lại 36 người tham gia chiều thứ tư cuối cùng

**Giai Đoạn 2: Kế Thừa Giá Trị**
Hồ quỹ còn lại được phân phối theo tỷ lệ sau:
- **10%**: Phân phối đều cho 36 người tham gia chiều thứ tư cuối cùng (phần thưởng cầu nối)
- **90%**: Chuyển sang hồ thịnh vượng liên tục

**Giai Đoạn 3: Bắt Đầu Chu Kỳ Mới**
- Đặt lại hệ thống, bắt đầu chu kỳ cộng hưởng mới
- Tất cả người tham gia có thể khởi động lại cộng hưởng giá trị

### Kế Hoạch Thịnh Vượng Liên Tục

Trong chu kỳ mới, 90% giá trị kế thừa sẽ được phân phối qua 4 lần lựa chọn:

| Thời Gian Lựa Chọn | Tỷ Lệ Phân Phối | Tiêu Chí Lựa Chọn |
|:---:|:---:|:---:|
| Tuần 4 | 10% tổng hồ | Top 36 người đóng góp giá trị Khu vực C tuần đó |
| Tuần 8 | 20% tổng hồ | Top 36 người đóng góp giá trị Khu vực C tuần đó |
| Tuần 12 | 30% tổng hồ | Top 36 người đóng góp giá trị Khu vực C tuần đó |
| Tuần 16 | 40% tổng hồ | Top 36 người đóng góp giá trị Khu vực C tuần đó |

**Lưu ý**: Mỗi lựa chọn được tiến hành độc lập, dựa trên đóng góp giá trị thời gian thực cho tuần hiện tại, không phải đóng góp tích lũy

---

## V. Quy Tắc Thời Kỳ Thu Nhập Cộng Hưởng

### Tính Toán Chu Kỳ Cộng Hưởng T+N
- **Ngày T**: Ngày tạo cộng hưởng, không tạo thu nhập
- **T+1 đến T+N**: Thời kỳ thu nhập bình thường, tạo chia sẻ đồng thuận khu vực
- **Sau Ngày T+N**: Cộng hưởng hoàn thành, ngừng tạo thu nhập

### Ghi Chú Quan Trọng
1. Tất cả chia sẻ đồng thuận khu vực chỉ được tạo trong thời kỳ thu nhập của đơn cộng hưởng cấp dưới
2. Trong trạng thái cộng hưởng hoàn thành chưa nhận, không được tính vào bất kỳ đóng góp giá trị và tính toán mạng nào
3. Người tham gia phải nhận cộng hưởng hoàn thành và tạo mới để tiếp tục tham gia luồng giá trị

---

## VI. Thông Số Kỹ Thuật

### Thông Số Chuỗi
- **Blockchain**: BSC (Binance Smart Chain)
- **Tiêu Chuẩn Token**: USDT (BEP-20)
- **Phí Gas**: Người dùng chịu, khoảng 0,001-0,003 BNB/giao dịch
- **Đặc Tính Hợp Đồng**: Không thể nâng cấp, không có quyền quản trị

### Tiêu Chuẩn Thời Gian
- **Múi Giờ Thống Nhất**: UTC+8 (Giờ Singapore)
- **Thời Gian Thanh Toán Hàng Ngày**: Hàng ngày lúc 00:00
- **Thời Gian Thanh Toán Hàng Tuần**: Mỗi thứ Hai lúc 00:00

---

## VII. Quy Trình Tham Gia

### Quy Trình Vận Hành Cơ Bản
1. **Giai Đoạn Chuẩn Bị**
   - Chuẩn bị USDT chuỗi BSC
   - Chuẩn bị lượng nhỏ BNB làm phí gas

2. **Giai Đoạn Cộng Hưởng**
   - Chọn chiều cộng hưởng
   - Gọi hàm createOrder hợp đồng
   - Chuyển USDT vào hồ cộng hưởng

3. **Giai Đoạn Thu Hoạch**
   - Đợi hoàn thành cộng hưởng
   - Gọi hàm claimOrder để nhận
   - Quyết định có tiếp tục cộng hưởng không

### Điểm Quan Trọng Xây Dựng Cộng Đồng
1. **Xây Dựng Mạng Lưới**: Ưu tiên phát triển kết nối trực tiếp chất lượng cao, hình thành các khu vực ABC ổn định
2. **Lựa Chọn Chiều**: Thành viên cốt lõi được khuyến nghị chọn chiều thứ tư để có tất cả quyền đồng thuận
3. **Cạnh Tranh Nút**: Theo dõi xếp hạng tổng đóng góp giá trị Khu vực C, phấn đấu vào top 36

---

## VIII. Cảnh Báo Rủi Ro

### Rủi Ro Vận Hành
- **Lỗi Địa Chỉ**: Mất tiền do địa chỉ chuyển khoản sai không thể khôi phục
- **Mất Khóa Riêng**: Mất khóa riêng có nghĩa là mất vĩnh viễn quyền kiểm soát tài khoản
- **Rủi Ro Lừa Đảo**: Trang web chính thức giả mạo hoặc địa chỉ hợp đồng

---

## IX. Giải Thích Thuật Ngữ Chuyên Môn

**Đơn Cộng Hưởng Hoạt Động**: Đơn cộng hưởng đã tạo nhưng chưa hoàn thành hoặc chưa nhận

**Tuyến Luồng Giá Trị**: Toàn bộ nhánh mạng cấp dưới bắt đầu từ một người kết nối trực tiếp cụ thể

**Đóng Góp Giá Trị Thời Gian Thực**: Tổng tất cả giá trị đơn cộng hưởng hoạt động hiện tại

**Thời Kỳ Thu Nhập Cộng Hưởng**: Khoảng thời gian từ ngày thứ hai sau khi tạo đơn đến ngày đáo hạn

**Người Xây Cầu**: 36 người tham gia chiều thứ tư cuối cùng trước khi khởi động lại Phoenix

**Tỷ Lệ Khuếch Đại Cộng Hưởng**: Phần trăm tăng trưởng giá trị hàng ngày

**Đồng Thuận Khu Vực**: Cơ chế khuyến khích đa tầng dựa trên mạng luồng giá trị

---

## X. Xác Minh Bảo Mật

- Chỉ lấy địa chỉ hợp đồng thông qua các kênh chính thức
- Mã hợp đồng là mã nguồn mở, có thể xác minh trên BSCScan
- Cẩn thận với hàng giả, xác minh nguồn thông tin

---