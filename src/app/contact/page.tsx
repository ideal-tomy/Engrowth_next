'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

export default function Contact() {
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
    alert('送信が完了しました。');
  };

  return (
    <div className="contact-page">
      <HeroSection 
        title="Contact"
        subtitle="お問い合わせはこちらのフォームからお願いいたします。通常2営業日以内にご返信させていただきます。"
        bgColor="solid"
        textColor="dark"
        align="center"
        height="small"
      />
      <section className="contact-form section-padding">
        <div className="form-container max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="name">お名前 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email">メールアドレス *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="category">お問い合わせ内容 *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 mt-1"
              >
                <option value="">以下から選択してください</option>
                <option value="business">ビジネスパーソン</option>
                <option value="student">学生の方</option>
                <option value="executive">経営者の方</option>
                <option value="parent">親御様</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div className="form-group mb-6">
              <label htmlFor="message">お問い合わせ内容 *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border rounded px-3 py-2 mt-1"
              />
            </div>
            <button type="submit" className="primary-button w-full">送信する</button>
          </form>
        </div>
      </section>
      <section className="contact-info section-padding">
        <div className="info-container max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="info-item bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">お電話でのお問い合わせ</h3>
            <p>03-XXXX-XXXX</p>
            <p>受付時間: 平日 9:00-18:00</p>
          </div>
          <div className="info-item bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">メールでのお問い合わせ</h3>
            <p>info@engrowth.co.jp</p>
            <p>24時間受付</p>
          </div>
        </div>
      </section>
    </div>
  );
} 