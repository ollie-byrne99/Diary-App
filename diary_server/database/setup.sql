DROP TABLE IF EXISTS diaries;

CREATE TABLE diaries (
  diary_id INT GENERATED ALWAYS AS IDENTITY,
  diary_name VARCHAR(50) UNIQUE,
  diary_text VARCHAR(500),
  category VARCHAR(30),
  PRIMARY KEY (diary_id)
);

INSERT INTO diaries
  (diary_name, diary_text, category)
VALUES
  ('diary 1', 'diary text1', 'wildest dreams'), 
  ('diary 2', 'diary text2', 'deepest fear'),
  ('diary 3', 'diary text3', 'regrettable choices');
