'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Mock ticket selection - in real app, get from state management
  const ticketSelection = {
    general: 2,
    vip: 1,
  };

  const tickets = [
    { id: 'general', name: 'General Admission', price: 49, quantity: 2 },
    { id: 'vip', name: 'VIP Pass', price: 149, quantity: 1 },
  ];

  const subtotal = tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0);
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (!formData.billingAddress) newErrors.billingAddress = 'Billing address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, process payment here
      router.push(`/confirmation?eventId=${eventId}&orderId=${Date.now()}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-white">{ticket.name}</p>
                        <p className="text-sm text-gray-400">Qty: {ticket.quantity}</p>
                      </div>
                      <p className="text-[#f0425f] font-semibold">
                        ${(ticket.price * ticket.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-800 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-2 border-t border-gray-800">
                    <span>Total</span>
                    <span className="text-[#f0425f]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                      />
                      {errors.firstName && <p className="text-[#f0425f] text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                      />
                      {errors.lastName && <p className="text-[#f0425f] text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                      />
                      {errors.email && <p className="text-[#f0425f] text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                      />
                      {errors.phone && <p className="text-[#f0425f] text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                      />
                      {errors.cardNumber && <p className="text-[#f0425f] text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                        />
                        {errors.expiryDate && <p className="text-[#f0425f] text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                        />
                        {errors.cvv && <p className="text-[#f0425f] text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                  <h2 className="text-2xl font-bold mb-6">Billing Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Address *</label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                      />
                      {errors.billingAddress && <p className="text-[#f0425f] text-sm mt-1">{errors.billingAddress}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                        />
                        {errors.city && <p className="text-[#f0425f] text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Zip Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-[#f0425f] focus:outline-none"
                        />
                        {errors.zipCode && <p className="text-[#f0425f] text-sm mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/events/${eventId}`}
                    className="px-6 py-3 border-2 border-gray-800 text-white rounded-lg hover:border-gray-700 transition-colors text-center font-semibold"
                  >
                    Back to Event
                  </Link>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-[#f0425f] text-white rounded-lg hover:bg-[#d63852] transition-colors font-semibold text-lg"
                  >
                    Complete Purchase
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f0425f] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}

