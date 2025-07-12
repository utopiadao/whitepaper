# 8.1 Biến số cốt lõi và mô hình ổn định

## Định nghĩa biến số cốt lõi

### Biến số thanh khoản
**P(t)** = Tổng vốn của pool thanh khoản tại thời điểm t
**I(t)** = Tỷ lệ dòng vốn vào tại thời điểm t
**O(t)** = Tỷ lệ dòng vốn ra tại thời điểm t
**N(t)** = Số lượng người tham gia hoạt động tại thời điểm t

### Tham số chiều cộng hưởng
**Dᵢ** = Số tiền đầu tư của chiều thứ i (i=1,2,3,4)
**Tᵢ** = Chu kỳ cộng hưởng của chiều thứ i (1,7,15,30 ngày)
**Rᵢ** = Tỷ lệ khuếch đại cộng hưởng của chiều thứ i (0.5%,5%,13%,30%)

### Tham số cấu trúc mạng
**Cᵢⱼ** = Đóng góp của người tham gia i vào sự đồng thuận khu vực cho người tham gia j
**Wₖ** = Trọng số giá trị của nút thịnh vượng thứ k
**α** = Tỷ lệ phân bổ pool thịnh vượng (20%)

## Mô hình ổn định cơ bản của hệ thống

### Phương trình cân bằng thanh khoản

Tính ổn định cơ bản của hệ thống có thể được mô tả bằng phương trình cân bằng thanh khoản:

**dP(t)/dt = I(t) - O(t)**

Trong đó:

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (tỷ lệ dòng vào)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (tỷ lệ dòng ra)

## Điều kiện ổn định

### Điều kiện ổn định quan trọng
Điều kiện cần thiết để duy trì tính ổn định của hệ thống là:

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

Nghĩa là vốn của pool thanh khoản phải có thể chi trả tất cả các khoản thanh toán đến hạn trong 24 giờ tới.

### Điều kiện ổn định dài hạn

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### Phân tích ổn định dưới quy mô tham gia

Trong tình huống quy mô nhỏ, hệ thống thể hiện đặc điểm tăng trưởng theo cấp số nhân:

**N(t) = N₀ · e^(r·t)**

Trong đó tỷ lệ tăng trưởng chủ yếu được thúc đẩy bởi cơ chế đồng thuận khu vực:

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢ là hệ số mở rộng cho mỗi vùng, δ là tỷ lệ tự nhiên giảm sút.

**Phân tích ổn định: Ở quy mô nhỏ, hệ thống phụ thuộc cao vào sự tăng trưởng người dùng mới, với độ biến động cao.**

## Hệ thống quy mô trung bình

Hệ thống bước vào giai đoạn tăng trưởng hình chữ S, theo mô hình Logistic:

**dN/dt = rN(1 - N/K)**

Trong đó K là giới hạn trên của năng lực hệ thống, liên quan đến khả năng xử lý của mạng BSC.

### Đặc điểm ổn định:
- Tỷ lệ tăng trưởng dần chậm lại nhưng trở nên ổn định hơn
- Cơ chế khởi động lại Phoenix bắt đầu đóng vai trò điều tiết
- Cơ chế nút thịnh vượng cung cấp tính ổn định bổ sung

## Hệ thống quy mô lớn

Hệ thống bước vào trạng thái cân bằng động, nơi số lượng người tham gia dao động xung quanh điểm cân bằng:

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

Trong đó Neq là số lượng người tham gia cân bằng, γ là hệ số cản.

**Bảo đảm ổn định: Cơ chế khởi động lại Phoenix đảm bảo tính ổn định dài hạn của hệ thống ở quy mô lớn.**