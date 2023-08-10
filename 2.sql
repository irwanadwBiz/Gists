 CREATE TABLE employes (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  parent_id INTEGER );
  

INSERT INTO employes VALUE(1, 'zaki', 2);
INSERT INTO employes VALUE(2, 'ilham', null);
INSERT INTO employes VALUE(3, 'irwan', 2);
INSERT INTO employes VALUE(4, 'arka', 2);
INSERT INTO employes VALUE(5, 'ucup', 3);




SELECT e1.id, e1.name, e2.name AS parent_name
FROM employes e1
LEFT JOIN employes e2 ON e1.parent_id = e2.id;