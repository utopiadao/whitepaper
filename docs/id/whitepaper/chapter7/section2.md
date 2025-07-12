# 7.2 Mesin Pra-komputasi dan Mekanisme Keamanan

## Mesin Pra-komputasi: Kombinasi Sempurna Efisiensi dan Transparansi

### Nilai Inovatif Model Pra-komputasi

Utopia telah mengadopsi model pra-komputasi yang unik di mana semua jumlah pengembalian pesanan dan hasil ditentukan sebelumnya saat kontrak dideploy.

![预计算模型架构](/images/图29.svg)

### Keunggulan Teknis Pra-komputasi

- **Optimisasi Efisiensi Gas**: Pemrosesan pesanan tidak memerlukan perhitungan kompleks, hanya operasi pencarian tabel sederhana
- **Prediktabilitas Hasil**: Pengguna dapat mengetahui jumlah pengembalian yang tepat saat membuat pesanan
- **Stabilitas Sistem**: Menghilangkan kesalahan perhitungan dan risiko overflow integer
- **Ramah Audit**: Semua hasil perhitungan adalah konstanta yang telah diungkapkan sebelumnya

## Mekanisme Perlindungan Keamanan Berlapis

### Arsitektur Keamanan Pertahanan Berlapis

Utopia telah mengadopsi arsitektur keamanan pertahanan berlapis tingkat militer:

**Lapisan Pertama: Keamanan Validasi Input**
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

**Lapisan Kedua: Keamanan Logika Bisnis**
```solidity
modifier oneOrderPerUser() {
    require(!hasActiveOrder[msg.sender], "User already has active order");
    _;
}
// ReentrancyGuard from OpenZeppelin
// modifier nonReentrant() { ... }
```

**Lapisan Ketiga: Perlindungan Keamanan Dana**
```solidity
using SafeERC20 for IERC20;
// token.safeTransfer(to, amount);
```

![资金安全保护机制](/images/图25.svg)

## Mekanisme Jaminan Keamanan

```solidity
/**
 * @dev Jaminan keamanan berlapis
 */
contract UtopiaCore is ReentrancyGuard {
    
    // Perlindungan serangan reentrancy
    modifier nonReentrant() {
        // Implementasi OpenZeppelin ReentrancyGuard
        _;
    }
    
    // Validasi input
    modifier validDimension(uint8 dimension) {
        require(dimension < 4, "Invalid dimension");
        _;
    }
    
    // Pemeriksaan status pengguna
    modifier oneOrderPerUser() {
        require(!hasActiveOrder[msg.sender], "User already has active order");
        _;
    }
    
    // Pemeriksaan status sistem
    modifier systemUnlocked() {
        require(block.timestamp >= systemUnlockTime, "System locked");
        _;
    }
}
```

![安全保障机制架构](/images/图30.svg)