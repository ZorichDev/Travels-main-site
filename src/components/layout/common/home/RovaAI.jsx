import React, { useState, useRef, useEffect } from 'react';

const FEATURES = [
  {
    icon: '✈️',
    title: 'Flight Booking',
    desc: 'Real-time flight prices, booking assistance, and travel deals',
  },
  {
    icon: '🛂',
    title: 'Visa Intelligence',
    desc: 'Instant visa requirements, fees and timelines for 50+ destinations',
  },
  {
    icon: '🏥',
    title: 'Medical Matching',
    desc: 'Recommends best countries and hospitals based on your condition',
  },
  {
    icon: '📖',
    title: 'Trip Planning',
    desc: 'Day-by-day itineraries, cost breakdowns and hotel suggestions',
  },
  {
    icon: '📄',
    title: 'Document Guide',
    desc: 'Know exactly what documents you need and when to apply',
  },
  {
    icon: '💰',
    title: 'Pay Small Small',
    desc: 'Flexible installment plans for flights and packages',
  },
];

const SUGGESTIONS = [
  { emoji: '✈️', label: 'Flight to London' },
  { emoji: '🇬🇧', label: 'UK Visa' },
  { emoji: '❤️', label: 'Heart Surgery' },
  { emoji: '🇨🇦', label: 'Canada Cost' },
  { emoji: '📋', label: 'Schengen Docs' },
  { emoji: '💰', label: 'Pay Small Small' },
];

const INITIAL_MESSAGE = {
  role: 'assistant',
  text: "Hi! I'm R-pro AI, your intelligent travel assistant. I can help with ✈️ flight bookings, visas, medical tourism, trip costs, and Pay Small Small installment plans. Where would you like to travel today?",
};

const SYSTEM_PROMPT = `You are R-pro AI, the intelligent travel assistant for R-Pro Travels — a Nigerian travel agency specializing in flight bookings, visas, medical tourism, holiday packages, and corporate travel.

## YOUR CORE CAPABILITIES:

### ✈️ FLIGHT BOOKING EXPERTISE:
- Help users find flights from Lagos (LOS), Abuja (ABV), Port Harcourt (PHC), and other Nigerian airports
- Collect this booking info step by step:
  1. Destination city & airport code
  2. Travel dates (flexible dates = better prices)
  3. Number of passengers (adults/children/infants)
  4. Preferred cabin class (Economy/Business/First)
  5. Special requirements (wheelchair, meals, etc.)

- Provide estimated flight prices (economy class):
  - Lagos to London (LHR): $800-1200
  - Lagos to Dubai (DXB): $600-900
  - Lagos to New York (JFK): $1200-1800
  - Lagos to Mumbai (BOM): $700-1100
  - Lagos to Istanbul (IST): $500-800
  - Abuja to London: $900-1300
  - Abuja to Dubai: $700-1000

- Business class: Usually 3-4x economy prices
- Baggage allowance: 23kg checked, 7kg carry-on (most airlines)
- Best booking window: 2-3 months before travel
- Cheapest days: Tuesday, Wednesday

### 📋 BOOKING WORKFLOW:
When user wants to book a flight:
1. Say: "I'll help you book that flight! Let me collect some details:"
2. Ask for: Destination, dates, passengers, class
3. Then respond: "Great! I've noted your preferences. Our booking team will send a quote within 15 minutes. Would you like me to connect you via WhatsApp or email?"

### 🛂 VISA EXPERTISE:
- UK Visa: £100-150, processing 3-6 weeks, requires bank statements, employment letter
- Schengen Visa: €80, processing 2-4 weeks, requires travel insurance, hotel bookings
- US Visa: $160, processing 2-8 weeks, requires DS-160, interview
- Canada Visa: CAD $100, processing 4-8 weeks
- UAE Visa: $100-150, processing 3-5 days (easier for Nigerians)
- Always ask: "When do you plan to travel? Visa processing takes time."

### 🏥 MEDICAL TOURISM:
- India: 30-40% cheaper than Western countries (best for heart surgery, knee replacement)
- Turkey: 40-50% cheaper (best for hair transplant, dental)
- Thailand: 35-45% cheaper (best for cosmetic surgery)
- Germany: High quality, higher costs (best for cancer treatment)
- Ask: "What condition are you seeking treatment for? I can recommend the best destination."

### 💰 PAY SMALL SMALL (INSTALLMENT PLAN):
- 3-month plan: 30% deposit, then 2 monthly payments
- 6-month plan: 20% deposit, then 5 monthly payments
- Requirements: Valid ID, proof of income, booking confirmation
- Works for: Flight tickets, visa processing, medical packages

### RESPONSE RULES:
- Always be warm, professional, and helpful
- Keep responses 3-4 sentences, then ask 1 follow-up question
- Use emojis occasionally: ✈️ 🛂 🏥 💰
- For exact prices: "For real-time pricing, visit our booking portal or WhatsApp +234 XXX XXX XXX"
- Never promise what you can't deliver (live bookings, seat availability)
- End with: "Is there anything else about your trip I can help with?"

### WHAT YOU CANNOT DO (BE HONEST):
- Make live bookings directly (prepare quotes then connect to agents)
- See real-time seat availability
- Process payments

Instead say: "I'll prepare your options, then connect you with our booking team to complete the reservation."`;

// ─── API endpoint: uses Vite proxy in dev, Netlify function in production ────
function getApiEndpoint() {
  return '/api/claude'; // ✅ works for both dev & production on Vercel
}

// ─── Core API call ────────────────────────────────────────────────────────────
async function callClaude(messages) {
  const lastUserMsg = messages[messages.length - 1]?.text || '';

  // Quick local replies for common patterns (saves API calls + feels snappy)
  const lower = lastUserMsg.toLowerCase();

  if (lower.includes('pay small small') || lower.includes('installment')) {
    return "💰 Yes! R-Pro Travels offers 'Pay Small Small' installment plans:\n\n• 3-month plan: 30% deposit + 2 monthly payments\n• 6-month plan: 20% deposit + 5 monthly payments\n\nThis works for flight tickets, visa processing, and medical packages. Would you like me to check your eligibility?";
  }

  if (lower.match(/\bbook\b|\breserve\b/) && !lower.includes('how')) {
    return "📋 I'd love to help you book! Could you please share:\n\n1️⃣ Destination city\n2️⃣ Preferred travel dates\n3️⃣ Number of passengers (adults/children)\n4️⃣ Preferred cabin class\n\nOnce you share these, I'll prepare a quote and connect you with our team — Pay Small Small options available! ✈️";
  }

  // Full Claude API call
  try {
    const endpoint = getApiEndpoint();

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-latest',// latest Sonnet 4
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: messages
          // Filter out the initial greeting (not from API) to avoid role errors
          .filter((m, i) => !(i === 0 && m.role === 'assistant'))
          .map((m) => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: m.text,
          })),
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error('API error:', err);
      throw new Error(`API ${response.status}`);
    }

    const data = await response.json();
    return (
      data.content?.find((b) => b.type === 'text')?.text ||
      "I'm having trouble right now. Please try again!"
    );
  } catch (error) {
    console.error('Claude API error:', error);
    return "I'm having trouble connecting to my brain right now 😅 Please try again, or reach our team directly on WhatsApp!";
  }
}

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

// ─── ChatPanel ────────────────────────────────────────────────────────────────
function ChatPanel({ messages, isTyping, inputValue, setInputValue, onSend, onSuggestion, messagesEndRef, isMobile }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(255,255,255,0.15)',
      borderRadius: 16,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: isMobile ? 420 : 500,
    }}>
      {/* Header */}
      <div style={{
        padding: isMobile ? '12px 14px' : '14px 18px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'rgba(255,255,255,0.05)',
      }}>
        <div style={{
          width: isMobile ? 34 : 38,
          height: isMobile ? 34 : 38,
          borderRadius: '50%',
          background: '#c0392b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMobile ? 16 : 18,
          flexShrink: 0,
        }}>✈️</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: isMobile ? 13 : 14 }}>R-pro AI</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#4ade80' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
            Online — Flight & Travel Expert
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: isMobile ? '12px 12px 8px' : '16px 16px 8px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        WebkitOverflowScrolling: 'touch',
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: isMobile ? '88%' : '80%',
              padding: isMobile ? '9px 12px' : '10px 14px',
              borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              background: msg.role === 'user' ? '#c0392b' : 'rgba(255,255,255,0.12)',
              color: '#fff',
              fontSize: isMobile ? 12.5 : 13,
              lineHeight: 1.6,
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '16px 16px 16px 4px', padding: '10px 16px', display: 'flex', gap: 4, alignItems: 'center' }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  width: 6, height: 6, borderRadius: '50%', background: '#e06060', display: 'inline-block',
                  animation: 'bounce 1s infinite',
                  animationDelay: `${i * 0.15}s`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      <div style={{
        padding: isMobile ? '7px 10px' : '8px 12px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: isMobile ? 5 : 6,
      }}>
        {(isMobile ? SUGGESTIONS.slice(0, 3) : SUGGESTIONS).map(s => (
          <button key={s.label} onClick={() => onSuggestion(s.label)} style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 999,
            color: 'rgba(255,255,255,0.8)',
            fontSize: isMobile ? 10.5 : 11,
            padding: isMobile ? '5px 10px' : '5px 11px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            WebkitTapHighlightColor: 'transparent',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(192,57,43,0.3)'; e.currentTarget.style.borderColor = '#c0392b'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
          >
            {s.emoji} {s.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div style={{
        padding: isMobile ? '9px 10px' : '10px 12px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        gap: 8,
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSend()}
          placeholder="Ask R-pro AI about flights, visas, or Pay Small Small..."
          style={{
            flex: 1,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 8,
            padding: isMobile ? '9px 12px' : '9px 14px',
            color: '#fff',
            fontSize: isMobile ? 14 : 13,
            outline: 'none',
            minWidth: 0,
          }}
        />
        <button onClick={onSend} style={{
          background: '#c0392b', border: 'none', borderRadius: 8,
          width: 40, height: 40, cursor: 'pointer', color: '#fff', fontSize: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          transition: 'background 0.2s',
          WebkitTapHighlightColor: 'transparent',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#a93226'}
          onMouseLeave={e => e.currentTarget.style.background = '#c0392b'}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const RproAI = () => {
  const isMobile = useIsMobile();
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);
  const [floatMessages, setFloatMessages] = useState([INITIAL_MESSAGE]);
  const [floatInput, setFloatInput] = useState('');
  const [floatTyping, setFloatTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const floatEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isTyping]);
  useEffect(() => { floatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [floatMessages, floatTyping]);

  const sendMessage = async (msgList, setMsgs, input, setInput, setTyping) => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    const updated = [...msgList, userMsg];
    setMsgs(updated);
    setInput('');
    setTyping(true);
    try {
      const reply = await callClaude(updated);
      setMsgs(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setMsgs(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting. Please try again or contact our team on WhatsApp!" }]);
    }
    setTyping(false);
  };

  const handleSend = () => sendMessage(messages, setMessages, inputValue, setInputValue, setIsTyping);
  const handleFloatSend = () => sendMessage(floatMessages, setFloatMessages, floatInput, setFloatInput, setFloatTyping);

  const handleSuggestion = (label) => {
    const updated = [...messages, { role: 'user', text: label }];
    setMessages(updated);
    setIsTyping(true);
    callClaude(updated).then(reply => {
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    });
  };

  const handleFloatSuggestion = (label) => {
    const updated = [...floatMessages, { role: 'user', text: label }];
    setFloatMessages(updated);
    setFloatTyping(true);
    callClaude(updated).then(reply => {
      setFloatMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setFloatTyping(false);
    });
  };

  return (
    <>
      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .rova-input::placeholder { color: rgba(255,255,255,0.35); }
        * { box-sizing: border-box; }
        @media (max-width: 767px) {
          .rova-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .rova-section { padding: 48px 20px !important; }
          .rova-features { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
          .rova-float-panel { width: calc(100vw - 32px) !important; right: 0 !important; left: 16px !important; max-width: 360px !important; }
        }
      `}</style>

      {/* Main Section */}
      <div
        className="rova-section"
        style={{
          background: 'linear-gradient(135deg, #0a1628 0%, #0d1e40 60%, #091430 100%)',
          padding: isMobile ? '48px 20px' : '80px 40px',
          fontFamily: 'inherit',
        }}
      >
        <div
          className="rova-grid"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 36 : 64,
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#e06060' }}>R-pro AI</span>
              <div style={{ width: 32, height: 1.5, background: '#c0392b' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              margin: '0 0 16px',
            }}>
              Your Intelligent<br />
              <em style={{ color: '#db0303', fontStyle: 'italic' }}>Travel Assistant</em>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: isMobile ? '0.9rem' : '1rem',
              lineHeight: 1.7,
              margin: '0 0 28px',
              maxWidth: 420,
            }}>
              Ask R-pro AI anything — flights, visas, medical tourism, costs, and Pay Small Small installment plans. Available 24/7.
            </p>

            {/* Feature Cards */}
            <div
              className="rova-features"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: isMobile ? 8 : 10,
              }}
            >
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? 10 : 14,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10,
                  padding: isMobile ? '12px 12px' : '14px 18px',
                }}>
                  <div style={{
                    width: isMobile ? 30 : 36,
                    height: isMobile ? 30 : 36,
                    borderRadius: 8,
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? 15 : 18,
                    flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: isMobile ? 11.5 : 13, marginBottom: 2 }}>{f.title}</div>
                    {!isMobile && (
                      <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>{f.desc}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Chat */}
          <ChatPanel
            messages={messages}
            isTyping={isTyping}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSend={handleSend}
            onSuggestion={handleSuggestion}
            messagesEndRef={messagesEndRef}
            isMobile={isMobile}
          />
        </div>
      </div>

      {/* Floating Widget */}
      <div style={{
        position: 'fixed',
        bottom: 20,
        right: 16,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 12,
      }}>
        {floatOpen && (
          <div
            className="rova-float-panel"
            style={{
              width: isMobile ? 'calc(100vw - 32px)' : 340,
              maxWidth: isMobile ? 360 : 'none',
              background: '#0d1e40',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              animation: 'fadeIn 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              height: isMobile ? 380 : 440,
            }}
          >
            {/* Float Header */}
            <div style={{
              padding: '12px 14px',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.05)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#c0392b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, flexShrink: 0 }}>✈️</div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 13 }}>R-pro AI</div>
                  <div style={{ fontSize: 10, color: '#4ade80', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                    Flight Expert
                  </div>
                </div>
              </div>
              <button
                onClick={() => setFloatOpen(false)}
                style={{
                  background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)',
                  fontSize: 22, cursor: 'pointer', lineHeight: 1,
                  padding: '4px 8px', WebkitTapHighlightColor: 'transparent',
                }}
              >×</button>
            </div>

            {/* Float Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              WebkitOverflowScrolling: 'touch',
            }}>
              {floatMessages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '88%', padding: '8px 12px',
                    borderRadius: msg.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                    background: msg.role === 'user' ? '#c0392b' : 'rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: 12.5, lineHeight: 1.6,
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {floatTyping && (
                <div style={{ display: 'flex' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px 14px 14px 4px', padding: '8px 14px', display: 'flex', gap: 4 }}>
                    {[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#e06060', display: 'inline-block', animation: 'bounce 1s infinite', animationDelay: `${i * 0.15}s` }} />)}
                  </div>
                </div>
              )}
              <div ref={floatEndRef} />
            </div>

            {/* Float Suggestions */}
            <div style={{
              padding: '6px 10px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 5,
            }}>
              {SUGGESTIONS.slice(0, 3).map(s => (
                <button key={s.label} onClick={() => handleFloatSuggestion(s.label)} style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 999,
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: 10.5,
                  padding: '4px 9px',
                  cursor: 'pointer',
                  WebkitTapHighlightColor: 'transparent',
                }}>
                  {s.emoji} {s.label}
                </button>
              ))}
            </div>

            {/* Float Input */}
            <div style={{ padding: '8px 10px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: 6 }}>
              <input
                type="text"
                value={floatInput}
                onChange={e => setFloatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleFloatSend()}
                placeholder="Ask R-pro AI…"
                className="rova-input"
                style={{
                  flex: 1, minWidth: 0,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 8,
                  padding: '7px 12px',
                  color: '#fff',
                  fontSize: 14,
                  outline: 'none',
                }}
              />
              <button onClick={handleFloatSend} style={{
                background: '#c0392b', border: 'none', borderRadius: 8,
                width: 38, height: 38, cursor: 'pointer', color: '#fff', fontSize: 13,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                WebkitTapHighlightColor: 'transparent',
              }}>▶</button>
            </div>
          </div>
        )}

        {/* Float Toggle Button */}
        <button
          onClick={() => setFloatOpen(o => !o)}
          style={{
            width: 52, height: 52, borderRadius: '50%',
            background: '#c0392b', border: 'none',
            boxShadow: '0 4px 20px rgba(192,57,43,0.5)',
            cursor: 'pointer', fontSize: 22,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.2s',
            WebkitTapHighlightColor: 'transparent',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          title="Chat with R-pro AI"
        >
          ✈️
        </button>
      </div>
    </>
  );
};

export default RproAI;