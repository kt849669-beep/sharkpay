const SUPABASE_URL = "https://ezovaubaqjwolfhsvpoe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W2eb-z1I8GARjI4lNj808w_TBgxh_bA";

async function createBucket(name) {
  console.log("Creating bucket:", name);
  try {
    const res = await fetch(`${SUPABASE_URL}/storage/v1/bucket`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: name,
        name: name,
        public: true
      })
    });
    
    if (!res.ok) {
      console.error(`Failed to create ${name}:`, await res.text());
    } else {
      console.log(`Successfully created ${name}!`);
    }
  } catch(e) {
    console.error(e);
  }
}

createBucket("slider-images");
createBucket("popup-videos");
