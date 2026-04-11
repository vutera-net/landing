# 📘 VUTERA Orbit - PRODUCT REQUIREMENT DOCUMENT (Merged V2)

> Tài liệu này được nhất quán sau khi hợp nhất mục tiêu phát triển sản phẩm (v2-orbit) và phong cách định vị nguyên bản của VUTERA (Orbit README).

---

## 🚀 1. Product Overview & Vision

**Product Name:** VUTERA Orbit
**Domain:** `/orbit`

**Định vị (Positioning):**  
**Self-Development OS qua EdTech + AI** (Hệ điều hành phát triển bản thân).
Orbit là nền tảng giúp người dùng phát triển **Outer Growth** (Sự phát triển bên ngoài) thông qua:
* Học tiếng Anh với AI
* Định hướng nghề nghiệp (Career Path)
* Xây dựng kỹ năng (Skill Builder)

**Product Vision:**  
> “Giúp mỗi người xây dựng quỹ đạo phát triển của riêng mình”

---

## 🎯 2. Target Users & Core Value

### Target Users
* **Primary:** 18–35 tuổi.
* **Nhu cầu:** Cải thiện tiếng Anh thực chiến, tìm định hướng hoặc chuyển đổi nghề nghiệp / tăng thu nhập, cần xây dựng lộ trình bản thân một cách rõ ràng.

### Core Value Proposition
* Thay vì học lan man, cung cấp lộ trình (Orbit) đi đúng hướng.
* Tối ưu và cá nhân hóa lộ trình bằng AI dựa trên nhu cầu của user.

### Success Metrics
* Conversion rate từ Hero Section (Click qua Onboarding / Chọn mục tiêu học).
* Tỉ lệ tương tác (Time on site / Thử nghiệm module Demo).

---

## 🎨 3. UX/UI GUIDELINES (Theo tiêu chuẩn Vutera Gốc)

Dù mang định vị Tech / Education, Orbit **BẮT BUỘC giữ nguyên bản sắc thị giác cốt lõi** để đảm bảo tính đồng nhất của toàn hệ sinh thái VUTERA:

* **Theme:** **Dark mode (Space theme)** làm nền tảng chủ đạo. 
* **Màu sắc & Hiệu ứng:** Sử dụng tone màu vũ trụ (Tím, Xanh dương thẫm, Gradient tinh tế) kết hợp với các hiệu ứng **Glow effect** ánh sáng mạnh mẽ. Không sử dụng thiết kế nền sáng bình thường của EdTech giáo dục đại trà.
* **Typography:** Headline hiển thị lớn, gọn gàng, tạo impact bao trùm không gian.
* **Interaction:** Sử dụng Framer Motion tạo cảm giác mượt mà (smooth), bay bổng mang âm hưởng thiên hà nhưng phải đảm bảo không gây lag hay có quá nhiều hiệu ứng thừa.

---

## 🧩 4. FEATURE REQUIREMENTS & UI COPY

### 4.1. HERO SECTION
* **Mục tiêu:** User hiểu ngay giá trị sản phẩm trong 3s.
* **Headline:** `Xây dựng Quỹ Đạo Phát Triển Của Bạn`
* **Subheadline:** `Học tiếng Anh, định hướng nghề nghiệp và phát triển bản thân trong một hệ thống duy nhất – được cá nhân hóa bởi AI`
* **CTA Button:** `Bắt đầu miễn phí`
* **Quick Choices:** 
  ```text
  Tôi muốn:
  [ Học tiếng Anh ] | [ Định hướng nghề nghiệp ] | [ Phát triển bản thân ]
  ```

### 4.2. PROBLEM SECTION
* **Headline:** `Bạn không thiếu nỗ lực. Bạn đang thiếu một quỹ đạo đúng.`
* **Content:** Học rất nhiều nhưng không tiến bộ rõ ràng. Không biết nên chọn nghề gì phù hợp. Vấn đề không phải là bạn chưa đủ cố gắng, mà là bạn chưa có một hệ thống dẫn đường.

### 4.3. THE ORBIT CONCEPT (Animation & Visualization)
* **Visual Experience:** Một đồ họa quỹ đạo sống động ở trung tâm (các vòng xoay có animation nhẹ kết hợp không gian vũ trụ dark theme).
* **Headline:** `Mỗi người đều có một quỹ đạo phát triển riêng`
* **Thành phần quỹ đạo hiển thị:** 
  1. English (Ngoại ngữ AI)
  2. Career (Định hướng sự nghiệp)
  3. Skills (Kỹ năng phát triển)

### 4.4. PRODUCT MODULES
* **🎧 English AI:** Học tiếng Anh với AI (Luyện nghe, nói và phản xạ).
* **🧭 Career Path:** Định hướng nghề nghiệp (Khám phá hướng đi và xây lộ trình).
* **📚 Skill Builder:** Phát triển kỹ năng (Học từng bước nhỏ đúng hướng).

### 4.5. HOW IT WORKS
* Trình bày 3 bước tinh gọn: 
  1. Chọn mục tiêu 
  2. Orbit (AI) tạo lộ trình 
  3. Học mỗi ngày.

### 4.6. DEMO / EXPERIENCE LITE
* **Tính năng:** Block tương tác giúp User thử chức năng AI ngay trên Landing. Vd: Form giả lập Chat Voice Tiếng Anh hoặc Preview Lộ trình Career.
* Gắn Data Social proof mồi: `Hàng ngàn người đang bắt đầu lại – đúng cách`.

### 4.7. FINAL CTA
* **Headline:** `Bắt đầu quỹ đạo của bạn hôm nay`
* **CTA Button:** Gọi lại action funnel về luồng Onboarding.

---

## 🔄 5. USER FLOW CHI TIẾT

```text
User vào /orbit
   ↓
Tương tác nội dung & Chọn mong muốn 
(VD: Focus vào Tiếng Anh hoặc Career)
   ↓
Click CTA (Thực hiện Action)
   ↓
Hệ thống Redirect bằng param sang:
   /orbit/onboarding (hoặc /orbit/app)
   ↓
AI đánh giá dữ liệu và Generate Plan phù hợp cho User
```

---

## ⚙️ 6. TECHNICAL REQUIREMENTS

* **Frontend MVP:** Next.js (App Router), TailwindCSS, Framer Motion (Xử lý các visual vòng lặp quỹ đạo).
* **Backend logic (V1):** Landing page ở dạng tĩnh nâng cao, lưu trạng thái selection của người dùng truyền dưới dạng query param hoặc context sang thẳng trang sinh Lộ trình AI. Không đòi cơ sở dữ liệu riêng tại trang giới thiệu này.

---

## ⚠️ 7. NON-GOALS (Quy Tắc Tuyệt Đối)

**Phạm vi KHÔNG LÀM đối với Orbit Landing:**
* ❌ Tính năng nhập `Ngày Sinh` (DOB). Không lấy insight / concept Tử Vi, Bát tự, Tâm linh (Chức năng này độc quyền cho App nhánh `Harmony`).
* ❌ Giao diện Light-mode sáng chói, tông màu thuần trắng lệch lạc khỏi phong cách Universe chung của Vutera.
* ❌ Ép buộc Login / Sign-up bằng Email rườm rà tại trang chủ (Wall-gate).
* ❌ Dashboard hiển thị quá nhiều data kĩ thuật phức tạp.
