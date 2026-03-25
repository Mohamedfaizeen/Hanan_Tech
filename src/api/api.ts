const BASE_URL = import.meta.env.VITE_API_URL;

// ─── Types ────────────────────────────────────────────────

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface OrderItem {
  productId?: string;        // optional — local products have no DB id
  productName: string;
  quantity: number;
  price?: number;
}

export interface OrderPayload {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  notes?: string;
}

// ─── API Calls ────────────────────────────────────────────

export const submitContact = async (data: ContactPayload) => {
  const res = await fetch(`${BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to send message");
  }
  return res.json();
};

export const submitOrder = async (data: OrderPayload) => {
  const res = await fetch(`${BASE_URL}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to place order");
  }
  return res.json();
};