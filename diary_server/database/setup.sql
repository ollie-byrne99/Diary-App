DROP TABLE IF EXISTS diaries;

CREATE TABLE diaries (
  diary_id INT GENERATED ALWAYS AS IDENTITY,
  diary_name VARCHAR(50)
)

INSERT INTO diaries
  (diary_name)
VALUES
  ('diary 1')
