const SUPABASE_URL = "https://ezovaubaqjwolfhsvpoe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W2eb-z1I8GARjI4lNj808w_TBgxh_bA";

async function updateTelegram() {
  console.log("Updating Telegram link in database...");
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/telegram_popup?id=not.eq.00000000-0000-0000-0000-000000000000`, {
      method: "PATCH",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        telegram_link: "https://t.me/risepay1"
      })
    });
    
    if (!res.ok) {
      console.error("Failed:", await res.text());
      return;
    }
    
    const data = await res.json();
    console.log("Update successful!");
  } catch(e) {
    console.error(e);
  }
}

updateTelegram();
