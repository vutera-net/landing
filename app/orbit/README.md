# 📘 1. PRODUCT REQUIREMENT DOCUMENT (PRD)

## 1.1. Product Name

**VUTERA Orbit**

---

## 1.2. Product Overview

**Orbit** là landing page trung tâm của hệ sinh thái VUTERA.

Mục tiêu:

- Là entry point cho user mới
- Kết nối các sản phẩm:
  - TuVi (SEO traffic)
  - AnMenh (user profile)
  - Harmony (content/triết lý)

- Tạo trải nghiệm “cá nhân hóa ngay lập tức” chỉ với ngày sinh

---

## 1.3. Product Vision

> “Giúp mỗi người hiểu quỹ đạo cuộc đời của mình”

Orbit không chỉ là landing page, mà là:

- một trải nghiệm
- một narrative
- một hệ thống dẫn dắt user

---

## 1.4. Target Users

### Primary

- Người 20–40 tuổi
- Quan tâm:
  - tử vi
  - bản thân
  - định hướng cuộc sống

### Secondary

- Người tò mò / traffic từ SEO
- Người dùng quay lại

---

## 1.5. Core Value Proposition

- Không cần đăng ký
- Nhập ngày sinh → có insight ngay
- Trải nghiệm mượt, nhanh, đẹp

---

## 1.6. Success Metrics

- Conversion rate (visit → nhập ngày sinh)
- CTR sang TuVi / AnMenh
- Time on page
- Bounce rate

---

# 🧩 2. FEATURE REQUIREMENTS

---

## 2.1. Hero Section

### Mục tiêu

- Hiểu ngay trong 3 giây
- Thu thập ngày sinh

### Components

- Headline
- Subheadline
- Input ngày sinh
- CTA button

### Behavior

- Nhập DOB → click CTA → redirect

---

## 2.2. Orbit Visualization Section

### Mục tiêu

- Truyền tải concept “quỹ đạo cuộc đời”

### Components

- Vòng tròn (orbit)
- Các điểm:
  - Tài chính
  - Sự nghiệp
  - Tình cảm
  - Sức khỏe

### Behavior

- Có animation nhẹ (optional)
- Không cần interactive phức tạp (v1)

---

## 2.3. Product Stack Section

### Mục tiêu

- Giới thiệu hệ sinh thái

### Items

- TuVi
- AnMenh
- Harmony

### Mỗi item gồm:

- Title
- Description
- CTA

---

## 2.4. Personalization Flow

### Mục tiêu

- Tạo cảm giác “AI hiểu bạn”

### Input

- Ngày sinh

### Output (v1 – fake hoặc rule-based)

- Mệnh
- 1–2 câu insight

---

## 2.5. Trust / Philosophy Section

### Nội dung

- Không mê tín
- Là hệ thống định hướng

---

## 2.6. Final CTA

- “Bắt đầu hành trình”
- Redirect giống hero

---

# 🔄 3. USER FLOW

```text
User vào /orbit
   ↓
Nhập ngày sinh
   ↓
Click CTA
   ↓
Redirect:
   /tuvi?dob=YYYY-MM-DD
   ↓
(Optional)
→ gợi ý tạo account ở AnMenh
```

---

# ⚙️ 4. TECHNICAL REQUIREMENTS

## 4.1. Frontend

- Next.js (App Router)
- TailwindCSS
- Framer Motion (animation nhẹ)

---

## 4.2. Backend

👉 V1:

- KHÔNG cần backend riêng

👉 Chỉ cần:

- xử lý query param (dob)

---

## 4.3. Data

- Không cần DB cho Orbit
- Data nằm ở TuVi / AnMenh

---

## 4.4. SEO

- Meta title / description
- Open Graph
- Schema (optional)

---

# 🧱 5. IMPLEMENTATION PLAN

---

## Phase 1 – MVP (2–3 ngày)

### Day 1 – Layout + Hero

- Setup route `/orbit`
- Build Hero:
  - input DOB
  - CTA

- Basic styling

---

### Day 2 – Sections

- Orbit visualization (static + animation nhẹ)
- Product stack
- Philosophy section

---

### Day 3 – Flow + polish

- Redirect logic:

```ts
router.push(`/tuvi?dob=${dob}`);
```

- Responsive
- Performance optimize

---

## Phase 2 – Enhancement

- Thêm preview insight (fake AI)
- Thêm animation đẹp hơn
- A/B test CTA

---

## Phase 3 – Advanced

- Connect AnMenh API
- Save profile
- AI-generated insight

---

# 🎨 6. UI/UX GUIDELINES

## Style

- Dark mode (space theme)
- Gradient nhẹ
- Glow effect

---

## Typography

- Headline: lớn, đơn giản
- Nội dung: dễ đọc

---

## Interaction

- Smooth
- Không lag
- Không quá nhiều hiệu ứng

---

# ⚠️ 7. NON-GOALS (rất quan trọng)

KHÔNG làm:

- ❌ Login system
- ❌ Dashboard
- ❌ Tính toán tử vi phức tạp tại đây
- ❌ Over-engineering

---

# 🔥 8. KEY STRATEGIC NOTE (QUAN TRỌNG NHẤT)

Orbit không phải là feature.

Nó là:

> **Funnel + Story + Identity của VUTERA**

Nếu build đúng:

- tăng conversion toàn hệ
- tạo brand mạnh

Nếu build sai:

- chỉ là landing page vô nghĩa
