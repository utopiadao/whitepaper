# 7.2 사전계산 엔진과 보안 메커니즘

## 사전계산 엔진: 효율성과 투명성의 완벽한 결합

### 사전계산 모델의 혁신적 가치

유토피아는 모든 주문의 반환 금액과 수익이 계약 배포 시점에 미리 결정되는 독특한 사전계산 모델을 채택했습니다.

![预计算模型架构](/images/图29.svg)

### 사전계산의 기술적 장점

- **가스 효율성 최적화**: 주문 처리 시 복잡한 계산이 불필요하며, 단순한 테이블 조회 작업만 필요
- **결과 예측 가능성**: 사용자는 주문 생성 시 정확한 반환 금액을 알 수 있음
- **시스템 안정성**: 계산 오류와 정수 오버플로우 위험 제거
- **감사 친화성**: 모든 계산 결과는 사전 공개된 상수

## 다중 보안 보호 메커니즘

### 심층 방어 보안 아키텍처

유토피아는 군용 등급의 심층 방어 보안 아키텍처를 채택했습니다:

**첫 번째 층: 입력 검증 보안**
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

**두 번째 층: 비즈니스 로직 보안**
```solidity
modifier oneOrderPerUser() {
    require(!hasActiveOrder[msg.sender], "User already has active order");
    _;
}
// ReentrancyGuard from OpenZeppelin
// modifier nonReentrant() { ... }
```

**세 번째 층: 자금 보안 보호**
```solidity
using SafeERC20 for IERC20;
// token.safeTransfer(to, amount);
```

![资金安全保护机制](/images/图25.svg)

## 보안 보장 메커니즘

```solidity
/**
 * @dev 다중 보안 보장
 */
contract UtopiaCore is ReentrancyGuard {
    
    // 재진입 공격 보호
    modifier nonReentrant() {
        // OpenZeppelin ReentrancyGuard 구현
        _;
    }
    
    // 입력 검증
    modifier validDimension(uint8 dimension) {
        require(dimension < 4, "Invalid dimension");
        _;
    }
    
    // 사용자 상태 확인
    modifier oneOrderPerUser() {
        require(!hasActiveOrder[msg.sender], "User already has active order");
        _;
    }
    
    // 시스템 상태 확인
    modifier systemUnlocked() {
        require(block.timestamp >= systemUnlockTime, "System locked");
        _;
    }
}
```

![安全保障机制架构](/images/图30.svg)