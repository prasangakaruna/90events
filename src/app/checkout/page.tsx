'use client';

import { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  selectedSize?: string;
  image?: string;
}

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');
  const type = searchParams.get('type'); // 'shop' or 'tickets'

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage if it's a shop checkout
  useEffect(() => {
    if (type === 'shop') {
      const savedCart = localStorage.getItem('shopCart');
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          setCartItems(cart);
        } catch (e) {
          console.error('Error loading cart', e);
        }
      }
    }
  }, [type]);

  // Mock ticket selection - in real app, get from state management
  const ticketSelection = {
    general: 2,
    vip: 1,
  };

  const tickets = [
    { id: 'general', name: 'General Admission', price: 49, quantity: 2 },
    { id: 'vip', name: 'VIP Pass', price: 149, quantity: 1 },
  ];

  // Use shop cart items if type is shop, otherwise use tickets
  const items: CartItem[] = type === 'shop' 
    ? cartItems 
    : tickets.map(t => ({ 
        id: t.id, 
        name: t.name, 
        price: t.price, 
        quantity: t.quantity, 
        image: undefined, 
        selectedSize: undefined 
      }));
  
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const serviceFee = type === 'shop' ? subtotal * 0.05 : subtotal * 0.1; // 5% for shop, 10% for tickets
  const shippingFee = type === 'shop' ? 9.99 : 0;
  const total = subtotal + serviceFee + shippingFee;

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
      // Clear cart if it's a shop order
      if (type === 'shop') {
        localStorage.removeItem('shopCart');
      }
      // In a real app, process payment here
      const orderId = Date.now();
      if (type === 'shop') {
        router.push(`/confirmation?type=shop&orderId=${orderId}`);
      } else {
        router.push(`/confirmation?eventId=${eventId}&orderId=${orderId}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6"> 
            <p className="text-[18px] text-gray-500 font-normal">Complete your purchase securely</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm sticky top-24">
                <h6 className=" text-[10px] font-bold text-gray-900 uppercase tracking-wide">Order Summary</h6>
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {items.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="flex gap-3 items-start pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                        {item.image && (
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                          {item.selectedSize && (
                            <p className="text-xs text-gray-500 mt-1">Size: {item.selectedSize}</p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-gray-900 font-semibold flex-shrink-0 text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))
                  )}
                </div>
                <div className="border-t border-gray-300 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Subtotal</span>
                    <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  {shippingFee > 0 && (
                    <div className="flex justify-between text-gray-600 text-sm">
                      <span>Shipping</span>
                      <span className="text-gray-900 font-medium">${shippingFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>{type === 'shop' ? 'Processing Fee' : 'Service Fee'}</span>
                    <span className="text-gray-900 font-medium">${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-3 border-t border-gray-300">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h6 className=" text-[10px] font-bold text-gray-900 uppercase tracking-wide">Personal Information</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="john.doe@example.com"
                      />
                      {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h6 className=" text-[10px] font-bold text-gray-900 uppercase tracking-wide">Payment Information</h6>
                    <div className="flex gap-2">
                      <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">VISA</div>
                      <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">MC</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Card Number *</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all font-mono"
                      />
                      {errors.cardNumber && <p className="text-red-600 text-sm mt-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Expiry Date *</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all font-mono"
                        />
                        {errors.expiryDate && <p className="text-red-600 text-sm mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">CVV *</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength={4}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all font-mono"
                        />
                        {errors.cvv && <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Your payment information is secure and encrypted
                      </p>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                   <h6 className=" text-[10px] font-bold text-gray-900 uppercase tracking-wide">Billing Address</h6>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Address *</label>
                      <input
                        type="text"
                        name="billingAddress"
                        value={formData.billingAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                        placeholder="123 Main Street"
                      />
                      {errors.billingAddress && <p className="text-red-600 text-sm mt-1">{errors.billingAddress}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                          placeholder="New York"
                        />
                        {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Zip Code *</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-all"
                          placeholder="10001"
                        />
                        {errors.zipCode && <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href={type === 'shop' ? '/shop' : `/events/${eventId}`}
                    className="px-6 py-3.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all font-semibold text-center"
                  >
                    {type === 'shop' ? 'Back to Shop' : 'Back to Event'}
                  </Link>
                  <button
                    type="submit"
                    disabled={items.length === 0}
                    className="flex-1 px-6 py-3.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900 shadow-lg"
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
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}

