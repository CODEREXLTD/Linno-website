-- Departments Table Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS departments (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    key TEXT NOT NULL UNIQUE,
    description TEXT,
    icon TEXT,
    order_index INTEGER DEFAULT 0,
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on key for faster lookups
CREATE INDEX IF NOT EXISTS idx_departments_key ON departments(key);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_departments_status ON departments(status);

-- Create index on order_index for sorting
CREATE INDEX IF NOT EXISTS idx_departments_order ON departments(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to active departments
CREATE POLICY "Allow public read access to active departments"
ON departments FOR SELECT
USING (status = 'active');

-- Policy: Allow authenticated users to read all departments
CREATE POLICY "Allow authenticated users to read all departments"
ON departments FOR SELECT
TO authenticated
USING (true);

-- Policy: Allow authenticated users to insert departments
CREATE POLICY "Allow authenticated users to insert departments"
ON departments FOR INSERT
TO authenticated
WITH CHECK (true);

-- Policy: Allow authenticated users to update departments
CREATE POLICY "Allow authenticated users to update departments"
ON departments FOR UPDATE
TO authenticated
USING (true);

-- Policy: Allow authenticated users to delete departments
CREATE POLICY "Allow authenticated users to delete departments"
ON departments FOR DELETE
TO authenticated
USING (true);

-- Insert default departments
INSERT INTO departments (id, name, key, order_index, status) VALUES
    ('dept-1', 'Founder & Visionary', 'founder', 1, 'active'),
    ('dept-2', 'Leadership Team', 'leadership', 2, 'active'),
    ('dept-3', 'Finance', 'financial', 3, 'active'),
    ('dept-4', 'Engineering Team', 'engineering', 4, 'active'),
    ('dept-5', 'Marketing Team', 'marketing', 5, 'active'),
    ('dept-6', 'Design Team', 'product', 6, 'active'),
    ('dept-7', 'Customer Success', 'customer', 7, 'active'),
    ('dept-8', 'Office Assistant', 'assistant', 8, 'active')
ON CONFLICT (key) DO NOTHING;
