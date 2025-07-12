# 7.2 Động Cơ Tính Toán Trước và Cơ Chế Bảo Mật

## Động Cơ Tính Toán Trước: Sự Kết Hợp Hoàn Hảo Giữa Hiệu Quả và Minh Bạch

### Giá Trị Đổi Mới của Mô Hình Tính Toán Trước

Utopia đã áp dụng một mô hình tính toán trước độc đáo trong đó tất cả số tiền hoàn trả đơn hàng và lợi nhuận được xác định trước khi triển khai hợp đồng.

![预计算模型架构](/images/图29.svg)

### Ưu Điểm Kỹ Thuật của Tính Toán Trước

- **Tối Ưu Hóa Hiệu Quả Gas**: Xử lý đơn hàng không cần tính toán phức tạp, chỉ cần các thao tác tra cứu bảng đơn giản
- **Khả Năng Dự Đoán Kết Quả**: Người dùng có thể biết chính xác số tiền hoàn trả khi tạo đơn hàng
- **Tính Ổn Định Hệ Thống**: Loại bỏ lỗi tính toán và rủi ro tràn số nguyên
- **Thân Thiện Với Kiểm Toán**: Tất cả kết quả tính toán đều là các hằng số được công bố trước

## Cơ Chế Bảo Vệ Bảo Mật Đa Tầng

### Kiến Trúc Bảo Mật Phòng Thủ Nhiều Lớp

Utopia đã áp dụng kiến trúc bảo mật phòng thủ nhiều lớp cấp quân sự:

**Lớp Thứ Nhất: Bảo Mật Xác Thực Đầu Vào**
```solidity
modifier validDimension(uint8 dimension) {
    require(dimension < 4, "Invalid dimension");
    _;
}
modifier validAmount(uint256 amount, uint8 dimension) {
    require(amount == dimensions[dimension].amount, "Invalid amount");
    _;
}
```

**Lớp Thứ Hai: Bảo Mật Logic Kinh Doanh**
```solidity
modifier oneOrderPerUser() {
    require(!hasActiveOrder[msg.sender], "User already has active order");
    _;
}
// ReentrancyGuard from OpenZeppelin
// modifier nonReentrant() { ... }
```

**Lớp Thứ Ba: Bảo Vệ Bảo Mật Quỹ**
```solidity
using SafeERC20 for IERC20;
// token.safeTransfer(to, amount);
```

![资金安全保护机制](/images/图25.svg)

## Cơ Chế Đảm Bảo Bảo Mật

```solidity
/**
 * @dev Đảm bảo bảo mật đa tầng
 */
contract UtopiaCore is ReentrancyGuard {
    
    // Bảo vệ khỏi tấn công reentrancy
    modifier nonReentrant() {
        // Triển khai OpenZeppelin ReentrancyGuard
        _;
    }
    
    // Xác thực đầu vào
    modifier validDimension(uint8 dimension) {
        require(dimension < 4, "Invalid dimension");
        _;
    }
    
    // Kiểm tra trạng thái người dùng
    modifier oneOrderPerUser() {
        require(!hasActiveOrder[msg.sender], "User already has active order");
        _;
    }
    
    // Kiểm tra trạng thái hệ thống
    modifier systemUnlocked() {
        require(block.timestamp >= systemUnlockTime, "System locked");
        _;
    }
}
```

![安全保障机制架构](/images/图30.svg)