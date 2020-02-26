CREATE TABLE Employees (
  "staff_seq_number" int PRIMARY KEY,
  "staff_number" int,
  "first_name" VARCHAR(225),
  "last_name" VARCHAR(225),
  "email" VARCHAR(225),
  "phone_number" VARCHAR(225),
  "avatar_img" VARCHAR(225),
  "doj" date,
  "user_type_id" int,
  "is_active" bool,
  "role_id" int
);

Create Table Roles
(
  "role_id" int,
  "role_name" varchar(50),
  "description" varchar(225)
);

CREATE TABLE UserType (
  "user_type_id" int PRIMARY KEY,
  "name" VARCHAR(225),
  "description" VARCHAR(225)
);

CREATE TABLE Plan (
  "plan_id" int PRIMARY KEY,
  "gd_id" int,
  "pm_id" int,
  "start_date" date,
  "end_date" date,
  "stream" varchar(225),
  "number_of_rotations" int,
  "modified_by" bigint,
  "modified_at" date,
  "created_by" bigint,
  "created_at" date,
  "is_active" bool
);

CREATE TABLE Courses (
  "course_id" int PRIMARY KEY,
  "name" VARCHAR(225),
  "description" VARCHAR(225),
  "url" VARCHAR(225)
);

CREATE TABLE Rotation (
  "rotation_id" int PRIMARY KEY,
  "name" VARCHAR(225),
  "description" VARCHAR(225),
  "start_date" date,
  "end_date" date,  
  "lm_id" int,
  "plan_id" int,
  "modified_by" bigint,
  "modified_at" date,
  "created_by" bigint,
  "created_at" date,
  -- "rotation_type_id" int,
  "is_active" bool
);

CREATE TABLE RotationType (
  "rotation_type_id" int PRIMARY KEY,
  "name" VARCHAR(225),
  "description" VARCHAR(225)
);

CREATE TABLE Projects (
  "project_id" int PRIMARY KEY,
  "name" VARCHAR(225),
  "description" VARCHAR(225),
  "rotation_id" int,
  "start_date" date,
  "end_date" date
);

CREATE TABLE TaskList (
  "task_list_id" int PRIMARY KEY,
  "rotation_id" int
);

CREATE TABLE Task (
  "taskId" int PRIMARY KEY,
  "task_list_id" int,
  "name" VARCHAR(225),
  "description" VARCHAR(225),
  "due_date" date,
  "task_status" bool,
  "attachment_url" VARCHAR(225)
);

CREATE TABLE TipOfTheDay (
  "tip_id" int PRIMARY KEY,
  "name" VARCHAR(225),
  "description" VARCHAR(225)
);

CREATE TABLE FAQ (
  "faq_id" int PRIMARY KEY,
  "question" VARCHAR(225),
  "answer" VARCHAR(225),
  "faq_cat_id" int
);

CREATE TABLE FAQType (
  "faq_cat_id" int PRIMARY KEY,
  "description" VARCHAR(225)
);

CREATE TABLE Notifications (
  "notification_id" int PRIMARY KEY,
  "receiver_id" int,
  "type" VARCHAR(225),
  "sent_at" date,
  "template_id" int
);

CREATE TABLE NotificationTemplate (
  "template_id" int PRIMARY KEY,
  "title" VARCHAR(225),
  "template" VARCHAR(225)
);

CREATE TABLE Documents (
  "doc_id" int PRIMARY KEY,
  "qr_id" int,
  "doc_type" VARCHAR(225),
  "doc_name" VARCHAR(225),
  "doc_url" VARCHAR(225),
  "uploaded_by" int,
  "uploaded_on" date
);

ALTER TABLE Employees ADD FOREIGN KEY ("user_type_id") REFERENCES UserType ("user_type_id");

ALTER TABLE Rotation ADD FOREIGN KEY ("rotation_type_id") REFERENCES RotationType ("rotation_type_id");

ALTER TABLE Rotation ADD FOREIGN KEY ("plan_id") REFERENCES Plan ("plan_id");

ALTER TABLE Projects ADD FOREIGN KEY ("rotation_id") REFERENCES Rotation ("rotation_id");

ALTER TABLE Task ADD FOREIGN KEY ("task_list_id") REFERENCES TaskList ("task_list_id");

ALTER TABLE TaskList ADD FOREIGN KEY ("rotation_id") REFERENCES Rotation ("rotation_id");

ALTER TABLE FAQ ADD FOREIGN KEY ("faq_cat_id") REFERENCES FAQType ("faq_cat_id");

ALTER TABLE Notifications ADD FOREIGN KEY ("template_id") REFERENCES NotificationTemplate ("template_id");

ALTER TABLE Plan ADD FOREIGN KEY ("gd_id") REFERENCES Employees ("qr_id");

ALTER TABLE Documents ADD FOREIGN KEY ("qr_id") REFERENCES Employees ("qr_id");
