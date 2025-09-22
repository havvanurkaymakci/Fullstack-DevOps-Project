from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("Responsive görünüm testleri başlıyor...")

# Test edilecek cihaz boyutları
viewports = {
    "desktop": (1920, 1080),
    "tablet": (768, 1024),
    "mobile": (375, 812)
}

try:
    for device, size in viewports.items():
        print(f"\n💻 Test ediliyor: {device} ({size[0]}x{size[1]})")

        # Tarayıcıyı başlat
        driver = webdriver.Chrome()
        driver.set_window_size(size[0], size[1])
        driver.get("http://localhost:3000")

        time.sleep(3)

        # Sayfa içinde "Creative Visual" metni var mı?
        assert "creative visual" in driver.page_source.lower()
        print(f"{device.capitalize()} görünüm başarılı ✅")

        driver.quit()

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()
