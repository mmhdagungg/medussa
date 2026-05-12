# Panduan Deploy ke GitHub Pages

## Langkah-langkah Deploy:

### 1. Push ke GitHub
Jika belum punya repository di GitHub:
```bash
# Inisialisasi git (jika belum)
git init
git add .
git commit -m "Initial commit"

# Buat repository baru di GitHub, lalu:
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

### 2. Aktifkan GitHub Pages
1. Buka repository Anda di GitHub
2. Klik **Settings** (tab di atas)
3. Klik **Pages** di menu sebelah kiri
4. Di bagian **Source**, pilih **GitHub Actions**
5. Selesai! GitHub Actions akan otomatis deploy setiap kali Anda push

### 3. Akses Website Anda
Setelah deploy selesai (tunggu 2-5 menit), website Anda akan tersedia di:
```
https://USERNAME.github.io/REPO-NAME/
```

**PENTING:** Jika website Anda tidak muncul dengan benar (CSS/gambar tidak muncul), update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/REPO-NAME/', // Ganti REPO-NAME dengan nama repository Anda
})
```

Lalu commit dan push lagi:
```bash
git add vite.config.ts
git commit -m "Fix base path for GitHub Pages"
git push
```

## Menggunakan Custom Domain (Opsional)

### Jika Anda sudah beli domain:

1. **Di GitHub:**
   - Buka Settings > Pages
   - Di bagian **Custom domain**, masukkan domain Anda (contoh: `www.domainanda.com`)
   - Klik **Save**

2. **Di Provider Domain Anda (Niagahoster, Cloudflare, dll):**
   
   **Untuk subdomain (www.domainanda.com):**
   - Tambah CNAME record:
     - Name/Host: `www`
     - Value/Target: `USERNAME.github.io`
   
   **Untuk root domain (domainanda.com):**
   - Tambah A records (4 record ini):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Tambah CNAME record:
     - Name/Host: `www`
     - Value/Target: `USERNAME.github.io`

3. **Tunggu propagasi DNS** (bisa 5 menit - 48 jam, biasanya 1-2 jam)

4. **Aktifkan HTTPS:**
   - Kembali ke Settings > Pages
   - Centang **Enforce HTTPS**

## Troubleshooting

### Website tidak muncul / 404
- Pastikan branch yang di-deploy adalah `main` (atau `master`)
- Cek di tab **Actions** apakah build berhasil (harus ada centang hijau)
- Pastikan `base` di `vite.config.ts` sesuai dengan nama repository

### CSS/Gambar tidak muncul
- Update `base` di `vite.config.ts` dengan nama repository Anda
- Commit dan push ulang

### Custom domain tidak berfungsi
- Tunggu propagasi DNS (bisa sampai 48 jam)
- Cek DNS dengan tool online: https://dnschecker.org
- Pastikan CNAME/A records sudah benar

## Update Website
Setiap kali Anda ingin update website:
```bash
git add .
git commit -m "Update website"
git push
```

GitHub Actions akan otomatis build dan deploy!

## Monitoring Deploy
- Lihat progress deploy di tab **Actions** di repository GitHub Anda
- Jika ada error, klik pada workflow yang gagal untuk lihat detailnya
