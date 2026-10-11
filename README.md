# 🏎️ Node.js Çok Oyunculu Kulüp Araba Yarışı

Bu proje, oyuncuların akıllı telefonlarını birer oyun kolu (gamepad) olarak kullanarak bilgisayar ekranında yarıştığı yerel ağ tabanlı bir "Hyper-Casual" parti oyunudur. Node.js ve Socket.io ile geliştirilmiştir. Özellikle üniversite kulüp etkinlikleri ve fuar standları için tasarlanmıştır.

## 🚀 Özellikler
- **Kurulumsuz Mobil Kontrol:** Oyuncular uygulamaya ihtiyaç duymadan, ekrandaki QR kodu okutarak telefon tarayıcılarından (Safari/Chrome) anında bağlanır.
- **Sıfır Gecikme:** Yerel ağ (Hotspot) üzerinde çalıştığı için anında tepki verir.
- **Hile Korumalı Tur Sistemi:** Gizli kontrol noktaları (checkpoint) ile hile yapılması engellenir. 3 turu tamamlayan kazanır.
- **Otomatik Oturum Kapatma:** Yarış bittiğinde telefonlardaki kontroller kilitlenir ve stand yeni oyuncular için 5 saniye içinde otomatik sıfırlanır.

## 🛠️ Kurulum
Bu projeyi çalıştırmak için bilgisayarınızda [Node.js](https://nodejs.org/) yüklü olmalıdır.

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Terminali açın ve proje klasörüne gidin:
   ```bash
   cd proje_klasorunun_adi
   ```
3. Gerekli kütüphaneleri (Express ve Socket.io) yükleyin:
   ```bash
   npm install
   ```
4. Oyun motorunu (Sunucuyu) başlatın:
   ```bash
   node server.js
   ```

## 🎮 Oynanış (Stand Modu)
Bu oyun en iyi şekilde bilgisayarınızdan açtığınız **Mobil Etkin Nokta (Hotspot)** ile çalışır.
1. Windows Ayarlarından "Mobil Etkin Nokta" açın.
2. O ağın "Windows Defender Güvenlik Duvarı" kısıtlamalarını geçici olarak kapatın.
3. Terminalde `ipconfig` yazarak "IPv4" adresinizi (Örn: `192.168.137.1`) kopyalayın.
4. Oyunculara Wi-Fi üzerinden ağınıza bağlanmalarını söyleyin.
5. Bilgisayarınızın tarayıcısında `http://[SIZIN-IP-ADRESINIZ]:3000` adresine girin. Ekranda çıkan QR kodu okutan iki kişi hemen yarışa başlayabilir!