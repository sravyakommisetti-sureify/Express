/* Replace with your SQL commands */
ALTER TABLE IF EXISTS user_info
DROP CONSTRAINT  user_info_pkey CASCADE, 
 ADD PRIMARY KEY(email);