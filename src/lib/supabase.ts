import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
	'https://qlabwgvmtvntotaocsda.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsYWJ3Z3ZtdHZudG90YW9jc2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjczMjYyMjQsImV4cCI6MjA0MjkwMjIyNH0.FH8Uhi5ywwNGd_v6qm--LZfM2DYbrzORZa0dj5-xboM'
)
