import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { DotLoader } from 'react-spinners';
import { toast } from 'react-toastify';
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsLoading(true);
    emailjs
      .send(
        'service_49t74pb', // thay bằng service ID trong EmailJS
        'template_0ul64fr', // thay bằng template ID trong EmailJS
        {
          name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '2xQ32DaYWjAZWcJT0' // thay bằng public key (user ID) trong EmailJS
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setIsLoading(false);
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setIsLoading(false);
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Get in Touch with <span className="text-red-400">TCV</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> Ho Chi Minh city, VietNam</p>
              <p><strong>📧 Email:</strong> trancongviet990ntt@gmail.com</p>
              <p><strong>📞 Phone:</strong> 0387572309</p>
            </div>
          </div>

          {/* Form Section */}
          <form type="submit" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white mb-1">Your Name</label>
              <input type="text" name="name" placeholder="The Rock"  
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-1">Email Address</label>
              <input type="email" name="email" placeholder="rock@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-white mb-1">Your Message</label>
              <textarea rows="4" name="message" placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-500 cursor-pointer to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              {isLoading ? <DotLoader color="#100c0d" size={20} /> : 'Send Message 🚀'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;