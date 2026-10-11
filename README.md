# 樂燃教育中心網站預覽

這個 repository 只用作六頁靜態網站審閱，沒有改動現有內容或設計。

## 部署

1. 將這個資料夾的內容放進專用 GitHub repository 的 main 分支，保留 .github/workflows/pages.yml。
2. 到 Settings → Pages → Build and deployment，將 Source 設為 GitHub Actions。
3. 到 Actions → Deploy website review to GitHub Pages → Run workflow。
4. 等候 build 和 deploy 成功，使用 github-pages deployment 顯示的 HTTPS 網址。

老闆只需網站網址，毋須登入 GitHub。GitHub Pages 的專案網址一般包含 repository 名稱；頁面採用相對路徑，可在該子目錄載入。

## 分享範圍

- site/ 只包含六頁 HTML、CSS、互動 JavaScript 和頁面使用的 11 張圖片。
- 原始 PDF、原始 JPEG、Sites 專案 metadata、工具及憑證沒有放入這個 repository。
- 網頁保留 noindex,nofollow 作預覽。這是搜尋收錄指令，並非密碼或私隱保護。
- GitHub Pages 網站可被持有網址的人查看。免費帳戶通常需要 public repository；public repository 的檔案及提交紀錄亦公開。
- 如需限制只讓老闆查看，這份公開 Pages 部署並不提供登入限制。

## Actions 權限

只使用 GitHub 官方 Actions，版本固定到完整 commit SHA。網站打包與部署權限分開；只有 deploy job 可以寫入 Pages 及使用 OIDC。沒有個人 access token、外部服務金鑰或 pull_request_target。

日後更新 site/ 後推送 main，workflow 會部署同一個預覽網址。需要停止分享時，到 Settings → Pages 取消發佈。
