const SUPABASE_URL = "https://ezovaubaqjwolfhsvpoe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W2eb-z1I8GARjI4lNj808w_TBgxh_bA";

async function checkAdmins() {
  console.log("Checking admins...");
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/admins?select=*`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    
    if (!res.ok) {
      console.error("Failed:", await res.text());
      return;
    }
    
    const data = await res.json();
    console.log("Admins:", data);
  } catch(e) {
    console.error(e);
  }
}

checkAdmins();
