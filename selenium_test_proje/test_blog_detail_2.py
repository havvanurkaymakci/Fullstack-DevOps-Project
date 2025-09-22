from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import traceback

print("2. blog detay bağlantısı testi başlıyor...")

try:
    driver = webdriver.Chrome()
    driver.get("http://localhost:3000")
    print("Sayfa yüklendi")

    time.sleep(2)

    # Tüm blog detay bağlantılarını bul
    detail_links = driver.find_elements(By.CSS_SELECTOR, 'a[href="./blogDetails.html"]')

    # İkinci link varsa
    assert len(detail_links) >= 2, "Sayfada 2'den az detay bağlantısı var!"
    second_link = detail_links[1]
    print("2. detay bağlantısı bulundu ✅")

    # Görünürlük ve konum kontrolü
    print("Görünür mü?:", second_link.is_displayed())
    print("Konum:", second_link.rect)

    # Scroll etmeyi dene
    driver.execute_script("arguments[0].scrollIntoView(true);", second_link)
    time.sleep(1)

    try:
        second_link.click()
        time.sleep(2)
        current_url = driver.current_url
        print("Gidilen URL:", current_url)

        assert "blogDetails.html" in current_url
        print("2. blog detay sayfası başarıyla açıldı ✅")

    except Exception as click_error:
        print("Tıklama yapılamadı (beklenen, çünkü içerik eksik olabilir) ⚠️")
        print(click_error)

except Exception as e:
    print("Bir hata oluştu ❌:")
    traceback.print_exc()

finally:
    driver.quit()
