<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Simple To-Do List</title>
</head>
<body>
  <h3>To-Do List</h3>

  <input id="taskInput" type="text" placeholder="Enter a task">
  <button onclick="addTask()">Add</button>

  <ul id="list"></ul>

  <script>
    function addTask() {
      let input = document.getElementById("taskInput");
      let text = input.value.trim();
      if (text === "") return;

      let li = document.createElement("li");
      li.textContent = text;

      // click to mark done
      li.onclick = () => {
        li.style.textDecoration =
          li.style.textDecoration === "line-through" ? "" : "line-through";
      };

      document.getElementById("list").appendChild(li);
      input.value = "";
    }
  </script>
</body>
</html>
