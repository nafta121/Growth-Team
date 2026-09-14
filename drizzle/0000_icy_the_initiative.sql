CREATE TABLE `fasilitator` (
	`id` text PRIMARY KEY NOT NULL,
	`firebase_uid` text NOT NULL,
	`nama` text NOT NULL,
	`foto_url` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `fasilitator_firebase_uid_unique` ON `fasilitator` (`firebase_uid`);