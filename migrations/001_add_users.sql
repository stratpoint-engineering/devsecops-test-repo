-- Test migration
ALTER TABLE users DROP COLUMN old_field;
ALTER TABLE users ADD COLUMN new_field VARCHAR(255);
