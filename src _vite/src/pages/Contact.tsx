import React, { useState } from 'react';
import '../styles/Contact.css';
import HeroSection from '../components/HeroSection';

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを実装
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">
      <HeroSection 
        title="Contact"
        subtitle="お問い合わせはこちらのフォームからお願いいたします。通常2営業日以内にご返信させていただきます。"
        bgColor="light"
        textColor="dark"
        align="center"
        height="small"
      />

      <section className="contact-form">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">お問い合わせ内容 *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">以下から選択してください</option>
                <option value="business">ビジネスパーソン</option>
                <option value="student">学生の方</option>
                <option value="executive">経営者の方</option>
                <option value="parent">親御様</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">お問い合わせ内容 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button type="submit" className="submit-button">
              送信する
            </button>
          </form>
        </div>
      </section>

      <section className="contact-info">
        <div className="info-container">
          <div className="info-item">
            <h3>お電話でのお問い合わせ</h3>
            <p>03-XXXX-XXXX</p>
            <p>受付時間: 平日 9:00-18:00</p>
          </div>
          <div className="info-item">
            <h3>メールでのお問い合わせ</h3>
            <p>info@engrowth.co.jp</p>
            <p>24時間受付</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 