
# SCRWL - Street Style Brand Website

SCRWL 是一個由四位中原大學好友共同創立的街頭風格品牌網站專案。我們結合了「玩家視角」與「設計思維」，致力於推廣滑板文化與街頭美學。

## 專案簡介

本專案是一個完整的多頁面電商網站前端實作，展示了 SCRWL 品牌的產品線，包括專業滑板、潮流帽子與街頭服飾。網站設計採用強烈的街頭風格，運用粗黑框線、硬陰影與品牌橘色調，營造出獨特的視覺體驗。

### 核心理念
- **專業滑板**：經由社團老手實戰把關。
- **街頭服飾**：融合滑板人需求與現代穿搭美學。
- **團隊精神**：四位好友的創業夢想與友情結晶。

## 功能特色

- **響應式設計 (RWD)**：支援桌面與行動裝置瀏覽，確保最佳使用者體驗。
- **首頁輪播圖**：動態展示最新活動與主打商品。
- **商品分類瀏覽**：
  - 🛹 滑板 (Skateboard)
  - 🧢 帽子 (Hat)
  - 👕 衣服 (T-shirt)
  - ✨ 新品上市 (New Arrival)
- **購物車系統**：
  - 使用 LocalStorage 保存購物車內容。
  - 支援商品數量增減與移除。
  - 自動計算總金額。
- **我的最愛 (Wishlist) 功能**：
  - 支援商品加入與移除。
- **會員功能**：
  - 會員登入/註冊介面。
  - 會員資料介面。
- **關於我們**：
  - 品牌故事介紹。
  - **Meet The Team**：展示團隊成員分工與心得 (動態 Grid 排版)。
- **其他頁面**：
  - 常見問題 (Q&A)
  - 退換貨政策
  - 隱私權政策
  - 服務條款

## 使用技術

- **HTML**：語意化標籤結構。
- **CSS**：
  - Flexbox & Grid 佈局。
  - CSS Animation (輪播圖、文字跑馬燈)。
  - RWD 媒體查詢 (Media Queries)。
  - Google Fonts (Permanent Marker, Noto Sans TC)。
  - Font Awesome 圖示庫。
- **JavaScript**：
  - DOM 操作。
  - Event Handling。
  - LocalStorage 資料存取 (購物車與收藏功能)。

## 專案結構

```
HTML Final Project/
├── index.html          # 首頁
├── about us.html       # 關於我們 (含團隊介紹)
├── car.html            # 購物車頁面
├── goods.html          # 商品詳情頁範例
├── member.html         # 會員登入/註冊
├── love.html           # 我的最愛
├── new.html            # 新品列表
├── skateboard.html     # 滑板列表
├── hat.html            # 帽子列表
├── t-shirt.html        # 衣服列表
├── ...                 # 其他靜態資訊頁面 (qa, privacy, service, etc.)
├── CSS/                # 樣式表
│   ├── style.css       # 全域主要樣式
│   ├── goods.css       # 商品頁特定樣式
│   └── ...
├── JS/                 # JavaScript 腳本
│   ├── script.js       # 全域腳本 (輪播、跑馬燈)
│   ├── car.js          # 購物車邏輯
│   ├── love.js         # 收藏功能邏輯
│   └── ...
└── image/              # 圖片資源資料夾
```

##  如何執行

1.  確認您的電腦已安裝瀏覽器 (Chrome, Edge, Safari, Firefox 等)。
2.  下載或複製本專案資料夾。
3.  直接雙擊打開 `index.html` 檔案即可開始瀏覽。

##  團隊成員

- **11344201 陳筠靜**：視覺策畫 / 文案發想 / 商品圖片查找 / 企劃 <23%>  
- **11344203 黃美碩**：網頁設計 / 前端開發 / css & javascript特效 / 企劃 <27%> 
- **11344205 馮玟霓**：網頁設計 / 前端開發 / css & javascript特效 / 企劃 <27%> 
- **11344206 黃綉雯**：視覺策畫 / 文案發想 / 宣傳照設計 / 企劃 <23%> 

*(詳細心得與介紹請見網站「關於我們」頁面)*

---
© 2026 SCRWL. All Rights Reserved.
