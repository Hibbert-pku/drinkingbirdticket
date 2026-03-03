export const event = {
  title: "Spring Comedy Night",
  date: "Sat, Apr 18, 2026 · 7:30 PM",
  venue: "Downtown Vancouver",
  heroImage: "/events/spring-show.jpg",
  contact: {
    wechat: "your_wechat_id",
    email: "host@example.com",
  },
  tickets: [
    { id: "early", name: "Early Bird", price: 25, note: "Limited quantity" },
    { id: "regular", name: "Regular", price: 35, note: "General admission" },
    { id: "vip", name: "VIP", price: 60, note: "Best seats + 1 drink" },
  ],
  payment: {
    method: "Interac e-Transfer",
    recipient: "payto@example.com",
    noteRule: "备注请填：ORDER-{timestamp}-{name}",
    confirmSla: "We confirm within 12 hours after receiving payment.",
  },
  faq: [
    { q: "Is it refundable?", a: "No refunds. You can transfer to a friend (tell us the new name)." },
    { q: "What do I show at the door?", a: "Show your payment receipt + your name." },
  ],
};
