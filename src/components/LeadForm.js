'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { getAllLocations } from '@/data/locations';

export default function LeadForm({ 
  preselectedService = '',
  preselectedLocation = '',
  variant = 'default',
  title = 'Get Your Free Quote',
  subtitle = 'Compare prices from top-rated providers'
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService,
    location: preselectedLocation,
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const locations = getAllLocations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDark = variant === 'hero';
  const bgClass = isDark ? 'bg-gray-800/50 backdrop-blur' : 'bg-white shadow-lg';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const subtextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const inputClass = isDark 
    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-primary-400 focus:ring-primary-400'
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500';

  if (submitted) {
    return (
      <div className={`${bgClass} rounded-2xl p-8 text-center`}>
        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-2xl font-bold ${textClass} mb-2`}>Thank You!</h3>
        <p className={subtextClass}>
          Your quote request has been submitted. Top-rated providers in your area will contact you shortly with personalised quotes.
        </p>
      </div>
    );
  }

  return (
    <div className={`${bgClass} rounded-2xl p-6 md:p-8`}>
      <div className="text-center mb-6">
        <h3 className={`text-xl md:text-2xl font-bold ${textClass}`}>{title}</h3>
        <p className={`${subtextClass} mt-1`}>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2`}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2`}
          />
        </div>

        <div>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2`}
          >
            <option value="">Select Treatment *</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2`}
          >
            <option value="">Select Location *</option>
            {locations.map((location) => (
              <option key={location.slug} value={location.slug}>
                {location.name}{location.isBorough ? ' (Borough)' : ''}
              </option>
            ))}
          </select>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Tell us more about what you're looking for (optional)"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${inputClass} focus:outline-none focus:ring-2 resize-none`}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? 'Submitting...' : 'Get Free Quotes'}
        </button>

        <p className={`text-xs ${subtextClass} text-center`}>
          Free quotes | No obligation | Verified providers
        </p>
      </form>
    </div>
  );
}
