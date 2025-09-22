from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("BLOG butonu testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Ana sayfa yüklendi")

    time.sleep(2)

    # BLOG linkini bul ve tıkla
    blog_link = driver.find_element(By.CSS_SELECTOR, 'a[href="/#blog"]')
    print("BLOG linki bulundu ✅")
    blog_link.click()
    print("BLOG linkine tıklandı")

    time.sleep(2)

    # URL içinde #blog var mı?
    current_url = driver.current_url
    print("Gidilen URL:", current_url)
    assert "#blog" in current_url
    print("BLOG bölümüne başarıyla kaydırıldı ✅")

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
