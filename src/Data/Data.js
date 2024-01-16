const product = [
    { id: 1, name: 'Bahçe Eldiveni', description: 'Rahat bahçe eldivenleri', category: 'Bahçe', price: 10, img: '/ItemsPhoto/bahce/eldiven.png' },
    { id: 2, name: 'Bahçe Gübresi', description: 'Premium bahçe gübresi', category: 'Bahçe', price: 20, img: '/ItemsPhoto/bahce/gubre.png' },
    
    { id: 4, name: 'Bahçe Seti', description: 'Tam donanımlı bahçe seti', category: 'Bahçe', price: 20, img: '/ItemsPhoto/bahce/bahceset.png' },
    { id: 5, name: 'Bahçe Mobilya Seti', description: 'Şık bahçe mobilya seti', category: 'Bahçe', price: 20, img: '/ItemsPhoto/bahce/bahcemobilya.png' },
    { id: 6, name: 'Fırça Seti', description: 'Resim yapmak için fırça seti', category: 'Çizim', price: 20, img: '/ItemsPhoto/cizim/fircaseti.png' },
    { id: 7, name: 'Kalem Seti', description: 'Çizim için kalem seti', category: 'Çizim', price: 20, img: '/ItemsPhoto/cizim/kalemset.png' },
    { id: 8, name: 'Palet', description: 'Sanat için palet', category: 'Çizim', price: 20, img: '/ItemsPhoto/cizim/palet.png' },
    { id: 9, name: 'Sovalye Figürü', description: 'Metal sovalye figürü', category: 'Çizim', price: 20, img: '/ItemsPhoto/cizim/sovalye.png' },
    { id: 10, name: 'Tuval', description: 'Sanat için tuval', category: 'Çizim', price: 20, img: '/ItemsPhoto/cizim/tuval.png' },
    { id: 11, name: 'Dans Aynası', description: 'Dans stüdyosu için ayna', category: 'Dans', price: 20, img: '/ItemsPhoto/dans/ayna.png' },
    { id: 12, name: 'Dans Ayakkabısı', description: 'Rahat dans ayakkabısı', category: 'Dans', price: 20, img: '/ItemsPhoto/dans/dayakkabi.png' },
    { id: 13, name: 'Dans Kıyafeti', description: 'Şık dans kıyafeti', category: 'Dans', price: 20, img: '/ItemsPhoto/dans/kiyafet.png' },
    { id: 14, name: 'Fitness Ayakkabısı', description: 'Konforlu fitness ayakkabısı', category: 'Fitness', price: 20, img: '/ItemsPhoto/Fitness/ayakkabi.png' },
    { id: 15, name: 'Fitness Bilekliği', description: 'Fitness bilekliği', category: 'Fitness', price: 20, img: '/ItemsPhoto/Fitness/bileklik.png' },
    { id: 16, name: 'Fitness Direnç Bandı', description: 'Fitness direnç bandı', category: 'Fitness', price: 20, img: '/ItemsPhoto/Fitness/direncbandi.png' },
    { id: 17, name: 'Fitness Dumbell Seti', description: 'Fitness dumbell seti', category: 'Fitness', price: 20, img: '/ItemsPhoto/Fitness/dumbellset.png' },
   
    { id: 19, name: 'Fotoğraf Hafıza Kartı', description: 'Yüksek kapasiteli fotoğraf hafıza kartı', category: 'Fotoğrafçılık', price: 20, img: '/ItemsPhoto/fotoculuk/hafiza.png' },
    { id: 20, name: 'Fotoğraf Makinesi', description: 'Profesyonel fotoğraf makinesi', category: 'Fotoğrafçılık', price: 20, img: '/ItemsPhoto/fotoculuk/kamera.png' },
    
    { id: 22, name: 'Mini Tripod', description: 'Küçük boyutlu tripod', category: 'Fotoğrafçılık', price: 20, img: '/ItemsPhoto/fotoculuk/minitripod.png' },
    { id: 23, name: 'Tripod', description: 'Profesyonel tripod', category: 'Fotoğrafçılık', price: 20, img: '/ItemsPhoto/fotoculuk/tripod.png' },
    { id: 24, name: 'Fener', description: 'Aydınlatma için taşınabilir fener', category: 'Kamp', price: 20, img: '/ItemsPhoto/Kamp/fener.png' },
    { id: 25, name: 'Kamp Çadırı', description: 'Dayanıklı kamp çadırı', category: 'Kamp', price: 20, img: '/ItemsPhoto/Kamp/kampcadiri.png' },
   
    { id: 27, name: 'Tulum', description: 'Rahat kamp tulumu', category: 'Kamp', price: 20, img: '/ItemsPhoto/Kamp/tulum.png' },
    { id: 28, name: 'Oyun Klavyesi', description: 'Gaming klavyesi', category: 'Oyun', price: 20, img: '/ItemsPhoto/oyun/klavye.png' },
    { id: 29, name: 'Oyun Kulaklığı', description: 'Gaming kulaklığı', category: 'Oyun', price: 20, img: '/ItemsPhoto/oyun/kulaklik.png' },
    { id: 30, name: 'Oyun Monitörü', description: 'Yüksek performanslı oyun monitörü', category: 'Oyun', price: 20, img: '/ItemsPhoto/oyun/monitor.png' },
    { id: 31, name: 'Oyun Mouse', description: 'Gaming mouse', category: 'Oyun', price: 20, img: '/ItemsPhoto/oyun/mouse.png' },
    { id: 32, name: 'PS5', description: 'PlayStation 5 oyun konsolu', category: 'Oyun', price: 20, img: '/ItemsPhoto/oyun/ps5.png' },
    { id: 33, name: 'Bavul', description: 'Dayanıklı seyahat bavulu', category: 'Seyahat', price: 20, img: '/ItemsPhoto/seyahat/bavul.png' },
    { id: 34, name: 'Seyahat Kiti', description: 'Seyahat için uygun kit', category: 'Seyahat', price: 20, img: '/ItemsPhoto/seyahat/seyahatkiti.png' },
    { id: 35, name: 'Bıçak Seti', description: 'Mutfak bıçak seti', category: 'Yemek', price: 20, img: '/ItemsPhoto/yemek/bicakseti.png' },
    { id: 36, name: 'Demir Tava', description: 'Yüksek kaliteli demir tavası', category: 'Yemek', price: 20, img: '/ItemsPhoto/yemek/demirtava.png' },
   
    { id: 38, name: 'Terazi', description: 'Hassas ölçümler için mutfak terazisi', category: 'Yemek', price: 20, img: '/ItemsPhoto/yemek/terazi.png' },


]
export default product