from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

# Test edilecek ikon class'ları
social_icons = {
    "Facebook": "bi-facebook",
    "Twitter": "bi-twitter",
    "YouTube": "bi-youtube",
    "LinkedIn": "bi-linkedin",
    "Instagram": "bi-instagram"
}

print("🔗 Sosyal medya ikon testleri başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Sayfa yüklendi")

    time.sleep(2)

    for name, icon_class in social_icons.items():
        print(f"\n➡️ {name} ikonu test ediliyor...")

        try:
            icon = driver.find_element(By.CSS_SELECTOR, f'i.{icon_class}')
            print(f"{name} ikonu bulundu ✅")

            link = icon.find_element(By.XPATH, "..")
            href = link.get_attribute("href")
            print(f"{name} bağlantı href: {href}")

            if not href or href.strip() == "#" or href.strip() == "":
                print(f"⚠️ {name} bağlantısı boş veya '#' — henüz link atanmamış")
            else:
                print(f"✅ {name} geçerli bir linke yönlendiriyor")

        except Exception as e:
            print(f"❌ {name} ikonu bulunamadı veya erişilemedi")
            traceback.print_exc()

    driver.quit()

except Exception as e:
    print("Genel bir hata oluştu ❌:")
    traceback.print_exc()
