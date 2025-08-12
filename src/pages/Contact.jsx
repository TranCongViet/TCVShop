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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-10">
      <div className="w-full max-w-5xl rounded-2xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-md">
        <h2 className="mb-10 text-center text-4xl font-bold text-white">
          Get in Touch with <span className="text-red-400">TCV</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Info Section */}
          <div className="space-y-6 text-white">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300">
                Have a question or need support? We're here to help you with
                your electronics journey.
              </p>
            </div>
            <div>
              <p>
                <strong>📍 Address:</strong> Ho Chi Minh city, VietNam
              </p>
              <p>
                <strong>📧 Email:</strong> trancongviet990ntt@gmail.com
              </p>
              <p>
                <strong>📞 Phone:</strong> 0387572309
              </p>
            </div>
          </div>

          {/* Form Section */}
          <form type="submit" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-white">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="The Rock"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-2 text-white placeholder-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-white">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="rock@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-2 text-white placeholder-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-white">Your Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/30 bg-white/20 px-4 py-2 text-white placeholder-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-red-500 to-purple-500 py-2 font-semibold text-white transition-all duration-300 hover:opacity-90"
            >
              {isLoading ? (
                <DotLoader color="#100c0d" size={20} />
              ) : (
                'Send Message 🚀'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
