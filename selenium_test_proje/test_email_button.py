from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("E-posta bağlantısı testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Sayfa yüklendi")

    time.sleep(2)

    # E-posta bağlantısını açıkça tanımla (hem href hem class varsa daha sağlam olur)
    email_link = driver.find_element(By.CSS_SELECTOR, 'a[href="mailto:davidmatias3@example.com"]')
    print("E-posta bağlantısı bulundu ✅")

    # href değeri doğru mu?
    href_value = email_link.get_attribute("href")
    print("Href değeri:", href_value)
    assert href_value == "mailto:davidmatias3@example.com"
    print("Href doğru ✅")
    
    print("E-posta bağlantısı testi başarıyla tamamlandı 🎉")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
