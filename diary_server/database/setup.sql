DROP TABLE IF EXISTS diaries;

CREATE TABLE diaries (
  diary_id INT GENERATED ALWAYS AS IDENTITY,
  diary_name VARCHAR(50) NOT NULL UNIQUE,
  diary_text VARCHAR(500),
  category VARCHAR(30),
  category VARCHAR(30)
  diary_date DATETIME,
  PRIMARY KEY (diary_id)
);

INSERT INTO diaries
  (diary_name, diary_text, category, diary_datetime)
VALUES
  ('diary 1', 'diary text1', 'wildest dreams'), 
  ('diary 2', 'diary text2', 'deepest fear'),
  ('diary 3', 'diary text3', 'regrettable choices');
