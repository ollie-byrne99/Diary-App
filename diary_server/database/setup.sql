DROP TABLE IF EXISTS diaries;

CREATE TABLE diaries (
  diary_id INT GENERATED ALWAYS AS IDENTITY,
  diary_name VARCHAR(50) NOT NULL UNIQUE,
  diary_text VARCHAR(500),
  category VARCHAR(30),
  diary_date TIMESTAMP,
  PRIMARY KEY (diary_id)
);

INSERT INTO diaries
  (diary_name, diary_text, category, diary_date)
VALUES
  ('diary 1', 'diary text1', 'wildest dreams', '2023-08-17 00:00:00'),
  ('diary 2', 'diary text2', 'deepest fear', '2023-08-17 00:00:00'),
  ('diary 3', 'diary text3', 'regrettable choices', '2023-08-17 00:00:00');
