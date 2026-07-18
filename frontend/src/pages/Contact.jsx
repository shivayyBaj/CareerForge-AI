import React from 'react'
import Header from '../components/custom/Header'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <Header />
      
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Have questions or need support? Reach out to us directly and we'll be happy to help.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-slate-600 mb-4 text-sm">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+918707548223" className="text-blue-600 font-semibold hover:underline text-lg">
                +91 8707548223
              </a>
            </div>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-600 mb-4 text-sm">Our friendly team is here to help.</p>
              <a href="mailto:bajpaishivesh44@gmail.com" className="text-blue-600 font-semibold hover:underline text-lg break-all">
                bajpaishivesh44@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
