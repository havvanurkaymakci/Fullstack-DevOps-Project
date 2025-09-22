from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("Konum (Location) linki testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Sayfa yüklendi")

    time.sleep(2)

    # Location bağlantısını href değerine göre bul
    location_link = driver.find_element(By.CSS_SELECTOR, 'a[href="https://maps.google.com/?q=Victoria+Street+London"]')
    print("Konum bağlantısı bulundu ✅")

    # href kontrolü
    href_value = location_link.get_attribute("href")
    print("Href:", href_value)
    assert "maps.google.com" in href_value
    print("Href doğru ✅")



    print("Konum bağlantısı testi başarıyla tamamlandı 🎉")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
