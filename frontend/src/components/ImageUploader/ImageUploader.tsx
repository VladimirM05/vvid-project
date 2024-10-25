import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ImageUploaderProps {
  onImageChange: (newAvatar: string) => void;
  onConfirm: () => void;
  balance: number;
  setBalance: (balance: number) => void;
  walletAddress: string; 
}   

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageChange, onConfirm, balance, setBalance, walletAddress}) => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isConfirmButtonVisible, setIsConfirmButtonVisible] = useState<boolean>(false);
  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          });
          setAccount(accounts[0]);  // Используем accounts[0] для MetaMask
        } catch (error) {
          console.error('Ошибка подключения или получения данных пользователя: ', error);
        }
      } else {
        alert('Установите MetaMask!');
      }
    };

    connectWallet();
  }, []);

  // Функция для загрузки изображения из базы данных и получения баланса
  const loadUserDataFromDatabase = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get_user/${account}`);
      if (response.data) {
        // Устанавливаем аватарку
        if (response.data.image_base64) {
          setImage(`data:image/jpeg;base64,${response.data.image_base64}`);
        }
        // Устанавливаем баланс, если он есть
        if (response.data.balance) {
          setBalance(response.data.balance);
        }
      }
    } catch (error) {
      console.error('Ошибка при получении данных пользователя из базы данных:', error);
    }
  };

  // Обработчик изменения изображения
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
        setFile(selectedFile);
        onImageChange(result);
        setIsConfirmButtonVisible(true);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    if (account) {
      loadUserDataFromDatabase();
    }
  }, [account]);

  const handleConfirm = async () => {
    if (file && account) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post(`http://127.0.0.1:8000/api/new_avatar/${account}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Изображение успешно отправлено на сервер:', response.data);
      } catch (error) {
        console.error('Ошибка при отправке изображения на сервер:', error);
      }
    } else {
      console.error('Файл или кошелек отсутствует');
    }

    onConfirm();
    setIsConfirmButtonVisible(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#ccc',
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          cursor: 'pointer',
        }}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        {!image && <p>Click to upload image</p>}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {isConfirmButtonVisible && (
        <button
          onClick={handleConfirm}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Подтвердить
        </button>
      )}
    </div>
  );
};

export default ImageUploader;