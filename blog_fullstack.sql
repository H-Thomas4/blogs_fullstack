use blogs;


INSERT INTO authors (name, email) Value ('NAS', 'MicdropNAS@test.com'),
('Lauryn Hill', 'MiseducationLH@test.com'),
('Alicia Keys', 'DiaryinAminor@test.com'),
('Prince', 'redcorvette@test.com'),
('Bruno Mars', 'Amazing24k@test.com'),
('Billie Ellish', 'LovelyBadgirl@test.com');
INSERT INTO blogs (title, content, authorid) VALUE ('TEST blog Title', 'TEST blog Content', 1);
INSERT INTO tags (name) VALUE ('Test tag LOL');
INSERT INTO blogtags (blogid, tagid) VALUE (1, 1);

SELECT * FROM authors;
SELECT * FROM blogs;
SELECT * FROM tags;
SELECT * FROM blogtags;


