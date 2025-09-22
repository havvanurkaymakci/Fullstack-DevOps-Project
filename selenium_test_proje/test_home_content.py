from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("HOME butonu testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Sayfa yüklendi")

    time.sleep(2)

    # HOME butonunu bul
    home_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/"]')
    print("HOME linki bulundu ✅")

    # HOME'a tıkla
    home_link.click()
    print("HOME linkine tıklandı")

    time.sleep(2)

    # URL kontrolü: ana sayfaya yönlenmiş mi
    current_url = driver.current_url
    print("Gidilen URL:", current_url)
    assert current_url.endswith("/") or current_url.endswith("/#")
    print("Ana sayfaya başarıyla yönlendirildi ✅")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
