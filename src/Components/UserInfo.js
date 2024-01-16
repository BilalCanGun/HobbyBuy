import React, { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import "./style.css";

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    name: "", // Kullanıcının adını tutacak state
    email: "", // Kullanıcının email'ini tutacak state
   
  });

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      if (user) {
        // Kullanıcı oturum açtığında veya oturum açıkken çalışır
        setUserInfo({
          name: user.displayName,
          email: user.email,
        });

        // Kullanıcının adını almak için Firestore'dan örnek
        const userRef = projectFirestore.collection("users").doc(user.uid);
        userRef.get().then((doc) => {
          if (doc.exists) {
            setUserInfo((prevInfo) => ({
              ...prevInfo,
              name: doc.data().name,
            
            }));
          }
        });
      } else {
        // Kullanıcı oturumu kapatırsa, bilgileri sıfırla
        setUserInfo(null);
      }
    });

    // Clean-up fonksiyonu
    return () => unsubscribe();
  }, []); // Boş dependency array, sadece component monte edildiğinde çalışmasını sağlar

  const handleEdit = () => {
    setEditMode(true);
    setEditedInfo({
      name: userInfo?.name || "",
      email: userInfo?.email || "",
    });
  };

  const handleSave = () => {
    // Burada kullanıcının güncellenmiş bilgilerini Firebase'e kaydedebilirsiniz
    const user = projectAuth.currentUser;

    // Kullanıcı tanımlı ise işlemleri gerçekleştir
    if (user) {
      // Kullanıcı adını ve diğer bilgileri güncelleme
      user.updateProfile({
        displayName: editedInfo.name,
      });

      // Firestore'da kullanıcı bilgilerini güncelleme (örnek)
      const userRef = projectFirestore.collection("users").doc(user.uid);
      userRef.update({
        name: editedInfo.name,
      });

      setEditMode(false);
    } else {
      // Kullanıcı tanımlı değilse, hata mesajı veya başka bir işlem yapabilirsiniz
      console.error("Kullanıcı tanımlı değil!");
    }
  };

  return (
    <div className="user-container">
      <h1 className="user-header">Profilim</h1>

      <div className="user-info-container">
        {editMode ? (
          <>
            <input
              type="text"
              value={editedInfo.name}
              onChange={(e) =>
                setEditedInfo((prevInfo) => ({
                  ...prevInfo,
                  name: e.target.value,
                }))
              }
            />
            <p className="user-info-email">Email: {userInfo?.email}</p>
            
          </>
        ) : (
          <>
            <p className="user-info-name">Ad: {userInfo?.name}</p>
            <p className="user-info-email">Email: {userInfo?.email}</p>
          </>
        )}
      </div>

      <div className="user-info-buttons">
        {editMode ? (
          <>
            <button onClick={handleSave} className="user-kaydet">Kaydet</button>
            <button onClick={() => setEditMode(false)} className="user-iptal">İptal</button>
          </>
        ) : (
          <button onClick={handleEdit} className="user-duzen">Düzenle</button>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
