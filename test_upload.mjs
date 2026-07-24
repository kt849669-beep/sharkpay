import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const SUPABASE_URL = "https://ezovaubaqjwolfhsvpoe.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_W2eb-z1I8GARjI4lNj808w_TBgxh_bA";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testUpload() {
  console.log("Testing upload to slider-images bucket...");
  
  // Create a dummy file
  const fileContent = "This is a test image content";
  
  const { data, error } = await supabase.storage
    .from("slider-images")
    .upload("test_upload.txt", fileContent, {
      upsert: true,
      contentType: 'text/plain'
    });

  if (error) {
    console.error("Upload failed:");
    console.error(error);
  } else {
    console.log("Upload successful:", data);
  }
}

testUpload();
