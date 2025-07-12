# 7.2 預計算引擎與安全機制

## 預計算引擎：效率與透明的完美結合

### 預計算模型的創新價值

烏托邦採用了獨特的預計算模型，所有訂單的返還金額和收益都在合約部署時預先確定。

![预计算模型架构](/images/图29.svg)

### 預計算的技術優勢

- **Gas效率最優化**：訂單處理時無需複雜計算，僅需簡單查表操作
- **結果可預期性**：用戶在創建訂單時就能確切知道返還金額
- **系統穩定性**：消除計算錯誤和整數溢出風險
- **審計友好性**：所有計算結果都是預先公開的常量

## 多重安全保障機制

### 縱深防禦安全架構

烏托邦採用了軍用級別的縱深防禦安全架構：

**第一層：輸入驗證安全**
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

**第二層：業務邏輯安全**
```solidity
modifier oneOrderPerUser() {
    require(!hasActiveOrder[msg.sender], "User already has active order");
    _;
}
// ReentrancyGuard from OpenZeppelin
// modifier nonReentrant() { ... }
```

**第三層：資金安全保護**
```solidity
using SafeERC20 for IERC20;
// token.safeTransfer(to, amount);
```

![资金安全保护机制](/images/图25.svg)

## 安全保障機制

```solidity
/**
 * @dev 多重安全保障
 */
contract UtopiaCore is ReentrancyGuard {
    
    // 重入攻擊防護
    modifier nonReentrant() {
        // OpenZeppelin ReentrancyGuard 實現
        _;
    }
    
    // 輸入驗證
    modifier validDimension(uint8 dimension) {
        require(dimension < 4, "Invalid dimension");
        _;
    }
    
    // 用戶狀態檢查
    modifier oneOrderPerUser() {
        require(!hasActiveOrder[msg.sender], "User already has active order");
        _;
    }
    
    // 系統狀態檢查
    modifier systemUnlocked() {
        require(block.timestamp >= systemUnlockTime, "System locked");
        _;
    }
}
```

![安全保障机制架构](/images/图30.svg)