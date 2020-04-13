CREATE TABLE HOME_GROUP (
    ROW_ID INT NOT NULL PRIMARY KEY,
    GROUP_NM varchar(50) NOT NULL,
    LOC_NM varchar(100) NOT NULL,
    ADDR_L1 varchar(256), 
    ADDR_L2 varchar(256),
    CITY varchar(100),
    ST varchar(2),
    ZIP varchar(5),  
    HANDICAP boolean,
    NOTE varchar(250)
);

CREATE TABLE MEETING (
    ROW_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    HOME_GROUP_ID INT,
    DY VARCHAR(10),
    M_TIME VARCHAR(10),
    M_TYPE VARCHAR(10),
    M_TOPIC VARCHAR(30),
    NOTE varchar(250)
);

INSERT INTO HOME_GROUP 
VALUES
    (1,'Back to Basics', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, ''),
    (2,'Bill W. Group', 'St. Matthew Church', '4026 Macon Rd', '', 'Columbus', 'GA', '31907',true, ''),
    (3,'College Step Study','Reedemer Lutheran Church', '4700 Armour Rd', '', 'Columbus', 'GA', '31904',true, ''),
    (4,'Daily Reprieve Group', 'Triange Club', '2210 4th St', '', 'Phenix City', 'AL', '36867', true, ''),
    (5, 'Downtown Group', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, ''),
    (6, 'Early Bird Group', 'The Bradley Center', '2000 16th Ave', '', 'Columbus', 'GA', '31901', true, ''),
    (7, 'East Highland Group', 'East Highland Methodist Church', '1301 17th St.', '', 'Columbus', 'GA', '31901', false, ''),
    (8, 'Edgewood Group', 'Edgewood Presbyterian Church', '3617 Macon Rd', '', 'Columbus', 'GA', '31909', true,''),
    (9, 'Fountain City Group', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, ''),
    (10, 'Happy Group Group', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, ''),
    (11, 'Just AA Group', 'St. Thomas Church', '2100 Hilton Ave', '', 'Columbus', 'GA', '31906',true, 'In back of church'),
    (12, 'Keep it Simple', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, ''),
    (13, 'Moon Road Group', 'Central Christian Church', '7755 Moon Rd', '', 'Columbus', 'GA', '31909', true, ''),
    (14, 'Serenity Group', '', '1613 14th Ave','', 'Phenix City', 'AL', '36870', true, ''),
    (15, 'South Columbus Group', 'Carver Height Presbyterian Church Annex', '800 32nd Ave', '', 'Columbus', 'GA', '31906', true,''),
    (16, 'Changing Times Meeting', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, 'Not Registered with GSO'),
    (17, 'Cut Bait Meeting', 'Triangle Club', '2210 4th Ave', '', 'Phenix City', 'AL', '36867', true, 'Not Registered with GSO'),
    (18, 'Easy Does It', 'Epworth United Methodist Church', '2400 Devonshire Dr','', 'Columbus', 'GA', '31904', true, 'Not Registered with GSO'),
    (19, 'Lunchtime Discussion Meeting', 'Agape Center', '214 8th St', '', 'Columbus', 'GA', '31901',true, 'Not Registered with GSO'),
    (20, 'Piney Grove Baptist Church Meeting', '', '20 Highway 315', '','Fortson', 'GA', '31808', false,'Not Registered with the GSO'),
    (21, 'Upper Room Meeting', 'Iron Bank Coffee', '6 West 11th St', '', 'Columbus', 'GA', '31901', false,'Not Registered with the GSO'),
    (22, 'Sober AF', 'East Highland Methodist Church', '1301 17th St', '','Columbus', 'GA', '31901', false, 'Not Registered with the GSO');


    ROW_ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    HOME_GROUP_ID INT,
    DY VARCHAR(10),
    M_TIME TIME,
    M_TYPE VARCHAR(10),
    M_TOPIC VARCHAR(30),
    NOTE varchar(250)


INSERT INTO MEETING(HOME_GROUP_ID, DY, M_TIME, M_TYPE, M_TOPIC, NOTE) VALUES 
    (1,'Wednesday', '8:00 PM', 'Closed', 'Discussion', ''),
    (1, 'Thursday', '8:00 PM', 'Open', 'Discussion', ''),
    (2, 'Monday', '8:00 PM', 'Closed', 'Discussion', ''),
    (2, 'Thursday', '8:00 PM', 'Closed', 'Discussion', 'Last Thursday is an Open Speaker meeting'),
    (3, 'Sunday', '6:30 PM', 'Closed', 'Discussion', 'Last Sunday Meeting is an Open Speaker meeting at 6:00pm'),
    (3, 'Wednesday', '7:00 PM', 'Closed', 'Steps', 'Last Wednesday topic is a Traditions Meeting'),
    (3, 'Thursday', '6:30 PM', 'Closed', 'Discussion', 'Men Only'),
    (3, 'Thursday', '6:30 PM', 'Closed', 'Discussion', 'Women Only'),
    (3, 'Saturday', '9:30 AM', 'Closed', 'Big Book', ''),
    (3, 'Saturday', '9:30 PM', 'Closed', 'Discussion', ''),
    (4, 'Wednesday', '8:00 PM', 'Open', '',''),
    (4, 'Friday', '8:00 PM', 'Open', '',''),
    (5, 'Sunday', '8:00 PM', 'Open', 'Grapevine',''),
    (5, 'Tuesday', '8:00 PM', 'Open', 'Discussiom',''),
    (5, 'Saturday', '8:00 PM', 'Open', 'Discussion and Literature',''),
    (6, 'Monday', '7:30 AM', 'Open', 'Step', ''),
    (6, 'Wednesday', '7:30 AM', 'Open', 'Big Book', ''),
    (6, 'Friday', '7:30 AM', 'Open', 'Discussion', 'Last Friday Speaker Meeting'),
    (6, 'Saturday', '7:30 AM', 'Open', 'Discussion', '');
