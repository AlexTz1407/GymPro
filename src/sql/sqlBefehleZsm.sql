-- Drop existing tables if they exist
DROP TABLE IF EXISTS `arme`;
DROP TABLE IF EXISTS `schultern`;
DROP TABLE IF EXISTS `brust`;
DROP TABLE IF EXISTS `bauch`;
DROP TABLE IF EXISTS `beine`;
DROP TABLE IF EXISTS `ruecken`;
DROP TABLE IF EXISTS `po`;
DROP TABLE IF EXISTS `workouts`;
DROP TABLE IF EXISTS `tipps`;
DROP TABLE IF EXISTS `users`;

-- Create table `arme`
CREATE TABLE `arme` (
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

-- Create table `schultern`
CREATE TABLE `schultern` (
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

-- Create table `brust`
CREATE TABLE `brust` (
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

-- Create table `bauch`
CREATE TABLE `bauch` (
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

-- Create table `beine`
CREATE TABLE `beine` (
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

-- Create table `ruecken`
CREATE TABLE `ruecken` (
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

-- Create table `po`
CREATE TABLE `po` (
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

-- Daten für Tabelle `arme` 
INSERT INTO `arme` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Bizepscurls', 'Arm-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe aufrecht und halte die Hantel in jeder Hand.', 'Ausführung: Beuge deine Ellenbogen und bringe die Hanteln zu deinen Schultern. Senke sie langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Schwung. Steigere das Gewicht schrittweise.', '/images/Arme/bizepscurls.png'),
(2, 'Trizepdrücken', 'Arm-Übungen', 'Vorbereitung: Wähle ein angemessenes Gewicht (Kurzhantel) und halte sie bereit.', 'Positionierung: Setze dich auf eine Bank oder stehe aufrecht, die Füße schulterbreit auseinander. Halte die Hantel mit beiden Händen über den Kopf, die Arme gestreckt, die Handflächen nach oben zeigend.', 'Ausführung: Beuge die Ellbogen und senke die Hantel hinter den Kopf, bis die Unterarme parallel zum Boden sind. Strecke die Arme langsam wieder, um die Hantel in die Ausgangsposition zurückzubringen..', 'Sicherheitshinweise: Halte den Rücken gerade und die Ellbogen nah am Kopf, um den Trizeps optimal zu beanspruchen und Verletzungen zu vermeiden.', '/images/Arme/trizepsdruecken.png'),
(3, 'Hammercurls', 'Arm-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe aufrecht und halte die Hantel in jeder Hand mit den Handflächen zueinander.', 'Ausführung: Beuge deine Ellenbogen und bringe die Hanteln zu deinen Schultern. Senke sie langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Schwung. Steigere das Gewicht schrittweise.', '/images/Arme/bizeps-hammercurls.png');

-- Daten für Tabelle `schultern` 
INSERT INTO `schultern` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Schulterdrücken', 'Schulter-Übungen', 'Vorbereitung: Wärme dich auf und wähle ein geeignetes Fitnessband.', 'Positionierung: Stelle dich hüftbreit auf das Band, halte die Griffe auf Schulterhöhe mit den Handflächen nach vorne. Knie leicht gebeugt, Rücken gerade.', 'Ausführung: Drücke die Griffe langsam nach oben, bis die Arme gestreckt sind. Senke sie langsam auf Schulterhöhe ab. Wiederhole gleichmäßig.', 'Sicherheitshinweise: Halte das Band unter Kontrolle. Achte auf einen geraden Rücken und leicht gebeugte Knie. Steigere die Spannung des Bands langsam.', '/images/Schultern/Schulterdrücken.png'),
(2, 'Seitheben', 'Schulter-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe aufrecht, halte die Hanteln an deinen Seiten.', 'Ausführung: Hebe die Hanteln seitlich bis auf Schulterhöhe und senke sie langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Schwung. Steigere das Gewicht schrittweise.', '/images/Schultern/Schulterdrückenhanteln.png'),
(3, 'Frontheben', 'Schulter-Übungen', 'Vorbereitung: Wärme dich auf und wähle das passende Gewicht.', 'Positionierung: Stelle dich hüftbreit hin, halte die Hanteln fest mit den Handflächen nach vorne. Knie leicht gebeugt, Rücken gerade, Blick nach vorne.', 'Ausführung: Hebe die Hanteln langsam und kontrolliert, bis die Arme gestreckt sind. Senke sie dann langsam, bis die Oberarme parallel zum Boden sind. Wiederhole gleichmäßig.', 'Sicherheitshinweise: Halte die Hanteln unter Kontrolle. Achte auf einen geraden Rücken und leicht gebeugte Knie. Steigere das Gewicht langsam.', '/images/Schultern/arnold-press.png');

-- Daten für Tabelle `brust` 
INSERT INTO `brust` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Liegestütze', 'Brust-Übungen', 'Vorbereitung: Wärme dich auf und finde eine flache Oberfläche.', 'Positionierung: Lege dich flach auf den Boden, platziere deine Hände schulterbreit und strecke deine Beine aus.', 'Ausführung: Drücke deinen Körper nach oben, bis deine Arme gestreckt sind, und senke dich langsam ab.', 'Sicherheitshinweise: Halte deinen Körper gerade und vermeide ein Durchhängen. Steigere die Intensität schrittweise.', '/images/Brust/liegestütz.png'),
(2, 'Arnold  Dips', 'Brust-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht, wenn du Zusatzgewichte verwendest.', 'Positionierung: Stelle dich vor eine Bank und versuche dich mit deinem Rücken zur Bank hinzusetzen.', 'Ausführung: Drücke dich von der Bank aus deiner Postition nach Oben und Wiederhole die Ausführung.', 'Sicherheitshinweise: Achte auf eine richtige Körperhaltung und ausführung. ', '/images/Brust/dips.png'),
(3, 'Bankdrücken', 'Brust-Übungen', 'Vorbereitung: Wärme dich auf und finde eine flache Bank sowie ein Paar Kurzhanteln.', 'Positionierung: Lege dich auf eine flache Bank und halte die Kurzhanteln über der Brust, die Handflächen zeigen nach vorne.', 'Ausführung: Senke die Kurzhanteln langsam bis auf Brusthöhe und drücke sie dann wieder nach oben. Wiederhole diesen Vorgang.', 'Sicherheitshinweise: Halte deinen Rücken flach auf der Bank und vermeide ein Hohlkreuz. Achte darauf, die Bewegungen kontrolliert und gleichmäßig auszuführen.', '/images/Brust/bankdruecken.png');

-- Daten für Tabelle `bauch` 
INSERT INTO `bauch` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Crunches', 'Bauch-Übungen', 'Vorbereitung: Wärme dich auf und lege eine Matte auf den Boden.', 'Positionierung: Lege dich auf den Rücken, beuge deine Knie und platziere deine Hände hinter deinem Kopf.', 'Ausführung: Hebe deinen Oberkörper an, indem du deine Bauchmuskeln anspannst, und senke dich langsam ab.', 'Sicherheitshinweise: Vermeide es, am Kopf zu ziehen, und halte den unteren Rücken auf dem Boden. Steigere die Intensität schrittweise.', '/images/Bauch/crunches.png'),
(2, 'Bauchpresse-Maschine', 'Bauch-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht aus.', 'Positionierung: Setze dich auf die Maschine und platziere deine Füße unter den Polstern.', 'Ausführung: Ziehe das Polster in Richtung deiner Knie, indem du deine Bauchmuskeln anspannst. Lasse das Polster kontrolliert wieder hoch.', 'Sicherheitshinweise: Halte deinen Rücken gerade und vermeide ruckartige Bewegungen. Steigere das Gewicht schrittweise.', '/images/Bauch/bauchpresse-maschine.png'),
(3, 'Sit-Ups auf Negativbank', 'Bauch-Übungen', 'Vorbereitung: Wärme dich auf und stelle die Negativbank ein.', 'Positionierung: Lege dich auf die Negativbank, hake deine Füße unter die Polster.', 'Ausführung: Hebe deinen Oberkörper an, indem du deine Bauchmuskeln anspannst, und senke dich langsam wieder ab.', 'Sicherheitshinweise: Halte deinen Rücken gerade und vermeide Schwung. Steigere die Intensität schrittweise.', '/images/Bauch/situps-negativbank.png');

-- Daten für Tabelle `beine` 
INSERT INTO `beine` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Wadenheben', 'Beine-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe aufrecht, halte die Hanteln an deinen Seiten oder nutze eine Wadenhebemaschine.', 'Ausführung: Hebe deine Fersen an, so hoch wie möglich, und senke sie langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide ein Überdehnen. Steigere das Gewicht schrittweise.', '/images/Beine/wadenheben.png'),
(2, 'Kniebeugen', 'Beine-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe schulterbreit, halte die Hanteln an deinen Seiten oder eine Langhantel auf deinen Schultern.', 'Ausführung: Beuge deine Knie und senke deinen Körper, als würdest du dich hinsetzen. Drücke dich zurück in die Ausgangsposition.', 'Sicherheitshinweise: Halte den Rücken gerade und die Knie hinter den Zehen. Steigere das Gewicht schrittweise.', '/images/Beine/kniebeugen.png'),
(3, 'Beinpresse', 'Beine-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Setze dich in die Beinpresse und platziere deine Füße schulterbreit auf der Plattform.', 'Ausführung: Drücke die Plattform weg und senke sie langsam ab.', 'Sicherheitshinweise: Halte den Rücken gegen das Polster und vermeide ein Durchhängen. Steigere das Gewicht schrittweise.', '/images/Beine/beinpressen.png');

-- Daten für Tabelle `ruecken` 
INSERT INTO `ruecken` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Rudern', 'Rücken-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe leicht gebeugt, halte die Hantel mit beiden Händen oder benutze ein Rudergerät.', 'Ausführung: Ziehe die Hantel zur Brust oder ziehe den Griff des Rudergeräts zu dir und senke langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Schwung. Steigere das Gewicht schrittweise.', '/images/Ruecken/rudern.png'),
(2, 'Latzug', 'Rücken-Übungen', 'Vorbereitung: Wärme dich auf und stelle das richtige Gewicht am Latzuggerät ein.', 'Positionierung: Setze dich auf das Latzuggerät, halte die Stange mit einem weiten Griff über Kopf.', 'Ausführung: Ziehe die Stange zur Brust, indem du deine Schulterblätter zusammenziehst. Lasse die Stange kontrolliert wieder hoch.', 'Sicherheitshinweise: Halte deinen Rücken gerade und vermeide Schwung. Steigere das Gewicht schrittweise.', '/images/Ruecken/latzug.png'),
(3, 'Kreuzheben', 'Rücken-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe schulterbreit, halte die Langhantel vor deinen Schienbeinen.', 'Ausführung: Hebe die Hantel, indem du deine Hüften streckst und den Rücken gerade hältst. Senke die Hantel langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Rundungen. Steigere das Gewicht schrittweise.', '/images/Ruecken/kreuzheben.png');

-- Daten für Tabelle `po` 
INSERT INTO `po` (`id`, `name`, `ziel`, `description1`, `description2`, `description3`, `description4`, `path`) VALUES
(1, 'Ausfallschritt', 'Po-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe aufrecht und mache einen großen Schritt nach vorne.', 'Ausführung: Senke deinen Körper, bis dein hinteres Knie fast den Boden berührt. Drücke dich zurück in die Ausgangsposition.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide ein Überdehnen. Steigere das Gewicht schrittweise.', '/images/Po/ausfallschritt.png'),
(2, 'Kreuzheben Langhantel', 'Po-Übungen', 'Vorbereitung: Wärme dich auf und wähle das richtige Gewicht.', 'Positionierung: Stehe schulterbreit, halte die Langhantel vor deinen Schienbeinen.', 'Ausführung: Hebe die Hantel, indem du deine Hüften streckst und den Rücken gerade hältst. Senke die Hantel langsam ab.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Rundungen. Steigere das Gewicht schrittweise.', '/images/Po/Kreuzhebenlanghantel.png'),
(3, 'Aufsteiger', 'Po-Übungen', 'Vorbereitung: Wärme dich auf und wähle eine stabile Bank.', 'Positionierung: Stelle einen Fuß auf die Bank, halte deinen Körper aufrecht.', 'Ausführung: Drücke dich mit dem Fuß auf der Bank nach oben, bis das Bein gestreckt ist. Senke dich langsam ab und wechsle das Bein.', 'Sicherheitshinweise: Halte den Rücken gerade und vermeide Schwung. Steigere die Intensität schrittweise.', '/images/Po/steps.png');

-- Insert data into `workouts`
INSERT INTO `workouts` (`id`, `created`, `name`, `beschreibung`, `eigenschaften`, `trainingsplanMontag`, `trainingsplanDienstag`, `trainingsplanMittwoch`, `trainingsplanDonnerstag`, `trainingsplanFreitag`, `trainingsplanSamstag`, `trainingsplanSonntag`) VALUES
(1, 'free', 'Ganzkörpertraining', 'Beim Ganzkörpertraining werden an jedem Trainingstag alle großen Muskelgruppen trainiert. Die Übungen sind so ausgewählt, dass sie den gesamten Körper beanspruchen, beispielsweise durch Übungen wie Kniebeugen, Bankdrücken und Klimmzüge. Diese Trainingsmethode ist besonders für Anfänger geeignet, da sie eine gute Grundlage für die gesamte Körperkraft und -muskulatur bietet.', 'Effizienz: Da der gesamte Körper an jedem Trainingstag trainiert wird, ist diese Methode sehr zeiteffizient und ideal für Personen mit einem vollen Zeitplan. Gleichmäßige Muskelentwicklung: Durch das regelmäßige Training aller Muskelgruppen wird ein ausgeglichenes Muskelwachstum gefördert. Erholung: Die Ruhetage zwischen den Trainingseinheiten ermöglichen ausreichende Erholung und reduzieren das Risiko von Übertraining und Verletzungen.', 'Ganzkörpertraining', 'Erholung', 'Ganzkörpertraining', 'Erholung', 'Ganzkörpertraining', 'Erholung', 'Erholung'),
(2, 'free', 'Push/Pull/Beine-Split', 'Das Push/Pull/Beine-Split-Training teilt den Körper in drei Hauptbewegungsmuster: Drücken (Push), Ziehen (Pull) und Beine. An jedem Trainingstag wird eine dieser Kategorien intensiv trainiert. Diese Methode ist besonders für Fortgeschrittene geeignet, die eine gezielte Muskelentwicklung und Intensitätssteigerung anstreben.', 'Spezialisierung: Durch die Aufteilung in spezifische Bewegungsmuster können Übungen gezielt auf die entsprechenden Muskelgruppen abgestimmt werden, was zu einer besseren Muskelentwicklung führt. Höhere Trainingsfrequenz: Jede Muskelgruppe wird zweimal pro Woche trainiert, was eine höhere Trainingsfrequenz und somit potenziell schnelleres Muskelwachstum ermöglicht. Ausreichende Erholung: Die Muskelgruppen haben zwischen den Trainingseinheiten ausreichend Zeit zur Erholung, was das Verletzungsrisiko verringert.', 'Push (Brust, Schultern, Trizeps)', 'Pull (Rücken, Bizeps)', 'Beine (Quadrizeps, Hamstrings)', 'Erholung', 'Push (Brust, Schultern, Trizeps)', 'Pull (Rücken, Bizeps)', 'Beine (Quadrizeps, Hamstrings)'),
(3, 'free', 'Oberkörper/Unterkörper-Split', 'Beim Oberkörper/Unterkörper-Split-Training wird der Körper in zwei Hauptbereiche aufgeteilt: den Oberkörper und den Unterkörper. Diese Methode wird typischerweise viermal pro Woche durchgeführt, wobei an jedem Trainingstag entweder der Ober- oder der Unterkörper trainiert wird. Diese Methode eignet sich für Fortgeschrittene, die ihre Trainingsintensität steigern und spezifische Muskelgruppen gezielt entwickeln möchten.', 'Ausgewogene Entwicklung: Durch die gezielte Trennung von Ober- und Unterkörper wird eine gleichmäßige Muskelentwicklung gefördert. Erhöhte Trainingsintensität: Da nur ein Teil des Körpers pro Trainingseinheit trainiert wird, kann jede Muskelgruppe intensiver und mit höherem Volumen belastet werden. Flexibilität: Diese Methode bietet Flexibilität in der Trainingsgestaltung und kann leicht an individuelle Bedürfnisse und Ziele angepasst werden.', 'Oberkörper', 'Unterkörper', 'Erholung', 'Oberkörper', 'Unterkörper', 'Erholung', 'Erholung'),
(4, 'AlexTz', 'Alex Ganzkörper-Kraftplan', 'Dieser Trainingsplan konzentriert sich auf Ganzkörper-Krafttraining, das darauf abzielt, die gesamte Muskelmasse zu erhöhen und die allgemeine Fitness zu verbessern. Ideal für Personen, die eine umfassende Muskelstärkung anstreben.', 'Ausgewogene Belastung: Jede Trainingseinheit umfasst Übungen für Oberkörper, Unterkörper und Rumpf, um eine ausgewogene Muskelentwicklung zu gewährleisten. Progressive Überlastung: Durch schrittweise Erhöhung der Trainingsintensität und des Volumens wird die Muskelkraft kontinuierlich gesteigert. Erholungsphasen: Ausreichende Erholung zwischen den Trainingseinheiten fördert die Regeneration und minimiert das Verletzungsrisiko.', 'Ganzkörper (Kniebeugen, Bankdrücken)', 'Erholung oder Cardio', 'Ganzkörper (Kreuzheben, Drücken)', 'Erholung oder Yoga', 'Ganzkörper (Ausfallschritte, Dips)', 'Erholung oder Wandern', 'Erholung oder aktiv'),
(5, 'Ekrem', 'Ekrem Functional Fitness Plan', 'Dieser Trainingsplan legt den Schwerpunkt auf funktionelle Fitness, um die alltägliche Beweglichkeit und Stärke zu verbessern. Geeignet für alle, die ihre sportliche Leistungsfähigkeit und körperliche Belastbarkeit erhöhen möchten.', 'Vielseitiges Training: Kombination von Kraft-, Ausdauer- und Beweglichkeitsübungen zur Förderung einer umfassenden Fitness. Core-Fokus: Spezielle Übungen zur Stärkung der Rumpfmuskulatur, die die Stabilität und Balance verbessern. Flexibilität und Mobilität: Integration von Dehnübungen und Mobility-Workouts zur Verbesserung der Beweglichkeit.', 'Functional Strength (Kettlebell)', 'Core & Mobility (Planks, Yoga)', 'Functional Endurance (Burpees)', 'Active Recovery (Cardio)', 'Full-Body Circuit (Squats)', 'HIIT (Sprints, Jump Squats)', 'Rest Day or Stretching');

-- Daten für Tabelle `tipps`
INSERT INTO `tipps` (`text`) VALUES
('Trinke ausreichend Wasser während des Trainings, um hydratisiert zu bleiben.'),
('Mache regelmäßige Pausen, um deinem Körper Zeit zur Erholung zu geben.'),
('Verwende Nahrungsergänzungsmittel wie Proteinpulver, um deine Muskelerholung zu unterstützen.'),
('Achte darauf, vor dem Training eine ausgewogene Mahlzeit zu dir zu nehmen, um genügend Energie zu haben.');