UPDATE MEETING SET Note= "<p style=\"color:red\">Now meeting with 10 people inside and overflow outside</p>" WHERE ROW_ID = 31;

UPDATE MEETING SET NOTE="<p style=\"color:red\">Now meeting outside</p>" WHERE ROW_ID IN (40,41,42,43,44);

UPDATE MEETING SET Note= "<p style=\"color:red\">Now meeting in person</p>" WHERE ROW_ID in (32,33);

UPDATE MEETING SET Note= "<p style=\"color:red\">Now meeting with 10 people inside and overflow outside</p>" WHERE ROW_ID in (20,21);
