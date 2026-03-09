# Departments Setup Guide

This guide explains how to set up the dynamic departments system.

## Setup Steps

### 1. Create the Departments Table in Supabase

Run the SQL script in your Supabase SQL Editor:

```bash
# The SQL file is located at:
scripts/departments-schema.sql
```

This will:
- Create the `departments` table
- Set up indexes for performance
- Enable Row Level Security (RLS)
- Create policies for access control
- Insert the initial 8 departments

### 2. Verify the Setup

After running the SQL script, verify in your Supabase dashboard:
- Go to Table Editor
- Check that the `departments` table exists
- Verify that 8 departments are present with status 'active'

### 3. Access the Admin Interface

Navigate to your admin panel:
```
/admin/departments
```

## Features

### Admin Capabilities
- ✅ Create new departments
- ✅ Edit existing departments
- ✅ Delete departments
- ✅ Set department order
- ✅ Activate/deactivate departments
- ✅ Loading states and toast notifications

### Department Fields
- **Name**: Display name (e.g., "Engineering Team")
- **Key**: Unique identifier (e.g., "engineering") - lowercase, numbers, and hyphens only
- **Description**: Optional description
- **Status**: active/inactive
- **Order Index**: Controls display order

### Integrated Pages
The departments are now synchronized across:
- ✅ Admin Departments page (`/admin/departments`)
- ✅ Admin Team Members page (`/admin/team-members`)
- ✅ About Team page (`/about#team`)
- ✅ Job Positions page (department filtering)

### API Endpoints

**GET /api/departments**
- Query param: `?active=true` for active departments only
- Returns all departments ordered by `order_index`

**POST /api/departments** (Admin only)
- Create a new department
- Requires: `name`, `key`

**PUT /api/departments/[id]** (Admin only)
- Update an existing department
- Note: `key` cannot be changed after creation

**DELETE /api/departments/[id]** (Admin only)
- Delete a department
- Warning: May affect team members assigned to this department

## Notes

- Department keys are unique and cannot be changed after creation
- Deleting a department doesn't automatically remove team member assignments
- Only active departments appear in public-facing pages
- All departments are visible in admin pages

## Default Departments

The system comes with 8 pre-configured departments:
1. Founder & Visionary (founder)
2. Leadership Team (leadership)
3. Finance (financial)
4. Engineering Team (engineering)
5. Marketing Team (marketing)
6. Design Team (product)
7. Customer Success (customer)
8. Office Assistant (assistant)

You can modify or delete these as needed through the admin interface.
