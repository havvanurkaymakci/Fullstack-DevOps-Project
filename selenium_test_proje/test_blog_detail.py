from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("Blog detay butonu testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Ana sayfa yüklendi")

    time.sleep(2)

    detail_link = driver.find_element(By.CSS_SELECTOR, 'a[href="./blogDetails.html"]')
    print("Detay bağlantısı bulundu ✅")

    # Scroll işlemi ekle
    driver.execute_script("arguments[0].scrollIntoView(true);", detail_link)
    time.sleep(1)

    # Tıkla
    detail_link.click()
    print("Detay bağlantısına tıklandı")

    time.sleep(2)

    current_url = driver.current_url
    print("Gidilen URL:", current_url)
    assert "blogDetails.html" in current_url
    print("Blog detay sayfası başarıyla açıldı ✅")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
