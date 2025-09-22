from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("ABOUT butonu testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Ana sayfa yüklendi")

    time.sleep(2)

    # ABOUT linkini bul ve tıkla (href="/#about")
    about_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/#about"]')
    print("ABOUT linki bulundu ✅")
    about_link.click()
    print("ABOUT linkine tıklandı")

    time.sleep(2)

    # URL'de #about geçti mi kontrol et
    current_url = driver.current_url
    print("Gidilen URL:", current_url)
    assert "#about" in current_url
    print("ABOUT bölümüne başarıyla kaydırıldı ✅")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
