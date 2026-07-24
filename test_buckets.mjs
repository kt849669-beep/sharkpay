const SUPABASE_URL = "https://ezovaubaqjwolfhsvpoe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W2eb-z1I8GARjI4lNj808w_TBgxh_bA";

async function checkBuckets() {
  console.log("Fetching buckets...");
  try {
    const res = await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
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
    console.log("Buckets:", data.map(b => b.name));
  } catch(e) {
    console.error(e);
  }
}

checkBuckets();
