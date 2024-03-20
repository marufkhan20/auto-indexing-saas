const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://htlrpsnpxgqhezhazthq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0bHJwc25weGdxaGV6aGF6dGhxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjM0MjY4MywiZXhwIjoyMDE3OTE4NjgzfQ.YEQHqWn5ucJo8Afv-AUUpzTnFInm1gHJKt3Pj6jY47c";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
