# 7.3 Tương tác người dùng và phi tập trung

## Đơn giản hóa tối đa tương tác người dùng

### Triết lý thiết kế quy trình tham gia ba bước

Utopia đơn giản hóa các tương tác blockchain phức tạp thành ba bước:

**Bước 1: Kết nối ví**  
✓ Kết nối một cú nhấp với ví Web3 hỗ trợ BSC (MetaMask, Trust Wallet, v.v.)  
✓ Tự động phát hiện cấu hình mạng

**Bước 2: Chọn chiều kích**  
✓ Lựa chọn trực quan số tiền đầu tư và chu kỳ  
✓ Tính toán thời gian thực và hiển thị lợi nhuận kỳ vọng

**Bước 3: Xác nhận chuyển khoản**  
✓ Hoàn thành chuyển USDT vào hợp đồng thông minh chỉ với một cú nhấp  
✓ Tự động thiết lập số tiền chuyển khoản đúng và địa chỉ đích

![Quy trình tham gia ba bước](/images/图26.svg)

### Đặc điểm đơn giản hóa tương tác

- **Chế độ ủy quyền đơn**: Người dùng chỉ cần ủy quyền USDT khi sử dụng lần đầu, các lần tham gia sau không cần ủy quyền lặp lại
- **Nhận dạng thông minh số tiền**: Hợp đồng tự động nhận dạng chiều kích tương ứng với số tiền chuyển khoản, không cần tham số bổ sung
- **Xử lý đơn hàng tự động**: Các đơn hàng đến hạn được xử lý thông qua tự động hóa trên chuỗi, không cần thao tác thủ công của người dùng
- **Truy vấn trạng thái minh bạch**: Tất cả trạng thái đơn hàng và thông tin hệ thống có thể được truy vấn theo thời gian thực thông qua trình khám phá blockchain

## Đảm bảo phi tập trung hoàn toàn

### Thiết kế không thể nâng cấp

![Thiết kế không thể nâng cấp](/images/图27.svg)

```solidity
/**
 * @notice Hợp đồng này áp dụng thiết kế không thể nâng cấp
 * @dev Không có chức năng nâng cấp, không có đặc quyền quản trị, không có cơ chế cửa hậu
 */
contract UtopiaCore {
    // Tất cả các tham số quan trọng đều bất biến
    IERC20 public immutable token;
    address public immutable continuityRewardAddr;
    address public immutable rewardPoolAddr;
    
    // Cấu hình tính toán trước được thiết lập một lần trong constructor, không bao giờ thay đổi
    Dimension[4] public dimensions;
    
    // Không có biến owner
    // Không có chức năng upgrade
    // Không có chức năng pause
    // Không có chức năng đặc quyền quản trị
}
```

### Cơ chế hoạt động tự trị

- **Thực thi tự động**: Tất cả các chức năng cốt lõi được thực thi tự động thông qua hợp đồng thông minh, không cần can thiệp của con người
- **Điều khiển bằng thuật toán**: Các điều kiện khởi động lại phượng hoàng hoàn toàn được xác định bởi thuật toán, không có yếu tố chủ quan
- **Quy tắc minh bạch**: Tất cả logic kinh doanh được mã hóa trong hợp đồng thông minh, có thể xác minh công khai
- **Hoạt động vĩnh viễn**: Một khi được triển khai, hệ thống sẽ hoạt động vĩnh viễn, không thể bị dừng hoặc sửa đổi bởi bất kỳ ai

## Tính bất biến sau triển khai

### Cấu hình bất biến

```solidity
/**
 * @dev Tất cả các cấu hình quan trọng đều bất biến
 */
contract UtopiaCore {
    
    // Địa chỉ token bất biến
    IERC20 public immutable token;
    // Địa chỉ hệ thống bất biến
    address public immutable continuityRewardAddr;
    address public immutable rewardPoolAddr;
    // Cấu hình chiều kích được thiết lập trong constructor sau đó bất biến
    Dimension[4] public dimensions;
    constructor(
        address _token,
        address _continuityRewardAddr,
        address _rewardPoolAddr
    ) {
        // Thiết lập một lần, không bao giờ thay đổi
        token = IERC20(_token);
        continuityRewardAddr = _continuityRewardAddr;
        rewardPoolAddr = _rewardPoolAddr;
        // Cấu hình tính toán trước được thiết lập một lần
        _initializeDimensions(); // Hàm khởi tạo giả định
    }
    
    // Không có chức năng để sửa đổi cấu hình
    // Không có biến owner
    // Không có đặc quyền quản trị
    // Không có cơ chế nâng cấp
    // Không có chức năng tạm dừng
}
```