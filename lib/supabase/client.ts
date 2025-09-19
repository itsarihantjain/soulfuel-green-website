import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  // Create a Supabase client for use in the browser.
  // It's recommended to use the singleton pattern for client-side clients
  // to prevent multiple instances and potential issues.
  return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}
