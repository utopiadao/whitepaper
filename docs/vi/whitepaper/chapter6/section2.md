# 6.2 Thiết kế quy trình tái sinh của Phoenix

![凤凰重生过程设计图](/images/图16.svg)

## Giai đoạn một: Xác định giá trị và xác nhận quyền lợi

Hệ thống xác định 36 người dùng cuối cùng đã tạo chiều thứ tư và các đơn hàng của họ chưa hoàn thành tại thời điểm khởi động lại, như nhóm cầu nối chu kỳ.

## Giai đoạn hai: Thực hiện chính xác việc phân phối giá trị

- **10% Phần thưởng cầu nối**: Được chia đều cho 36 người tham gia chiều thứ tư cuối cùng
- **90% Kế thừa liên tục**: Đi vào pool phần thưởng nút liên tục

![价值传承分配机制](/images/图22.svg)

## Giai đoạn ba: Đặt lại toàn diện trạng thái hệ thống

Dọn dẹp trạng thái đơn hàng, giải phóng trạng thái người dùng, đặt lại tham số, dọn dẹp mạng.

## Giai đoạn bốn: Cơ chế bảo vệ thời gian khóa

Thời gian khóa trong 3 ngày đảm bảo quá trình chuyển đổi ổn định của hệ thống sau khi khởi động lại.