'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  badge?: 'Best Seller' | 'Premium';
  sizes?: string[];
  category?: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Gerçekler Acıdır T-Shirt',
    price: 29.99,
    description: 'Official black t-shirt featuring the iconic Gerçekler Acıdır show logo. Premium',
    image: '/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp',
    badge: 'Best Seller',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: '90 Events Coffee Mug',
    price: 14.99,
    description: 'High-quality ceramic mug featuring the 90 Events logo. 11oz capacity, perfect for your morning coffee or tea. Dishwasher and microwave safe',
    image: '/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp',
    badge: 'Best Seller',
  },
  {
    id: '3',
    name: 'North America Tour 2026 Hoodie',
    price: 59.99,
    description: 'Premium hoodie featuring the North America Tour 2026 dates on the back',
    image: '/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp',
    badge: 'Premium',
    sizes: ['S', 'M', 'L', 'XL', '+1'],
  },
  {
    id: '4',
    name: 'Couples Bundle Pack',
    price: 79.99,
    description: 'The perfect gift for couples! Includes 2 Gerçekler Acıdır T-shirts and 2 coffee mugs',
    image: '/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp',
    badge: 'Premium',
    sizes: ['Both S', 'Both M', 'Both L', 'S+M', '+2'],
  },
];

const vipExperience = {
  id: 'vip-1',
  name: 'Meet & Greet Photo with İlker Ayrık',
  price: 149.99,
  description: 'Once-in-a-lifetime opportunity! Meet İlker Ayrık backstage after the show for an exclusive photo session. Includes professional photo, autographed show poster, and VIP lanyard. Limited availability per show!',
  image: '/img/img16346_orig.webp',
};

interface CartItem extends Product {
  selectedSize?: string;
  quantity: number;
}

export default function ShopPage() {
  const router = useRouter();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shopCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopCart', JSON.stringify(cart));
    // Dispatch custom event to update header cart count
    window.dispatchEvent(new Event('cartUpdated'));
  }, [cart]);

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleAddToCart = (product: Product) => {
    // Check if size is required but not selected
    if (product.sizes && product.sizes.length > 0 && !selectedSizes[product.id]) {
      alert('Please select a size');
      return;
    }

    const cartItem: CartItem = {
      ...product,
      selectedSize: selectedSizes[product.id],
      quantity: 1,
    };

    // Check if item already exists in cart (same product and size)
    const existingItemIndex = cart.findIndex(
      (item) => item.id === product.id && item.selectedSize === selectedSizes[product.id]
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item exists
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Add new item
      setCart((prev) => [...prev, cartItem]);
    }
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleGoToCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add some products first!');
      return;
    }
    router.push('/checkout?type=shop');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full mb-6">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-yellow-400 text-sm font-semibold">Official Merchandise</span>
              </div>

              <div className="mb-6">
                <div className="w-16 h-16 bg-[#f0425f] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">90</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-[#f0425f]">Gerçekler Acıdır</span> Tour Shop
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                Take home exclusive merchandise from the North America Tour 2026. Limited edition items you won't find anywhere else.
              </p>

              <div className="flex items-center gap-4">
                <Link
                  href="#products"
                  className="btn-gradient inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Browse Collection
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Side - Product Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-800">
                  <Image
                    src="/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp"
                    alt="Gerçekler Acıdır T-Shirt"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src="/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp"
                  alt="T-Shirt on person"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src="/img/gercekler-tshirt_90420926-2bfe-459c-9e12-dc1225af1b44.webp"
                  alt="T-Shirt detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured VIP Experience */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">FEATURED</span>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/30 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left - Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                <Image
                  src={vipExperience.image}
                  alt={vipExperience.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full mb-4">
                  <span className="text-orange-400 text-sm font-semibold">VIP Experience</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{vipExperience.name}</h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {vipExperience.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl font-bold text-yellow-400">${vipExperience.price}</span>
                  </div>
                  <Link
                    href={`/shop/${vipExperience.id}`}
                    className="btn-gradient flex items-center gap-2"
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section id="products" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">All Products</h2>
              <p className="text-gray-400">{products.length} items available</p>
            </div>
            {cart.length > 0 && (
              <button
                onClick={handleGoToCheckout}
                className="btn-gradient-lg flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Checkout ({getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'})
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-[#f0425f]/50 transition-all"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.badge === 'Best Seller'
                          ? 'bg-orange-500 text-white'
                          : 'bg-purple-600 text-white'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-yellow-400">${product.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{product.description}</p>

                  {/* Size Selection */}
                  {product.sizes && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeSelect(product.id, size)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              selectedSizes[product.id] === size
                                ? 'bg-[#f0425f] text-white'
                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-gradient w-full flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't Miss Out Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/30 via-gray-900 to-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Don't Miss Out</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Limited edition tour merchandise. Once they're gone, they're gone forever.
          </p>
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f0425f]">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

