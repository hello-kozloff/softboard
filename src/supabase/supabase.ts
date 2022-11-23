import { createClient } from '@supabase/supabase-js'

const url = process.env.REACT_APP_SUPABASE_URL
const key = process.env.REACT_APP_SUPABASE_ANON_KEY

if (url === undefined || key === undefined) {
  throw new Error('It looks like you forgot to set .env')
}

export const supabase = createClient(url, key)
