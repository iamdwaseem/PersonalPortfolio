import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setMessage("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300">Ready to collaborate or discuss opportunities</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and challenging projects. 
                Whether you're looking for a developer, have a question, or just want to connect, 
                I'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <a href="mailto:waseembolte@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      waseembolte@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input type="text" name="name" id="name" required
                         className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                         placeholder="Your Name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input type="email" name="email" id="email" required
                         className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                         placeholder="your@email.com" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea name="message" id="message" rows={4} required
                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                            placeholder="How can I help you?"></textarea>
                </div>

                <button type="submit"
                        disabled={status === 'submitting'}
                        className={`w-full py-4 flex items-center justify-center space-x-2 text-white font-bold rounded-xl transition-all transform active:scale-95 ${
                          status === 'submitting' ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1'
                        }`}>
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>{message}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
                    <span>{message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;