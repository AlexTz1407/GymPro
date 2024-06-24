-- Drop existing tables if they exist
DROP TABLE IF EXISTS `Arme`;
DROP TABLE IF EXISTS `Schultern`;
DROP TABLE IF EXISTS `Brust`;
DROP TABLE IF EXISTS `Bauch`;
DROP TABLE IF EXISTS `BeineVorne`;
DROP TABLE IF EXISTS `Ruecken`;
DROP TABLE IF EXISTS `BeineHinten`;
DROP TABLE IF EXISTS `Po`;
DROP TABLE IF EXISTS `workouts`;
DROP TABLE IF EXISTS `tipps`;
DROP TABLE IF EXISTS `users`;


-- Create table `Arme`
CREATE TABLE `Arme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `Schultern`
CREATE TABLE `Schultern` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `Brust`
CREATE TABLE `Brust` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `Bauch`
CREATE TABLE `Bauch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `BeineVorne`
CREATE TABLE `BeineVorne` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `Ruecken`
CREATE TABLE `Ruecken` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `Po`
CREATE TABLE `Po` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `BeineHinten`
CREATE TABLE `BeineHinten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `ziel` varchar(50) NOT NULL,
  `description1` varchar(500) NOT NULL,
  `description2` varchar(500) NOT NULL,
  `description3` varchar(500) NOT NULL,
  `description4` varchar(500) NOT NULL,
  `path` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `workouts`
CREATE TABLE `workouts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `beschreibung` text NOT NULL,
  `eigenschaften` text NOT NULL,
  `trainingsplanMontag` varchar(50) NOT NULL,
  `trainingsplanDienstag` varchar(50) NOT NULL,
  `trainingsplanMittwoch` varchar(50) NOT NULL,
  `trainingsplanDonnerstag` varchar(50) NOT NULL,
  `trainingsplanFreitag` varchar(50) NOT NULL,
  `trainingsplanSamstag` varchar(50) NOT NULL,
  `trainingsplanSonntag` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Create table `tipps`
CREATE TABLE tipps (
    id INT PRIMARY KEY AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL
);

-- Create table `users`
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);





