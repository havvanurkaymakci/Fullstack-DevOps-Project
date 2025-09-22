from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("TESTIMONIAL linki testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Sayfa yüklendi")

    time.sleep(2)

    # Linki href'e göre seçelim
    testimonial_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/#testimonial"]')
    print("TESTIMONIAL linki bulundu ✅")

    # Linke tıkla
    testimonial_link.click()
    print("Linke tıklandı")

    time.sleep(2)

    # URL'de #testimonial olup olmadığını kontrol et
    current_url = driver.current_url
    print("Gidilen URL:", current_url)
    assert "#testimonial" in current_url.lower()
    print("Sayfa testimonial bölümüne başarıyla kaydı ✅")

    # (Opsiyonel) DOM'da testimonial bölümü var mı kontrol et
    section = driver.find_element(By.ID, "testimonial")
    assert section.is_displayed()
    print("TESTIMONIAL bölümü DOM'da görünüyor ✅")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
