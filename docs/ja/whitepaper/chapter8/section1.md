# 8.1 コア変数と安定性モデル

## コア変数の定義

### 流動性変数
**P(t)** = 時刻tにおける流動性プール総資金
**I(t)** = 時刻tにおける資金流入率
**O(t)** = 時刻tにおける資金流出率
**N(t)** = 時刻tにおけるアクティブ参加者数

### 共鳴次元パラメータ
**Dᵢ** = 第i次元の投資金額 (i=1,2,3,4)
**Tᵢ** = 第i次元の共鳴サイクル (1,7,15,30日)
**Rᵢ** = 第i次元の共鳴増幅率 (0.5%,5%,13%,30%)

### ネットワーク構造パラメータ
**Cᵢⱼ** = 参加者iが参加者jに対する地域コンセンサス貢献
**Wₖ** = 第k繁栄ノードの価値重み
**α** = 繁栄プール配分比率 (20%)

## システム安定性基礎モデル

### 流動性バランス方程式

システムの基本安定性は流動性バランス方程式で表現できます：

**dP(t)/dt = I(t) - O(t)**

ここで：

**I(t) = Σ[i=1 to 4] λᵢ(t) · Dᵢ · Nᵢ(t)** (流入率)
**O(t) = Σ[i=1 to 4] μᵢ(t) · Dᵢ · (1 + Rᵢ) · Nᵢ(t - Tᵢ)** (流出率)

## 安定性条件

### 臨界安定性条件
システム安定性を維持するために必要な条件は：

**P(t) >= Σ[i=1 to 4] Σ[s=t to t+24h] Oᵢ(s)**

即ち、流動性プール資金は今後24時間以内の全ての支払期限を カバーできなければなりません。

### 長期安定性条件

**lim[T->∞] (1/T) · ∫[0 to T] [I(t) - O(t)]dt >= 0**

### 参加規模下での安定性分析

小規模状況では、システムは指数成長特性を示します：

**N(t) = N₀ · e^(r·t)**

ここで成長率は主に地域コンセンサスメカニズムによって駆動されます：

**r = Σ[i=1 to 5] βᵢ · R_zone,i - δ**

βᵢは各地域の拡張係数、δは自然減衰率です。

**安定性分析：小規模では、システムは新規ユーザー成長に大きく依存し、高いボラティリティを持ちます。**

## 中規模システム

システムはS字型成長段階に入り、ロジスティックモデルに従います：

**dN/dt = rN(1 - N/K)**

ここでKはシステム容量上限で、BSCネットワーク処理能力に関連します。

### 安定性特徴：
- 成長率は徐々に減速するがより安定になります
- フェニックス再起動メカニズムが調整役割を開始します
- 繁栄ノードメカニズムが追加の安定性を提供します

## 大規模システム

システムは動的平衡状態に入り、参加者数が平衡点周りで振動します：

**N(t) = Neq + A · sin(ωt + φ) · e^(-γt)**

ここでNeqは平衡参加者数、γは減衰係数です。

**安定性保証：フェニックス再起動メカニズムが大規模でのシステム長期安定性を確保します。**