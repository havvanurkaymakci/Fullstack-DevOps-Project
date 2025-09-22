from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("Giriş yapmadan Contact sayfasına erişim testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Ana sayfa yüklendi")

    time.sleep(2)

    # Contact linkine tıkla
    contact_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/Contact"]')
    contact_link.click()
    print("Contact linkine tıklandı")

    time.sleep(2)

    # Gidilen URL'yi yazdır
    current_url = driver.current_url
    print("Gidilen URL:", current_url)

    # Beklenen: Giriş yapmadan /Contact'e gidilemez → yönlendirme yapılır
    assert "/login" in current_url.lower()
    print("Erişim engellendi, login sayfasına yönlendirildi ✅")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
