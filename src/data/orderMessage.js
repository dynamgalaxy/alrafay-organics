import { formatPKR } from './products.js';

export const whatsappNumber = '923325284770';

export function createOrderMessage({ name, phone, email, address, note = '', items, subtotal }) {
  const lines = items.map(({ product, pack, unitPrice, quantity }) => {
    const variant = [product.variant, pack?.label].filter(Boolean).join(' · ');
    return `• ${product.name} — ${variant} × ${quantity} — ${formatPKR((unitPrice ?? product.price) * quantity)}`;
  }).join('\n');

  return `🌿 AL RAFAY ORGANICS — NEW ORDER\n\n👤 Customer: ${name}\n📱 WhatsApp: ${phone}\n📧 Email: ${email}\n📍 Delivery Address: ${address}\n\n🛒 ORDER DETAILS\n\n${lines}\n\n💰 Total: ${formatPKR(subtotal)}${note ? `\n\n📝 Order Note: ${note}` : ''}\n\nThank you for choosing Al Rafay Organics 🌿`;
}

export const createWhatsAppOrderUrl = (message) =>
  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
