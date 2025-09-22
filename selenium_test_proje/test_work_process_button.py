from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("Work Process videosu testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Ana sayfa yüklendi")

    time.sleep(2)

    # Video butonunu bul
    video_button = driver.find_element(By.CSS_SELECTOR, 'a[href*="youtube.com/watch"]')
    print("Video butonu bulundu ✅")

    # Butona tıkla (YouTube'a gider, yeni sekme açılıyorsa takip etmez)
    video_url = video_button.get_attribute("href")
    print("Video linki:", video_url)

    # Bağlantının doğru olduğunu kontrol et
    assert "youtube.com/watch" in video_url
    print("Video linki doğru ✅")

    # (İsteğe bağlı) Butona tıklama
    # video_button.click()
    # print("Videoya tıklandı (eğer yeni sekme açıldıysa Selenium takip etmez)")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
